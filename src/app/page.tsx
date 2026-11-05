import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { StatCard } from '@/components/ui/StatCard';
import { SectionCard } from '@/components/ui/SectionCard';
import { HomeNewsletterForm } from '@/components/forms/HomeNewsletterForm';
import { mainNavigation } from '@/data/navigation';
import { PageHeader } from '@/components/ui/PageHeader';

const jsonLdWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Engenharia Biomédica',
  url: 'https://engenhariabiomedica.com',
  description:
    'Portal de referência sobre Engenharia Biomédica no Brasil. Cursos, mercado de trabalho, regulamentação, pesquisa e startups.',
  inLanguage: 'pt-BR',
  publisher: {
    '@type': 'Organization',
    name: 'Engenharia Biomédica',
    url: 'https://engenhariabiomedica.com',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://engenhariabiomedica.com/artigos?q={search_term}',
    },
    'query-input': 'required name=search_term',
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
      />
      {/* Capa */}
      <PageHeader
        overline="Portal de Referência"
        title="Tudo sobre Engenharia Biomédica no Brasil"
        destaque="Biomédica no Brasil"
        description="Cursos, mercado de trabalho, regulamentação, pesquisa, startups e referências internacionais em um único portal."
        acoes={
          <>
            <Link
              href="/formacao"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-[10px] font-semibold text-sm hover:bg-primary-600 transition-colors"
            >
              Explorar o portal
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-2 px-6 py-3 text-white border border-[#3C6A95] rounded-[10px] font-semibold text-sm hover:border-[#7FC4F5] transition-colors"
            >
              Newsletter gratuita
            </Link>
          </>
        }
      />

      {/* Stats */}
      <section className="bg-white border-b border-slate-100">
        <div className="container-page py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard number="28+" label="Cursos de Graduação" />
            <StatCard number="R$ 26 bi" label="Mercado 2024" accent />
            <StatCard number="1.919" label="Healthtechs Mapeadas" />
            <StatCard number="85 mil" label="Empregos Diretos" />
          </div>
        </div>
      </section>

      {/* Sections grid */}
      <section className="container-page py-12 lg:py-16">
        <h2 className="text-h2 text-primary-800 mb-6 font-serif">Explore por área</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mainNavigation.map((item) => (
            <SectionCard
              key={item.href}
              icon={item.icon!}
              title={item.label}
              description={item.description!}
              href={item.href}
            />
          ))}
        </div>
      </section>

      {/* About snippet */}
      <section className="bg-white border-y border-slate-100">
        <div className="container-page py-12 lg:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-overline uppercase text-teal-700 tracking-[0.12em] block mb-3">
              Sobre o portal
            </span>
            <h2 className="text-h2 text-slate-900 mb-4 font-serif">
              A referência que a Engenharia Biomédica no Brasil precisava
            </h2>
            <p className="text-body text-slate-600 leading-relaxed">
              De uma única pós-graduação criada em 1971 na COPPE/UFRJ, a área cresceu para
              mais de 28 cursos de graduação e 16 programas stricto sensu, com um mercado de
              dispositivos médicos que movimentou R$ 26,1 bilhões em 2024. Este portal reúne
              dados atualizados sobre formação, mercado, regulamentação, pesquisa e inovação,
              servindo como base para estudantes, profissionais, empresas e pesquisadores.
            </p>
            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-teal-700 hover:text-teal-800 transition-colors"
            >
              Conheça o portal
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Newsletter */}
      <section className="container-page py-12 lg:py-16">
        <div className="bg-primary-800 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-h2 text-white mb-3 font-serif">
            Fique por dentro da Engenharia Biomédica
          </h2>
          <p className="text-body-sm text-primary-200 mb-6 max-w-lg mx-auto">
            Receba artigos, dados de mercado, eventos e oportunidades diretamente
            no seu e-mail. Gratuito e sem spam.
          </p>
          <HomeNewsletterForm />
        </div>
      </section>
    </>
  );
}
