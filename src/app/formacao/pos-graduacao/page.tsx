import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Pós-Graduação em Engenharia Biomédica',
  description: 'Programas de mestrado e doutorado em Engenharia Biomédica no Brasil. Conceitos CAPES, linhas de pesquisa e programas correlatos.',
};

const programas = [
  { inst: 'COPPE/UFRJ', nome: 'Engenharia Biomédica (PEB)', niveis: 'M/D', capes: '6', linhas: 'Processamento de sinais e imagens, engenharia pulmonar, ultrassom, instrumentação', destaque: true },
  { inst: 'UFPE', nome: 'Eng. Biomédica (PPGEB)', niveis: 'M/D', capes: '4–5', linhas: 'Instrumentação, computação biomédica, informática em saúde, IA', destaque: false },
  { inst: 'UFU', nome: 'Eng. Biomédica (PPGEB)', niveis: 'M/D', capes: '—', linhas: 'Instrumentação, processamento de sinais, engenharia clínica', destaque: false },
  { inst: 'UTFPR', nome: 'Eng. Biomédica (PPGEB)', niveis: 'MP', capes: '4', linhas: 'Único mestrado profissional em EB no Sul', destaque: false },
  { inst: 'UFABC', nome: 'Eng. Biomédica (PPGEBM)', niveis: 'M', capes: '—', linhas: 'Biomateriais, biomecânica, imagens médicas, biofotônica', destaque: false },
  { inst: 'UnB Gama', nome: 'Eng. Biomédica (PPGEB)', niveis: 'M', capes: '—', linhas: 'Tecnologias em EB, computação inteligente', destaque: false },
  { inst: 'UMC', nome: 'Engenharia Biomédica', niveis: 'M/D', capes: '—', linhas: 'Engenharia biomédica aplicada', destaque: false },
  { inst: 'Universidade Brasil', nome: 'Engenharia Biomédica', niveis: 'M/D', capes: '—', linhas: 'Reabilitação, nanociências', destaque: false },
];

const correlatos = [
  { inst: 'USP — Escola Politécnica', desc: 'PPG em Engenharia Elétrica com área de concentração em EB (LEB fundado em 1981)' },
  { inst: 'UNICAMP — FEEC', desc: 'PPG em Engenharia Elétrica com área em EB; Centro de Engenharia Biomédica (CEB) criado em 1982' },
  { inst: 'USP São Carlos', desc: 'PPG Interunidades em Bioengenharia (EESC/FMRP/IQSC)' },
  { inst: 'UFSC', desc: 'PPG em Engenharia Elétrica com área em EB via Instituto de Engenharia Biomédica (IEB-UFSC)' },
  { inst: 'UFSJ', desc: 'Programa de Bioengenharia (PPBE)' },
];

export default function PosGraduacaoPage() {
  return (
    <>
      <PageHeader
        overline="Formação Acadêmica"
        title="Pós-Graduação em Engenharia Biomédica"
        description="O Brasil possui 16 programas stricto sensu específicos. O PEB/COPPE-UFRJ, fundado em 1971, é o único com conceito de excelência (6) da CAPES e já formou mais de 509 mestres e 165 doutores."
        breadcrumbs={[{ label: 'Formação', href: '/formacao' }, { label: 'Pós-Graduação' }]}
      />

      <section className="container-page py-10 lg:py-14">
        <h2 className="text-h2 text-primary-800 mb-4">Programas Específicos</h2>
        <div className="card overflow-x-auto mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Instituição</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Programa</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Níveis</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">CAPES</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Linhas de Pesquisa</th>
              </tr>
            </thead>
            <tbody>
              {programas.map((p) => (
                <tr key={p.inst} className={`border-b border-slate-50 hover:bg-primary-50/50 transition-colors ${p.destaque ? 'bg-teal-50/30' : ''}`}>
                  <td className="px-4 py-3 font-semibold text-slate-900">{p.inst}</td>
                  <td className="px-4 py-3 text-slate-600">{p.nome}</td>
                  <td className="px-4 py-3 font-mono text-xs font-semibold text-teal-700">{p.niveis}</td>
                  <td className="px-4 py-3 font-mono text-primary-600 font-bold text-lg">{p.capes}</td>
                  <td className="px-4 py-3 text-slate-500 text-xs">{p.linhas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-h2 text-primary-800 mb-4">Programas Correlatos</h2>
        <p className="text-body-sm text-slate-500 font-serif mb-4">Programas de pós-graduação mais amplos com linhas de pesquisa relevantes em Engenharia Biomédica.</p>
        <div className="space-y-3">
          {correlatos.map((c) => (
            <div key={c.inst} className="card p-5">
              <span className="font-semibold text-slate-900">{c.inst}</span>
              <p className="text-body-sm text-slate-500 font-serif mt-1">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
