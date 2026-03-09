/**
 * Script para notificar a Google Indexing API sobre URLs novas ou atualizadas.
 *
 * Uso:
 *   npx tsx scripts/google-indexing.ts          # artigos dos últimos 7 dias
 *   npx tsx scripts/google-indexing.ts --days 3 # artigos dos últimos 3 dias
 *   npx tsx scripts/google-indexing.ts --all    # todas as URLs do site
 *
 * Limite: 200 URLs/dia (cota da Google Indexing API)
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

  if (!process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
    console.error('❌ GOOGLE_SERVICE_ACCOUNT_JSON não definida. Adicione ao .env.local');
    process.exit(1);
  }

  const args = process.argv.slice(2);
  const all = args.includes('--all');
  const daysIdx = args.indexOf('--days');
  const days = daysIdx !== -1 ? args[daysIdx + 1] : '7';

  const params = all ? '?all' : `?days=${days}`;
  const url = `${BASE_URL}/api/google-indexing${params}`;

  console.log(`🔔 Enviando URLs à Google Indexing API...`);
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

  if (data.results?.length) {
    console.log(`\nURLs submetidas:`);
    data.results.forEach((r: { url: string }) => console.log(`  ✓ ${r.url}`));
  }

  if (data.errors?.length) {
    console.log(`\n⚠️  Erros:`);
    data.errors.forEach((e: { url: string; error: string }) =>
      console.log(`  ✗ ${e.url} — ${e.error}`)
    );
  }
}

main().catch(err => {
  console.error('❌ Erro inesperado:', err);
  process.exit(1);
});
