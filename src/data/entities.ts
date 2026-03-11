/**
 * Entidades conhecidas para entity linking no JSON-LD dos artigos.
 * Cada chave é o termo buscado (lowercase) no conteúdo HTML.
 * O campo `type` mapeia para o @type do Schema.org.
 */

export interface KnownEntity {
  name: string;
  type: 'Organization' | 'GovernmentOrganization' | 'EducationalOrganization' | 'DefinedTerm' | 'MedicalSpecialty';
  url: string;
  sameAs?: string[];
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
};
