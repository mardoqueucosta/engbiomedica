export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { getSubscribeRatelimit } from '@/lib/ratelimit';

export async function POST(req: NextRequest) {
  // Rate limit por IP
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const { success } = await getSubscribeRatelimit().limit(`unsubscribe:${ip}`);
  if (!success) {
    return NextResponse.json(
      { error: 'Muitas tentativas. Aguarde antes de tentar novamente.' },
      { status: 429 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { email } = await req.json();
  if (!email || typeof email !== 'string') {
    return NextResponse.json({ error: 'Email obrigatório' }, { status: 400 });
  }

  const { error } = await resend.contacts.update({
    email,
    unsubscribed: true,
  });

  if (error) {
    console.error('[UNSUBSCRIBE_ERROR]', error);
    return NextResponse.json(
      { error: 'Erro ao processar cancelamento' },
      { status: 500 }
    );
  }

  console.log('[UNSUBSCRIBED]', new Date().toISOString());
  return NextResponse.json({ message: 'Inscrição cancelada com sucesso' });
}
