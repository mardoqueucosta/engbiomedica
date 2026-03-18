/**
 * Script de publicação completa:
 * 1. git push origin main (triggers GitHub Actions deploy)
 * 2. Aguarda deploy (~3 min)
 * 3. Notifica IndexNow (Bing/Yandex)
 * 4. Notifica Google Indexing API
 *
 * Uso:
 *   npm run publish          # push + indexação dos últimos 7 dias
 *   npm run publish:all      # push + indexação de todas as URLs
 */

try { require('dotenv').config({ path: '.env.local' }); } catch {}

import { execSync } from 'child_process';

const BASE_URL = 'https://engenhariabiomedica.com';
const DEPLOY_WAIT_MS = 180_000; // 3 minutos (GitHub Actions + build Docker)

async function callApi(path: string, label: string) {
  const apiKey = process.env.INDEXNOW_API_KEY;
  if (!apiKey) {
    console.error(`  ⚠️  ${label}: INDEXNOW_API_KEY não definida, pulando.`);
    return;
  }

  const response = await fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}` },
  });

  const data = await response.json();

  if (!response.ok) {
    console.error(`  ❌ ${label}: Erro (${response.status})`, data.error);
    return;
  }

  const count = data.urls ?? data.submitted ?? 0;
  console.log(`  ✅ ${label}: ${count} URL(s) submetidas`);
}

async function main() {
  const args = process.argv.slice(2);
  const all = args.includes('--all');
  const params = all ? '?all' : '?days=7';

  // 1. Git push
  console.log('\n📤 Fazendo push para origin/main...');
  try {
    const output = execSync('git push origin main', { encoding: 'utf-8', stdio: 'pipe' });
    console.log('  ✅ Push realizado');
    if (output.trim()) console.log(`  ${output.trim()}`);
  } catch (err: unknown) {
    const stderr = (err as { stderr?: string }).stderr ?? '';
    if (stderr.includes('Everything up-to-date')) {
      console.log('  ℹ️  Nenhuma mudança para enviar (up-to-date)');
    } else {
      console.error('  ❌ Erro no push:', stderr);
      process.exit(1);
    }
  }

  // 2. Aguardar deploy (GitHub Actions → VPS)
  console.log(`\n⏳ Aguardando deploy via GitHub Actions (${DEPLOY_WAIT_MS / 1000}s)...`);
  await new Promise(resolve => setTimeout(resolve, DEPLOY_WAIT_MS));
  console.log('  ✅ Deploy provavelmente concluído');

  // 3. Notificar buscadores
  console.log('\n🔔 Notificando buscadores...');
  await callApi(`/api/indexnow${params}`, 'IndexNow (Bing/Yandex)');
  await callApi(`/api/google-indexing${params}`, 'Google Indexing API');

  console.log('\n🎉 Publicação concluída!\n');
}

main().catch(err => {
  console.error('❌ Erro inesperado:', err);
  process.exit(1);
});
