import { test, expect } from '@playwright/test';

test.describe('Páginas principais carregam corretamente', () => {
  test('homepage carrega com título e hero', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Engenharia Biom[eé]dica/i);
    // Hero visível
    const heading = page.locator('h1').first();
    await expect(heading).toBeVisible();
  });

  test('/artigos carrega lista de artigos', async ({ page }) => {
    await page.goto('/artigos');
    await expect(page).toHaveTitle(/Artigos/i);
    // Deve haver cards de artigo visíveis na seção principal (não links no header)
    const articleCards = page.locator('section a[href^="/artigos/"]');
    await expect(articleCards.first()).toBeVisible();
    const count = await articleCards.count();
    expect(count).toBeGreaterThanOrEqual(10);
  });

  test('/artigos/[slug] carrega artigo individual', async ({ page }) => {
    // Navegar primeiro para /artigos e pegar um link de artigo
    await page.goto('/artigos');
    const firstLink = page.locator('a[href^="/artigos/"][href*="-"]').first();
    const href = await firstLink.getAttribute('href');
    expect(href).toBeTruthy();

    await page.goto(href!);
    // Artigo deve ter título h1
    const title = page.locator('h1').first();
    await expect(title).toBeVisible();
    // Conteúdo do artigo deve estar presente
    const content = page.locator('article, [class*="prose"], main');
    await expect(content.first()).toBeVisible();
  });

  test('/areas-de-atuacao carrega', async ({ page }) => {
    const response = await page.goto('/areas-de-atuacao');
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('/newsletter carrega', async ({ page }) => {
    const response = await page.goto('/newsletter');
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('/sobre carrega', async ({ page }) => {
    const response = await page.goto('/sobre');
    expect(response?.status()).toBe(200);
  });
});

test.describe('Layout e navegação', () => {
  test('header possui logo e navegação', async ({ page }) => {
    await page.goto('/');
    // Logo ou link para home
    const homeLink = page.locator('header a[href="/"]');
    await expect(homeLink.first()).toBeVisible();
  });

  test('footer possui links e TikTok', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    // Link do TikTok no footer
    const tiktokLink = page.locator('footer a[href*="tiktok"]');
    await expect(tiktokLink).toBeVisible();
  });

  test('breadcrumbs presentes em páginas de artigo', async ({ page }) => {
    await page.goto('/artigos');
    const firstLink = page.locator('section a[href^="/artigos/"][href*="-"]').first();
    const href = await firstLink.getAttribute('href');
    await page.goto(href!);
    // Breadcrumb: nav com link "Início" apontando para /
    const breadcrumbNav = page.locator('nav:has(a[href="/"])').filter({ hasText: 'Início' });
    await expect(breadcrumbNav.first()).toBeVisible();
  });
});
