export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import { artigosMeta } from '@/data/artigos';

const BASE_URL = 'https://engenhariabiomedica.com';

/**
 * POST /api/google-indexing
 *
 * Submete URLs à Google Indexing API via service account.
 *
 * Query params:
 *   ?days=N  — artigos publicados/modificados nos últimos N dias (padrão: 7)
 *   ?all     — todas as URLs (artigos + páginas estáticas)
 *   ?type=URL_UPDATED|URL_DELETED — tipo de notificação (padrão: URL_UPDATED)
 *
 * Header:
 *   Authorization: Bearer <INDEXNOW_API_KEY>
 */
export async function POST(req: NextRequest) {
  const apiKey = process.env.INDEXNOW_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'INDEXNOW_API_KEY não configurada' }, { status: 500 });
  }

  // Auth simples via Bearer token (mesma chave do IndexNow)
  const auth = req.headers.get('authorization');
  if (auth !== `Bearer ${apiKey}`) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
  }

  // Credenciais da service account via env var (JSON stringificado)
  const credentialsJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!credentialsJson) {
    return NextResponse.json(
      { error: 'GOOGLE_SERVICE_ACCOUNT_JSON não configurada' },
      { status: 500 }
    );
  }

  let credentials;
  try {
    credentials = JSON.parse(credentialsJson);
  } catch {
    return NextResponse.json(
      { error: 'GOOGLE_SERVICE_ACCOUNT_JSON inválido (JSON malformado)' },
      { status: 500 }
    );
  }

  const { searchParams } = req.nextUrl;
  const all = searchParams.has('all');
  const days = parseInt(searchParams.get('days') ?? '7', 10);
  const type = searchParams.get('type') ?? 'URL_UPDATED';

  // Montar lista de URLs
  let urlList: string[];

  if (all) {
    const staticPaths = [
      '', '/artigos', '/formacao', '/mercado', '/regulamentacao',
      '/pesquisa', '/sobre', '/newsletter', '/contato', '/glossario',
      '/recursos', '/areas-de-atuacao', '/equipamentos', '/carreira',
    ];
    urlList = [
      ...staticPaths.map(p => `${BASE_URL}${p}`),
      ...artigosMeta.map(a => `${BASE_URL}/artigos/${a.slug}`),
    ];
  } else {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);
    const cutoffStr = cutoff.toISOString().slice(0, 10);

    urlList = artigosMeta
      .filter(a => {
        const modified = a.dataModificacao ?? a.data;
        return modified >= cutoffStr;
      })
      .map(a => `${BASE_URL}/artigos/${a.slug}`);
  }

  if (urlList.length === 0) {
    return NextResponse.json({ message: 'Nenhuma URL nova para submeter', urls: 0 });
  }

  // Autenticar com a service account
  const jwtClient = new google.auth.JWT(
    credentials.client_email,
    undefined,
    credentials.private_key,
    ['https://www.googleapis.com/auth/indexing'],
  );

  await jwtClient.authorize();

  // Google Indexing API: 200 requisições/dia — submeter uma por uma
  const results: { url: string; status: string }[] = [];
  const errors: { url: string; error: string }[] = [];

  for (const url of urlList) {
    try {
      const res = await jwtClient.request({
        url: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
        method: 'POST',
        data: { url, type },
      });
      results.push({ url, status: `${res.status} OK` });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      errors.push({ url, error: message });
    }
  }

  return NextResponse.json({
    message: `${results.length}/${urlList.length} URL(s) submetidas à Google Indexing API`,
    type,
    submitted: results.length,
    failed: errors.length,
    results,
    errors: errors.length > 0 ? errors : undefined,
  });
}
