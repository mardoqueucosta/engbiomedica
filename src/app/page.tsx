import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { StatCard } from '@/components/ui/StatCard';
import { SectionCard } from '@/components/ui/SectionCard';
import { HomeNewsletterForm } from '@/components/forms/HomeNewsletterForm';
import { mainNavigation } from '@/data/navigation';

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
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
      />
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-[-40px] right-[-40px] w-[300px] h-[300px] rounded-full glow-teal" />
        <div className="absolute bottom-[-60px] left-[-20px] w-[200px] h-[200px] rounded-full glow-blue" />

        <div className="container-page py-16 lg:py-24 relative z-10">
          <span className="font-mono text-overline uppercase text-teal-300 tracking-[0.15em] block mb-4">
            Portal de Referência
          </span>
          <h1 className="text-display lg:text-[3rem] lg:leading-[1.12] text-white max-w-2xl text-balance font-serif">
            Tudo sobre Engenharia{' '}
            <span className="text-teal-300">Biomédica</span> no Brasil
          </h1>
          <p className="mt-4 text-lg text-primary-200 max-w-xl leading-relaxed">
            Cursos, mercado de trabalho, regulamentação, pesquisa, startups e
            referências internacionais — em um único portal.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/formacao"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold text-sm hover:bg-teal-600 transition-colors"
            >
              Explorar o portal
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg font-semibold text-sm hover:bg-white/20 transition-colors"
            >
              Newsletter gratuita
            </Link>
          </div>
        </div>
      </section>

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
            <span className="text-overline uppercase text-teal-600 tracking-[0.12em] block mb-3">
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
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
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
