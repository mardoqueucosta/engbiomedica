/**
 * PPGEB — Programa de Pós-Graduação em Engenharia Biomédica da Universidade Brasil.
 *
 * Fonte única dos dados do programa usados em /ppgeb, /ppgeb/mestrado,
 * /ppgeb/doutorado, /ppgeb/pos-doutorado e /carreira/processo-seletivo.
 * Corrigir aqui corrige o site inteiro.
 *
 * Fontes: apresentação do programa (PPGEB-UB_Apresentacao-do-programa.pptx),
 * regulamento do PPGEB aprovado no CONSU, dados cadastrais da CAPES e as
 * páginas dos cursos em ub.edu.br.
 */

export const PPGEB_EMAIL = 'ppgeb@universidadebrasil.edu.br';
export const PPGEB_INSCRICAO_URL = 'https://inscricoes.ub.edu.br/';
export const UB_EDITAIS_URL = 'https://ub.edu.br/editais/';

export const ppgebNumeros = [
  { number: '4', label: 'Nota CAPES (Quadrienal 2025)' },
  { number: 'Eng. IV', label: 'Área de avaliação CAPES' },
  { number: '13', label: 'Docentes' },
  { number: '10', label: 'Linhas de pesquisa' },
];

export interface LinhaPesquisa {
  nome: string;
  descricao: string;
}

export interface AreaConcentracao {
  slug: string;
  nome: string;
  resumo: string;
  linhas: LinhaPesquisa[];
}

export const areasConcentracao: AreaConcentracao[] = [
  {
    slug: 'dispositivos-optica',
    nome: 'Dispositivos, Espectroscopia Óptica e Sistemas Biomédicos',
    resumo:
      'Técnicas ópticas para diagnóstico, sensores e BioMEMS, modelagem computacional, processamento de sinais e sistemas de dados aplicados à saúde.',
    linhas: [
      {
        nome: 'Espectroscopia óptica aplicada à Engenharia Biomédica e às ciências cosméticas',
        descricao: 'Raman confocal in vivo, permeação cutânea e nanocosméticos.',
      },
      {
        nome: 'Instrumentação biomédica, técnicas e dispositivos',
        descricao: 'Fluorescência, refletância, sensores, BioMEMS e apoio ao diagnóstico.',
      },
      {
        nome: 'Modelagem computacional e análise de sinais biológicos',
        descricao: 'Modelagem de biomoléculas e processamento de sinais elétricos.',
      },
      {
        nome: 'Saúde pública',
        descricao: 'Modelos e sistemas para análise de dados e melhoria de processos.',
      },
    ],
  },
  {
    slug: 'nanociencias-plasmas-ozonio',
    nome: 'Nanociências, Plasmas e Ozônio',
    resumo:
      'Síntese de nanobiomateriais, recobrimentos bactericidas, plasmas frios para esterilização e tratamento de superfícies, ozônio e microbiologia aplicada.',
    linhas: [
      {
        nome: 'Microbiologia',
        descricao: 'Pesquisa básica em microbiologia voltada à Engenharia Biomédica.',
      },
      {
        nome: 'Nanobiomateriais',
        descricao: 'Síntese, caracterização e estudos in vitro e in vivo de novos nanobiomateriais.',
      },
      {
        nome: 'Ozonioterapia',
        descricao: 'Ozônio em processos terapêuticos e de esterilização médico-hospitalar.',
      },
      {
        nome: 'Plasma aplicado à saúde',
        descricao: 'Plasma frio em deposição, corrosão e tratamento de superfícies e tecidos.',
      },
    ],
  },
  {
    slug: 'reabilitacao-terapeutica',
    nome: 'Sistemas de Reabilitação e Procedimentos Terapêuticos',
    resumo:
      'Novos fármacos e dispositivos terapêuticos, lasers e LEDs para tratamento pouco invasivo, terapia fotodinâmica, ozonioterapia, ultrassom terapêutico e avaliação funcional.',
    linhas: [
      {
        nome: 'Novos sistemas e produtos terapêuticos',
        descricao:
          'Fármacos fotoativados, fitoterápicos, ozônio, corantes para terapia fotodinâmica e ultrassom terapêutico.',
      },
      {
        nome: 'Procedimentos terapêuticos com radiação não ionizante',
        descricao:
          'Lasers e LEDs de baixa e média potência e radiação infravermelha para tratamento pouco invasivo.',
      },
    ],
  },
];

export const disciplinasObrigatoriasMestrado = [
  'Metodologia Científica e do Ensino Superior',
  'Métodos Matemáticos para Análise de Dados',
  'Bioestatística',
  'Bioética',
];

export const disciplinasObrigatoriasDoutorado = [
  'Tópicos Avançados em Engenharia Biomédica',
  'Fundamentos de Citologia e Histologia',
  'Princípios de Fisiologia e Eletrofisiologia',
  'Seminários em Engenharia Biomédica',
];

export const disciplinasOptativas = [
  'Engenharia de Tecidos',
  'Bioimpressão 3D Aplicada à Engenharia Biomédica',
  'Instrumentação Biomédica',
  'Aplicações Clínicas e Terapêuticas dos Lasers',
  'Ciência de Dados e Inteligência Artificial',
  'Empreendedorismo',
  'Processamento de Sinais',
  'Escrita Científica',
  'Biomateriais',
  'Modelagem Computacional',
  'Avanços em Lab-on-a-Chip Aplicados à Engenharia Biomédica',
  'Espectroscopia Raman e FTIR: Análise Espectral',
  'Introdução à Biofotônica',
  'Aplicações Clínicas, Protocolos e Bases da Terapia Fotodinâmica',
  'Gestão de Projetos de Pesquisa e Inovação',
  'Fotobiomodulação: Fundamentos Físicos e Aplicações',
  'Introdução a Sensores e Transdutores Biomédicos',
  'Recursos Eletrofísicos Aplicados à Dermatologia',
  'Materiais Poliméricos Aplicados à Engenharia Biomédica',
  'Filmes Finos: Formação e Utilização na Engenharia Biomédica',
  'Ozônio: Teoria e Aplicações',
];

export interface LinkDocumento {
  titulo: string;
  href: string;
  formato: string;
}

/** Documentos comuns aos três cursos. */
export const documentosPrograma: LinkDocumento[] = [
  {
    titulo: 'Regulamento do PPGEB',
    href: 'https://ub.edu.br/wp-content/uploads/regulamento-ppg-engenharia-biomedica-aprovado-consu.pdf',
    formato: 'PDF',
  },
  {
    titulo: 'Planejamento Estratégico 2021-2024',
    href: 'https://ub.edu.br/wp-content/uploads/planejamento-estrategicoppgeb-ub-2021-2024.pdf',
    formato: 'PDF',
  },
  {
    titulo: 'Modelo de Projeto de Pesquisa',
    href: 'https://ub.edu.br/wp-content/uploads/modelo-projeto-de-pesquisa.docx',
    formato: 'DOCX',
  },
  {
    titulo: 'Editais da Universidade Brasil',
    href: UB_EDITAIS_URL,
    formato: 'Página',
  },
];

export interface Curso {
  slug: 'mestrado' | 'doutorado' | 'pos-doutorado';
  href: string;
  nome: string;
  grau: string;
  duracao: string;
  resumo: string;
  ubUrl: string;
  codigoCapes?: string;
  /** Regras do curso, tiradas do regulamento do PPGEB. */
  regras: { titulo: string; texto: string }[];
  disciplinasObrigatorias?: string[];
  documentos: LinkDocumento[];
}

export const cursos: Curso[] = [
  {
    slug: 'mestrado',
    href: '/ppgeb/mestrado',
    nome: 'Mestrado em Engenharia Biomédica',
    grau: 'Mestrado Acadêmico',
    duracao: '24 meses',
    resumo:
      'Forma mestres para pesquisa e desenvolvimento na interface entre engenharia e saúde, com disciplinas de base e uma dissertação orientada em uma das 10 linhas do programa.',
    ubUrl: 'https://ub.edu.br/stricto-sensu-mestrado-engenharia-biomedica/',
    codigoCapes: '33056013015M1',
    regras: [
      {
        titulo: 'Prazo',
        texto: '24 meses, incluindo a apresentação da dissertação. Prazo mínimo de 12 meses para a apresentação.',
      },
      {
        titulo: 'Disciplinas',
        texto:
          'No mínimo 4 disciplinas obrigatórias e 4 optativas, com 4 créditos cada (1 crédito equivale a 15 horas). Publicações podem contar até 25% dos créditos, sem substituir obrigatórias.',
      },
      {
        titulo: 'Qualificação',
        texto: 'Exame de qualificação em até 18 meses a partir da primeira matrícula.',
      },
      {
        titulo: 'Artigo para a defesa',
        texto:
          'Ter submetido ao menos um artigo ligado à dissertação, como primeiro autor e com o orientador como coautor, em periódico dos 4 estratos mais altos do Qualis Engenharias IV.',
      },
      {
        titulo: 'Formação de origem',
        texto:
          'Quem vem das áreas médico-biológicas cursa disciplinas obrigatórias de ciências exatas, e quem vem das exatas cursa as médico-biológicas.',
      },
    ],
    disciplinasObrigatorias: disciplinasObrigatoriasMestrado,
    documentos: [
      {
        titulo: 'Cronograma de Aulas',
        href: 'https://repositorio.ub.edu.br/wp-content/uploads/2025/09/cronograma-2025.2-ppg-mestrado-engenharia-biomedica.pdf',
        formato: 'PDF',
      },
      {
        titulo: 'Modelo de Dissertação',
        href: 'https://repositorio.ub.edu.br/wp-content/uploads/2025/01/modelo-ub.docx',
        formato: 'DOCX',
      },
      {
        titulo: 'Repositório de Dissertações',
        href: 'https://repositorioacademico.universidadebrasil.edu.br/handle/123456789/33',
        formato: 'Repositório',
      },
    ],
  },
  {
    slug: 'doutorado',
    href: '/ppgeb/doutorado',
    nome: 'Doutorado em Engenharia Biomédica',
    grau: 'Doutorado Acadêmico',
    duracao: '48 meses',
    resumo:
      'Forma doutores capazes de liderar pesquisa e inovação em Engenharia Biomédica, com tese e publicação em periódico de alto nível. Admite doutorado direto, sem mestrado prévio.',
    ubUrl: 'https://ub.edu.br/stricto-sensu-doutorado-engenharia-biomedica/',
    codigoCapes: '33056013015D2',
    regras: [
      {
        titulo: 'Prazo',
        texto: '48 meses, incluindo a defesa. Prazo mínimo de 24 meses para a defesa da tese.',
      },
      {
        titulo: 'Disciplinas',
        texto:
          'No mínimo 4 disciplinas obrigatórias e 4 optativas, com 4 créditos cada (1 crédito equivale a 15 horas). Publicações podem contar até 25% dos créditos, sem substituir obrigatórias.',
      },
      {
        titulo: 'Qualificação',
        texto: 'Exame de qualificação em até 36 meses a partir da primeira matrícula.',
      },
      {
        titulo: 'Artigo para a defesa',
        texto:
          'Ter ao menos um artigo ligado à tese aceito para revisão, como primeiro autor e com o orientador como coautor, em periódico dos 4 estratos mais altos do Qualis Engenharias IV.',
      },
      {
        titulo: 'Estágio de docência',
        texto:
          'Obrigatório para bolsistas PROSUP/CAPES, por no mínimo um semestre. Dispensado para quem já fez no mestrado ou é docente do ensino superior.',
      },
      {
        titulo: 'Doutorado direto',
        texto:
          'Ingresso sem mestrado, com prazo de 60 meses (mínimo de 36 para a defesa). Exige um artigo publicado ou aceito nos últimos 5 anos em periódico dos 4 estratos mais altos do Qualis Engenharias IV ou com JCR de 1,0 ou mais.',
      },
    ],
    disciplinasObrigatorias: disciplinasObrigatoriasDoutorado,
    documentos: [
      {
        titulo: 'Cronograma de Aulas',
        href: 'https://repositorio.ub.edu.br/wp-content/uploads/2025/09/cronograma-2025.2-ppg-doutorado-engenharia-biomedica.pdf',
        formato: 'PDF',
      },
      {
        titulo: 'Modelo de Tese',
        href: 'https://repositorio.ub.edu.br/wp-content/uploads/2025/01/modelo-ub.docx',
        formato: 'DOCX',
      },
      {
        titulo: 'Repositório de Teses',
        href: 'https://repositorioacademico.universidadebrasil.edu.br/handle/123456789/914',
        formato: 'Repositório',
      },
    ],
  },
  {
    slug: 'pos-doutorado',
    href: '/ppgeb/pos-doutorado',
    nome: 'Pós-Doutorado em Engenharia Biomédica',
    grau: 'Estágio de Pós-Doutorado',
    duracao: '24 meses',
    resumo:
      'Estágio de pesquisa para doutores, desenvolvido com um docente do programa em uma das três áreas de concentração.',
    ubUrl: 'https://ub.edu.br/pos-doutorado-engenharia-biomedica/',
    regras: [
      {
        titulo: 'Duração',
        texto: '24 meses, conforme a oferta da Universidade Brasil.',
      },
      {
        titulo: 'Ingresso',
        texto:
          'O Colegiado do PPGEB define, a cada processo de seleção, o número de vagas, as regras e os critérios de ingresso, divulgados no edital.',
      },
      {
        titulo: 'Regras',
        texto: 'O estágio segue o regulamento geral da pós-graduação stricto sensu da Universidade Brasil.',
      },
    ],
    documentos: [],
  },
];

export const resultadosQuadrienio = [
  { number: 'R$ 2,4 mi', label: 'Captados em 17 projetos' },
  { number: '30', label: 'Convênios nacionais' },
  { number: '11', label: 'Parcerias internacionais' },
  { number: '190', label: 'Produções técnicas' },
];

export const parceiros = [
  {
    grupo: 'Cosmético e dermocosmético',
    nomes: "Natura, O Boticário, L'Oréal, BASF, Symrise, Chemyunion e Avon",
  },
  {
    grupo: 'Equipamentos e terapias',
    nomes: 'IBRAMED, Biopdi, MMOptics, DMC, Ozone & Life e FISMATEK',
  },
  {
    grupo: 'Internacionais',
    nomes: 'Johnson & Johnson, THOR Photomedicine, Greentech, Croda e Rivers Diagnostic',
  },
  {
    grupo: 'Outros parceiros',
    nomes: 'EMBRAPA, Oxiteno, Suzano, Baumer e Theraskin',
  },
];

export interface Docente {
  nome: string;
  tipo: 'permanente' | 'colaborador';
  foto: string;
  email?: string;
  lattes: string;
  coordenador?: boolean;
  resumo: string;
}

export const docentes: Docente[] = [
  {
    nome: 'Prof. Dr. Mardoqueu M. Costa',
    tipo: 'permanente',
    foto: '/docentes/mardoqueu-costa.gif',
    email: 'Mardoqueu.costa@ub.edu.br',
    lattes: 'http://lattes.cnpq.br/7819717440359474',
    coordenador: true,
    resumo:
      'Pós-doutor em Engenharia de Biossistemas pela ESALQ/USP. Doutor em Engenharia Elétrica (EESC/USP). Atua nas áreas de Instrumentação, Engenharia de Materiais e Empreendedorismo, com foco em dispositivos e equipamentos científicos. Forte interface com a indústria, captação de recursos (CNPq, FAPESP, Embrapii) e transferência de tecnologia. Possui 22 artigos, 3 patentes e participação no desenvolvimento de mais de 26 produtos.',
  },
  {
    nome: 'Profa. Dra. Ana Laura Andrade',
    tipo: 'permanente',
    foto: '/docentes/ana-laura-andrade.gif',
    email: 'ana.andrade@ub.edu.br',
    lattes: 'http://lattes.cnpq.br/6270999048662693',
    resumo:
      'Graduação em Fisioterapia (UNIFAL), Mestrado e Doutorado em Fisioterapia pela UFSCar com doutorado sanduíche na Universidade do Minho (3B\'s Research Group). Pós-doutoranda na USP. Desenvolve projetos de pesquisa em dor e medicina regenerativa com eletroterapia, biomateriais e células-tronco. Docente do Instituto Israelita Albert Einstein e Professora Titular do PPGEB da Universidade Brasil.',
  },
  {
    nome: 'Prof. Dr. Anderson de Oliveira Lobo',
    tipo: 'colaborador',
    foto: '/docentes/anderson-lobo.gif',
    email: 'lobo.aol@gmail.com',
    lattes: 'http://lattes.cnpq.br/8605141883488358',
    resumo:
      'Professor Titular-Livre da UFPI. Produtividade em Pesquisa nível A do CNPq. Membro afiliado da Academia Brasileira de Ciências. Incluído entre os cientistas mais influentes do mundo desde 2021 (Stanford, Engenharia Biomédica). Doutor pelo ITA, pós-doutorado em Bioengenharia na Harvard-MIT. Mais de 195 artigos, 5.600 citações, índice H=41. Coordena projetos FINEP, FAPESP, CNPq, CAPES e Serrapilheira.',
  },
  {
    nome: 'Prof. Dr. Federico Aletti',
    tipo: 'permanente',
    foto: '/docentes/federico-aletti.jpg',
    lattes: 'http://lattes.cnpq.br/6713455294008529',
    resumo:
      'Mestrado (Laurea) em Engenharia Biomédica e Doutorado em Bioengenharia pelo Politecnico di Milano (Itália), onde também fez pós-doutorado. Marie Curie Fellow na University of California San Diego (EUA). Pesquisa modelagem matemática da regulação cardiovascular, choque circulatório em terapia intensiva e abordagens ômicas na busca de biomarcadores. Conselheiro eleito da European Shock Society e membro do corpo editorial da Physiological Measurement. 41 artigos publicados.',
  },
  {
    nome: 'Profa. Dra. Fernanda Marciano',
    tipo: 'colaborador',
    foto: '/docentes/fernanda-marciano.gif',
    email: 'fermarciano@gmail.com',
    lattes: 'http://lattes.cnpq.br/1649098213102710',
    resumo:
      'Professora Titular-Livre da UFPI. Membro afiliada da Academia Brasileira de Ciências (Nordeste). Graduação em Engenharia Biomédica (Univap), Mestrado (INPE), Doutorado (ITA). Produtividade em Pesquisa nível C do CNPq. Experiência em nanobiomateriais e materiais biocompatíveis. Coordenou o PPGCM/UFPI (2020-2023). Embaixadora do Projeto Parent in Science (Nordeste).',
  },
  {
    nome: 'Prof. Dr. Hueliton Wilian Kido',
    tipo: 'permanente',
    foto: '/docentes/hueliton-kido.jpg',
    lattes: 'http://lattes.cnpq.br/2913551944409323',
    resumo:
      'Licenciatura em Ciências Biológicas (UFMS), Mestrado e Doutorado em Biotecnologia pela UFSCar. Pós-doutorado na UNIFESP e na Nanyang Technological University (Cingapura), com bolsa FAPESP, e na UNINOVE. Pesquisa reparação e regeneração óssea e cutânea com fotobiomodulação, biomateriais (Biosilicato®, biovidro, hidroxiapatita, colágeno) e células-tronco mesenquimais. Docente do curso de Medicina da UNINOVE. 35 artigos publicados.',
  },
  {
    nome: 'Prof. Dr. Jorge R. Beingolea Garay',
    tipo: 'permanente',
    foto: '/docentes/jorge-beingolea-garay.jpg',
    lattes: 'http://lattes.cnpq.br/0997252695811042',
    resumo:
      'Graduação em Computação e Informática (Universidad Inca Garcilaso de la Vega, Peru), Mestrado e Doutorado em Engenharia Elétrica pela Escola Politécnica da USP e graduação em Engenharia Biomédica (FAM). Pesquisa tecnologias assistivas, instrumentação biomédica de baixo custo, wearables, eletromiografia, bioimpedância e Internet das Coisas aplicada à saúde. Fundador da iniciativa IEEE Sustainable Cities Latin America. Mais de 15 anos no ensino superior.',
  },
  {
    nome: 'Prof. Dr. José Francisco S. Costa Júnior',
    tipo: 'permanente',
    foto: '/docentes/jose-francisco-costa-junior.gif',
    lattes: 'https://lattes.cnpq.br/0717416627522529',
    resumo:
      'Bacharelado em Física (UESC), Mestrado e Doutorado em Engenharia Biomédica pela UFRJ. Pós-doutorado no Laboratório de Ultrassom da Escola Politécnica da USP. Pesquisa em elastografia ultrassônica, instrumentação biomédica, phantoms ultrassônicos e caracterização de tecidos biológicos. Atuou como professor na Academia da Força Aérea Brasileira. Membro da Sociedade Brasileira de Engenharia Biomédica.',
  },
  {
    nome: 'Profa. Dra. Paula C. G. Antunes',
    tipo: 'permanente',
    foto: '/docentes/paula-antunes.gif',
    lattes: 'https://lattes.cnpq.br/1475048754971129',
    resumo:
      'Graduada em Física pela USP, com mestrado e doutorado em Física Médica pela USP e doutorado sanduíche na Universidade de Valência (Espanha). Trabalhou no projeto do Submarino Nuclear da Marinha do Brasil. Pesquisa em dosimetria, microdosimetria, Método Monte Carlo, braquiterapia e protonterapia. Professora e pesquisadora do Hospital Albert Einstein.',
  },
  {
    nome: 'Profa. Dra. Priscila Favero',
    tipo: 'permanente',
    foto: '/docentes/priscila-favero.gif',
    email: 'priscila.favero@ub.edu.br',
    lattes: 'http://lattes.cnpq.br/0741255176354772',
    resumo:
      'Graduação em Física (UnB), Mestrado em Física Experimental (UnB), Doutorado em Física Teórica (UnB/Universitaet Paderborn). Pós-doutorado na UFABC (FAPESP) e no IEAv/DCTA (FAPESP). Pesquisa propriedades físico-químicas de cosméticos, permeação e interações com a pele. Professora Titular da pós-graduação em Engenharia Biomédica da Universidade Brasil.',
  },
  {
    nome: 'Prof. Dr. Rodrigo Sávio Pessoa',
    tipo: 'colaborador',
    foto: '/docentes/rodrigo-pessoa.gif',
    email: 'rodrigospessoa@gmail.com',
    lattes: 'http://lattes.cnpq.br/3318707277023349',
    resumo:
      'Professor no ITA. Graduação em Física (UNESP), Doutorado em Física de Plasmas (ITA). Produtividade em Pesquisa nível B do CNPq. 164 artigos publicados, 28 capítulos de livros, H=26 (Scopus). Pesquisador Principal em projetos temáticos da FAPESP. Coordena projetos FINEP, CNPq, CAPES e AEB. Mais de 500 revisões para periódicos internacionais de alto impacto.',
  },
  {
    nome: 'Profa. Dra. Sarah Raquel de Annunzio',
    tipo: 'permanente',
    foto: '/docentes/sarah-annunzio.gif',
    lattes: 'https://lattes.cnpq.br/0141808750748205',
    resumo:
      'Graduação em Ciências Biológicas (UNIARA), Mestrado e Doutorado em Biociências e Biotecnologias Aplicadas à Farmácia (UNESP). Pós-doutorado na FOAr/UNESP com bolsa FAPESP vinculada ao CDMF-CEPID. Experiência em Microbiologia, terapia fotodinâmica, biomateriais, biofilmes e ensaios de biocompatibilidade.',
  },
  {
    nome: 'Prof. Dr. Victor Augusto R. Fernandes',
    tipo: 'permanente',
    foto: '/docentes/victor-fernandes.jpg',
    lattes: 'http://lattes.cnpq.br/2125060422353483',
    resumo:
      'Bacharelado em Educação Física (ESEF Jundiaí) e graduação em Ciências Biológicas (UNICID). Mestrado, Doutorado e Pós-doutorado em Ciências da Saúde pela Faculdade de Medicina de Jundiaí. Pesquisa morfologia e estereologia de tecidos, adaptações neurais e musculoesqueléticas ao exercício físico e biomateriais para regeneração óssea. Servidor público na Escola Superior de Educação Física de Jundiaí. 107 artigos publicados.',
  },
];
