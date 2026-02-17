import { Metadata } from 'next';
import Link from 'next/link';
import { Building2, MapPin } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { StatCard } from '@/components/ui/StatCard';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Startups e Healthtechs — Engenharia Biomédica',
  description:
    '1.919 healthtechs mapeadas no Brasil, 64,8% da América Latina. Startups medtech de destaque, rodadas de investimento e ecossistema de inovação em saúde.',
};

const startups = [
  {
    nome: 'brain4care',
    sede: 'São Carlos/SP',
    area: 'Neuromonitoramento',
    destaque:
      'Monitoramento não invasivo de pressão intracraniana. 80+ publicações científicas e clearance FDA 510(k).',
    badge: 'FDA Cleared',
    badgeVariant: 'teal' as const,
  },
  {
    nome: 'Neomed',
    sede: 'São Paulo/SP',
    area: 'Cardiologia/IA',
    destaque:
      'Plataforma de ECGs com inteligência artificial utilizada em 150+ hospitais. Participante do Google Startups Accelerator.',
    badge: 'IA',
    badgeVariant: 'primary' as const,
  },
  {
    nome: 'Harpia Health',
    sede: 'São José dos Campos/SP',
    area: 'Radiologia/IA',
    destaque:
      'Plataforma Delfos para análise automatizada de imagens médicas com inteligência artificial.',
    badge: 'IA',
    badgeVariant: 'primary' as const,
  },
  {
    nome: 'Magnamed',
    sede: 'Cotia/SP',
    area: 'Ventilação pulmonar',
    destaque:
      'Ventiladores pulmonares exportados para 40+ países. Fundada por engenheiros biomédicos.',
    badge: 'Exportação',
    badgeVariant: 'amber' as const,
  },
  {
    nome: 'DiagÁgil',
    sede: 'Recife/PE',
    area: 'Diagnóstico',
    destaque:
      'Spin-off da UFPE incubada no Polo Tec. Soluções de diagnóstico rápido.',
    badge: 'Spin-off',
    badgeVariant: 'coral' as const,
  },
];

const segmentos = [
  { nome: 'Gestão e prontuários eletrônicos', pct: '25–28%' },
  { nome: 'Telemedicina', pct: '12%' },
  { nome: 'Marketplace de saúde', pct: '12,6%' },
  { nome: 'Farmacêutico/Diagnóstico', pct: '10%' },
  { nome: 'Bem-estar', pct: '10%' },
];

export default function StartupsPage() {
  return (
    <>
      <PageHeader
        overline="Startups & Healthtechs"
        title="O ecossistema de healthtechs do Brasil"
        description="Com 1.919 healthtechs mapeadas e 64,8% de todas as startups de saúde da América Latina, o Brasil consolida-se como polo de inovação em saúde digital."
        breadcrumbs={[{ label: 'Startups' }]}
      />

      <section className="container-page py-10 lg:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <StatCard number="1.919" label="Healthtechs Mapeadas" accent />
          <StatCard number="265" label="Com Funding" />
          <StatCard number="US$ 254 mi" label="Investidos (LatAm 2024)" />
          <StatCard number="118/ano" label="Novas Fundadas (média)" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 mb-12">
          <Link href="/startups/hubs" className="card p-6 group block">
            <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center mb-3 group-hover:bg-teal-100 transition-colors">
              <Building2 className="w-5 h-5 text-teal-600" />
            </div>
            <h2 className="text-h3 text-slate-900 mb-1 group-hover:text-primary-700 transition-colors">
              Hubs e Aceleradoras
            </h2>
            <p className="text-body-sm text-slate-500 font-serif">
              Eretz.bio, InovaHC, Horizontes Hub, Cubo Itaú, Supera e os
              principais programas de aceleração.
            </p>
          </Link>
          <div className="card p-6">
            <h2 className="text-h3 text-slate-900 mb-3">
              Maiores Rodadas de 2024
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-h4 text-slate-900">Amigo</span>
                  <span className="text-body-sm text-slate-500 ml-2 font-serif">
                    Gestão e PEP
                  </span>
                </div>
                <span className="font-mono text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md">
                  Série B — US$ 33 mi
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-h4 text-slate-900">Mevo</span>
                  <span className="text-body-sm text-slate-500 ml-2 font-serif">
                    Prescrição eletrônica
                  </span>
                </div>
                <span className="font-mono text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md">
                  Série B — US$ 24 mi
                </span>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-h2 text-primary-800 mb-4">
          Startups Medtech de Destaque
        </h2>
        <div className="space-y-3 mb-12">
          {startups.map((s) => (
            <div key={s.nome} className="card p-5 border-l-4 border-l-primary-400">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <h3 className="text-h3 text-slate-900">{s.nome}</h3>
                <Badge variant={s.badgeVariant}>{s.badge}</Badge>
              </div>
              <div className="flex items-center gap-1 text-caption text-slate-400 mb-2">
                <MapPin className="w-3 h-3" />
                {s.sede} · {s.area}
              </div>
              <p className="text-body-sm text-slate-500 font-serif">
                {s.destaque}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-h2 text-primary-800 mb-4">
          Distribuição por Segmento
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {segmentos.map((s) => (
            <div key={s.nome} className="card p-5 flex items-center justify-between">
              <span className="text-h4 text-slate-900">{s.nome}</span>
              <span className="font-mono text-xs font-semibold text-primary-700 bg-primary-50 px-2.5 py-1 rounded-md">
                {s.pct}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
