'use client';

import { Search, Image as ImageIcon } from 'lucide-react';

export default function ResourcesHero() {
  return (
    <section className="relative bg-[#f3f4f6] min-h-[400px] md:min-h-[500px] flex items-center">
      {/* Background Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <ImageIcon className="w-32 h-32 text-[#9ca3af]" />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--dark-main)] mb-6">
            מרכז התוכן המקצועי
          </h1>
          <p className="text-[var(--gray-text)] text-base md:text-lg mb-8 leading-relaxed">
            כאן תמצאו מאמרים, פודקאסטים, סרטונים וכלים פרקטיים שיעזרו לכם להגיע מוכנים ליום השמחה.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="חיפוש תוכן"
              className="w-full py-4 px-6 pr-12 rounded-lg border border-[#e5e7eb] bg-white text-[var(--dark-main)] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2dd4bf] text-right"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
          </div>
        </div>
      </div>
    </section>
  );
}

