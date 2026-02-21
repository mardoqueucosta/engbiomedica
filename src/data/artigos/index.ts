/**
 * Re-exporta metadados leves e a função de carregamento individual.
 * Nenhuma página precisa mais importar todos os artigos completos de uma vez.
 */
export type { Artigo } from './types';
export type { ArtigoMeta } from './metadata';
export { artigosMeta, artigosMetaMap } from './metadata';
export { getArtigo } from './getArtigo';

/** Lista formatada para a página /artigos (retrocompatível com listaArtigos) */
export { artigosMeta as listaArtigos } from './metadata';

/** Slugs disponíveis para generateStaticParams */
export const slugs = [
  'guia-engenharia-biomedica',
  'historia-engenharia-biomedica-brasil',
  'o-que-faz-engenheiro-biomedico',
  'areas-atuacao-engenharia-biomedica',
  'diferenca-engenharia-biomedica-biomedicina',
  'curso-engenharia-biomedica-o-que-esperar',
  'grade-curricular-engenharia-biomedica',
  'faculdades-engenharia-biomedica-brasil',
  'nota-corte-engenharia-biomedica-sisu',
  'pos-graduacao-engenharia-biomedica',
  'salario-engenheiro-biomedico',
  'mercado-trabalho-engenharia-biomedica',
  'mercado-dispositivos-medicos-brasil',
  'empresas-engenharia-biomedica-brasil',
  'healthtechs-brasil-ecossistema',
  'registro-crea-engenheiro-biomedico',
  'anvisa-dispositivos-medicos-regulamentacao',
  'normas-tecnicas-engenharia-biomedica',
  'centros-pesquisa-engenharia-biomedica',
  'tendencias-futuro-engenharia-biomedica',
  'engenharia-biomedica-eua-vs-brasil',
  'calendario-eventos-engenharia-biomedica-2026',
  'medtronic-obtem-autorizacao-da-fda-para-sistema-robotico-esp',
  'dispositivos-medicos-vestiveis-em-ascensao-os-quatro-compone',
  'anvisa-aprova-sistema-de-rastreamento-e-identificacao-de-dis',
  'qmsr-e-ciberseguranca-da-fda-requisitos-essenciais-para-disp',
  'aprovacao-fda-para-empresas-internacionais-o-que-o-caso-do-p',
  'como-funciona-a-anvisa-estrutura-atribuicoes-e-o-papel-na-re',
  'acoes-de-dispositivos-medicos-como-investir-no-setor-em-2026',
  'novocure-recebe-aprovacao-da-fda-para-tratar-cancer-de-pancr',
  'sensores-vestiveis-saude-2026',
  'ressonancia-magnetica-ge-healthcare-signa-fda-2026',
  'engenharia-biomedica-vale-a-pena',
  'engenharia-biomedica-vale-a-pena-v2',
  'quanto-ganha-engenheiro-biomedico-2026',
  'todas-faculdades-engenharia-biomedica-brasil-ranking',
];