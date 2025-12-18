'use client';

import { Play, Clock, ChevronLeft } from 'lucide-react';

const podcasts = [
  {
    id: 1,
    title: 'חתונות היום לעומת העבר, ולמה אי אפשר בלי הכנה?',
    guest: 'בהשתתפות מייסד הגמ״ח המרכזי',
    duration: '18 דקות האזנה',
    date: 'כ״ב בכסלו, תשפ״ה',
  },
  {
    id: 2,
    title: 'חתונות היום לעומת העבר, ולמה אי אפשר בלי הכנה?',
    guest: 'בהשתתפות מייסד הגמ״ח המרכזי',
    duration: '18 דקות האזנה',
    date: 'כ״ב בכסלו, תשפ״ה',
  },
];

export default function PodcastsSection() {
  return (
    <section className="bg-white py-8 md:py-16 pb-16 md:pb-24">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button className="bg-[#2dd4bf] hover:bg-[#14b8a6] text-[var(--dark-main)] font-semibold py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
              לכל הפודקאסטים
              <ChevronLeft className="w-4 h-4" />
            </button>
            <h2 className="text-xl md:text-2xl font-bold text-[var(--dark-main)]">
              פודקאסטים חדשים
            </h2>
          </div>
          
          {/* Podcasts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {podcasts.map((podcast) => (
              <div key={podcast.id} className="flex flex-col md:flex-row-reverse gap-4 bg-[#f8f8f8] rounded-xl overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                {/* Thumbnail */}
                <div className="w-full md:w-48 h-48 bg-[#e5e7eb] flex items-center justify-center flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#2dd4bf] flex items-center justify-center">
                    <Play className="w-6 h-6 text-white fill-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 p-5 flex flex-col justify-center">
                  <h3 className="text-base font-bold text-[var(--dark-main)] mb-2 text-right">
                    {podcast.title}
                  </h3>
                  <p className="text-[var(--gray-text)] text-sm mb-4 text-right">
                    {podcast.guest}
                  </p>
                  
                  {/* Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#e5e7eb]">
                    <span className="text-xs text-[var(--gray-text)]">
                      {podcast.date}
                    </span>
                    <div className="flex items-center gap-1 text-[var(--gray-text)]">
                      <span className="text-xs">{podcast.duration}</span>
                      <Clock className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

