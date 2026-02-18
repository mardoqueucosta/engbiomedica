import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/ui/PageHeader';
import { Badge } from '@/components/ui/Badge';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { slugs, artigosMetaMap, getArtigo } from '@/data/artigos';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const meta = artigosMetaMap[params.slug];
  if (!meta) return { title: 'Artigo não encontrado' };
  const ogImage = `/api/og?title=${encodeURIComponent(meta.titulo)}&category=${encodeURIComponent(meta.categoria)}`;
  return {
    title: `${meta.titulo} — Engenharia Biomédica`,
    description: meta.resumo,
    alternates: {
      canonical: `/artigos/${params.slug}`,
    },
    openGraph: {
      title: meta.titulo,
      description: meta.resumo,
      type: 'article',
      publishedTime: meta.data,
      modifiedTime: meta.data,
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

export default async function ArtigoPage({ params }: { params: { slug: string } }) {
  const meta = artigosMetaMap[params.slug];
  if (!meta) notFound();

  const artigo = await getArtigo(params.slug);
  if (!artigo) notFound();

  const articleUrl = `https://engenhariabiomedica.com/artigos/${params.slug}`;

  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.titulo,
    description: meta.resumo,
    datePublished: meta.data,
    dateModified: meta.data,
    image: `https://engenhariabiomedica.com/api/og?title=${encodeURIComponent(meta.titulo)}&category=${encodeURIComponent(meta.categoria)}`,
    author: {
      '@type': 'Organization',
      name: 'Engenharia Biomédica',
      url: 'https://engenhariabiomedica.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Engenharia Biomédica',
      url: 'https://engenhariabiomedica.com',
    },
    mainEntityOfPage: articleUrl,
  };

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
              {formatDate(meta.data)}
            </div>
            <div className="flex items-center gap-1.5 text-caption text-slate-400">
              <Clock className="w-3.5 h-3.5" />
              {meta.leitura} de leitura
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg text-justify">
            {typeof artigo.conteudo === 'string' ? (
              <div dangerouslySetInnerHTML={{ __html: artigo.conteudo }} />
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
