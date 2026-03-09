export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { artigosMeta } from '@/data/artigos';

const BASE_URL = 'https://engenhariabiomedica.com';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

/**
 * POST /api/indexnow
 *
 * Submete URLs ao IndexNow (Bing, Yandex, etc.).
 *
 * Query params:
 *   ?days=N  — submete artigos publicados/modificados nos últimos N dias (padrão: 7)
 *   ?all     — submete todas as URLs (artigos + páginas estáticas)
 *
 * Header:
 *   Authorization: Bearer <INDEXNOW_API_KEY>
 */
export async function POST(req: NextRequest) {
  const apiKey = process.env.INDEXNOW_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'INDEXNOW_API_KEY não configurada' },
      { status: 500 }
    );
  }

  // Auth simples via Bearer token
  const auth = req.headers.get('authorization');
  if (auth !== `Bearer ${apiKey}`) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
  }

  const { searchParams } = req.nextUrl;
  const all = searchParams.has('all');
  const days = parseInt(searchParams.get('days') ?? '7', 10);

  let urlList: string[];

  if (all) {
    // Todas as URLs: estáticas + artigos
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
    // Apenas artigos recentes (publicados ou modificados nos últimos N dias)
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
    return NextResponse.json({
      message: 'Nenhuma URL nova para submeter',
      urls: 0,
    });
  }

  // IndexNow aceita até 10.000 URLs por requisição
  const payload = {
    host: 'engenhariabiomedica.com',
    key: apiKey,
    keyLocation: `${BASE_URL}/${apiKey}.txt`,
    urlList,
  };

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });

  // IndexNow retorna 200 ou 202 em caso de sucesso
  if (response.ok || response.status === 202) {
    return NextResponse.json({
      message: `${urlList.length} URL(s) submetidas ao IndexNow`,
      urls: urlList.length,
      urlList,
    });
  }

  const errorText = await response.text();
  return NextResponse.json(
    {
      error: 'Erro ao submeter ao IndexNow',
      status: response.status,
      detail: errorText,
    },
    { status: 502 }
  );
}
