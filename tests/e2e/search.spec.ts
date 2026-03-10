import { test, expect, type Page } from '@playwright/test';

/**
 * Helper: aguarda hydration do React (production build).
 * O SearchModal registra um useEffect com listener de Ctrl+K.
 * Quando o botão de busca no header está visível, o React já hidratou.
 */
async function waitForHydration(page: Page) {
  await page.waitForLoadState('networkidle');
  await expect(page.locator('button[aria-label*="Buscar"]')).toBeVisible({ timeout: 10_000 });
}

test.describe('Busca inline na página /artigos', () => {
  test('campo de busca está visível', async ({ page }) => {
    await page.goto('/artigos');
    const searchInput = page.locator('input[placeholder*="Buscar"]');
    await expect(searchInput).toBeVisible();
  });

  test('busca filtra artigos em tempo real', async ({ page }) => {
    await page.goto('/artigos');
    await waitForHydration(page);

    const searchInput = page.locator('input[placeholder*="Buscar"]');

    // Contar artigos antes da busca
    const allLinks = page.locator('main a[href^="/artigos/"]');
    const countBefore = await allLinks.count();
    expect(countBefore).toBeGreaterThan(5);

    // Buscar por um termo específico
    await searchInput.click();
    await searchInput.fill('anvisa');

    // Deve mostrar contagem de resultados (usando getByText com regex)
    await expect(page.getByText(/\d+ artigos? encontrados?/i).first()).toBeVisible({ timeout: 10_000 });
  });

  test('busca sem resultados mostra mensagem', async ({ page }) => {
    await page.goto('/artigos');
    await waitForHydration(page);

    const searchInput = page.locator('input[placeholder*="Buscar"]');
    await searchInput.click();
    await searchInput.fill('xyztermoquenoexiste123');

    await expect(page.getByText(/Nenhum artigo encontrado/i).first()).toBeVisible({ timeout: 10_000 });
  });

  test('limpar busca restaura a listagem completa', async ({ page }) => {
    await page.goto('/artigos');
    await waitForHydration(page);

    const searchInput = page.locator('input[placeholder*="Buscar"]');

    // Buscar e depois limpar
    await searchInput.click();
    await searchInput.fill('anvisa');
    await expect(page.getByText(/\d+ artigos? encontrados?/i).first()).toBeVisible({ timeout: 10_000 });

    // Limpar busca
    await searchInput.fill('');

    // Artigos devem reaparecer
    const artigos = page.locator('main a[href^="/artigos/"]');
    await expect(artigos.first()).toBeVisible({ timeout: 10_000 });
    const count = await artigos.count();
    expect(count).toBeGreaterThan(5);
  });

  test('busca é accent-insensitive', async ({ page }) => {
    await page.goto('/artigos');
    await waitForHydration(page);

    const searchInput = page.locator('input[placeholder*="Buscar"]');
    await searchInput.click();
    await searchInput.fill('regulamentacao');

    await expect(page.getByText(/\d+ artigos? encontrados?/i).first()).toBeVisible({ timeout: 10_000 });
  });
});

test.describe('Modal de busca global (Ctrl+K)', () => {
  test('Ctrl+K abre o modal de busca', async ({ page }) => {
    await page.goto('/');
    await waitForHydration(page);

    await page.keyboard.press('Control+k');

    const modalInput = page.locator('input[placeholder*="Buscar artigos"]');
    await expect(modalInput).toBeVisible({ timeout: 10_000 });
  });

  test('ESC fecha o modal', async ({ page }) => {
    await page.goto('/');
    await waitForHydration(page);

    await page.keyboard.press('Control+k');

    const modalInput = page.locator('input[placeholder*="Buscar artigos"]');
    await expect(modalInput).toBeVisible({ timeout: 10_000 });

    await page.keyboard.press('Escape');
    await expect(modalInput).not.toBeVisible();
  });

  test('busca no modal retorna resultados', async ({ page }) => {
    await page.goto('/');
    await waitForHydration(page);

    await page.keyboard.press('Control+k');

    const modalInput = page.locator('input[placeholder*="Buscar artigos"]');
    await expect(modalInput).toBeVisible({ timeout: 10_000 });

    await modalInput.fill('biomédica');

    // Aguardar carregamento dos dados da API e resultados no modal
    // Os resultados aparecem como links dentro do modal overlay (div com z-[100])
    const modalResults = page.locator('.fixed a[href^="/artigos/"]');
    await expect(modalResults.first()).toBeVisible({ timeout: 10_000 });
    const count = await modalResults.count();
    expect(count).toBeGreaterThan(0);
  });

  test('ícone de busca no header abre o modal', async ({ page }) => {
    await page.goto('/');
    await waitForHydration(page);

    const searchButton = page.locator('button[aria-label*="Buscar"]');
    await searchButton.click();

    const modalInput = page.locator('input[placeholder*="Buscar artigos"]');
    await expect(modalInput).toBeVisible({ timeout: 10_000 });
  });
});
