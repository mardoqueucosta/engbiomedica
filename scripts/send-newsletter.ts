import { Resend } from 'resend';
import { render } from '@react-email/render';
import { NewsletterEmail } from '../src/emails/newsletter-template';

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendNewsletter(dryRun = false) {
  const html = await render(
    NewsletterEmail({
      firstNameVariable: '{{{FIRST_NAME|leitor(a)}}}',
      previewText: 'Tendências em Engenharia Biomédica para 2026',
      title: 'Newsletter #1 — Tendências em Engenharia Biomédica',
      content: 'conteúdo da newsletter aqui...',
      unsubscribeUrl: 'https://engenhariabiomedica.com/unsubscribe?email={{{EMAIL}}}',
    })
  );

  if (dryRun) {
    console.log('=== DRY RUN ===\n', html.substring(0, 500), '...');
    console.log(`HTML total: ${html.length} caracteres`);
    return;
  }

  const { data, error } = await resend.broadcasts.create({
    segmentId: process.env.RESEND_SEGMENT_ID!,
    from: 'Newsletter <newsletter@mail.engenhariabiomedica.com>',
    subject: 'Newsletter #1 — Tendências em Engenharia Biomédica',
    html,
    send: true,
  });

  if (error) { console.error('Erro no broadcast:', error); return; }
  console.log('Broadcast enviado! ID:', data?.id);
}

const dryRun = process.argv.includes('--dry-run');
sendNewsletter(dryRun);
// Uso: npx ts-node scripts/send-newsletter.ts [--dry-run]
