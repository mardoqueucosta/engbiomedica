import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Financiamento à Pesquisa — Engenharia Biomédica',
  description: 'EMBRAPII (R$ 150 milhões), FINEP, FAPESP PIPE, CNPq e BNDES: fontes de financiamento para pesquisa e inovação em saúde no Brasil.',
  alternates: { canonical: '/pesquisa/financiamento' },
  openGraph: {
    images: [{ url: '/api/og?title=Financiamento%20%C3%A0%20Pesquisa%20%E2%80%94%20Engenharia%20Biom%C3%A9dica&category=Pesquisa', width: 1200, height: 630 }],
  },
};

const fontes = [
  { org: 'EMBRAPII', valor: 'R$ 150 mi (2025)', desc: 'Pacote em parceria com o Ministério da Saúde (potencial de R$ 240 mi com contrapartidas). R$ 60 mi para projetos de alto impacto, R$ 30 mi para 6 novas unidades credenciadas, R$ 15 mi para Centro de Competência em RNA mensageiro. Desde sua criação: 233 empresas, 263 projetos, R$ 252 mi investidos na área de saúde. Programa Saúde Inova EMBRAPII-ABIMO: até 50% não reembolsável.' },
  { org: 'FINEP', valor: 'Até R$ 250 mi por projeto', desc: 'Finep Aquisição Inovadora Saúde (crédito até R$ 15 mi), Finep Mais Inovação (R$ 15–250 mi), Programa Inova Saúde (R$ 3,6 bi entre 2013–2017).' },
  { org: 'FAPESP', valor: 'Até R$ 1 mi (PIPE)', desc: 'Programa PIPE: até R$ 200 mil na Fase 1, PIPE Invest suplementar de até R$ 1 mi. Já apoiou 1.461+ projetos em pequenas empresas inovadoras.' },
  { org: 'CNPq', valor: 'Bolsas e editais', desc: 'Financiamento de bolsas de pesquisa, projetos universais e Diretório de Grupos de Pesquisa. Principal agência para formação de recursos humanos.' },
  { org: 'BNDES', valor: 'Linhas especiais', desc: 'Linhas de financiamento para inovação industrial em saúde, equipamentos e infraestrutura hospitalar.' },
];

export default function FinanciamentoPage() {
  return (
    <>
      <PageHeader
        overline="Pesquisa & Inovação"
        title="Financiamento à Pesquisa e Inovação"
        description="R$ 150 milhões da EMBRAPII sinalizam prioridade governamental para a pesquisa em saúde. Conheça todas as fontes de financiamento disponíveis."
        breadcrumbs={[{ label: 'Pesquisa', href: '/pesquisa' }, { label: 'Financiamento' }]}
      />

      <section className="container-page py-10 lg:py-14">
        <div className="space-y-4">
          {fontes.map((f) => (
            <div key={f.org} className="card p-6 border-l-4 border-l-primary-400">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h2 className="text-h3 text-slate-900">{f.org}</h2>
                <span className="font-mono text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md">{f.valor}</span>
              </div>
              <p className="text-body-sm text-slate-500 font-serif">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-5 rounded-xl bg-primary-50 border border-primary-200">
          <h3 className="text-h4 text-primary-800 mb-2">Propriedade Intelectual</h3>
          <p className="text-body-sm text-primary-700 font-serif">
            Os Núcleos de Inovação Tecnológica (NITs) das universidades — Inovatec/UEPB, Dinov/IFBA e Inova Unicamp — são os elos entre pesquisa e mercado. Apesar dos avanços (95 pedidos de PI pela EMBRAPII, 19 patentes do IFBA, clearance FDA da brain4care), a transferência tecnológica universidade-empresa permanece o principal gargalo do ecossistema brasileiro.
          </p>
        </div>
      </section>
    </>
  );
}
