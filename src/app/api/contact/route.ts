export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { getSubscribeRatelimit } from '@/lib/ratelimit';
import { verifyTurnstile } from '@/lib/turnstile';

const SUBJECT_LABELS: Record<string, string> = {
  duvida: 'Dúvida sobre conteúdo',
  sugestao: 'Sugestão de tema ou melhoria',
  parceria: 'Parceria ou colaboração',
  correcao: 'Correção de informação',
  glossario: 'Sugerir termo para o glossário',
  outro: 'Outro',
};

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const body = await req.json();
  const { name, email, subject, message, company_fax, turnstileToken } = body;

  // Honeypot
  if (company_fax) {
    return NextResponse.json({ message: 'Mensagem enviada com sucesso' });
  }

  // Turnstile verification — required
  if (!turnstileToken) {
    return NextResponse.json(
      { error: 'Verificação anti-spam é obrigatória. Recarregue a página e tente novamente.' },
      { status: 400 }
    );
  }

  const ipForTurnstile = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  if (!(await verifyTurnstile(turnstileToken, ipForTurnstile || undefined))) {
    return NextResponse.json(
      { error: 'Verificação anti-spam falhou. Recarregue a página e tente novamente.' },
      { status: 403 }
    );
  }

  // Validation
  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: 'Todos os campos são obrigatórios.' },
      { status: 400 }
    );
  }

  if (typeof message !== 'string' || message.length > 5000) {
    return NextResponse.json(
      { error: 'Mensagem muito longa (máximo 5000 caracteres).' },
      { status: 400 }
    );
  }

  // Rate limit
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const ratelimit = getSubscribeRatelimit();
  const { success } = await ratelimit.limit(`contact:${ip}`);
  if (!success) {
    return NextResponse.json(
      { error: 'Muitas mensagens enviadas. Tente novamente mais tarde.' },
      { status: 429 }
    );
  }

  const subjectLabel = SUBJECT_LABELS[subject] || subject;

  const { error } = await resend.emails.send({
    from: 'Portal Engenharia Biomédica <noreply@mail.engenhariabiomedica.com>',
    to: 'contato@engenhariabiomedica.com',
    replyTo: email,
    subject: `[Contato] ${subjectLabel} — ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px;">
        <h2 style="color: #0f4c5c;">Nova mensagem de contato</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 12px; background: #f1f5f9; font-weight: bold; width: 120px;">Nome</td>
            <td style="padding: 8px 12px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; background: #f1f5f9; font-weight: bold;">E-mail</td>
            <td style="padding: 8px 12px;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; background: #f1f5f9; font-weight: bold;">Assunto</td>
            <td style="padding: 8px 12px;">${subjectLabel}</td>
          </tr>
        </table>
        <div style="padding: 16px; background: #f8fafc; border-left: 4px solid #14b8a6; white-space: pre-wrap;">${message}</div>
        <p style="margin-top: 20px; font-size: 12px; color: #94a3b8;">
          Enviado pelo formulário de contato do engenhariabiomedica.com<br/>
          IP: ${ip}
        </p>
      </div>
    `,
  });

  if (error) {
    console.error('[CONTACT_ERROR]', error);
    return NextResponse.json(
      { error: 'Erro ao enviar mensagem. Tente novamente.' },
      { status: 500 }
    );
  }

  console.log('[CONTACT]', name, email, subjectLabel, new Date().toISOString());
  return NextResponse.json({ message: 'Mensagem enviada com sucesso' });
}
