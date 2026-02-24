import { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { StatCard } from '@/components/ui/StatCard';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Equipamentos e Tecnologia Hospitalar',
  description: 'Guias técnicos de equipamentos hospitalares: centro cirúrgico, UTI, diagnóstico por imagem, manutenção, gestão de parque tecnológico e indicadores de engenharia clínica.',
  alternates: { canonical: '/equipamentos' },
  openGraph: {
    images: [{ url: '/api/og?title=Equipamentos%20e%20Tecnologia%20Hospitalar&category=Equipamentos', width: 1200, height: 630 }],
  },
};

const sections = [
  {
    title: 'Equipamentos de Centro Cirúrgico',
    description: 'Bisturis elétricos, mesas cirúrgicas, focos, monitores e sistemas integrados para salas de cirurgia.',
    href: '/artigos/equipamentos-centro-cirurgico',
    badge: 'Centro Cirúrgico',
  },
  {
    title: 'Equipamentos de UTI',
    description: 'Ventiladores mecânicos, monitores multiparamétricos, bombas de infusão e sistemas de suporte à vida.',
    href: '/artigos/equipamentos-uti-guia',
    badge: 'Terapia Intensiva',
  },
  {
    title: 'Diagnóstico por Imagem',
    description: 'Tomografia, ressonância magnética, ultrassonografia, raio-X digital e medicina nuclear.',
    href: '/artigos/equipamentos-diagnostico-imagem',
    badge: 'Imagem Médica',
  },
  {
    title: 'Manutenção Hospitalar',
    description: 'Manutenção preventiva, corretiva e preditiva de equipamentos médicos. Protocolos, calibração e metrologia.',
    href: '/artigos/manutencao-equipamentos-hospitalares',
    badge: 'Manutenção',
  },
  {
    title: 'Gestão de Parque Tecnológico',
    description: 'Planejamento de aquisição, vida útil, desativação, inventário e gestão patrimonial de equipamentos.',
    href: '/artigos/gestao-parque-tecnologico-hospitalar',
    badge: 'Gestão',
  },
  {
    title: 'Indicadores de Engenharia Clínica',
    description: 'KPIs de manutenção, disponibilidade, tempo médio entre falhas (MTBF), custos e benchmarking hospitalar.',
    href: '/artigos/indicadores-engenharia-clinica-kpis',
    badge: 'Indicadores',
  },
  {
    title: 'Guia de Compra Hospitalar',
    description: 'Lei 14.133/2021, especificação técnica, licitações, análise de TCO e financiamento via ProEquipaSUS.',
    href: '/artigos/guia-compra-equipamentos-hospitalares',
    badge: 'Aquisição',
  },
  {
    title: 'Ressonância Magnética: GE SIGNA',
    description: 'Três aprovações FDA para a plataforma SIGNA: AIR Recon DL cardíaco, MAGNUS e NeuroQuant.',
    href: '/artigos/ressonancia-magnetica-ge-healthcare-signa-fda-2026',
    badge: 'Inovação',
  },
  {
    title: 'Wearables Médicos',
    description: 'Mercado de US$ 31 bilhões: os quatro componentes que moldam dispositivos vestíveis em saúde.',
    href: '/artigos/dispositivos-medicos-vestiveis-em-ascensao-os-quatro-compone',
    badge: 'Wearables',
  },
];

export default function EquipamentosPage() {
  return (
    <>
      <PageHeader
        overline="Equipamentos e Tecnologia Hospitalar"
        title="Equipamentos e Tecnologia Hospitalar"
        description="Guias técnicos, manutenção, gestão de parque tecnológico e indicadores para engenheiros clínicos e gestores hospitalares."
        breadcrumbs={[{ label: 'Equipamentos' }]}
      />

      <section className="container-page py-10 lg:py-14">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <StatCard number="7.300+" label="Hospitais no Brasil" />
          <StatCard number="500 mil" label="Leitos ativos" />
          <StatCard number="R$ 26 bi" label="Mercado de dispositivos" accent />
          <StatCard number="85 mil" label="Empregos diretos" accent />
        </div>

        {/* Section links */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => (
            <Link key={s.href} href={s.href} className="card p-6 group block">
              <Badge variant="teal">{s.badge}</Badge>
              <h2 className="text-h3 text-slate-900 mt-3 mb-2 group-hover:text-primary-700 transition-colors">
                {s.title}
              </h2>
              <p className="text-body-sm text-slate-500 font-serif">{s.description}</p>
            </Link>
          ))}
        </div>

        {/* Intro text */}
        <div className="mt-14 max-w-3xl">
          <p className="text-body text-slate-600 font-serif leading-relaxed">
            O Brasil possui mais de 7.300 hospitais e 500 mil leitos que dependem de tecnologia médica para funcionar.
            A gestão eficiente de equipamentos hospitalares — da aquisição à manutenção, da calibração à substituição —
            é uma das funções mais críticas da engenharia biomédica. Esta seção reúne guias técnicos, boas práticas
            e recursos para profissionais que trabalham com tecnologia em saúde.
          </p>
        </div>
      </section>
    </>
  );
}
