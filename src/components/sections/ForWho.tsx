'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function ForWho() {
  const locale = useLocale();

  const audiences = [
    {
      title: 'אברכים צעירים בתחילת הדרך?',
      description: 'זו הזדמנות מעולה להתחיל חיסכון ארוך טווח כבר מהשלב הראשון, ולבנות עתיד יציב לילדים שלכם.',
    },
    {
      title: 'יש לכם חיסכון בפקדונות או קרנות השתלמות?',
      description: 'הקרן מאפשרת להגדיל את התשואה באמצעות שילוב השקעות ייחודי ומותאם לצרכים שלכם.',
    },
    {
      title: 'חסכתם בגמ"ח אבל לא השקעתם בשוק ההון?',
      description: 'קרן משיאים משלבת את היתרונות של גמ"ח יחד עם פוטנציאל הצמיחה של שוק ההון, כדי למקסם את החיסכון שלכם.',
    },
    {
      title: 'עדיין לא התחלתם\nלחסוך?',
      description: 'הקרן מציעה לכם דרך נגישה ומסודרת להתחיל לחסוך בקלות ובביטחון.',
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex flex-col items-center gap-[51px]">
          {/* Header */}
          <div className="flex flex-col items-center gap-[18px] text-center max-w-[690px]">
            <h2 className="text-[45px] font-bold text-[#1c1c1c] leading-[1.13]">
              למי זה מתאים?
            </h2>
            <p className="text-[26px] font-light text-[#242424] tracking-[-0.26px] leading-[1.5] max-w-[559px]">
              הקרן מציעה מגוון תוכניות למשפחות חרדיות שרוצות להתחיל או לשפר חיסכון לנישואי ילדיהן
            </p>
          </div>

          {/* Cards */}
          <div className="flex items-start justify-center gap-[45px]">
            {audiences.map((item, index) => (
              <div 
                key={index}
                className="feature-card flex flex-col gap-[30px] h-[457px] flex-1 max-w-[304px]"
              >
                {/* Placeholder Image */}
                <div className="w-full h-[195px] bg-[#bababa] rounded-[11px] flex items-center justify-center">
                  <svg className="w-[84px] h-[65px] text-gray-500" viewBox="0 0 84 65" fill="none">
                    <rect x="10" y="10" width="64" height="45" rx="4" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="32" cy="32" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M50 25L70 45" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                {/* Content */}
                <div className="flex flex-col gap-[30px] text-center">
                  <h3 className="text-[24px] font-bold text-[#121212] leading-[1.3] whitespace-pre-line">
                    {item.title}
                  </h3>
                  <p className="text-[18px] font-light text-[#182f43] leading-[1.4]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Arrow Down */}
          <div className="w-[119px] h-[208px]">
            <svg className="w-full h-full" viewBox="0 0 119 208" fill="none">
              <path d="M59.5 0V180M59.5 180L20 140M59.5 180L99 140" stroke="#e0e0e0" strokeWidth="2"/>
            </svg>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col items-center gap-[42px]">
            <div className="flex flex-col items-center gap-[15px] text-center max-w-[573px]">
              <h3 className="text-[35px] font-bold text-black">
                העתיד שלכם מתחיל היום
              </h3>
              <p className="text-[22px] font-light text-black leading-[1.5]">
                בין אם אתם רק מתחילים לחסוך או רוצים למקסם את החיסכון הקיים, קרן משיאים כאן בשבילכם. הצטרפו עוד היום והבטיחו את עתיד המשפחה שלכם עם פתרון חכם, יציב ומותאם אישית.
              </p>
            </div>
            <Link href={`/${locale}/join`} className="btn btn-primary">
              <svg className="w-[16px] h-[24px] arrow-icon" viewBox="0 0 16 24" fill="none">
                <path d="M6 18L10 12L6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[20px] font-semibold">בואו נתחיל</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

