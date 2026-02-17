import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/ui/PageHeader';
import { Badge } from '@/components/ui/Badge';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { artigos } from '@/data/artigos';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function generateStaticParams() {
  return Object.keys(artigos).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const artigo = artigos[params.slug];
  if (!artigo) return { title: 'Artigo não encontrado' };
  return {
    title: `${artigo.titulo} — Engenharia Biomédica`,
    description: artigo.resumo,
  };
}

export default function ArtigoPage({ params }: { params: { slug: string } }) {
  const artigo = artigos[params.slug];
  if (!artigo) notFound();

  return (
    <>
      <PageHeader
        overline={artigo.categoria}
        title={artigo.titulo}
        description={artigo.resumo}
        centered
        breadcrumbs={[
          { label: 'Blog', href: '/blog' },
          { label: artigo.titulo },
        ]}
      />

      <article className="container-page py-10 lg:py-14">
        <div className="max-w-3xl mx-auto">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-slate-100">
            <Badge variant={artigo.categoriaVariant}>{artigo.categoria}</Badge>
            <div className="flex items-center gap-1.5 text-caption text-slate-400">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(artigo.data)}
            </div>
            <div className="flex items-center gap-1.5 text-caption text-slate-400">
              <Clock className="w-3.5 h-3.5" />
              {artigo.leitura} de leitura
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg text-justify">
            {artigo.conteudo.map((paragrafo, i) => (
              <p key={i}>{paragrafo}</p>
            ))}
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
              href="/blog"
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
