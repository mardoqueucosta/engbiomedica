import { Metadata } from 'next';
import Link from 'next/link';
import { Building, Banknote, BookOpen, FlaskConical } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { StatCard } from '@/components/ui/StatCard';

export const metadata: Metadata = {
  title: 'Pesquisa e Inovação — Engenharia Biomédica',
  description: 'Centros de excelência, financiamento (EMBRAPII, FINEP, FAPESP) e fronteiras da pesquisa em Engenharia Biomédica no Brasil.',
  alternates: { canonical: '/pesquisa' },
  openGraph: {
    images: [{ url: '/api/og?title=Pesquisa%20e%20Inova%C3%A7%C3%A3o%20%E2%80%94%20Engenharia%20Biom%C3%A9dica&category=Pesquisa', width: 1200, height: 630 }],
  },
};

export default function PesquisaPage() {
  return (
    <>
      <PageHeader
        overline="Pesquisa & Inovação"
        title="A pesquisa que transforma a saúde no Brasil"
        description="Da IA que analisa 4.000 ECGs por dia no HC-UFMG ao primeiro analisador nacional de bisturis elétricos no IFBA — a pesquisa brasileira em Engenharia Biomédica é de nível internacional."
        breadcrumbs={[{ label: 'Pesquisa' }]}
      />

      <section className="container-page py-10 lg:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <StatCard number="R$ 150 mi" label="EMBRAPII + Min. Saúde" accent />
          <StatCard number="233" label="Empresas apoiadas EMBRAPII" />
          <StatCard number="95" label="Pedidos de PI" />
          <StatCard number="19" label="Patentes IFBA" />
        </div>

        <div className="grid gap-4 sm:grid-cols-3 mb-12">
          <Link href="/artigos/centros-pesquisa-engbiomedica-mapa" className="card p-6 group block">
            <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center mb-3 group-hover:bg-primary-100 transition-colors">
              <Building className="w-5 h-5 text-primary-600" />
            </div>
            <h2 className="text-h3 text-slate-900 mb-1 group-hover:text-primary-700 transition-colors">Centros de Pesquisa</h2>
            <p className="text-body-sm text-slate-500 font-serif">PEB/COPPE-UFRJ, CEB/UNICAMP, LEB/USP, UFPE, UFMG e outros centros de excelência.</p>
          </Link>
          <Link href="/pesquisa/financiamento" className="card p-6 group block">
            <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center mb-3 group-hover:bg-teal-100 transition-colors">
              <Banknote className="w-5 h-5 text-teal-600" />
            </div>
            <h2 className="text-h3 text-slate-900 mb-1 group-hover:text-primary-700 transition-colors">Financiamento</h2>
            <p className="text-body-sm text-slate-500 font-serif">EMBRAPII, FINEP, FAPESP PIPE, CNPq, BNDES e outros programas de fomento à inovação.</p>
          </Link>
          <Link href="/internacional/repositorios" className="card p-6 group block">
            <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center mb-3 group-hover:bg-primary-100 transition-colors">
              <BookOpen className="w-5 h-5 text-primary-600" />
            </div>
            <h2 className="text-h3 text-slate-900 mb-1 group-hover:text-primary-700 transition-colors">Repositórios Acadêmicos</h2>
            <p className="text-body-sm text-slate-500 font-serif">PubMed, IEEE Xplore, SciELO, periódicos e bases de dados para pesquisa em Engenharia Biomédica.</p>
          </Link>
        </div>

        <h2 className="text-h2 text-primary-800 mb-4 font-serif">Guias para Pesquisadores</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {[
            { title: 'Como Publicar Artigos Científicos', desc: 'Escolha de revistas (Nature BME, IEEE, RBEB), métricas de impacto e estratégias para aceite.', href: '/artigos/como-publicar-artigos-engenharia-biomedica' },
            { title: 'Editais e Financiamento', desc: 'FAPESP, CNPq, FINEP, EMBRAPII, BNDES e Decit/MS: valores, prazos e como submeter projetos.', href: '/artigos/editais-financiamento-pesquisa-saude' },
            { title: 'Do Laboratório ao Mercado', desc: 'Transferência tecnológica: do TRL 1 ao registro ANVISA, spin-offs e incubadoras hospitalares.', href: '/artigos/laboratorio-mercado-pesquisa-produto-medico' },
            { title: 'Patentes em Dispositivos Médicos', desc: 'Requisitos INPI, custos, sistema PCT, PPH, patentes de SaMD e casos brasileiros.', href: '/artigos/patentes-dispositivos-medicos-brasil' },
            { title: 'Python e MATLAB', desc: 'Comparativo técnico: bibliotecas, toolboxes e aplicações em sinais, imagens, IA e bioinformática.', href: '/artigos/python-matlab-engenharia-biomedica' },
            { title: 'Tendências de Pesquisa', desc: '8 fronteiras: IA diagnóstica, bioimpressão, organ-on-chip, robótica, BCIs, CRISPR e IoMT.', href: '/artigos/tendencias-pesquisa-engenharia-biomedica' },
          ].map((g) => (
            <Link key={g.href} href={g.href} className="card p-5 group block">
              <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center mb-2 group-hover:bg-teal-100 transition-colors">
                <FlaskConical className="w-4 h-4 text-teal-600" />
              </div>
              <h3 className="text-h4 text-slate-900 mb-1 group-hover:text-primary-700 transition-colors">{g.title}</h3>
              <p className="text-body-sm text-slate-500 font-serif">{g.desc}</p>
            </Link>
          ))}
        </div>

        <h2 className="text-h2 text-primary-800 mb-4">Fronteiras da Pesquisa</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { titulo: 'IA em Saúde', desc: '17% dos médicos brasileiros já usam IA generativa. Destaques em diagnóstico cardiovascular por ECG (UFMG) e aceleração de imagens médicas (UNICAMP).' },
            { titulo: 'Processamento de Sinais e Imagens', desc: 'Força histórica com grupos consolidados em UFRJ, UNICAMP, USP e UFPE.' },
            { titulo: 'Instrumentação Biomédica', desc: 'Desenvolvimento de equipamentos nacionais — IFBA criou o primeiro analisador brasileiro de bisturis elétricos.' },
            { titulo: 'Telemedicina e Saúde Digital', desc: 'Expansão exponencial pós-pandemia. 22% das healthtechs utilizam telemedicina como tecnologia-base.' },
          ].map((f) => (
            <div key={f.titulo} className="card p-5">
              <h3 className="text-h4 text-slate-900 mb-1">{f.titulo}</h3>
              <p className="text-body-sm text-slate-500 font-serif">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
