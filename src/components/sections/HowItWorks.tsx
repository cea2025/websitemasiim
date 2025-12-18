'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HowItWorks() {
  const locale = useLocale();

  const steps = [
    {
      number: '01',
      title: 'היכרות מעמיקה עם\nצרכי המשפחה',
      description: 'בשלב הראשון, אנו לומדים את הצרכים והיעדים של המשפחה, כדי להתאים את החיסכון ליכולות ולמטרות שלכם.',
    },
    {
      number: '02',
      title: 'התאמת התוכנית הנכונה\nעבורכם',
      description: 'לאחר ההיכרות, נבנה עבורכם תוכנית השקעה שמאזנת בין יציבות לתשואה, עם אפשרות לשלב נתיבים סולידיים ותנודתיים.',
    },
    {
      number: '03',
      title: 'החסכון מתחיל לעבוד\nבשבילכם',
      description: 'לאחר הבחירה, אנחנו מנהלים את הכסף עבורכם, תוך מעקב שוטף ודיווח שקוף כדי שתהיו תמיד בשליטה.',
    },
  ];

  return (
    <section className="section bg-white py-[80px]">
      <div className="container">
        <div className="flex flex-col items-center gap-[80px]">
          {/* Header */}
          <div className="flex flex-col items-center gap-[60px] w-full">
            <div className="flex flex-col items-center gap-[22px] text-center">
              <h2 className="text-[45px] font-bold text-[#1c1c1c] leading-[1.13]">
                בקצרה, איך זה עובד?
              </h2>
              <p className="text-[26px] font-normal text-[#242424] tracking-[-0.26px]">
                התהליך הוא פשוט ומהיר, ללא צורך בידע קודם
              </p>
            </div>

            {/* Steps Cards */}
            <div className="flex items-center gap-[80px] w-full">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="process-card flex-1"
                >
                  <div className="flex flex-col items-center gap-[35px]">
                    {/* Step Number */}
                    <span className="text-[60px] font-bold text-[#9e9e9e] leading-[84px] font-['Poppins']">
                      {step.number}
                    </span>
                    {/* Content */}
                    <div className="flex flex-col items-center gap-[10px] text-center">
                      <h3 className="text-[30px] font-bold text-[#1c1c1c] leading-[1.25] whitespace-pre-line">
                        {step.title}
                      </h3>
                      <p className="text-[18px] font-light text-[#182f43] leading-[25.6px]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-[23px]">
            <h3 className="text-[30px] font-bold text-black text-center">
              רוצים להבין טוב יותר את התהליך איתנו?
            </h3>
            <Link href={`/${locale}/process`} className="btn btn-primary">
              <svg className="w-[16px] h-[24px] arrow-icon" viewBox="0 0 16 24" fill="none">
                <path d="M6 18L10 12L6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[20px] font-semibold">להסבר מקיף על התהליך</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

