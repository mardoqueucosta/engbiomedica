import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Áreas de Atuação — Engenharia Biomédica',
  description: 'Onde o engenheiro biomédico trabalha: engenharia clínica, indústria de dispositivos, regulatório, IA em saúde, biomecânica e mais.',
  alternates: { canonical: '/mercado/areas-de-atuacao' },
  openGraph: {
    images: [{ url: '/api/og?title=%C3%81reas%20de%20Atua%C3%A7%C3%A3o%20%E2%80%94%20Engenharia%20Biom%C3%A9dica&category=Mercado', width: 1200, height: 630 }],
  },
};

const areas = [
  {
    titulo: 'Engenharia Clínica',
    desc: 'Gestão, manutenção e aquisição de equipamentos em hospitais. O Brasil possui mais de 6.500 hospitais, cada um demandando gestão do parque tecnológico.',
    badge: 'Maior empregadora',
    badgeVariant: 'teal' as const,
  },
  {
    titulo: 'Indústria de Equipamentos Médicos',
    desc: 'Desenvolvimento, fabricação, assistência técnica e aplicação de dispositivos médicos. Segundo grande empregador do setor.',
    badge: 'R$ 26 bi em 2024',
    badgeVariant: 'primary' as const,
  },
  {
    titulo: 'Área Regulatória',
    desc: 'Registro de produtos na ANVISA, conformidade com ISO 13485, gestão de qualidade e auditorias de BPF (Boas Práticas de Fabricação).',
    badge: 'RDC 751/2022',
    badgeVariant: 'slate' as const,
  },
  {
    titulo: 'Informática em Saúde & Saúde Digital',
    desc: 'Prontuários eletrônicos, telemedicina, sistemas PACS/RIS, softwares de diagnóstico. Impulsionada pela Estratégia Nacional de Saúde Digital 2020–2028.',
    badge: 'Crescimento acelerado',
    badgeVariant: 'teal' as const,
  },
  {
    titulo: 'Processamento de Sinais e Imagens Médicas',
    desc: 'Ressonância magnética, tomografia computadorizada, ECG, EEG — algoritmos de processamento, reconstrução e análise.',
    badge: 'Pesquisa forte',
    badgeVariant: 'primary' as const,
  },
  {
    titulo: 'Inteligência Artificial em Saúde',
    desc: 'Diagnóstico assistido por computador, triagem automatizada, apoio à decisão clínica. Adoção entre healthtechs saltou de 14% para 20% em dois anos.',
    badge: '20% das healthtechs',
    badgeVariant: 'coral' as const,
  },
  {
    titulo: 'Biomecânica e Reabilitação',
    desc: 'Próteses inteligentes, tecnologias assistivas, órteses, robótica de reabilitação e análise de movimento.',
    badge: 'Tecnologia assistiva',
    badgeVariant: 'slate' as const,
  },
  {
    titulo: 'Pesquisa Acadêmica',
    desc: 'Universidades e centros de pesquisa em instrumentação, biomateriais, engenharia de tecidos, nanotecnologia e biofabricação.',
    badge: '16 programas pós',
    badgeVariant: 'primary' as const,
  },
];

const emergentes = [
  'Bioimpressão 3D',
  'Robótica cirúrgica',
  'IoT médico e wearables',
  'Gêmeos digitais em saúde',
  'Nanotecnologia aplicada',
  'Interfaces cérebro-computador',
];

export default function AreasDeAtuacaoPage() {
  return (
    <>
      <PageHeader
        overline="Mercado de Trabalho"
        title="Áreas de Atuação"
        description="O engenheiro biomédico possui um leque de atuação que vai do chão do hospital ao laboratório de pesquisa, passando pela indústria e startups."
        breadcrumbs={[{ label: 'Mercado', href: '/mercado' }, { label: 'Áreas de Atuação' }]}
      />

      <section className="container-page py-10 lg:py-14">
        <div className="grid gap-4 sm:grid-cols-2">
          {areas.map((a) => (
            <div key={a.titulo} className="card p-6">
              <Badge variant={a.badgeVariant}>{a.badge}</Badge>
              <h2 className="text-h3 text-slate-900 mt-3 mb-2">{a.titulo}</h2>
              <p className="text-body-sm text-slate-500 font-serif">{a.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-xl bg-primary-50 border border-primary-200">
          <h2 className="text-h3 text-primary-800 mb-3">Áreas Emergentes</h2>
          <p className="text-body-sm text-primary-700 font-serif mb-4">
            Fronteiras tecnológicas que estão criando novas oportunidades para engenheiros biomédicos no Brasil e no mundo.
          </p>
          <div className="flex flex-wrap gap-2">
            {emergentes.map((e) => (
              <span key={e} className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white text-sm font-medium text-primary-700 border border-primary-200">
                {e}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
