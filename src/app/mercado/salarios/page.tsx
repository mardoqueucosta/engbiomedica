import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Salários — Engenharia Biomédica',
  description: 'Salário médio do engenheiro biomédico no Brasil: R$ 8.658/mês. Dados por nível, estado e comparativo com outras engenharias.',
  alternates: { canonical: '/mercado/salarios' },
  openGraph: {
    images: [{ url: '/api/og?title=Sal%C3%A1rios%20%E2%80%94%20Engenharia%20Biom%C3%A9dica&category=Mercado', width: 1200, height: 630 }],
  },
};

const salarios = {
  biomedico: [
    { nivel: 'Júnior', valor: 'R$ 7.659' },
    { nivel: 'Pleno', valor: 'R$ 10.246' },
    { nivel: 'Sênior', valor: 'R$ 13.262' },
  ],
  bioengenheiro: [
    { nivel: 'Júnior', valor: 'R$ 8.013' },
    { nivel: 'Pleno', valor: 'R$ 10.714' },
    { nivel: 'Sênior', valor: 'R$ 13.892' },
  ],
};

const comparativo = [
  { profissao: 'Engenharia de Petróleo', salario: 'R$ 15.982' },
  { profissao: 'Engenharia de Computação', salario: 'R$ 13.794' },
  { profissao: 'Engenharia Civil', salario: 'R$ 9.485' },
  { profissao: 'Engenharia Biomédica', salario: 'R$ 8.658', destaque: true },
  { profissao: 'Bioengenheiro', salario: 'R$ 8.834', destaque: true },
];

export default function SalariosPage() {
  return (
    <>
      <PageHeader
        overline="Mercado de Trabalho"
        title="Salários da Engenharia Biomédica"
        description="Dados do CAGED/Portal Salário (2026) para Engenheiro Biomédico (CBO 2143-80) e Bioengenheiro (CBO 2011-05). Jornada de 40 horas semanais."
        breadcrumbs={[{ label: 'Mercado', href: '/mercado' }, { label: 'Salários' }]}
      />

      <section className="container-page py-10 lg:py-14">
        {/* Médias gerais */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="card p-6 border-l-4 border-l-primary-500">
            <div className="text-overline uppercase text-slate-400 mb-1">Engenheiro Biomédico · CBO 2143-80</div>
            <div className="font-mono text-3xl font-bold text-primary-700">R$ 8.658<span className="text-lg text-slate-400">/mês</span></div>
            <div className="text-xs text-slate-400 mt-1">Piso R$ 8.422 · Teto R$ 14.782 · Amostra: 137 profissionais</div>
          </div>
          <div className="card p-6 border-l-4 border-l-teal-500">
            <div className="text-overline uppercase text-slate-400 mb-1">Bioengenheiro · CBO 2011-05</div>
            <div className="font-mono text-3xl font-bold text-teal-700">R$ 8.834<span className="text-lg text-slate-400">/mês</span></div>
            <div className="text-xs text-slate-400 mt-1">Amostra: 392 profissionais nos últimos 12 meses</div>
          </div>
        </div>

        {/* Tabelas por nível */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <div>
            <h2 className="text-h3 text-slate-900 mb-3">Engenheiro Biomédico por Nível</h2>
            <div className="card overflow-hidden">
              {salarios.biomedico.map((s) => (
                <div key={s.nivel} className="flex justify-between items-center px-5 py-3.5 border-b border-slate-50 last:border-0">
                  <span className="text-sm font-medium text-slate-700">{s.nivel}</span>
                  <span className="font-mono text-sm font-semibold text-primary-700">{s.valor}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-h3 text-slate-900 mb-3">Bioengenheiro por Nível</h2>
            <div className="card overflow-hidden">
              {salarios.bioengenheiro.map((s) => (
                <div key={s.nivel} className="flex justify-between items-center px-5 py-3.5 border-b border-slate-50 last:border-0">
                  <span className="text-sm font-medium text-slate-700">{s.nivel}</span>
                  <span className="font-mono text-sm font-semibold text-teal-700">{s.valor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Comparativo */}
        <h2 className="text-h2 text-primary-800 mb-4">Comparativo com Outras Engenharias</h2>
        <div className="card overflow-hidden mb-10">
          {comparativo.map((c) => (
            <div key={c.profissao} className={`flex justify-between items-center px-5 py-3.5 border-b border-slate-50 last:border-0 ${c.destaque ? 'bg-primary-50/50' : ''}`}>
              <span className={`text-sm ${c.destaque ? 'font-semibold text-primary-800' : 'text-slate-700'}`}>{c.profissao}</span>
              <span className={`font-mono text-sm font-semibold ${c.destaque ? 'text-primary-700' : 'text-slate-600'}`}>{c.salario}</span>
            </div>
          ))}
        </div>

        <div className="p-5 rounded-xl bg-teal-50 border border-teal-200">
          <h3 className="text-h4 text-teal-800 mb-2">Perfil Típico de Contratação</h3>
          <p className="text-body-sm text-teal-700 font-serif">
            Homem, 29 anos, formação em Engenharia Biomédica, jornada de 44 horas semanais, setor hospitalar, em São Paulo. Os estados com melhores salários são DF, GO e SP. A profissão é contemplada pela Lei 4.950-A/1966 sobre salário mínimo profissional de engenheiros.
          </p>
        </div>
      </section>
    </>
  );
}
