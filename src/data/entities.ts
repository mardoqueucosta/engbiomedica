/**
 * Entidades conhecidas para entity linking no JSON-LD dos artigos.
 * Cada chave é o termo buscado (lowercase) no conteúdo HTML.
 * O campo `type` mapeia para o @type do Schema.org.
 * O campo `medicalCode` opcional vincula a vocabulários controlados (MeSH).
 */

export interface MedicalCodeRef {
  codeValue: string;
  codingSystem: string;
  url: string;
}

export interface KnownEntity {
  name: string;
  type: 'Organization' | 'GovernmentOrganization' | 'EducationalOrganization'
      | 'DefinedTerm' | 'MedicalSpecialty' | 'MedicalDevice' | 'MedicalProcedure'
      | 'MedicalCondition' | 'MedicalTherapy';
  url: string;
  sameAs?: string[];
  medicalCode?: MedicalCodeRef;
}

export const knownEntities: Record<string, KnownEntity> = {
  // === Reguladores e Governo ===
  anvisa: {
    name: 'ANVISA',
    type: 'GovernmentOrganization',
    url: 'https://www.gov.br/anvisa',
    sameAs: ['https://pt.wikipedia.org/wiki/Ag%C3%AAncia_Nacional_de_Vigil%C3%A2ncia_Sanit%C3%A1ria', 'https://www.wikidata.org/wiki/Q344648'],
  },
  fda: {
    name: 'FDA',
    type: 'GovernmentOrganization',
    url: 'https://www.fda.gov',
    sameAs: ['https://en.wikipedia.org/wiki/Food_and_Drug_Administration', 'https://www.wikidata.org/wiki/Q204711'],
  },
  inmetro: {
    name: 'INMETRO',
    type: 'GovernmentOrganization',
    url: 'https://www.gov.br/inmetro',
    sameAs: ['https://pt.wikipedia.org/wiki/Instituto_Nacional_de_Metrologia,_Qualidade_e_Tecnologia'],
  },
  'ministério da saúde': {
    name: 'Ministério da Saúde',
    type: 'GovernmentOrganization',
    url: 'https://www.gov.br/saude',
    sameAs: ['https://pt.wikipedia.org/wiki/Minist%C3%A9rio_da_Sa%C3%BAde_(Brasil)', 'https://www.wikidata.org/wiki/Q3294489'],
  },
  oms: {
    name: 'OMS',
    type: 'GovernmentOrganization',
    url: 'https://www.who.int',
    sameAs: ['https://pt.wikipedia.org/wiki/Organiza%C3%A7%C3%A3o_Mundial_da_Sa%C3%BAde', 'https://www.wikidata.org/wiki/Q7817'],
  },

  // === Conselhos profissionais ===
  confea: {
    name: 'CONFEA',
    type: 'Organization',
    url: 'https://www.confea.org.br',
    sameAs: ['https://pt.wikipedia.org/wiki/Conselho_Federal_de_Engenharia_e_Agronomia'],
  },
  crea: {
    name: 'CREA',
    type: 'Organization',
    url: 'https://www.confea.org.br/crea',
    sameAs: ['https://pt.wikipedia.org/wiki/Conselho_Regional_de_Engenharia_e_Agronomia'],
  },

  // === Fomento e pesquisa ===
  capes: {
    name: 'CAPES',
    type: 'GovernmentOrganization',
    url: 'https://www.gov.br/capes',
    sameAs: ['https://pt.wikipedia.org/wiki/Coordena%C3%A7%C3%A3o_de_Aperfei%C3%A7oamento_de_Pessoal_de_N%C3%ADvel_Superior', 'https://www.wikidata.org/wiki/Q2682977'],
  },
  cnpq: {
    name: 'CNPq',
    type: 'GovernmentOrganization',
    url: 'https://www.gov.br/cnpq',
    sameAs: ['https://pt.wikipedia.org/wiki/Conselho_Nacional_de_Desenvolvimento_Cient%C3%ADfico_e_Tecnol%C3%B3gico', 'https://www.wikidata.org/wiki/Q2108739'],
  },
  fapesp: {
    name: 'FAPESP',
    type: 'Organization',
    url: 'https://fapesp.br',
    sameAs: ['https://pt.wikipedia.org/wiki/Funda%C3%A7%C3%A3o_de_Amparo_%C3%A0_Pesquisa_do_Estado_de_S%C3%A3o_Paulo', 'https://www.wikidata.org/wiki/Q2801252'],
  },
  finep: {
    name: 'FINEP',
    type: 'GovernmentOrganization',
    url: 'https://www.finep.gov.br',
    sameAs: ['https://pt.wikipedia.org/wiki/Financiadora_de_Estudos_e_Projetos'],
  },

  // === Associações e sociedades ===
  abimo: {
    name: 'ABIMO',
    type: 'Organization',
    url: 'https://abimo.org.br',
  },
  abimed: {
    name: 'ABIMED',
    type: 'Organization',
    url: 'https://abimed.org.br',
  },
  ieee: {
    name: 'IEEE',
    type: 'Organization',
    url: 'https://www.ieee.org',
    sameAs: ['https://en.wikipedia.org/wiki/Institute_of_Electrical_and_Electronics_Engineers', 'https://www.wikidata.org/wiki/Q131566'],
  },
  sbeb: {
    name: 'SBEB',
    type: 'Organization',
    url: 'https://www.sbeb.org.br',
  },
  aami: {
    name: 'AAMI',
    type: 'Organization',
    url: 'https://www.aami.org',
    sameAs: ['https://en.wikipedia.org/wiki/Association_for_the_Advancement_of_Medical_Instrumentation'],
  },

  // === Normas e padrões ===
  iec: {
    name: 'IEC',
    type: 'Organization',
    url: 'https://www.iec.ch',
    sameAs: ['https://en.wikipedia.org/wiki/International_Electrotechnical_Commission', 'https://www.wikidata.org/wiki/Q178598'],
  },
  iso: {
    name: 'ISO',
    type: 'Organization',
    url: 'https://www.iso.org',
    sameAs: ['https://en.wikipedia.org/wiki/International_Organization_for_Standardization', 'https://www.wikidata.org/wiki/Q15028'],
  },
  dicom: {
    name: 'DICOM',
    type: 'DefinedTerm',
    url: 'https://www.dicomstandard.org',
    sameAs: ['https://en.wikipedia.org/wiki/DICOM', 'https://www.wikidata.org/wiki/Q835960'],
  },
  'hl7': {
    name: 'HL7',
    type: 'DefinedTerm',
    url: 'https://www.hl7.org',
    sameAs: ['https://en.wikipedia.org/wiki/Health_Level_7', 'https://www.wikidata.org/wiki/Q749035'],
  },
  fhir: {
    name: 'FHIR',
    type: 'DefinedTerm',
    url: 'https://www.hl7.org/fhir',
    sameAs: ['https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources'],
  },

  // === Sistema de saúde ===
  sus: {
    name: 'SUS',
    type: 'GovernmentOrganization',
    url: 'https://www.gov.br/saude/pt-br/composicao/sus',
    sameAs: ['https://pt.wikipedia.org/wiki/Sistema_%C3%9Anico_de_Sa%C3%BAde', 'https://www.wikidata.org/wiki/Q3466839'],
  },

  // === Universidades ===
  usp: {
    name: 'USP',
    type: 'EducationalOrganization',
    url: 'https://www.usp.br',
    sameAs: ['https://pt.wikipedia.org/wiki/Universidade_de_S%C3%A3o_Paulo', 'https://www.wikidata.org/wiki/Q835960'],
  },
  unicamp: {
    name: 'Unicamp',
    type: 'EducationalOrganization',
    url: 'https://www.unicamp.br',
    sameAs: ['https://pt.wikipedia.org/wiki/Universidade_Estadual_de_Campinas', 'https://www.wikidata.org/wiki/Q206607'],
  },
  ufmg: {
    name: 'UFMG',
    type: 'EducationalOrganization',
    url: 'https://www.ufmg.br',
    sameAs: ['https://pt.wikipedia.org/wiki/Universidade_Federal_de_Minas_Gerais', 'https://www.wikidata.org/wiki/Q583451'],
  },

  // === Equipamentos e Dispositivos Médicos (com MeSH) ===
  'ressonância magnética': {
    name: 'Ressonância Magnética',
    type: 'MedicalProcedure',
    url: 'https://pt.wikipedia.org/wiki/Imagem_por_resson%C3%A2ncia_magn%C3%A9tica',
    sameAs: ['https://www.wikidata.org/wiki/Q161238'],
    medicalCode: { codeValue: 'D008279', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D008279' },
  },
  'tomografia computadorizada': {
    name: 'Tomografia Computadorizada',
    type: 'MedicalProcedure',
    url: 'https://pt.wikipedia.org/wiki/Tomografia_computadorizada',
    sameAs: ['https://www.wikidata.org/wiki/Q32566'],
    medicalCode: { codeValue: 'D014057', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D014057' },
  },
  'ultrassom': {
    name: 'Ultrassonografia',
    type: 'MedicalProcedure',
    url: 'https://pt.wikipedia.org/wiki/Ultrassonografia',
    sameAs: ['https://www.wikidata.org/wiki/Q211431'],
    medicalCode: { codeValue: 'D014463', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D014463' },
  },
  'eletrocardiograma': {
    name: 'Eletrocardiografia',
    type: 'MedicalProcedure',
    url: 'https://pt.wikipedia.org/wiki/Eletrocardiograma',
    sameAs: ['https://www.wikidata.org/wiki/Q170484'],
    medicalCode: { codeValue: 'D004562', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D004562' },
  },
  'ventilador mecânico': {
    name: 'Ventilador Mecânico',
    type: 'MedicalDevice',
    url: 'https://pt.wikipedia.org/wiki/Ventila%C3%A7%C3%A3o_mec%C3%A2nica',
    sameAs: ['https://www.wikidata.org/wiki/Q274977'],
    medicalCode: { codeValue: 'D012122', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D012122' },
  },
  'bomba de infusão': {
    name: 'Bomba de Infusão',
    type: 'MedicalDevice',
    url: 'https://pt.wikipedia.org/wiki/Bomba_de_infus%C3%A3o',
    sameAs: ['https://www.wikidata.org/wiki/Q1141688'],
    medicalCode: { codeValue: 'D007260', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D007260' },
  },
  'desfibrilador': {
    name: 'Desfibrilador',
    type: 'MedicalDevice',
    url: 'https://pt.wikipedia.org/wiki/Desfibrilador',
    sameAs: ['https://www.wikidata.org/wiki/Q188955'],
    medicalCode: { codeValue: 'D047548', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D047548' },
  },
  'oxímetro': {
    name: 'Oximetria',
    type: 'MedicalProcedure',
    url: 'https://pt.wikipedia.org/wiki/Oximetria_de_pulso',
    sameAs: ['https://www.wikidata.org/wiki/Q579527'],
    medicalCode: { codeValue: 'D010092', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D010092' },
  },
  'endoscópio': {
    name: 'Endoscopia',
    type: 'MedicalProcedure',
    url: 'https://pt.wikipedia.org/wiki/Endoscopia',
    sameAs: ['https://www.wikidata.org/wiki/Q188100'],
    medicalCode: { codeValue: 'D004724', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D004724' },
  },
  'bisturi elétrico': {
    name: 'Eletrocirurgia',
    type: 'MedicalProcedure',
    url: 'https://pt.wikipedia.org/wiki/Eletrocirurgia',
    medicalCode: { codeValue: 'D004598', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D004598' },
  },
  'monitor multiparamétrico': {
    name: 'Monitorização Fisiológica',
    type: 'MedicalDevice',
    url: 'https://pt.wikipedia.org/wiki/Monitor_de_sinais_vitais',
    medicalCode: { codeValue: 'D008991', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D008991' },
  },

  // === Procedimentos e Técnicas (com MeSH) ===
  'cirurgia robótica': {
    name: 'Cirurgia Robótica',
    type: 'MedicalProcedure',
    url: 'https://pt.wikipedia.org/wiki/Cirurgia_rob%C3%B3tica',
    sameAs: ['https://www.wikidata.org/wiki/Q3320495'],
    medicalCode: { codeValue: 'D065287', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D065287' },
  },
  'hemodiálise': {
    name: 'Hemodiálise',
    type: 'MedicalTherapy',
    url: 'https://pt.wikipedia.org/wiki/Hemodi%C3%A1lise',
    sameAs: ['https://www.wikidata.org/wiki/Q181257'],
    medicalCode: { codeValue: 'D006435', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D006435' },
  },
  'radioterapia': {
    name: 'Radioterapia',
    type: 'MedicalTherapy',
    url: 'https://pt.wikipedia.org/wiki/Radioterapia',
    sameAs: ['https://www.wikidata.org/wiki/Q180507'],
    medicalCode: { codeValue: 'D011878', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D011878' },
  },
  'eletroencefalografia': {
    name: 'Eletroencefalografia',
    type: 'MedicalProcedure',
    url: 'https://pt.wikipedia.org/wiki/Eletroencefalografia',
    sameAs: ['https://www.wikidata.org/wiki/Q183281'],
    medicalCode: { codeValue: 'D004569', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D004569' },
  },
  'ecocardiografia': {
    name: 'Ecocardiografia',
    type: 'MedicalProcedure',
    url: 'https://pt.wikipedia.org/wiki/Ecocardiografia',
    sameAs: ['https://www.wikidata.org/wiki/Q650631'],
    medicalCode: { codeValue: 'D004452', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D004452' },
  },
  'laparoscopia': {
    name: 'Laparoscopia',
    type: 'MedicalProcedure',
    url: 'https://pt.wikipedia.org/wiki/Laparoscopia',
    sameAs: ['https://www.wikidata.org/wiki/Q221175'],
    medicalCode: { codeValue: 'D010535', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D010535' },
  },
  'processamento de sinais': {
    name: 'Processamento de Sinais',
    type: 'DefinedTerm',
    url: 'https://pt.wikipedia.org/wiki/Processamento_de_sinal',
    medicalCode: { codeValue: 'D012815', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D012815' },
  },

  // === Biomateriais, Próteses e Engenharia de Tecidos (com MeSH) ===
  'prótese': {
    name: 'Próteses e Implantes',
    type: 'MedicalDevice',
    url: 'https://pt.wikipedia.org/wiki/Pr%C3%B3tese',
    sameAs: ['https://www.wikidata.org/wiki/Q187964'],
    medicalCode: { codeValue: 'D019736', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D019736' },
  },
  'órtese': {
    name: 'Órteses',
    type: 'MedicalDevice',
    url: 'https://pt.wikipedia.org/wiki/%C3%93rtese',
    medicalCode: { codeValue: 'D009989', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D009989' },
  },
  'biomaterial': {
    name: 'Biomateriais',
    type: 'DefinedTerm',
    url: 'https://pt.wikipedia.org/wiki/Biomaterial',
    sameAs: ['https://www.wikidata.org/wiki/Q862247'],
    medicalCode: { codeValue: 'D001672', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D001672' },
  },
  'engenharia de tecidos': {
    name: 'Engenharia de Tecidos',
    type: 'MedicalSpecialty',
    url: 'https://pt.wikipedia.org/wiki/Engenharia_de_tecidos',
    sameAs: ['https://www.wikidata.org/wiki/Q309482'],
    medicalCode: { codeValue: 'D023822', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D023822' },
  },
  'bioimpressão': {
    name: 'Bioimpressão',
    type: 'DefinedTerm',
    url: 'https://pt.wikipedia.org/wiki/Bioimpress%C3%A3o',
    medicalCode: { codeValue: 'D062028', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D062028' },
  },
  'impressão 3d': {
    name: 'Impressão 3D',
    type: 'DefinedTerm',
    url: 'https://pt.wikipedia.org/wiki/Impress%C3%A3o_3D',
    sameAs: ['https://www.wikidata.org/wiki/Q229367'],
    medicalCode: { codeValue: 'D066330', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D066330' },
  },
  'nanomedicina': {
    name: 'Nanomedicina',
    type: 'MedicalSpecialty',
    url: 'https://pt.wikipedia.org/wiki/Nanomedicina',
    medicalCode: { codeValue: 'D050997', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D050997' },
  },

  // === Saúde Digital e Telemedicina (com MeSH) ===
  'telemedicina': {
    name: 'Telemedicina',
    type: 'MedicalSpecialty',
    url: 'https://pt.wikipedia.org/wiki/Telemedicina',
    sameAs: ['https://www.wikidata.org/wiki/Q387458'],
    medicalCode: { codeValue: 'D017216', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D017216' },
  },

  // === Neuroengenharia e Interfaces (com MeSH) ===
  'interface cérebro-computador': {
    name: 'Interface Cérebro-Computador',
    type: 'MedicalDevice',
    url: 'https://pt.wikipedia.org/wiki/Interface_c%C3%A9rebro%E2%80%93computador',
    sameAs: ['https://www.wikidata.org/wiki/Q387169'],
    medicalCode: { codeValue: 'D062207', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D062207' },
  },
  'crispr': {
    name: 'CRISPR-Cas',
    type: 'DefinedTerm',
    url: 'https://pt.wikipedia.org/wiki/CRISPR',
    sameAs: ['https://www.wikidata.org/wiki/Q15053768'],
    medicalCode: { codeValue: 'D064113', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D064113' },
  },

  // === Tecnologia e IA (com MeSH) ===
  'inteligência artificial': {
    name: 'Inteligência Artificial',
    type: 'DefinedTerm',
    url: 'https://pt.wikipedia.org/wiki/Intelig%C3%AAncia_artificial',
    sameAs: ['https://www.wikidata.org/wiki/Q11660'],
    medicalCode: { codeValue: 'D001185', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D001185' },
  },
  'machine learning': {
    name: 'Machine Learning',
    type: 'DefinedTerm',
    url: 'https://pt.wikipedia.org/wiki/Aprendizado_de_m%C3%A1quina',
    sameAs: ['https://www.wikidata.org/wiki/Q2539'],
    medicalCode: { codeValue: 'D000069550', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D000069550' },
  },
  'deep learning': {
    name: 'Deep Learning',
    type: 'DefinedTerm',
    url: 'https://pt.wikipedia.org/wiki/Aprendizagem_profunda',
    sameAs: ['https://www.wikidata.org/wiki/Q197536'],
    medicalCode: { codeValue: 'D000077321', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D000077321' },
  },
  'wearable': {
    name: 'Dispositivos Eletrônicos Vestíveis',
    type: 'MedicalDevice',
    url: 'https://pt.wikipedia.org/wiki/Tecnologia_vest%C3%ADvel',
    sameAs: ['https://www.wikidata.org/wiki/Q4668750'],
    medicalCode: { codeValue: 'D000076251', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D000076251' },
  },
  'sensor vestível': {
    name: 'Dispositivos Eletrônicos Vestíveis',
    type: 'MedicalDevice',
    url: 'https://pt.wikipedia.org/wiki/Tecnologia_vest%C3%ADvel',
    medicalCode: { codeValue: 'D000076251', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D000076251' },
  },
  'dispositivo médico': {
    name: 'Equipamentos Médicos',
    type: 'MedicalDevice',
    url: 'https://pt.wikipedia.org/wiki/Dispositivo_m%C3%A9dico',
    medicalCode: { codeValue: 'D004865', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D004865' },
  },
  'internet das coisas': {
    name: 'Internet das Coisas',
    type: 'DefinedTerm',
    url: 'https://pt.wikipedia.org/wiki/Internet_das_coisas',
    sameAs: ['https://www.wikidata.org/wiki/Q251212'],
    medicalCode: { codeValue: 'D000080487', codingSystem: 'MeSH', url: 'https://meshb.nlm.nih.gov/record/ui?ui=D000080487' },
  },
};
