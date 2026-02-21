/**
 * Carrega o conteúdo completo de um artigo por slug.
 * Usado apenas em [slug]/page.tsx — evita carregar todos os artigos no bundle.
 */
import { Artigo } from './types';

const artigoModules: Record<string, () => Promise<{ artigo: Artigo }>> = {
  'guia-engenharia-biomedica': () => import('./guia-engenharia-biomedica'),
  'historia-engenharia-biomedica-brasil': () => import('./historia-engenharia-biomedica-brasil'),
  'o-que-faz-engenheiro-biomedico': () => import('./o-que-faz-engenheiro-biomedico'),
  'areas-atuacao-engenharia-biomedica': () => import('./areas-atuacao-engenharia-biomedica'),
  'diferenca-engenharia-biomedica-biomedicina': () => import('./diferenca-engenharia-biomedica-biomedicina'),
  'curso-engenharia-biomedica-o-que-esperar': () => import('./curso-engenharia-biomedica-o-que-esperar'),
  'grade-curricular-engenharia-biomedica': () => import('./grade-curricular-engenharia-biomedica'),
  'faculdades-engenharia-biomedica-brasil': () => import('./faculdades-engenharia-biomedica-brasil'),
  'nota-corte-engenharia-biomedica-sisu': () => import('./nota-corte-engenharia-biomedica-sisu'),
  'pos-graduacao-engenharia-biomedica': () => import('./pos-graduacao-engenharia-biomedica'),
  'salario-engenheiro-biomedico': () => import('./salario-engenheiro-biomedico'),
  'mercado-trabalho-engenharia-biomedica': () => import('./mercado-trabalho-engenharia-biomedica'),
  'mercado-dispositivos-medicos-brasil': () => import('./mercado-dispositivos-medicos-brasil'),
  'empresas-engenharia-biomedica-brasil': () => import('./empresas-engenharia-biomedica-brasil'),
  'healthtechs-brasil-ecossistema': () => import('./healthtechs-brasil-ecossistema'),
  'registro-crea-engenheiro-biomedico': () => import('./registro-crea-engenheiro-biomedico'),
  'anvisa-dispositivos-medicos-regulamentacao': () => import('./anvisa-dispositivos-medicos-regulamentacao'),
  'normas-tecnicas-engenharia-biomedica': () => import('./normas-tecnicas-engenharia-biomedica'),
  'centros-pesquisa-engenharia-biomedica': () => import('./centros-pesquisa-engenharia-biomedica'),
  'tendencias-futuro-engenharia-biomedica': () => import('./tendencias-futuro-engenharia-biomedica'),
  'engenharia-biomedica-eua-vs-brasil': () => import('./engenharia-biomedica-eua-vs-brasil'),
  'calendario-eventos-engenharia-biomedica-2026': () => import('./calendario-eventos-engenharia-biomedica-2026'),
  'medtronic-obtem-autorizacao-da-fda-para-sistema-robotico-esp': () => import('./medtronic-obtem-autorizacao-da-fda-para-sistema-robotico-esp'),
  'dispositivos-medicos-vestiveis-em-ascensao-os-quatro-compone': () => import('./dispositivos-medicos-vestiveis-em-ascensao-os-quatro-compone'),
  'anvisa-aprova-sistema-de-rastreamento-e-identificacao-de-dis': () => import('./anvisa-aprova-sistema-de-rastreamento-e-identificacao-de-dis'),
  'qmsr-e-ciberseguranca-da-fda-requisitos-essenciais-para-disp': () => import('./qmsr-e-ciberseguranca-da-fda-requisitos-essenciais-para-disp'),
  'aprovacao-fda-para-empresas-internacionais-o-que-o-caso-do-p': () => import('./aprovacao-fda-para-empresas-internacionais-o-que-o-caso-do-p'),
  'como-funciona-a-anvisa-estrutura-atribuicoes-e-o-papel-na-re': () => import('./como-funciona-a-anvisa-estrutura-atribuicoes-e-o-papel-na-re'),
  'acoes-de-dispositivos-medicos-como-investir-no-setor-em-2026': () => import('./acoes-de-dispositivos-medicos-como-investir-no-setor-em-2026'),
  'novocure-recebe-aprovacao-da-fda-para-tratar-cancer-de-pancr': () => import('./novocure-recebe-aprovacao-da-fda-para-tratar-cancer-de-pancr'),
  'sensores-vestiveis-saude-2026': () => import('./sensores-vestiveis-saude-2026'),
  'ressonancia-magnetica-ge-healthcare-signa-fda-2026': () => import('./ressonancia-magnetica-ge-healthcare-signa-fda-2026'),
  'engenharia-biomedica-vale-a-pena': () => import('./engenharia-biomedica-vale-a-pena'),
  'engenharia-biomedica-vale-a-pena-v2': () => import('./engenharia-biomedica-vale-a-pena-v2'),
  'quanto-ganha-engenheiro-biomedico-2026': () => import('./quanto-ganha-engenheiro-biomedico-2026'),
  'todas-faculdades-engenharia-biomedica-brasil-ranking': () => import('./todas-faculdades-engenharia-biomedica-brasil-ranking'),
  'grade-curricular-engenharia-biomedica-5-anos': () => import('./grade-curricular-engenharia-biomedica-5-anos'),
};

export async function getArtigo(slug: string): Promise<Artigo | null> {
  const loader = artigoModules[slug];
  if (!loader) return null;
  const mod = await loader();
  return mod.artigo;
}
