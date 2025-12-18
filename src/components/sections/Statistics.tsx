'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Statistics() {
  const locale = useLocale();

  const stats = [
    { value: '1,600,000', unit: '₪', description: 'הוצאה ממוצעת על כל חתונות הילדים' },
    { value: '230,000', unit: '₪', description: 'עלות חתונה ממוצעת כיום למשפחה (כולל מענק דירה)' },
    { value: '20 שנה', unit: '', description: 'הזמן המומלץ להכנות כלכליות לחתונות הילדים' },
    { value: '4,300', unit: '₪', description: 'החזר הלוואות חודשי ממוצע לחתונות' },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-[40px] lg:gap-[80px]">
          
          {/* Stats Grid - Left on Desktop */}
          <div className="w-full lg:w-auto">
            <div className="grid grid-cols-2 gap-[15px] lg:gap-[20px]">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-[20px] shadow-[0px_6px_13px_rgba(145,145,145,0.1),0px_23px_23px_rgba(145,145,145,0.09),0px_51px_31px_rgba(145,145,145,0.05)] p-[20px] lg:p-[30px] w-full lg:w-[280px] h-[160px] lg:h-[209px] flex flex-col items-center justify-center gap-[15px] lg:gap-[20px] text-center"
                >
                  <p className="text-[24px] lg:text-[35px] font-bold text-black whitespace-nowrap leading-[1.55]">
                    {stat.value}
                    {stat.unit && <span className="font-normal text-[20px] lg:text-[30px]"> {stat.unit}</span>}
                  </p>
                  <p className="text-[14px] lg:text-[18px] font-normal text-black leading-[1.55]">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Text Content - Right on Desktop */}
          <div className="flex flex-col gap-[30px] lg:gap-[43px] max-w-[598px] text-right">
            <h2 className="heading-lg leading-[1.3]">
              <span className="font-light">אנחנו מציעים </span>
              <span className="font-bold">פתרון חכם</span>
              <span className="font-light"> לאתגר הכלכלי של המשפחה החרדית</span>
            </h2>
            <p className="text-lg">
              מימון נישואי הילדים הוא מהאתגרים הכלכליים המשמעותיים ביותר עבור משפחות חרדיות.
              <br /><br />
              העלויות, שכוללות את הוצאות החתונה עצמה לצד מענק לזוג הצעיר לרכישת דירה, מסתכמות כיום בכ-220,000–240,000 ש&quot;ח למשפחה,{' '}
              <span className="font-semibold">וצפויות לעלות משמעותית בעשורים הקרובים.</span>
            </p>
            <div className="flex justify-end">
              <Link href={`/${locale}/calculator`} className="btn btn-primary">
                <svg className="btn-arrow" viewBox="0 0 16 24" fill="none">
                  <path d="M10 6L6 12L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>לחישוב הוצאות חתונה</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
