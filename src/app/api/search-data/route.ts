import { NextResponse } from 'next/server';
import { artigosMeta } from '@/data/artigos/metadata';

export async function GET() {
  const data = artigosMeta.map(a => ({
    slug: a.slug,
    titulo: a.titulo,
    resumo: a.resumo,
    categoria: a.categoria,
    categoriaVariant: a.categoriaVariant,
    data: a.data,
    leitura: a.leitura,
  }));

  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
