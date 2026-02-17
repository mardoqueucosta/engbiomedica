import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'CONFEA/CREA — Regulamentação Profissional',
  description: 'Registro, atribuições e competências do engenheiro biomédico no sistema CONFEA/CREA. Decisão PL-0034/2008 e Resolução 1.103/2018.',
  alternates: { canonical: '/regulamentacao/confea-crea' },
  openGraph: {
    images: [{ url: '/api/og?title=CONFEA%2FCREA%20%E2%80%94%20Regulamenta%C3%A7%C3%A3o%20Profissional&category=Regulamenta%C3%A7%C3%A3o', width: 1200, height: 630 }],
  },
};

const marcos = [
  { doc: 'Lei 5.194/1966', desc: 'Base legal do exercício profissional das engenharias no Brasil.' },
  { doc: 'Decisão PL-0034/2008', desc: 'Inseriu o título "Engenheiro Biomédico" na Tabela de Títulos Profissionais do CONFEA (código 121-12-00, grupo Engenharia, modalidade Eletricista).' },
  { doc: 'Resolução CONFEA nº 1.103/2018', desc: 'Discrimina as atividades e competências profissionais do engenheiro biomédico em três campos de atuação.' },
  { doc: 'Reconhecimento MTE (2022)', desc: 'Ministério do Trabalho e Previdência reconheceu oficialmente a profissão com CBO 2143-80.' },
];

const campos = [
  { num: 'I', titulo: 'Motricidade e Funcionamento de Órgãos', desc: 'Serviços, dispositivos e sistemas de auxílio à motricidade e funcionamento de órgãos.' },
  { num: 'II', titulo: 'Instrumentos e Equipamentos Eletromédicos', desc: 'Instrumentos e equipamentos elétricos/eletrônicos de tecnologias para saúde, imagenologia, monitoração e sinais vitais.' },
  { num: 'III', titulo: 'Dispositivos Médicos e Hospitalares', desc: 'Dispositivos e equipamentos médicos, odontológicos e hospitalares para diagnóstico, tratamento e cirurgia.' },
];

export default function ConfeaCreaPage() {
  return (
    <>
      <PageHeader
        overline="Regulamentação"
        title="CONFEA/CREA — Registro Profissional"
        description="O engenheiro biomédico deve se registrar no CREA do seu estado para exercer legalmente a profissão, emitir ART e é contemplado pela Lei 4.950-A/1966 sobre salário mínimo profissional."
        breadcrumbs={[{ label: 'Regulamentação', href: '/regulamentacao' }, { label: 'CONFEA/CREA' }]}
      />

      <section className="container-page py-10 lg:py-14">
        <h2 className="text-h2 text-primary-800 mb-4">Marcos Regulatórios</h2>
        <div className="space-y-3 mb-12">
          {marcos.map((m) => (
            <div key={m.doc} className="card p-5 flex gap-4 items-start">
              <span className="font-mono text-xs font-semibold text-primary-600 bg-primary-50 px-2.5 py-1 rounded-md flex-shrink-0 whitespace-nowrap">{m.doc}</span>
              <p className="text-body-sm text-slate-600 font-serif">{m.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-h2 text-primary-800 mb-4">Campos de Competência (Res. 1.103/2018)</h2>
        <div className="grid gap-4 lg:grid-cols-3 mb-10">
          {campos.map((c) => (
            <div key={c.num} className="card p-5 border-t-4 border-t-primary-500">
              <div className="font-mono text-sm font-bold text-primary-600 mb-2">Campo {c.num}</div>
              <h3 className="text-h4 text-slate-900 mb-2">{c.titulo}</h3>
              <p className="text-body-sm text-slate-500 font-serif">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-teal-50 border border-teal-200">
            <h3 className="text-h4 text-teal-800 mb-2">Obrigações do Profissional</h3>
            <p className="text-body-sm text-teal-700 font-serif">
              Registro no CREA estadual, emissão de ART para atividades técnicas, cumprimento do Código de Ética Profissional e piso salarial da Lei 4.950-A/1966. A prática sem registro é exercício ilegal da profissão.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-amber-100 border border-amber-400">
            <h3 className="text-h4 text-slate-800 mb-2">Engenharia Clínica</h3>
            <p className="text-body-sm text-slate-700 font-serif">
              Ainda não possui regulamentação específica como subárea. A Decisão PL-1843/2016 determinou que qualquer engenheiro registrado no CREA pode atuar como engenheiro clínico.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
