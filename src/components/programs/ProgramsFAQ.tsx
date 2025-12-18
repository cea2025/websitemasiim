'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'מה קורה לחסכון שלי אם שוק ההון במצב של שפל?',
    answer: 'במקרה כזה, הלוואת הגמ"ח מכסה את ההוצאות המיידיות, בעוד שניתן להמתין לשיפור בשוק ההון כדי להשתמש ברווחים למענק הדיור או להוצאות החתונה לזוג הצעיר.',
  },
  {
    question: 'מהם דמי הניהול בתוכנית?',
    answer: 'דמי הניהול בקרן משיאים נמוכים במיוחד בזכות שיתוף הפעולה עם מיטב דש. תוכלו לקבל פירוט מלא של דמי הניהול בעת ההצטרפות.',
  },
  {
    question: 'איך התוכנית מונעת סיכון מוגבר בהשקעות?',
    answer: 'התוכנית משלבת בין חיסכון בשוק ההון לבין גמ"ח, כך שגם אם יש ירידות בשוק ההון, הלוואת הגמ"ח מבטיחה את הסכום הנדרש לחתונה.',
  },
  {
    question: 'כמה כסף צריך להפקיד מדי חודש?',
    answer: 'סכום ההפקדה החודשי מותאם אישית לכל משפחה בהתאם ליכולות ולמטרות. ניתן להתחיל מסכומים נמוכים ולהגדיל עם הזמן.',
  },
  {
    question: 'מהם דמי הניהול בתוכנית?',
    answer: 'דמי הניהול בקרן משיאים נמוכים במיוחד בזכות שיתוף הפעולה עם מיטב דש. תוכלו לקבל פירוט מלא של דמי הניהול בעת ההצטרפות.',
  },
  {
    question: 'איך התוכנית מונעת סיכון מוגבר בהשקעות?',
    answer: 'התוכנית משלבת בין חיסכון בשוק ההון לבין גמ"ח, כך שגם אם יש ירידות בשוק ההון, הלוואת הגמ"ח מבטיחה את הסכום הנדרש לחתונה.',
  },
];

export default function ProgramsFAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--dark-main)] text-center mb-12">
            שאלות ותשובות נפוצות
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#f8f8f8] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-right"
                >
                  <span className="font-semibold text-[var(--dark-main)] text-base">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 mr-4">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-[var(--dark-main)]" />
                    ) : (
                      <Plus className="w-4 h-4 text-[var(--dark-main)]" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-[var(--gray-text)] text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

