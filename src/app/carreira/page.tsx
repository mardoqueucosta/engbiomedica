import { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Carreira em Engenharia Biomédica',
  description: 'Do estágio à diretoria: roadmap de carreira, certificações profissionais, cursos, livros e recursos para engenheiros biomédicos em todas as fases da carreira.',
  alternates: { canonical: '/carreira' },
  openGraph: {
    images: [{ url: '/api/og?title=Carreira%20em%20Engenharia%20Biom%C3%A9dica&category=Carreira', width: 1200, height: 630 }],
  },
};

const sections = [
  {
    title: 'Roadmap: Do Estágio à Diretoria',
    description: 'Mapa completo da evolução profissional com marcos, competências esperadas e faixas salariais em cada nível.',
    href: '/artigos/roadmap-carreira-engenheiro-biomedico',
    badge: 'Planejamento',
  },
  {
    title: 'Certificações Profissionais',
    description: 'CBET, CAPM, PMP, Six Sigma e outras certificações que agregam valor ao currículo do engenheiro biomédico.',
    href: '/artigos/certificacoes-engenheiros-biomedicos',
    badge: 'Certificações',
  },
  {
    title: 'Cursos e Especializações',
    description: 'Pós-graduação lato sensu, MBAs, cursos livres e plataformas de educação continuada para profissionais da área.',
    href: '/artigos/melhores-cursos-online-engenharia-clinica',
    badge: 'Educação Continuada',
  },
  {
    title: 'Estágio e Primeiro Emprego',
    description: 'Como encontrar estágios, preparar currículo, se destacar em processos seletivos e iniciar a carreira.',
    href: '/artigos/estagio-engenharia-biomedica-guia',
    badge: 'Início de Carreira',
  },
  {
    title: 'Transição de Carreira',
    description: 'Roteiros para profissionais migrando de outras engenharias, da academia para a indústria ou do Brasil para o exterior.',
    href: '/artigos/transicao-engenharia-biomedica',
    badge: 'Mudança de Área',
  },
  {
    title: 'Livros Essenciais',
    description: 'Bibliografia fundamental em engenharia biomédica: livros-texto, referências técnicas e leituras recomendadas.',
    href: '/artigos/livros-engenharia-biomedica',
    badge: 'Bibliografia',
  },
];

export default function CarreiraPage() {
  return (
    <>
      <PageHeader
        overline="Carreira em Engenharia Biomédica"
        title="Carreira em Engenharia Biomédica"
        description="Do estágio à diretoria: certificações, cursos, livros e recursos para cada fase da sua trajetória profissional."
        breadcrumbs={[{ label: 'Carreira' }]}
      />

      <section className="container-page py-10 lg:py-14">
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
            A carreira do engenheiro biomédico não segue um caminho único. Hospitais, indústria, startups,
            academia, consultoria, regulamentação — cada trajetória exige competências diferentes e oferece
            oportunidades distintas. Esta seção reúne recursos práticos para você navegar cada fase da sua
            carreira, das primeiras decisões na graduação às posições de liderança.
          </p>
        </div>
      </section>
    </>
  );
}
