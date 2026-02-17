import { Metadata } from 'next';
import Link from 'next/link';
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
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export default function ArtigosPage() {
  return (
    <>
      <PageHeader
        overline="Artigos"
        title="Artigos e Análises"
        description="Tendências, guias práticos e análises de mercado sobre Engenharia Biomédica no Brasil e no mundo."
        breadcrumbs={[{ label: 'Artigos' }]}
      />

      <section className="container-page py-10 lg:py-14">
        <div className="space-y-4">
          {listaArtigos.map((a) => (
            <Link
              key={a.slug}
              href={`/artigos/${a.slug}`}
              className="card p-6 group block"
            >
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge variant={a.categoriaVariant}>{a.categoria}</Badge>
                <span className="text-caption text-slate-400">
                  {formatDate(a.data)}
                </span>
              </div>
              <h2 className="text-h3 text-slate-900 mb-1 group-hover:text-primary-700 transition-colors">
                {a.titulo}
              </h2>
              <p className="text-body-sm text-slate-500 font-serif">
                {a.resumo}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-xl bg-primary-800 text-center">
          <h2 className="text-h2 text-white mb-2 font-serif">
            Quer receber novos artigos?
          </h2>
          <p className="text-body-sm text-primary-200 mb-5">
            Cadastre-se na newsletter para receber análises e guias diretamente no seu e-mail.
          </p>
          <Link
            href="/newsletter"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold text-sm hover:bg-teal-600 transition-colors"
          >
            Inscrever-se na newsletter
          </Link>
        </div>
      </section>
    </>
  );
}
