'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function CTA() {
  const locale = useLocale();

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex items-center justify-between gap-[80px]">
          {/* Image Placeholder - Left */}
          <div className="w-[564px] h-[370px] bg-[#bababa] rounded-[10px] flex items-center justify-center flex-shrink-0">
            <svg className="w-[100px] h-[80px] text-gray-500" viewBox="0 0 100 80" fill="none">
              <rect x="10" y="10" width="80" height="60" rx="4" stroke="currentColor" strokeWidth="2"/>
              <circle cx="40" cy="40" r="15" stroke="currentColor" strokeWidth="2"/>
              <path d="M60 30L85 55" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>

          {/* Text Content - Right */}
          <div className="flex flex-col gap-[35px] max-w-[516px]">
            <div className="flex flex-col gap-[38px]">
              <div className="flex flex-col gap-[20px]">
                <p className="text-[18px] font-normal text-black">
                  בסימולטר שלנו כבר ביקרתם?
                </p>
                <h2 className="text-[35px] font-bold text-black leading-[1.5]">
                  בנו את תזרים ההחזרים שלכם באמצעות המחשבון המיוחד של קרן משיאים
                </h2>
              </div>
              <p className="text-[22px] font-light text-black leading-[1.5]">
                עם הסימולטור של קרן משיאים, תוכלו לבדוק בקלות את ההחזרים החודשיים, המענקים וההלוואות בכל אחד מהמסלולים שלנו. כך תמצאו את המסלול המותאם בדיוק לצרכים שלכם – לחיסכון חכם ומותאם אישית למימון נישואי הילדים.
              </p>
            </div>
            <div className="flex justify-end">
              <Link href={`/${locale}/simulator`} className="btn btn-primary">
                <svg className="w-[16px] h-[24px] arrow-icon" viewBox="0 0 16 24" fill="none">
                  <path d="M6 18L10 12L6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[20px] font-semibold">נסו את הסימולטור עכשיו</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
