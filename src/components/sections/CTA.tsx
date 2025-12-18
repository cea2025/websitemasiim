'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function CTA() {
  const locale = useLocale();

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-[40px] lg:gap-[80px]">
          
          {/* Image Placeholder - Left on Desktop */}
          <div className="w-full lg:w-[564px] h-[250px] lg:h-[370px] bg-[#bababa] rounded-[10px] flex items-center justify-center flex-shrink-0">
            <svg className="w-[80px] h-[65px] lg:w-[100px] lg:h-[80px] text-gray-500" viewBox="0 0 100 80" fill="none">
              <rect x="5" y="5" width="90" height="70" rx="4" stroke="currentColor" strokeWidth="2"/>
              <circle cx="35" cy="35" r="15" stroke="currentColor" strokeWidth="2"/>
              <path d="M55 25L90 65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M78 52L90 65L77 65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Text Content - Right on Desktop */}
          <div className="flex flex-col gap-[25px] lg:gap-[35px] max-w-[516px]">
            <div className="flex flex-col gap-[25px] lg:gap-[38px]">
              <div className="flex flex-col gap-[15px] lg:gap-[20px] text-right">
                <p className="text-[16px] lg:text-[18px] font-normal text-black">
                  בסימולטר שלנו כבר ביקרתם?
                </p>
                <h2 className="heading-md leading-[1.5]">
                  בנו את תזרים ההחזרים שלכם באמצעות המחשבון המיוחד של קרן משיאים
                </h2>
              </div>
              <p className="text-lg text-right">
                עם הסימולטור של קרן משיאים, תוכלו לבדוק בקלות את ההחזרים החודשיים, המענקים וההלוואות בכל אחד מהמסלולים שלנו. כך תמצאו את המסלול המותאם בדיוק לצרכים שלכם – לחיסכון חכם ומותאם אישית למימון נישואי הילדים.
              </p>
            </div>
            <div className="flex justify-end">
              <Link href={`/${locale}/simulator`} className="btn btn-primary">
                <svg className="btn-arrow" viewBox="0 0 16 24" fill="none">
                  <path d="M10 6L6 12L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>נסו את הסימולטור עכשיו</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
