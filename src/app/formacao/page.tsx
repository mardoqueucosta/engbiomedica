import { Metadata } from 'next';
import Link from 'next/link';
import { GraduationCap, BookOpen, Award, MapPin } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Formação Acadêmica',
  description: 'Cursos de graduação, pós-graduação, salários e áreas de atuação em Engenharia Biomédica no Brasil. Universidades, grades curriculares, notas MEC e conceitos CAPES.',
  alternates: { canonical: '/formacao' },
  openGraph: {
    images: [{ url: '/api/og?title=Forma%C3%A7%C3%A3o%20Acad%C3%AAmica&category=Forma%C3%A7%C3%A3o', width: 1200, height: 630 }],
  },
};

const stats = [
  { icon: GraduationCap, value: '28+', label: 'Cursos de Graduação' },
  { icon: BookOpen, value: '18', label: 'Programas Stricto Sensu' },
  { icon: Award, value: '6', label: 'Conceito Máximo CAPES' },
  { icon: MapPin, value: '15', label: 'Estados com Oferta' },
];

const sections = [
  {
    title: 'Cursos de Graduação',
    description: 'Diretório completo dos 28+ cursos em universidades públicas e privadas, com notas MEC, vagas e modalidades.',
    href: '/artigos/todas-faculdades-engenharia-biomedica-brasil-ranking',
    badge: 'Bacharelado — 5 anos',
  },
  {
    title: 'Pós-Graduação Stricto Sensu',
    description: 'Mestrado e doutorado em Engenharia Biomédica, com conceitos CAPES, linhas de pesquisa e corpo docente.',
    href: '/artigos/pos-graduacao-mestrado-doutorado-engenharia-biomedica',
    badge: 'Mestrado & Doutorado',
  },
  {
    title: 'Áreas de Atuação',
    description: 'Da engenharia clínica à IA em saúde — todas as carreiras possíveis para o engenheiro biomédico.',
    href: '/artigos/areas-atuacao-engenharia-biomedica',
    badge: '12 especialidades',
  },
  {
    title: 'Salários',
    description: 'Dados atualizados do CAGED por nível de experiência, estado e setor de atuação.',
    href: '/artigos/quanto-ganha-engenheiro-biomedico-2026',
    badge: 'R$ 8.600 médio',
  },
  {
    title: 'Engenharia Biomédica EaD',
    description: 'Decreto 12.456/2025 proibiu cursos 100% EaD. Entenda o que muda e quais alternativas existem.',
    href: '/artigos/engenharia-biomedica-ead',
    badge: 'EaD & Legislação',
  },
  {
    title: 'História da Engenharia Biomédica',
    description: 'Da COPPE/UFRJ em 1971 ao ecossistema de 1.900+ healthtechs — a trajetória completa no Brasil.',
    href: '/artigos/historia-engenharia-biomedica-brasil',
    badge: 'História',
  },
];

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Formação Acadêmica em Engenharia Biomédica',
  numberOfItems: sections.length,
  itemListElement: sections.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    description: s.description,
    url: `https://engenhariabiomedica.com${s.href}`,
  })),
};

const courseSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalProgram',
    name: 'Bacharelado em Engenharia Biomédica',
    description:
      'Curso de graduação com duração de 5 anos (10 semestres) que forma profissionais para atuar na interface entre engenharia e saúde — engenharia clínica, biomateriais, processamento de sinais, IA em saúde e mais.',
    educationalProgramMode: 'full-time',
    timeToComplete: 'P5Y',
    educationalCredentialAwarded: 'Bacharelado em Engenharia Biomédica',
    programType: 'Bacharelado',
    occupationalCategory: {
      '@type': 'CategoryCode',
      codeValue: '2143-80',
      name: 'Engenheiro Biomédico',
      inCodeSet: {
        '@type': 'CategoryCodeSet',
        name: 'Classificação Brasileira de Ocupações (CBO)',
      },
    },
    numberOfCredits: {
      '@type': 'StructuredValue',
      value: 3600,
      unitText: 'horas',
    },
    provider: [
      { '@type': 'CollegeOrUniversity', name: 'Universidade Federal de Pernambuco (UFPE)', sameAs: 'https://www.wikidata.org/wiki/Q1063819' },
      { '@type': 'CollegeOrUniversity', name: 'Universidade Federal de Uberlândia (UFU)', sameAs: 'https://www.wikidata.org/wiki/Q2302205' },
      { '@type': 'CollegeOrUniversity', name: 'Universidade Federal do ABC (UFABC)', sameAs: 'https://www.wikidata.org/wiki/Q2465687' },
      { '@type': 'CollegeOrUniversity', name: 'Instituto Federal da Bahia (IFBA)', sameAs: 'https://www.wikidata.org/wiki/Q10301990' },
      { '@type': 'CollegeOrUniversity', name: 'UNIVAP — Universidade do Vale do Paraíba' },
    ],
    url: 'https://engenhariabiomedica.com/formacao',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalProgram',
    name: 'Pós-Graduação em Engenharia Biomédica (Mestrado e Doutorado)',
    description:
      'Programas stricto sensu (mestrado acadêmico, mestrado profissional e doutorado) em Engenharia Biomédica avaliados pela CAPES, com linhas de pesquisa em instrumentação, sinais, biomateriais, IA e engenharia clínica.',
    educationalProgramMode: 'full-time',
    timeToComplete: 'P2Y',
    educationalCredentialAwarded: 'Mestre ou Doutor em Engenharia Biomédica',
    programType: 'Mestrado e Doutorado',
    provider: [
      { '@type': 'CollegeOrUniversity', name: 'COPPE/UFRJ — Universidade Federal do Rio de Janeiro', sameAs: 'https://www.wikidata.org/wiki/Q1065076' },
      { '@type': 'CollegeOrUniversity', name: 'CEB/UNICAMP — Universidade Estadual de Campinas', sameAs: 'https://www.wikidata.org/wiki/Q1065395' },
      { '@type': 'CollegeOrUniversity', name: 'USP — Universidade de São Paulo', sameAs: 'https://www.wikidata.org/wiki/Q835960' },
      { '@type': 'CollegeOrUniversity', name: 'UFMG — Universidade Federal de Minas Gerais', sameAs: 'https://www.wikidata.org/wiki/Q583195' },
    ],
    url: 'https://engenhariabiomedica.com/artigos/pos-graduacao-mestrado-doutorado-engenharia-biomedica',
  },
];

export default function FormacaoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      {courseSchemas.map((cs, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cs) }}
        />
      ))}

      <PageHeader
        overline="Formação Acadêmica"
        title="Onde estudar Engenharia Biomédica no Brasil"
        description="De uma única pós-graduação em 1971 a mais de 28 graduações ativas. Conheça todos os cursos, grades curriculares e programas de pós-graduação."
        breadcrumbs={[{ label: 'Formação' }]}
      />

      <section className="container-page py-10 lg:py-14">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="card p-5 text-center">
              <s.icon className="w-6 h-6 text-primary-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary-700">{s.value}</div>
              <div className="text-overline uppercase text-slate-500 mt-1">{s.label}</div>
            </div>
          ))}
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

        {/* Timeline */}
        <div className="mt-14">
          <h2 className="text-h2 text-primary-800 mb-6 font-serif">Linha do Tempo</h2>
          <div className="space-y-4">
            {[
              { year: '1971', event: 'PEB/COPPE-UFRJ cria o primeiro programa de pós-graduação em Engenharia Biomédica no Brasil.' },
              { year: '1975', event: 'Fundação da Sociedade Brasileira de Engenharia Biomédica (SBEB).' },
              { year: '2001', event: 'UNIVAP e UFPE lançam os primeiros cursos de graduação.' },
              { year: '2008', event: 'CONFEA insere o título "Engenheiro Biomédico" na Tabela de Títulos Profissionais.' },
              { year: '2018', event: 'Resolução CONFEA 1.103 detalha atribuições e competências profissionais.' },
              { year: '2022', event: 'Ministério do Trabalho reconhece oficialmente a profissão (CBO 2143-80).' },
              { year: '2024', event: 'Brasil alcança 27 cursos de graduação ativos (dados INEP).' },
            ].map((item) => (
              <div key={item.year} className="flex gap-4 items-start">
                <span className="font-mono text-sm font-semibold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md flex-shrink-0">
                  {item.year}
                </span>
                <p className="text-body-sm text-slate-600 font-serif pt-0.5">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
