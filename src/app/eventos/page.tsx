import { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Eventos — Engenharia Biomédica',
  description:
    'Calendário de eventos nacionais e internacionais de Engenharia Biomédica: CBEB, Feira Hospitalar, IEEE EMBC, BMES Annual Meeting e mais.',
  alternates: { canonical: '/eventos' },
  openGraph: {
    images: [{ url: '/api/og?title=Eventos%20%E2%80%94%20Engenharia%20Biom%C3%A9dica&category=Eventos', width: 1200, height: 630 }],
  },
};

const eventosNacionais = [
  {
    nome: 'CBEB 2026 — Congresso Brasileiro de Engenharia Biomédica',
    local: 'Fortaleza/CE',
    periodo: 'Setembro–Outubro 2026',
    desc: 'Principal evento da área no Brasil, organizado pela SBEB. Reúne pesquisadores, profissionais e estudantes de todo o país.',
    badge: 'Nacional',
    badgeVariant: 'primary' as const,
    url: 'https://cbeb.org.br/',
  },
  {
    nome: 'Feira Hospitalar',
    local: 'São Paulo/SP',
    periodo: 'Maio 2026',
    desc: 'Maior feira de saúde da América Latina. Inclui a Arena de Engenharia Clínica da ABEClin.',
    badge: 'Feira',
    badgeVariant: 'teal' as const,
    url: 'https://www.hospitalar.com/pt/home.html',
  },
  {
    nome: 'Seminário Latino-Americano de Engenharia Clínica',
    local: 'São Paulo/SP',
    periodo: '2026',
    desc: 'Organizado pela ABEClin, aborda gestão de tecnologia em saúde, manutenção de equipamentos e inovação hospitalar.',
    badge: 'Nacional',
    badgeVariant: 'primary' as const,
    url: 'https://abeclin.org.br/',
  },
  {
    nome: 'COLAEB — Congresso Latino-Americano de Engenharia Biomédica',
    local: 'A definir',
    periodo: '2026',
    desc: 'Congresso regional que reúne pesquisadores da América Latina em todas as áreas da Engenharia Biomédica.',
    badge: 'Regional',
    badgeVariant: 'amber' as const,
    url: 'http://coralbiomedica.org/claib/',
  },
];

const eventosInternacionais = [
  {
    nome: 'IEEE EMBC — Engineering in Medicine and Biology Conference',
    local: 'Rotativo',
    periodo: 'Julho 2026',
    desc: 'O maior evento de Engenharia Biomédica do mundo, organizado pela IEEE EMBS. Mais de 12.000 membros em 97 países.',
    badge: 'Internacional',
    badgeVariant: 'coral' as const,
    url: 'https://embc.embs.org/2026/',
  },
  {
    nome: 'BMES Annual Meeting',
    local: 'EUA',
    periodo: 'Outubro 2026',
    desc: 'Congresso anual da Biomedical Engineering Society. Foco acadêmico com apresentações de pesquisa e networking.',
    badge: 'Internacional',
    badgeVariant: 'coral' as const,
    url: 'https://www.bmes.org/2026/annualmeeting',
  },
  {
    nome: 'MD&M (Medical Design & Manufacturing)',
    local: 'Anaheim, CA',
    periodo: 'Fevereiro 2026',
    desc: 'Principal feira de design e manufatura de dispositivos médicos dos EUA. Conferências técnicas e exposição.',
    badge: 'Internacional',
    badgeVariant: 'coral' as const,
    url: 'https://www.mdmwest.com/en/home.html',
  },
];

export default function EventosPage() {
  return (
    <>
      <PageHeader
        overline="Eventos"
        title="Calendário de Eventos"
        description="Congressos, feiras e conferências de Engenharia Biomédica no Brasil e no mundo."
        breadcrumbs={[{ label: 'Eventos' }]}
      />

      <section className="container-page py-10 lg:py-14">
        <h2 className="text-h2 text-primary-800 mb-4">Brasil e América Latina</h2>
        <div className="space-y-3 mb-12">
          {eventosNacionais.map((e) => (
            <div key={e.nome} className="card p-5 border-l-4 border-l-primary-400">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <a
                  href={e.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-h4 text-slate-900 hover:text-primary-600 transition-colors inline-flex items-center gap-1.5"
                >
                  {e.nome}
                  <ExternalLink className="w-4 h-4 flex-shrink-0" />
                </a>
                <Badge variant={e.badgeVariant}>{e.badge}</Badge>
              </div>
              <p className="text-caption text-slate-400 mb-2">
                {e.local} · {e.periodo}
              </p>
              <p className="text-body-sm text-slate-500 font-serif">{e.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-h2 text-primary-800 mb-4">Internacionais</h2>
        <div className="space-y-3 mb-12">
          {eventosInternacionais.map((e) => (
            <div key={e.nome} className="card p-5 border-l-4 border-l-teal-400">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <a
                  href={e.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-h4 text-slate-900 hover:text-primary-600 transition-colors inline-flex items-center gap-1.5"
                >
                  {e.nome}
                  <ExternalLink className="w-4 h-4 flex-shrink-0" />
                </a>
                <Badge variant={e.badgeVariant}>{e.badge}</Badge>
              </div>
              <p className="text-caption text-slate-400 mb-2">
                {e.local} · {e.periodo}
              </p>
              <p className="text-body-sm text-slate-500 font-serif">{e.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-5 rounded-xl bg-teal-50 border border-teal-200">
          <h3 className="text-h4 text-teal-700 mb-2">Competições e Challenges</h3>
          <p className="text-body-sm text-teal-800 font-serif">
            O <strong>BioChallenge</strong> e hackathons de inovação em saúde são oportunidades para estudantes e profissionais apresentarem soluções em engenharia biomédica. O Prêmio João Pedroso, concedido pela ABEClin, reconhece contribuições à engenharia clínica no Brasil.
          </p>
        </div>
      </section>
    </>
  );
}
