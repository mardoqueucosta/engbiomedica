import { artigosMeta } from '@/data/artigos';

const BASE_URL = 'https://engenhariabiomedica.com';

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const artigosComImagens = artigosMeta.filter(
    (a) => a.imagens && a.imagens.length > 0
  );

  const urls = artigosComImagens
    .map((artigo) => {
      const images = artigo.imagens!
        .map(
          (img) => `    <image:image>
      <image:loc>${BASE_URL}${img.src}</image:loc>
      <image:title>${escapeXml(img.alt)}</image:title>
      <image:caption>${escapeXml(img.caption)}</image:caption>
    </image:image>`
        )
        .join('\n');

      return `  <url>
    <loc>${BASE_URL}/artigos/${artigo.slug}</loc>
${images}
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  });
}
