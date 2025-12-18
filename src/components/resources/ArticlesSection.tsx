'use client';

import { Image as ImageIcon, ChevronLeft } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'חתונות היום לעומת העבר, ולמה אי אפשר בלי הכנה?',
    description: 'קרן משיאים משלבת את היתרונות של גמ"ח יחד עם פוטנציאל הצמיחה של שוק ההון, כדי למקסם את החיסכון שלכם.',
  },
  {
    id: 2,
    title: 'חתונות היום לעומת העבר, ולמה אי אפשר בלי הכנה?',
    description: 'קרן משיאים משלבת את היתרונות של גמ"ח יחד עם פוטנציאל הצמיחה של שוק ההון, כדי למקסם את החיסכון שלכם.',
  },
  {
    id: 3,
    title: 'חתונות היום לעומת העבר, ולמה אי אפשר בלי הכנה?',
    description: 'קרן משיאים משלבת את היתרונות של גמ"ח יחד עם פוטנציאל הצמיחה של שוק ההון, כדי למקסם את החיסכון שלכם.',
  },
];

export default function ArticlesSection() {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button className="bg-[#2dd4bf] hover:bg-[#14b8a6] text-[var(--dark-main)] font-semibold py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
              לכל המאמרים
              <ChevronLeft className="w-4 h-4" />
            </button>
            <h2 className="text-xl md:text-2xl font-bold text-[var(--dark-main)]">
              מאמרים חדשים
            </h2>
          </div>
          
          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <div key={article.id} className="bg-[#f8f8f8] rounded-xl overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                {/* Image */}
                <div className="aspect-video bg-[#e5e7eb] flex items-center justify-center">
                  <ImageIcon className="w-12 h-12 text-[#d1d5db]" />
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-[var(--dark-main)] mb-2 text-right line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-[var(--gray-text)] text-sm leading-relaxed text-right line-clamp-3">
                    {article.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

