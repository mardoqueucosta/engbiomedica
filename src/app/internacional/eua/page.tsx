import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { StatCard } from '@/components/ui/StatCard';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Panorama EUA — Engenharia Biomédica',
  description:
    'Engenharia Biomédica nos EUA: 400+ programas ABET, mercado de US$ 188–256 bilhões, regulação FDA, venture capital e hubs de inovação em medtech.',
};

const sites = [
  { nome: 'FDA CDRH', url: 'https://www.fda.gov/medical-devices', desc: 'Center for Devices and Radiological Health — regulação de dispositivos médicos.' },
  { nome: 'NIH NIBIB', url: 'https://www.nibib.nih.gov', desc: 'National Institute of Biomedical Imaging and Bioengineering — pesquisa e financiamento federal.' },
  { nome: 'BMES', url: 'https://www.bmes.org', desc: 'Biomedical Engineering Society — principal sociedade profissional, acreditação ABET.' },
  { nome: 'IEEE EMBS', url: 'https://www.embs.org', desc: 'Maior sociedade internacional — 12.000+ membros em 97 países, periódicos Q1.' },
  { nome: 'AAMI', url: 'https://www.aami.org', desc: 'Association for the Advancement of Medical Instrumentation — normas técnicas e certificações.' },
  { nome: 'AdvaMed', url: 'https://www.advamed.org', desc: 'Associação da indústria de dispositivos médicos — 400+ empresas membros.' },
  { nome: 'ABET', url: 'https://www.abet.org', desc: 'Acreditação de programas de engenharia — 400+ programas de BME acreditados.' },
  { nome: 'ACCE', url: 'https://accenet.org', desc: 'American College of Clinical Engineering — certificação e advocacy.' },
  { nome: 'PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov', desc: 'Maior base de dados biomédica do mundo — 37+ milhões de registros.' },
  { nome: 'MD+DI', url: 'https://www.mddionline.com', desc: 'Medical Device and Diagnostics Industry — mídia setorial de referência.' },
];

const hubs = [
  { nome: 'Silicon Valley / Bay Area', foco: 'IA, saúde digital, wearables' },
  { nome: 'Boston / Cambridge', foco: 'Biotech, medtech, neurotecnologia' },
  { nome: 'Minneapolis / St. Paul', foco: 'Implantáveis, cardiovascular' },
  { nome: 'Research Triangle (NC)', foco: 'Dispositivos, diagnósticos' },
  { nome: 'Houston / Texas Medical Center', foco: 'Dispositivos cirúrgicos' },
];

export default function EuaPage() {
  return (
    <>
      <PageHeader
        overline="Internacional"
        title="Panorama dos EUA"
        description="O maior mercado de dispositivos médicos do mundo, com regulação FDA, 400+ programas ABET-acreditados e ecossistema de VC de US$ 7,5 bilhões."
        breadcrumbs={[
          { label: 'Internacional', href: '/internacional' },
          { label: 'Panorama EUA' },
        ]}
      />

      <section className="container-page py-10 lg:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <StatCard number="US$ 256 bi" label="Mercado Medtech" accent />
          <StatCard number="~40%" label="Do Mercado Global" />
          <StatCard number="US$ 7,5 bi" label="VC Medtech 2024" />
          <StatCard number="1.250+" label="Dispositivos IA (FDA)" />
        </div>

        <h2 className="text-h2 text-primary-800 mb-4">Formação Acadêmica</h2>
        <div className="card p-6 mb-12">
          <p className="text-body-sm text-slate-600 font-serif mb-3">
            Os EUA possuem mais de <strong>400 programas de Engenharia Biomédica acreditados pelo ABET</strong>, distribuídos entre Bachelor (4 anos), Master's e PhD. A formação segue o modelo "broad undergraduate + specialized graduate" com ênfase em capstone design projects e hands-on lab experience. As universidades de referência incluem Johns Hopkins, MIT, Stanford, Georgia Tech, Duke e a UC San Diego.
          </p>
          <p className="text-body-sm text-slate-600 font-serif">
            Ao contrário do Brasil (5 anos), o Bachelor norte-americano dura 4 anos, com muitos estudantes prosseguindo para Master's (1–2 anos) ou PhD (4–6 anos). A certificação profissional é opcional via PE License (NCEES), diferente do registro obrigatório no CREA brasileiro.
          </p>
        </div>

        <h2 className="text-h2 text-primary-800 mb-4">Hubs de Inovação Medtech</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {hubs.map((h) => (
            <div key={h.nome} className="card p-5">
              <h3 className="text-h4 text-slate-900 mb-1">{h.nome}</h3>
              <p className="text-body-sm text-slate-500 font-serif">{h.foco}</p>
            </div>
          ))}
        </div>

        <h2 className="text-h2 text-primary-800 mb-4">
          10 Sites de Referência nos EUA
        </h2>
        <div className="space-y-3">
          {sites.map((s, i) => (
            <div key={s.nome} className="card p-5 border-l-4 border-l-primary-400">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="font-mono text-xs text-slate-400">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-h4 text-slate-900">{s.nome}</h3>
              </div>
              <p className="text-body-sm text-slate-500 font-serif mb-1">{s.desc}</p>
              <span className="text-caption text-teal-600 font-mono">{s.url}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
