'use client';

import { CheckCircle, ChevronLeft } from 'lucide-react';

const benefits = [
  'פריסה נוחה של ההפקדות בהתאם ליכולות המשפחה',
  'אישור הלכתי מלא מגדולי ישראל',
  'מעקב שוטף אחר מצב הכספים וההשקעות',
  'דמי ניהול נמוכים בשיתוף מיטב דש',
  'שירות לקוחות זמין ומסור',
];

export default function ProgramsHero() {
  return (
    <section className="bg-[#f8f8f8] py-16 md:py-24">
      <div className="container">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--dark-main)] mb-6">
            לחסוך לנישואי הילדים עם פתרון חכם
            <br />
            שמעניק תשואה גבוהה יחד עם יציבות.
          </h1>
        </div>

        {/* Main Program Card */}
        <div className="max-w-[1000px] mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Badge */}
          <div className="bg-[#fef3c7] border-b border-[#f59e0b] px-6 py-3 flex items-center justify-center gap-2">
            <span className="text-sm font-medium text-[var(--dark-main)]">החסכון המשולב</span>
            <div className="w-5 h-5 rounded-full bg-[#2dd4bf] flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Benefits List */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 rtl:flex-row-reverse">
                    <CheckCircle className="w-6 h-6 text-[#2dd4bf] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--gray-text)] text-base leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Program Info */}
              <div className="border-r-0 md:border-r border-[#e5e7eb] md:pr-8">
                <div className="mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-[var(--dark-main)] mb-2">
                    התוכנית המשולבת
                  </h2>
                  <p className="text-[var(--light-gray)] text-sm">
                    שוק ההון & הגמ"ח המרכזי
                  </p>
                </div>

                <p className="text-[var(--gray-text)] text-base mb-8 leading-relaxed">
                  מתאים למי שרוצה תשואה עם וודאות וזקוק לסכומים גבוהים לחתונות הילדים.
                </p>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <button className="w-full bg-[#2dd4bf] hover:bg-[#14b8a6] text-[var(--dark-main)] font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
                    לסימולטור
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button className="w-full bg-white border-2 border-[var(--dark-main)] text-[var(--dark-main)] font-semibold py-4 px-6 rounded-lg hover:bg-[var(--dark-main)] hover:text-white transition-colors">
                    יצירת קשר
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Programs */}
        <div className="max-w-[800px] mx-auto mt-12">
          <h3 className="text-center text-lg font-medium text-[var(--gray-text)] mb-6">
            תוכניות נוספות שהקרן מציעה
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Custom Gemach Program */}
            <div className="bg-white rounded-xl p-6 border border-[#e5e7eb] hover:shadow-md transition-shadow">
              <h4 className="text-lg font-bold text-[var(--dark-main)] mb-2 text-center">
                תוכנית גמ״ח מותאמת
              </h4>
              <p className="text-[var(--gray-text)] text-sm text-center mb-4">
                השקעה בשוק ההון בשילוב גמ״ח לבחירתכם
              </p>
              <button className="w-full text-[var(--dark-main)] font-medium py-2 px-4 rounded-lg border border-[#e5e7eb] hover:bg-[#f8f8f8] transition-colors text-sm">
                לצפייה באישור הכלכלי
              </button>
            </div>

            {/* Investment Program */}
            <div className="bg-white rounded-xl p-6 border border-[#e5e7eb] hover:shadow-md transition-shadow">
              <h4 className="text-lg font-bold text-[var(--dark-main)] mb-2 text-center">
                תוכנית השקעות
              </h4>
              <p className="text-[var(--gray-text)] text-sm text-center mb-4">
                השקעה בשוק ההון בלבד ע״י הצמדה למדד S&P500
              </p>
              <button className="w-full text-[var(--dark-main)] font-medium py-2 px-4 rounded-lg border border-[#e5e7eb] hover:bg-[#f8f8f8] transition-colors text-sm">
                לצפייה באישור הכלכלי
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

