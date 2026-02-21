import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Badge } from '@/components/ui/Badge';
import { listaArtigos } from '@/data/artigos';

export const metadata: Metadata = {
  title: 'Artigos — Engenharia Biomédica',
  description:
    'Artigos, análises e guias sobre tendências, carreira e inovação em Engenharia Biomédica no Brasil.',
  alternates: {
    canonical: '/artigos',
  },
  openGraph: {
    images: [
      {
        url: '/api/og?title=Artigos+e+An%C3%A1lises&category=Portal',
        width: 1200,
        height: 630,
      },
    ],
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export default function ArtigosPage() {
  const destaque = listaArtigos[0];
  const demais = listaArtigos.slice(1);

  const categoriaMap: Record<string, typeof demais> = {};
  for (const a of demais) {
    if (!categoriaMap[a.categoria]) categoriaMap[a.categoria] = [];
    categoriaMap[a.categoria].push(a);
  }

  return (
    <>
      <PageHeader
        overline="Artigos"
        title="Artigos e Análises"
        description="Tendências, guias práticos e análises de mercado sobre Engenharia Biomédica no Brasil e no mundo."
        breadcrumbs={[{ label: 'Artigos' }]}
      />

      <section className="container-page py-10 lg:py-14">
        {/* Artigo destaque */}
        <Link
          href={`/artigos/${destaque.slug}`}
          className="group block relative overflow-hidden rounded-card bg-gradient-to-br from-primary-800 via-primary-700 to-teal-800 p-8 lg:p-12 mb-10"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full glow-teal-strong pointer-events-none" />
          <div className="absolute bottom-[-100px] left-[-50px] w-[300px] h-[300px] rounded-full glow-blue-soft pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-md bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wide border border-teal-500/30">
                {destaque.categoria}
              </span>
              <span className="text-primary-300 text-xs font-mono flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {destaque.leitura}
              </span>
            </div>
            <h2 className="text-h1 lg:text-display text-white mb-3 max-w-3xl text-balance font-serif group-hover:text-teal-200 transition-colors">
              {destaque.titulo}
            </h2>
            <p className="text-body text-primary-200 max-w-2xl mb-6 leading-relaxed">
              {destaque.resumo}
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-teal-300 group-hover:text-teal-200 transition-colors">
              Ler artigo completo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </Link>

        {/* Filtros por categoria */}
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-primary-50 text-primary-700 text-xs font-semibold">
            {listaArtigos.length} artigos publicados
          </span>
          {Object.entries(categoriaMap).map(([cat, items]) => (
            <a
              key={cat}
              href={`#cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-100 text-slate-500 text-xs font-medium hover:bg-slate-50 hover:text-slate-700 transition-colors"
            >
              {cat}
              <span className="text-slate-300">({items.length})</span>
            </a>
          ))}
        </div>

        {/* Artigos por categoria */}
        {Object.entries(categoriaMap).map(([cat, items]) => (
          <div key={cat} id={`cat-${cat.toLowerCase().replace(/\s+/g, '-')}`} className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <h2 className="text-h3 text-slate-900">{cat}</h2>
              <div className="flex-1 h-px bg-slate-100" />
              <span className="text-caption text-slate-400 font-mono">
                {items.length} {items.length === 1 ? 'artigo' : 'artigos'}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((a) => (
                <Link
                  key={a.slug}
                  href={`/artigos/${a.slug}`}
                  className="card p-6 group flex flex-col"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge variant={a.categoriaVariant}>{a.categoria}</Badge>
                    <span className="text-caption text-slate-400 font-mono flex items-center gap-1 shrink-0">
                      <Clock className="w-3 h-3" />
                      {a.leitura}
                    </span>
                  </div>
                  <h3 className="text-h4 text-slate-900 mb-2 group-hover:text-primary-700 transition-colors leading-snug flex-1">
                    {a.titulo}
                  </h3>
                  <p className="text-body-sm text-slate-500 font-serif mb-3 line-clamp-2">
                    {a.resumo}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-50">
                    <span className="text-caption text-slate-400">
                      {formatDate(a.data)}
                    </span>
                    <span className="text-xs font-semibold text-teal-600 group-hover:text-teal-700 transition-colors flex items-center gap-1">
                      Ler
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* CTA Newsletter */}
        <div className="mt-4 p-8 lg:p-12 rounded-card bg-primary-800 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full glow-teal-soft pointer-events-none" />
          <div className="relative z-10">
            <span className="text-overline uppercase text-teal-300 tracking-[0.12em] block mb-3">
              Newsletter
            </span>
            <h2 className="text-h2 text-white mb-2 font-serif">
              Quer receber novos artigos?
            </h2>
            <p className="text-body-sm text-primary-200 mb-6 max-w-md mx-auto">
              Cadastre-se na newsletter para receber análises e guias diretamente no seu e-mail. Gratuito e sem spam.
            </p>
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold text-sm hover:bg-teal-600 transition-colors"
            >
              Inscrever-se na newsletter
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
