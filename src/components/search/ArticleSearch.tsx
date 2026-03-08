'use client';

import Link from 'next/link';
import { Search, X, Clock, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { useArticleSearch, type SearchableArticle } from '@/hooks/useArticleSearch';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export function ArticleSearch({ articles }: { articles: SearchableArticle[] }) {
  const { query, setQuery, results, clearSearch } = useArticleSearch(articles);

  const isSearching = query.trim().length > 0;
  const displayArticles = results ?? articles;

  const destaque = articles[0];
  const demais = articles.slice(1);

  const categoriaMap: Record<string, SearchableArticle[]> = {};
  for (const a of demais) {
    if (!categoriaMap[a.categoria]) categoriaMap[a.categoria] = [];
    categoriaMap[a.categoria].push(a);
  }

  return (
    <section className="container-page py-10 lg:py-14">
      {/* Search input */}
      <div className="relative mb-8">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Buscar artigos por titulo, resumo ou categoria..."
          className="w-full pl-10 pr-10 py-3 rounded-card border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-colors shadow-card font-sans"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Search results mode */}
      {isSearching && (
        <>
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-primary-50 text-primary-700 text-xs font-semibold">
              {displayArticles.length} {displayArticles.length === 1 ? 'artigo encontrado' : 'artigos encontrados'}
            </span>
            <button
              onClick={clearSearch}
              className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
            >
              Limpar busca
            </button>
          </div>

          {displayArticles.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-10 h-10 text-slate-200 mx-auto mb-4" />
              <p className="text-slate-500 text-sm mb-1">
                Nenhum artigo encontrado para &ldquo;{query}&rdquo;
              </p>
              <p className="text-slate-400 text-xs">
                Tente buscar por outro termo ou categoria
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayArticles.map(a => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </>
      )}

      {/* Default mode (no search) */}
      {!isSearching && (
        <>
          {/* Artigo destaque */}
          <Link
            href={`/artigos/${destaque.slug}`}
            className="group block relative overflow-hidden rounded-card bg-gradient-to-br from-primary-800 via-primary-700 to-teal-800 p-8 lg:p-12 mb-10"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full glow-teal-strong pointer-events-none" />
            <div className="absolute bottom-[-100px] left-[-50px] w-[300px] h-[300px] rounded-full glow-blue-soft pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-md bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wide border border-teal-500/30">
                  {destaque.categoria}
                </span>
                <span className="text-primary-300 text-xs font-mono flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {destaque.leitura}
                </span>
              </div>
              <h2 className="text-h1 lg:text-display text-white mb-3 max-w-3xl text-balance font-serif group-hover:text-teal-200 transition-colors">
                {destaque.titulo}
              </h2>
              <p className="text-body text-primary-200 max-w-2xl mb-6 leading-relaxed">
                {destaque.resumo}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-teal-300 group-hover:text-teal-200 transition-colors">
                Ler artigo completo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>

          {/* Filtros por categoria */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-primary-50 text-primary-700 text-xs font-semibold">
              {articles.length} artigos publicados
            </span>
            {Object.entries(categoriaMap).map(([cat, items]) => (
              <a
                key={cat}
                href={`#cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-100 text-slate-500 text-xs font-medium hover:bg-slate-50 hover:text-slate-700 transition-colors"
              >
                {cat}
                <span className="text-slate-300">({items.length})</span>
              </a>
            ))}
          </div>

          {/* Artigos por categoria */}
          {Object.entries(categoriaMap).map(([cat, items]) => (
            <div key={cat} id={`cat-${cat.toLowerCase().replace(/\s+/g, '-')}`} className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <h2 className="text-h3 text-slate-900">{cat}</h2>
                <div className="flex-1 h-px bg-slate-100" />
                <span className="text-caption text-slate-400 font-mono">
                  {items.length} {items.length === 1 ? 'artigo' : 'artigos'}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map(a => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
            </div>
          ))}
        </>
      )}

      {/* CTA Newsletter */}
      <div className="mt-4 p-8 lg:p-12 rounded-card bg-primary-800 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full glow-teal-soft pointer-events-none" />
        <div className="relative z-10">
          <span className="text-overline uppercase text-teal-300 tracking-[0.12em] block mb-3">
            Newsletter
          </span>
          <h2 className="text-h2 text-white mb-2 font-serif">
            Quer receber novos artigos?
          </h2>
          <p className="text-body-sm text-primary-200 mb-6 max-w-md mx-auto">
            Cadastre-se na newsletter para receber analises e guias diretamente no seu e-mail. Gratuito e sem spam.
          </p>
          <Link
            href="/newsletter"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold text-sm hover:bg-teal-600 transition-colors"
          >
            Inscrever-se na newsletter
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ article: a }: { article: SearchableArticle }) {
  return (
    <Link
      href={`/artigos/${a.slug}`}
      className="card p-6 group flex flex-col"
    >
      <div className="flex items-center justify-between gap-2 mb-3">
        <Badge variant={a.categoriaVariant}>{a.categoria}</Badge>
        <span className="text-caption text-slate-400 font-mono flex items-center gap-1 shrink-0">
          <Clock className="w-3 h-3" />
          {a.leitura}
        </span>
      </div>
      <h3 className="text-h4 text-slate-900 mb-2 group-hover:text-primary-700 transition-colors leading-snug flex-1">
        {a.titulo}
      </h3>
      <p className="text-body-sm text-slate-500 font-serif mb-3 line-clamp-2">
        {a.resumo}
      </p>
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-50">
        <span className="text-caption text-slate-400">
          {formatDate(a.data)}
        </span>
        <span className="text-xs font-semibold text-teal-600 group-hover:text-teal-700 transition-colors flex items-center gap-1">
          Ler
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
