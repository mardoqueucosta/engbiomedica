import Link from 'next/link';
import { Logo } from './Logo';
import { footerNavigation } from '@/data/navigation';

const footerColumns = [
  { title: 'Portal', links: footerNavigation.portal },
  { title: 'Formação', links: footerNavigation.formacao },
  { title: 'Especialidades', links: footerNavigation.especialidades },
  { title: 'Mercado', links: footerNavigation.mercado },
  { title: 'Regulamentação', links: footerNavigation.regulamentacao },
  { title: 'Equipamentos', links: footerNavigation.equipamentos },
  { title: 'Pesquisa', links: footerNavigation.pesquisa },
  { title: 'Carreira', links: footerNavigation.carreira },
];

export function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-200">
      {/* Main footer */}
      <div className="container-page py-12 lg:py-16">
        {/* Brand + description */}
        <div className="mb-10 lg:mb-12">
          <Logo dark />
          <p className="mt-4 text-sm text-primary-300 font-serif leading-relaxed max-w-xs">
            O portal mais completo sobre Engenharia Biomédica no Brasil.
            Cursos, mercado, regulamentação, pesquisa e inovação.
          </p>
          {/* Newsletter mini CTA */}
          <Link
            href="/newsletter"
            className="inline-flex items-center gap-2 mt-5 px-4 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-500 rounded-lg transition-colors"
          >
            Assinar newsletter
          </Link>
        </div>

        {/* 8 link groups: 2 rows x 4 cols */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-6">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-primary-400 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-primary-300 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-800">
        <div className="container-page py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="font-mono text-xs text-primary-500">
            &copy; {new Date().getFullYear()} engenhariabiomedica.com
          </span>
          <span className="font-mono text-xs text-primary-600">
            Feito no Brasil
          </span>
        </div>
      </div>
    </footer>
  );
}
