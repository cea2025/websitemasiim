'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function CombinedSavings() {
  const locale = useLocale();

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex items-start justify-between gap-[80px]">
          {/* Diagram - Left Side */}
          <div className="w-[535px] flex-shrink-0">
            {/* Savings Diagram */}
            <div className="relative">
              {/* Top: Your Savings */}
              <div className="flex justify-center mb-[35px]">
                <div className="flex flex-col items-center gap-[15px]">
                  <div className="w-[70px] h-[47px] bg-[#f0f0f0] rounded-lg flex items-center justify-center">
                    <svg className="w-[40px] h-[30px]" viewBox="0 0 40 30" fill="none">
                      <path d="M5 25V10L20 5L35 10V25" stroke="#242424" strokeWidth="2"/>
                      <rect x="15" y="15" width="10" height="10" stroke="#242424" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span className="text-[19px] text-black">החסכון שלכם</span>
                </div>
              </div>

              {/* Flow arrows */}
              <div className="flex justify-center gap-[100px] mb-[35px]">
                <svg className="w-[126px] h-[92px]" viewBox="0 0 126 92" fill="none">
                  <path d="M126 0C126 40 80 92 0 92" stroke="#e0e0e0" strokeWidth="2" fill="none"/>
                </svg>
                <svg className="w-[127px] h-[92px]" viewBox="0 0 127 92" fill="none">
                  <path d="M0 0C0 40 46 92 127 92" stroke="#e0e0e0" strokeWidth="2" fill="none"/>
                </svg>
              </div>

              {/* Middle: Stock Market & Gmach */}
              <div className="flex justify-between items-center px-[20px] mb-[35px]">
                {/* Stock Market Circle */}
                <div className="flex flex-col items-center gap-[10px]">
                  <div className="w-[150px] h-[152px] rounded-full bg-gradient-to-b from-[#f5f5f5] to-[#e0e0e0] flex items-center justify-center">
                    <div className="flex flex-col items-center">
                      <svg className="w-[72px] h-[72px]" viewBox="0 0 72 72" fill="none">
                        <path d="M20 50L30 35L40 45L55 25" stroke="#242424" strokeWidth="3" strokeLinecap="round"/>
                        <circle cx="55" cy="25" r="5" fill="#242424"/>
                      </svg>
                    </div>
                  </div>
                  <span className="text-[19px] text-black">שוק ההון</span>
                </div>

                {/* Gmach Circle */}
                <div className="flex flex-col items-center gap-[10px]">
                  <div className="w-[150px] h-[152px] rounded-full bg-gradient-to-b from-[#f5f5f5] to-[#e0e0e0] flex items-center justify-center">
                    <div className="flex flex-col items-center">
                      <svg className="w-[70px] h-[70px]" viewBox="0 0 70 70" fill="none">
                        <path d="M35 15V55M25 25L35 15L45 25M20 45H50" stroke="#242424" strokeWidth="3" strokeLinecap="round"/>
                        <text x="32" y="40" fill="#242424" fontSize="12" fontWeight="bold">₪</text>
                      </svg>
                    </div>
                  </div>
                  <span className="text-[19px] text-black">תוכניות הגמ״ח</span>
                </div>
              </div>

              {/* Flow arrows down */}
              <div className="flex justify-center gap-[40px] mb-[20px]">
                <svg className="w-[164px] h-[85px]" viewBox="0 0 164 85" fill="none">
                  <path d="M0 0C40 40 124 40 164 85" stroke="#e0e0e0" strokeWidth="2" fill="none"/>
                </svg>
                <svg className="w-[163px] h-[85px]" viewBox="0 0 163 85" fill="none">
                  <path d="M163 0C123 40 39 40 0 85" stroke="#e0e0e0" strokeWidth="2" fill="none"/>
                </svg>
              </div>

              {/* Bottom: Result */}
              <div className="flex justify-center">
                <div className="flex flex-col items-center gap-[10px]">
                  <div className="w-[150px] h-[152px] rounded-full border-4 border-[#e0e0e0] flex items-center justify-center">
                    <svg className="w-[70px] h-[70px]" viewBox="0 0 70 70" fill="none">
                      <path d="M15 55C25 45 35 35 55 15" stroke="#242424" strokeWidth="3"/>
                      <circle cx="35" cy="35" r="20" stroke="#242424" strokeWidth="2" strokeDasharray="5 5"/>
                    </svg>
                  </div>
                  <p className="text-[19px] text-black text-center max-w-[109px] leading-tight">
                    מחתנים באחריות{' '}
                    <br />
                    ובכבוד
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content - Right Side */}
          <div className="flex flex-col gap-[50px] max-w-[589px]">
            <div className="flex flex-col gap-[30px]">
              <h2 className="text-[45px] font-bold text-[#1c1c1c] leading-[1.13] text-right">
                חסכון משולב המעניק תשואה גבוהה יחד עם וודאות.
              </h2>
              <p className="text-[22px] font-light text-[#182f43] leading-[1.5] text-right">
                השילוב הייחודי שלנו כולל נתיב סולידי ונתיב תנודתי יותר. הנתיב הסולידי הוא תוכניות הגמ״ח, המעניק ביטחון ושקט נפשי, בעוד הנתיב התנודתי מושקע במדד S&P 500 – מדד מוביל ובטוח לטווח הארוך, הכולל את החברות הגדולות והיציבות בארה&quot;ב. גם וודאות וגם לחתן מהון עצמי, גם גמ&quot;ח וגם שוק ההון, גם ריבית־דריבית וגם הלוואה נוחה, גם הפקדה חודשית בסכום סביר וגם הנמכה משמעותית של החזר ההלוואה אחרי החתונה, גם סיכון מחושב וגם אחריות על הילדים.
              </p>
            </div>
            <div className="flex justify-end">
              <Link href={`/${locale}/join`} className="btn btn-primary">
                <svg className="w-[16px] h-[24px] arrow-icon" viewBox="0 0 16 24" fill="none">
                  <path d="M6 18L10 12L6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[20px] font-semibold">הצטרפות למשיאים</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
