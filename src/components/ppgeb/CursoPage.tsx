import { Metadata } from 'next';
import { CheckCircle } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { PalcoFotos } from '@/components/ui/PalcoImagens';
import { fotosDocentes } from '@/lib/topo';
import { StatCard } from '@/components/ui/StatCard';
import { Badge } from '@/components/ui/Badge';
import { CtaInscricao, DocumentosLista, LinkPrograma } from '@/components/ppgeb/Blocos';
import { breadcrumbJsonLd } from '@/lib/breadcrumb-schema';
import { cursos, disciplinasOptativas, docentes, documentosPrograma, type Curso } from '@/data/ppgeb';

const BASE_URL = 'https://engenhariabiomedica.com';

function getCurso(slug: Curso['slug']): Curso {
  const curso = cursos.find((c) => c.slug === slug);
  if (!curso) throw new Error(`Curso PPGEB não encontrado: ${slug}`);
  return curso;
}

export function cursoMetadata(slug: Curso['slug'], description: string): Metadata {
  const curso = getCurso(slug);
  const title = `${curso.nome} | PPGEB Universidade Brasil`;
  return {
    title,
    description,
    alternates: { canonical: curso.href },
    openGraph: {
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(curso.nome)}&category=PPGEB%20UB`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

/** Página de um curso do PPGEB: só o que é próprio do curso; o comum fica em /ppgeb. */
export function CursoPage({ slug }: { slug: Curso['slug'] }) {
  const curso = getCurso(slug);
  const outros = cursos.filter((c) => c.slug !== slug);
  const nomeCurto = curso.nome.replace(' em Engenharia Biomédica', '');

  const cursoJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: curso.nome,
    description: curso.resumo,
    url: `${BASE_URL}${curso.href}`,
    educationalCredentialAwarded: curso.grau,
    provider: { '@type': 'CollegeOrUniversity', name: 'Universidade Brasil', url: 'https://ub.edu.br' },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'onsite',
      location: { '@type': 'Place', name: 'Universidade Brasil, São Paulo (SP)' },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'PPGEB UB', href: '/ppgeb' },
              { name: nomeCurto, href: curso.href },
            ]),
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cursoJsonLd) }} />
      <PageHeader
        palco={<PalcoFotos fotos={fotosDocentes()} />}
        overline="PPGEB · Universidade Brasil"
        title={curso.nome}
        description={curso.resumo}
        breadcrumbs={[{ label: 'PPGEB UB', href: '/ppgeb' }, { label: nomeCurto }]}
      />

      <section className="container-page py-10 lg:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <StatCard number={curso.duracao} label="Duração" accent />
          <StatCard number="Presencial" label="São Paulo (SP)" />
          <StatCard number={String(docentes.length)} label="Docentes" />
          <StatCard number="Nota 4" label="CAPES · Engenharias IV" />
        </div>

        {/* Regras do curso */}
        <h2 className="text-h2 text-primary-800 mb-4 font-serif">Como funciona</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-4">
          {curso.regras.map((r) => (
            <div key={r.titulo} className="card p-5">
              <h3 className="text-h3 text-slate-900 mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                {r.titulo}
              </h3>
              <p className="text-body-sm text-slate-500 font-serif leading-relaxed">{r.texto}</p>
            </div>
          ))}
        </div>
        <p className="text-body-sm text-slate-400 mb-12">
          Fontes: Regulamento do PPGEB aprovado pelo CONSU e página do curso na Universidade Brasil
          {curso.codigoCapes ? ` · Código CAPES ${curso.codigoCapes}` : ''}.
        </p>

        {/* Disciplinas */}
        {curso.disciplinasObrigatorias && (
          <>
            <h2 className="text-h2 text-primary-800 mb-4 font-serif">Disciplinas</h2>
            <div className="grid gap-4 lg:grid-cols-3 mb-12">
              <div className="card p-5">
                <Badge variant="teal">Obrigatórias</Badge>
                <ul className="mt-3 space-y-2">
                  {curso.disciplinasObrigatorias.map((d) => (
                    <li key={d} className="text-body-sm text-slate-700 font-serif">{d}</li>
                  ))}
                </ul>
              </div>
              <div className="card p-5 lg:col-span-2">
                <Badge variant="primary">Optativas (escolha ao menos 4)</Badge>
                <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                  {disciplinasOptativas.map((d) => (
                    <li key={d} className="text-body-sm text-slate-600 font-serif">{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}

        {/* O que é comum ao programa */}
        <h2 className="text-h2 text-primary-800 mb-4 font-serif">Linhas de pesquisa e orientadores</h2>
        <p className="text-body-sm text-slate-500 font-serif mb-4">
          O {nomeCurto.toLowerCase()} usa as mesmas linhas de pesquisa e o mesmo corpo docente dos demais cursos do PPGEB.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 mb-12">
          <LinkPrograma
            href="/ppgeb#linhas"
            titulo="3 áreas e 10 linhas de pesquisa"
            texto="Dispositivos e óptica; nanociências, plasmas e ozônio; reabilitação e terapêutica."
          />
          <LinkPrograma
            href="/ppgeb#docentes"
            titulo={`Corpo docente (${docentes.length})`}
            texto="Foto, Currículo Lattes e resumo de cada orientador."
          />
        </div>

        {/* Documentos */}
        <h2 className="text-h2 text-primary-800 mb-4 font-serif">Documentos</h2>
        <DocumentosLista documentos={[...curso.documentos, ...documentosPrograma]} />

        {/* Outros cursos */}
        <h2 className="text-h2 text-primary-800 mb-4 font-serif">Outros cursos do PPGEB</h2>
        <div className="grid gap-4 sm:grid-cols-2 mb-12">
          {outros.map((c) => (
            <LinkPrograma key={c.slug} href={c.href} titulo={c.nome} texto={`${c.grau} · ${c.duracao}`} />
          ))}
        </div>

        <CtaInscricao
          titulo={`Inscreva-se no ${nomeCurto.toLowerCase()}`}
          texto="A inscrição é feita no sistema da Universidade Brasil. Valores, bolsas e financiamentos estão na página do curso na UB."
          ubUrl={curso.ubUrl}
        />
      </section>
    </>
  );
}
