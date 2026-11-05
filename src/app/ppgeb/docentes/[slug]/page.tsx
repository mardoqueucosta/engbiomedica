import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ExternalLink, FileText, GraduationCap, Lightbulb, Mail, Code2 } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { StatCard } from '@/components/ui/StatCard';
import { Badge } from '@/components/ui/Badge';
import { breadcrumbJsonLd } from '@/lib/breadcrumb-schema';
import { docentes, PPGEB_INSCRICAO_URL } from '@/data/ppgeb';
import { getPerfil, perfisDocentes } from '@/data/ppgeb-perfis';

const BASE_URL = 'https://engenhariabiomedica.com';

export function generateStaticParams() {
  return perfisDocentes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const perfil = getPerfil(slug);
  if (!perfil) return {};
  const nome = perfil.nomeDocente.replace(/^Profa?\. Dra?\. /, '');
  return {
    title: `${perfil.laboratorio.nome} · ${nome} | PPGEB UB`,
    description: `${perfil.laboratorio.nome} do PPGEB da Universidade Brasil, coordenado por ${perfil.nomeDocente}. ${perfil.chamada}`,
    alternates: { canonical: `/ppgeb/docentes/${slug}` },
    openGraph: {
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(perfil.laboratorio.nome)}&category=PPGEB%20UB`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

function Secao({ id, titulo, children }: { id: string; titulo: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-14 scroll-mt-24">
      <h2 className="text-h2 text-primary-800 mb-5 font-serif">{titulo}</h2>
      {children}
    </section>
  );
}

export default async function PerfilDocentePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const perfil = getPerfil(slug);
  if (!perfil) notFound();
  const docente = docentes.find((d) => d.nome === perfil.nomeDocente);
  if (!docente) notFound();

  const nomeCurto = perfil.nomeDocente.replace(/^Profa?\. Dra?\. /, '');
  const projetosAtuais = perfil.projetos.filter((p) => p.emAndamento);
  const projetosConcluidos = perfil.projetos.filter((p) => !p.emAndamento);

  const pessoaJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: perfil.nomeCompleto,
    jobTitle: 'Professor e pesquisador',
    url: `${BASE_URL}/ppgeb/docentes/${slug}`,
    image: `${BASE_URL}${docente.foto}`,
    email: docente.email,
    sameAs: [docente.lattes],
    affiliation: {
      '@type': 'CollegeOrUniversity',
      name: 'Universidade Brasil',
      department: 'Programa de Pós-Graduação em Engenharia Biomédica (PPGEB)',
    },
    worksFor: { '@type': 'ResearchOrganization', name: perfil.laboratorio.nome },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'PPGEB UB', href: '/ppgeb' },
              { name: 'Corpo Docente', href: '/ppgeb#docentes' },
              { name: nomeCurto, href: `/ppgeb/docentes/${slug}` },
            ]),
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pessoaJsonLd) }} />

      <PageHeader
        overline={`Laboratório ${perfil.laboratorio.codigo} · PPGEB UB · ${perfil.nomeDocente}`}
        title={perfil.laboratorio.nome}
        description={perfil.chamada}
        breadcrumbs={[
          { label: 'PPGEB UB', href: '/ppgeb' },
          { label: 'Corpo Docente', href: '/ppgeb#docentes' },
          { label: nomeCurto },
        ]}
        acoes={
          <>
            <a
              href="#orientacao"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-[10px] font-semibold text-sm hover:bg-primary-600 transition-colors"
            >
              Quero ser orientado
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={docente.lattes}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-white border border-[#3C6A95] rounded-[10px] font-semibold text-sm hover:border-[#7FC4F5] transition-colors"
            >
              Currículo Lattes
              <ExternalLink className="w-4 h-4" />
            </a>
          </>
        }
      />

      <div className="container-page py-10 lg:py-14">
        {/* Números */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-14">
          {perfil.numeros.map((n, i) => (
            <StatCard key={n.legenda} number={n.valor} label={n.legenda} accent={i === 0} />
          ))}
        </div>

        {/* Sobre + coordenador */}
        <section id="sobre" className="grid gap-8 lg:grid-cols-[1fr_340px] mb-14 scroll-mt-24">
          <div>
            <h2 className="text-h2 text-primary-800 mb-5 font-serif">Sobre o laboratório</h2>
            {perfil.apresentacao.map((p) => (
              <p key={p.slice(0, 40)} className="text-body text-slate-600 font-serif leading-relaxed mb-4 md:text-justify">
                {p}
              </p>
            ))}
            <p className="text-body-sm text-slate-500 mt-2">
              <span className="font-semibold text-slate-700">Áreas de concentração:</span> {perfil.laboratorio.areaConcentracao}
            </p>
          </div>

          <aside className="card p-6 h-fit">
            <span className="text-overline uppercase text-teal-700 tracking-[0.12em] block mb-4">Coordenador</span>
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={docente.foto}
                alt={docente.nome}
                width={88}
                height={88}
                unoptimized
                className="rounded-full object-cover w-[88px] h-[88px] flex-shrink-0"
              />
              <div className="min-w-0">
                <h3 className="text-h3 text-slate-900 leading-tight">{docente.nome}</h3>
                {docente.coordenador && (
                  <span className="mt-1 inline-block">
                    <Badge variant="teal">Coordenador do PPGEB</Badge>
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 text-body-sm">
              {docente.email && (
                <a href={`mailto:${docente.email.toLowerCase()}`} className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700">
                  <Mail className="w-4 h-4" />
                  {docente.email.toLowerCase()}
                </a>
              )}
              <a
                href={docente.lattes}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800"
              >
                <ExternalLink className="w-4 h-4" />
                Currículo Lattes
              </a>
            </div>
          </aside>
        </section>

        {/* Linhas de pesquisa */}
        <Secao id="linhas" titulo="Linhas de pesquisa">
          <div className="grid gap-4 lg:grid-cols-3">
            {perfil.linhas.map((l) => (
              <div key={l.titulo} className="card p-6">
                <h3 className="text-h3 text-slate-900 mb-3">{l.titulo}</h3>
                <ul className="space-y-2">
                  {l.itens.map((item) => (
                    <li key={item} className="border-l-2 border-teal-200 pl-3 text-body-sm text-slate-600 font-serif">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Secao>

        {/* Projetos */}
        <Secao id="projetos" titulo="Projetos">
          <h3 className="text-overline uppercase text-teal-700 tracking-[0.12em] mb-3">Em andamento</h3>
          <div className="grid gap-4 lg:grid-cols-3 mb-8">
            {projetosAtuais.map((p) => (
              <div key={p.titulo} className="card p-6 flex flex-col">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge variant="teal">{p.periodo}</Badge>
                  <Badge variant="slate">{p.papel}</Badge>
                </div>
                <h4 className="text-h3 text-slate-900 mb-2 leading-snug">{p.titulo}</h4>
                <p className="text-body-sm text-slate-500 font-serif leading-relaxed flex-1">{p.descricao}</p>
                {p.financiamento && <p className="text-body-sm text-slate-400 font-mono mt-3">{p.financiamento}</p>}
              </div>
            ))}
          </div>
          <h3 className="text-overline uppercase text-teal-700 tracking-[0.12em] mb-3">Concluídos</h3>
          <div className="card divide-y divide-slate-100">
            {projetosConcluidos.map((p) => (
              <div key={p.titulo} className="p-5 grid gap-1 md:grid-cols-[130px_1fr_200px] md:gap-6">
                <span className="text-body-sm font-mono text-slate-400">{p.periodo}</span>
                <div>
                  <h4 className="text-body font-semibold text-slate-800 leading-snug">{p.titulo}</h4>
                  <p className="text-body-sm text-slate-500 font-serif mt-1">{p.descricao}</p>
                </div>
                <span className="text-body-sm text-slate-400 md:text-right">
                  {p.papel}
                  {p.financiamento ? ` · ${p.financiamento}` : ''}
                </span>
              </div>
            ))}
          </div>
        </Secao>

        {/* Inovação */}
        <Secao id="inovacao" titulo="Patentes e softwares">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="card p-6">
              <h3 className="text-h3 text-slate-900 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-coral-500" />
                Patentes (INPI)
              </h3>
              <ul className="space-y-4">
                {perfil.patentes.map((p) => (
                  <li key={p.registro}>
                    <span className="block text-body-sm font-semibold text-slate-800">{p.titulo}</span>
                    <span className="block text-body-sm text-slate-400 font-mono">
                      {p.ano} · {p.tipo} · {p.registro}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-h3 text-slate-900 mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-primary-500" />
                Softwares
              </h3>
              <ul className="space-y-3">
                {perfil.softwares.map((s) => (
                  <li key={s.titulo} className="grid grid-cols-[48px_1fr] gap-3">
                    <span className="text-body-sm font-mono text-slate-400">{s.ano}</span>
                    <span className="text-body-sm text-slate-700">
                      {s.titulo}
                      {s.registro && <span className="block text-slate-400 font-mono">Registro INPI {s.registro}</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Secao>

        {/* Publicações */}
        <Secao id="publicacoes" titulo="Publicações selecionadas">
          <div className="card divide-y divide-slate-100">
            {perfil.publicacoes.map((p) => (
              <div key={p.titulo} className="p-5 grid gap-1 md:grid-cols-[60px_1fr_auto] md:gap-6 items-baseline">
                <span className="text-body-sm font-mono text-slate-400">{p.ano}</span>
                <div>
                  <span className="block text-body font-semibold text-slate-800 leading-snug">{p.titulo}</span>
                  <span className="block text-body-sm text-slate-500 font-serif italic">{p.periodico}</span>
                </div>
                {p.citacoes !== undefined && (
                  <span className="text-body-sm text-slate-400 whitespace-nowrap">{p.citacoes} {p.citacoes === 1 ? 'citação' : 'citações'}</span>
                )}
              </div>
            ))}
          </div>
          <a
            href={docente.lattes}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-4 text-body-sm font-semibold text-primary-600 hover:text-primary-700"
          >
            <FileText className="w-4 h-4" />
            Lista completa no Currículo Lattes
          </a>
        </Secao>

        {/* Orientações */}
        <Secao id="equipe" titulo="Equipe e orientações">
          <h3 className="text-overline uppercase text-teal-700 tracking-[0.12em] mb-3">Em andamento</h3>
          <div className="grid gap-4 lg:grid-cols-3 mb-8">
            {perfil.orientacoes.andamento.map((o) => (
              <div key={o.nome} className="card p-6">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-4 h-4 text-teal-600" />
                  <span className="text-body-sm font-semibold text-slate-800">{o.nome}</span>
                </div>
                <p className="text-body-sm text-slate-500 font-serif leading-relaxed">{o.titulo}</p>
                <p className="text-body-sm text-slate-400 font-mono mt-3">
                  {o.nivel} · desde {o.inicio}
                </p>
              </div>
            ))}
          </div>
          <h3 className="text-overline uppercase text-teal-700 tracking-[0.12em] mb-3">
            Concluídas ({perfil.orientacoes.concluidas.length})
          </h3>
          <div className="card divide-y divide-slate-100">
            {perfil.orientacoes.concluidas.map((o) => (
              <div key={o.nome} className="p-5 grid gap-1 md:grid-cols-[60px_1fr_220px] md:gap-6 items-baseline">
                <span className="text-body-sm font-mono text-slate-400">{o.ano}</span>
                <div>
                  <span className="block text-body-sm font-semibold text-slate-800">{o.nome}</span>
                  <span className="block text-body-sm text-slate-500 font-serif">{o.titulo}</span>
                </div>
                <span className="text-body-sm text-slate-400 md:text-right">
                  {o.nivel} · {o.papel}
                </span>
              </div>
            ))}
          </div>
        </Secao>

        {/* Formação e atuação */}
        <div className="grid gap-8 lg:grid-cols-2 mb-14">
          <section id="formacao" className="scroll-mt-24">
            <h2 className="text-h2 text-primary-800 mb-5 font-serif">Formação</h2>
            <ol className="relative border-l-2 border-slate-200 ml-2 space-y-5">
              {perfil.formacao.map((f) => (
                <li key={f.titulo} className="pl-5 relative">
                  <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-teal-500 ring-4 ring-slate-50" />
                  <span className="block text-body-sm font-mono text-slate-400">{f.periodo}</span>
                  <span className="block text-body font-semibold text-slate-800">{f.titulo}</span>
                  <span className="block text-body-sm text-slate-500">{f.instituicao}</span>
                </li>
              ))}
            </ol>
          </section>
          <section id="atuacao" className="scroll-mt-24">
            <h2 className="text-h2 text-primary-800 mb-5 font-serif">Atuação e parcerias</h2>
            <div className="space-y-3">
              {perfil.atuacao.map((a) => (
                <div key={a.instituicao} className="card p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-body font-semibold text-slate-800">{a.instituicao}</span>
                    <span className="text-body-sm font-mono text-slate-400 whitespace-nowrap">{a.periodo}</span>
                  </div>
                  <p className="text-body-sm text-slate-500 font-serif mt-1">{a.descricao}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Orientação */}
        <section id="orientacao" className="card p-6 lg:p-8 bg-primary-50 border-primary-100 text-center scroll-mt-24">
          <h2 className="text-h2 text-primary-800 mb-2">Quer fazer pesquisa no laboratório?</h2>
          <p className="text-body text-slate-600 font-serif mb-6 max-w-2xl mx-auto">
            O laboratório recebe alunos de mestrado, doutorado e pós-doutorado do PPGEB. Antes de se inscrever, envie um e-mail com seu currículo e o tema que gostaria de pesquisar.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {docente.email && (
              <a
                href={`mailto:${docente.email.toLowerCase()}?subject=${encodeURIComponent(`Interesse em orientação · ${perfil.laboratorio.codigo}`)}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5" />
                Falar com o coordenador
              </a>
            )}
            <a
              href={PPGEB_INSCRICAO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary-200 text-primary-700 hover:bg-white font-semibold rounded-lg transition-colors"
            >
              Inscrição na Universidade Brasil
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <p className="text-body-sm text-slate-500 mt-5">
            Conheça os cursos:{' '}
            <Link href="/ppgeb/mestrado" className="text-primary-600 hover:text-primary-700">Mestrado</Link>
            {' · '}
            <Link href="/ppgeb/doutorado" className="text-primary-600 hover:text-primary-700">Doutorado</Link>
            {' · '}
            <Link href="/ppgeb/pos-doutorado" className="text-primary-600 hover:text-primary-700">Pós-Doutorado</Link>
          </p>
        </section>
      </div>
    </>
  );
}
