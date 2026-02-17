import { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Rocket, MapPin, Calendar } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { StatCard } from '@/components/ui/StatCard';

export const metadata: Metadata = {
  title: 'Mercado de Trabalho — Engenharia Biomédica',
  description: 'Empresas, healthtechs, hubs e dados do mercado de dispositivos médicos no Brasil. R$ 26,1 bilhões em 2024 com 85 mil empregos diretos.',
  alternates: { canonical: '/mercado' },
  openGraph: {
    images: [{ url: '/api/og?title=Mercado%20de%20Trabalho%20%E2%80%94%20Engenharia%20Biom%C3%A9dica&category=Mercado', width: 1200, height: 630 }],
  },
};

const sections = [
  { title: 'Empresas', desc: 'Multinacionais e nacionais que empregam engenheiros biomédicos.', href: '/mercado/empresas', icon: Building2 },
  { title: 'Healthtechs', desc: '1.919 healthtechs mapeadas — ecossistema, funding e oportunidades.', href: '/artigos/healthtechs-brasil-ecossistema', icon: Rocket },
  { title: 'Hubs e Aceleradoras', desc: 'Eretz.bio, InovaHC, Cubo Itaú e programas de aceleração.', href: '/startups/hubs', icon: MapPin },
  { title: 'Eventos', desc: 'CBEB, Hospitalar, CIOSP e o calendário completo de feiras e congressos.', href: '/artigos/calendario-eventos-engenharia-biomedica-2026', icon: Calendar },
];

export default function MercadoPage() {
  return (
    <>
      <PageHeader
        overline="Mercado de Trabalho"
        title="Um mercado de R$ 26 bilhões com 85 mil empregos"
        description="O setor de dispositivos médicos no Brasil movimentou R$ 26,1 bilhões em 2024, com crescimento de 11,5% sobre o ano anterior e 5.979 novas vagas criadas."
        breadcrumbs={[{ label: 'Mercado' }]}
      />

      <section className="container-page py-10 lg:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <StatCard number="R$ 26,1 bi" label="Produção Industrial 2024" accent />
          <StatCard number="85.078" label="Empregos Diretos" />
          <StatCard number="+11,5%" label="Crescimento vs. 2023" />
          <StatCard number="US$ 1,17 bi" label="Exportações 2024" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 mb-12">
          {sections.map((s) => (
            <Link key={s.href} href={s.href} className="card p-6 group block">
              <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center mb-3 group-hover:bg-primary-100 transition-colors">
                <s.icon className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-h3 text-slate-900 mb-1 group-hover:text-primary-700 transition-colors">{s.title}</h2>
              <p className="text-body-sm text-slate-500 font-serif">{s.desc}</p>
            </Link>
          ))}
        </div>

        <div className="card p-6">
          <h2 className="text-h3 text-slate-900 mb-3">Distribuição Regional dos Empregos</h2>
          <div className="grid grid-cols-5 gap-3 text-center">
            {[
              { regiao: 'Sudeste', pct: '66%' },
              { regiao: 'Sul', pct: '20%' },
              { regiao: 'Nordeste', pct: '8%' },
              { regiao: 'Centro-Oeste', pct: '4%' },
              { regiao: 'Norte', pct: '2%' },
            ].map((r) => (
              <div key={r.regiao}>
                <div className="font-mono text-xl font-bold text-primary-600">{r.pct}</div>
                <div className="text-overline uppercase text-slate-500 mt-1">{r.regiao}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
