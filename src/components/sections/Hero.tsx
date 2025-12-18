'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Hero() {
  const locale = useLocale();

  return (
    <section className="bg-white pt-[136px] pb-[100px]">
      <div className="container">
        <div className="flex flex-col items-center gap-[45px]">
          {/* Top Content */}
          <div className="flex flex-col items-center gap-[30px]">
            {/* Badge - החסכון המשולב */}
            <div className="bg-[#2a2a2a] rounded-full px-[25px] py-[15px] pb-[18px] flex items-center justify-center">
              <div className="flex items-center gap-[10px]">
                <div className="flex items-center justify-center shadow-[0px_0px_4px_0px_rgba(255,255,255,0.35)]">
                  <span className="text-white text-[18px] font-bold text-center whitespace-nowrap">
                    החסכון המשולב
                  </span>
                </div>
                {/* Toggle Icon */}
                <div className="w-[28px] h-[28px] relative">
                  <svg viewBox="0 0 28 33" fill="none" className="w-full h-full">
                    <rect width="28" height="28" rx="14" fill="#f8f8f8"/>
                    <path d="M9 14L12 17L19 10" stroke="#242424" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Titles */}
            <div className="flex flex-col items-center gap-[20px] text-center">
              <h1 className="text-[70px] font-bold text-[#1c1c1c] leading-[1.13] tracking-[-2.1px] max-w-[957px]">
                הפתרון החדשני והמומלץ למימון נישואי הילדים
              </h1>
              <p className="text-[30px] text-black font-normal whitespace-nowrap">
                שיטה חדשה וייחודית המשלבת השקעה בשוק ההון לצד חיסכון וקבלת הלוואות מוזלות.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-start gap-[20px]">
            <Link
              href={`/${locale}/join`}
              className="btn btn-primary flex items-center gap-[15px] w-[222px]"
            >
              {/* Arrow Icon */}
              <svg className="w-[16px] h-[24px] arrow-icon" viewBox="0 0 16 24" fill="none">
                <path d="M6 18L10 12L6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[20px] font-semibold">הצטרפות לקרן</span>
            </Link>
            
            <Link
              href={`/${locale}/about`}
              className="btn btn-outline"
            >
              <span className="text-[20px] font-semibold">ספרו לי עוד על הקרן</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Video Placeholder */}
      <div className="container mt-[100px]">
        <div className="mx-auto w-full max-w-[1253px] h-[589px] bg-[#bababa] rounded-lg flex items-center justify-center">
          {/* Play Button */}
          <div className="w-[83px] h-[83px] rounded-full bg-white/80 flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
            <svg className="w-[45px] h-[45px] text-[#242424] mr-[-4px]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
