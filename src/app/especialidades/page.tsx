import { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Especialidades da Engenharia Biomédica',
  description: 'Conheça as áreas de especialização em Engenharia Biomédica: engenharia clínica, biomateriais, IA em saúde, instrumentação, biomecânica, neuroengenharia e mais.',
  alternates: { canonical: '/especialidades' },
  openGraph: {
    images: [{ url: '/api/og?title=Especialidades%20da%20Engenharia%20Biom%C3%A9dica&category=Especialidades', width: 1200, height: 630 }],
  },
};

const sections = [
  {
    title: 'Engenharia Clínica',
    description: 'Gestão de equipamentos médico-hospitalares, manutenção preventiva e corretiva, e assessoria técnica em ambientes de saúde.',
    href: '/especialidades/engenharia-clinica',
    badge: 'Hospitais & Clínicas',
  },
  {
    title: 'Instrumentação Biomédica',
    description: 'Desenvolvimento e manutenção de instrumentos para medição de sinais biológicos, sensores e transdutores médicos.',
    href: '/especialidades/instrumentacao-biomedica',
    badge: 'Sensores & Sinais',
  },
  {
    title: 'Processamento de Sinais e Imagens',
    description: 'Análise computacional de sinais biomédicos (ECG, EEG, EMG) e imagens médicas (tomografia, ressonância, ultrassom).',
    href: '/especialidades/processamento-sinais-imagens',
    badge: 'Imagens Médicas',
  },
  {
    title: 'Biomecânica e Reabilitação',
    description: 'Estudo do movimento humano, desenvolvimento de próteses, órteses e equipamentos de reabilitação funcional.',
    href: '/especialidades/biomecanica-reabilitacao',
    badge: 'Movimento & Reabilitação',
  },
  {
    title: 'Biomateriais e Eng. de Tecidos',
    description: 'Pesquisa e desenvolvimento de materiais biocompatíveis, implantes, scaffolds e engenharia tecidual.',
    href: '/especialidades/biomateriais-engenharia-tecidos',
    badge: 'Implantes & Tecidos',
  },
  {
    title: 'Informática em Saúde',
    description: 'Sistemas de informação hospitalar, prontuário eletrônico, interoperabilidade e padrões como HL7 e DICOM.',
    href: '/especialidades/informatica-saude',
    badge: 'Sistemas & Dados',
  },
  {
    title: 'IA em Saúde',
    description: 'Aplicações de inteligência artificial e machine learning em diagnóstico, triagem, descoberta de fármacos e gestão hospitalar.',
    href: '/especialidades/inteligencia-artificial-saude',
    badge: 'Machine Learning',
  },
  {
    title: 'Neuroengenharia',
    description: 'Interfaces cérebro-máquina, neuroestimulação, neuroimagem funcional e dispositivos para distúrbios neurológicos.',
    href: '/especialidades/neuroengenharia',
    badge: 'Cérebro & Interfaces',
  },
  {
    title: 'Robótica Médica',
    description: 'Robôs cirúrgicos, exoesqueletos, sistemas de navegação intraoperatória e automação em procedimentos médicos.',
    href: '/especialidades/robotica-medica',
    badge: 'Cirurgia & Automação',
  },
];

export default function EspecialidadesPage() {
  return (
    <>
      <PageHeader
        overline="Especialidades"
        title="Especialidades da Engenharia Biomédica"
        description="Conheça as áreas de especialização, o que cada profissional faz no dia a dia, mercado de trabalho e perspectivas futuras."
        breadcrumbs={[{ label: 'Especialidades' }]}
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

        {/* Intro text + reference link */}
        <div className="mt-14 max-w-3xl">
          <p className="text-body text-slate-600 font-serif leading-relaxed">
            A Engenharia Biomédica oferece um dos leques mais amplos de especialização entre todas as engenharias.
            Da UTI de um hospital ao laboratório de inteligência artificial, do escritório de regulamentação da ANVISA
            à sala limpa de uma fábrica de implantes — cada especialidade tem perfil, mercado e desafios próprios.
            Explore cada área para descobrir qual se encaixa no seu perfil.
          </p>
          <p className="mt-4 text-body-sm text-slate-500 font-serif">
            Para uma visão comparativa de todas as áreas, consulte:{' '}
            <Link href="/artigos/areas-atuacao-engenharia-biomedica" className="text-primary-600 hover:text-primary-800 font-medium transition-colors">
              As 12 Áreas de Atuação da Engenharia Biomédica
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
