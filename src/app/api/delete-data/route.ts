export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { getSubscribeRatelimit } from '@/lib/ratelimit';

export async function POST(req: NextRequest) {
  // Rate limit por IP
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const { success } = await getSubscribeRatelimit().limit(`delete-data:${ip}`);
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

  // Remove o contato permanentemente — apaga todos os dados
  const { error } = await resend.contacts.remove({
    email,
    audienceId: process.env.RESEND_AUDIENCE_ID!,
  });

  if (error) {
    console.error('[DELETE_DATA_ERROR]', error);
    return NextResponse.json(
      { error: 'Erro ao excluir dados. Verifique se o email está cadastrado.' },
      { status: 500 }
    );
  }

  console.log('[DATA_DELETED]', new Date().toISOString());
  return NextResponse.json({ message: 'Dados excluídos permanentemente' });
}
