import { MetadataRoute } from 'next';
import { artigos } from '@/data/artigos';

const BASE_URL = 'https://engenhariabiomedica.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/formacao',
    '/formacao/graduacao',
    '/formacao/pos-graduacao',
    '/formacao/grade-curricular',
    '/mercado',
    '/mercado/areas-de-atuacao',
    '/mercado/empresas',
    '/mercado/salarios',
    '/regulamentacao',
    '/regulamentacao/anvisa',
    '/regulamentacao/confea-crea',
    '/regulamentacao/normas',
    '/pesquisa',
    '/pesquisa/centros',
    '/pesquisa/financiamento',
    '/startups',
    '/startups/hubs',
    '/artigos',
    '/eventos',
    '/internacional',
    '/internacional/eua',
    '/internacional/repositorios',
    '/recursos',
    '/glossario',
    '/sobre',
    '/newsletter',
    '/contato',
  ];

  const pages: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));

  const artigoPages: MetadataRoute.Sitemap = Object.entries(artigos).map(
    ([slug, artigo]) => ({
      url: `${BASE_URL}/artigos/${slug}`,
      lastModified: new Date(artigo.data),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })
  );

  return [...pages, ...artigoPages];
}
