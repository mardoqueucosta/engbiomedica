import Link from 'next/link';
import { notFound } from 'next/navigation';
import DOMPurify from 'isomorphic-dompurify';
import { PageHeader } from '@/components/ui/PageHeader';
import { Badge } from '@/components/ui/Badge';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { slugs, artigosMetaMap, getArtigo } from '@/data/artigos';
import { artigosMeta, type ArtigoMeta } from '@/data/artigos/metadata';
import { extractFaqItems } from '@/lib/extract-faq';
import { RelatedArticles } from '@/components/ui/RelatedArticles';
import { knownEntities } from '@/data/entities';
import blurData from '@/data/blur-data.json';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/<[^>]+>/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function extractHeadings(html: string): { id: string; text: string }[] {
  const regex = /<h2[^>]*>(.*?)<\/h2>/gi;
  const headings: { id: string; text: string }[] = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    const text = match[1].replace(/<[^>]+>/g, '').trim();
    if (text) {
      headings.push({ id: slugify(text), text });
    }
  }
  return headings;
}

function injectHeadingIds(html: string, headings: { id: string; text: string }[]): string {
  let index = 0;
  return html.replace(/<h2([^>]*)>/gi, (fullMatch, attrs) => {
    if (index < headings.length) {
      const id = headings[index].id;
      index++;
      if (attrs.includes('id=')) return fullMatch;
      return `<h2${attrs} id="${id}">`;
    }
    return fullMatch;
  });
}

function truncateText(text: string, maxLen: number): string {
  if (text.length <= maxLen) return text;
  const truncated = text.substring(0, maxLen);
  const lastSpace = truncated.lastIndexOf(' ');
  return (lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated) + '…';
}

function injectCrossReferences(
  html: string,
  currentSlug: string,
  categoria: string,
  allArticles: ArtigoMeta[]
): string {
  const related = allArticles
    .filter((a) => a.categoria === categoria && a.slug !== currentSlug)
    .slice(0, 2);

  if (related.length === 0) return html;

  const h2Regex = /<h2[^>]*>/gi;
  const h2Positions: number[] = [];
  let match;
  while ((match = h2Regex.exec(html)) !== null) {
    h2Positions.push(match.index);
  }

  const insertIndices = [2, 4].filter((i) => i < h2Positions.length);

  let offset = 0;
  insertIndices.forEach((h2Index, refIndex) => {
    if (refIndex >= related.length) return;
    const article = related[refIndex];
    const desc = truncateText(article.resumo, 120);
    const crossRefHtml = `<aside class="cross-ref"><strong>Leia também</strong><a href="/artigos/${article.slug}">${article.titulo}</a><span>${desc}</span></aside>`;
    const insertAt = h2Positions[h2Index] + offset;
    html = html.slice(0, insertAt) + crossRefHtml + html.slice(insertAt);
    offset += crossRefHtml.length;
  });

  return html;
}

const blurMap = blurData as Record<string, string>;

function injectBlurPlaceholders(html: string): string {
  return html.replace(/<img\s([^>]*?)src="([^"]+)"([^>]*?)>/gi, (full, before, src, after) => {
    const blur = blurMap[src];
    if (!blur) return full;
    const existingStyle = /style="([^"]*)"/.exec(before + after);
    const blurStyle = `background-image:url(${blur});background-size:cover;background-repeat:no-repeat`;
    if (existingStyle) {
      return full.replace(existingStyle[0], `style="${existingStyle[1]};${blurStyle}"`);
    }
    return `<img ${before}src="${src}"${after} style="${blurStyle}">`;
  });
}

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = artigosMetaMap[slug];
  if (!meta) return { title: 'Artigo não encontrado' };
  const ogImage = `/api/og?title=${encodeURIComponent(meta.titulo)}&category=${encodeURIComponent(meta.categoria)}`;
  return {
    title: meta.titulo,
    description: meta.resumo,
    alternates: {
      canonical: `/artigos/${slug}`,
    },
    openGraph: {
      title: meta.titulo,
      description: meta.resumo,
      type: 'article',
      publishedTime: meta.data,
      modifiedTime: meta.dataModificacao || meta.data,
      images: [{ url: ogImage, width: 1200, height: 630, alt: meta.titulo }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.titulo,
      description: meta.resumo,
      images: [ogImage],
    },
  };
}

export default async function ArtigoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = artigosMetaMap[slug];
  if (!meta) notFound();

  const artigo = await getArtigo(slug);
  if (!artigo) notFound();

  const articleUrl = `https://engenhariabiomedica.com/artigos/${slug}`;

  const ogImageUrl = `https://engenhariabiomedica.com/api/og?title=${encodeURIComponent(meta.titulo)}&category=${encodeURIComponent(meta.categoria)}`;
  const articleImages = meta.imagens?.length
    ? [ogImageUrl, ...meta.imagens.map((img) => `https://engenhariabiomedica.com${img.src}`)]
    : ogImageUrl;

  const conteudoHtml = typeof artigo.conteudo === 'string' ? artigo.conteudo : '';
  const headings = extractHeadings(conteudoHtml);
  const conteudoComIds = headings.length >= 3 ? injectHeadingIds(conteudoHtml, headings) : conteudoHtml;
  const conteudoFinal = injectCrossReferences(conteudoComIds, slug, meta.categoria, artigosMeta);
  const faqItems = extractFaqItems(conteudoHtml);

  // Schema.org ImageObject individual por imagem
  const imageObjects = meta.imagens?.map((img) => ({
    '@type': 'ImageObject',
    url: `https://engenhariabiomedica.com${img.src}`,
    contentUrl: `https://engenhariabiomedica.com${img.src}`,
    caption: img.caption,
    description: img.alt,
    width: 1024,
    height: 576,
    encodingFormat: 'image/webp',
  })) || [];

  // Entity linking — about/mentions para entidades citadas (src/data/entities.ts)
  const contentLower = conteudoHtml.toLowerCase();
  const mentionedEntities = Object.entries(knownEntities)
    .filter(([key]) => contentLower.includes(key))
    .map(([, entity]) => ({
      '@type': entity.type,
      name: entity.name,
      url: entity.url,
      ...(entity.sameAs ? { sameAs: entity.sameAs } : {}),
      ...(entity.medicalCode ? {
        code: {
          '@type': 'MedicalCode',
          codeValue: entity.medicalCode.codeValue,
          codingSystem: entity.medicalCode.codingSystem,
          url: entity.medicalCode.url,
        },
      } : {}),
    }));

  const primaryImage = imageObjects.length > 0 ? imageObjects[0] : null;

  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: meta.titulo,
    description: meta.resumo,
    datePublished: meta.data,
    dateModified: meta.dataModificacao || meta.data,
    image: imageObjects.length > 0
      ? [ogImageUrl, ...imageObjects]
      : ogImageUrl,
    ...(primaryImage ? { primaryImageOfPage: primaryImage } : {}),
    author: {
      '@type': 'Person',
      '@id': 'https://engenhariabiomedica.com/#author',
      name: 'Mardoqueu Martins da Costa',
      jobTitle: 'Pesquisador e Professor em Engenharia Biomédica',
      url: 'https://engenhariabiomedica.com/sobre',
      sameAs: ['http://lattes.cnpq.br/7819717440359474'],
    },
    publisher: {
      '@type': 'Organization',
      name: 'Engenharia Biomédica',
      url: 'https://engenhariabiomedica.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://engenhariabiomedica.com/icon.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    articleSection: meta.categoria,
    inLanguage: 'pt-BR',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.tldr', '.text-lg.leading-relaxed', 'h2', '.prose p:first-of-type'],
    },
    ...(mentionedEntities.length > 0 ? { mentions: mentionedEntities } : {}),
    about: {
      '@type': 'MedicalSpecialty',
      name: 'Engenharia Biomédica',
    },
  };

  const jsonLdFaq = faqItems.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  } : null;

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: 'https://engenhariabiomedica.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Artigos',
        item: 'https://engenhariabiomedica.com/artigos',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: meta.titulo,
        item: articleUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      {jsonLdFaq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      )}
      <PageHeader
        overline={meta.categoria}
        title={meta.titulo}
        description={meta.resumo}
        centered
        breadcrumbs={[
          { label: 'Artigos', href: '/artigos' },
          { label: meta.titulo },
        ]}
      />

      <article className="container-page py-10 lg:py-14">
        <div className="max-w-3xl mx-auto">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-slate-100">
            <Badge variant={meta.categoriaVariant}>{meta.categoria}</Badge>
            <div className="flex items-center gap-1.5 text-caption text-slate-400">
              <Calendar className="w-3.5 h-3.5" />
              <time dateTime={meta.data}>{formatDate(meta.data)}</time>
            </div>
            <div className="flex items-center gap-1.5 text-caption text-slate-400">
              <Clock className="w-3.5 h-3.5" />
              {meta.leitura} de leitura
            </div>
          </div>

          {/* Table of Contents */}
          {headings.length >= 3 && (
            <div className="prose prose-lg text-justify overflow-x-hidden">
              <nav aria-label="Índice">
                <h2>Índice</h2>
                <ol>
                  {headings.map((h) => (
                    <li key={h.id}>
                      <a href={`#${h.id}`}>{h.text}</a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          )}

          {/* TL;DR */}
          {meta.tldr && (
            <div className="prose prose-lg text-justify overflow-x-hidden">
              <aside className="tldr">
                <strong>Em resumo</strong>
                <p>{meta.tldr}</p>
              </aside>
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg text-justify overflow-x-hidden">
            {typeof artigo.conteudo === 'string' ? (
              <div dangerouslySetInnerHTML={{ __html: injectBlurPlaceholders(DOMPurify.sanitize(conteudoFinal, {
                    ADD_ATTR: ['loading', 'decoding', 'width', 'height', 'fetchpriority', 'aria-details'],
                    ADD_TAGS: ['figure', 'figcaption', 'cite', 'time', 'sup', 'details', 'summary'],
                    FORBID_TAGS: ['form', 'input', 'textarea', 'select', 'button', 'style', 'meta', 'link', 'script', 'iframe', 'object', 'embed'],
                    FORBID_ATTR: ['onerror', 'onload', 'onclick', 'onmouseover', 'onfocus', 'onblur', 'onsubmit', 'onchange', 'srcdoc'],
                    ALLOW_DATA_ATTR: false,
                    ALLOWED_URI_REGEXP: /^(?:(?:https?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.\-:]|$))/i,
                  })) }} />
            ) : (
              artigo.conteudo.map((paragrafo, i) => (
                <p key={i}>{paragrafo}</p>
              ))
            )}
          </div>

          {/* CTA */}
          <div className="mt-10 p-6 rounded-xl bg-teal-50 border border-teal-200">
            <h3 className="text-h3 text-teal-800 mb-2">Gostou deste artigo?</h3>
            <p className="text-body-sm text-teal-700 font-serif mb-4">
              Receba conteúdos como este diretamente no seu e-mail.
            </p>
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500 text-white rounded-lg font-semibold text-sm hover:bg-teal-600 transition-colors"
            >
              Assinar newsletter
            </Link>
          </div>

          {/* Related Articles */}
          <RelatedArticles
            currentSlug={slug}
            categoria={meta.categoria}
            categoriaVariant={meta.categoriaVariant}
            allArticles={artigosMeta}
          />

          {/* Back link */}
          <div className="mt-8">
            <Link
              href="/artigos"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Ver todos os artigos
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
