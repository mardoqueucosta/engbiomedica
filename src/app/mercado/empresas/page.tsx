import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { Badge } from '@/components/ui/Badge';
import { empresasHospitalar, categorias } from '@/data/empresas';

export const metadata: Metadata = {
  title: 'Empresas — Engenharia Biomedica',
  description:
    'Diretorio completo de empresas de dispositivos medicos, equipamentos hospitalares e healthtech no Brasil. Multinacionais, nacionais e expositores da Hospitalar 2026.',
  alternates: { canonical: '/mercado/empresas' },
  openGraph: {
    images: [{ url: '/api/og?title=Empresas%20%E2%80%94%20Engenharia%20Biomedica&category=Mercado', width: 1200, height: 630 }],
  },
};

const multinacionais = [
  { nome: 'Philips Healthcare', area: 'Diagnostico por imagem, monitoramento, informatica em saude', destaque: '€350 mi investidos desde 2007' },
  { nome: 'GE Healthcare', area: 'Imagem medica, monitoramento, biomanufatura', destaque: 'US$ 250 mi em centro de pesquisa; Brasil e 3o mercado global' },
  { nome: 'Siemens Healthineers', area: 'Imagem, diagnostico laboratorial, saude digital', destaque: 'Fabrica em Joinville/SC (R$ 50 mi)' },
  { nome: 'Medtronic', area: 'Dispositivos cardiacos, neuromodulacao, cirurgia robotica', destaque: 'Operacoes nacionais' },
  { nome: 'Johnson & Johnson', area: 'Dispositivos cirurgicos, ortopedia, oftalmologia', destaque: 'Forte presenca' },
  { nome: 'Boston Scientific', area: 'Cardiologia, endoscopia, neuromodulacao', destaque: 'Parceira da SBEB em premio de inovacao' },
  { nome: 'Stryker', area: 'Ortopedia, equipamentos cirurgicos', destaque: 'Operacoes nacionais' },
  { nome: 'BD (Becton Dickinson)', area: 'Diagnostico, sistemas de infusao', destaque: 'Operacoes nacionais' },
];

const nacionais = [
  { nome: 'Fanem', sede: 'Sao Paulo/SP', fundacao: '1924', area: 'Incubadoras neonatais, bercos aquecidos — pioneira brasileira e multinacional' },
  { nome: 'Instramed', sede: 'Porto Alegre/RS', fundacao: '1986', area: 'Monitores cardiacos, desfibriladores — exporta para 30+ paises' },
  { nome: 'Lifemed', sede: 'Pelotas/RS', fundacao: '~40 anos', area: 'Equipamentos hospitalares — presente em 2.000+ hospitais' },
  { nome: 'Magnamed', sede: 'Cotia/SP', fundacao: '2005', area: 'Ventiladores pulmonares — presente em 40+ paises; fundada por 3 engenheiros' },
  { nome: 'BMR Medical', sede: 'Curitiba/PR', fundacao: '—', area: 'Dispositivos para oncologia e cirurgia — certificacoes FDA, CE, ANVISA' },
];

export default function EmpresasPage() {
  const totalEmpresas = empresasHospitalar.length;

  return (
    <>
      <PageHeader
        overline="Mercado de Trabalho"
        title="Empresas que Empregam Engenheiros Biomedicos"
        description={`Gigantes globais e campeas nacionais dividem o mercado brasileiro de dispositivos medicos, que movimentou R$ 26,1 bilhoes em 2024. Confira o diretorio com ${totalEmpresas}+ expositores da Hospitalar 2026.`}
        breadcrumbs={[{ label: 'Mercado', href: '/mercado' }, { label: 'Empresas' }]}
      />

      <section className="container-page py-10 lg:py-14">
        {/* Multinacionais */}
        <h2 className="text-h2 text-primary-800 mb-4">Multinacionais com Operacao no Brasil</h2>
        <div className="grid gap-3 sm:grid-cols-2 mb-12">
          {multinacionais.map((e) => (
            <div key={e.nome} className="card p-5">
              <h3 className="text-h4 text-slate-900 mb-1">{e.nome}</h3>
              <p className="text-body-sm text-slate-500">{e.area}</p>
              <p className="text-xs text-teal-600 font-semibold mt-2">{e.destaque}</p>
            </div>
          ))}
        </div>

        {/* Nacionais de destaque */}
        <h2 className="text-h2 text-primary-800 mb-4">Empresas Nacionais de Destaque</h2>
        <div className="card overflow-x-auto mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Empresa</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Sede</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Fundacao</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Area</th>
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

        {/* Diretorio Hospitalar 2026 */}
        <div className="border-t border-slate-200 pt-10 mb-10">
          <h2 className="text-h2 text-primary-800 mb-2">Diretorio de Expositores — Hospitalar 2026</h2>
          <p className="text-body text-slate-500 font-serif mb-8 max-w-3xl">
            A Hospitalar e a maior feira de saude da America Latina, realizada anualmente em Sao Paulo.
            Abaixo, {totalEmpresas} empresas confirmadas para a edicao 2026, organizadas por setor de atuacao.
          </p>

          {categorias.map((cat) => {
            const empresasDaCategoria = empresasHospitalar
              .filter((e) => e.categoriaId === cat.id)
              .sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));

            if (empresasDaCategoria.length === 0) return null;

            return (
              <div key={cat.id} className="mb-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-h3 text-slate-900">{cat.nome}</h3>
                  <Badge variant={cat.badgeVariant}>{empresasDaCategoria.length} empresas</Badge>
                </div>
                <p className="text-body-sm text-slate-400 mb-4 font-serif">{cat.descricao}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                  {empresasDaCategoria.map((empresa, i) => (
                    <div
                      key={`${empresa.nome}-${i}`}
                      className="flex items-center justify-between gap-2 px-4 py-2.5 rounded-lg border border-slate-100 bg-white hover:border-slate-200 hover:shadow-sm transition-all"
                    >
                      <span className="text-sm text-slate-700 font-medium truncate">{empresa.nome}</span>
                      {empresa.stand !== 'N/C' && (
                        <span className="text-xs font-mono text-slate-400 flex-shrink-0">{empresa.stand}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Associacoes */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-primary-50 border border-primary-200">
            <h3 className="text-h4 text-primary-800 mb-2">ABIMO</h3>
            <p className="text-body-sm text-primary-700 font-serif">Associacao Brasileira da Industria de Dispositivos Medicos. Fundada em 1962, 300+ associados, foco na industria nacional.</p>
          </div>
          <div className="p-5 rounded-xl bg-teal-50 border border-teal-200">
            <h3 className="text-h4 text-teal-800 mb-2">ABIMED</h3>
            <p className="text-body-sm text-teal-700 font-serif">Associacao Brasileira da Industria de Tecnologia para Saude. ~200 empresas representando ~65% do faturamento do segmento.</p>
          </div>
        </div>
      </section>
    </>
  );
}
