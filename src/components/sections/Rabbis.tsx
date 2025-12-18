'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Rabbis() {
  const locale = useLocale();

  const endorsements = [
    { label: 'הידור בחסד' },
    { label: 'הידור במעשרות' },
    { label: 'הידור בריבית' },
  ];

  return (
    <section className="py-[50px] lg:py-[65px] bg-white">
      <div className="container">
        <div className="flex flex-col items-center gap-[30px] lg:gap-[45px]">
          
          {/* Title */}
          <h2 className="heading-lg text-center px-4">
            בהכוונת גדולי ישראל שליט״א
          </h2>

          {/* Rabbis Grid */}
          <div className="w-full overflow-x-auto pb-4">
            <div className="flex items-center justify-center gap-[20px] lg:gap-[51px] min-w-max px-4">
              {[...Array(7)].map((_, index) => (
                <div 
                  key={index}
                  className="w-[100px] h-[90px] lg:w-[149px] lg:h-[134px] bg-[#bababa] rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <svg className="w-[25px] h-[20px] lg:w-[29px] lg:h-[23px] text-gray-600" viewBox="0 0 29 23" fill="none">
                    <rect x="2" y="2" width="25" height="19" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="14.5" cy="11.5" r="5" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Endorsement Tags */}
          <div className="flex flex-wrap items-center justify-center gap-[30px] lg:gap-[60px]">
            {endorsements.map((item, index) => (
              <div key={index} className="flex items-center gap-[12px]">
                <span className="text-[14px] text-black">{item.label}</span>
                <div className="w-[20px] h-[20px] rounded-full bg-[#242424] flex items-center justify-center">
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1 4L4.5 7.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link href={`/${locale}/endorsements`} className="btn btn-primary">
            <svg className="btn-arrow" viewBox="0 0 16 24" fill="none">
              <path d="M10 6L6 12L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>לצפייה בכלל ההסכמות</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
