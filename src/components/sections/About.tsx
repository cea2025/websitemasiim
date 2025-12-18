'use client';

export default function About() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-[40px] lg:gap-[100px]">
          
          {/* Bento Grid - Left on Desktop */}
          <div className="w-full lg:w-[610px] aspect-square lg:h-[610px] rounded-[28px] overflow-hidden flex-shrink-0">
            <div className="grid grid-cols-2 h-full">
              
              {/* Top Left - Dark with text */}
              <div className="bg-[#282828] flex flex-col items-end justify-end p-[30px] lg:p-[85px] relative">
                <div className="absolute top-[30px] lg:top-[85px] right-[30px] lg:right-[85px]">
                  <div className="w-[28px] h-[28px] rounded-full bg-[#f8f8f8] flex items-center justify-center">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                      <path d="M1 5L5 9L13 1" stroke="#242424" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="text-white text-right">
                  <p className="text-[20px] lg:text-[30px] font-normal uppercase tracking-[0.12px] leading-[1.73]">
                    מקסימום תשואה
                  </p>
                  <p className="text-[16px] lg:text-[24px] font-normal uppercase tracking-[0.096px] leading-[1.73] mt-[10px]">
                    במינימום סיכון
                  </p>
                </div>
              </div>

              {/* Top Right - Gray with logo */}
              <div className="bg-[#bababa] flex items-center justify-center">
                <div className="flex flex-col items-center gap-1">
                  <svg className="w-[35px] h-[35px] lg:w-[50px] lg:h-[50px]" viewBox="0 0 50 50" fill="none">
                    <circle cx="25" cy="25" r="23" stroke="#1c1c1c" strokeWidth="2"/>
                    <path d="M15 33V20L25 27L35 20V33" stroke="#1c1c1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="25" cy="14" r="3" fill="#2DD4BF"/>
                  </svg>
                  <span className="text-[#1c1c1c] text-[18px] lg:text-[24px] font-bold">משיאים</span>
                  <span className="text-[#1c1c1c] text-[10px] lg:text-[12px]">מחתנים באחריות.</span>
                </div>
              </div>

              {/* Bottom Left - Gray placeholder */}
              <div className="bg-[#bababa] flex items-center justify-center">
                <svg className="w-[50px] h-[40px] lg:w-[60px] lg:h-[46px] text-gray-600" viewBox="0 0 60 46" fill="none">
                  <rect x="5" y="5" width="50" height="36" rx="4" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="22" cy="20" r="7" stroke="currentColor" strokeWidth="2"/>
                  <path d="M35 15L50 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M42 25L50 32L42 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Bottom Right - Dark with text */}
              <div className="bg-[#282828] flex flex-col items-end justify-end p-[30px] lg:p-[87px] relative">
                <div className="absolute top-[30px] lg:top-[87px] right-[30px] lg:right-[87px]">
                  <div className="w-[28px] h-[28px] rounded-full bg-[#f8f8f8] flex items-center justify-center">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                      <path d="M1 5L5 9L13 1" stroke="#242424" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="text-white text-right">
                  <p className="text-[18px] lg:text-[30px] font-normal uppercase tracking-[-0.3px] leading-[1.03]">
                    בעידוד והמלצת
                    <br />
                    גדולי ישראל
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content - Right on Desktop */}
          <div className="flex flex-col gap-[25px] text-right max-w-[594px]">
            <h2 className="heading-lg">
              נעים מאוד, אנחנו קרן משיאים.
            </h2>
            <div className="text-lg space-y-4">
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
