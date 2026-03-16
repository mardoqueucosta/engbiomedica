import { Metadata } from 'next';
import Link from 'next/link';
import { GraduationCap, Clock, BookOpen, Users } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Badge } from '@/components/ui/Badge';
import { cursos } from '@/data/cursos';
import { breadcrumbJsonLd } from '@/lib/breadcrumb-schema';

export const metadata: Metadata = {
  title: 'Cursos — Pós-Graduação em Engenharia Biomédica',
  description: 'Programas de Mestrado e Doutorado em Engenharia Biomédica. Inscrições abertas para a turma 2026.1. Grade curricular, carga horária e processo seletivo.',
  alternates: { canonical: '/cursos' },
  openGraph: {
    images: [{ url: '/api/og?title=Cursos%20%E2%80%94%20P%C3%B3s-Gradua%C3%A7%C3%A3o&category=Cursos', width: 1200, height: 630 }],
  },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Programas de Pós-Graduação em Engenharia Biomédica',
  numberOfItems: cursos.length,
  itemListElement: cursos.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.nome,
    description: c.descricao,
    url: `https://engenhariabiomedica.com/cursos/${c.slug}`,
  })),
};

export default function CursosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: 'Cursos', href: '/cursos' }])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <PageHeader
        overline="Pós-Graduação"
        title="Programas de Engenharia Biomédica"
        description="Mestrado e Doutorado na interface entre engenharia, tecnologia e ciências da saúde. Inscrições abertas para a turma 2026.1."
        breadcrumbs={[{ label: 'Cursos' }]}
      />

      <section className="container-page py-10 lg:py-14">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="card p-5 text-center">
            <GraduationCap className="w-6 h-6 text-primary-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary-700">2</div>
            <div className="text-overline uppercase text-slate-500 mt-1">Programas</div>
          </div>
          <div className="card p-5 text-center">
            <BookOpen className="w-6 h-6 text-primary-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary-700">10</div>
            <div className="text-overline uppercase text-slate-500 mt-1">Disciplinas</div>
          </div>
          <div className="card p-5 text-center">
            <Clock className="w-6 h-6 text-primary-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary-700">330h</div>
            <div className="text-overline uppercase text-slate-500 mt-1">Carga Horária</div>
          </div>
          <div className="card p-5 text-center">
            <Users className="w-6 h-6 text-primary-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary-700">45</div>
            <div className="text-overline uppercase text-slate-500 mt-1">Vagas</div>
          </div>
        </div>

        {/* Program Cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {cursos.map((curso) => (
            <Link
              key={curso.slug}
              href={`/cursos/${curso.slug}`}
              className="card group block overflow-hidden"
            >
              {/* Header colorido */}
              <div className={`px-6 py-5 ${curso.tipo === 'mestrado'
                ? 'bg-gradient-to-br from-primary-900 to-primary-700'
                : 'bg-gradient-to-br from-teal-800 to-teal-600'
              }`}>
                <span className="text-overline uppercase text-teal-300 tracking-wider">
                  {curso.subtitulo}
                </span>
                <h2 className="text-xl font-bold text-white mt-1 group-hover:text-teal-200 transition-colors">
                  {curso.nome}
                  <span className="ml-2 opacity-50 group-hover:opacity-100 group-hover:ml-3 transition-all">&rarr;</span>
                </h2>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-body-sm text-slate-500 font-serif mb-4">
                  {curso.descricao}
                </p>

                {/* Quick stats */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="primary">{curso.duracao}</Badge>
                  <Badge variant="teal">{curso.cargaTotal}</Badge>
                  <Badge variant="slate">{curso.creditos} créditos</Badge>
                  <Badge variant="amber">{curso.disciplinas.length} disciplinas</Badge>
                </div>

                {/* Disciplines preview */}
                <div className="space-y-1.5">
                  {curso.disciplinas.slice(0, 3).map((d) => (
                    <div key={d.nome} className="flex items-center gap-2 text-body-sm text-slate-600">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        curso.tipo === 'mestrado' ? 'bg-primary-400' : 'bg-teal-400'
                      }`} />
                      {d.nome}
                    </div>
                  ))}
                  {curso.disciplinas.length > 3 && (
                    <div className="text-caption text-slate-400 pl-3.5">
                      + {curso.disciplinas.length - 3} disciplinas
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info bar */}
        <div className="card p-6 mt-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <div>
              <h3 className="text-h4 text-slate-900">Inscrições Abertas</h3>
              <p className="text-body-sm text-slate-500 font-serif mt-1">
                Turma 2026.1 com início em março de 2026. Modalidade presencial com atividades EAD complementares.
              </p>
            </div>
            <Badge variant="teal">Turma 2026.1</Badge>
          </div>
        </div>
      </section>
    </>
  );
}
