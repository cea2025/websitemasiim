'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Rabbis() {
  const locale = useLocale();

  const endorsements = [
    'הידור בחסד',
    'הידור במעשרות', 
    'הידור בריבית'
  ];

  return (
    <section className="section bg-white py-[65px]">
      <div className="container">
        <div className="flex flex-col items-center gap-[45px]">
          {/* Title */}
          <h2 className="text-[45px] font-bold text-[#1c1c1c] text-center leading-[1.13]">
            בהכוונת גדולי ישראל שליט״א
          </h2>

          {/* Rabbis Placeholders */}
          <div className="flex items-center gap-[51px]">
            {[...Array(7)].map((_, index) => (
              <div 
                key={index}
                className="w-[149px] h-[134px] bg-[#bababa] rounded-lg flex items-center justify-center"
              >
                <svg className="w-[29px] h-[23px] text-gray-500" viewBox="0 0 29 23" fill="none">
                  <rect x="2" y="4" width="25" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="14.5" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
            ))}
          </div>

          {/* Endorsements Tags */}
          <div className="flex items-center gap-[60px]">
            {endorsements.map((item, index) => (
              <div key={index} className="flex items-center gap-[12px]">
                <span className="text-[14px] text-black">{item}</span>
                <div className="w-[20px] h-[20px] rounded-full bg-[#242424] flex items-center justify-center">
                  <svg className="w-[14px] h-[14px]" viewBox="0 0 14 14" fill="none">
                    <path d="M4 7L6 9L10 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link href={`/${locale}/endorsements`} className="btn btn-primary">
            <svg className="w-[16px] h-[24px] arrow-icon" viewBox="0 0 16 24" fill="none">
              <path d="M6 18L10 12L6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[20px] font-semibold">לצפייה בכלל ההסכמות</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

