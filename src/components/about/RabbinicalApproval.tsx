'use client';

import { CheckCircle } from 'lucide-react';

const badges = [
  'הידור בחסד',
  'הידור במעשרות',
  'הידור בריבית',
];

export default function RabbinicalApproval() {
  return (
    <section className="bg-[#f8f8f8] py-16 md:py-24">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--dark-main)] text-center mb-12">
          באישור גדולי הפוסקים
        </h2>

        {/* Rabbis Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 mb-8">
          {[...Array(6)].map((_, index) => (
            <div 
              key={index} 
              className="aspect-square bg-white rounded-xl flex items-center justify-center shadow-sm"
            >
              <svg className="w-8 h-8 md:w-12 md:h-12 text-[#d1d5db]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          ))}
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#2dd4bf]" />
              <span className="text-[var(--gray-text)] text-sm md:text-base font-medium">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

