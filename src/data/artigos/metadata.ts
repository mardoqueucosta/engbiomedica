/**
 * Metadados leves dos artigos — SEM conteúdo HTML.
 * Usado por: /artigos (lista), sitemap.ts, navigation.
 * Isso evita carregar ~400 KB de HTML no bundle de páginas que não precisam do conteúdo.
 */

export interface ArtigoMeta {
  slug: string;
  titulo: string;
  resumo: string;
  categoria: string;
  categoriaVariant: 'primary' | 'teal' | 'coral' | 'amber';
  data: string;
  leitura: string;
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
    slug: 'medtronic-nets-fda-clearance-for-robotic-spine-system',
    titulo: 'Medtronic Obtém Autorização da FDA para Sistema Robótico Espinhal Stealth AXiS [2026]',
    resumo:
      'A Medtronic recebeu clearance da FDA para o Stealth AXiS, sistema robótico para coluna baseado na plataforma Mazor, reforçando sua posição no mercado global de US$ 15 bilhões em tecnologias cranianas e espinhais.',
    categoria: 'Mercado',
    categoriaVariant: 'teal',
    data: '2026-02-19',
    leitura: '8 min',
  },
  {
    slug: 'wearable-medical-devices-surge-with-supply-chain-of-four-cor',
    titulo: 'Wearables Médicos em Ascensão: Os Quatro Componentes que Moldam a Nova Cadeia de Suprimentos [2026]',
    resumo:
      'O mercado global de dispositivos médicos vestíveis supera US$ 31 bilhões e cresce acima de 20% ao ano, impulsionado pela consolidação de quatro componentes tecnológicos essenciais.',
    categoria: 'Inovação',
    categoriaVariant: 'amber',
    data: '2026-02-19',
    leitura: '9 min',
  },
  {
    slug: 'anvisa-aprova-sistema-para-rastreamento-e-identificacao-de-d',
    titulo: 'ANVISA Aprova Sistema de Rastreamento e Identificação de Dispositivos Médicos [2026]',
    resumo:
      'A ANVISA aprovou sistema nacional de identificação única (IUD) para dispositivos médicos, alinhando o Brasil ao FDA e à União Europeia em rastreabilidade e segurança do paciente.',
    categoria: 'Regulamentação',
    categoriaVariant: 'coral',
    data: '2026-02-19',
    leitura: '9 min',
  },
  {
    slug: 'understanding-fdas-qmsr-and-cybersecurity-mandates-for-medic',
    titulo: 'QMSR e Cibersegurança da FDA: Requisitos Essenciais para Dispositivos Médicos [2026]',
    resumo:
      'A FDA implementou o QMSR em 2026, substituindo o QSR e exigindo cibersegurança por projeto em dispositivos médicos conectados. Entenda o que mudou.',
    categoria: 'Mercado',
    categoriaVariant: 'teal',
    data: '2026-02-19',
    leitura: '8 min',
  },
  {
    slug: 'great-stone-resident-secures-fda-approval-enters-us-market-w',
    titulo: 'Aprovação FDA para Empresas Internacionais: O Que o Caso do Parque Great Stone Ensina ao Brasil [2026]',
    resumo:
      'Empresa do parque industrial sino-bielorrusso Great Stone obtém autorização da FDA e entra no mercado americano de dispositivos médicos — entenda o processo e as implicações para o Brasil.',
    categoria: 'Regulamentação',
    categoriaVariant: 'coral',
    data: '2026-02-19',
    leitura: '11 min',
  },
  {
    slug: 'fda-gives-approval-for-first-of-its-kind-device-harlan-enter',
    titulo: 'FDA Aprova Dispositivo Médico Inédito: O Que Isso Significa para o Brasil [2026]',
    resumo:
      'O FDA concedeu aprovação a um dispositivo médico sem precedentes em fevereiro de 2026, sinalizando nova fase de inovação regulatória com impactos diretos no mercado brasileiro.',
    categoria: 'Regulamentação',
    categoriaVariant: 'coral',
    data: '2026-02-19',
    leitura: '8 min',
  },
];

/** Mapa slug → metadados para acesso rápido */
export const artigosMetaMap: Record<string, ArtigoMeta> = Object.fromEntries(
  artigosMeta.map((a) => [a.slug, a])
);
