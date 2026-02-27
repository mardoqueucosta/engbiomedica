import crypto from 'crypto';

const TOKEN_EXPIRY_HOURS = 24;

function getSecret() {
  return process.env.CONFIRMATION_SECRET!;
}

interface TokenPayload {
  email: string;
  firstName: string;
  timestamp: number;
}

export function generateToken(email: string, firstName: string): string {
  const payload: TokenPayload = { email, firstName, timestamp: Date.now() };
  const encoded = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signature = crypto.createHmac('sha256', getSecret()).update(encoded).digest('hex');
  return `${encoded}.${signature}`;
}

export function verifyToken(token: string): TokenPayload | null {
  const [encoded, signature] = token.split('.');
  if (!encoded || !signature) return null;

  const expectedSignature = crypto.createHmac('sha256', getSecret()).update(encoded).digest('hex');
  if (!crypto.timingSafeEqual(Buffer.from(signature, 'hex'), Buffer.from(expectedSignature, 'hex')))
    return null;

  const payload: TokenPayload = JSON.parse(Buffer.from(encoded, 'base64url').toString());
  const ageHours = (Date.now() - payload.timestamp) / (1000 * 60 * 60);
  if (ageHours > TOKEN_EXPIRY_HOURS) return null;

  return payload;
}
