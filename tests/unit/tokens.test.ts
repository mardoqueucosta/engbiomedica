import { describe, it, expect, vi, beforeEach } from 'vitest';
import { generateToken, verifyToken } from '@/lib/tokens';

// Mock do env
const TEST_SECRET = 'test-secret-key-for-unit-tests-only';

beforeEach(() => {
  vi.stubEnv('CONFIRMATION_SECRET', TEST_SECRET);
});

describe('generateToken', () => {
  it('gera um token no formato encoded.signature', () => {
    const token = generateToken('user@test.com', 'Maria');
    expect(token).toMatch(/^[A-Za-z0-9_-]+\.[a-f0-9]+$/);
  });

  it('gera tokens diferentes para emails diferentes', () => {
    const token1 = generateToken('a@test.com', 'Ana');
    const token2 = generateToken('b@test.com', 'Bruno');
    expect(token1).not.toBe(token2);
  });

  it('gera tokens diferentes a cada chamada (timestamp diferente)', async () => {
    const token1 = generateToken('same@test.com', 'Same');
    // Pequeno delay para garantir timestamp diferente
    await new Promise(r => setTimeout(r, 10));
    const token2 = generateToken('same@test.com', 'Same');
    expect(token1).not.toBe(token2);
  });
});

describe('verifyToken', () => {
  it('verifica um token válido recém-gerado', () => {
    const token = generateToken('user@test.com', 'Maria');
    const payload = verifyToken(token);
    expect(payload).not.toBeNull();
    expect(payload!.email).toBe('user@test.com');
    expect(payload!.firstName).toBe('Maria');
    expect(payload!.timestamp).toBeGreaterThan(0);
  });

  it('rejeita token com assinatura inválida', () => {
    const token = generateToken('user@test.com', 'Maria');
    const [encoded] = token.split('.');
    const fakeSignature = 'a'.repeat(64);
    const result = verifyToken(`${encoded}.${fakeSignature}`);
    expect(result).toBeNull();
  });

  it('rejeita token sem ponto separador', () => {
    const result = verifyToken('tokeninvalido');
    expect(result).toBeNull();
  });

  it('rejeita token vazio', () => {
    const result = verifyToken('');
    expect(result).toBeNull();
  });

  it('rejeita token expirado (>24h)', () => {
    // Mockar Date.now para simular token antigo
    const realNow = Date.now;

    // Gerar token "25 horas atrás"
    const pastTime = Date.now() - 25 * 60 * 60 * 1000;
    vi.spyOn(Date, 'now').mockReturnValueOnce(pastTime);
    const token = generateToken('expired@test.com', 'Expired');

    // Restaurar Date.now para verificação
    vi.spyOn(Date, 'now').mockReturnValue(realNow());
    const result = verifyToken(token);
    expect(result).toBeNull();

    vi.restoreAllMocks();
  });

  it('aceita token recente (<24h)', () => {
    // Gerar token "23 horas atrás"
    const pastTime = Date.now() - 23 * 60 * 60 * 1000;
    vi.spyOn(Date, 'now').mockReturnValueOnce(pastTime);
    const token = generateToken('recent@test.com', 'Recent');

    vi.restoreAllMocks();
    const result = verifyToken(token);
    expect(result).not.toBeNull();
    expect(result!.email).toBe('recent@test.com');
  });

  it('preserva dados com caracteres especiais no email', () => {
    const token = generateToken('user+test@exemplo.com.br', 'José');
    const payload = verifyToken(token);
    expect(payload).not.toBeNull();
    expect(payload!.email).toBe('user+test@exemplo.com.br');
    expect(payload!.firstName).toBe('José');
  });

  it('preserva nomes com acentos', () => {
    const token = generateToken('test@test.com', 'João André');
    const payload = verifyToken(token);
    expect(payload).not.toBeNull();
    expect(payload!.firstName).toBe('João André');
  });
});
