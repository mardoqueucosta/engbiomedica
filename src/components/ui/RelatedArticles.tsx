import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Clock, ArrowRight } from 'lucide-react';
import type { ArtigoMeta } from '@/data/artigos/metadata';

export function RelatedArticles({
  currentSlug,
  categoria,
  categoriaVariant,
  allArticles,
}: {
  currentSlug: string;
  categoria: string;
  categoriaVariant: ArtigoMeta['categoriaVariant'];
  allArticles: ArtigoMeta[];
}) {
  const related = allArticles
    .filter((a) => a.categoria === categoria && a.slug !== currentSlug)
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="mt-12 pt-10 border-t border-slate-100">
      <h2 className="text-h3 text-slate-800 mb-6">
        Artigos relacionados
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {related.map((a) => (
          <Link
            key={a.slug}
            href={`/artigos/${a.slug}`}
            className="group flex flex-col gap-2 p-5 rounded-xl border border-slate-100 hover:border-primary-200 hover:bg-primary-50/30 transition-colors"
          >
            <Badge variant={a.categoriaVariant}>{a.categoria}</Badge>
            <h3 className="text-body font-semibold text-slate-800 group-hover:text-primary-700 transition-colors line-clamp-2">
              {a.titulo}
            </h3>
            <p className="text-body-sm text-slate-500 line-clamp-2 font-serif">
              {a.resumo}
            </p>
            <div className="flex items-center justify-between mt-auto pt-2">
              <span className="flex items-center gap-1 text-caption text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                {a.leitura}
              </span>
              <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary-500 transition-colors" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
