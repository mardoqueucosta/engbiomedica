export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { Webhook } from 'svix';

export async function POST(req: NextRequest) {
  // Verificar assinatura do webhook (Svix)
  const webhookSecret = process.env.RESEND_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error('[WEBHOOK] RESEND_WEBHOOK_SECRET não configurada');
    return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 });
  }

  const svixId = req.headers.get('svix-id');
  const svixTimestamp = req.headers.get('svix-timestamp');
  const svixSignature = req.headers.get('svix-signature');

  if (!svixId || !svixTimestamp || !svixSignature) {
    return NextResponse.json({ error: 'Missing webhook signature headers' }, { status: 401 });
  }

  const body = await req.text();

  let payload: { type: string; data: Record<string, unknown> };
  try {
    const wh = new Webhook(webhookSecret);
    payload = wh.verify(body, {
      'svix-id': svixId,
      'svix-timestamp': svixTimestamp,
      'svix-signature': svixSignature,
    }) as typeof payload;
  } catch {
    console.error('[WEBHOOK] Assinatura inválida');
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { type, data } = payload;

  switch (type) {
    case 'email.bounced':
      console.error('[BOUNCE]', data.to, (data.bounce as Record<string, unknown>)?.type);
      if ((data.bounce as Record<string, unknown>)?.type === 'hard') {
        await resend.contacts.update({ email: (data.to as string[])[0], unsubscribed: true });
      }
      break;

    case 'email.complained':
      console.error('[COMPLAINT]', data.to);
      await resend.contacts.update({ email: (data.to as string[])[0], unsubscribed: true });
      break;

    case 'email.delivered':
      console.log('[DELIVERED]', data.to);
      break;

    case 'email.delivery_delayed':
      console.warn('[DELAYED]', data.to);
      break;
  }

  return NextResponse.json({ received: true });
}
