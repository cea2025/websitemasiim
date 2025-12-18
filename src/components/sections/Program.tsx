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
    <section className="section-gray py-[85px]">
      <div className="container">
        <div className="flex flex-col items-center gap-[40px]">
          {/* Header */}
          <div className="flex flex-col items-center gap-[18px] text-center max-w-[690px]">
            <h2 className="text-[45px] font-bold text-[#1c1c1c] leading-[1.13]">
              התוכנית המשולבת של קרן משיאים
            </h2>
            <p className="text-[26px] font-light text-[#242424] tracking-[-0.26px] leading-[1.5]">
              הפתרון הייחודי שלנו לשילוב של תשואה גבוהה ויציבות.
            </p>
          </div>

          {/* Program Card */}
          <div className="flex flex-col gap-[30px] w-full max-w-[1000px]">
            <div className="program-card h-[422px]">
              <div className="flex items-start justify-between h-full">
                {/* Features List - Left */}
                <div className="flex flex-col gap-[30px]">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-[14px]">
                      <p className="text-[18px] font-normal text-black text-right max-w-[257px]">
                        {feature}
                      </p>
                      {/* Check Circle */}
                      <div className="w-[26.5px] h-[26.5px] rounded-full bg-[#1c1c1c] flex items-center justify-center flex-shrink-0">
                        <svg className="w-[11px] h-[8px]" viewBox="0 0 11 8" fill="none">
                          <path d="M1 4L4 7L10 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="w-[1px] h-full bg-black self-stretch mx-[60px]" />

                {/* Program Info - Right */}
                <div className="flex flex-col justify-between h-full max-w-[376px]">
                  <div className="flex flex-col gap-[35px]">
                    <div className="flex flex-col gap-[20px] text-black text-right">
                      <h3 className="text-[35px] font-bold leading-[1.6]">
                        התוכנית המשולבת
                      </h3>
                      <p className="text-[22px] font-normal">
                        שוק ההון & הגמ&quot;ח המרכזי
                      </p>
                    </div>
                    <p className="text-[18px] font-light text-black leading-[1.5] text-right">
                      מתאים למי שרוצה תשואה עם וודאות וזקוק לסכומים גבוהים לחתונות הילדים.
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-[15px]">
                    <Link href={`/${locale}/join`} className="btn btn-primary w-full">
                      <span className="text-[20px] font-semibold">לעוד פרטים והצטרפות</span>
                    </Link>
                    <Link href={`/${locale}/contact`} className="btn btn-outline w-full">
                      <span className="text-[20px] font-semibold">ליצירת קשר עם נציג</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Alternative link */}
            <p className="text-[24px] font-light text-[#242424] text-center underline tracking-[-0.24px] leading-[1.5] cursor-pointer hover:text-[#1c1c1c]">
              מעוניינים בנתיב השקעה אלטרנטיבי? צפו בתוכניות נוספות &gt;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

