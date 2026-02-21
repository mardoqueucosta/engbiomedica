import { type ReactNode } from 'react';

type Variant = 'primary' | 'teal' | 'coral' | 'amber' | 'slate';

const variantStyles: Record<Variant, string> = {
  primary: 'bg-primary-100 text-primary-700 border-primary-200',
  teal: 'bg-teal-100 text-teal-700 border-teal-200',
  coral: 'bg-coral-100 text-coral-500 border-coral-300',
  amber: 'bg-amber-100 text-amber-500 border-amber-400',
  slate: 'bg-slate-100 text-slate-600 border-slate-200',
};

export function Badge({
  children,
  variant = 'primary',
}: {
  children: ReactNode;
  variant?: Variant;
}) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-md border text-xs font-semibold tracking-wide ${variantStyles[variant]}`}
    >
      {children}
    </span>
  );
}
