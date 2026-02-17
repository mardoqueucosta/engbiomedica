import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Normas Técnicas — Engenharia Biomédica',
  description: 'IEC 60601, ISO 13485, ISO 14971 e legislação fundamental para a Engenharia Biomédica no Brasil.',
};

const normas = [
  { codigo: 'ABNT NBR IEC 60601', titulo: 'Equipamentos Eletromédicos', desc: 'Base normativa para segurança e desempenho. Parte 1: requisitos gerais. Normas particulares para cada tipo de equipamento.' },
  { codigo: 'ISO 13485', titulo: 'Sistema de Gestão da Qualidade', desc: 'Requisitos de sistema de qualidade específicos para dispositivos médicos. Base para BPF.' },
  { codigo: 'ISO 14971', titulo: 'Gerenciamento de Risco', desc: 'Aplicação de gerenciamento de risco a dispositivos médicos — análise, avaliação e controle de riscos.' },
  { codigo: 'IEC 62366', titulo: 'Engenharia de Usabilidade', desc: 'Processo de engenharia de usabilidade aplicado a dispositivos médicos.' },
  { codigo: 'IEC 62304', titulo: 'Ciclo de Vida de Software', desc: 'Processos de ciclo de vida de software para dispositivos médicos — relevante para SaMD.' },
];

const legislacao = [
  { lei: 'Lei 5.194/1966', desc: 'Base legal do exercício profissional das engenharias.' },
  { lei: 'Lei 4.950-A/1966', desc: 'Salário mínimo profissional de engenheiros, vinculado ao salário mínimo conforme jornada diária.' },
  { lei: 'Lei 9.782/1999', desc: 'Criação da ANVISA.' },
  { lei: 'Lei 10.973/2004', desc: 'Lei de Inovação — incentivos à inovação e pesquisa. Alterada pela Lei 13.243/2016.' },
  { lei: 'LC 182/2021', desc: 'Marco Legal das Startups — define startups, Sandbox Regulatório, contratação pública inovadora.' },
  { lei: 'Decreto 9.283/2018', desc: 'Regulamentação do Marco Legal da Inovação.' },
];

export default function NormasPage() {
  return (
    <>
      <PageHeader
        overline="Regulamentação"
        title="Normas Técnicas e Legislação"
        description="O arcabouço normativo essencial para o engenheiro biomédico, da série IEC 60601 às leis de inovação que impulsionam o setor."
        breadcrumbs={[{ label: 'Regulamentação', href: '/regulamentacao' }, { label: 'Normas Técnicas' }]}
      />

      <section className="container-page py-10 lg:py-14">
        <h2 className="text-h2 text-primary-800 mb-4">Normas Técnicas Centrais</h2>
        <div className="space-y-3 mb-12">
          {normas.map((n) => (
            <div key={n.codigo} className="card p-5 border-l-4 border-l-primary-400">
              <div className="font-mono text-xs font-semibold text-primary-600 mb-1">{n.codigo}</div>
              <h3 className="text-h4 text-slate-900 mb-1">{n.titulo}</h3>
              <p className="text-body-sm text-slate-500 font-serif">{n.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-h2 text-primary-800 mb-4">Legislação Fundamental</h2>
        <div className="space-y-3">
          {legislacao.map((l) => (
            <div key={l.lei} className="card p-5 flex gap-4 items-start">
              <span className="font-mono text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md flex-shrink-0 whitespace-nowrap">{l.lei}</span>
              <p className="text-body-sm text-slate-600 font-serif">{l.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
