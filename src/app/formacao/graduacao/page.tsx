import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Cursos de Graduação em Engenharia Biomédica',
  description: 'Lista completa dos 28+ cursos de graduação em Engenharia Biomédica no Brasil. Universidades públicas e privadas, notas MEC, vagas e localização.',
};

const cursosPublicas = [
  { nome: 'UFPE', cidade: 'Recife/PE', inicio: '2001', nota: '4', obs: 'Pioneira entre as públicas' },
  { nome: 'UFU', cidade: 'Uberlândia/MG', inicio: '~2002', nota: '—', obs: 'Uma das primeiras federais' },
  { nome: 'UFABC', cidade: 'São Bernardo do Campo/SP', inicio: '~2009', nota: '—', obs: '125 vagas · Ingresso via BC&T · 3.720h' },
  { nome: 'UFSJ', cidade: 'São João Del Rei/MG', inicio: '—', nota: '—', obs: 'Presencial' },
  { nome: 'UFPA', cidade: 'Belém/PA', inicio: '—', nota: '—', obs: 'Única na região Norte' },
  { nome: 'UFRN', cidade: 'Natal/RN', inicio: '—', nota: '—', obs: 'Presencial' },
  { nome: 'UNIFESP', cidade: 'São José dos Campos/SP', inicio: '—', nota: '—', obs: 'Presencial' },
];

const cursosPrivadas = [
  { nome: 'UNIVAP', cidade: 'São José dos Campos/SP', obs: 'Pioneira absoluta — primeiro curso no Brasil (2001)' },
  { nome: 'PUC-PR', cidade: 'Curitiba/PR', obs: 'Nota máxima (5) no MEC · Dupla titulação com Portugal' },
  { nome: 'PUC-SP', cidade: 'Sorocaba/SP', obs: 'Metodologia PBL' },
  { nome: 'PUC-Campinas', cidade: 'Campinas/SP', obs: 'Criação recente' },
  { nome: 'INATEL', cidade: 'Santa Rita do Sapucaí/MG', obs: 'Referência em telecom aplicada à saúde' },
  { nome: 'Faculdade Albert Einstein', cidade: 'São Paulo/SP', obs: 'Infraestrutura do Hospital Albert Einstein' },
  { nome: 'FUMEC', cidade: 'Belo Horizonte/MG', obs: 'Presencial' },
  { nome: 'UFN', cidade: 'Santa Maria/RS', obs: 'Comunitária' },
  { nome: 'UNISINOS', cidade: 'São Leopoldo/RS', obs: 'Oferta recente' },
  { nome: 'IBMR', cidade: 'Rio de Janeiro/RJ', obs: 'Privada' },
  { nome: 'UNA', cidade: 'Belo Horizonte/MG', obs: 'Privada' },
  { nome: 'USJT', cidade: 'São Paulo/SP', obs: 'Privada' },
  { nome: 'FACVEST', cidade: 'Lages/SC', obs: 'Privada' },
  { nome: 'UniAGES', cidade: 'Paripiranga/BA', obs: 'Privada' },
  { nome: 'FECAF', cidade: 'Taboão da Serra/SP', obs: 'Privada' },
  { nome: 'UNINTER', cidade: 'Curitiba/PR', obs: 'EaD/Presencial' },
];

export default function GraduacaoPage() {
  return (
    <>
      <PageHeader
        overline="Formação Acadêmica"
        title="Cursos de Graduação em Engenharia Biomédica"
        description="Diretório completo dos 28+ cursos em universidades públicas e privadas de todo o Brasil. Bacharelado com duração média de 5 anos e carga horária mínima de 3.600 horas."
        breadcrumbs={[
          { label: 'Formação', href: '/formacao' },
          { label: 'Graduação' },
        ]}
      />

      <section className="container-page py-10 lg:py-14">
        {/* Info cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {[
            { label: 'Duração', value: '5 anos (10 semestres)' },
            { label: 'Carga Horária Mínima', value: '3.600 horas' },
            { label: 'Modalidade', value: 'Presencial / EaD' },
            { label: 'Estágio Obrigatório', value: '160–168 horas' },
          ].map((i) => (
            <div key={i.label} className="card p-4">
              <div className="text-overline uppercase text-slate-400 mb-1">{i.label}</div>
              <div className="font-mono text-sm font-semibold text-primary-700">{i.value}</div>
            </div>
          ))}
        </div>

        {/* Universidades Públicas */}
        <h2 className="text-h2 text-primary-800 mb-4">Universidades Públicas</h2>
        <div className="card overflow-hidden mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Instituição</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Cidade/UF</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Início</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Nota MEC</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Observações</th>
              </tr>
            </thead>
            <tbody>
              {cursosPublicas.map((c) => (
                <tr key={c.nome} className="border-b border-slate-50 hover:bg-primary-50/50 transition-colors">
                  <td className="px-4 py-3 font-semibold text-slate-900">{c.nome}</td>
                  <td className="px-4 py-3 text-slate-600">{c.cidade}</td>
                  <td className="px-4 py-3 font-mono text-slate-500">{c.inicio}</td>
                  <td className="px-4 py-3 font-mono text-primary-600 font-semibold">{c.nota}</td>
                  <td className="px-4 py-3 text-slate-500">{c.obs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Universidades Privadas */}
        <h2 className="text-h2 text-primary-800 mb-4">Universidades Privadas e Confessionais</h2>
        <div className="grid gap-3 lg:grid-cols-2">
          {cursosPrivadas.map((c) => (
            <div key={c.nome} className="card p-4 flex items-start gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-slate-900">{c.nome}</span>
                  <Badge variant="slate">{c.cidade}</Badge>
                </div>
                <p className="text-body-sm text-slate-500">{c.obs}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Geographic note */}
        <div className="mt-10 p-5 rounded-xl bg-teal-50 border border-teal-200">
          <h3 className="text-h4 text-teal-800 mb-2">Distribuição Geográfica</h3>
          <p className="text-body-sm text-teal-700 font-serif">
            Forte concentração no Sudeste (especialmente São Paulo e Minas Gerais), com presença crescente no Nordeste (PE, BA, RN) e Sul (PR, RS, SC). A região Norte tem apenas a UFPA e o Centro-Oeste ainda carece de oferta consolidada.
          </p>
        </div>
      </section>
    </>
  );
}
