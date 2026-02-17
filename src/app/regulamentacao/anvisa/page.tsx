import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'ANVISA — Regulação de Dispositivos Médicos',
  description: 'Classes de risco, registro, Boas Práticas de Fabricação e tecnovigilância. RDC 751/2022, RDC 665/2022, RDC 657/2022 (SaMD).',
  alternates: { canonical: '/regulamentacao/anvisa' },
  openGraph: {
    images: [{ url: '/api/og?title=ANVISA%20%E2%80%94%20Regula%C3%A7%C3%A3o%20de%20Dispositivos%20M%C3%A9dicos&category=Regulamenta%C3%A7%C3%A3o', width: 1200, height: 630 }],
  },
};

const classes = [
  { classe: 'I', risco: 'Baixo', via: 'Notificação simplificada', exemplos: 'Abaixadores de língua, estetoscópios' },
  { classe: 'II', risco: 'Médio-baixo', via: 'Notificação', exemplos: 'Agulhas hipodérmicas, equipamentos de sucção' },
  { classe: 'III', risco: 'Médio-alto', via: 'Registro', exemplos: 'Ventiladores pulmonares, implantes ortopédicos' },
  { classe: 'IV', risco: 'Alto', via: 'Registro', exemplos: 'Válvulas cardíacas, stents, marca-passos' },
];

const rdcs = [
  { num: 'RDC 751/2022', titulo: 'Classificação e registro de dispositivos médicos', desc: 'Marco regulatório principal. Define 4 classes de risco (I–IV). Registro com validade de 10 anos. Estrutura alinhada ao IMDRF.' },
  { num: 'RDC 665/2022', titulo: 'Boas Práticas de Fabricação (BPF)', desc: 'Requisitos de fabricação baseados na Resolução Mercosul GMC 20/2011.' },
  { num: 'RDC 848/2024', titulo: 'Requisitos de segurança e desempenho', desc: 'Requisitos essenciais atualizados para dispositivos médicos.' },
  { num: 'RDC 657/2022', titulo: 'Software como Dispositivo Médico (SaMD)', desc: 'Regulamentação específica para software médico autônomo.' },
  { num: 'RDC 67/2009', titulo: 'Tecnovigilância', desc: 'Sistema de notificação de eventos adversos: e-NOTIVISA e SISTEC.' },
];

export default function AnvisaPage() {
  return (
    <>
      <PageHeader
        overline="Regulamentação"
        title="ANVISA — Dispositivos Médicos"
        description="A Agência Nacional de Vigilância Sanitária (Lei 9.782/1999) regula todo o ciclo de vida dos dispositivos médicos no Brasil, da fabricação à vigilância pós-mercado."
        breadcrumbs={[{ label: 'Regulamentação', href: '/regulamentacao' }, { label: 'ANVISA' }]}
      />

      <section className="container-page py-10 lg:py-14">
        <h2 className="text-h2 text-primary-800 mb-4">Classes de Risco (RDC 751/2022)</h2>
        <div className="card overflow-x-auto mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Classe</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Risco</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Via Regulatória</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Exemplos</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((c) => (
                <tr key={c.classe} className="border-b border-slate-50 hover:bg-primary-50/50 transition-colors">
                  <td className="px-4 py-3"><Badge variant={c.classe === 'IV' ? 'coral' : c.classe === 'III' ? 'primary' : 'teal'}>Classe {c.classe}</Badge></td>
                  <td className="px-4 py-3 text-slate-700 font-medium">{c.risco}</td>
                  <td className="px-4 py-3 text-slate-600">{c.via}</td>
                  <td className="px-4 py-3 text-slate-500 text-xs">{c.exemplos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-h2 text-primary-800 mb-4">Principais Regulamentações</h2>
        <div className="space-y-3 mb-10">
          {rdcs.map((r) => (
            <div key={r.num} className="card p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs font-semibold text-primary-600 bg-primary-50 px-2.5 py-1 rounded-md">{r.num}</span>
                <h3 className="text-h4 text-slate-900">{r.titulo}</h3>
              </div>
              <p className="text-body-sm text-slate-500 font-serif">{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-5 rounded-xl bg-teal-50 border border-teal-200">
          <h3 className="text-h4 text-teal-800 mb-2">Atuação do Engenheiro Biomédico</h3>
          <p className="text-body-sm text-teal-700 font-serif">
            Desenvolvimento e registro de dispositivos, implementação de BPF, gestão de riscos (ISO 14971), tecnovigilância, certificação de conformidade (INMETRO/SBAC), gestão do parque tecnológico hospitalar e ensaios de segurança conforme IEC 60601.
          </p>
        </div>
      </section>
    </>
  );
}
