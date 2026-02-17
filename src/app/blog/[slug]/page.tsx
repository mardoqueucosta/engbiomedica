import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/ui/PageHeader';
import { Badge } from '@/components/ui/Badge';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

const artigos: Record<
  string,
  {
    titulo: string;
    resumo: string;
    categoria: string;
    categoriaVariant: 'primary' | 'teal' | 'coral' | 'amber';
    data: string;
    leitura: string;
    conteudo: string[];
  }
> = {
  'o-que-e-engenharia-biomedica': {
    titulo: 'O que é Engenharia Biomédica?',
    resumo:
      'Guia completo sobre a profissão que une engenharia e saúde — da formação ao mercado de trabalho.',
    categoria: 'Guia',
    categoriaVariant: 'primary',
    data: '2026-02-10',
    leitura: '8 min',
    conteudo: [
      'A Engenharia Biomédica é a área da engenharia que aplica princípios e técnicas das ciências exatas — como matemática, física, computação e eletrônica — à solução de problemas em biologia e medicina. No Brasil, a profissão é regulamentada pelo sistema CONFEA/CREA desde 2008, com a Resolução 1.010 definindo as atribuições profissionais e a Resolução 1.103/2018 detalhando as competências específicas.',
      'O campo é amplo e multidisciplinar, abrangendo desde o projeto de próteses e implantes até o desenvolvimento de softwares para diagnóstico por imagem, passando pela gestão de equipamentos em hospitais (engenharia clínica) e pela criação de dispositivos vestíveis para monitoramento de saúde.',
      'No Brasil, existem atualmente mais de 28 cursos de graduação credenciados pelo MEC, com duração média de 5 anos. O mercado de dispositivos médicos movimentou R$ 26,1 bilhões em 2024 (fonte: ABIMO), e o país conta com aproximadamente 85 mil empregos diretos na área, segundo dados do CAGED.',
      'A carreira oferece diversas possibilidades de atuação: engenharia clínica hospitalar, indústria de dispositivos médicos, pesquisa acadêmica, startups de healthtech, consultoria regulatória (ANVISA) e desenvolvimento de software médico (SaMD). Os salários médios variam entre R$ 5.800 (nível júnior) e R$ 15.600 (nível sênior), de acordo com o Portal Salário.',
    ],
  },
  'ia-saude-brasil-2025': {
    titulo: 'IA em Saúde no Brasil: o cenário em 2025',
    resumo:
      '17% dos médicos já usam IA generativa. Como a inteligência artificial está transformando o diagnóstico e o cuidado no país.',
    categoria: 'Tendência',
    categoriaVariant: 'teal',
    data: '2026-02-05',
    leitura: '6 min',
    conteudo: [
      'A inteligência artificial está rapidamente se integrando ao ecossistema de saúde brasileiro. Segundo levantamento recente, 17% dos médicos brasileiros já utilizam ferramentas de IA generativa em alguma etapa do atendimento clínico, seja na análise de exames de imagem, na triagem de pacientes ou na consulta a bases de evidências científicas.',
      'A ANVISA tem acompanhado essa evolução regulatória. A RDC 657/2022 estabeleceu o marco regulatório para Software as a Medical Device (SaMD) no Brasil, definindo critérios de classificação de risco e requisitos de registro para softwares com finalidade diagnóstica ou terapêutica. Até o final de 2024, mais de 1.250 dispositivos com componente de IA haviam recebido algum tipo de autorização da FDA nos EUA — referência que a ANVISA utiliza para análise comparativa.',
      'No ecossistema de startups, o Brasil concentra 64,8% das healthtechs da América Latina, com 1.919 empresas mapeadas. Muitas dessas startups utilizam IA como tecnologia central: desde plataformas de telerradiologia com análise automatizada até sistemas de predição de internação em UTIs.',
      'Para o engenheiro biomédico, a IA representa tanto uma oportunidade de especialização quanto uma transformação nas competências exigidas pelo mercado. Programas de pós-graduação como os da USP, UNICAMP e UFPE já incluem disciplinas de machine learning aplicado à saúde em suas grades curriculares.',
    ],
  },
  'diferenca-engenheiro-biomedico-biomedico': {
    titulo: 'Engenheiro Biomédico × Biomédico: qual a diferença?',
    resumo:
      'São profissões distintas regulamentadas por conselhos diferentes. Entenda as atribuições, a formação e o mercado de cada uma.',
    categoria: 'Carreira',
    categoriaVariant: 'coral',
    data: '2026-01-28',
    leitura: '5 min',
    conteudo: [
      'Uma das dúvidas mais frequentes entre vestibulandos é a diferença entre Engenharia Biomédica e Biomedicina. Apesar do nome semelhante, são profissões com formações, atribuições e conselhos reguladores completamente distintos.',
      'O Engenheiro Biomédico é formado em um curso de engenharia (5 anos), registrado no CREA e habilitado para projetar, desenvolver e gerenciar equipamentos e sistemas tecnológicos para saúde. Sua atuação inclui engenharia clínica, desenvolvimento de dispositivos médicos, softwares de diagnóstico e consultoria regulatória.',
      'O Biomédico, por sua vez, é formado em um curso de ciências biológicas aplicadas (4 anos), registrado no CRBM (Conselho Regional de Biomedicina) e habilitado para realizar análises clínicas, pesquisa laboratorial, diagnóstico por imagem e procedimentos estéticos, dependendo da habilitação escolhida.',
      'Em termos de mercado, o engenheiro biomédico encontra oportunidades na indústria de dispositivos médicos, hospitais (engenharia clínica), startups de healthtech e consultorias regulatórias. O biomédico atua predominantemente em laboratórios de análises clínicas, clínicas de estética, bancos de sangue e centros de pesquisa.',
    ],
  },
  'como-registrar-crea': {
    titulo: 'Como obter registro no CREA como Engenheiro Biomédico',
    resumo:
      'Passo a passo para registro profissional no sistema CONFEA/CREA após a Resolução 1.103/2018.',
    categoria: 'Guia Prático',
    categoriaVariant: 'amber',
    data: '2026-01-20',
    leitura: '4 min',
    conteudo: [
      'O registro no CREA é obrigatório para o exercício profissional do engenheiro biomédico no Brasil. Desde a Resolução 1.010/2005 e sua regulamentação específica pela Resolução 1.103/2018, o processo de registro é padronizado e pode ser realizado inteiramente online em muitos estados.',
      'O primeiro passo é verificar se o seu curso de graduação é reconhecido pelo MEC e possui as atribuições de engenharia definidas pelo CONFEA. Atualmente, mais de 28 cursos de Engenharia Biomédica no Brasil atendem a esse requisito. A grade curricular do curso determina quais atribuições profissionais serão concedidas no registro.',
      'Para dar entrada no registro, é necessário acessar o site do CREA do estado onde você pretende atuar, reunir a documentação (diploma registrado, histórico escolar, CPF, RG e comprovante de residência) e pagar a taxa de registro. O valor varia por estado, mas gira em torno de R$ 300 a R$ 600 para a inscrição inicial.',
      'Após o registro, o profissional recebe a carteira do CREA e pode emitir ART (Anotação de Responsabilidade Técnica) para todos os serviços prestados. É importante manter a anuidade em dia para garantir a regularidade do registro e o direito de exercício da profissão.',
    ],
  },
  'healthtechs-latam-2024': {
    titulo: 'Healthtechs na América Latina: US$ 254 mi investidos em 2024',
    resumo:
      'O Brasil concentra 64,8% das startups de saúde da região. Análise das maiores rodadas e tendências de investimento.',
    categoria: 'Mercado',
    categoriaVariant: 'teal',
    data: '2026-01-15',
    leitura: '7 min',
    conteudo: [
      'O ecossistema de healthtechs na América Latina movimentou US$ 254 milhões em investimentos de venture capital durante 2024, com o Brasil respondendo pela maior fatia: 64,8% das startups de saúde mapeadas na região, totalizando 1.919 empresas ativas.',
      'As maiores rodadas de investimento no Brasil foram concentradas em telemedicina, gestão hospitalar e diagnóstico por IA. São Paulo lidera como principal hub, seguido por Belo Horizonte, Campinas e Florianópolis. Aceleradoras como Eretz.bio (Hospital Albert Einstein), Distrito e Wayra têm papel central na maturação do ecossistema.',
      'Entre as tendências mais relevantes para 2025-2026 estão o crescimento de SaMD (Software as a Medical Device), dispositivos vestíveis para monitoramento contínuo, plataformas de dados clínicos interoperáveis e soluções de IA para triagem e diagnóstico remoto.',
      'Para o engenheiro biomédico, o ecossistema de healthtechs representa uma das fronteiras mais dinâmicas de atuação profissional. Além de posições técnicas em desenvolvimento de produto e regulatory affairs, há demanda crescente por profissionais que transitem entre a engenharia, a clínica e o negócio — perfil naturalmente alinhado à formação multidisciplinar da Engenharia Biomédica.',
    ],
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function generateStaticParams() {
  return Object.keys(artigos).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const artigo = artigos[params.slug];
  if (!artigo) return { title: 'Artigo não encontrado' };
  return {
    title: `${artigo.titulo} — Engenharia Biomédica`,
    description: artigo.resumo,
  };
}

export default function ArtigoPage({ params }: { params: { slug: string } }) {
  const artigo = artigos[params.slug];
  if (!artigo) notFound();

  return (
    <>
      <PageHeader
        overline={artigo.categoria}
        title={artigo.titulo}
        description={artigo.resumo}
        centered
        breadcrumbs={[
          { label: 'Blog', href: '/blog' },
          { label: artigo.titulo },
        ]}
      />

      <article className="container-page py-10 lg:py-14">
        <div className="max-w-3xl mx-auto">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-slate-100">
            <Badge variant={artigo.categoriaVariant}>{artigo.categoria}</Badge>
            <div className="flex items-center gap-1.5 text-caption text-slate-400">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(artigo.data)}
            </div>
            <div className="flex items-center gap-1.5 text-caption text-slate-400">
              <Clock className="w-3.5 h-3.5" />
              {artigo.leitura} de leitura
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg text-justify">
            {artigo.conteudo.map((paragrafo, i) => (
              <p key={i}>{paragrafo}</p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 p-6 rounded-xl bg-teal-50 border border-teal-200">
            <h3 className="text-h3 text-teal-800 mb-2">Gostou deste artigo?</h3>
            <p className="text-body-sm text-teal-700 font-serif mb-4">
              Receba conteúdos como este diretamente no seu e-mail.
            </p>
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500 text-white rounded-lg font-semibold text-sm hover:bg-teal-600 transition-colors"
            >
              Assinar newsletter
            </Link>
          </div>

          {/* Back link */}
          <div className="mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Ver todos os artigos
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
