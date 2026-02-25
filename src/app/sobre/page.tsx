import { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Sobre o Portal — Engenharia Biomédica',
  description:
    'Missão, equipe e metodologia editorial do portal engenhariabiomedica.com — a referência sobre Engenharia Biomédica no Brasil.',
  alternates: { canonical: '/sobre' },
  openGraph: {
    images: [{ url: '/api/og?title=Sobre%20o%20Portal%20%E2%80%94%20Engenharia%20Biom%C3%A9dica&category=Sobre', width: 1200, height: 630 }],
  },
};

export default function SobrePage() {
  return (
    <>
      <PageHeader
        overline="O Portal"
        title="Sobre o engenhariabiomedica.com"
        description="A referência que a Engenharia Biomédica no Brasil precisava, em um único endereço."
        breadcrumbs={[{ label: 'Sobre' }]}
        centered
      />

      <section className="container-page py-10 lg:py-14">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h2 className="text-h2 text-primary-800 mb-3">Missão</h2>
            <p className="text-body text-slate-600 font-serif leading-relaxed text-justify">
              O <strong>engenhariabiomedica.com</strong> é a principal plataforma digital de referência sobre Engenharia Biomédica no Brasil, reunindo em um único endereço informações sobre formação acadêmica, mercado de trabalho, regulamentação, pesquisa, inovação e startups. O portal substitui informação dispersa entre dezenas de sites institucionais e oferece profundidade equivalente ao que BMES.org e IEEE EMBS representam nos EUA.
            </p>
          </div>

          <div>
            <h2 className="text-h2 text-primary-800 mb-3">Público-alvo</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { titulo: 'Estudantes e Vestibulandos', desc: 'Informações sobre cursos, grades curriculares, universidades e como ingressar na área.' },
                { titulo: 'Profissionais Formados', desc: 'Salários, áreas de atuação, registro no CREA e oportunidades de carreira.' },
                { titulo: 'Empresas e Indústria', desc: 'Regulamentação ANVISA, normas técnicas, diretório de empresas e startups.' },
                { titulo: 'Pesquisadores e Acadêmicos', desc: 'Centros de pesquisa, financiamento, repositórios acadêmicos e publicações.' },
              ].map((p) => (
                <div key={p.titulo} className="card p-5">
                  <h3 className="text-h4 text-slate-900 mb-1">{p.titulo}</h3>
                  <p className="text-body-sm text-slate-500 font-serif text-justify">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-h2 text-primary-800 mb-3">Metodologia Editorial</h2>
            <p className="text-body text-slate-600 font-serif leading-relaxed text-justify mb-4">
              Todo o conteúdo do portal é baseado em pesquisa primária e fontes verificáveis. Os dados de mercado utilizam informações do CAGED, Portal Salário, ABIMO e Tracxn. Informações regulatórias vêm diretamente das RDCs da ANVISA e resoluções do CONFEA/CREA. Dados acadêmicos são cruzados com o e-MEC, avaliação CAPES e sites institucionais das universidades.
            </p>
            <p className="text-body text-slate-600 font-serif leading-relaxed text-justify">
              Os artigos de análise são revisados editorialmente e atualizados semestralmente. Dados salariais e de mercado são verificados a cada atualização do CAGED. O portal não aceita conteúdo patrocinado disfarçado de editorial — toda publicidade é claramente identificada.
            </p>
          </div>

          <div>
            <h2 className="text-h2 text-primary-800 mb-3">Idealizador</h2>
            <div className="card p-6">
              <h3 className="text-h4 text-slate-900 mb-2">Mardoqueu Martins da Costa</h3>
              <p className="text-body text-slate-600 font-serif leading-relaxed text-justify">
                Pós-doutor em Engenharia de Biossistemas pela ESALQ/USP, Doutor e Mestre em Engenharia Elétrica pela EESC/USP, com formação em Ciências Exatas (IFSC/USP) e Mecatrônica (SENAI). Atua desde 2005 nas áreas de Engenharia Biomédica, Instrumentação e Empreendedorismo, com ênfase no desenvolvimento de equipamentos e dispositivos científicos e industriais, bem como softwares de aquisição, controle e análise de dados. Professor e pesquisador no Programa de Pós-Graduação em Engenharia Biomédica da Universidade Brasil desde 2017, mantém forte interface com o setor produtivo por meio de projetos de P&D e captação de recursos junto ao CNPq e à FAPESP.
              </p>
              <a
                href="http://lattes.cnpq.br/7819717440359474"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
              >
                Currículo Lattes
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 text-white rounded-lg font-semibold text-sm hover:bg-primary-800 transition-colors"
            >
              Entre em contato
            </Link>
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold text-sm hover:bg-teal-600 transition-colors"
            >
              Assine a newsletter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
