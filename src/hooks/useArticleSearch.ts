'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import Fuse, { type IFuseOptions } from 'fuse.js';
import { removeDiacritics } from '@/lib/normalize';

export interface SearchableArticle {
  slug: string;
  titulo: string;
  resumo: string;
  categoria: string;
  categoriaVariant: 'primary' | 'teal' | 'coral' | 'amber';
  data: string;
  leitura: string;
}

const fuseOptions: IFuseOptions<SearchableArticle> = {
  keys: [
    { name: 'titulo', weight: 0.5 },
    { name: 'resumo', weight: 0.3 },
    { name: 'categoria', weight: 0.2 },
  ],
  threshold: 0.35,
  ignoreLocation: true,
  minMatchCharLength: 2,
  getFn: (obj, path) => {
    const value = Fuse.config.getFn(obj, path);
    if (typeof value === 'string') return removeDiacritics(value);
    if (Array.isArray(value)) {
      return value.map(v => (typeof v === 'string' ? removeDiacritics(v) : v));
    }
    return value;
  },
};

export function useArticleSearch(articles: SearchableArticle[]) {
  const [query, setQuery] = useState('');

  const fuse = useMemo(() => new Fuse(articles, fuseOptions), [articles]);

  const results = useMemo(() => {
    const q = query.trim();
    if (!q) return null;
    return fuse.search(removeDiacritics(q)).map(r => r.item);
  }, [fuse, query]);

  const clearSearch = useCallback(() => setQuery(''), []);

  // GA4 search tracking (debounced)
  useEffect(() => {
    if (!query.trim() || query.length < 3) return;
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && typeof (window as /* eslint-disable-line */ any).gtag === 'function') {
        (window as /* eslint-disable-line */ any).gtag('event', 'search', {
          search_term: query,
          event_category: 'busca_interna',
        });
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [query]);

  return { query, setQuery, results, clearSearch };
}
