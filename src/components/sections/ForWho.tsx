'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function ForWho() {
  const locale = useLocale();

  const audiences = [
    {
      title: 'עדיין לא התחלתם לחסוך?',
      description: 'הקרן מציעה לכם דרך נגישה ומסודרת להתחיל לחסוך בקלות ובביטחון.',
    },
    {
      title: 'חסכתם בגמ"ח אבל לא השקעתם בשוק ההון?',
      description: 'קרן משיאים משלבת את היתרונות של גמ"ח יחד עם פוטנציאל הצמיחה של שוק ההון, כדי למקסם את החיסכון שלכם.',
    },
    {
      title: 'יש לכם חיסכון בפקדונות או קרנות השתלמות?',
      description: 'הקרן מאפשרת להגדיל את התשואה באמצעות שילוב השקעות ייחודי ומותאם לצרכים שלכם.',
    },
    {
      title: 'אברכים צעירים בתחילת הדרך?',
      description: 'זו הזדמנות מעולה להתחיל חיסכון ארוך טווח כבר מהשלב הראשון, ולבנות עתיד יציב לילדים שלכם.',
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex flex-col items-center gap-[40px] lg:gap-[51px]">
          
          {/* Header */}
          <div className="flex flex-col items-center gap-[15px] lg:gap-[18px] text-center max-w-[690px]">
            <h2 className="heading-lg">
              למי זה מתאים?
            </h2>
            <p className="text-xl max-w-[559px]">
              הקרן מציעה מגוון תוכניות למשפחות חרדיות שרוצות להתחיל או לשפר חיסכון לנישואי ילדיהן
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] lg:gap-[45px] w-full">
            {audiences.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-[22px] shadow-[0px_9px_19px_rgba(158,158,158,0.1),0px_35px_35px_rgba(158,158,158,0.09),0px_79px_48px_rgba(158,158,158,0.05)] p-[20px] opacity-90 hover:opacity-100 transition-opacity"
              >
                {/* Placeholder Image */}
                <div className="w-full h-[140px] lg:h-[195px] bg-[#bababa] rounded-[11px] flex items-center justify-center mb-[20px] lg:mb-[30px]">
                  <svg className="w-[60px] h-[45px] lg:w-[84px] lg:h-[65px] text-gray-500" viewBox="0 0 84 65" fill="none">
                    <rect x="5" y="5" width="74" height="55" rx="4" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="30" cy="28" r="12" stroke="currentColor" strokeWidth="2"/>
                    <path d="M50 20L75 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M65 40L75 50L65 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                {/* Content */}
                <div className="flex flex-col gap-[15px] lg:gap-[30px] text-center">
                  <h3 className="text-[20px] lg:text-[24px] font-bold text-[#121212] leading-[1.3]">
                    {item.title}
                  </h3>
                  <p className="text-[16px] lg:text-[18px] font-light text-[#182f43] leading-[1.4]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Arrow Down */}
          <div className="hidden lg:block w-[119px] h-[208px]">
            <svg className="w-full h-full" viewBox="0 0 119 208" fill="none">
              <path d="M59.5 0V160" stroke="#d0d0d0" strokeWidth="2" strokeDasharray="8 8"/>
              <circle cx="59.5" cy="180" r="25" stroke="#d0d0d0" strokeWidth="2" strokeDasharray="6 6"/>
              <path d="M50 175L59.5 185L69 175" stroke="#d0d0d0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col items-center gap-[30px] lg:gap-[42px] text-center max-w-[573px]">
            <div className="flex flex-col gap-[12px] lg:gap-[15px]">
              <h3 className="heading-md">
                העתיד שלכם מתחיל היום
              </h3>
              <p className="text-lg">
                בין אם אתם רק מתחילים לחסוך או רוצים למקסם את החיסכון הקיים, קרן משיאים כאן בשבילכם. הצטרפו עוד היום והבטיחו את עתיד המשפחה שלכם עם פתרון חכם, יציב ומותאם אישית.
              </p>
            </div>
            <Link href={`/${locale}/join`} className="btn btn-primary">
              <svg className="btn-arrow" viewBox="0 0 16 24" fill="none">
                <path d="M10 6L6 12L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>בואו נתחיל</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
