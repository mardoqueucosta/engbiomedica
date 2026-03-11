/**
 * Script para notificar o IndexNow (Bing/Yandex) sobre URLs novas ou atualizadas.
 *
 * Uso:
 *   npx tsx scripts/indexnow.ts          # artigos dos últimos 7 dias
 *   npx tsx scripts/indexnow.ts --days 3 # artigos dos últimos 3 dias
 *   npx tsx scripts/indexnow.ts --all    # todas as URLs do site
 */

// Carrega .env.local apenas quando disponível (local dev)
try { require('dotenv').config({ path: '.env.local' }); } catch {}

const BASE_URL = 'https://engenhariabiomedica.com';

async function main() {
  const apiKey = process.env.INDEXNOW_API_KEY;
  if (!apiKey) {
    console.error('❌ INDEXNOW_API_KEY não definida. Adicione ao .env.local');
    process.exit(1);
  }

  const args = process.argv.slice(2);
  const all = args.includes('--all');
  const daysIdx = args.indexOf('--days');
  const days = daysIdx !== -1 ? args[daysIdx + 1] : '7';

  const params = all ? '?all' : `?days=${days}`;
  const url = `${BASE_URL}/api/indexnow${params}`;

  console.log(`🔔 Enviando URLs ao IndexNow...`);
  console.log(`   Endpoint: ${url}`);

  // Retry até 3 vezes (Railway pode demorar após deploy)
  let lastError: unknown;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}` },
      });

      const text = await response.text();
      let data: any;
      try {
        data = JSON.parse(text);
      } catch {
        if (attempt < 3) {
          console.log(`⏳ Tentativa ${attempt}/3 — resposta não-JSON (site pode estar reiniciando). Aguardando 30s...`);
          await new Promise(r => setTimeout(r, 30_000));
          continue;
        }
        console.error(`❌ Resposta não-JSON após 3 tentativas (${response.status}): ${text.slice(0, 200)}`);
        process.exit(1);
      }

      if (!response.ok) {
        if (attempt < 3 && response.status >= 500) {
          console.log(`⏳ Tentativa ${attempt}/3 — erro ${response.status}. Aguardando 30s...`);
          await new Promise(r => setTimeout(r, 30_000));
          continue;
        }
        console.error(`❌ Erro (${response.status}):`, data);
        process.exit(1);
      }

      // Sucesso
      console.log(`✅ ${data.message}`);
      if (data.urlList) {
        console.log(`\nURLs submetidas:`);
        data.urlList.forEach((u: string) => console.log(`  → ${u}`));
      }
      return;
    } catch (err) {
      lastError = err;
      if (attempt < 3) {
        console.log(`⏳ Tentativa ${attempt}/3 — erro de rede. Aguardando 30s...`);
        await new Promise(r => setTimeout(r, 30_000));
        continue;
      }
    }
  }
  throw lastError;
}

main().catch(err => {
  console.error('❌ Erro inesperado:', err);
  process.exit(1);
});
