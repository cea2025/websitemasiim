'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Hero() {
  const locale = useLocale();

  return (
    <section className="bg-white py-16 lg:py-[136px]">
      <div className="container">
        {/* Main Content */}
        <div className="flex flex-col items-center gap-[30px] lg:gap-[45px]">
          
          {/* Badge - החסכון המשולב */}
          <div className="bg-[#2a2a2a] rounded-full px-[25px] h-[41px] flex items-center justify-center">
            <div className="flex items-center gap-[10px]">
              <span className="text-white text-[16px] lg:text-[18px] font-bold shadow-[0px_0px_4px_rgba(255,255,255,0.35)]">
                החסכון המשולב
              </span>
              {/* Toggle/Check Icon */}
              <div className="w-[28px] h-[28px] flex items-center justify-center">
                <svg width="28" height="33" viewBox="0 0 28 33" fill="none">
                  <circle cx="14" cy="14" r="14" fill="#f8f8f8"/>
                  <path d="M9 14L12 17L19 11" stroke="#242424" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Titles Section */}
          <div className="flex flex-col items-center gap-[20px] text-center">
            <h1 className="heading-xl max-w-[957px] px-4">
              הפתרון החדשני והמומלץ למימון נישואי הילדים
            </h1>
            <p className="text-[20px] lg:text-[30px] text-black font-normal max-w-[900px] px-4">
              שיטה חדשה וייחודית המשלבת השקעה בשוק ההון לצד חיסכון וקבלת הלוואות מוזלות.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-[15px] lg:gap-[20px] w-full sm:w-auto px-4 sm:px-0">
            <Link
              href={`/${locale}/join`}
              className="btn btn-primary w-full sm:w-[222px] justify-center"
            >
              <svg className="btn-arrow" viewBox="0 0 16 24" fill="none">
                <path d="M10 6L6 12L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>הצטרפות לקרן</span>
            </Link>
            
            <Link
              href={`/${locale}/about`}
              className="btn btn-outline w-full sm:w-auto justify-center"
            >
              <span>ספרו לי עוד על הקרן</span>
            </Link>
          </div>
        </div>

        {/* Video Placeholder */}
        <div className="mt-[60px] lg:mt-[100px] px-4 lg:px-0">
          <div className="mx-auto w-full max-w-[1253px] aspect-video lg:h-[589px] bg-[#bababa] rounded-[10px] flex items-center justify-center cursor-pointer group">
            {/* Play Button */}
            <div className="w-[60px] h-[60px] lg:w-[83px] lg:h-[83px] rounded-full bg-white/90 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all shadow-lg">
              <svg className="w-[30px] h-[30px] lg:w-[45px] lg:h-[45px] text-[#242424] mr-[-3px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
