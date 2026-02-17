import { MetadataRoute } from 'next';
import { artigos } from '@/data/artigos';

const BASE_URL = 'https://engenhariabiomedica.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: '', changeFrequency: 'weekly' as const, priority: 1.0 },
    { path: '/artigos', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: '/formacao', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/formacao/graduacao', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/formacao/pos-graduacao', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/formacao/grade-curricular', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/mercado', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/mercado/areas-de-atuacao', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/mercado/empresas', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/mercado/salarios', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/regulamentacao', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/regulamentacao/anvisa', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/regulamentacao/confea-crea', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/regulamentacao/normas', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/pesquisa', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/pesquisa/centros', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/pesquisa/financiamento', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/startups', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/startups/hubs', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/eventos', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/internacional', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/internacional/eua', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/internacional/repositorios', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/recursos', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/glossario', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/sobre', changeFrequency: 'yearly' as const, priority: 0.4 },
    { path: '/newsletter', changeFrequency: 'yearly' as const, priority: 0.5 },
    { path: '/contato', changeFrequency: 'yearly' as const, priority: 0.4 },
  ];

  const pages: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const guiaSlug = 'guia-engenharia-biomedica';

  const artigoPages: MetadataRoute.Sitemap = Object.entries(artigos).map(
    ([slug, artigo]) => ({
      url: `${BASE_URL}/artigos/${slug}`,
      lastModified: new Date(artigo.data),
      changeFrequency: 'monthly' as const,
      priority: slug === guiaSlug ? 0.9 : 0.8,
    })
  );

  return [...pages, ...artigoPages];
}
