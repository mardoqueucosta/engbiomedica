export const runtime = 'nodejs';

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { type, data } = await req.json();

  switch (type) {
    case 'email.bounced':
      console.error('[BOUNCE]', data.to, data.bounce?.type);
      if (data.bounce?.type === 'hard') {
        await resend.contacts.update({ email: data.to[0], unsubscribed: true });
      }
      break;

    case 'email.complained':
      console.error('[COMPLAINT]', data.to);
      await resend.contacts.update({ email: data.to[0], unsubscribed: true });
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
