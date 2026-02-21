import Link from 'next/link';
import { type LucideIcon } from 'lucide-react';

export function SectionCard({
  icon: Icon,
  title,
  description,
  href,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="card p-5 group block"
    >
      <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center mb-3 group-hover:bg-primary-100 transition-colors">
        <Icon className="w-5 h-5 text-primary-600" />
      </div>
      <h3 className="font-sans text-h4 text-slate-900 mb-1">{title}</h3>
      <p className="font-serif text-body-sm text-slate-500">{description}</p>
    </Link>
  );
}
