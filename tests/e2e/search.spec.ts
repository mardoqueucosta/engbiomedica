import { test, expect } from '@playwright/test';

test.describe('Busca inline na página /artigos', () => {
  test('campo de busca está visível', async ({ page }) => {
    await page.goto('/artigos');
    const searchInput = page.locator('input[placeholder*="Buscar"]');
    await expect(searchInput).toBeVisible();
  });

  test('busca filtra artigos em tempo real', async ({ page }) => {
    await page.goto('/artigos');
    const searchInput = page.locator('input[placeholder*="Buscar"]');

    // Contar artigos antes da busca
    const allLinks = page.locator('a[href^="/artigos/"]');
    const countBefore = await allLinks.count();
    expect(countBefore).toBeGreaterThan(5);

    // Buscar por um termo específico
    await searchInput.fill('anvisa');
    await page.waitForTimeout(300); // aguardar debounce do Fuse.js

    // Deve mostrar contagem de resultados
    const badge = page.locator('text=/\\d+ artigos? encontrados?/i');
    await expect(badge).toBeVisible({ timeout: 5000 });
  });

  test('busca sem resultados mostra mensagem', async ({ page }) => {
    await page.goto('/artigos');
    const searchInput = page.locator('input[placeholder*="Buscar"]');
    await searchInput.fill('xyztermoquenoexiste123');
    await page.waitForTimeout(300);

    const noResults = page.locator('text=/Nenhum artigo encontrado/i');
    await expect(noResults).toBeVisible({ timeout: 5000 });
  });

  test('limpar busca restaura a listagem completa', async ({ page }) => {
    await page.goto('/artigos');
    const searchInput = page.locator('input[placeholder*="Buscar"]');

    // Buscar e depois limpar
    await searchInput.fill('anvisa');
    await page.waitForTimeout(300);

    // Clicar botão de limpar (X)
    const clearBtn = page.locator('button').filter({ has: page.locator('svg') }).last();
    await searchInput.fill(''); // alternativa: limpar digitando
    await page.waitForTimeout(300);

    // Artigo destaque deve reaparecer (visível sem busca)
    const artigos = page.locator('a[href^="/artigos/"]');
    const count = await artigos.count();
    expect(count).toBeGreaterThan(5);
  });

  test('busca é accent-insensitive', async ({ page }) => {
    await page.goto('/artigos');
    const searchInput = page.locator('input[placeholder*="Buscar"]');

    // Buscar sem acento por algo que tem acento
    await searchInput.fill('regulamentacao');
    await page.waitForTimeout(300);

    const badge = page.locator('text=/\\d+ artigos? encontrados?/i');
    await expect(badge).toBeVisible({ timeout: 5000 });
  });
});

test.describe('Modal de busca global (Ctrl+K)', () => {
  test('Ctrl+K abre o modal de busca', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Control+k');

    // Modal deve aparecer com input
    const modalInput = page.locator('input[placeholder*="Buscar artigos"]');
    await expect(modalInput).toBeVisible({ timeout: 5000 });
  });

  test('ESC fecha o modal', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Control+k');

    const modalInput = page.locator('input[placeholder*="Buscar artigos"]');
    await expect(modalInput).toBeVisible({ timeout: 5000 });

    await page.keyboard.press('Escape');
    await expect(modalInput).not.toBeVisible();
  });

  test('busca no modal retorna resultados', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Control+k');

    const modalInput = page.locator('input[placeholder*="Buscar artigos"]');
    await expect(modalInput).toBeVisible({ timeout: 5000 });

    await modalInput.fill('biomédica');
    await page.waitForTimeout(500);

    // Resultados devem aparecer como links
    const results = page.locator('a[href^="/artigos/"]');
    const count = await results.count();
    expect(count).toBeGreaterThan(0);
  });

  test('ícone de busca no header abre o modal', async ({ page }) => {
    await page.goto('/');

    // Clicar no ícone de busca
    const searchButton = page.locator('button[aria-label*="Buscar"]');
    await searchButton.click();

    const modalInput = page.locator('input[placeholder*="Buscar artigos"]');
    await expect(modalInput).toBeVisible({ timeout: 5000 });
  });
});
