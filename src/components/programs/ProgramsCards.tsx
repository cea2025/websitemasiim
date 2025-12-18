'use client';

import { useState } from 'react';
import { ChevronDown, ChevronLeft, Info } from 'lucide-react';

const glossaryTerms = [
  {
    title: 'יחידה',
    description: 'כל יחידה מזכה בהלוואה של ₪40,000. ניתן לצרף עד 8 יחידות לכל ילד.',
  },
  {
    title: 'יחידה',
    description: 'כל יחידה מזכה בהלוואה של ₪40,000. ניתן לצרף עד 8 יחידות לכל ילד.',
  },
  {
    title: 'יחידה',
    description: 'כל יחידה מזכה בהלוואה של ₪40,000. ניתן לצרף עד 8 יחידות לכל ילד.',
  },
  {
    title: 'יחידה',
    description: 'כל יחידה מזכה בהלוואה של ₪40,000. ניתן לצרף עד 8 יחידות לכל ילד.',
  },
  {
    title: 'יחידה',
    description: 'כל יחידה מזכה בהלוואה של ₪40,000. ניתן לצרף עד 8 יחידות לכל ילד.',
  },
  {
    title: 'יחידה',
    description: 'כל יחידה מזכה בהלוואה של ₪40,000. ניתן לצרף עד 8 יחידות לכל ילד.',
  },
];

export default function ProgramsCards() {
  const [activeTab, setActiveTab] = useState<'stock' | 'gemach'>('stock');

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--dark-main)] mb-4">
            כלים ומידע שיעזרו לכם לבחור את המסלול הנכון עבורכם
          </h2>
          <p className="text-[var(--gray-text)] max-w-3xl mx-auto">
            קרן משיאים מציעה כלים מתקדמים ומידע נגיש, שיעזרו לכם להבין את האפשרויות ולבחור את התוכנית שמתאימה בדיוק לכם.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-between items-center mb-8">
          <div className="bg-[#f0f0f0] rounded-full p-1 inline-flex">
            <button
              onClick={() => setActiveTab('stock')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'stock'
                  ? 'bg-white text-[var(--dark-main)] shadow-sm'
                  : 'text-[var(--gray-text)]'
              }`}
            >
              שוק ההון
            </button>
            <button
              onClick={() => setActiveTab('gemach')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'gemach'
                  ? 'bg-white text-[var(--dark-main)] shadow-sm'
                  : 'text-[var(--gray-text)]'
              }`}
            >
              תוכניות הגמ״ח
            </button>
          </div>

          <button className="text-[var(--dark-main)] font-medium text-sm hover:underline flex items-center gap-1">
            מילון מושגים
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>

        {/* Glossary Grid */}
        <div className="bg-[#f8f8f8] rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            {glossaryTerms.slice(0, 3).map((term, index) => (
              <div key={index} className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-base font-semibold text-[var(--dark-main)]">{term.title}</span>
                  <div className="w-6 h-6 rounded-full bg-[#e5e7eb] flex items-center justify-center">
                    <ChevronDown className="w-4 h-4 text-[var(--gray-text)]" />
                  </div>
                </div>
                <p className="text-sm text-[var(--gray-text)] leading-relaxed">
                  {term.description}
                </p>
                {index < 2 && (
                  <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-[#e5e7eb]" />
                )}
              </div>
            ))}
          </div>

          <div className="border-t border-[#e5e7eb] my-8" />

          <div className="grid md:grid-cols-3 gap-8">
            {glossaryTerms.slice(3, 6).map((term, index) => (
              <div key={index} className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-base font-semibold text-[var(--dark-main)]">{term.title}</span>
                  <div className="w-6 h-6 rounded-full bg-[#e5e7eb] flex items-center justify-center">
                    <ChevronDown className="w-4 h-4 text-[var(--gray-text)]" />
                  </div>
                </div>
                <p className="text-sm text-[var(--gray-text)] leading-relaxed">
                  {term.description}
                </p>
                {index < 2 && (
                  <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-[#e5e7eb]" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Example Plans Section */}
        <div className="bg-[#f8f8f8] rounded-2xl p-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <span className="text-[var(--gray-text)] text-sm">סכום רצוי בסוף התקופה</span>
              <div className="bg-white rounded-lg px-4 py-2 flex items-center gap-2 border border-[#e5e7eb]">
                <span className="font-medium text-[var(--dark-main)]">₪ 300,000</span>
                <ChevronDown className="w-4 h-4 text-[var(--gray-text)]" />
              </div>
            </div>
            <span className="text-[var(--dark-main)] font-medium">תוכניות לדוגמה</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Results Card */}
            <div className="bg-white rounded-xl overflow-hidden border border-[#e5e7eb]">
              <div className="bg-[#f0f0f0] px-6 py-4 border-b border-[#e5e7eb]">
                <h4 className="font-semibold text-[var(--dark-main)] text-center">
                  נתונים צפויים בסוף התקופה
                </h4>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <span className="text-xs text-[var(--gray-text)]">סכום לגבייה מדמי ניהול</span>
                      <Info className="w-4 h-4 text-[var(--light-gray)]" />
                    </div>
                    <span className="font-bold text-lg text-[var(--dark-main)]">₪ 1,414</span>
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-[var(--gray-text)] block mb-2">סכום הפקדה כולל</span>
                    <span className="font-bold text-lg text-[var(--dark-main)]">₪ 72,000</span>
                  </div>
                </div>

                <div className="border-t border-[#e5e7eb] pt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <span className="text-xs text-[var(--gray-text)] block mb-2">חיסכון עתידי בניכוי הוצאות</span>
                      <span className="font-bold text-lg text-[var(--dark-main)]">₪ 300,970.31</span>
                    </div>
                    <div className="text-center">
                      <span className="text-xs text-[var(--gray-text)] block mb-2">רווח</span>
                      <span className="font-bold text-xl text-[#2dd4bf]">₪ 125,970.31</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Track Card */}
            <div className="bg-white rounded-xl overflow-hidden border border-[#e5e7eb]">
              <div className="bg-[#f0f0f0] px-6 py-4 border-b border-[#e5e7eb] flex items-center justify-between">
                <h4 className="font-semibold text-[var(--dark-main)]">מסלול שוק ההון</h4>
                <div className="w-5 h-5 rounded-full border-2 border-[#2dd4bf] flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2dd4bf]" />
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <span className="text-xs text-[var(--gray-text)]">ריבית שנתית</span>
                      <Info className="w-4 h-4 text-[var(--light-gray)]" />
                    </div>
                    <span className="font-bold text-lg text-[var(--dark-main)]">9%</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <span className="text-xs text-[var(--gray-text)]">סכום הפקדה חודשי</span>
                      <Info className="w-4 h-4 text-[var(--light-gray)]" />
                    </div>
                    <span className="font-bold text-lg text-[var(--dark-main)]">₪ 300</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline indicator */}
          <div className="mt-8 flex items-center justify-center">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#e5e7eb]">
              <svg className="w-5 h-5 text-[var(--dark-main)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-[var(--gray-text)]">הפקדה ל-20 שנה</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

