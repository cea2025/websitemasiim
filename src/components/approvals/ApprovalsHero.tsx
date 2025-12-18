'use client';

import { Check } from 'lucide-react';

const tags = [
  'הידור בחסד',
  'הידור במעשרות',
  'הידור בריבית',
];

export default function ApprovalsHero() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--dark-main)] mb-8">
            הסכמות גדולי ישראל
          </h1>
          
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {tags.map((tag) => (
              <div key={tag} className="flex items-center gap-2">
                <span className="text-sm md:text-base text-[var(--gray-text)]">
                  {tag}
                </span>
                <div className="w-5 h-5 rounded-full bg-[#2dd4bf] flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

