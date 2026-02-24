import Link from 'next/link';
import { Logo } from './Logo';
import { footerNavigation } from '@/data/navigation';

export function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-200">
      <div className="container-page py-8 lg:py-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Brand */}
          <div className="lg:max-w-[220px] shrink-0">
            <Logo dark />
            <p className="mt-3 text-sm text-primary-300 leading-relaxed">
              O portal mais completo sobre Engenharia Biomédica no Brasil.
            </p>
            <Link
              href="/newsletter"
              className="inline-flex items-center mt-4 px-4 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-500 rounded-md transition-colors"
            >
              Assinar newsletter
            </Link>
          </div>

          {/* Separator — visible only on lg */}
          <div className="hidden lg:block w-px bg-primary-800 self-stretch" />

          {/* Links — 5 columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-6 flex-1">
            {/* Formação & Carreira */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-white mb-2">Formação & Carreira</h4>
              <ul className="space-y-1">
                {footerNavigation.formacao.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-[13px] text-primary-300 hover:text-white transition-colors">{item.label}</Link>
                  </li>
                ))}
                <li><Link href="/artigos/roadmap-carreira-engenheiro-biomedico" className="text-[13px] text-primary-300 hover:text-white transition-colors">Roadmap de Carreira</Link></li>
                <li><Link href="/artigos/certificacoes-engenheiros-biomedicos" className="text-[13px] text-primary-300 hover:text-white transition-colors">Certificações</Link></li>
              </ul>
            </div>

            {/* Áreas de Atuação */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-white mb-2">Áreas de Atuação</h4>
              <ul className="space-y-1">
                <li><Link href="/artigos/engenharia-clinica-guia-completo" className="text-[13px] text-primary-300 hover:text-white transition-colors">Eng. Clínica</Link></li>
                <li><Link href="/artigos/ia-saude-brasil" className="text-[13px] text-primary-300 hover:text-white transition-colors">IA em Saúde</Link></li>
                <li><Link href="/artigos/cirurgia-robotica-brasil" className="text-[13px] text-primary-300 hover:text-white transition-colors">Robótica Cirúrgica</Link></li>
                <li><Link href="/artigos/neuroengenharia-bci" className="text-[13px] text-primary-300 hover:text-white transition-colors">Neuroengenharia</Link></li>
                <li><Link href="/artigos/biomateriais-implantes-bioimpressao" className="text-[13px] text-primary-300 hover:text-white transition-colors">Biomateriais</Link></li>
              </ul>
            </div>

            {/* Mercado */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-white mb-2">Mercado</h4>
              <ul className="space-y-1">
                {footerNavigation.mercado.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-[13px] text-primary-300 hover:text-white transition-colors">{item.label}</Link>
                  </li>
                ))}
                <li><Link href="/artigos/equipamentos-diagnostico-imagem" className="text-[13px] text-primary-300 hover:text-white transition-colors">Diagnóstico por Imagem</Link></li>
              </ul>
            </div>

            {/* Regulamentação */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-white mb-2">Regulamentação</h4>
              <ul className="space-y-1">
                <li><Link href="/artigos/anvisa-dispositivos-medicos-guia-2026" className="text-[13px] text-primary-300 hover:text-white transition-colors">ANVISA</Link></li>
                <li><Link href="/artigos/registro-crea-engenheiro-biomedico-guia" className="text-[13px] text-primary-300 hover:text-white transition-colors">CREA</Link></li>
                <li><Link href="/artigos/normas-tecnicas-engenharia-biomedica" className="text-[13px] text-primary-300 hover:text-white transition-colors">Normas Técnicas</Link></li>
                <li><Link href="/artigos/samd-software-dispositivo-medico" className="text-[13px] text-primary-300 hover:text-white transition-colors">SaMD</Link></li>
              </ul>
            </div>

            {/* Pesquisa */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-white mb-2">Pesquisa</h4>
              <ul className="space-y-1">
                {footerNavigation.pesquisa.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-[13px] text-primary-300 hover:text-white transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-800">
        <div className="container-page py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="font-mono text-sm font-medium text-primary-300">
            &copy; {new Date().getFullYear()} engenhariabiomedica.com
          </span>
          <nav className="flex gap-6">
            {footerNavigation.portal.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-white hover:text-teal-400 transition-colors">{item.label}</Link>
            ))}
          </nav>
          <span className="text-sm font-medium text-primary-300">
            Feito no Brasil 🇧🇷
          </span>
        </div>
      </div>
    </footer>
  );
}
