import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { PalcoFotos } from '@/components/ui/PalcoImagens';
import { fotosDocentes } from '@/lib/topo';
import { StatCard } from '@/components/ui/StatCard';
import { Badge } from '@/components/ui/Badge';
import Link from 'next/link';
import {
  Building,
  MapPin,
  CheckCircle,
  FileDown,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';
import { breadcrumbJsonLd } from '@/lib/breadcrumb-schema';
import { DocentesGrid } from '@/components/ppgeb/DocentesGrid';
import {
  docentes,
  disciplinasObrigatoriasMestrado,
  disciplinasObrigatoriasDoutorado,
  disciplinasOptativas,
} from '@/data/ppgeb';

export const metadata: Metadata = {
  title: 'Processo Seletivo Docente — PPGEB Universidade Brasil',
  description:
    'Edital de contratação de professor/pesquisador permanente para o Programa de Pós-Graduação em Engenharia Biomédica (PPGEB) da Universidade Brasil. Salário R$ 17.000/mês, início imediato.',
  alternates: { canonical: '/carreira/processo-seletivo' },
  openGraph: {
    images: [
      {
        url: '/api/og?title=Processo%20Seletivo%20Docente%20%E2%80%94%20PPGEB&category=Carreira',
        width: 1200,
        height: 630,
      },
    ],
  },
};

const requisitos = [
  'Título de Doutor obtido em programa recomendado pela CAPES ou revalidado no Brasil, nas áreas listadas abaixo.',
  'Produção intelectual compatível com os critérios de credenciamento de docente permanente na área de Engenharias IV da CAPES (foco em periódicos Qualis A1, A2, A3 e A4) nos últimos 5 anos.',
  'Experiência ou potencial concreto para captação de recursos em agências de fomento (FAPESP, CNPq, FINEP) ou via parcerias com o setor privado.',
];

const areasFormacao = [
  {
    categoria: 'Engenharias de Base Tecnológica',
    areas: 'Biomédica, Elétrica, Eletrônica, Automação, Computação, Mecânica, Materiais/Química e Produção',
  },
  {
    categoria: 'Ciências Exatas e Naturais',
    areas: 'Física/Física Médica, Matemática, Ciência da Computação e Ciência de Dados/IA',
  },
  {
    categoria: 'Ciências Biológicas e Biomédicas',
    areas: 'Biologia, Biomedicina e Biotecnologia',
  },
  {
    categoria: 'Ciências da Saúde',
    areas: 'Medicina, Fisioterapia, Ed. Física, Enfermagem, Farmácia, Odontologia e Nutrição',
  },
];

const diferenciais = [
  {
    badge: 'Inovação',
    variant: 'teal' as const,
    title: 'Patentes e Produtos',
    description:
      'Experiência em desenvolvimento de produtos, registro e licenciamento de patentes, ou projetos de P&D em parceria com empresas do setor de saúde (Healthtechs, indústrias de equipamentos médicos).',
  },
  {
    badge: 'Presença Digital',
    variant: 'primary' as const,
    title: 'Comunicação Científica',
    description:
      'Atuação consistente em meios digitais (redes sociais, blogs, podcasts ou canais de vídeo) voltada para divulgação científica e engajamento público, alinhada à estratégia de visibilidade do programa.',
  },
  {
    badge: 'Internacional',
    variant: 'coral' as const,
    title: 'Internacionalização',
    description:
      'Experiência de pós-doutorado no exterior ou projetos de colaboração internacional ativos, contribuindo para a internacionalização do programa.',
  },
];

const eixos = [
  {
    title: 'Ensino e Modernização Curricular',
    description:
      'Reformular ementas com ênfase em IA aplicada à saúde, ensino híbrido e projetos integradores. Recrutar ativamente alunos de graduação para Iniciação Científica e pós-graduação.',
  },
  {
    title: 'Pesquisa, Inovação e Produção Intelectual',
    description:
      'Publicações em periódicos de alto impacto (A1/A2), desenvolvimento de tecnologias assistivas para o SUS, captação de fomento (FAPESP, CNPq, FINEP, Embrapii) e transferência tecnológica.',
  },
  {
    title: 'Cultura, Extensão e Presença Digital',
    description:
      'Eixo inédito: atuar como embaixador digital do PPGEB, produzir conteúdo de divulgação científica, monitorar altmetria e contribuir para cursos de extensão e difusão tecnológica.',
  },
];




const areasAtuacao = [
  {
    title: 'Engenharia Clínica',
    href: '/artigos/engenharia-clinica-guia-completo',
    badge: 'Hospitais & Clínicas',
  },
  {
    title: 'Instrumentação Biomédica',
    href: '/artigos/instrumentacao-biomedica',
    badge: 'Sensores & Sinais',
  },
  {
    title: 'Biomecânica e Reabilitação',
    href: '/artigos/biomecanica-movimento-proteses',
    badge: 'Movimento & Reabilitação',
  },
  {
    title: 'Biomateriais e Eng. de Tecidos',
    href: '/artigos/biomateriais-implantes-bioimpressao',
    badge: 'Implantes & Tecidos',
  },
  {
    title: 'Processamento de Sinais e Imagens',
    href: '/artigos/processamento-sinais-biomedicos-python',
    badge: 'Imagens Médicas',
  },
  {
    title: 'Informática em Saúde',
    href: '/artigos/informatica-saude-his-prontuario',
    badge: 'Sistemas & Dados',
  },
  {
    title: 'IA em Saúde',
    href: '/artigos/ia-saude-brasil',
    badge: 'Machine Learning',
  },
  {
    title: 'Neuroengenharia e BCI',
    href: '/artigos/neuroengenharia-bci',
    badge: 'Cérebro & Interfaces',
  },
  {
    title: 'Robótica Cirúrgica',
    href: '/artigos/cirurgia-robotica-brasil',
    badge: 'Cirurgia & Automação',
  },
  {
    title: 'Bioimpressão 3D',
    href: '/artigos/engenharia-tecidos-bioimpressao-3d',
    badge: 'Biofabricação',
  },
  {
    title: 'Engenharia Genômica e CRISPR',
    href: '/artigos/engenharia-genomica-crispr',
    badge: 'Genômica & Edição Gênica',
  },
  {
    title: 'Nanotecnologia Biomédica',
    href: '/artigos/nanotecnologia-biomedica',
    badge: 'Nanomedicina',
  },
];

const etapas = [
  {
    title: 'Análise do Currículo Lattes',
    tipo: 'Eliminatória e Classificatória',
    description:
      'Avaliação da produção bibliográfica (foco em Qualis A e citações), orientações concluídas, captação de recursos e histórico de inovação.',
  },
  {
    title: 'Apresentação do Plano de Trabalho',
    tipo: 'Eliminatória e Classificatória',
    description:
      'Apresentação oral (30 a 50 min) da proposta de atuação para o quadriênio 2025-2028, cobrindo ensino, pesquisa, inovação e inserção digital.',
  },
  {
    title: 'Entrevista',
    tipo: 'Eliminatória',
    description:
      'Arguição sobre o plano de trabalho, potencial de internacionalização e estratégias para aumentar a visibilidade do programa.',
  },
];

const documentos = [
  {
    title: 'Edital 01/2026',
    href: '/editais/01-edital-01-2026-contratacao-docente-preliminar.pdf',
    format: 'PDF — Edital Completo',
  },
  {
    title: 'Regulamento PPGEB',
    href: '/editais/02-regulamento-ppg-engenharia-biomedica-aprovado-consu.pdf',
    format: 'PDF — Regulamento do Programa',
  },
  {
    title: 'Avaliação CAPES Quadrienal',
    href: '/editais/03-avaliacao-Quadrienal_Relatorio_Final.pdf',
    format: 'PDF — Relatório Engenharias IV',
  },
];


export default function ProcessoSeletivoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: 'Carreira', href: '/carreira' }, { name: 'Processo Seletivo', href: '/carreira/processo-seletivo' }])) }}
      />
      <PageHeader
        palco={<PalcoFotos fotos={fotosDocentes()} />}
        overline="Edital 01/2026 — PPGEB"
        title="Processo Seletivo: Professor/Pesquisador Permanente"
        description="O Programa de Pós-Graduação em Engenharia Biomédica da Universidade Brasil busca docente permanente para atuar em ensino, pesquisa e inovação no quadriênio 2025-2028. Início imediato, regime PJ."
        breadcrumbs={[
          { label: 'Carreira', href: '/carreira' },
          { label: 'Processo Seletivo' },
        ]}
      />

      <section className="container-page py-10 lg:py-14">
        {/* Números-chave */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <StatCard number="R$ 17.000" label="Salário Mensal (PJ)" accent />
          <StatCard number="Imediato" label="Início das Atividades" />
          <StatCard number="3 Etapas" label="Processo Seletivo" />
          <StatCard number="Engenharias IV" label="Área CAPES" />
        </div>

        {/* CTA Principal */}
        <div className="card p-6 lg:p-8 mb-12 border-l-4 border-l-teal-500">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="text-h2 text-slate-900 mb-2">Inscreva-se Agora</h2>
              <p className="text-body text-slate-500 font-serif">
                Inscrições abertas via formulário Google. Envie seu Currículo Lattes e plano de trabalho para o quadriênio 2025-2028.
              </p>
            </div>
            <a
              href="https://forms.gle/uPiGyLh5Ub3BxwVV9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg transition-colors flex-shrink-0"
            >
              <ExternalLink className="w-5 h-5" />
              Formulário de Inscrição
            </a>
          </div>
        </div>

        {/* Sobre a Vaga */}
        <h2 className="text-h2 text-primary-800 mb-4 font-serif">Sobre a Vaga</h2>
        <div className="grid gap-4 sm:grid-cols-2 mb-12">
          <div className="card p-5">
            <h3 className="text-h3 text-slate-900 mb-3 flex items-center gap-2">
              <Building className="w-5 h-5 text-primary-600" />
              Instituição
            </h3>
            <ul className="space-y-1.5 text-body-sm text-slate-600 font-serif">
              <li><strong>Universidade Brasil</strong></li>
              <li>Programa de Pós-Graduação em Engenharia Biomédica (PPGEB)</li>
              <li>Mestrado e Doutorado — Área CAPES: Engenharias IV</li>
              <li className="flex items-center gap-3">
                <a
                  href="https://ub.edu.br/stricto-sensu-mestrado-engenharia-biomedica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 transition-colors font-medium"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Mestrado
                </a>
                <a
                  href="https://ub.edu.br/stricto-sensu-doutorado-engenharia-biomedica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 transition-colors font-medium"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Doutorado
                </a>
              </li>
              <li>Contratação via Pessoa Jurídica (PJ)</li>
              <li>Remuneração: R$ 17.000,00/mês</li>
            </ul>
          </div>
          <div className="card p-5">
            <h3 className="text-h3 text-slate-900 mb-3 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-teal-700" />
              Local e Regime
            </h3>
            <ul className="space-y-1.5 text-body-sm text-slate-600 font-serif">
              <li><strong>Campus São Paulo (Itaquera)</strong></li>
              <li>Atividades presenciais e remotas conforme planejamento</li>
              <li>Início das atividades: imediato</li>
              <li>Linhas de pesquisa: Sistemas de Reabilitação; Dispositivos e Espectroscopia; Nanociências e Plasmas</li>
            </ul>
          </div>
        </div>

        {/* Áreas de Atuação */}
        <h2 className="text-h2 text-primary-800 mb-4 font-serif">Áreas de Atuação do Programa</h2>
        <p className="text-body-sm text-slate-500 font-serif mb-4">
          O PPGEB concentra pesquisa e ensino nas seguintes áreas da Engenharia Biomédica, alinhadas às suas três linhas de pesquisa: Sistemas de Reabilitação, Dispositivos e Espectroscopia, e Nanociências e Plasmas.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {areasAtuacao.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="card p-4 group flex items-center justify-between gap-3 hover:border-primary-200 transition-colors"
            >
              <div>
                <h3 className="text-h3 text-slate-900 group-hover:text-primary-700 transition-colors">{area.title}</h3>
                <Badge variant="teal">{area.badge}</Badge>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary-500 transition-colors flex-shrink-0" />
            </Link>
          ))}
        </div>

        {/* Requisitos Obrigatórios */}
        <h2 className="text-h2 text-primary-800 mb-4 font-serif">Requisitos Obrigatórios</h2>
        <div className="card p-6 mb-6">
          <ul className="space-y-3">
            {requisitos.map((req) => (
              <li key={req} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <span className="text-body text-slate-700 font-serif">{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Áreas de Formação Aceitas */}
        <h3 className="text-h3 text-primary-800 mb-3 font-serif">Áreas de Formação Aceitas</h3>
        <div className="grid gap-3 sm:grid-cols-2 mb-4">
          {areasFormacao.map((grupo) => (
            <div key={grupo.categoria} className="card p-4">
              <h4 className="text-body font-semibold text-slate-900 mb-1">{grupo.categoria}</h4>
              <p className="text-body-sm text-slate-500 font-serif">{grupo.areas}</p>
            </div>
          ))}
        </div>
        <p className="text-body-sm text-slate-500 font-serif mb-12 italic">
          Também são aceitas áreas correlatas. O perfil do candidato deve demonstrar interface entre engenharia e saúde, com atuação ou potencial de pesquisa interdisciplinar aplicada à Engenharia Biomédica.
        </p>

        {/* Diferenciais */}
        <h2 className="text-h2 text-primary-800 mb-4 font-serif">Diferenciais Valorizados</h2>
        <div className="grid gap-4 sm:grid-cols-3 mb-12">
          {diferenciais.map((d) => (
            <div key={d.title} className="card p-5">
              <Badge variant={d.variant}>{d.badge}</Badge>
              <h3 className="text-h3 text-slate-900 mt-3 mb-2">{d.title}</h3>
              <p className="text-body-sm text-slate-500 font-serif">{d.description}</p>
            </div>
          ))}
        </div>

        {/* Eixos do Plano de Trabalho */}
        <h2 className="text-h2 text-primary-800 mb-4 font-serif">Eixos do Plano de Trabalho (2025-2028)</h2>
        <div className="space-y-4 mb-12">
          {eixos.map((eixo, i) => (
            <div key={eixo.title} className="flex gap-4 items-start">
              <span className="font-mono text-sm font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md flex-shrink-0">
                Eixo {i + 1}
              </span>
              <div>
                <h3 className="text-h3 text-slate-900">{eixo.title}</h3>
                <p className="text-body-sm text-slate-500 font-serif mt-0.5">{eixo.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Disciplinas */}
        <h2 className="text-h2 text-primary-800 mb-4 font-serif">Disciplinas</h2>
        <p className="text-body-sm text-slate-500 font-serif mb-6">
          Mestrado e Doutorado exigem 4 disciplinas obrigatórias + 4 optativas. Todos os alunos devem cursar a atividade complementar de Projetos em Engenharia Biomédica.
        </p>
        <div className="mb-12">
          <h3 className="text-h3 text-slate-900 mb-3">Obrigatórias — Mestrado</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {disciplinasObrigatoriasMestrado.map((d) => (
              <Badge key={d} variant="slate">{d}</Badge>
            ))}
          </div>
          <h3 className="text-h3 text-slate-900 mb-3">Obrigatórias — Doutorado</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {disciplinasObrigatoriasDoutorado.map((d) => (
              <Badge key={d} variant="primary">{d}</Badge>
            ))}
          </div>
          <h3 className="text-h3 text-slate-900 mb-3">Optativas (Mestrado e Doutorado)</h3>
          <div className="flex flex-wrap gap-2">
            {disciplinasOptativas.map((d) => (
              <Badge key={d} variant="teal">{d}</Badge>
            ))}
          </div>
        </div>

        {/* Processo Seletivo */}
        <h2 className="text-h2 text-primary-800 mb-4 font-serif">Etapas do Processo Seletivo</h2>
        <div className="grid gap-4 sm:grid-cols-3 mb-12">
          {etapas.map((etapa, i) => (
            <div key={etapa.title} className="card p-5 text-center">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-3">
                <span className="text-h3 text-primary-700">{i + 1}</span>
              </div>
              <h3 className="text-h3 text-slate-900 mb-1">{etapa.title}</h3>
              <Badge variant="slate">{etapa.tipo}</Badge>
              <p className="text-body-sm text-slate-500 font-serif mt-2">{etapa.description}</p>
            </div>
          ))}
        </div>

        {/* Corpo Docente */}
        <h2 className="text-h2 text-primary-800 mb-4 font-serif">Corpo Docente do PPGEB</h2>
        <DocentesGrid docentes={docentes} />

        {/* Downloads */}
        <h2 className="text-h2 text-primary-800 mb-4 font-serif">Documentos para Download</h2>
        <div className="grid gap-4 sm:grid-cols-3 mb-12">
          {documentos.map((doc) => (
            <a
              key={doc.href}
              href={doc.href}
              download
              className="card p-5 group block text-center"
            >
              <div className="w-10 h-10 rounded-lg bg-coral-50 flex items-center justify-center mx-auto mb-3 group-hover:bg-coral-100 transition-colors">
                <FileDown className="w-5 h-5 text-coral-500" />
              </div>
              <h3 className="text-h3 text-slate-900 mb-1 group-hover:text-primary-700 transition-colors">
                {doc.title}
              </h3>
              <p className="text-body-sm text-slate-400 font-mono">{doc.format}</p>
            </a>
          ))}
        </div>

        {/* CTA Final */}
        <div className="card p-6 lg:p-8 bg-primary-50 border-primary-100 text-center">
          <h2 className="text-h2 text-primary-800 mb-2">Pronto para se candidatar?</h2>
          <p className="text-body text-slate-600 font-serif mb-6 max-w-xl mx-auto">
            Envie seu Currículo Lattes atualizado e um plano de trabalho alinhado aos eixos do programa para o quadriênio 2025-2028.
          </p>
          <a
            href="https://forms.gle/uPiGyLh5Ub3BxwVV9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
            Inscreva-se via Google Forms
          </a>
        </div>
      </section>
    </>
  );
}
