import Link from 'next/link';
import { Logo } from './Logo';
import { footerNavigation } from '@/data/navigation';

export function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-200">
      <div className="container-page py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo dark />
            <p className="mt-4 text-sm text-primary-300 font-serif leading-relaxed">
              O portal mais completo sobre Engenharia Biomédica no Brasil. Cursos,
              mercado, regulamentação, pesquisa e inovação.
            </p>
          </div>

          {/* Portal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-primary-400 mb-4">
              Portal
            </h4>
            <ul className="space-y-2.5">
              {footerNavigation.portal.map((item) => (
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

          {/* Formação */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-primary-400 mb-4">
              Formação
            </h4>
            <ul className="space-y-2.5">
              {footerNavigation.formacao.map((item) => (
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

          {/* Profissional */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-primary-400 mb-4">
              Profissional
            </h4>
            <ul className="space-y-2.5">
              {footerNavigation.profissional.map((item) => (
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
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-primary-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="font-mono text-xs text-primary-500">
            © {new Date().getFullYear()} engenhariabiomedica.com
          </span>
          <span className="font-mono text-xs text-primary-600">
            Feito no Brasil 🇧🇷
          </span>
        </div>
      </div>
    </footer>
  );
}
