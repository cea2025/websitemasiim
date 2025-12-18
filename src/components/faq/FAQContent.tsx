'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const categories = [
  { id: 'all', label: 'הכל' },
  { id: 'program', label: 'על התוכנית' },
  { id: 'investment', label: 'השקעות ותשואות' },
  { id: 'payments', label: 'תשלומים והפקדות' },
  { id: 'halacha', label: 'הלכה' },
];

const faqData = [
  {
    id: 1,
    question: 'מה קורה לחסכון שלי אם שוק ההון במצב של שפל?',
    answer: 'במקרה כזה, הלוואת הגמ"ח מכסה את ההוצאות המיידיות, בעוד שניתן להמתין לשיפור בשוק ההון כדי להשתמש ברווחים למענק הדיור או להוצאות החתונה לזוג הצעיר.',
    category: 'investment',
  },
  {
    id: 2,
    question: 'מהם דמי הניהול בתוכנית?',
    answer: 'דמי הניהול בתוכנית משיאים משתנים בהתאם לסוג התוכנית ולסכומי ההפקדה. אנו מחויבים לשקיפות מלאה ונפרט לכם את כל העלויות לפני ההצטרפות.',
    category: 'payments',
  },
  {
    id: 3,
    question: 'איך התוכנית מונעת סיכון מוגבר בהשקעות?',
    answer: 'התוכנית משלבת בין השקעה בשוק ההון לבין גמ"ח מסורתי, מה שיוצר איזון בין פוטנציאל לתשואה גבוהה לבין יציבות. הכספים מנוהלים על ידי מיטב דש, אחד מבתי ההשקעות המובילים בישראל.',
    category: 'investment',
  },
  {
    id: 4,
    question: 'כמה כסף צריך להפקיד מדי חודש?',
    answer: 'סכום ההפקדה החודשי מותאם אישית לצרכים ולמטרות שלכם. ניתן להתחיל מסכומים נמוכים יחסית ולהגדיל עם הזמן. נציג מקצועי יעזור לכם לתכנן את ההפקדות בצורה הנכונה.',
    category: 'payments',
  },
  {
    id: 5,
    question: 'האם התוכנית מותאמת להלכה?',
    answer: 'כן, התוכנית פועלת בהתאם להלכה ובאישור גדולי הפוסקים. ההשקעות מבוצעות בקרנות כשרות בלבד.',
    category: 'halacha',
  },
  {
    id: 6,
    question: 'מה היתרון של התוכנית המשולבת על פני חיסכון רגיל?',
    answer: 'התוכנית המשולבת מאפשרת ליהנות משני עולמות - היציבות של גמ"ח מסורתי והתשואה הפוטנציאלית של שוק ההון. זה מאפשר להגיע ליום השמחה עם סכום גבוה יותר.',
    category: 'program',
  },
  {
    id: 7,
    question: 'כמה זמן לוקח עד שאפשר לקבל את הכסף?',
    answer: 'הכסף זמין עבורכם סמוך למועד השמחה המתוכנן. ניתן לקבל הלוואה מהגמ"ח שתושלם עם הרווחים משוק ההון.',
    category: 'payments',
  },
  {
    id: 8,
    question: 'מי מנהל את ההשקעות?',
    answer: 'ההשקעות מנוהלות על ידי מיטב דש, אחד מבתי ההשקעות המובילים והמנוסים בישראל, תחת פיקוח רגולטורי מלא.',
    category: 'investment',
  },
  {
    id: 9,
    question: 'האם אפשר לפרוש מהתוכנית באמצע?',
    answer: 'כן, ניתן לפרוש מהתוכנית בכל שלב. התנאים המדויקים יפורטו בחוזה ההצטרפות. מומלץ להתייעץ עם נציג לפני קבלת החלטה.',
    category: 'program',
  },
  {
    id: 10,
    question: 'האם יש ערבויות לכספים שלי?',
    answer: 'הכספים מנוהלים בבתי השקעות מפוקחים ועומדים בכל דרישות הרגולציה. הגמ"ח פועל כמערכת ביטחון נוספת.',
    category: 'program',
  },
];

export default function FAQContent() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFAQ, setOpenFAQ] = useState<number | null>(1);

  const filteredFAQs = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-[var(--dark-main)] text-white'
                    : 'bg-[#f3f4f6] text-[var(--gray-text)] hover:bg-[#e5e7eb]'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="bg-[#f8f8f8] rounded-2xl p-4 md:p-8">
            <div className="space-y-0">
              {filteredFAQs.map((faq, index) => (
                <div 
                  key={faq.id}
                  className={`${index !== filteredFAQs.length - 1 ? 'border-b border-[#e5e7eb]' : ''}`}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full py-6 flex items-center justify-between gap-4 text-right"
                  >
                    <div className="flex items-center justify-center w-8 h-8 flex-shrink-0">
                      {openFAQ === faq.id ? (
                        <ChevronUp className="w-5 h-5 text-[var(--gray-text)]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[var(--gray-text)]" />
                      )}
                    </div>
                    <span className="flex-1 text-base md:text-lg font-semibold text-[var(--dark-main)] text-right">
                      {faq.question}
                    </span>
                  </button>
                  
                  {openFAQ === faq.id && (
                    <div className="pb-6 pr-12">
                      <p className="text-[var(--gray-text)] text-sm md:text-base leading-relaxed text-right">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

