import { MetadataRoute } from 'next';
import { artigosMeta } from '@/data/artigos';

const BASE_URL = 'https://engenhariabiomedica.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: '', changeFrequency: 'weekly' as const, priority: 1.0 },
    { path: '/artigos', changeFrequency: 'daily' as const, priority: 0.9 },
    { path: '/formacao', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/mercado', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/mercado/empresas', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/regulamentacao', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/pesquisa', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/pesquisa/financiamento', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/startups/hubs', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/internacional/repositorios', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/recursos', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/glossario', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/sobre', changeFrequency: 'yearly' as const, priority: 0.4 },
    { path: '/newsletter', changeFrequency: 'yearly' as const, priority: 0.5 },
    { path: '/contato', changeFrequency: 'yearly' as const, priority: 0.4 },
    // Hub pages — novos pilares
    { path: '/especialidades', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/equipamentos', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/carreira', changeFrequency: 'monthly' as const, priority: 0.7 },
    // Especialidades
    { path: '/especialidades/engenharia-clinica', changeFrequency: 'monthly' as const, priority: 0.5 },
    { path: '/especialidades/instrumentacao-biomedica', changeFrequency: 'monthly' as const, priority: 0.5 },
    { path: '/especialidades/processamento-sinais-imagens', changeFrequency: 'monthly' as const, priority: 0.5 },
    { path: '/especialidades/biomecanica-reabilitacao', changeFrequency: 'monthly' as const, priority: 0.5 },
    { path: '/especialidades/biomateriais-engenharia-tecidos', changeFrequency: 'monthly' as const, priority: 0.5 },
    { path: '/especialidades/informatica-saude', changeFrequency: 'monthly' as const, priority: 0.5 },
    { path: '/especialidades/inteligencia-artificial-saude', changeFrequency: 'monthly' as const, priority: 0.5 },
    { path: '/especialidades/neuroengenharia', changeFrequency: 'monthly' as const, priority: 0.5 },
    { path: '/especialidades/robotica-medica', changeFrequency: 'monthly' as const, priority: 0.5 },
    // Equipamentos
    { path: '/equipamentos/centro-cirurgico', changeFrequency: 'monthly' as const, priority: 0.5 },
    { path: '/equipamentos/uti', changeFrequency: 'monthly' as const, priority: 0.5 },
    { path: '/equipamentos/diagnostico-imagem', changeFrequency: 'monthly' as const, priority: 0.5 },
    { path: '/equipamentos/manutencao-hospitalar', changeFrequency: 'monthly' as const, priority: 0.5 },
    { path: '/equipamentos/gestao-parque-tecnologico', changeFrequency: 'monthly' as const, priority: 0.5 },
    { path: '/equipamentos/indicadores-engenharia-clinica', changeFrequency: 'monthly' as const, priority: 0.5 },
    // Carreira
    { path: '/carreira/roadmap-engenheiro-biomedico', changeFrequency: 'monthly' as const, priority: 0.5 },
    { path: '/carreira/certificacoes', changeFrequency: 'monthly' as const, priority: 0.5 },
    { path: '/carreira/cursos-especializacoes', changeFrequency: 'monthly' as const, priority: 0.5 },
    { path: '/carreira/estagio-primeiro-emprego', changeFrequency: 'monthly' as const, priority: 0.5 },
    { path: '/carreira/transicao-carreira', changeFrequency: 'monthly' as const, priority: 0.5 },
    { path: '/carreira/livros-engenharia-biomedica', changeFrequency: 'monthly' as const, priority: 0.5 },
    // Regulamentação — novas
    { path: '/regulamentacao/certificacao-inmetro', changeFrequency: 'monthly' as const, priority: 0.5 },
    { path: '/regulamentacao/software-dispositivo-medico-samd', changeFrequency: 'monthly' as const, priority: 0.5 },
    // Pesquisa — novas
    { path: '/pesquisa/publicacao-cientifica', changeFrequency: 'monthly' as const, priority: 0.5 },
    { path: '/pesquisa/ferramentas-python-matlab', changeFrequency: 'monthly' as const, priority: 0.5 },
  ];

  const pages: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const guiaSlug = 'guia-engenharia-biomedica';

  const artigoPages: MetadataRoute.Sitemap = artigosMeta.map((a) => ({
    url: `${BASE_URL}/artigos/${a.slug}`,
    lastModified: new Date(a.data),
    changeFrequency: 'daily' as const,
    priority: a.slug === guiaSlug ? 0.9 : 0.8,
  }));

  return [...pages, ...artigoPages];
}
