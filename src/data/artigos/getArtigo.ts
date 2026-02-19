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
  'medtronic-nets-fda-clearance-for-robotic-spine-system': () => import('./medtronic-nets-fda-clearance-for-robotic-spine-system'),
  'wearable-medical-devices-surge-with-supply-chain-of-four-cor': () => import('./wearable-medical-devices-surge-with-supply-chain-of-four-cor'),
  'anvisa-aprova-sistema-para-rastreamento-e-identificacao-de-d': () => import('./anvisa-aprova-sistema-para-rastreamento-e-identificacao-de-d'),
  'understanding-fdas-qmsr-and-cybersecurity-mandates-for-medic': () => import('./understanding-fdas-qmsr-and-cybersecurity-mandates-for-medic'),
  'great-stone-resident-secures-fda-approval-enters-us-market-w': () => import('./great-stone-resident-secures-fda-approval-enters-us-market-w'),
  'fda-gives-approval-for-first-of-its-kind-device-harlan-enter': () => import('./fda-gives-approval-for-first-of-its-kind-device-harlan-enter'),
};

export async function getArtigo(slug: string): Promise<Artigo | null> {
  const loader = artigoModules[slug];
  if (!loader) return null;
  const mod = await loader();
  return mod.artigo;
}
