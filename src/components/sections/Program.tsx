'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Program() {
  const locale = useLocale();

  const features = [
    'פריסה נוחה של ההפקדות בהתאם ליכולות המשפחה',
    'אישור הלכתי מלא מגדולי ישראל',
    'מעקב שוטף אחר מצב הכספים וההשקעות',
    'דמי ניהול נמוכים בשיתוף מיטב דש',
    'שירות לקוחות זמין ומסור',
  ];

  return (
    <section className="section-gray py-[60px] lg:py-[85px]">
      <div className="container">
        <div className="flex flex-col items-center gap-[30px] lg:gap-[40px]">
          
          {/* Header */}
          <div className="flex flex-col items-center gap-[15px] lg:gap-[18px] text-center max-w-[690px]">
            <h2 className="heading-lg">
              התוכנית המשולבת של קרן משיאים
            </h2>
            <p className="text-xl">
              הפתרון הייחודי שלנו לשילוב של תשואה גבוהה ויציבות.
            </p>
          </div>

          {/* Program Card */}
          <div className="w-full max-w-[1000px]">
            <div className="bg-white border-[1.5px] border-black rounded-[16px] shadow-[0px_6px_14px_rgba(145,145,145,0.1),0px_25px_25px_rgba(145,145,145,0.09),0px_56px_34px_rgba(145,145,145,0.05)] p-[25px] lg:p-[50px]">
              
              {/* Desktop Layout */}
              <div className="hidden lg:flex items-start justify-between h-[322px]">
                
                {/* Features List - Left */}
                <div className="flex flex-col gap-[20px] lg:gap-[26px]">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-[14px]">
                      <p className="text-[18px] font-normal text-black text-right max-w-[257px] leading-[1.5]">
                        {feature}
                      </p>
                      <div className="check-circle flex-shrink-0">
                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
                          <path d="M1 4L4 7L10 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="w-[1px] h-full bg-black mx-[40px] lg:mx-[60px]" />

                {/* Program Info - Right */}
                <div className="flex flex-col justify-between h-full max-w-[376px]">
                  <div className="flex flex-col gap-[25px] lg:gap-[35px]">
                    <div className="flex flex-col gap-[15px] lg:gap-[20px] text-right">
                      <h3 className="heading-md">
                        התוכנית המשולבת
                      </h3>
                      <p className="text-[20px] lg:text-[22px] font-normal text-black">
                        שוק ההון & הגמ&quot;ח המרכזי
                      </p>
                    </div>
                    <p className="text-[18px] font-light text-black leading-[1.5] text-right">
                      מתאים למי שרוצה תשואה עם וודאות וזקוק לסכומים גבוהים לחתונות הילדים.
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-[15px]">
                    <Link href={`/${locale}/join`} className="btn btn-primary w-full justify-center">
                      <span>לעוד פרטים והצטרפות</span>
                    </Link>
                    <Link href={`/${locale}/contact`} className="btn btn-outline w-full justify-center">
                      <span>ליצירת קשר עם נציג</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="lg:hidden flex flex-col gap-[30px]">
                {/* Program Info */}
                <div className="flex flex-col gap-[20px] text-right">
                  <h3 className="heading-md">
                    התוכנית המשולבת
                  </h3>
                  <p className="text-[18px] font-normal text-black">
                    שוק ההון & הגמ&quot;ח המרכזי
                  </p>
                  <p className="text-[16px] font-light text-black leading-[1.5]">
                    מתאים למי שרוצה תשואה עם וודאות וזקוק לסכומים גבוהים לחתונות הילדים.
                  </p>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-gray-300" />

                {/* Features */}
                <div className="flex flex-col gap-[16px]">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-[12px]">
                      <p className="text-[16px] font-normal text-black text-right flex-1">
                        {feature}
                      </p>
                      <div className="check-circle flex-shrink-0">
                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
                          <path d="M1 4L4 7L10 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-[12px]">
                  <Link href={`/${locale}/join`} className="btn btn-primary w-full justify-center">
                    <span>לעוד פרטים והצטרפות</span>
                  </Link>
                  <Link href={`/${locale}/contact`} className="btn btn-outline w-full justify-center">
                    <span>ליצירת קשר עם נציג</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Alternative link */}
            <p className="text-[18px] lg:text-[24px] font-light text-[#242424] text-center underline tracking-[-0.24px] leading-[1.5] cursor-pointer hover:text-[#1c1c1c] mt-[25px] lg:mt-[30px]">
              מעוניינים בנתיב השקעה אלטרנטיבי? צפו בתוכניות נוספות &gt;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
