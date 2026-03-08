import { test, expect } from '@playwright/test';

test.describe('SEO — Meta tags', () => {
  test('homepage tem title, description e og:image', async ({ page }) => {
    await page.goto('/');

    const title = await page.title();
    expect(title.length).toBeGreaterThan(10);

    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toBeTruthy();
    expect(description!.length).toBeGreaterThan(30);

    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
    expect(ogTitle).toBeTruthy();

    const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');
    expect(ogImage).toBeTruthy();
  });

  test('página de artigo tem meta tags completas', async ({ page }) => {
    // Navegar para um artigo
    await page.goto('/artigos');
    const firstLink = page.locator('a[href^="/artigos/"][href*="-"]').first();
    const href = await firstLink.getAttribute('href');
    await page.goto(href!);

    const title = await page.title();
    expect(title.length).toBeGreaterThan(10);

    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toBeTruthy();

    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical).toBeTruthy();
    expect(canonical).toContain('/artigos/');
  });

  test('/artigos tem canonical', async ({ page }) => {
    await page.goto('/artigos');
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical).toBeTruthy();
    expect(canonical).toContain('/artigos');
  });
});

test.describe('SEO — Sitemap', () => {
  test('sitemap.xml retorna 200 e contém URLs de artigos', async ({ request }) => {
    const response = await request.get('/sitemap.xml');
    expect(response.status()).toBe(200);

    const body = await response.text();
    expect(body).toContain('<urlset');
    expect(body).toContain('/artigos/');

    // Deve ter muitas URLs
    const urlCount = (body.match(/<url>/g) || []).length;
    expect(urlCount).toBeGreaterThanOrEqual(80);
  });

  test('image-sitemap.xml retorna 200 e contém imagens', async ({ request }) => {
    // image-sitemap é grande (~466 imagens) — pode dropar conexão no dev server
    const response = await request.get('/image-sitemap.xml', { timeout: 30_000 });
    expect(response.status()).toBe(200);

    const body = await response.text();
    expect(body).toContain('<urlset');
    expect(body).toContain('image:image');
  });
});

test.describe('SEO — robots.txt', () => {
  test('robots.txt retorna 200 e permite rastreamento', async ({ request }) => {
    const response = await request.get('/robots.txt');
    expect(response.status()).toBe(200);

    const body = await response.text();
    expect(body.toLowerCase()).toContain('user-agent');
    expect(body.toLowerCase()).toContain('sitemap');
  });
});

test.describe('SEO — Schema.org JSON-LD', () => {
  test('artigo tem schema Article ou FAQPage', async ({ page }) => {
    await page.goto('/artigos');
    const firstLink = page.locator('a[href^="/artigos/"][href*="-"]').first();
    const href = await firstLink.getAttribute('href');
    await page.goto(href!);

    const scripts = page.locator('script[type="application/ld+json"]');
    const count = await scripts.count();
    expect(count).toBeGreaterThanOrEqual(1);

    // Pelo menos um schema deve existir
    const firstSchema = await scripts.first().textContent();
    expect(firstSchema).toBeTruthy();
    const parsed = JSON.parse(firstSchema!);

    // Pode ser Article, WebPage, FAQPage, ou BreadcrumbList
    const validTypes = ['Article', 'WebPage', 'FAQPage', 'BreadcrumbList', 'Organization'];
    if (parsed['@type']) {
      expect(validTypes).toContain(parsed['@type']);
    } else if (parsed['@graph']) {
      // Pode ter graph com múltiplos types
      expect(parsed['@graph'].length).toBeGreaterThan(0);
    }
  });
});

test.describe('SEO — OG Image API', () => {
  test('/api/og retorna imagem', async ({ request }) => {
    const response = await request.get('/api/og?title=Test&category=Test');
    expect(response.status()).toBe(200);

    const contentType = response.headers()['content-type'];
    expect(contentType).toContain('image/');
  });
});
