'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Header() {
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'התוכניות שלנו', href: '/programs' },
    { label: 'על הקרן', href: '/about', hasDropdown: true },
    { label: 'המרחב המקצועי', href: '/professional', hasDropdown: true },
    { label: 'סימולטור', href: '/simulator' },
    { label: 'הסכמות גדולי ישראל', href: '/endorsements' },
    { label: 'שו״ת', href: '/faq' },
    { label: 'צרו קשר', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#252525]">
      <div className="container-wide">
        <nav className="flex items-center justify-between h-[76px]">
          {/* CTA Link - Left (in RTL) */}
          <div className="hidden lg:block">
            <Link 
              href={`/${locale}/join`}
              className="text-white text-[20px] font-semibold underline decoration-white hover:opacity-80 transition-opacity"
            >
              הצטרפות לקרן
            </Link>
          </div>

          {/* Desktop Nav - Center */}
          <div className="hidden lg:flex items-center gap-[55px]">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={`/${locale}${item.href}`}
                className="flex items-center gap-[6px] text-white text-[16px] font-normal hover:opacity-80 transition-opacity"
              >
                {item.hasDropdown && (
                  <svg className="w-[24px] h-[24px] rotate-180" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Logo - Right (in RTL) */}
          <Link href={`/${locale}`} className="flex items-center">
            <div className="flex items-center gap-2">
              {/* Logo Icon */}
              <svg className="w-[40px] h-[40px]" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2"/>
                <path d="M12 26V16L20 22L28 16V26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="20" cy="12" r="2.5" fill="#2DD4BF"/>
              </svg>
              <div className="flex flex-col items-end">
                <span className="text-white text-[24px] font-bold leading-tight">משיאים</span>
                <span className="text-gray-400 text-[11px]">מחתנים באחריות.</span>
              </div>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="תפריט"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-[76px] left-0 right-0 bg-[#252525] border-t border-gray-700 shadow-lg">
            <div className="py-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={`/${locale}${item.href}`}
                  className="block py-3 px-6 text-white text-[16px] hover:bg-gray-800 transition-colors text-right"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-6 pt-4 border-t border-gray-700 mt-4">
                <Link
                  href={`/${locale}/join`}
                  className="block w-full text-center py-3 bg-white text-[#252525] font-semibold rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  הצטרפות לקרן
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
