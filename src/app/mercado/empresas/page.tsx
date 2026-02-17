import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Empresas — Engenharia Biomédica',
  description: 'Multinacionais e empresas nacionais de dispositivos médicos que empregam engenheiros biomédicos no Brasil.',
};

const multinacionais = [
  { nome: 'Philips Healthcare', area: 'Diagnóstico por imagem, monitoramento, informática em saúde', destaque: '€350 mi investidos desde 2007' },
  { nome: 'GE Healthcare', area: 'Imagem médica, monitoramento, biomanufatura', destaque: 'US$ 250 mi em centro de pesquisa; Brasil é 3º mercado global' },
  { nome: 'Siemens Healthineers', area: 'Imagem, diagnóstico laboratorial, saúde digital', destaque: 'Fábrica em Joinville/SC (R$ 50 mi)' },
  { nome: 'Medtronic', area: 'Dispositivos cardíacos, neuromodulação, cirurgia robótica', destaque: 'Operações nacionais' },
  { nome: 'Johnson & Johnson', area: 'Dispositivos cirúrgicos, ortopedia, oftalmologia', destaque: 'Forte presença' },
  { nome: 'Boston Scientific', area: 'Cardiologia, endoscopia, neuromodulação', destaque: 'Parceira da SBEB em prêmio de inovação' },
  { nome: 'Stryker', area: 'Ortopedia, equipamentos cirúrgicos', destaque: 'Operações nacionais' },
  { nome: 'BD (Becton Dickinson)', area: 'Diagnóstico, sistemas de infusão', destaque: 'Operações nacionais' },
];

const nacionais = [
  { nome: 'Fanem', sede: 'São Paulo/SP', fundacao: '1924', area: 'Incubadoras neonatais, berços aquecidos — pioneira brasileira e multinacional' },
  { nome: 'Instramed', sede: 'Porto Alegre/RS', fundacao: '1986', area: 'Monitores cardíacos, desfibriladores — exporta para 30+ países' },
  { nome: 'Lifemed', sede: 'Pelotas/RS', fundacao: '~40 anos', area: 'Equipamentos hospitalares — presente em 2.000+ hospitais' },
  { nome: 'Magnamed', sede: 'Cotia/SP', fundacao: '2005', area: 'Ventiladores pulmonares — presente em 40+ países; fundada por 3 engenheiros' },
  { nome: 'BMR Medical', sede: 'Curitiba/PR', fundacao: '—', area: 'Dispositivos para oncologia e cirurgia — certificações FDA, CE, ANVISA' },
];

export default function EmpresasPage() {
  return (
    <>
      <PageHeader
        overline="Mercado de Trabalho"
        title="Empresas que Empregam Engenheiros Biomédicos"
        description="Gigantes globais e campeãs nacionais dividem o mercado brasileiro de dispositivos médicos, que movimentou R$ 26,1 bilhões em 2024."
        breadcrumbs={[{ label: 'Mercado', href: '/mercado' }, { label: 'Empresas' }]}
      />

      <section className="container-page py-10 lg:py-14">
        <h2 className="text-h2 text-primary-800 mb-4">Multinacionais com Operação no Brasil</h2>
        <div className="grid gap-3 sm:grid-cols-2 mb-12">
          {multinacionais.map((e) => (
            <div key={e.nome} className="card p-5">
              <h3 className="text-h4 text-slate-900 mb-1">{e.nome}</h3>
              <p className="text-body-sm text-slate-500">{e.area}</p>
              <p className="text-xs text-teal-600 font-semibold mt-2">{e.destaque}</p>
            </div>
          ))}
        </div>

        <h2 className="text-h2 text-primary-800 mb-4">Empresas Nacionais de Destaque</h2>
        <div className="card overflow-x-auto mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Empresa</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Sede</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Fundação</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Área</th>
              </tr>
            </thead>
            <tbody>
              {nacionais.map((e) => (
                <tr key={e.nome} className="border-b border-slate-50 hover:bg-primary-50/50 transition-colors">
                  <td className="px-4 py-3 font-semibold text-slate-900">{e.nome}</td>
                  <td className="px-4 py-3 text-slate-600">{e.sede}</td>
                  <td className="px-4 py-3 font-mono text-slate-500">{e.fundacao}</td>
                  <td className="px-4 py-3 text-slate-500">{e.area}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-primary-50 border border-primary-200">
            <h3 className="text-h4 text-primary-800 mb-2">ABIMO</h3>
            <p className="text-body-sm text-primary-700 font-serif">Associação Brasileira da Indústria de Dispositivos Médicos. Fundada em 1962, 300+ associados, foco na indústria nacional.</p>
          </div>
          <div className="p-5 rounded-xl bg-teal-50 border border-teal-200">
            <h3 className="text-h4 text-teal-800 mb-2">ABIMED</h3>
            <p className="text-body-sm text-teal-700 font-serif">Associação Brasileira da Indústria de Tecnologia para Saúde. ~200 empresas representando ~65% do faturamento do segmento.</p>
          </div>
        </div>
      </section>
    </>
  );
}
