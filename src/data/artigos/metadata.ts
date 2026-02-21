/**
 * Metadados leves dos artigos — SEM conteúdo HTML.
 * Usado por: /artigos (lista), sitemap.ts, navigation.
 * Isso evita carregar ~400 KB de HTML no bundle de páginas que não precisam do conteúdo.
 */

export interface ArtigoImagem {
  src: string;
  alt: string;
  caption: string;
}

export interface ArtigoMeta {
  slug: string;
  titulo: string;
  resumo: string;
  categoria: string;
  categoriaVariant: 'primary' | 'teal' | 'coral' | 'amber';
  data: string;
  dataModificacao?: string;
  leitura: string;
  imagens?: ArtigoImagem[];
}

export const artigosMeta: ArtigoMeta[] = [
  {
    slug: 'guia-engenharia-biomedica',
    titulo: 'Engenharia Biomédica: Guia Definitivo sobre a Profissão, Curso, Salário e Mercado de Trabalho [2026]',
    resumo: 'O guia mais completo do Brasil sobre Engenharia Biomédica. Tudo sobre curso, salários, mercado de trabalho, empresas, regulamentação e futuro da profissão.',
    categoria: 'Guia Completo',
    categoriaVariant: 'primary',
    data: '2026-02-17',
    leitura: '35 min',
  },
  {
    slug: 'historia-engenharia-biomedica-brasil',
    titulo: 'História da Engenharia Biomédica no Brasil: Da COPPE à Revolução das Healthtechs',
    resumo: 'Da criação do primeiro programa de pós-graduação na COPPE/UFRJ em 1971 até o ecossistema de 1.900+ healthtechs — a história completa da Engenharia Biomédica no Brasil.',
    categoria: 'História',
    categoriaVariant: 'teal',
    data: '2026-02-17',
    leitura: '16 min',
  },
  {
    slug: 'o-que-faz-engenheiro-biomedico',
    titulo: 'O que Faz um Engenheiro Biomédico: Um Dia na Vida de 5 Profissionais',
    resumo: 'Descubra o dia a dia real de 5 perfis da Engenharia Biomédica: engenheiro clínico, de P&D, regulatório, de software médico e empreendedor healthtech.',
    categoria: 'Profissão',
    categoriaVariant: 'coral',
    data: '2026-02-17',
    leitura: '14 min',
  },
  {
    slug: 'areas-atuacao-engenharia-biomedica',
    titulo: 'Áreas de Atuação da Engenharia Biomédica: 8 Carreiras com Salários e Perspectivas',
    resumo: 'Da engenharia clínica à inteligência artificial em saúde, conheça as 8 principais áreas de atuação do engenheiro biomédico no Brasil.',
    categoria: 'Profissão',
    categoriaVariant: 'coral',
    data: '2026-02-17',
    leitura: '15 min',
  },
  {
    slug: 'diferenca-engenharia-biomedica-biomedicina',
    titulo: 'Engenharia Biomédica vs Biomedicina: Diferenças, Salários e Qual Escolher',
    resumo: 'Entenda as diferenças entre Engenharia Biomédica e Biomedicina: grade curricular, atuação profissional, salários e qual curso escolher.',
    categoria: 'Formação',
    categoriaVariant: 'primary',
    data: '2026-02-17',
    leitura: '12 min',
  },
  {
    slug: 'curso-engenharia-biomedica-o-que-esperar',
    titulo: 'Curso de Engenharia Biomédica: O que Esperar dos 5 Anos de Graduação',
    resumo: 'Do ciclo básico ao TCC: tudo sobre o curso de Engenharia Biomédica — disciplinas, laboratórios, estágios, TCC e o que esperar de cada ano.',
    categoria: 'Formação',
    categoriaVariant: 'primary',
    data: '2026-02-17',
    leitura: '14 min',
  },
  {
    slug: 'grade-curricular-engenharia-biomedica',
    titulo: 'Grade Curricular de Engenharia Biomédica: Disciplinas, Ênfases e Comparativo entre Universidades',
    resumo: 'Análise detalhada da grade curricular de Engenharia Biomédica: disciplinas por semestre, ênfases (clínica, tecidos, IA) e comparativo entre as principais universidades.',
    categoria: 'Formação',
    categoriaVariant: 'primary',
    data: '2026-02-17',
    leitura: '18 min',
  },
  {
    slug: 'faculdades-engenharia-biomedica-brasil',
    titulo: 'Faculdades de Engenharia Biomédica no Brasil: Ranking Completo com Notas MEC e Mensalidades',
    resumo: 'Lista completa e atualizada das 28 faculdades de Engenharia Biomédica no Brasil, com conceito MEC, tipo (pública/privada), localização e mensalidades.',
    categoria: 'Formação',
    categoriaVariant: 'primary',
    data: '2026-02-17',
    leitura: '16 min',
  },
  {
    slug: 'nota-corte-engenharia-biomedica-sisu',
    titulo: 'Nota de Corte Engenharia Biomédica SISU 2025: Todas as Universidades',
    resumo: 'Notas de corte atualizadas do SISU 2025 para Engenharia Biomédica em todas as universidades públicas — ampla concorrência e cotas.',
    categoria: 'Formação',
    categoriaVariant: 'primary',
    data: '2026-02-17',
    leitura: '10 min',
  },
  {
    slug: 'pos-graduacao-engenharia-biomedica',
    titulo: 'Pós-Graduação em Engenharia Biomédica: Mestrado, Doutorado e Programas no Brasil',
    resumo: 'Guia completo dos 16 programas de pós-graduação em Engenharia Biomédica no Brasil: conceitos CAPES, linhas de pesquisa e como se candidatar.',
    categoria: 'Formação',
    categoriaVariant: 'primary',
    data: '2026-02-17',
    leitura: '15 min',
  },
  {
    slug: 'salario-engenheiro-biomedico',
    titulo: 'Salário do Engenheiro Biomédico em 2025: Dados do CAGED por Estado, Experiência e Setor',
    resumo: 'Quanto ganha um engenheiro biomédico no Brasil? Dados atualizados do CAGED por experiência, estado e setor. Média salarial de R$ 8.658.',
    categoria: 'Mercado',
    categoriaVariant: 'teal',
    data: '2026-02-17',
    leitura: '14 min',
  },
  {
    slug: 'mercado-trabalho-engenharia-biomedica',
    titulo: 'Mercado de Trabalho em Engenharia Biomédica: Panorama Completo para 2025–2030',
    resumo: 'Análise completa do mercado de trabalho para engenheiros biomédicos no Brasil: setores que mais contratam, tendências e projeções.',
    categoria: 'Mercado',
    categoriaVariant: 'teal',
    data: '2026-02-17',
    leitura: '16 min',
  },
  {
    slug: 'mercado-dispositivos-medicos-brasil',
    titulo: 'Mercado de Dispositivos Médicos no Brasil: R$ 26 Bilhões em 2024',
    resumo: 'Análise completa do mercado de dispositivos médicos no Brasil: tamanho, crescimento, principais segmentos, importação vs produção nacional e perspectivas.',
    categoria: 'Mercado',
    categoriaVariant: 'teal',
    data: '2026-02-17',
    leitura: '18 min',
  },
  {
    slug: 'empresas-engenharia-biomedica-brasil',
    titulo: 'Principais Empresas de Engenharia Biomédica no Brasil: Guia Completo para Carreira',
    resumo: 'Conheça as principais empresas de Engenharia Biomédica no Brasil: multinacionais, nacionais e startups — com dicas para conseguir emprego em cada uma.',
    categoria: 'Mercado',
    categoriaVariant: 'teal',
    data: '2026-02-17',
    leitura: '16 min',
  },
  {
    slug: 'healthtechs-brasil-ecossistema',
    titulo: 'Healthtechs no Brasil: O Ecossistema de 1.919 Startups que Transforma a Saúde',
    resumo: 'Mapa completo das 1.919 healthtechs brasileiras: categorias, investimentos, aceleradoras e oportunidades para engenheiros biomédicos.',
    categoria: 'Inovação',
    categoriaVariant: 'amber',
    data: '2026-02-17',
    leitura: '18 min',
  },
  {
    slug: 'registro-crea-engenheiro-biomedico',
    titulo: 'Registro no CREA para Engenheiro Biomédico: Passo a Passo, Atribuições e Legislação',
    resumo: 'Guia completo sobre o registro profissional do engenheiro biomédico no CREA: como obter, atribuições, legislação e ART.',
    categoria: 'Regulamentação',
    categoriaVariant: 'coral',
    data: '2026-02-17',
    leitura: '15 min',
  },
  {
    slug: 'anvisa-dispositivos-medicos-regulamentacao',
    titulo: 'ANVISA e Dispositivos Médicos: Guia Completo de Regulamentação para Engenheiros',
    resumo: 'Tudo sobre a regulamentação de dispositivos médicos pela ANVISA: classificação de risco, registro, BPF e o papel do engenheiro biomédico.',
    categoria: 'Regulamentação',
    categoriaVariant: 'coral',
    data: '2026-02-17',
    leitura: '20 min',
  },
  {
    slug: 'normas-tecnicas-engenharia-biomedica',
    titulo: 'Normas Técnicas em Engenharia Biomédica: IEC 60601, ISO 13485 e Outras Essenciais',
    resumo: 'Guia prático das normas técnicas mais importantes para engenheiros biomédicos: IEC 60601, ISO 13485, ISO 14971 e mais.',
    categoria: 'Regulamentação',
    categoriaVariant: 'coral',
    data: '2026-02-17',
    leitura: '16 min',
  },
  {
    slug: 'centros-pesquisa-engenharia-biomedica',
    titulo: 'Centros de Pesquisa em Engenharia Biomédica no Brasil: Mapa Completo',
    resumo: 'Conheça os principais centros e laboratórios de pesquisa em Engenharia Biomédica no Brasil: INCT, laboratórios universitários e institutos de P&D.',
    categoria: 'Pesquisa',
    categoriaVariant: 'primary',
    data: '2026-02-17',
    leitura: '14 min',
  },
  {
    slug: 'tendencias-futuro-engenharia-biomedica',
    titulo: 'Tendências e Futuro da Engenharia Biomédica: 10 Tecnologias que Vão Transformar a Saúde',
    resumo: 'As 10 principais tendências que estão moldando o futuro da Engenharia Biomédica: IA, bioimpressão, wearables, robótica e mais.',
    categoria: 'Inovação',
    categoriaVariant: 'amber',
    data: '2026-02-17',
    leitura: '16 min',
  },
  {
    slug: 'engenharia-biomedica-eua-vs-brasil',
    titulo: 'Engenharia Biomédica nos EUA vs Brasil: Formação, Salários, Mercado e Oportunidades',
    resumo: 'Comparativo completo da Engenharia Biomédica entre EUA e Brasil: formação acadêmica, salários, mercado de trabalho e oportunidades internacionais.',
    categoria: 'Internacional',
    categoriaVariant: 'teal',
    data: '2026-02-17',
    leitura: '18 min',
  },
  {
    slug: 'calendario-eventos-engenharia-biomedica-2026',
    titulo: 'Calendário de Eventos de Engenharia Biomédica 2026: Congressos, Feiras e Conferências',
    resumo: 'Calendário completo e atualizado dos principais eventos de Engenharia Biomédica em 2026: congressos nacionais e internacionais, feiras e conferências.',
    categoria: 'Eventos',
    categoriaVariant: 'amber',
    data: '2026-02-17',
    leitura: '12 min',
  },
  {
    slug: 'medtronic-obtem-autorizacao-da-fda-para-sistema-robotico-esp',
    titulo: 'Medtronic Obtém Autorização da FDA para Sistema Robótico Espinhal Stealth AXiS [2026]',
    resumo:
      'A Medtronic recebeu clearance da FDA para o Stealth AXiS, sistema robótico para coluna baseado na plataforma Mazor, reforçando sua posição no mercado global de US$ 15 bilhões em tecnologias cranianas e espinhais.',
    categoria: 'Mercado',
    categoriaVariant: 'teal',
    data: '2026-02-19',
    leitura: '8 min',
  },
  {
    slug: 'dispositivos-medicos-vestiveis-em-ascensao-os-quatro-compone',
    titulo: 'Dispositivos Médicos Vestíveis em Ascensão: Os Quatro Componentes que Moldam a Nova Cadeia de Suprimentos [2026]',
    resumo:
      'O mercado global de dispositivos médicos vestíveis supera US$ 31 bilhões e cresce acima de 20% ao ano, impulsionado pela consolidação de quatro componentes tecnológicos essenciais.',
    categoria: 'Inovação',
    categoriaVariant: 'amber',
    data: '2026-02-19',
    leitura: '9 min',
    imagens: [
      { src: '/artigos/dispositivos-medicos-vestiveis-em-ascensao-os-quatro-compone/image-1.webp', alt: 'Componentes essenciais de wearables médicos em bancada: módulo biossensor PPG com LED infravermelho, chip SoC nRF5340, antena BLE cerâmica com bobina NFC e bateria LiPo de 120 mAh', caption: 'Os quatro pilares da cadeia de suprimentos: biossensor PPG, SoC de ultra-baixo consumo, módulo de conectividade BLE/NFC e bateria LiPo com PMIC de gerenciamento de energia' },
      { src: '/artigos/dispositivos-medicos-vestiveis-em-ascensao-os-quatro-compone/image-2.webp', alt: 'Dispositivos médicos vestíveis em superfície clínica: smartwatch com traçado ECG, patch cardíaco adesivo, sensor CGM de glicose contínua, anel inteligente e pulseira de detecção de crises epilépticas', caption: 'Aplicações clínicas de dispositivos vestíveis médicos: smartwatch com ECG, patch cardíaco, monitor de glicose contínuo (CGM), anel inteligente para ciclo circadiano e pulseira de detecção de convulsões' },
    ],
  },
  {
    slug: 'anvisa-aprova-sistema-de-rastreamento-e-identificacao-de-dis',
    titulo: 'ANVISA Aprova Sistema de Rastreamento e Identificação de Dispositivos Médicos [2026]',
    resumo:
      'A ANVISA aprovou sistema nacional de identificação única (IUD) para dispositivos médicos, alinhando o Brasil ao FDA e à União Europeia em rastreabilidade e segurança do paciente.',
    categoria: 'Regulamentação',
    categoriaVariant: 'coral',
    data: '2026-02-19',
    leitura: '9 min',
  },
  {
    slug: 'qmsr-e-ciberseguranca-da-fda-requisitos-essenciais-para-disp',
    titulo: 'QMSR e Cibersegurança da FDA: Requisitos Essenciais para Dispositivos Médicos [2026]',
    resumo:
      'A FDA implementou o QMSR em 2026, substituindo o QSR e exigindo cibersegurança por projeto em dispositivos médicos conectados. Entenda o que mudou.',
    categoria: 'Mercado',
    categoriaVariant: 'teal',
    data: '2026-02-19',
    leitura: '8 min',
    imagens: [
      { src: '/artigos/qmsr-e-ciberseguranca-da-fda-requisitos-essenciais-para-disp/image-1.webp', alt: 'Estação de trabalho para revisão de cibersegurança de dispositivos médicos: laptop com dashboard de vulnerabilidades, dispositivo médico conectado via rede, documentação FDA e chave de segurança USB', caption: 'Estação de revisão de cibersegurança: dashboard de vulnerabilidades, dispositivo médico conectado, documentação de conformidade FDA e chave de segurança para autenticação' },
      { src: '/artigos/qmsr-e-ciberseguranca-da-fda-requisitos-essenciais-para-disp/image-2.webp', alt: 'Análise de SBOM para dispositivo médico: monitor com árvore de dependências de software, indicadores de vulnerabilidades CVE e placa de circuito embarcado conectada via cabo de debug', caption: 'Análise de SBOM (Software Bill of Materials): visualização de dependências de software com indicadores de vulnerabilidades CVE, placa embarcada de dispositivo médico e documentação de rastreabilidade' },
    ],
  },
  {
    slug: 'aprovacao-fda-para-empresas-internacionais-o-que-o-caso-do-p',
    titulo: 'Aprovação FDA para Empresas Internacionais: O Que o Caso do Parque Great Stone Ensina ao Brasil [2026]',
    resumo:
      'Empresa do parque industrial sino-bielorrusso Great Stone obtém autorização da FDA e entra no mercado americano de dispositivos médicos — entenda o processo e as implicações para o Brasil.',
    categoria: 'Regulamentação',
    categoriaVariant: 'coral',
    data: '2026-02-19',
    leitura: '11 min',
  },
  {
    slug: 'como-funciona-a-anvisa-estrutura-atribuicoes-e-o-papel-na-re',
    titulo: 'Como Funciona a ANVISA: Estrutura, Atribuições e o Papel na Regulamentação de Dispositivos Médicos [2026]',
    resumo:
      'Entenda a estrutura organizacional da ANVISA, suas cinco diretorias, o processo de registro de dispositivos médicos e o papel do engenheiro biomédico na regulamentação sanitária brasileira.',
    categoria: 'Regulamentação',
    categoriaVariant: 'coral',
    data: '2026-02-19',
    leitura: '9 min',
  },
  {
    slug: 'acoes-de-dispositivos-medicos-como-investir-no-setor-em-2026',
    titulo: 'Ações de Dispositivos Médicos: Como Investir no Setor em 2026',
    resumo:
      'Mercado global de US$ 600 bilhões, empresas líderes e estratégias para investidores brasileiros acessarem o setor de dispositivos médicos.',
    categoria: 'Inovação',
    categoriaVariant: 'amber',
    data: '2026-02-19',
    leitura: '9 min',
  },
  {
    slug: 'novocure-recebe-aprovacao-da-fda-para-tratar-cancer-de-pancr',
    titulo: 'Novocure Recebe Aprovação da FDA para Tratar Câncer de Pâncreas com Campos Elétricos [2026]',
    resumo:
      'A FDA aprovou a terapia TTFields da Novocure para câncer de pâncreas localmente avançado, abrindo acesso a cerca de 15.000 pacientes norte-americanos por ano.',
    categoria: 'Mercado',
    categoriaVariant: 'teal',
    data: '2026-02-19',
    leitura: '8 min',
    imagens: [
      { src: '/artigos/novocure-recebe-aprovacao-da-fda-para-tratar-cancer-de-pancr/image-1.webp', alt: 'Ilustração técnica: Perspectivas para o Brasil', caption: 'Ilustração: Perspectivas para o Brasil' },
      { src: '/artigos/novocure-recebe-aprovacao-da-fda-para-tratar-cancer-de-pancr/image-2.webp', alt: 'Ilustração técnica: Impacto no Mercado de MedTech', caption: 'Ilustração: Impacto no Mercado de MedTech' },
    ],
  },
  {
    slug: 'sensores-vestiveis-saude-2026',
    titulo: 'Sensores Vestíveis na Saúde: Como Wearables Estão Revolucionando o Monitoramento de Pacientes [2026]',
    resumo:
      'Wearables médicos movimentaram US$ 36 bilhões em 2024 e redefinem o monitoramento de pacientes com ECG, PPG, CGM e IA embarcada.',
    categoria: 'Inovação',
    categoriaVariant: 'amber',
    data: '2026-02-20',
    leitura: '10 min',
    imagens: [
      { src: '/artigos/sensores-vestiveis-saude-2026/image-1.webp', alt: 'Comparativo das quatro tecnologias de sensoriamento em wearables médicos: PPG óptico, ECG elétrico, IMU inercial e bioimpedância', caption: 'As quatro famílias de sensores em wearables médicos operam com princípios físicos distintos — óptico (PPG), elétrico (ECG e BIA) e inercial (IMU)' },
      { src: '/artigos/sensores-vestiveis-saude-2026/image-2.webp', alt: 'Diagrama de corte transversal de sensor CGM mostrando agulha intersticial, membrana enzimática de glicose-oxidase e transmissão Bluetooth da glicemia', caption: 'O sensor CGM converte a reação eletroquímica entre a glicose intersticial e a enzima glicose-oxidase em corrente elétrica proporcional' },
      { src: '/artigos/sensores-vestiveis-saude-2026/image-3.webp', alt: 'Tabela comparativa dos sistemas regulatórios ANVISA, FDA e CE Mark para wearables médicos com classes de risco e prazos de aprovação', caption: 'Os três principais sistemas regulatórios para wearables médicos diferem em nomenclatura de classes de risco e prazos de aprovação' },
    ],
  },
  {
    slug: 'ressonancia-magnetica-ge-healthcare-signa-fda-2026',
    titulo: 'GE HealthCare Recebe 3 Aprovações do FDA para Nova Geração da Plataforma SIGNA de Ressonância Magnética [2026]',
    resumo:
      'GE HealthCare obteve três aprovações do FDA para a plataforma SIGNA em 2025: AIR Recon DL cardíaco, gradientes MAGNUS e integração com NeuroQuant — avanços que redefinem a RM clínica.',
    categoria: 'Inovação',
    categoriaVariant: 'amber',
    data: '2026-02-20',
    leitura: '9 min',
    imagens: [
      { src: '/artigos/ressonancia-magnetica-ge-healthcare-signa-fda-2026/image-1.webp', alt: 'Comparativo técnico das plataformas SIGNA 1.5T, 3T e gradientes MAGNUS com especificações de campo e desempenho clínico', caption: 'A família SIGNA abrange três níveis de campo magnético e diferentes configurações de gradiente, com as aprovações de 2025 aplicáveis em diferentes pontos da linha' },
      { src: '/artigos/ressonancia-magnetica-ge-healthcare-signa-fda-2026/image-2.webp', alt: 'Scanner de ressonância magnética GE SIGNA Premier 3T instalado em sala clínica com gantry branco e painel de controle', caption: 'O sistema SIGNA Premier 3T, base para as aprovações do AIR Recon DL cardíaco e integração do NeuroQuant, opera em ambiente clínico blindado magneticamente' },
      { src: '/artigos/ressonancia-magnetica-ge-healthcare-signa-fda-2026/image-3.webp', alt: 'Fluxograma comparativo do processo de aprovação FDA 510k e De Novo versus ANVISA RDC 657 para software de IA em ressonância magnética', caption: 'Os dois principais caminhos regulatórios no FDA para software de IA em dispositivos médicos — 510(k) por equivalência e De Novo para inovações sem predicate' },
    ],
  },
  {
    slug: 'engenharia-biomedica-vale-a-pena',
    titulo: 'Engenharia Biomédica Vale a Pena? Análise Completa com Dados Reais [2026]',
    resumo: 'Engenharia biomédica vale a pena? Análise com dados do CAGED 2026, empregabilidade e mercado de R$ 26,1 bilhões para tomar a melhor decisão de carreira.',
    categoria: 'Formação',
    categoriaVariant: 'primary',
    data: '2026-02-20',
    dataModificacao: '2026-02-21',
    leitura: '14 min',
    imagens: [
      { src: '/artigos/engenharia-biomedica-vale-a-pena/image-1.webp', alt: 'Progressão salarial do engenheiro biomédico em 2026 por nível de experiência segundo dados CAGED', caption: 'Salários do engenheiro biomédico por nível de experiência. Fonte: CAGED 2026 via Portal Salário.' },
      { src: '/artigos/engenharia-biomedica-vale-a-pena/image-2.webp', alt: 'Sala de cirurgia robótica com equipamentos de engenharia biomédica e monitores multiparamétricos', caption: 'Cirurgia robótica no Brasil cresceu 417% em cinco anos, com 135 sistemas instalados em mais de 90 hospitais.' },
      { src: '/artigos/engenharia-biomedica-vale-a-pena/image-3.webp', alt: 'Laboratório de desenvolvimento de dispositivos médicos com prototipagem e instrumentação biomédica', caption: 'Startups como brain4care e HOOBOX Robotics nasceram em laboratórios de engenharia biomédica brasileiros.' },
    ],
  },
  {
    slug: 'engenharia-biomedica-vale-a-pena-v2',
    titulo: 'Engenharia Biomédica Vale a Pena? Análise Completa com Dados Reais [2026]',
    resumo: 'Engenharia biomédica vale a pena? Análise com dados CAGED 2026: salário médio de R$ 8.658/mês, mercado de R$ 26,1 bilhões e 85 mil empregos diretos no setor.',
    categoria: 'Formação',
    categoriaVariant: 'primary',
    data: '2026-02-21',
    leitura: '14 min',
    imagens: [
      { src: '/artigos/engenharia-biomedica-vale-a-pena-v2/image-1.webp', alt: 'Visualização conceitual do mercado de engenharia biomédica, com IA, cirurgia robótica e telemedicina', caption: 'O mercado de dispositivos médicos é impulsionado por tecnologias como inteligência artificial, cirurgia robótica e telemedicina, criando uma crescente demanda por engenheiros biomédicos' },
      { src: '/artigos/engenharia-biomedica-vale-a-pena-v2/image-2.webp', alt: 'Sensor não invasivo de pressão intracraniana da brain4care, tecnologia de engenharia biomédica em detalhe', caption: 'O sensor não invasivo de pressão intracraniana da brain4care, um exemplo da inovação brasileira na engenharia biomédica' },
    ],
  },
  {
    slug: 'quanto-ganha-engenheiro-biomedico-2026',
    titulo: 'Quanto Ganha um Engenheiro Biomédico: Salários por Nível, Região e Especialidade [Dados CAGED 2026]',
    resumo: 'Salário do engenheiro biomédico no Brasil: de R$ 7.659 (júnior) a R$ 14.782 (especialista), com dados CAGED 2026 por estado, setor e especialidade técnica.',
    categoria: 'Mercado',
    categoriaVariant: 'teal',
    data: '2026-02-20',
    leitura: '12 min',
    imagens: [
      { src: '/artigos/quanto-ganha-engenheiro-biomedico-2026/image-1.webp', alt: 'Infográfico de salário do engenheiro biomédico por nível de experiência com dados CAGED 2026', caption: 'Progressão salarial do engenheiro biomédico: do júnior (R$ 7.659) ao sênior (R$ 13.262), com crescimento de 73% — dados CAGED 2026' },
      { src: '/artigos/quanto-ganha-engenheiro-biomedico-2026/image-2.webp', alt: 'Engenheiro biomédico atuando em engenharia clínica hospitalar com equipamentos médicos ao fundo', caption: 'Engenheiro clínico em hospital: o setor hospitalar paga entre R$ 5.000 e R$ 6.500/mês, enquanto gestão de saúde chega a R$ 11.051' },
      { src: '/artigos/quanto-ganha-engenheiro-biomedico-2026/image-3.webp', alt: 'Comparação de salários entre engenharias mostrando posição da engenharia biomédica no ranking CAGED 2026', caption: 'Ranking salarial das engenharias (CAGED 2026): a biomédica compensa o salário menor com crescimento de contratações de 50%' },
    ],
  },
  {
    slug: 'todas-faculdades-engenharia-biomedica-brasil-ranking',
    titulo: 'Todas as Faculdades de Engenharia Biomédica no Brasil: Ranking, Notas e Comparativo [2026]',
    resumo: 'Lista completa das 29 faculdades de engenharia biomédica no Brasil em 2026: 8 públicas federais e 21 privadas, com notas MEC, notas de corte SiSU, mensalidades e comparativo.',
    categoria: 'Formação',
    categoriaVariant: 'primary',
    data: '2026-02-21',
    leitura: '16 min',
    imagens: [
      { src: '/artigos/todas-faculdades-engenharia-biomedica-brasil-ranking/image-1.webp', alt: 'Mapa do Brasil com localização das 8 universidades federais que oferecem engenharia biomédica', caption: 'As 8 universidades federais com graduação em engenharia biomédica — concentração no Sudeste e vazios no Centro-Oeste' },
      { src: '/artigos/todas-faculdades-engenharia-biomedica-brasil-ranking/image-2.webp', alt: 'Gráfico de notas de corte SiSU 2025 para engenharia biomédica nas universidades federais brasileiras', caption: 'Notas de corte SiSU 2025: UFU lidera com 754 pontos (pesos iguais) — média nacional de 667 pontos posiciona o curso no top 40' },
      { src: '/artigos/todas-faculdades-engenharia-biomedica-brasil-ranking/image-3.webp', alt: 'Mapa de distribuição geográfica dos cursos de engenharia biomédica no Brasil por região', caption: 'Desigualdade regional: 67% dos cursos estão no Sudeste enquanto o Centro-Oeste não possui nenhum programa' },
    ],
  },
  {
    slug: 'grade-curricular-engenharia-biomedica-5-anos',
    titulo: 'Grade Curricular de Engenharia Biomédica: O Que Você Vai Estudar em 5 Anos',
    resumo: 'Conheça semestre a semestre a grade curricular de Engenharia Biomédica: as disciplinas obrigatórias, os três ciclos de formação, os eixos de especialização, as matérias mais difíceis e como 27 universidades brasileiras organizam os ~3.600 horas do curso.',
    categoria: 'Formação',
    categoriaVariant: 'primary',
    data: '2026-02-21',
    leitura: '21 min',
    imagens: [
      { src: '/artigos/grade-curricular-engenharia-biomedica-5-anos/image-1.webp', alt: 'Diagrama da grade curricular de Engenharia Biomédica com três ciclos: Básico, Profissionalizante e Especialização, e carga horária.', caption: 'A estrutura curricular da Engenharia Biomédica no Brasil é dividida em três ciclos pedagógicos, totalizando entre 3.600 e 3.840 horas de formação.' },
      { src: '/artigos/grade-curricular-engenharia-biomedica-5-anos/image-2.webp', alt: 'Bancada de laboratório de Engenharia Biomédica com osciloscópio, protoboard, computador com Python e impressora 3D de biomateriais.', caption: 'Laboratórios de Engenharia Biomédica são equipados com instrumentação avançada, softwares de simulação e ferramentas de fabricação para o desenvolvimento de dispositivos e biomateriais.' },
      { src: '/artigos/grade-curricular-engenharia-biomedica-5-anos/image-3.webp', alt: 'Visualização conceitual dos quatro eixos de especialização em Engenharia Biomédica: Sinais, Biomecânica, Sistemas Inteligentes e Instrumentação.', caption: 'Os eixos de especialização da Engenharia Biomédica, como no modelo da UFABC, guiam os estudantes para áreas como Sinais e Imagens, Biomecânica, Sistemas Inteligentes e Instrumentação.' },
    ],
  },
  {
    slug: 'diferenca-biomedicina-engenharia-biomedica-guia',
    titulo: 'Diferença entre Engenharia Biomédica e Biomedicina: Guia Definitivo [2026]',
    resumo: 'Engenharia biomédica ou biomedicina? Entenda a diferença real: CREA vs CRBM, salário R$ 8.658 vs R$ 3.268, currículo, mercado e como escolher o curso certo para você.',
    categoria: 'Formação',
    categoriaVariant: 'primary',
    data: '2026-02-21',
    leitura: '22 min',
    imagens: [
      { src: '/artigos/diferenca-biomedicina-engenharia-biomedica-guia/image-1.webp', alt: 'Infográfico comparando Engenharia Biomédica e Biomedicina, mostrando diferenças em conselho profissional, salário e foco de atuação.', caption: 'Visão geral comparativa entre Engenharia Biomédica e Biomedicina, destacando as áreas de atuação, conselhos reguladores (CREA e CRBM) e a diferença salarial média entre as profissões.' },
      { src: '/artigos/diferenca-biomedicina-engenharia-biomedica-guia/image-2.webp', alt: 'Tomógrafo de última geração em desenvolvimento, mostrando circuitos internos e software de design, com selo de certificação ANVISA, representando engenharia biomédica.', caption: 'O engenheiro biomédico atua no projeto e desenvolvimento de equipamentos médicos complexos, como tomógrafos, integrando eletrônica, software e biomateriais, e garantindo sua conformidade regulatória com a ANVISA.' },
      { src: '/artigos/diferenca-biomedicina-engenharia-biomedica-guia/image-3.webp', alt: 'Infográfico comparativo de salários entre Engenheiro Biomédico e Biomédico, destacando a diferença de R$ 5.390 e o piso legal da engenharia.', caption: 'A análise salarial detalhada revela uma diferença significativa de remuneração entre Engenharia Biomédica e Biomedicina, impulsionada pela escassez de profissionais e pelo piso salarial legal da engenharia.' },
    ],
  },
  {
    slug: 'pos-graduacao-mestrado-doutorado-engenharia-biomedica',
    titulo: 'Pós-Graduação em Engenharia Biomédica: Todos os Programas de Mestrado e Doutorado no Brasil [2026]',
    resumo: 'Guia completo com todos os 12 PPGs específicos em Engenharia Biomédica e Bioengenharia no Brasil: conceitos CAPES, vagas, bolsas (até R$ 7.140/mês), processo seletivo, linhas de pesquisa e saídas de carreira para mestres e doutores.',
    categoria: 'Formação',
    categoriaVariant: 'primary',
    data: '2026-02-21',
    leitura: '24 min',
    imagens: [
      { src: '/artigos/pos-graduacao-mestrado-doutorado-engenharia-biomedica/image-1.webp', alt: 'Mapa interativo dos 12 programas de pós-graduação em Engenharia Biomédica no Brasil, com conceitos CAPES e níveis.', caption: 'Visão geral dos programas de pós-graduação stricto sensu em Engenharia Biomédica e Bioengenharia no Brasil, com seus conceitos CAPES e níveis de mestrado e doutorado.' },
      { src: '/artigos/pos-graduacao-mestrado-doutorado-engenharia-biomedica/image-2.webp', alt: 'Ilustração técnica de IA, wearables, bioimpressão 3D, robótica cirúrgica e biossensores em Engenharia Biomédica.', caption: 'As principais linhas de pesquisa em Engenharia Biomédica no Brasil e no mundo, abrangendo inteligência artificial, dispositivos vestíveis, bioimpressão 3D, robótica cirúrgica e biossensores avançados.' },
      { src: '/artigos/pos-graduacao-mestrado-doutorado-engenharia-biomedica/image-3.webp', alt: 'Infográfico sobre saídas de carreira e salários médios de engenheiros biomédicos com pós-graduação no Brasil.', caption: 'As oportunidades de carreira e o impacto na remuneração para mestres e doutores em Engenharia Biomédica, demonstrando a valorização profissional em diferentes setores.' },
    ],
  },
  {
    slug: 'nota-corte-engenharia-biomedica-sisu-2026',
    titulo: 'Nota de Corte Engenharia Biomédica SiSU 2026: Todas as Universidades e Projeções',
    resumo: 'Nota de corte atualizada de Engenharia Biomédica no SiSU 2026: ranking completo de todas as universidades federais, tabelas de cotas, evolução histórica 5 anos e projeções com a nova regra do ENEM.',
    categoria: 'Formação',
    categoriaVariant: 'primary',
    data: '2026-02-21',
    leitura: '17 min',
    imagens: [
      { src: '/artigos/nota-corte-engenharia-biomedica-sisu-2026/image-1.webp', alt: 'Mapa do Brasil ilustrando universidades federais com Engenharia Biomédica no SiSU, destacando UFU, UFPE, UFRN, UFNT, UFRB e UFABC.', caption: 'A distribuição geográfica das universidades federais que oferecem o curso de Engenharia Biomédica via SiSU, evidenciando as opções de ingresso direto e indireto.' },
      { src: '/artigos/nota-corte-engenharia-biomedica-sisu-2026/image-2.webp', alt: 'Gráfico de linha mostrando a evolução da nota de corte SiSU para Engenharia Biomédica (UFU, UFPE, UFRN) de 2021 a 2025.', caption: 'Análise da trajetória das notas de corte de Engenharia Biomédica nas principais universidades federais, revelando tendências de alta e baixa nos últimos cinco anos do SiSU.' },
      { src: '/artigos/nota-corte-engenharia-biomedica-sisu-2026/image-3.webp', alt: 'Diagrama comparativo dos pesos das provas do ENEM (Matemática, Natureza, Linguagens, Humanas, Redação) por universidade (UFU, UFPE, UFRN) para Engenharia Biomédica.', caption: 'Entenda como cada universidade federal pondera as provas do ENEM para o curso de Engenharia Biomédica, um fator crucial para a estratégia de inscrição no SiSU.' },
    ],
  },
];

/** Mapa slug → metadados para acesso rápido */
export const artigosMetaMap: Record<string, ArtigoMeta> = Object.fromEntries(
  artigosMeta.map((a) => [a.slug, a])
);
