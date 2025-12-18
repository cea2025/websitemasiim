'use client';

import { Scale, Shield, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Scale,
    title: 'פתרון תואם להלכה',
    description: 'הקרן פועלת באישור מלא של גדולי הרבנים ובזכות ההשקעה המשולבת עם תוכניות הגמ״ח, הקרן משלבת השקעה בשוק ההון עם היתר מעשר.',
  },
  {
    icon: Shield,
    title: 'ניהול כספים אחראי',
    description: 'הכספים מנוהלים בשקיפות מלאה, עם מנגנון המיועד למנוע משיכות מוקדמות שנעשות בתגובה לתנודות בשוק ההון, כדי לשמור על רווחיות ארוכת טווח.',
  },
  {
    icon: TrendingUp,
    title: 'איזון בין יציבות לתשואה',
    description: 'הקרן משלבת השקעה יציבה בגמ"ח לצד השקעה בשוק ההון במדד S&P 500, המציע תשואה גבוהה לאורך זמן עם ניהול סיכונים מבוקר.',
  },
];

export default function AboutValues() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--dark-main)] text-center mb-12">
          הערכים שמנחים אותנו
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              {/* Icon */}
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 bg-[#f8f8f8] rounded-2xl flex items-center justify-center">
                <value.icon className="w-12 h-12 md:w-16 md:h-16 text-[#2dd4bf]" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-bold text-[var(--dark-main)] mb-3">
                {value.title}
              </h3>
              <p className="text-[var(--gray-text)] text-sm md:text-base leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

