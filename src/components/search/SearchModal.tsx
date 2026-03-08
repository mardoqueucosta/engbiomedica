'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Search, X, Clock, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Fuse, { type IFuseOptions } from 'fuse.js';
import { Badge } from '@/components/ui/Badge';
import { removeDiacritics } from '@/lib/normalize';
import type { SearchableArticle } from '@/hooks/useArticleSearch';

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

export function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState<SearchableArticle[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Lazy-load search data on first open
  useEffect(() => {
    if (isOpen && !articles) {
      setLoading(true);
      fetch('/api/search-data')
        .then(res => res.json())
        .then(data => setArticles(data))
        .finally(() => setLoading(false));
    }
  }, [isOpen, articles]);

  // Ctrl+K / Cmd+K global shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => inputRef.current?.focus());
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setSelectedIndex(0);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const fuse = useMemo(
    () => (articles ? new Fuse(articles, fuseOptions) : null),
    [articles],
  );

  const results = useMemo(() => {
    const q = query.trim();
    if (!q || !fuse) return [];
    return fuse.search(removeDiacritics(q), { limit: 8 }).map(r => r.item);
  }, [fuse, query]);

  const close = useCallback(() => setIsOpen(false), []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(i => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(i => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      close();
      router.push(`/artigos/${results[selectedIndex].slug}`);
    } else if (e.key === 'Escape') {
      close();
    }
  };

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-slate-500 hover:text-primary-700 rounded-lg hover:bg-primary-50 transition-colors"
        aria-label="Buscar artigos (Ctrl+K)"
        title="Buscar (Ctrl+K)"
      >
        <Search className="w-5 h-5" />
      </button>

      {/* Modal overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-slate-900/50 flex items-start justify-center pt-[12vh] sm:pt-[15vh] px-4"
          onClick={close}
        >
          <div
            className="w-full max-w-lg bg-white rounded-card shadow-elevated border border-slate-100 overflow-hidden"
            onClick={e => e.stopPropagation()}
            onKeyDown={handleKeyDown}
          >
            {/* Search input */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-100">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Buscar artigos..."
                className="flex-1 text-sm text-slate-900 placeholder-slate-400 outline-none bg-transparent font-sans"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <kbd className="hidden sm:inline-flex px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-50 rounded border border-slate-200">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-[50vh] overflow-y-auto">
              {loading && (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="w-5 h-5 text-slate-400 animate-spin" />
                </div>
              )}

              {!loading && query.trim() && results.length === 0 && (
                <div className="py-8 text-center text-sm text-slate-400">
                  Nenhum artigo encontrado para &ldquo;{query}&rdquo;
                </div>
              )}

              {!loading &&
                results.map((article, i) => (
                  <Link
                    key={article.slug}
                    href={`/artigos/${article.slug}`}
                    onClick={close}
                    className={`block px-4 py-3 border-b border-slate-50 transition-colors ${
                      i === selectedIndex ? 'bg-primary-50' : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant={article.categoriaVariant}>
                        {article.categoria}
                      </Badge>
                      <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.leitura}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-slate-900 leading-snug">
                      {article.titulo}
                    </h4>
                    <p className="text-xs text-slate-500 font-serif line-clamp-1 mt-0.5">
                      {article.resumo}
                    </p>
                  </Link>
                ))}

              {!loading && !query.trim() && (
                <div className="py-8 text-center text-sm text-slate-400">
                  Digite para buscar em {articles?.length ?? '...'} artigos
                </div>
              )}
            </div>

            {/* Footer hint */}
            <div className="flex items-center justify-between px-4 py-2 border-t border-slate-100 text-[10px] text-slate-400 font-mono">
              <span>
                <kbd className="px-1 py-0.5 bg-slate-50 rounded border border-slate-200 mr-1">↑↓</kbd>
                navegar
                <kbd className="px-1 py-0.5 bg-slate-50 rounded border border-slate-200 mx-1">↵</kbd>
                abrir
              </span>
              <span>
                <kbd className="px-1 py-0.5 bg-slate-50 rounded border border-slate-200 mr-1">Ctrl</kbd>
                <kbd className="px-1 py-0.5 bg-slate-50 rounded border border-slate-200">K</kbd>
                &nbsp;buscar
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
