export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/tokens';
import { render } from '@react-email/render';
import { WelcomeEmail } from '@/emails/welcome';

export async function GET(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || req.url;
  const token = req.nextUrl.searchParams.get('token');
  if (!token) {
    return NextResponse.json({ error: 'Token ausente' }, { status: 400 });
  }

  const payload = verifyToken(token);
  if (!payload) {
    return NextResponse.redirect(new URL('/newsletter?error=token-invalido', baseUrl));
  }

  // Criar contato já atribuído ao segmento (chamada atômica)
  const { error } = await resend.contacts.create({
    email: payload.email,
    firstName: payload.firstName || '',
    unsubscribed: false,
    segments: [{ id: process.env.RESEND_SEGMENT_ID! }],
  });

  if (error) console.error('Erro ao criar contato:', error);

  // Enviar email de boas-vindas
  const welcomeHtml = await render(
    WelcomeEmail({ firstName: payload.firstName || 'leitor(a)' })
  );

  await resend.emails.send({
    from: 'Newsletter <newsletter@mail.engenhariabiomedica.com>',
    to: [payload.email],
    subject: 'Bem-vindo(a) à newsletter de Engenharia Biomédica!',
    html: welcomeHtml,
  });

  // Registrar prova de consentimento (LGPD Art. 8°, §2°)
  console.log('[CONSENT_LOG]', JSON.stringify({
    email: payload.email,
    confirmedAt: new Date().toISOString(),
    ip: req.headers.get('x-forwarded-for') ?? 'unknown',
    userAgent: req.headers.get('user-agent') ?? 'unknown',
    method: 'double-opt-in',
  }));

  return NextResponse.redirect(new URL('/subscription-confirmed', baseUrl));
}
