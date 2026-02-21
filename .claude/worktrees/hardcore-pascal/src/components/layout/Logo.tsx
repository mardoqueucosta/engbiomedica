export function Logo({ dark = false, className = '' }: { dark?: boolean; className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon mark — Brand Identity */}
      <svg width="36" height="36" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="60" height="60" rx="14" fill="#0E5089" />
        <path d="M20 32C20 25.4 25.4 20 32 20C38.6 20 44 25.4 44 32C44 38.6 38.6 44 32 44" stroke="#00B49E" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M16 32H26M30 32H34M38 32H48" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M28 26L32 22L36 26" stroke="#00B49E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="32" r="3" fill="white" />
        <path d="M28 38L32 42L36 38" stroke="#00B49E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col">
        <span className={`text-[15px] font-bold tracking-tight leading-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
          engenharia<span className="text-teal-500">biomédica</span>
        </span>
        <span className={`text-[9px] font-normal uppercase tracking-[0.12em] ${dark ? 'text-slate-300' : 'text-slate-500'}`}>
          Portal de Referência
        </span>
      </div>
    </div>
  );
}
