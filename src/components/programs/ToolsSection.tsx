'use client';

import { ChevronLeft, Play } from 'lucide-react';
import Image from 'next/image';

const articles = [
  {
    title: 'חתונות היום לעומת העבר, ולמה אי אפשר בלי הכנה?',
    description: 'קרן משיאים משלבת את היתרונות של גמ"ח יחד עם פוטנציאל הצמיחה של שוק ההון, כדי למקסם את החיסכון שלכם.',
  },
  {
    title: 'בחירת התוכנית הנכונה ביותר עבורכם',
    description: 'קרן משיאים משלבת את היתרונות של גמ"ח יחד עם פוטנציאל הצמיחה של שוק ההון, כדי למקסם את החיסכון שלכם.',
  },
  {
    title: 'בחירת התוכנית הנכונה ביותר עבורכם',
    description: 'קרן משיאים משלבת את היתרונות של גמ"ח יחד עם פוטנציאל הצמיחה של שוק ההון, כדי למקסם את החיסכון שלכם.',
  },
  {
    title: 'בחירת התוכנית הנכונה ביותר עבורכם',
    description: 'קרן משיאים משלבת את היתרונות של גמ"ח יחד עם פוטנציאל הצמיחה של שוק ההון, כדי למקסם את החיסכון שלכם.',
  },
];

const podcasts = [
  {
    title: 'בחירת התוכנית הנכונה ביותר עבורכם',
    subtitle: 'בהשתתפות מייסד הגמ״ח המרכזי',
    duration: '18 דקות האזנה',
    date: 'כ״ב בכסלו, תשפ״ה',
  },
  {
    title: 'בחירת התוכנית הנכונה ביותר עבורכם',
    subtitle: 'בהשתתפות מייסד הגמ״ח המרכזי',
    duration: '18 דקות האזנה',
    date: 'כ״ב בכסלו, תשפ״ה',
  },
];

export default function ToolsSection() {
  return (
    <section className="bg-[#f8f8f8] py-16 md:py-24">
      <div className="container">
        {/* Simulator Section */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-[var(--dark-main)] mb-8">הסימולטור שלנו</h3>
          
          <div className="bg-white rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Image Placeholder */}
              <div className="relative h-64 md:h-auto bg-[#e5e7eb] flex items-center justify-center">
                <div className="w-32 h-32 rounded-2xl bg-[#d1d5db] flex items-center justify-center">
                  <svg className="w-16 h-16 text-[#9ca3af]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 md:py-12">
                <p className="text-[var(--gray-text)] text-sm mb-2">חסר לכם פרטים כדי להגיע להחלטה?</p>
                <h4 className="text-xl md:text-2xl font-bold text-[var(--dark-main)] mb-4">
                  קבלו את התמונה המלאה של החיסכון
                </h4>
                <p className="text-[var(--gray-text)] text-sm leading-relaxed mb-6">
                  עם הסימולטור של קרן משיאים, תוכלו לבדוק בקלות את ההחזרים החודשיים, המענקים וההלוואות בכל אחד מהמסלולים שלנו. כך תמצאו את המסלול המותאם בדיוק לצרכים שלכם – לחיסכון חכם ומותאם אישית למימון נישואי הילדים.
                </p>
                <button className="bg-[#2dd4bf] hover:bg-[#14b8a6] text-[var(--dark-main)] font-semibold py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
                  לסימולטור
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* S&P 500 Calculator */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-[var(--dark-main)] mb-8">מחשבון S&P 500</h3>
          
          <div className="bg-white rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Chart Placeholder */}
              <div className="p-8 flex items-center justify-center">
                <div className="w-full max-w-md">
                  {/* Simple bar chart visualization */}
                  <div className="flex items-end justify-around h-48 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 bg-[#e5e7eb] rounded-t" style={{ height: '40px' }}></div>
                      <span className="text-xs text-[var(--gray-text)] mt-2">5 שנים</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 bg-[#e5e7eb] rounded-t" style={{ height: '70px' }}></div>
                      <span className="text-xs text-[var(--gray-text)] mt-2">10 שנים</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 bg-[#e5e7eb] rounded-t" style={{ height: '100px' }}></div>
                      <span className="text-xs text-[var(--gray-text)] mt-2">15 שנה</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 bg-[#e5e7eb] rounded-t" style={{ height: '140px' }}></div>
                      <span className="text-xs text-[var(--gray-text)] mt-2">20 שנה</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 bg-[#2dd4bf] rounded-t relative" style={{ height: '180px' }}>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[var(--dark-main)] text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                          750%
                        </div>
                      </div>
                      <span className="text-xs text-[var(--gray-text)] mt-2">25 שנה</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 md:py-12">
                <p className="text-[var(--gray-text)] text-sm mb-2">כמה הייתם מרוויחים מהשקעה ארוכת טווח בשוק ההון?</p>
                <h4 className="text-xl md:text-2xl font-bold text-[var(--dark-main)] mb-4">
                  צפו בתשואות העבר של מדד S&P 500
                </h4>
                <p className="text-[var(--gray-text)] text-sm leading-relaxed mb-6">
                  גלו את הפוטנציאל של השקעה חכמה עם מחשבון S&P 500 שלנו. הזינו סכום והשנה ההיפותטית שבה הייתם מתחילים להשקיע, והמחשבון יראה לכם כמה התשואה והרווח הנקי היו מצטברים עד היום. כלי פשוט ואינטואיטיבי שממחיש את הכוח של צמיחה פיננסית לאורך זמן.
                </p>
                <button className="bg-[#2dd4bf] hover:bg-[#14b8a6] text-[var(--dark-main)] font-semibold py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
                  למחשבון S&P 500
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Section */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-[var(--dark-main)] mb-8">מאמרים רלונטיים</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden border border-[#e5e7eb] hover:shadow-md transition-shadow">
                {/* Image Placeholder */}
                <div className="h-40 bg-[#e5e7eb] flex items-center justify-center">
                  <svg className="w-12 h-12 text-[#9ca3af]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-[var(--dark-main)] text-sm mb-2 line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-[var(--gray-text)] text-xs leading-relaxed line-clamp-4">
                    {article.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Podcasts Section */}
        <div>
          <h3 className="text-xl font-bold text-[var(--dark-main)] mb-8">פודקאסטים רלוונטיים</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {podcasts.map((podcast, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden border border-[#e5e7eb] hover:shadow-md transition-shadow">
                <div className="flex">
                  {/* Content */}
                  <div className="flex-1 p-6">
                    <h4 className="font-bold text-[var(--dark-main)] text-base mb-1">
                      {podcast.title}
                    </h4>
                    <p className="text-[var(--gray-text)] text-sm mb-4">
                      {podcast.subtitle}
                    </p>
                    <div className="border-t border-[#e5e7eb] pt-4 flex items-center justify-between text-xs text-[var(--gray-text)]">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{podcast.duration}</span>
                      </div>
                      <span>{podcast.date}</span>
                    </div>
                  </div>
                  
                  {/* Play Button Placeholder */}
                  <div className="w-40 bg-[#e5e7eb] flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[var(--dark-main)] flex items-center justify-center">
                      <Play className="w-6 h-6 text-white fill-white mr-[-2px]" />
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

