'use client';

import { ExternalLink, Image as ImageIcon } from 'lucide-react';

export default function FeaturedContent() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-[var(--dark-main)] mb-8 text-right">
            תוכן מומלץ
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Featured Article Content */}
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-[var(--dark-main)] mb-4">
                כמה באמת עולה לחתן ילדים? ניתוח כלכלי למשפחה החרדית
              </h3>
              <p className="text-[var(--gray-text)] text-sm md:text-base leading-relaxed mb-6">
                כמה באמת עולה לחתן ילדים? בפוסט הזה נבחן את העלויות היום ובעתיד, ונציג דרכים לתכנון חכם שיעזור לעמוד באתגר.
              </p>
              <a 
                href="#"
                className="inline-flex items-center gap-2 text-[var(--dark-main)] hover:text-[#2dd4bf] transition-colors"
              >
                <span className="text-sm font-medium">לקריאת המאמר</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            {/* Featured Image */}
            <div className="flex-1">
              <div className="aspect-video bg-[#f3f4f6] rounded-xl flex items-center justify-center relative overflow-hidden">
                <span className="absolute top-4 left-4 bg-[var(--dark-main)] text-white text-xs px-3 py-1 rounded-full">
                  מאמר
                </span>
                <ImageIcon className="w-16 h-16 text-[#d1d5db]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

