import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, BookOpen, Award, Calendar, Users, MapPin, CheckCircle2, ExternalLink, GraduationCap } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Badge } from '@/components/ui/Badge';
import { getCurso, getAllCursoSlugs } from '@/data/cursos';
import { breadcrumbJsonLd } from '@/lib/breadcrumb-schema';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCursoSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const curso = getCurso(slug);
  if (!curso) return {};

  return {
    title: `${curso.nome} — Engenharia Biomédica`,
    description: curso.descricao,
    alternates: { canonical: `/cursos/${slug}` },
    openGraph: {
      images: [{ url: `/api/og?title=${encodeURIComponent(curso.nome)}&category=Cursos`, width: 1200, height: 630 }],
    },
  };
}

export default async function CursoPage({ params }: Props) {
  const { slug } = await params;
  const curso = getCurso(slug);
  if (!curso) notFound();

  const isMestrado = curso.tipo === 'mestrado';
  const accentColor = isMestrado ? 'primary' : 'teal';

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalProgram',
    name: curso.nome,
    description: curso.descricaoLonga,
    educationalProgramMode: 'full-time',
    timeToComplete: isMestrado ? 'P2Y' : 'P4Y',
    educationalCredentialAwarded: isMestrado ? 'Mestre em Engenharia Biomédica' : 'Doutor em Engenharia Biomédica',
    programType: isMestrado ? 'Mestrado' : 'Doutorado',
    numberOfCredits: {
      '@type': 'StructuredValue',
      value: parseInt(curso.cargaTotal),
      unitText: 'horas',
    },
    url: `https://engenhariabiomedica.com/cursos/${slug}`,
  };

  // Moodle EAD URL - will be configured per environment
  const moodleBaseUrl = process.env.NEXT_PUBLIC_MOODLE_URL || 'https://pos.engenhariabiomedica.com';
  const moodleUrl = `${moodleBaseUrl}/programa/${curso.moodleSlug}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Cursos', href: '/cursos' },
              { name: curso.nome, href: `/cursos/${slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      <PageHeader
        overline={curso.subtitulo}
        title={curso.nome}
        description={curso.descricao}
        breadcrumbs={[
          { label: 'Cursos', href: '/cursos' },
          { label: isMestrado ? 'Mestrado' : 'Doutorado' },
        ]}
      />

      <section className="container-page py-10 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main content — 2 cols */}
          <div className="lg:col-span-2 space-y-10">
            {/* About */}
            <div>
              <h2 className="text-h2 text-slate-900 mb-4">Sobre o Programa</h2>
              <p className="text-body text-slate-600 font-serif leading-relaxed text-justify">
                {curso.descricaoLonga}
              </p>
            </div>

            {/* Grade Curricular */}
            <div>
              <h2 className="text-h2 text-slate-900 mb-6">Grade Curricular</h2>
              <div className="space-y-3">
                {curso.disciplinas.map((d) => (
                  <div key={d.nome} className="card p-4 flex items-start gap-4">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      isMestrado ? 'bg-primary-500' : 'bg-teal-500'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-h4 text-slate-900">{d.nome}</h3>
                        <div className="flex gap-1.5 flex-shrink-0">
                          <Badge variant={accentColor}>{d.carga}</Badge>
                          <Badge variant="slate">{d.creditos} cr</Badge>
                        </div>
                      </div>
                      <p className="text-body-sm text-slate-500 font-serif mt-1">{d.descricao}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Diferenciais */}
            <div>
              <h2 className="text-h2 text-slate-900 mb-6">Diferenciais</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {curso.diferenciais.map((d) => (
                  <div key={d} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      isMestrado ? 'text-primary-500' : 'text-teal-500'
                    }`} />
                    <span className="text-body-sm text-slate-600">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar — 1 col */}
          <div className="space-y-6">
            {/* CTA Card */}
            <div className={`rounded-card overflow-hidden ${
              isMestrado
                ? 'bg-gradient-to-br from-primary-900 to-primary-700'
                : 'bg-gradient-to-br from-teal-800 to-teal-600'
            }`}>
              <div className="p-6 text-white">
                <Badge variant="teal">Inscrições Abertas</Badge>
                <h3 className="text-lg font-bold mt-3 mb-2">Turma {curso.turma}</h3>
                <p className="text-sm opacity-80 mb-5">
                  Início das aulas em {curso.inicioAulas}. {curso.vagas} vagas disponíveis.
                </p>
                <a
                  href={moodleUrl}
                  className={`inline-flex items-center gap-2 w-full justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-all ${
                    isMestrado
                      ? 'bg-teal-500 hover:bg-teal-400 text-white'
                      : 'bg-white hover:bg-teal-50 text-teal-800'
                  }`}
                >
                  Inscreva-se
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Info Card */}
            <div className="card p-6 space-y-4">
              <h3 className="text-h4 text-slate-900">Informações</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className={`w-4 h-4 ${isMestrado ? 'text-primary-500' : 'text-teal-500'}`} />
                  <div>
                    <div className="text-body-sm font-semibold text-slate-700">Duração</div>
                    <div className="text-caption text-slate-500">{curso.duracao}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className={`w-4 h-4 ${isMestrado ? 'text-primary-500' : 'text-teal-500'}`} />
                  <div>
                    <div className="text-body-sm font-semibold text-slate-700">Carga Horária</div>
                    <div className="text-caption text-slate-500">{curso.cargaTotal} — {curso.creditos} créditos</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className={`w-4 h-4 ${isMestrado ? 'text-primary-500' : 'text-teal-500'}`} />
                  <div>
                    <div className="text-body-sm font-semibold text-slate-700">Disciplinas</div>
                    <div className="text-caption text-slate-500">{curso.disciplinas.length} disciplinas</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className={`w-4 h-4 ${isMestrado ? 'text-primary-500' : 'text-teal-500'}`} />
                  <div>
                    <div className="text-body-sm font-semibold text-slate-700">Vagas</div>
                    <div className="text-caption text-slate-500">{curso.vagas} vagas</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className={`w-4 h-4 ${isMestrado ? 'text-primary-500' : 'text-teal-500'}`} />
                  <div>
                    <div className="text-body-sm font-semibold text-slate-700">Modalidade</div>
                    <div className="text-caption text-slate-500">{curso.modalidade}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className={`w-4 h-4 ${isMestrado ? 'text-primary-500' : 'text-teal-500'}`} />
                  <div>
                    <div className="text-body-sm font-semibold text-slate-700">Início</div>
                    <div className="text-caption text-slate-500">{curso.inicioAulas}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other program */}
            <div className="card p-6">
              <h3 className="text-h4 text-slate-900 mb-3">Veja também</h3>
              {curso.tipo === 'mestrado' ? (
                <Link
                  href="/cursos/doutorado-engenharia-biomedica"
                  className="flex items-center gap-3 text-teal-700 hover:text-teal-800 font-semibold text-body-sm transition-colors"
                >
                  <GraduationCap className="w-5 h-5" />
                  Doutorado em Engenharia Biomédica
                  <span className="ml-auto">&rarr;</span>
                </Link>
              ) : (
                <Link
                  href="/cursos/mestrado-engenharia-biomedica"
                  className="flex items-center gap-3 text-primary-600 hover:text-primary-700 font-semibold text-body-sm transition-colors"
                >
                  <GraduationCap className="w-5 h-5" />
                  Mestrado em Engenharia Biomédica
                  <span className="ml-auto">&rarr;</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
