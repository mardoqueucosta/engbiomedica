export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
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
    console.error('[UNSUBSCRIBE_ERROR]', email, error);
    return NextResponse.json(
      { error: 'Erro ao processar cancelamento' },
      { status: 500 }
    );
  }

  console.log('[UNSUBSCRIBED]', email, new Date().toISOString());
  return NextResponse.json({ message: 'Inscrição cancelada com sucesso' });
}
