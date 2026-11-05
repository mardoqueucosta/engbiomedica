'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { mainNavigation } from '@/data/navigation';
import { Logo } from './Logo';
import { SearchModal } from '@/components/search/SearchModal';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  return (
    <header className="bg-primary-900 border-b border-white/[0.06] sticky top-0 z-50">
      <div className="container-page">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo dark />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center">
            {mainNavigation.filter((item) => !item.ocultarNoMenuDesktop).map((item) => (
              <div
                key={item.href}
                className="relative group"
              >
                <Link
                  href={item.href}
                  className="relative flex items-center gap-1 px-1.5 py-2 text-[13px] font-medium text-white/85 hover:text-white transition-colors whitespace-nowrap after:absolute after:bottom-0.5 after:left-1/2 after:h-0.5 after:w-0 after:rounded after:bg-[#7B8FA3] after:transition-all hover:after:left-[20%] hover:after:w-[60%]"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5 opacity-60 transition-transform group-hover:rotate-180" />}
                </Link>

                {/* Dropdown — CSS only via group-hover */}
                {item.children && (
                  <div className="absolute top-full left-0 pt-1 z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-[opacity,visibility] duration-150">
                    <div className="bg-primary-900 rounded-[10px] border border-white/[0.08] shadow-[0_8px_24px_rgba(0,0,0,0.25)] p-1.5 min-w-[220px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3.5 py-2.5 text-[13px] font-medium text-white/80 hover:text-white hover:bg-white/[0.08] rounded-md transition-colors whitespace-nowrap"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <SearchModal />
            <Link
              href="/newsletter"
              className="hidden sm:inline-flex items-center px-5 py-2 text-sm font-semibold text-[#0A2540] bg-[#B8C4D0] rounded-full hover:bg-[#D5DCE4] transition-colors"
            >
              Newsletter
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 text-white/85 hover:text-white rounded-lg hover:bg-white/10"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="xl:hidden py-4 border-t border-white/10 max-h-[calc(100vh-4.5rem)] overflow-y-auto">
            <div className="flex flex-col gap-1">
              {mainNavigation.map((item) => (
                <div key={item.href}>
                  {item.children ? (
                    <button
                      onClick={() => setMobileDropdown(mobileDropdown === item.label ? null : item.label)}
                      className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <span className="flex items-center gap-3">
                        {item.icon && <item.icon className="w-4 h-4 text-white/50" />}
                        {item.label}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-white/50 transition-transform ${mobileDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                      {item.icon && <item.icon className="w-4 h-4 text-white/50" />}
                      {item.label}
                    </Link>
                  )}
                  {item.children && mobileDropdown === item.label && (
                    <div className="ml-10 flex flex-col gap-0.5 pb-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-1.5 text-sm text-white/70 hover:text-white transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* Newsletter CTA mobile */}
              <div className="mt-3 pt-3 border-t border-white/10">
                <Link
                  href="/newsletter"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-[#0A2540] bg-[#B8C4D0] rounded-full hover:bg-[#D5DCE4] transition-colors"
                >
                  Newsletter
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
