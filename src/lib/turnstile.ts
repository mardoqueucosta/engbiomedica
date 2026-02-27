const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

interface TurnstileVerifyResponse {
  success: boolean;
  'error-codes'?: string[];
  challenge_ts?: string;
  hostname?: string;
}

export async function verifyTurnstile(token: string, ip?: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.warn('[TURNSTILE] Secret key not configured, skipping verification');
    return true;
  }

  if (!token || typeof token !== 'string') {
    console.warn('[TURNSTILE] Invalid or empty token');
    return false;
  }

  try {
    const body = new URLSearchParams({ secret, response: token });
    if (ip) body.set('remoteip', ip);

    const res = await fetch(VERIFY_URL, {
      method: 'POST',
      body,
    });

    const data: TurnstileVerifyResponse = await res.json();

    if (!data.success) {
      console.warn('[TURNSTILE] Verification failed:', data['error-codes']);
    }

    return data.success === true;
  } catch (error) {
    console.error('[TURNSTILE] Verification request failed:', error);
    return false;
  }
}
