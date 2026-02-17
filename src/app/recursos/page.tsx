import { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Recursos e Referências — Engenharia Biomédica',
  description:
    'Links para os sites de referência em Engenharia Biomédica no Brasil e no mundo: SBEB, ANVISA, ABIMO, BMES, IEEE EMBS, FDA e mais.',
};

const sitesBrasil = [
  { nome: 'SBEB', desc: 'Sociedade Brasileira de Engenharia Biomédica — organiza o CBEB.', url: 'sbeb.org.br' },
  { nome: 'ANVISA', desc: 'Regulação de dispositivos médicos, tecnovigilância e BPF.', url: 'gov.br/anvisa' },
  { nome: 'ABIMO', desc: 'Associação Brasileira da Indústria de Artigos e Equipamentos Médicos.', url: 'abimo.org.br' },
  { nome: 'ABEClin', desc: 'Associação Brasileira de Engenharia Clínica — Arena Hospitalar, Prêmio João Pedroso.', url: 'abeclin.org.br' },
  { nome: 'CONFEA/CREA', desc: 'Registro profissional do Engenheiro Biomédico e emissão de ART.', url: 'confea.org.br' },
  { nome: 'EMBRAPII', desc: 'Empresa Brasileira de Pesquisa e Inovação Industrial — R$ 150 mi em saúde.', url: 'embrapii.org.br' },
  { nome: 'FINEP', desc: 'Financiadora de Estudos e Projetos — Inova Saúde, Aquisição Inovadora.', url: 'finep.gov.br' },
  { nome: 'FAPESP', desc: 'Fundação de Amparo à Pesquisa do Estado de São Paulo — programa PIPE.', url: 'fapesp.br' },
  { nome: 'CNPq', desc: 'Conselho Nacional de Desenvolvimento Científico e Tecnológico — bolsas e projetos.', url: 'cnpq.br' },
  { nome: 'Portal Salário', desc: 'Dados salariais do CAGED por CBO (2143-80, 2011-05).', url: 'salario.com.br' },
];

const sitesEUA = [
  { nome: 'FDA CDRH', desc: 'Regulação de dispositivos médicos nos EUA.', url: 'fda.gov/medical-devices' },
  { nome: 'NIH NIBIB', desc: 'National Institute of Biomedical Imaging and Bioengineering.', url: 'nibib.nih.gov' },
  { nome: 'BMES', desc: 'Biomedical Engineering Society — acreditação ABET.', url: 'bmes.org' },
  { nome: 'IEEE EMBS', desc: 'Maior sociedade internacional — periódicos Q1, IEEE EMBC.', url: 'embs.org' },
  { nome: 'AAMI', desc: 'Normas técnicas e certificações para dispositivos médicos.', url: 'aami.org' },
  { nome: 'AdvaMed', desc: 'Associação da indústria de dispositivos médicos dos EUA.', url: 'advamed.org' },
  { nome: 'ABET', desc: 'Acreditação de programas de engenharia — 400+ em BME.', url: 'abet.org' },
  { nome: 'ACCE', desc: 'American College of Clinical Engineering.', url: 'accenet.org' },
  { nome: 'PubMed', desc: 'Maior base de dados biomédica — 39+ milhões de citações.', url: 'pubmed.ncbi.nlm.nih.gov' },
  { nome: 'MD+DI', desc: 'Mídia setorial de dispositivos médicos.', url: 'mddionline.com' },
];

export default function RecursosPage() {
  return (
    <>
      <PageHeader
        overline="Referências"
        title="Recursos e Links Essenciais"
        description="Compilação dos sites mais importantes sobre Engenharia Biomédica no Brasil e no mundo."
        breadcrumbs={[{ label: 'Recursos' }]}
      />

      <section className="container-page py-10 lg:py-14">
        <h2 className="text-h2 text-primary-800 mb-4">Brasil</h2>
        <div className="grid gap-3 sm:grid-cols-2 mb-12">
          {sitesBrasil.map((s) => (
            <div key={s.nome} className="card p-5">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-h4 text-slate-900">{s.nome}</h3>
                <Badge variant="primary">BR</Badge>
              </div>
              <p className="text-body-sm text-slate-500 font-serif mb-1">{s.desc}</p>
              <span className="text-caption text-teal-600 font-mono">{s.url}</span>
            </div>
          ))}
        </div>

        <h2 className="text-h2 text-primary-800 mb-4">Estados Unidos</h2>
        <div className="grid gap-3 sm:grid-cols-2 mb-12">
          {sitesEUA.map((s) => (
            <div key={s.nome} className="card p-5">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-h4 text-slate-900">{s.nome}</h3>
                <Badge variant="teal">EUA</Badge>
              </div>
              <p className="text-body-sm text-slate-500 font-serif mb-1">{s.desc}</p>
              <span className="text-caption text-teal-600 font-mono">{s.url}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/internacional/repositorios"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-50 text-primary-700 rounded-lg text-sm font-semibold hover:bg-primary-100 transition-colors"
          >
            Ver repositórios acadêmicos →
          </Link>
          <Link
            href="/glossario"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-50 text-teal-700 rounded-lg text-sm font-semibold hover:bg-teal-100 transition-colors"
          >
            Consultar glossário →
          </Link>
        </div>
      </section>
    </>
  );
}
