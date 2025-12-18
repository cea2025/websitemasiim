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
        <div className="flex items-center justify-between gap-[172px]">
          {/* Stats Grid - Left */}
          <div className="flex flex-col gap-[20px]">
            <div className="flex gap-[20px]">
              {stats.slice(0, 2).map((stat, index) => (
                <div 
                  key={index}
                  className="stat-card"
                >
                  <p className="text-[35px] font-bold text-black whitespace-nowrap">
                    {stat.value}{' '}
                    {stat.unit && <span className="font-normal text-[30px]">{stat.unit}</span>}
                  </p>
                  <p className="text-[18px] font-normal text-black leading-[1.55]">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex gap-[20px]">
              {stats.slice(2, 4).map((stat, index) => (
                <div 
                  key={index}
                  className="stat-card"
                >
                  <p className="text-[35px] font-bold text-black whitespace-nowrap">
                    {stat.value}{' '}
                    {stat.unit && <span className="font-normal text-black">{stat.unit}</span>}
                  </p>
                  <p className="text-[18px] font-normal text-black leading-[1.55]">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Text Content - Right */}
          <div className="flex flex-col gap-[43px] max-w-[598px] items-end">
            <h2 className="text-[45px] font-bold text-[#1c1c1c] leading-[1.3] text-right">
              <span className="font-light">אנחנו מציעים </span>
              פתרון חכם
              <span className="font-light"> לאתגר הכלכלי של המשפחה החרדית</span>
            </h2>
            <p className="text-[22px] font-light text-[#182f43] leading-[1.5] text-right">
              מימון נישואי הילדים הוא מהאתגרים הכלכליים המשמעותיים ביותר עבור משפחות חרדיות.
              <br /><br />
              העלויות, שכוללות את הוצאות החתונה עצמה לצד מענק לזוג הצעיר לרכישת דירה, מסתכמות כיום בכ-220,000–240,000 ש&quot;ח למשפחה,{' '}
              <span className="font-semibold">וצפויות לעלות משמעותית בעשורים הקרובים.</span>
            </p>
            <Link href={`/${locale}/calculator`} className="btn btn-primary">
              <svg className="w-[16px] h-[24px] arrow-icon" viewBox="0 0 16 24" fill="none">
                <path d="M6 18L10 12L6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[20px] font-semibold">לחישוב הוצאות חתונה</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

