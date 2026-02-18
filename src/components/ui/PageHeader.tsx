import { type ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export function PageHeader({
  overline,
  title,
  description,
  breadcrumbs,
  centered,
}: {
  overline?: string;
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
  centered?: boolean;
}) {
  return (
    <div className="bg-white border-b border-slate-100">
      <div className="container-page py-8 lg:py-12">
        <div className={centered ? 'max-w-3xl mx-auto' : ''}>
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav className="flex flex-wrap items-center gap-1.5 mb-4 text-xs font-mono text-slate-400">
            <Link href="/" className="hover:text-primary-600 transition-colors flex-shrink-0">
              Início
            </Link>
            {breadcrumbs.map((crumb, i) => {
              const isLast = i === breadcrumbs.length - 1;
              return (
                <span key={i} className={`flex items-center gap-1.5 flex-shrink-0 ${isLast && !crumb.href ? 'hidden sm:flex' : ''}`}>
                  <ChevronRight className="w-3 h-3 flex-shrink-0" />
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-primary-600 transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-slate-600 truncate max-w-[200px] lg:max-w-none">{crumb.label}</span>
                  )}
                </span>
              );
            })}
          </nav>
        )}

        {overline && (
          <span className="text-overline uppercase text-teal-600 mb-2 block">
            {overline}
          </span>
        )}
        <h1 className={`text-h1 lg:text-display text-slate-900 text-balance ${centered ? '' : 'max-w-3xl'}`}>
          {title}
        </h1>
        {description && (
          <p className={`mt-3 font-serif text-lg text-slate-500 leading-relaxed text-justify ${centered ? '' : 'max-w-2xl'}`}>
            {description}
          </p>
        )}
        </div>
      </div>
    </div>
  );
}
