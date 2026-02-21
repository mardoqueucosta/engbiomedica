import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/dashboard/', '/login/', '/cadastro/'],
    },
    sitemap: [
      'https://engenhariabiomedica.com/sitemap.xml',
      'https://engenhariabiomedica.com/image-sitemap.xml',
    ],
  };
}
