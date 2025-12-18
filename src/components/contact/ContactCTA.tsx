'use client';

import { ChevronLeft } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="bg-[#1c1c1c] py-16 md:py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            חסכו זמן, הצטרפו אונליין היום!
          </h2>
          <p className="text-[#bababa] text-base md:text-lg mb-8 leading-relaxed">
            בין אם אתם רק מתחילים לחסוך או רוצים למקסם את החיסכון הקיים, קרן משיאים כאן בשבילכם. 
            הצטרפו עוד היום והבטיחו את עתיד המשפחה שלכם עם פתרון חכם, יציב ומותאם אישית.
          </p>
          <button className="bg-[#2dd4bf] hover:bg-[#14b8a6] text-[var(--dark-main)] font-semibold py-4 px-8 rounded-lg transition-colors flex items-center gap-2 mx-auto">
            הצטרפו עכשיו
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

