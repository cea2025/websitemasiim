'use client';

import { ExternalLink, Image as ImageIcon, ChevronLeft } from 'lucide-react';

const tools = [
  {
    id: 1,
    title: 'מחשבון S&P 500',
    description: 'גלה את הפוטנציאל של השקעה במדד S&P 500. הזינו סכום והשנה ההיפותטית, והמחשבון יראה לכם כמה יכולתם להרוויח לאורך הזמן.',
    link: 'לשימוש במחשבון S&P 500',
  },
  {
    id: 2,
    title: 'מחשבון חתונה',
    description: 'מחשבון החתונה שלנו מאפשר לכם להעריך את ההוצאות הצפויות, כולל עלויות החתונה והמענק לזוג הצעיר, כך שתוכלו לתכנן מראש את החיסכון המשפחתי.',
    link: 'לשימוש במחשבון חתונה',
  },
  {
    id: 3,
    title: 'מילון המושגים המלא',
    description: 'מילון המושגים של קרן משיאים נועד לפשט עבורכם את השפה הפיננסית. הכירו את כל המונחים החשובים בדרך לתכנון חיסכון נכון למימון נישואי הילדים.',
    link: 'לצפייה במילון המושגים',
  },
];

export default function ToolsSection() {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button className="bg-[#2dd4bf] hover:bg-[#14b8a6] text-[var(--dark-main)] font-semibold py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
              לכל הכלים
              <ChevronLeft className="w-4 h-4" />
            </button>
            <h2 className="text-xl md:text-2xl font-bold text-[var(--dark-main)]">
              תוכן וכלים מומלצים
            </h2>
          </div>
          
          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <div key={tool.id} className="group">
                {/* Image */}
                <div className="aspect-video bg-[#f3f4f6] rounded-xl flex items-center justify-center mb-4">
                  <ImageIcon className="w-12 h-12 text-[#d1d5db]" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-[var(--dark-main)] mb-2 text-right">
                  {tool.title}
                </h3>
                <p className="text-[var(--gray-text)] text-sm leading-relaxed mb-4 text-right">
                  {tool.description}
                </p>
                <a 
                  href="#"
                  className="inline-flex items-center gap-2 text-[var(--dark-main)] hover:text-[#2dd4bf] transition-colors"
                >
                  <span className="text-sm">{tool.link}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

