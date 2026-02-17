import { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Sobre o Portal — Engenharia Biomédica',
  description:
    'Missão, equipe e metodologia editorial do portal engenhariabiomedica.com — a referência sobre Engenharia Biomédica no Brasil.',
};

export default function SobrePage() {
  return (
    <>
      <PageHeader
        overline="O Portal"
        title="Sobre o engenhariabiomedica.com"
        description="A referência que a Engenharia Biomédica no Brasil precisava — em um único endereço."
        breadcrumbs={[{ label: 'Sobre' }]}
      />

      <section className="container-page py-10 lg:py-14">
        <div className="max-w-3xl space-y-8">
          <div>
            <h2 className="text-h2 text-primary-800 mb-3">Missão</h2>
            <p className="text-body text-slate-600 font-serif leading-relaxed">
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
                  <p className="text-body-sm text-slate-500 font-serif">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-h2 text-primary-800 mb-3">Metodologia Editorial</h2>
            <p className="text-body text-slate-600 font-serif leading-relaxed mb-4">
              Todo o conteúdo do portal é baseado em pesquisa primária e fontes verificáveis. Os dados de mercado utilizam informações do CAGED, Portal Salário, ABIMO e Tracxn. Informações regulatórias vêm diretamente das RDCs da ANVISA e resoluções do CONFEA/CREA. Dados acadêmicos são cruzados com o e-MEC, avaliação CAPES e sites institucionais das universidades.
            </p>
            <p className="text-body text-slate-600 font-serif leading-relaxed">
              Os artigos de análise são revisados editorialmente e atualizados semestralmente. Dados salariais e de mercado são verificados a cada atualização do CAGED. O portal não aceita conteúdo patrocinado disfarçado de editorial — toda publicidade é claramente identificada.
            </p>
          </div>

          <div>
            <h2 className="text-h2 text-primary-800 mb-3">Origem</h2>
            <p className="text-body text-slate-600 font-serif leading-relaxed">
              O portal nasceu do Programa de Pós-Graduação em Engenharia Biomédica (PPGEB) da Universidade Brasil, em parceria com pesquisadores da ESALQ/USP. A plataforma foi concebida em fevereiro de 2026 a partir de uma extensa pesquisa documental que mapeou o ecossistema completo da Engenharia Biomédica no Brasil e nos EUA, resultando em cinco documentos de referência que formam a base de conteúdo do portal.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
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
