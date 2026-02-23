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
    // /pesquisa/financiamento removido — redireciona para /artigos/editais-financiamento-pesquisa-saude
    { path: '/startups/hubs', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/internacional/repositorios', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/recursos', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/glossario', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/sobre', changeFrequency: 'yearly' as const, priority: 0.4 },
    { path: '/newsletter', changeFrequency: 'yearly' as const, priority: 0.5 },
    { path: '/contato', changeFrequency: 'yearly' as const, priority: 0.4 },
    // Hub pages — novos pilares (apenas hubs, sub-páginas redirecionam para /artigos/)
    { path: '/especialidades', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/equipamentos', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/carreira', changeFrequency: 'monthly' as const, priority: 0.7 },
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
