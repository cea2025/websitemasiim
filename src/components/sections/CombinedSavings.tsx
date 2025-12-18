'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function CombinedSavings() {
  const locale = useLocale();

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[40px] lg:gap-[80px]">
          
          {/* Diagram - Left on Desktop */}
          <div className="w-full lg:w-[535px] flex-shrink-0 order-2 lg:order-1">
            <div className="flex flex-col items-center gap-[30px] lg:gap-[35px]">
              
              {/* Top: Your Savings */}
              <div className="flex flex-col items-center gap-[12px] lg:gap-[15px]">
                <div className="w-[60px] h-[40px] lg:w-[70px] lg:h-[47px] bg-[#f5f5f5] rounded-lg flex items-center justify-center">
                  <svg className="w-[35px] h-[25px] lg:w-[40px] lg:h-[30px]" viewBox="0 0 40 30" fill="none">
                    <path d="M5 25V10L20 3L35 10V25" stroke="#242424" strokeWidth="2" strokeLinejoin="round"/>
                    <rect x="15" y="14" width="10" height="11" stroke="#242424" strokeWidth="2"/>
                  </svg>
                </div>
                <span className="text-[16px] lg:text-[19px] text-black">החסכון שלכם</span>
              </div>

              {/* Flow Lines */}
              <div className="relative w-full h-[60px] lg:h-[80px]">
                <svg className="w-full h-full" viewBox="0 0 400 80" fill="none" preserveAspectRatio="none">
                  <path d="M200 0C200 30 100 50 50 80" stroke="#e0e0e0" strokeWidth="2" fill="none"/>
                  <path d="M200 0C200 30 300 50 350 80" stroke="#e0e0e0" strokeWidth="2" fill="none"/>
                </svg>
              </div>

              {/* Middle Row: Stock Market & Gmach */}
              <div className="flex justify-between items-center w-full px-[10px] lg:px-[20px]">
                {/* Stock Market */}
                <div className="flex flex-col items-center gap-[8px] lg:gap-[10px]">
                  <div className="w-[120px] h-[120px] lg:w-[150px] lg:h-[152px] rounded-full bg-gradient-to-b from-[#f8f8f8] to-[#e8e8e8] flex items-center justify-center shadow-inner">
                    <svg className="w-[55px] h-[55px] lg:w-[72px] lg:h-[72px]" viewBox="0 0 72 72" fill="none">
                      <path d="M15 50L28 32L42 44L58 22" stroke="#242424" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="58" cy="22" r="5" fill="#242424"/>
                    </svg>
                  </div>
                  <span className="text-[16px] lg:text-[19px] text-black">שוק ההון</span>
                </div>

                {/* Gmach */}
                <div className="flex flex-col items-center gap-[8px] lg:gap-[10px]">
                  <div className="w-[120px] h-[120px] lg:w-[150px] lg:h-[152px] rounded-full bg-gradient-to-b from-[#f8f8f8] to-[#e8e8e8] flex items-center justify-center shadow-inner">
                    <svg className="w-[55px] h-[55px] lg:w-[70px] lg:h-[70px]" viewBox="0 0 70 70" fill="none">
                      <path d="M35 12V58" stroke="#242424" strokeWidth="3" strokeLinecap="round"/>
                      <path d="M22 25L35 12L48 25" stroke="#242424" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18 50H52" stroke="#242424" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="text-[16px] lg:text-[19px] text-black">תוכניות הגמ״ח</span>
                </div>
              </div>

              {/* Flow Lines Down */}
              <div className="relative w-full h-[50px] lg:h-[70px]">
                <svg className="w-full h-full" viewBox="0 0 400 70" fill="none" preserveAspectRatio="none">
                  <path d="M50 0C100 30 150 50 200 70" stroke="#e0e0e0" strokeWidth="2" fill="none"/>
                  <path d="M350 0C300 30 250 50 200 70" stroke="#e0e0e0" strokeWidth="2" fill="none"/>
                </svg>
              </div>

              {/* Bottom: Result */}
              <div className="flex flex-col items-center gap-[8px] lg:gap-[10px]">
                <div className="w-[120px] h-[120px] lg:w-[150px] lg:h-[152px] rounded-full border-[3px] border-dashed border-[#d0d0d0] flex items-center justify-center">
                  <svg className="w-[55px] h-[55px] lg:w-[70px] lg:h-[70px]" viewBox="0 0 70 70" fill="none">
                    <circle cx="35" cy="35" r="25" stroke="#242424" strokeWidth="2"/>
                    <path d="M25 35L32 42L45 29" stroke="#242424" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-[16px] lg:text-[19px] text-black text-center leading-tight max-w-[130px]">
                  מחתנים באחריות ובכבוד
                </p>
              </div>
            </div>
          </div>

          {/* Text Content - Right on Desktop */}
          <div className="flex flex-col gap-[35px] lg:gap-[50px] max-w-[589px] order-1 lg:order-2">
            <div className="flex flex-col gap-[20px] lg:gap-[30px]">
              <h2 className="heading-lg text-right">
                חסכון משולב המעניק תשואה גבוהה יחד עם וודאות.
              </h2>
              <p className="text-lg text-right">
                השילוב הייחודי שלנו כולל נתיב סולידי ונתיב תנודתי יותר. הנתיב הסולידי הוא תוכניות הגמ״ח, המעניק ביטחון ושקט נפשי, בעוד הנתיב התנודתי מושקע במדד S&P 500 – מדד מוביל ובטוח לטווח הארוך, הכולל את החברות הגדולות והיציבות בארה&quot;ב. גם וודאות וגם לחתן מהון עצמי, גם גמ&quot;ח וגם שוק ההון, גם ריבית־דריבית וגם הלוואה נוחה, גם הפקדה חודשית בסכום סביר וגם הנמכה משמעותית של החזר ההלוואה אחרי החתונה, גם סיכון מחושב וגם אחריות על הילדים.
              </p>
            </div>
            <div className="flex justify-end">
              <Link href={`/${locale}/join`} className="btn btn-primary">
                <svg className="btn-arrow" viewBox="0 0 16 24" fill="none">
                  <path d="M10 6L6 12L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>הצטרפות למשיאים</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
