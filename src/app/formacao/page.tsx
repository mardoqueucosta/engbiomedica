import { Metadata } from 'next';
import Link from 'next/link';
import { GraduationCap, BookOpen, Award, MapPin } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Formação Acadêmica',
  description: 'Cursos de graduação e pós-graduação em Engenharia Biomédica no Brasil. Universidades, grades curriculares, notas MEC e conceitos CAPES.',
};

const stats = [
  { icon: GraduationCap, value: '28+', label: 'Cursos de Graduação' },
  { icon: BookOpen, value: '16', label: 'Programas Stricto Sensu' },
  { icon: Award, value: '6', label: 'Conceito Máximo CAPES' },
  { icon: MapPin, value: '15', label: 'Estados com Oferta' },
];

const sections = [
  {
    title: 'Cursos de Graduação',
    description: 'Diretório completo dos 28+ cursos em universidades públicas e privadas, com notas MEC, vagas e modalidades.',
    href: '/formacao/graduacao',
    badge: 'Bacharelado — 5 anos',
  },
  {
    title: 'Pós-Graduação Stricto Sensu',
    description: 'Mestrado e doutorado em Engenharia Biomédica, com conceitos CAPES, linhas de pesquisa e corpo docente.',
    href: '/formacao/pos-graduacao',
    badge: 'Mestrado & Doutorado',
  },
  {
    title: 'Grade Curricular',
    description: 'Disciplinas do ciclo básico ao profissionalizante, áreas de concentração e estágio obrigatório.',
    href: '/formacao/grade-curricular',
    badge: '3.600+ horas',
  },
];

export default function FormacaoPage() {
  return (
    <>
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
        <div className="grid gap-4 lg:grid-cols-3">
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
