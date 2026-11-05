import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { PalcoFotos } from '@/components/ui/PalcoImagens';
import { fotosDocentes } from '@/lib/topo';
import { StatCard } from '@/components/ui/StatCard';
import { Badge } from '@/components/ui/Badge';
import { DocentesGrid } from '@/components/ppgeb/DocentesGrid';
import { AreasLinhas, CtaInscricao, DocumentosLista, LinkPrograma } from '@/components/ppgeb/Blocos';
import { breadcrumbJsonLd } from '@/lib/breadcrumb-schema';
import {
  cursos,
  docentes,
  documentosPrograma,
  parceiros,
  ppgebNumeros,
  resultadosQuadrienio,
  PPGEB_EMAIL,
} from '@/data/ppgeb';

const BASE_URL = 'https://engenhariabiomedica.com';

export const metadata: Metadata = {
  title: 'PPGEB Universidade Brasil: Mestrado, Doutorado e Pós-Doutorado em Engenharia Biomédica',
  description:
    'Programa de Pós-Graduação em Engenharia Biomédica da Universidade Brasil, nota 4 na CAPES (Engenharias IV). Mestrado, doutorado e pós-doutorado em São Paulo, com 13 docentes e 10 linhas de pesquisa.',
  alternates: { canonical: '/ppgeb' },
  openGraph: {
    images: [
      {
        url: '/api/og?title=PPGEB%20Universidade%20Brasil&category=P%C3%B3s-Gradua%C3%A7%C3%A3o',
        width: 1200,
        height: 630,
      },
    ],
  },
};

const programaJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Programa de Pós-Graduação em Engenharia Biomédica (PPGEB) da Universidade Brasil',
  url: `${BASE_URL}/ppgeb`,
  email: PPGEB_EMAIL,
  parentOrganization: { '@type': 'CollegeOrUniversity', name: 'Universidade Brasil', url: 'https://ub.edu.br' },
  address: { '@type': 'PostalAddress', addressLocality: 'São Paulo', addressRegion: 'SP', addressCountry: 'BR' },
};

export default function PpgebPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: 'PPGEB UB', href: '/ppgeb' }])) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(programaJsonLd) }} />
      <PageHeader
        palco={<PalcoFotos fotos={fotosDocentes()} />}
        overline="Universidade Brasil · Stricto Sensu"
        title="Programa de Pós-Graduação em Engenharia Biomédica"
        description="O PPGEB da Universidade Brasil forma pesquisadores na interface entre engenharia e saúde, articulando desenvolvimento de dispositivos, espectroscopia óptica, nanociências e sistemas de reabilitação, da pesquisa experimental à aplicação clínica e à transferência de tecnologia."
        breadcrumbs={[{ label: 'PPGEB UB' }]}
      />

      <section className="container-page py-10 lg:py-14">
        {/* Números */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {ppgebNumeros.map((n, i) => (
            <StatCard key={n.label} number={n.number} label={n.label} accent={i === 0} />
          ))}
        </div>

        {/* Cursos */}
        <h2 id="cursos" className="text-h2 text-primary-800 mb-4 font-serif scroll-mt-24">Cursos</h2>
        <p className="text-body-sm text-slate-500 font-serif mb-4">
          Presenciais, em São Paulo. Os três cursos compartilham o mesmo corpo docente, as mesmas áreas de concentração e as mesmas linhas de pesquisa.
        </p>
        <div className="grid gap-4 lg:grid-cols-3 mb-12">
          {cursos.map((c) => (
            <Link
              key={c.slug}
              href={c.href}
              className="card p-6 group flex flex-col hover:border-primary-200 transition-colors"
            >
              <Badge variant="teal">{c.grau}</Badge>
              <h3 className="text-h3 text-slate-900 mt-3 mb-2 group-hover:text-primary-700 transition-colors">{c.nome}</h3>
              <p className="text-body-sm text-slate-500 font-serif mb-4 leading-relaxed flex-1">{c.resumo}</p>
              <div className="flex items-center justify-between text-body-sm">
                <span className="inline-flex items-center gap-1.5 text-slate-600">
                  <Clock className="w-4 h-4 text-slate-400" />
                  {c.duracao}
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-primary-600 group-hover:text-primary-700">
                  Ver curso <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Áreas e linhas */}
        <h2 id="linhas" className="text-h2 text-primary-800 mb-4 font-serif scroll-mt-24">Áreas de Concentração e Linhas de Pesquisa</h2>
        <p className="text-body-sm text-slate-500 font-serif mb-4">
          As 10 linhas de pesquisa se organizam em três áreas de concentração, conforme o registro na Plataforma Sucupira. Elas seguem o mesmo eixo: desenvolver a técnica, validar em modelo experimental e levar à aplicação clínica.
        </p>
        <AreasLinhas />

        {/* Corpo docente */}
        <h2 id="docentes" className="text-h2 text-primary-800 mb-4 font-serif scroll-mt-24">Corpo Docente</h2>
        <p className="text-body-sm text-slate-500 font-serif mb-6">
          {docentes.length} docentes, que orientam no mestrado e no doutorado e supervisionam o pós-doutorado.
        </p>
        <DocentesGrid docentes={docentes} agrupar />

        {/* Indústria */}
        <h2 id="industria" className="text-h2 text-primary-800 mb-4 font-serif scroll-mt-24">Indústria e Desenvolvimento</h2>
        <p className="text-body text-slate-600 font-serif mb-6 leading-relaxed max-w-3xl">
          Concepção, projeto, prototipagem e validação são feitos dentro do programa: quem projeta o equipamento, quem sintetiza o material, quem valida no modelo experimental e quem leva ao paciente. No quadriênio 2021-2024 isso resultou em 5 patentes, 6 softwares e 3 produtos, um deles deu origem à empresa NewHope BIOtech.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {resultadosQuadrienio.map((r) => (
            <StatCard key={r.label} number={r.number} label={r.label} />
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 mb-12">
          {parceiros.map((p) => (
            <div key={p.grupo} className="card p-5">
              <h3 className="text-overline uppercase text-teal-700 tracking-[0.12em] mb-1">{p.grupo}</h3>
              <p className="text-body-sm text-slate-600 font-serif">{p.nomes}</p>
            </div>
          ))}
        </div>

        {/* Documentos */}
        <h2 id="documentos" className="text-h2 text-primary-800 mb-4 font-serif scroll-mt-24">Documentos do Programa</h2>
        <DocumentosLista documentos={documentosPrograma} />

        {/* Processo seletivo docente */}
        <div className="mb-12">
          <LinkPrograma
            href="/carreira/processo-seletivo"
            titulo="Processo Seletivo Docente (Edital 01/2026)"
            texto="O PPGEB está contratando professor/pesquisador permanente para o quadriênio 2025-2028."
          />
        </div>

        <CtaInscricao
          titulo="Quer fazer parte do PPGEB?"
          texto="As inscrições para mestrado, doutorado e pós-doutorado são feitas no sistema da Universidade Brasil. Escolha uma das linhas de pesquisa e um possível orientador antes de se inscrever."
        />
      </section>
    </>
  );
}
