'use client';

import { ChevronLeft } from 'lucide-react';

const benefits = [
  'פריסה נוחה של ההפקדות בהתאם ליכולות המשפחה',
  'אישור הלכתי מלא מגדולי ישראל',
  'מעקב שוטף אחר מצב הכספים וההשקעות',
  'דמי ניהול נמוכים בשיתוף מיטב דש',
  'שירות לקוחות זמין ומסור',
];

// Checkmark Icon Component
const CheckIcon = () => (
  <svg className="w-[26px] h-[26px] flex-shrink-0" viewBox="0 0 26 26" fill="none">
    <circle cx="13" cy="13" r="12" fill="#2DD4BF" />
    <path d="M8 13L11.5 16.5L18 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function ProgramsHero() {
  return (
    <section className="bg-[#e7e7e7] lg:bg-[#f8f8f8] py-[65px] px-[10px] lg:py-24">
      <div className="flex flex-col gap-[40px] lg:gap-[60px] items-center">
        
        {/* Badge + Title */}
        <div className="flex flex-col gap-[15px] items-center w-full max-w-[285px] lg:max-w-[800px]">
          {/* Badge */}
          <div className="bg-[#2a2a2a] rounded-full px-[25px] py-[15px] lg:py-[10px] flex items-center justify-center gap-[10px]">
            <span className="text-white text-[13px] lg:text-[14px] font-bold">החסכון המשולב</span>
            <div className="w-[18px] h-[18px] rounded-full bg-[#2dd4bf] flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          {/* Main Title */}
          <h1 className="text-[24px] lg:text-[40px] font-bold text-[#1c1c1c] text-center leading-[1.3] tracking-[-0.72px]">
            לחסוך לנישואי הילדים עם פתרון חכם שמעניק תשואה גבוהה יחד עם יציבות.
          </h1>
        </div>

        {/* Programs Container */}
        <div className="flex flex-col gap-[60px] items-center w-full max-w-[316px] lg:max-w-[1000px]">
          
          {/* Main Program Card */}
          <div className="w-full bg-white rounded-[16.5px] border-[1.5px] border-black p-[35px] shadow-[0px_6.614px_14.331px_0px_rgba(145,145,145,0.1),0px_25.354px_25.354px_0px_rgba(145,145,145,0.09),0px_56.22px_34.173px_0px_rgba(145,145,145,0.05),0px_100.315px_39.685px_0px_rgba(145,145,145,0.01),0px_157.638px_44.094px_0px_rgba(145,145,145,0)]">
            <div className="flex flex-col lg:flex-row gap-[35px] lg:gap-[50px]">
              
              {/* Program Info - Right side on desktop */}
              <div className="lg:w-1/2 lg:order-2 lg:border-r lg:border-black/10 lg:pr-[50px]">
                <div className="flex flex-col gap-[18px] mb-[25px]">
                  <h2 className="text-[28px] lg:text-[32px] font-bold text-black leading-[1.6]">
                    התוכנית המשולבת
                  </h2>
                  <p className="text-[20px] lg:text-[22px] text-black font-normal leading-[1.6]">
                    שוק ההון & הגמ"ח המרכזי
                  </p>
                </div>
                <p className="text-[16px] text-black font-light leading-[1.5]">
                  מתאים למי שרוצה תשואה עם וודאות וזקוק לסכומים גבוהים לחתונות הילדים.
                </p>
              </div>

              {/* Separator Line - Mobile */}
              <div className="w-full h-[1px] bg-black/20 lg:hidden" />

              {/* Benefits List - Left side on desktop */}
              <div className="flex flex-col gap-[20px] lg:w-1/2 lg:order-1">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-[13px] justify-end">
                    <p className="text-[14px] lg:text-[15px] text-black font-normal leading-[1.5] text-right flex-1">
                      {benefit}
                    </p>
                    <CheckIcon />
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-[15px] mt-[35px]">
              <button className="w-full bg-[#242424] hover:bg-[#1a1a1a] text-[#f8f8f8] font-semibold h-[45px] px-[15px] rounded flex items-center justify-center gap-[15px] transition-colors">
                <ChevronLeft className="w-[16px] h-[24px] rotate-180" />
                <span className="text-[16px]">לעוד פרטים והצטרפות</span>
              </button>
              <button className="w-full bg-white border border-black text-[#1e1e1e] font-semibold h-[45px] px-[15px] rounded flex items-center justify-center transition-colors hover:bg-gray-50">
                <span className="text-[16px]">ליצירת קשר עם נציג</span>
              </button>
            </div>
          </div>

          {/* Additional Programs Section */}
          <div className="w-full flex flex-col gap-[20px] items-center">
            <h3 className="text-[24px] font-bold text-[#1c1c1c] text-center leading-[1.3] tracking-[-0.72px]">
              תוכניות נוספות
            </h3>
            
            <div className="flex flex-col lg:flex-row gap-[20px] w-full">
              {/* Investment Program */}
              <div className="flex-1 bg-white rounded-[16.5px] px-[50px] py-[30px] shadow-[0px_6.614px_14.331px_0px_rgba(145,145,145,0.1),0px_25.354px_25.354px_0px_rgba(145,145,145,0.09),0px_56.22px_34.173px_0px_rgba(145,145,145,0.05),0px_100.315px_39.685px_0px_rgba(145,145,145,0.01),0px_157.638px_44.094px_0px_rgba(145,145,145,0)]">
                <div className="flex flex-col gap-[47px] items-center">
                  <div className="flex flex-col gap-[5.5px] items-center justify-center text-black text-center">
                    <h4 className="text-[20px] font-semibold leading-[1.6]">
                      תוכנית השקעות
                    </h4>
                    <p className="text-[16px] font-light leading-[1.6]">
                      השקעה בשוק ההון בלבד ע״י הצמדה למדד S&P500
                    </p>
                  </div>
                  <button className="w-full border border-black text-[#1e1e1e] font-semibold h-[45px] px-[15px] rounded flex items-center justify-center transition-colors hover:bg-gray-50">
                    <span className="text-[16px]">ליצירת קשר עם נציג</span>
                  </button>
                </div>
              </div>

              {/* Custom Gemach Program */}
              <div className="flex-1 bg-white rounded-[16.5px] px-[50px] py-[30px] shadow-[0px_6.614px_14.331px_0px_rgba(145,145,145,0.1),0px_25.354px_25.354px_0px_rgba(145,145,145,0.09),0px_56.22px_34.173px_0px_rgba(145,145,145,0.05),0px_100.315px_39.685px_0px_rgba(145,145,145,0.01),0px_157.638px_44.094px_0px_rgba(145,145,145,0)]">
                <div className="flex flex-col gap-[47px] items-center">
                  <div className="flex flex-col gap-[5.5px] items-center justify-center text-black text-center">
                    <h4 className="text-[20px] font-semibold leading-[1.6]">
                      תוכנית גמ״ח מותאמת
                    </h4>
                    <p className="text-[16px] font-light leading-[1.6]">
                      השקעה בשוק ההון בשילוב גמ״ח לבחירתכם
                    </p>
                  </div>
                  <button className="w-full border border-black text-[#1e1e1e] font-semibold h-[45px] px-[15px] rounded flex items-center justify-center transition-colors hover:bg-gray-50">
                    <span className="text-[16px]">ליצירת קשר עם נציג</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


