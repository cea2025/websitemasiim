'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex items-center justify-between gap-[146px]">
          {/* Bento Grid - Left */}
          <div className="w-[610px] h-[610px] rounded-[28px] overflow-hidden flex-shrink-0">
            <div className="bento-grid h-full">
              {/* Top Left - Dark with text */}
              <div className="bento-item bento-dark flex-col gap-[25px] items-end justify-end p-[85px]">
                <div className="w-[28px] h-[28px] rounded-full bg-[#f8f8f8] flex items-center justify-center">
                  <svg className="w-[20px] h-[20px]" viewBox="0 0 20 20" fill="none">
                    <path d="M6 10L9 13L14 7" stroke="#242424" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex flex-col items-end gap-[14px]">
                  <p className="text-[30px] font-normal text-white text-right tracking-[0.12px] uppercase leading-[1.73]">
                    מקסימום תשואה
                  </p>
                  <p className="text-[24px] font-normal text-white text-right tracking-[0.096px] uppercase leading-[1.73]">
                    במינימום סיכון
                  </p>
                </div>
              </div>

              {/* Top Right - Gray placeholder with logo */}
              <div className="bento-item bento-gray flex items-center justify-center">
                <div className="w-[184px] h-[51px] flex items-center justify-center">
                  <span className="text-[#1c1c1c] text-xl font-bold">קרן משיאים</span>
                </div>
              </div>

              {/* Bottom Left - Gray placeholder */}
              <div className="bento-item bento-gray flex items-center justify-center">
                <svg className="w-[60px] h-[46px] text-gray-500" viewBox="0 0 60 46" fill="none">
                  <rect x="5" y="10" width="50" height="30" rx="4" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="20" cy="25" r="6" stroke="currentColor" strokeWidth="2"/>
                  <path d="M35 20L45 30" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>

              {/* Bottom Right - Dark with text */}
              <div className="bento-item bento-dark flex-col gap-[28px] items-end justify-end p-[87px]">
                <div className="w-[28px] h-[28px] rounded-full bg-[#f8f8f8] flex items-center justify-center">
                  <svg className="w-[20px] h-[20px]" viewBox="0 0 20 20" fill="none">
                    <path d="M6 10L9 13L14 7" stroke="#242424" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-[30px] font-normal text-white text-right tracking-[-0.3px] uppercase leading-[1.03]">
                    בעידוד והמלצת גדולי ישראל
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content - Right */}
          <div className="flex flex-col gap-[25px] items-end text-right max-w-[594px]">
            <h2 className="text-[45px] font-bold text-[#1c1c1c] leading-[1.13]">
              נעים מאוד, אנחנו קרן משיאים.
            </h2>
            <div className="text-[22px] font-light text-[#182f43] leading-[1.5] space-y-4">
              <p>
                קרן משיאים היא הרבה יותר מעוד תוכנית חיסכון – היא למעשה{' '}
                <span className="font-bold">מהפכה תודעתית בציבור החרדי.</span>
              </p>
              <p>
                יצרנו מודל חדשני שמשלב בין השקעה מניבה בשוק ההון לבין גמ&quot;ח יציב ומוכר, כדי להעניק להורים פתרון כלכלי חכם ונגיש למימון נישואי ילדיהם.
                <br />
                זו גישה שמביאה שינוי אמיתי – מעבר ממאמץ כלכלי עצום ובלתי אפשרי, לתכנון מחושב שמחבר בין יציבות פיננסית לצמיחה חכמה.
              </p>
              <p>
                הקרן מנגישה לציבור החרדי כלים פיננסיים חדשניים ומותאמים, ומציעים לראשונה פתרון שמשלב מסורת עם חדשנות – כך שכל משפחה יכולה לחתן את ילדיה בכבוד, בשמחה וברוגע.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

