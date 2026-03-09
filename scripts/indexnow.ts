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

  const response = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}` },
  });

  const data = await response.json();

  if (!response.ok) {
    console.error(`❌ Erro (${response.status}):`, data);
    process.exit(1);
  }

  console.log(`✅ ${data.message}`);
  if (data.urlList) {
    console.log(`\nURLs submetidas:`);
    data.urlList.forEach((u: string) => console.log(`  → ${u}`));
  }
}

main().catch(err => {
  console.error('❌ Erro inesperado:', err);
  process.exit(1);
});
