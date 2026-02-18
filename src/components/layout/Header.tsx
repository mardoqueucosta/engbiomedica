'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { mainNavigation } from '@/data/navigation';
import { Logo } from './Logo';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="container-page">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNavigation.map((item) => (
              <div
                key={item.href}
                className="relative group"
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-600 hover:text-primary-700 transition-colors rounded-lg hover:bg-primary-50"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5 opacity-50" />}
                </Link>

                {/* Dropdown — CSS only via group-hover */}
                {item.children && (
                  <div className="absolute top-full left-0 pt-1 z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-[opacity,visibility] duration-150">
                    <div className="bg-white rounded-card border border-slate-100 shadow-elevated py-1.5 min-w-[200px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-slate-600 hover:text-primary-700 hover:bg-primary-50 transition-colors"
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
            <Link
              href="/newsletter"
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-primary-700 rounded-lg hover:bg-primary-800 transition-colors"
            >
              Newsletter
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-primary-700 rounded-lg hover:bg-primary-50"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="lg:hidden py-4 border-t border-slate-100 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="flex flex-col gap-1">
              {mainNavigation.map((item) => (
                <div key={item.href}>
                  {item.children ? (
                    <button
                      onClick={() => setMobileDropdown(mobileDropdown === item.label ? null : item.label)}
                      className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors"
                    >
                      <span className="flex items-center gap-3">
                        {item.icon && <item.icon className="w-4 h-4 text-slate-400" />}
                        {item.label}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors"
                    >
                      {item.icon && <item.icon className="w-4 h-4 text-slate-400" />}
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
                          className="block px-3 py-1.5 text-sm text-slate-500 hover:text-primary-700 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* Newsletter CTA mobile */}
              <div className="mt-3 pt-3 border-t border-slate-100">
                <Link
                  href="/newsletter"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-primary-700 rounded-lg hover:bg-primary-800 transition-colors"
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
