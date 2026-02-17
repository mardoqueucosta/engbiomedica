import { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Blog — Engenharia Biomédica',
  description:
    'Artigos, análises e guias sobre tendências, carreira e inovação em Engenharia Biomédica no Brasil.',
};

const artigos = [
  {
    slug: 'o-que-e-engenharia-biomedica',
    titulo: 'O que é Engenharia Biomédica?',
    resumo:
      'Guia completo sobre a profissão que une engenharia e saúde — da formação ao mercado de trabalho.',
    categoria: 'Guia',
    categoriaVariant: 'primary' as const,
    data: '2026-02-10',
  },
  {
    slug: 'ia-saude-brasil-2025',
    titulo: 'IA em Saúde no Brasil: o cenário em 2025',
    resumo:
      '17% dos médicos já usam IA generativa. Como a inteligência artificial está transformando o diagnóstico e o cuidado no país.',
    categoria: 'Tendência',
    categoriaVariant: 'teal' as const,
    data: '2026-02-05',
  },
  {
    slug: 'diferenca-engenheiro-biomedico-biomedico',
    titulo: 'Engenheiro Biomédico × Biomédico: qual a diferença?',
    resumo:
      'São profissões distintas regulamentadas por conselhos diferentes. Entenda as atribuições, a formação e o mercado de cada uma.',
    categoria: 'Carreira',
    categoriaVariant: 'coral' as const,
    data: '2026-01-28',
  },
  {
    slug: 'como-registrar-crea',
    titulo: 'Como obter registro no CREA como Engenheiro Biomédico',
    resumo:
      'Passo a passo para registro profissional no sistema CONFEA/CREA após a Resolução 1.103/2018.',
    categoria: 'Guia Prático',
    categoriaVariant: 'amber' as const,
    data: '2026-01-20',
  },
  {
    slug: 'healthtechs-latam-2024',
    titulo: 'Healthtechs na América Latina: US$ 254 mi investidos em 2024',
    resumo:
      'O Brasil concentra 64,8% das startups de saúde da região. Análise das maiores rodadas e tendências de investimento.',
    categoria: 'Mercado',
    categoriaVariant: 'teal' as const,
    data: '2026-01-15',
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export default function BlogPage() {
  return (
    <>
      <PageHeader
        overline="Blog"
        title="Artigos e Análises"
        description="Tendências, guias práticos e análises de mercado sobre Engenharia Biomédica no Brasil e no mundo."
        breadcrumbs={[{ label: 'Blog' }]}
      />

      <section className="container-page py-10 lg:py-14">
        <div className="space-y-4">
          {artigos.map((a) => (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}`}
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
