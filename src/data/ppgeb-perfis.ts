/**
 * Páginas individuais dos docentes do PPGEB, no formato de página de laboratório de pesquisa.
 * Rota: /ppgeb/docentes/[slug]. Para criar a página de outro docente, basta acrescentar um
 * perfil aqui e o mesmo `slug` no docente em src/data/ppgeb.ts (o cartão do corpo docente
 * passa a mostrar o link sozinho).
 *
 * Fonte do perfil modelo: Currículo Lattes (atualizado em 04/01/2026), apresentação do
 * programa e alocação de docentes e laboratórios de 2026 (Recredenciamento-UB).
 */

export interface Figura {
  src: string;
  alt: string;
  legenda: string;
  largura: number;
  altura: number;
}

export interface PerfilDocente {
  slug: string;
  /** Nome do docente exatamente como em `docentes` (src/data/ppgeb.ts). */
  nomeDocente: string;
  nomeCompleto: string;
  laboratorio: { codigo: string; nome: string; areaConcentracao: string };
  chamada: string;
  apresentacao: string[];
  numeros: { valor: string; legenda: string }[];
  /** `imagem`: foto ilustrativa da linha (public/ppgeb/laboratorios/<slug>/). */
  linhas: { titulo: string; itens: string[]; imagem?: Figura }[];
  /** Esquemas que explicam o trabalho do laboratório, por seção da página. */
  esquemas?: { sobre?: Figura; projetos?: Figura };
  projetos: {
    periodo: string;
    titulo: string;
    descricao: string;
    papel: 'Coordenador' | 'Integrante';
    financiamento?: string;
    emAndamento: boolean;
  }[];
  patentes: { ano: string; titulo: string; tipo: string; registro: string }[];
  softwares: { ano: string; titulo: string; registro?: string }[];
  publicacoes: { ano: string; titulo: string; periodico: string; citacoes?: number }[];
  orientacoes: {
    andamento: { nome: string; nivel: 'Mestrado' | 'Doutorado'; titulo: string; inicio: string }[];
    concluidas: {
      nome: string;
      nivel: 'Mestrado' | 'Doutorado';
      titulo: string;
      ano: string;
      papel: 'Orientador' | 'Coorientador';
    }[];
  };
  formacao: { periodo: string; titulo: string; instituicao: string }[];
  atuacao: { periodo: string; instituicao: string; descricao: string }[];
}

export const perfisDocentes: PerfilDocente[] = [
  {
    slug: 'mardoqueu-martins-costa',
    nomeDocente: 'Prof. Dr. Mardoqueu M. Costa',
    nomeCompleto: 'Mardoqueu Martins da Costa',
    laboratorio: {
      codigo: 'L2',
      nome: 'Laboratório de Tecnologias e Caracterização de Materiais',
      areaConcentracao: 'Nanociências, Plasmas e Ozônio · Dispositivos, Espectroscopia Óptica e Sistemas Biomédicos',
    },
    chamada:
      'Instrumentação biomédica e desenvolvimento de dispositivos e equipamentos científicos para saúde, engenharia e agricultura, do protótipo à patente e ao produto.',
    apresentacao: [
      'O laboratório desenvolve equipamentos, instrumentos e softwares científicos e caracteriza as propriedades mecânicas, físicas e térmicas de materiais usados em dispositivos médicos, implantes e próteses. O trabalho vai da concepção e prototipagem à validação, ao registro de propriedade intelectual e à transferência de tecnologia para a indústria.',
      'Desde 2011 o grupo trabalha em cooperação com a BIOPDI, fabricante nacional de máquinas de ensaio, o que permite que dissertações e teses resultem em equipamentos, softwares e patentes usados fora da universidade. Os projetos têm apoio de CNPq, FAPESP e Embrapii.',
    ],
    numeros: [
      { valor: '22', legenda: 'Artigos em periódicos' },
      { valor: '3', legenda: 'Patentes' },
      { valor: '10', legenda: 'Softwares' },
      { valor: '26+', legenda: 'Produtos desenvolvidos' },
      { valor: '11', legenda: 'Mestrados e doutorados concluídos' },
    ],
    linhas: [
      {
        titulo: 'Instrumentação e dispositivos',
        imagem: { src: '/ppgeb/laboratorios/mardoqueu-martins-costa/instrumentacao.webp', alt: 'Bancada de instrumentação biomédica com protótipo de biossensor aberto, eletrodos, osciloscópio e multímetro', legenda: 'Imagem ilustrativa', largura: 1200, altura: 800 },
        itens: [
          'Equipamentos e instrumentos científicos para as áreas médica, odontológica e agrícola.',
          'Biossensores para diagnóstico não invasivo.',
          'Softwares de aquisição, controle e análise de dados.',
          'Interface com a indústria por projetos de PDI e transferência de tecnologia.',
        ],
      },
      {
        titulo: 'Diagnóstico óptico',
        imagem: { src: '/ppgeb/laboratorios/mardoqueu-martins-costa/diagnostico-optico.webp', alt: 'Caneta de LED azul-violeta iluminando um modelo de arcada dentária com fluorescência dos dentes e da placa bacteriana', legenda: 'Imagem ilustrativa', largura: 1200, altura: 800 },
        itens: [
          'Imagens de fluorescência para uso médico e odontológico.',
          'Diagnóstico óptico e terapia fotodinâmica.',
          'Sistemas de irradiação para uso clínico e laboratorial.',
        ],
      },
      {
        titulo: 'Materiais e agricultura',
        imagem: { src: '/ppgeb/laboratorios/mardoqueu-martins-costa/ensaios-materiais.webp', alt: 'Máquina universal de ensaios fazendo ensaio de tração em corpo de prova polimérico, com vídeo-extensômetro e curva tensão-deformação no notebook', legenda: 'Imagem ilustrativa', largura: 1200, altura: 800 },
        itens: [
          'Ensaios mecânicos de materiais: máquinas universais de ensaio e vídeo-extensometria.',
          'Ensaio físico combinado a ensaio virtual (simulação numérica) para materiais biomédicos.',
          'Materiais biomédicos e caracterização de polímeros.',
          'Agricultura de precisão e sistemas automatizados para cultivo protegido, com sensores e IA.',
        ],
      },
    ],
    esquemas: {
      sobre: { src: '/ppgeb/laboratorios/mardoqueu-martins-costa/esquema-prototipo-produto.webp', alt: 'Esquema do fluxo de trabalho do laboratório: concepção, protótipo, validação, patente e produto', legenda: 'Do laboratório à indústria: concepção, protótipo, validação, patente e produto', largura: 1200, altura: 344 },
      projetos: { src: '/ppgeb/laboratorios/mardoqueu-martins-costa/esquema-ensaio-virtual.webp', alt: 'Esquema comparando o ensaio físico de um corpo de prova na máquina de ensaio com o ensaio virtual por elementos finitos', legenda: 'Ensaio físico e ensaio virtual: a máquina mede o corpo de prova e a simulação por elementos finitos prevê o mesmo ensaio, para comparar e validar (esquema ilustrativo)', largura: 1200, altura: 800 },
    },
    projetos: [
      {
        periodo: '2023 – atual',
        titulo: 'Agricultura de precisão: inovações no desenvolvimento de sistemas para cultivo protegido',
        descricao:
          'Sistemas automatizados de monitoramento e controle de variáveis climáticas, hídricas e nutricionais, com sensores, inteligência artificial e análise de dados para cultivo protegido.',
        papel: 'Coordenador',
        emAndamento: true,
      },
      {
        periodo: '2019 – atual',
        titulo:
          'Equipamento que combina ensaio físico e ensaio virtual para a determinação das propriedades mecânicas de materiais biomédicos',
        descricao:
          'Máquina de ensaio axial e de torção integrada a simulação numérica, para avaliar implantes, próteses, órteses e dispositivos antes e depois da fabricação.',
        papel: 'Coordenador',
        financiamento: 'FAPESP · cooperação BIOPDI',
        emAndamento: true,
      },
      {
        periodo: '2017 – atual',
        titulo: 'Desenvolvimento de técnicas e dispositivos aplicados à Engenharia Biomédica',
        descricao: 'Novas técnicas e equipamentos para tratamento de doenças e lesões, com alunos de mestrado e doutorado.',
        papel: 'Coordenador',
        financiamento: 'Cooperação BIOPDI',
        emAndamento: true,
      },
      {
        periodo: '2020 – 2024',
        titulo: 'Equipamento para fabricação de máscaras de TNT',
        descricao: 'Desenvolvimento e validação de um equipamento para produção de máscaras de TNT no combate à COVID-19.',
        papel: 'Coordenador',
        financiamento: 'Cooperação BIOPDI',
        emAndamento: false,
      },
      {
        periodo: '2015 – 2020',
        titulo: 'Sistema de medida de transmitância em películas de vidros automotivos (PIPE Fases 1 e 2)',
        descricao: 'Equipamento para aferir a transmitância de películas automotivas, como apoio à fiscalização e ao controle de qualidade.',
        papel: 'Integrante',
        financiamento: 'FAPESP PIPE (16/08097-1)',
        emAndamento: false,
      },
      {
        periodo: '2012 – 2013',
        titulo: 'Compósito odontológico com partículas fluorescentes',
        descricao: 'Resina composta com fluorescência semelhante à do dente natural, a partir de sílica e hidroxiapatita.',
        papel: 'Integrante',
        financiamento: 'FAPESP',
        emAndamento: false,
      },
      {
        periodo: '2012',
        titulo: 'Imagens de fluorescência e infravermelho para determinar a profundidade de cáries',
        descricao: 'Estudo de viabilidade de imagens ópticas em tempo real como alternativa à radiografia para avaliar lesões de cárie.',
        papel: 'Coordenador',
        financiamento: 'FAPESP',
        emAndamento: false,
      },
      {
        periodo: '2011 – 2013',
        titulo: 'Sistema de visualização de fungos e bactérias para a indústria de cosméticos',
        descricao: 'Equipamento para visualizar microrganismos na pele, com aplicação em diagnóstico e no desenvolvimento de cosméticos.',
        papel: 'Integrante',
        financiamento: 'CNPq',
        emAndamento: false,
      },
    ],
    patentes: [
      {
        ano: '2023',
        titulo: 'Sistema de vídeo extensômetro universal para simulação, previsão e indicação das propriedades mecânicas dos materiais',
        tipo: 'Modelo de Utilidade',
        registro: 'BR202023016952',
      },
      {
        ano: '2023',
        titulo: 'Aparelho de estimulação elétrica muscular para cirurgia de anomalia anorretal',
        tipo: 'Privilégio de Inovação',
        registro: 'BR10202302434',
      },
      {
        ano: '2010',
        titulo: 'Dispositivo para diagnóstico óptico e tratamento fotônico do câncer de pele',
        tipo: 'Modelo de Utilidade',
        registro: 'MU90006097',
      },
    ],
    softwares: [
      { ano: '2025', titulo: 'BIOLAB · Software para ensaio de materiais', registro: 'BR512025005014-3' },
      {
        ano: '2023',
        titulo: 'Sistema de vídeo extensômetro universal para simulação, previsão e indicação das propriedades mecânicas',
        registro: '512023002519-4',
      },
      { ano: '2022', titulo: 'Aplicativo para análise e simulação de ensaio de tração', registro: '512022003148-5' },
      { ano: '2017', titulo: 'Tô Vacinado · aplicativo de gestão de vacinas para adultos', registro: 'BR512018000380-0' },
      { ano: '2021', titulo: 'Software de máquina universal de ensaios' },
      { ano: '2021', titulo: 'Software para ensaios dinâmicos (máquina universal de ensaio dinâmica)' },
      { ano: '2019', titulo: 'Software para prensas elétricas e hidráulicas' },
      { ano: '2019', titulo: 'Software para ensaio triaxial de solos' },
      { ano: '2017', titulo: 'Software para ensaios mecânicos de torção' },
      { ano: '2015', titulo: 'Software para sistema de fluorescência' },
    ],
    publicacoes: [
      { ano: '2024', titulo: 'Comparison of the acyclovir release carried in chitosan-based microstructured systems', periodico: 'Polymer Bulletin', citacoes: 1 },
      { ano: '2023', titulo: 'Chitosan and chitosan/turmeric-based membranes for wound healing: production, characterization and application', periodico: 'International Journal of Biological Macromolecules' },
      { ano: '2022', titulo: 'Effect of resin cement at different thicknesses on the fatigue shear bond strength to leucite ceramic', periodico: 'European Journal of Dentistry' },
      { ano: '2020', titulo: 'Evaluation of medication errors in electronic medical prescriptions and proposal for correction', periodico: 'Research on Biomedical Engineering' },
      { ano: '2017', titulo: 'Susceptibility of Enterococcus faecalis and Propionibacterium acnes to antimicrobial photodynamic therapy', periodico: 'Journal of Photochemistry and Photobiology B: Biology', citacoes: 51 },
      { ano: '2014', titulo: 'Monitoring scaling and dental calculus removal with an optical fluorescence system', periodico: 'Laser Physics', citacoes: 4 },
      { ano: '2013', titulo: 'Fluorescence spectroscopy in renal ischemia and reperfusion: noninvasive evaluation of organ viability', periodico: 'Transplantation Proceedings', citacoes: 4 },
      { ano: '2012', titulo: 'Photodiagnosis and treatment of condyloma acuminatum using 5-aminolevulinic acid and homemade devices', periodico: 'Photodiagnosis and Photodynamic Therapy', citacoes: 36 },
      { ano: '2009', titulo: 'Histopathology and laser autofluorescence of ischemic kidneys of rats', periodico: 'Lasers in Medical Science', citacoes: 12 },
      { ano: '2008', titulo: 'Selective ablation of dental enamel and dentin using femtosecond laser pulses', periodico: 'Laser Physics Letters', citacoes: 72 },
    ],
    orientacoes: {
      andamento: [
        {
          nome: 'André Martins',
          nivel: 'Mestrado',
          titulo: 'Arquitetura de plataforma IoT para gestão de biossistemas urbanos indoor: validação funcional visando a qualidade e o acesso às hortaliças frescas',
          inicio: '2025',
        },
        {
          nome: 'Rafael Guerra de Aquino',
          nivel: 'Doutorado',
          titulo: 'Tecnologias digitais como facilitadoras do uso de metodologias ativas no ensino médico',
          inicio: '2022',
        },
        {
          nome: 'Gisele Simas dos Santos',
          nivel: 'Doutorado',
          titulo: 'Desenvolvimento de equipamento para confecção de máscaras cirúrgicas de TNT',
          inicio: '2020',
        },
      ],
      concluidas: [
        { nome: 'Leidiana Viana Beserra', nivel: 'Mestrado', titulo: 'Avaliação dos testes de resistência em luvas de látex utilizadas em procedimentos odontológicos', ano: '2024', papel: 'Orientador' },
        { nome: 'Ivo Lima Viana', nivel: 'Doutorado', titulo: 'Protótipo de equipamento de estimulação elétrica muscular para cirurgia da malformação anorretal de uso pediátrico', ano: '2023', papel: 'Orientador' },
        { nome: 'Antônio Carlos de Carvalho', nivel: 'Doutorado', titulo: 'Sistema de vídeo extensômetro universal para simulação, previsão e indicação das propriedades mecânicas dos materiais', ano: '2023', papel: 'Orientador' },
        { nome: 'Bruno Pinheiro Falcão', nivel: 'Doutorado', titulo: 'Modelo de treinamento para cirurgia minimamente invasiva torácica neonatal', ano: '2022', papel: 'Orientador' },
        { nome: 'João Roberto Broggio', nivel: 'Doutorado', titulo: 'Software para análise e simulação de ensaio de tração aplicado na Engenharia Biomédica', ano: '2022', papel: 'Orientador' },
        { nome: 'Samuel Guerra Torres', nivel: 'Doutorado', titulo: 'Biossensor portátil para determinação do limiar de concentração de ácido lático no suor de atletas', ano: '2021', papel: 'Coorientador' },
        { nome: 'Francisco do Nascimento Silva Filho', nivel: 'Mestrado', titulo: 'Manta de LEDs em formato de fita ajustável para terapia de fotobiomodulação', ano: '2020', papel: 'Orientador' },
        { nome: 'José Vigno Moura Sousa', nivel: 'Doutorado', titulo: 'Modelos computacionais de análise de dados biomédicos em plataformas de dispositivos móveis', ano: '2020', papel: 'Coorientador' },
        { nome: 'Roseane Mara Cardoso Lima Verde', nivel: 'Doutorado', titulo: 'Características epidemiológicas e moleculares da infecção pelo HIV em gestantes no Estado do Piauí', ano: '2020', papel: 'Coorientador' },
        { nome: 'Michelle Diana Leal Pinheiro Matos', nivel: 'Mestrado', titulo: 'Ações de saúde bucal em pacientes adultos internados em UTIs de um hospital público de Teresina (PI)', ano: '2019', papel: 'Coorientador' },
        { nome: 'Selma Bermejo Menechelli Riva', nivel: 'Mestrado', titulo: 'Avaliação dos erros de medicação de prontuário eletrônico de um hospital brasileiro', ano: '2017', papel: 'Coorientador' },
      ],
    },
    formacao: [
      { periodo: '2023 – 2025', titulo: 'Pós-Doutorado em Engenharia de Biossistemas', instituicao: 'ESALQ/USP' },
      { periodo: '2010 – 2015', titulo: 'Doutorado em Engenharia Elétrica', instituicao: 'Escola de Engenharia de São Carlos, EESC/USP' },
      { periodo: '2008 – 2010', titulo: 'Mestrado em Engenharia Elétrica', instituicao: 'Escola de Engenharia de São Carlos, EESC/USP' },
      { periodo: '2004 – 2008', titulo: 'Graduação em Ciências Exatas (Física)', instituicao: 'Instituto de Física de São Carlos, IFSC/USP' },
      { periodo: '2004 – 2006', titulo: 'Técnico em Mecatrônica', instituicao: 'SENAI São Carlos' },
    ],
    atuacao: [
      { periodo: '2017 – atual', instituicao: 'Universidade Brasil', descricao: 'Professor e pesquisador do PPGEB; coordenador do programa desde 2026.' },
      { periodo: '2011 – atual', instituicao: 'BIOPDI', descricao: 'Pesquisador em máquinas de ensaio, instrumentação e softwares científicos.' },
      { periodo: '2018 – atual', instituicao: 'InovaCriar', descricao: 'Coordenador do centro de negócios: incubadora, coworking e apoio a projetos FAPESP PIPE, CNPq, FINEP e BNDES.' },
      { periodo: '2023 – 2025', instituicao: 'ESALQ/USP', descricao: 'Pós-doutorado em Engenharia de Biossistemas, com bolsa de pós-doutorado empresarial do CNPq.' },
    ],
  },
];

export function getPerfil(slug: string): PerfilDocente | undefined {
  return perfisDocentes.find((p) => p.slug === slug);
}

/** Slug da página do docente, se ele já tiver uma (usado no cartão do corpo docente). */
export function slugDoDocente(nome: string): string | undefined {
  return perfisDocentes.find((p) => p.nomeDocente === nome)?.slug;
}
