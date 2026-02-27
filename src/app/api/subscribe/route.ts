export const runtime = 'nodejs';

import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { generateToken } from '@/lib/tokens';
import { subscribeRatelimit } from '@/lib/ratelimit';
import { render } from '@react-email/render';
import { ConfirmSubscription } from '@/emails/confirm-subscription';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  // Rate limiting por IP
  const ip = req.headers.get('x-forwarded-for') ?? 'unknown';
  const { success } = await subscribeRatelimit.limit(ip);
  if (!success) {
    return NextResponse.json(
      { error: 'Muitas tentativas. Aguarde antes de tentar novamente.' },
      { status: 429 }
    );
  }

  const { email, firstName } = await req.json();
  if (!email || typeof email !== 'string') {
    return NextResponse.json({ error: 'Email obrigatório' }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Email inválido' }, { status: 400 });
  }

  const token = generateToken(email, firstName || '');
  const confirmUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/confirm?token=${token}`;

  const html = await render(
    ConfirmSubscription({ firstName: firstName || 'leitor(a)', confirmationUrl: confirmUrl })
  );

  const { error } = await resend.emails.send({
    from: 'Newsletter <newsletter@mail.engenhariabiomedica.com>',
    to: [email],
    subject: 'Confirme sua inscrição na newsletter',
    html,
  });

  if (error) {
    console.error('Erro ao enviar email de confirmação:', error);
    return NextResponse.json({ error: 'Erro ao enviar email de confirmação' }, { status: 500 });
  }

  return NextResponse.json({ message: 'Email de confirmação enviado!' });
}
