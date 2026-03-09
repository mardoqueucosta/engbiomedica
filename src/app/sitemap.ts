import { MetadataRoute } from 'next';
import { artigosMeta } from '@/data/artigos';

const BASE_URL = 'https://engenhariabiomedica.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: '', changeFrequency: 'weekly' as const, priority: 1.0, lastModified: '2026-03-09' },
    { path: '/artigos', changeFrequency: 'daily' as const, priority: 0.9, lastModified: '2026-03-09' },
    { path: '/formacao', changeFrequency: 'monthly' as const, priority: 0.7, lastModified: '2026-03-01' },
    { path: '/mercado', changeFrequency: 'monthly' as const, priority: 0.7, lastModified: '2026-03-01' },
    { path: '/mercado/empresas', changeFrequency: 'monthly' as const, priority: 0.6, lastModified: '2026-03-01' },
    { path: '/regulamentacao', changeFrequency: 'monthly' as const, priority: 0.7, lastModified: '2026-03-01' },
    { path: '/pesquisa', changeFrequency: 'monthly' as const, priority: 0.7, lastModified: '2026-03-01' },
    { path: '/startups/hubs', changeFrequency: 'monthly' as const, priority: 0.6, lastModified: '2026-03-01' },
    { path: '/internacional/repositorios', changeFrequency: 'monthly' as const, priority: 0.6, lastModified: '2026-03-01' },
    { path: '/recursos', changeFrequency: 'monthly' as const, priority: 0.6, lastModified: '2026-03-01' },
    { path: '/glossario', changeFrequency: 'monthly' as const, priority: 0.6, lastModified: '2026-03-09' },
    { path: '/sobre', changeFrequency: 'yearly' as const, priority: 0.4, lastModified: '2026-01-15' },
    { path: '/newsletter', changeFrequency: 'yearly' as const, priority: 0.5, lastModified: '2026-01-15' },
    { path: '/contato', changeFrequency: 'yearly' as const, priority: 0.4, lastModified: '2026-01-15' },
    { path: '/areas-de-atuacao', changeFrequency: 'monthly' as const, priority: 0.7, lastModified: '2026-03-01' },
    { path: '/equipamentos', changeFrequency: 'monthly' as const, priority: 0.7, lastModified: '2026-03-01' },
    { path: '/carreira', changeFrequency: 'monthly' as const, priority: 0.7, lastModified: '2026-03-01' },
    { path: '/carreira/processo-seletivo', changeFrequency: 'weekly' as const, priority: 0.7, lastModified: '2026-03-01' },
  ];

  const pages: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: new Date(page.lastModified),
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
