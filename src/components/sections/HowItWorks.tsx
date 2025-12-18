'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HowItWorks() {
  const locale = useLocale();

  const steps = [
    {
      number: '01',
      title: 'היכרות מעמיקה עם צרכי המשפחה',
      description: 'בשלב הראשון, אנו לומדים את הצרכים והיעדים של המשפחה, כדי להתאים את החיסכון ליכולות ולמטרות שלכם.',
    },
    {
      number: '02',
      title: 'התאמת התוכנית הנכונה עבורכם',
      description: 'לאחר ההיכרות, נבנה עבורכם תוכנית השקעה שמאזנת בין יציבות לתשואה, עם אפשרות לשלב נתיבים סולידיים ותנודתיים.',
    },
    {
      number: '03',
      title: 'החסכון מתחיל לעבוד בשבילכם',
      description: 'לאחר הבחירה, אנחנו מנהלים את הכסף עבורכם, תוך מעקב שוטף ודיווח שקוף כדי שתהיו תמיד בשליטה.',
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex flex-col items-center gap-[50px] lg:gap-[80px]">
          
          {/* Header */}
          <div className="flex flex-col items-center gap-[15px] lg:gap-[22px] text-center">
            <h2 className="heading-lg">
              בקצרה, איך זה עובד?
            </h2>
            <p className="text-xl max-w-[600px]">
              התהליך הוא פשוט ומהיר, ללא צורך בידע קודם
            </p>
          </div>

          {/* Steps Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] lg:gap-[80px] w-full">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-white rounded-[20px] shadow-[0px_6px_13px_rgba(145,145,145,0.1),0px_23px_23px_rgba(145,145,145,0.09),0px_51px_31px_rgba(145,145,145,0.05)] p-[25px] lg:p-[35px] min-h-[300px] lg:h-[379px] flex items-center justify-center"
              >
                <div className="flex flex-col items-center gap-[25px] lg:gap-[35px] text-center">
                  {/* Step Number */}
                  <span className="step-number">
                    {step.number}
                  </span>
                  {/* Content */}
                  <div className="flex flex-col items-center gap-[10px]">
                    <h3 className="heading-sm">
                      {step.title}
                    </h3>
                    <p className="text-[16px] lg:text-[18px] font-light text-[#182f43] leading-[1.42]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="flex flex-col items-center gap-[20px] lg:gap-[23px] text-center">
            <h3 className="heading-sm">
              רוצים להבין טוב יותר את התהליך איתנו?
            </h3>
            <Link href={`/${locale}/process`} className="btn btn-primary">
              <svg className="btn-arrow" viewBox="0 0 16 24" fill="none">
                <path d="M10 6L6 12L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>להסבר מקיף על התהליך</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
