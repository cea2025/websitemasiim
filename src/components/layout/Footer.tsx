'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Footer() {
  const locale = useLocale();

  const footerLinks = {
    programs: {
      title: 'התוכניות שלנו',
      links: [
        { label: 'התוכנית המשולבת', href: '/programs/combined' },
        { label: 'כל התוכניות הקרן', href: '/programs' },
      ],
    },
    about: {
      title: 'על הקרן',
      links: [
        { label: 'אודות', href: '/about' },
        { label: 'איך זה עובד?', href: '/how-it-works' },
      ],
    },
    professional: {
      title: 'המרחב המקצועי',
      links: [
        { label: 'אודות', href: '/professional' },
        { label: 'איך זה עובד?', href: '/professional/how' },
      ],
    },
    tools: {
      title: 'כלים שימושיים',
      links: [
        { label: 'מחשבון S&P 500', href: '/calculator/sp500' },
        { label: 'מחשבון חתונה', href: '/calculator/wedding' },
        { label: 'הסימולטור של קרן משיאים', href: '/simulator' },
      ],
    },
  };

  return (
    <footer className="bg-[#252525] backdrop-blur-[12.5px] border-t-2 border-white pt-[50px] pb-[30px] px-[50px]">
      <div className="container-wide">
        <div className="flex flex-col gap-[70px]">
          {/* Top Row */}
          <div className="flex items-start justify-between">
            {/* Social Icons - Left */}
            <div className="flex items-center gap-[20px]">
              {/* WhatsApp */}
              <a 
                href="#" 
                className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center shadow-[0px_4px_4px_0px_rgba(73,157,193,0.09)]"
                aria-label="WhatsApp"
              >
                <svg className="w-[19px] h-[19px]" viewBox="0 0 24 24" fill="#252525">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              {/* Email */}
              <a 
                href="mailto:info@mesieim.co.il" 
                className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center shadow-[0px_4px_4px_0px_rgba(73,157,193,0.09)]"
                aria-label="Email"
              >
                <svg className="w-[19px] h-[19px]" viewBox="0 0 24 24" fill="#252525">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>

            {/* Links + Logo - Right */}
            <div className="flex items-start gap-[120px]">
              {/* Links Columns */}
              <div className="flex items-start gap-[60px]">
                {Object.entries(footerLinks).reverse().map(([key, section]) => (
                  <div key={key} className="flex flex-col gap-[9px] text-right text-white">
                    <p className="text-[16px] font-bold">{section.title}</p>
                    {section.links.map((link, index) => (
                      <Link 
                        key={index}
                        href={`/${locale}${link.href}`}
                        className="text-[14px] font-normal hover:underline"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>

              {/* Logo */}
              <div className="w-[159px] h-[44px] flex items-center justify-center mix-blend-luminosity">
                <span className="text-white text-xl font-bold">קרן משיאים</span>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex items-center justify-between">
            {/* Credits - Left */}
            <div className="flex items-center gap-[20px] text-white text-[14px]">
              <span>
                UX/UI By{' '}
                <a href="#" className="underline">Dvir Frishtik</a>
                {' & '}
                <a href="#" className="underline">Mindwayz</a>
              </span>
              <span className="w-[1px] h-[18px] bg-white" />
              <span>
                Development By{' '}
                <a href="#" className="underline">tik-tak</a>
              </span>
            </div>

            {/* Legal Links - Right */}
            <div className="flex items-center gap-[60px]">
              <span className="text-white text-[14px]">
                © כל הזכויות שמורות לקרן משיאים בע״מ
              </span>
              <div className="flex items-center gap-[37px] text-white text-[14px]">
                <Link href={`/${locale}/accessibility`} className="underline hover:opacity-80">
                  נגישות
                </Link>
                <Link href={`/${locale}/privacy`} className="underline hover:opacity-80">
                  מדיניות פרטיות
                </Link>
                <Link href={`/${locale}/terms`} className="underline hover:opacity-80">
                  תקנון
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
