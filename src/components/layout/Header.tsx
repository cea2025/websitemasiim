'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems = [
    { key: 'programs', href: '/programs' },
    { 
      key: 'about', 
      href: '/about',
      hasDropdown: true,
      dropdownItems: [
        { key: 'about', href: '/about' },
      ]
    },
    { 
      key: 'professional', 
      href: '/professional',
      hasDropdown: true,
      dropdownItems: [
        { key: 'professional', href: '/professional' },
      ]
    },
    { key: 'simulator', href: '/simulator' },
    { key: 'endorsements', href: '/endorsements' },
    { key: 'faq', href: '/faq' },
    { key: 'contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#252525]">
      <div className="container-wide">
        <nav className="flex items-center justify-between h-[76px] px-[90px]">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center">
            <div className="w-[184px] h-[51px] relative">
              {/* Logo placeholder - will be replaced with actual logo */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">קרן משיאים</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav - Center */}
          <div className="hidden lg:flex items-center gap-[55px]">
            {navItems.map((item) => (
              <div 
                key={item.key} 
                className="relative"
                onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.key)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={`/${locale}${item.href}`}
                  className="flex items-center gap-[6px] text-white text-[16px] font-normal transition-colors hover:opacity-80"
                >
                  <span>{t(item.key)}</span>
                  {item.hasDropdown && (
                    <svg 
                      className="w-6 h-6 rotate-180" 
                      viewBox="0 0 24 24" 
                      fill="none"
                    >
                      <path 
                        d="M6 9L12 15L18 9" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </Link>
                {/* Underline */}
                <div className="h-0 w-[40px] mx-auto mt-[27px]" />
              </div>
            ))}
          </div>

          {/* CTA Button - Right */}
          <div className="hidden lg:block">
            <Link 
              href={`/${locale}/join`} 
              className="text-white text-[20px] font-semibold underline hover:opacity-80 transition-opacity"
            >
              {t('join')}
            </Link>
          </div>

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
          <div className="lg:hidden py-4 border-t border-gray-700 bg-[#252525]">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={`/${locale}${item.href}`}
                className="block py-3 px-4 text-white font-normal hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <Link
                href={`/${locale}/join`}
                className="block text-center py-3 text-white font-semibold underline"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('join')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
