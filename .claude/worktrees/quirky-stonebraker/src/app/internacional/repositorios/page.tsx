import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Repositórios Acadêmicos — Engenharia Biomédica',
  description:
    'Os 10 maiores repositórios acadêmicos para pesquisa em Engenharia Biomédica: PubMed, Scopus, IEEE Xplore, Web of Science, Compendex e mais.',
  alternates: { canonical: '/internacional/repositorios' },
  openGraph: {
    images: [{ url: '/api/og?title=Reposit%C3%B3rios%20Acad%C3%AAmicos%20%E2%80%94%20Engenharia%20Biom%C3%A9dica&category=Internacional', width: 1200, height: 630 }],
  },
};

const repositorios = [
  {
    nome: 'PubMed / MEDLINE',
    operador: 'NLM / NIH (EUA)',
    url: 'pubmed.ncbi.nlm.nih.gov',
    acervo: '39+ milhões de citações',
    desc: 'Maior base de dados de literatura biomédica do mundo. Acesso público e gratuito desde 1996. Uso diário por pesquisadores em Engenharia Biomédica.',
    badge: 'Acesso Aberto',
    badgeVariant: 'teal' as const,
  },
  {
    nome: 'PubMed Central (PMC)',
    operador: 'NLM / NIH (EUA)',
    url: 'pmc.ncbi.nlm.nih.gov',
    acervo: 'Milhões de artigos — texto completo',
    desc: 'Arquivo digital gratuito de texto completo. Complemento essencial do PubMed com artigos integrais e não apenas resumos.',
    badge: 'Acesso Aberto',
    badgeVariant: 'teal' as const,
  },
  {
    nome: 'Scopus',
    operador: 'Elsevier (Holanda)',
    url: 'scopus.com',
    acervo: '100+ milhões de itens',
    desc: 'Maior base de resumos e citações revisados por pares do mundo. Essencial para revisões sistemáticas, bibliometria e análise de impacto.',
    badge: 'Assinatura',
    badgeVariant: 'primary' as const,
  },
  {
    nome: 'Web of Science (WoS)',
    operador: 'Clarivate Analytics (EUA/UK)',
    url: 'webofscience.com',
    acervo: '12.000+ periódicos + 150.000 anais',
    desc: 'Referência global para análise de citações e rankings acadêmicos (fator de impacto JCR). Cobertura retroativa até 1900.',
    badge: 'Assinatura',
    badgeVariant: 'primary' as const,
  },
  {
    nome: 'IEEE Xplore',
    operador: 'IEEE (EUA)',
    url: 'ieeexplore.ieee.org',
    acervo: '6+ milhões de documentos',
    desc: 'Principal biblioteca digital para engenharia elétrica e computação. Hospeda periódicos e anais do IEEE EMBS, incluindo IEEE Trans. on BME.',
    badge: 'Híbrido',
    badgeVariant: 'amber' as const,
  },
  {
    nome: 'Compendex (Engineering Village)',
    operador: 'Elsevier (Holanda)',
    url: 'engineeringvillage.com',
    acervo: '22+ milhões de registros',
    desc: 'Base de literatura de engenharia mais abrangente do mundo. Cobertura desde 1884. Complementar ao PubMed para a vertente de engenharia.',
    badge: 'Assinatura',
    badgeVariant: 'primary' as const,
  },
  {
    nome: 'Google Scholar',
    operador: 'Google (EUA)',
    url: 'scholar.google.com',
    acervo: 'Centenas de milhões de documentos',
    desc: 'Mecanismo de busca acadêmica gratuito mais utilizado do mundo. Cobertura multidisciplinar com rastreamento de citações e perfis de autor.',
    badge: 'Acesso Aberto',
    badgeVariant: 'teal' as const,
  },
  {
    nome: 'NLM — Acervo Completo',
    operador: 'NIH (EUA)',
    url: 'nlm.nih.gov',
    acervo: '~12 milhões de itens',
    desc: 'Maior biblioteca de ciências da saúde do mundo. Instituição-mãe do PubMed, PMC e ClinicalTrials.gov. Acessada 1 bilhão+ de vezes por ano.',
    badge: 'Acesso Aberto',
    badgeVariant: 'teal' as const,
  },
  {
    nome: 'NIH RePORTER',
    operador: 'NIH (EUA)',
    url: 'reporter.nih.gov',
    acervo: 'Todos os projetos NIH',
    desc: 'Base pública de projetos de pesquisa financiados pelo NIH. Permite mapear financiamento, tendências de investimento e encontrar colaboradores.',
    badge: 'Acesso Aberto',
    badgeVariant: 'teal' as const,
  },
  {
    nome: 'ClinicalTrials.gov',
    operador: 'NLM / NIH (EUA)',
    url: 'clinicaltrials.gov',
    acervo: '490.000+ estudos em 200+ países',
    desc: 'Maior registro público de ensaios clínicos do mundo. Essencial para rastrear o pipeline de dispositivos médicos, SaMD e terapias baseadas em IA.',
    badge: 'Acesso Aberto',
    badgeVariant: 'teal' as const,
  },
];

export default function RepositoriosPage() {
  return (
    <>
      <PageHeader
        overline="Internacional"
        title="Repositórios Acadêmicos Globais"
        description="As 10 maiores bases de dados e repositórios para pesquisa em Engenharia Biomédica no mundo."
        breadcrumbs={[
          { label: 'Internacional', href: '/internacional' },
          { label: 'Repositórios Acadêmicos' },
        ]}
      />

      <section className="container-page py-10 lg:py-14">
        <div className="space-y-4">
          {repositorios.map((r, i) => (
            <div
              key={r.nome}
              className="card p-6 border-l-4 border-l-primary-400"
            >
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="font-mono text-xs text-slate-400">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="text-h3 text-slate-900">{r.nome}</h2>
                <Badge variant={r.badgeVariant}>{r.badge}</Badge>
              </div>
              <p className="text-caption text-slate-400 mb-2">
                {r.operador} · {r.acervo}
              </p>
              <p className="text-body-sm text-slate-500 font-serif mb-1">
                {r.desc}
              </p>
              <span className="text-caption text-teal-600 font-mono">
                {r.url}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 p-5 rounded-xl bg-primary-50 border border-primary-200">
          <h3 className="text-h4 text-primary-800 mb-2">Menções Honrosas</h3>
          <p className="text-body-sm text-primary-700 font-serif">
            Também relevantes: <strong>EMBASE</strong> (cobertura europeia de dispositivos médicos), <strong>bioRxiv/medRxiv</strong> (preprints), <strong>ScienceDirect</strong> (textos completos Elsevier), <strong>SpringerLink/Nature Portfolio</strong> (Nature Biomedical Engineering), <strong>Google Patents/USPTO</strong> (propriedade intelectual em dispositivos médicos) e <strong>INSPEC</strong> (instrumentação biomédica desde 1898).
          </p>
        </div>
      </section>
    </>
  );
}
