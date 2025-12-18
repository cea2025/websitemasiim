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
    { label: 'המרחב המקצועי', href: '/resources', hasDropdown: true },
    { label: 'סימולטור', href: '/simulator' },
    { label: 'הסכמות גדולי ישראל', href: '/approvals' },
    { label: 'שו״ת', href: '/faq' },
    { label: 'צרו קשר', href: '/contact' },
  ];

  // Logo Component - reusable for both mobile and desktop
  const Logo = ({ className = '' }: { className?: string }) => (
    <Link href={`/${locale}`} className={`flex items-center gap-2 ${className}`}>
      {/* Logo Icon */}
      <svg className="w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" fill="#3B3B3B" stroke="#4A4A4A" strokeWidth="1"/>
        <circle cx="20" cy="12" r="3" fill="#2DD4BF"/>
        <path d="M14 28C14 28 16 22 20 22C24 22 26 28 26 28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 28H28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      <div className="flex flex-col items-end">
        <span className="text-white text-[20px] lg:text-[24px] font-bold leading-tight">משיאים</span>
        <span className="text-gray-400 text-[10px] lg:text-[11px]">מחתנים באחריות.</span>
      </div>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 bg-[#252525]">
      {/* Mobile Header - Figma exact match */}
      <div className="lg:hidden">
        <nav className="flex items-center justify-between px-5 py-[10px] h-[70px]">
          {/* Hamburger Menu - Left in RTL */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-[30px] h-[30px] flex items-center justify-center text-white"
            aria-label="תפריט"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none">
                <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </button>

          {/* Logo - Right in RTL */}
          <Logo />
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-[70px] left-0 right-0 bg-[#252525] border-t border-gray-700 shadow-lg z-50">
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
                  className="block w-full text-center py-3 bg-[#2DD4BF] text-[#1c1c1c] font-semibold rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  הצטרפות לקרן
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:block">
        <div className="container-wide">
          <nav className="flex items-center justify-between h-[76px]">
            {/* CTA Link - Left (in RTL) */}
            <Link 
              href={`/${locale}/join`}
              className="text-white text-[18px] font-semibold underline decoration-white underline-offset-4 hover:opacity-80 transition-opacity"
            >
              הצטרפות לקרן
            </Link>

            {/* Desktop Nav - Center */}
            <div className="flex items-center gap-[40px]">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={`/${locale}${item.href}`}
                  className="flex items-center gap-[6px] text-white text-[15px] font-normal hover:opacity-80 transition-opacity whitespace-nowrap"
                >
                  {item.hasDropdown && (
                    <svg className="w-[20px] h-[20px] rotate-180" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Logo - Right (in RTL) */}
            <Logo />
          </nav>
        </div>
      </div>
    </header>
  );
}
