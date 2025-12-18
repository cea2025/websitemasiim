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

// Diamond Icon Component
const DiamondIcon = () => (
  <svg className="w-[22px] h-[22px]" viewBox="0 0 24 28" fill="none">
    <path d="M12 0L24 14L12 28L0 14L12 0Z" fill="#2DD4BF"/>
    <path d="M12 4L20 14L12 24L4 14L12 4Z" fill="white" fillOpacity="0.3"/>
  </svg>
);

export default function ProgramsHero() {
  return (
    <section className="bg-[#e7e7e7] lg:bg-[#eaeaea] pt-[130px] pb-[100px] px-[10px]">
      <div className="flex flex-col gap-[50px] items-center">
        
        {/* Main Title - Desktop */}
        <h1 className="text-[24px] lg:text-[50px] font-bold text-[#1c1c1c] text-center leading-[1.2] tracking-[-1.5px] max-w-[285px] lg:max-w-[773px]">
          לחסוך לנישואי הילדים עם פתרון חכם שמעניק תשואה גבוהה יחד עם יציבות.
        </h1>

        {/* Programs Container */}
        <div className="flex flex-col gap-[120px] items-center w-full">
          
          {/* Main Program Card Section */}
          <div className="flex flex-col items-center justify-center w-full">
            <div className="relative w-full max-w-[316px] lg:max-w-[999px] bg-white rounded-[16.5px] border-[1.5px] border-black py-[50px] px-[35px] lg:pl-[70px] lg:pr-[50px] shadow-[0px_6.614px_14.331px_0px_rgba(145,145,145,0.1),0px_25.354px_25.354px_0px_rgba(145,145,145,0.09),0px_56.22px_34.173px_0px_rgba(145,145,145,0.05),0px_100.315px_39.685px_0px_rgba(145,145,145,0.01),0px_157.638px_44.094px_0px_rgba(145,145,145,0)]">
              
              {/* Badge - Positioned at top center */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-[19px] bg-[#1c1c1c] rounded-[300px] px-[25px] h-[38px] flex items-center justify-center gap-[10px]">
                <span className="text-white text-[16px] font-bold shadow-[0px_0px_4px_0px_rgba(255,255,255,0.35)]">החסכון המשולב</span>
                <DiamondIcon />
              </div>

              <div className="flex flex-col lg:flex-row gap-[35px] lg:gap-[60px] h-full">
                
                {/* Benefits List - Left side on desktop */}
                <div className="flex flex-col gap-[30px] lg:w-[296px] lg:order-1">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-[13px] justify-end">
                      <p className="text-[14px] lg:text-[18px] text-black font-normal leading-[1.5] text-right">
                        {benefit}
                      </p>
                      <CheckIcon />
                    </div>
                  ))}
                </div>

                {/* Vertical Separator - Desktop */}
                <div className="hidden lg:block w-[1px] bg-[#e0e0e0] rotate-90 h-[322px] self-center" />
                
                {/* Separator Line - Mobile */}
                <div className="w-full h-[1px] bg-black/20 lg:hidden" />

                {/* Program Info - Right side on desktop */}
                <div className="lg:flex-1 lg:order-2 flex flex-col justify-between h-full">
                  <div className="flex flex-col gap-[35px] items-end text-right text-black">
                    <div className="flex flex-col gap-[20px] items-end justify-center leading-[1.6] w-full">
                      <h2 className="text-[28px] lg:text-[35px] font-bold">
                        התוכנית המשולבת
                      </h2>
                      <p className="text-[20px] lg:text-[22px] font-normal">
                        שוק ההון & הגמ"ח המרכזי
                      </p>
                    </div>
                    <p className="text-[16px] lg:text-[18px] font-light leading-[1.5]">
                      מתאים למי שרוצה תשואה עם וודאות וזקוק לסכומים גבוהים לחתונות הילדים.
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col gap-[15px] mt-[35px] lg:w-[376px]">
                    <button className="w-full bg-[#242424] hover:bg-[#1a1a1a] text-[#f8f8f8] font-semibold h-[53px] px-[35px] py-[8px] rounded flex items-center justify-center transition-colors">
                      <span className="text-[20px]">לעוד פרטים והצטרפות</span>
                    </button>
                    <button className="w-full bg-white border border-[#242424] text-[#242424] font-semibold h-[53px] px-[35px] py-[8px] rounded flex items-center justify-center transition-colors hover:bg-gray-50">
                      <span className="text-[20px]">ליצירת קשר עם נציג</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Programs Section */}
          <div className="flex flex-col gap-[35px] items-center w-full">
            <h3 className="text-[24px] lg:text-[28px] font-bold text-[#1c1c1c] text-center leading-[1.13]">
              תוכניות נוספות שהקרן מציעה
            </h3>
            
            <div className="flex flex-col lg:flex-row gap-[30px] w-full max-w-[316px] lg:max-w-[712px]">
              {/* Investment Program */}
              <div className="flex-1 bg-white rounded-[16.5px] px-[50px] py-[30px] shadow-[0px_6.614px_14.331px_0px_rgba(145,145,145,0.1),0px_25.354px_25.354px_0px_rgba(145,145,145,0.09),0px_56.22px_34.173px_0px_rgba(145,145,145,0.05),0px_100.315px_39.685px_0px_rgba(145,145,145,0.01),0px_157.638px_44.094px_0px_rgba(145,145,145,0)]">
                <div className="flex flex-col gap-[47px] items-center w-full">
                  <div className="flex flex-col gap-[5.5px] items-center justify-center text-black text-center leading-[1.6] w-full">
                    <h4 className="text-[24px] font-semibold">
                      תוכנית השקעות
                    </h4>
                    <p className="text-[18px] font-light">
                      השקעה בשוק ההון בלבד ע״י הצמדה למדד S&P500
                    </p>
                  </div>
                  <button className="w-full border border-[#242424] text-[#242424] font-semibold h-[45px] lg:py-[13px] px-[35px] rounded flex items-center justify-center transition-colors hover:bg-gray-50">
                    <span className="text-[16px]">ליצירת קשר עם נציג</span>
                  </button>
                </div>
              </div>

              {/* Custom Gemach Program */}
              <div className="flex-1 bg-white rounded-[16.5px] px-[50px] py-[30px] shadow-[0px_6.614px_14.331px_0px_rgba(145,145,145,0.1),0px_25.354px_25.354px_0px_rgba(145,145,145,0.09),0px_56.22px_34.173px_0px_rgba(145,145,145,0.05),0px_100.315px_39.685px_0px_rgba(145,145,145,0.01),0px_157.638px_44.094px_0px_rgba(145,145,145,0)]">
                <div className="flex flex-col gap-[47px] items-center w-full">
                  <div className="flex flex-col gap-[5.5px] items-center justify-center text-black text-center leading-[1.6] w-full">
                    <h4 className="text-[24px] font-semibold">
                      תוכנית גמ״ח מותאמת
                    </h4>
                    <p className="text-[18px] font-light">
                      השקעה בשוק ההון בשילוב גמ״ח לבחירתכם
                    </p>
                  </div>
                  <button className="w-full border border-[#242424] text-[#242424] font-semibold h-[45px] lg:py-[13px] px-[35px] rounded flex items-center justify-center transition-colors hover:bg-gray-50">
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


