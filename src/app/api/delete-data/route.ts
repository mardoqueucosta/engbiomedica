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

  // Remove o contato permanentemente — apaga todos os dados
  const { error } = await resend.contacts.remove({
    email,
    audienceId: process.env.RESEND_AUDIENCE_ID!,
  });

  if (error) {
    console.error('[DELETE_DATA_ERROR]', email, error);
    return NextResponse.json(
      { error: 'Erro ao excluir dados. Verifique se o email está cadastrado.' },
      { status: 500 }
    );
  }

  console.log('[DATA_DELETED]', email, new Date().toISOString());
  return NextResponse.json({ message: 'Dados excluídos permanentemente' });
}
