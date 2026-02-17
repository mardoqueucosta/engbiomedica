import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Hubs e Aceleradoras — Startups em Engenharia Biomédica',
  description:
    'Eretz.bio (Einstein), InovaHC (USP), Horizontes Hub (Unimed-BH), Cubo Itaú e os principais programas de aceleração de healthtechs no Brasil.',
};

const hubs = [
  {
    nome: 'Eretz.bio',
    vinculo: 'Hospital Albert Einstein',
    local: 'São Paulo/SP',
    desc: 'Criado em 2017, já acelerou 150+ startups e incorporou 27 tecnologias ao hospital. Possui programa específico para soluções voltadas ao SUS.',
    destaque: '150+ startups aceleradas',
  },
  {
    nome: 'Hub InovaHC',
    vinculo: 'HC-FMUSP',
    local: 'São Paulo/SP',
    desc: 'Vinculado ao maior complexo hospitalar da América Latina. Abriga 30+ startups residentes com acesso a dados clínicos e validação hospitalar real.',
    destaque: '30+ startups residentes',
  },
  {
    nome: 'Horizontes Hub',
    vinculo: 'Unimed-BH',
    local: 'Belo Horizonte/MG',
    desc: 'Lançado em 2024, é o primeiro hub brasileiro combinando inovação aberta, novos negócios e labs de experimentação (Consultório 2030 e Meta-Saúde). R$ 60 milhões para investir em startups de saúde em 4 anos.',
    destaque: 'R$ 60 mi em 4 anos',
  },
  {
    nome: 'SUPERA Parque',
    vinculo: 'Campus USP Ribeirão Preto',
    local: 'Ribeirão Preto/SP',
    desc: 'Instalado no campus da USP com 74 empresas e laboratórios acreditados pelo INMETRO. Referência em infraestrutura para medtech.',
    destaque: '74 empresas',
  },
];

const aceleradoras = [
  {
    nome: 'Cubo Itaú',
    desc: 'Healthtech como vertical estratégica dentro do maior hub de empreendedorismo tecnológico da América Latina.',
  },
  {
    nome: 'Google for Startups Accelerator',
    desc: 'Programa global com edições dedicadas a healthtechs. A Neomed é alumni do programa.',
  },
  {
    nome: 'InovAtiva Brasil',
    desc: 'Maior programa público de aceleração do Brasil — 3.000+ startups aceleradas, com verticais em saúde.',
  },
  {
    nome: 'Supera Incubadora',
    desc: 'Sediada em Ribeirão Preto, já incubou 62 empresas de base tecnológica com foco em saúde e biotech.',
  },
];

export default function HubsPage() {
  return (
    <>
      <PageHeader
        overline="Startups & Healthtechs"
        title="Hubs e Aceleradoras"
        description="A infraestrutura de inovação em saúde combina hubs hospitalares, parques tecnológicos e programas de aceleração que conectam startups ao mercado."
        breadcrumbs={[
          { label: 'Startups', href: '/startups' },
          { label: 'Hubs e Aceleradoras' },
        ]}
      />

      <section className="container-page py-10 lg:py-14">
        <h2 className="text-h2 text-primary-800 mb-4">
          Hubs de Inovação em Saúde
        </h2>
        <div className="space-y-4 mb-12">
          {hubs.map((h) => (
            <div
              key={h.nome}
              className="card p-6 border-l-4 border-l-teal-400"
            >
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-h3 text-slate-900">{h.nome}</h3>
                <Badge variant="teal">{h.destaque}</Badge>
              </div>
              <p className="text-caption text-slate-400 mb-2">
                {h.vinculo} · {h.local}
              </p>
              <p className="text-body-sm text-slate-500 font-serif">{h.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-h2 text-primary-800 mb-4">
          Aceleradoras com Vertical de Saúde
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {aceleradoras.map((a) => (
            <div key={a.nome} className="card p-5">
              <h3 className="text-h4 text-slate-900 mb-1">{a.nome}</h3>
              <p className="text-body-sm text-slate-500 font-serif">{a.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-5 rounded-xl bg-primary-50 border border-primary-200">
          <h3 className="text-h4 text-primary-800 mb-2">
            Benchmark Internacional
          </h3>
          <p className="text-body-sm text-primary-700 font-serif">
            Nos EUA, programas como JLABS (J&J), MedTech Innovator, MassChallenge HealthTech e o BioDesign de Stanford representam a referência global. O modelo brasileiro se diferencia pela integração com hospitais públicos (InovaHC/SUS) e cooperativas de saúde (Horizontes Hub/Unimed), criando caminhos de validação únicos.
          </p>
        </div>
      </section>
    </>
  );
}
