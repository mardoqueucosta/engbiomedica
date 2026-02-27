import { artigosMeta } from '../src/data/artigos/metadata';
import type { ArtigoMeta } from '../src/data/artigos/metadata';

export type { ArtigoMeta };

const BASE_URL = process.env.BASE_URL || 'https://engenhariabiomedica.com';

/**
 * Retorna artigos publicados nos últimos N dias, ordenados do mais recente ao mais antigo.
 * Usa comparação lexicográfica de strings YYYY-MM-DD.
 */
export function getRecentArticles(daysBack = 14): ArtigoMeta[] {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - daysBack);
  const cutoffStr = cutoff.toISOString().split('T')[0]; // YYYY-MM-DD

  return artigosMeta
    .filter((a) => (a.dataModificacao || a.data) >= cutoffStr)
    .sort((a, b) => {
      const dateA = a.dataModificacao || a.data;
      const dateB = b.dataModificacao || b.data;
      return dateB.localeCompare(dateA);
    });
}

/**
 * Retorna a URL pública da primeira imagem de um artigo, ou null.
 */
export function getArticleImage(artigo: ArtigoMeta): string | null {
  if (!artigo.imagens || artigo.imagens.length === 0) return null;
  return `${BASE_URL}${artigo.imagens[0].src}`;
}

/**
 * Fallback: retorna os N artigos mais recentes do acervo, independente de data.
 */
export function getLatestArticles(count = 5): ArtigoMeta[] {
  return [...artigosMeta]
    .sort((a, b) => {
      const dateA = a.dataModificacao || a.data;
      const dateB = b.dataModificacao || b.data;
      return dateB.localeCompare(dateA);
    })
    .slice(0, count);
}
