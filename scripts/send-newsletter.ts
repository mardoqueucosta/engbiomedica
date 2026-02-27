import { Resend } from 'resend';
import { render } from '@react-email/render';
import { NewsletterDigest } from '../src/emails/newsletter-digest';
import {
  getRecentArticles,
  getLatestArticles,
  getArticleImage,
} from './article-utils';

// ─── Configuração ────────────────────────────────────────────────
const FROM_EMAIL =
  process.env.FROM_EMAIL || 'Newsletter <newsletter@mail.engenhariabiomedica.com>';
const BASE_URL = process.env.BASE_URL || 'https://engenhariabiomedica.com';
const SEGMENT_ID = process.env.RESEND_SEGMENT_ID!;
const SLACK_WEBHOOK = process.env.SLACK_WEBHOOK_URL;

// Data de lançamento da newsletter — ajustar ao primeiro envio real
const LAUNCH_DATE = new Date('2026-03-01');
const MAX_SECONDARY_ARTICLES = 4;
const RECENT_DAYS = 16; // 14 + 2 dias de margem

// ─── Helpers ─────────────────────────────────────────────────────

function calculateIssueNumber(): number {
  const now = new Date();
  const diffMs = now.getTime() - LAUNCH_DATE.getTime();
  const diffWeeks = Math.floor(diffMs / (7 * 24 * 60 * 60 * 1000));
  return Math.max(1, Math.floor(diffWeeks / 2) + 1);
}

function log(level: 'INFO' | 'WARN' | 'ERROR', msg: string, data?: unknown) {
  const ts = new Date().toISOString();
  const extra = data ? ' ' + JSON.stringify(data) : '';
  console.log(`[${ts}] [${level}] ${msg}${extra}`);
}

async function notifySlack(text: string) {
  if (!SLACK_WEBHOOK) return;
  try {
    await fetch(SLACK_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
  } catch {
    log('WARN', 'Falha ao notificar Slack');
  }
}

// ─── Pipeline principal ──────────────────────────────────────────

async function main() {
  const dryRun =
    process.argv.includes('--dry-run') || process.env.DRY_RUN === 'true';

  console.log('═══════════════════════════════════════════');
  console.log('  Newsletter — engenhariabiomedica.com');
  console.log('═══════════════════════════════════════════');
  log('INFO', `Modo: ${dryRun ? 'DRY RUN' : 'ENVIO REAL'}`);

  // 1. Buscar artigos
  let articles = getRecentArticles(RECENT_DAYS);
  let usedFallback = false;

  if (articles.length === 0) {
    log('WARN', `Nenhum artigo nos últimos ${RECENT_DAYS} dias — usando fallback`);
    articles = getLatestArticles(MAX_SECONDARY_ARTICLES + 1);
    usedFallback = true;
  }

  if (articles.length === 0) {
    log('ERROR', 'Nenhum artigo encontrado no acervo. Abortando.');
    process.exit(1);
  }

  const [featured, ...rest] = articles;
  const secondaryArticles = rest.slice(0, MAX_SECONDARY_ARTICLES);
  const featuredImage = getArticleImage(featured);
  const issueNumber = calculateIssueNumber();

  log('INFO', `Edição: #${issueNumber}`);
  log('INFO', `Destaque: "${featured.titulo}"`);
  log('INFO', `Artigos secundários: ${secondaryArticles.length}`);
  log('INFO', `Imagem destaque: ${featuredImage || '(sem imagem)'}`);
  if (usedFallback) {
    log('WARN', 'Usando artigos do acervo (sem publicações novas)');
  }

  // 2. Renderizar HTML
  const html = await render(
    NewsletterDigest({
      issueNumber,
      featured,
      featuredImage,
      articles: secondaryArticles,
      baseUrl: BASE_URL,
    })
  );

  const subject = `Newsletter #${issueNumber} — ${featured.titulo}`;
  log('INFO', `HTML renderizado: ${html.length} caracteres`);

  // 3. Dry run: exibir preview e sair
  if (dryRun) {
    console.log('');
    console.log('──── DRY RUN ────────────────────────────');
    console.log(`  Assunto: ${subject}`);
    console.log(`  De: ${FROM_EMAIL}`);
    console.log(`  Segment ID: ${SEGMENT_ID || '(não definido)'}`);
    console.log(`  HTML: ${html.length} caracteres`);
    console.log('');
    console.log('  Primeiros 500 caracteres do HTML:');
    console.log(`  ${html.substring(0, 500)}...`);
    console.log('');
    console.log('DRY RUN completo. Nenhum email enviado.');
    return;
  }

  // 4. Validação pré-envio
  if (!process.env.RESEND_API_KEY) {
    log('ERROR', 'RESEND_API_KEY não definida. Abortando.');
    process.exit(1);
  }
  if (!SEGMENT_ID) {
    log('ERROR', 'RESEND_SEGMENT_ID não definido. Abortando.');
    process.exit(1);
  }

  // 5. Criar broadcast (draft)
  const resend = new Resend(process.env.RESEND_API_KEY);
  const broadcastName = `newsletter-${issueNumber}-${new Date().toISOString().split('T')[0]}`;

  const { data: createData, error: createError } = await resend.broadcasts.create({
    segmentId: SEGMENT_ID,
    from: FROM_EMAIL,
    subject,
    html,
    name: broadcastName,
  });

  if (createError || !createData?.id) {
    log('ERROR', 'Falha ao criar broadcast', createError);
    await notifySlack(
      `[NEWSLETTER ERRO] Falha ao criar broadcast #${issueNumber}: ${JSON.stringify(createError)}`
    );
    process.exit(1);
  }

  log('INFO', `Broadcast draft criado: ${createData.id} (${broadcastName})`);

  // 6. Enviar broadcast
  const { data: sendData, error: sendError } = await resend.broadcasts.send(
    createData.id
  );

  if (sendError) {
    log('ERROR', 'Falha ao enviar broadcast', sendError);
    await notifySlack(
      `[NEWSLETTER ERRO] Falha ao enviar broadcast #${issueNumber} (${createData.id}): ${JSON.stringify(sendError)}`
    );
    process.exit(1);
  }

  log('INFO', `Newsletter #${issueNumber} enviada com sucesso! ID: ${sendData?.id}`);
  await notifySlack(
    `[NEWSLETTER] Newsletter #${issueNumber} enviada! Broadcast ID: ${sendData?.id}`
  );
}

// ─── Execução ────────────────────────────────────────────────────

main().catch((err) => {
  log('ERROR', 'Erro inesperado', err);
  process.exit(1);
});
