'use client';

const steps = [
  {
    number: 1,
    title: 'פנייה לקרן משיאים',
    subtitle: 'הצעד הראשון – יוצרים קשר',
    description: 'בוחרים איך להתחיל – דרך שיחה עם נציג מקצועי או באמצעות הסימולטור המקוון באתר, שמנגיש את התהליך בצורה פשוטה ונוחה.',
  },
  {
    number: 2,
    title: 'היכרות עם המשפחה',
    subtitle: 'הצעד השני – הבנת הצרכים המדויקים',
    description: 'נקבל מכם את המידע הרלוונטי כדי להבין לעומק את היעדים שלכם, התקציב, יכולת ההחזר והתכנון הפיננסי העתידי.',
  },
  {
    number: 3,
    title: 'התאמת תוכנית אישית',
    subtitle: 'הצעד השלישי – מציאת התוכנית שמתאימה בדיוק לכם',
    description: 'על בסיס המידע שסיפקתם, נציג בפניכם תוכנית חיסכון שמותאמת באופן אישי ליעדים ולצרכים שלכם.',
  },
  {
    number: 4,
    title: 'הבהרת התנאים',
    subtitle: 'הצעד הרביעי – כל הפרטים, בשקיפות מלאה',
    description: 'נפרט את תנאי התוכנית, כולל מועדי ההפקדות, מועדי התשלומים והרווחים הצפויים, כדי שתהיו בביטחון מלא לאורך כל הדרך.',
  },
  {
    number: 5,
    title: 'חתימה על המסמכים',
    subtitle: 'הצעד החמישי – מסדירים את כל הפרטים',
    description: 'חותמים על המסמכים הרשמיים כדי להתחיל בתהליך, תוך ליווי מקצועי שמוודא שאתם מבינים כל פרט.',
  },
  {
    number: 6,
    title: 'העברת הכספים לקרן',
    subtitle: 'הצעד השישי – התחלת החיסכון',
    description: 'הכספים שלכם מתחילים לעבור לקרן משיאים ומקבלים ניהול מקצועי ומבוקר.',
  },
  {
    number: 7,
    title: 'איזון בין גמ"ח לשוק ההון',
    subtitle: 'הצעד השביעי – חלוקת הכספים להשקעה',
    description: 'הכספים מתחלקים – חלקם מופקדים בתוכנית הגמ"ח, והחלק השני מושקע בשוק ההון דרך מיטב דש, ליצירת איזון בין יציבות לתשואה.',
  },
  {
    number: 8,
    title: 'מגיעים ליום השמחה מוכנים ורגועים',
    subtitle: 'הצעד האחרון – הכסף עובד בשבילכם, עד יום השמחה ולאחריה',
    description: 'החיסכון שלכם צומח לאורך השנים בזכות השקעות בשוק ההון ותמיכה מהגמ"ח. סמוך למועד השמחה, תקבלו הלוואה מהגמ"ח שתשלים את הסכום הדרוש לאחר חישוב הרווחים שהצטברו משוק ההון. לאחר החתונה, תוכלו להמשיך לנהל את התוכנית ולהחזיר את ההלוואה בפריסה נוחה ומותאמת אישית.',
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-[#f8f8f8] py-8 md:py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Step Card */}
              <div className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <h3 className="text-lg md:text-xl font-bold text-[var(--dark-main)] mb-2">
                    {step.subtitle}
                  </h3>
                  <p className="text-[var(--gray-text)] text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Number Circle */}
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white border-2 border-[#e5e7eb] flex items-center justify-center shadow-sm">
                    <span className="text-4xl md:text-5xl font-bold text-[var(--dark-main)]">
                      {step.number}
                    </span>
                  </div>
                  <p className="text-center text-sm md:text-base font-semibold text-[var(--dark-main)] mt-4 max-w-[200px]">
                    {step.title}
                  </p>
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block relative h-24 my-4">
                  <svg 
                    className="absolute w-full h-full" 
                    viewBox="0 0 400 100" 
                    preserveAspectRatio="none"
                  >
                    <path
                      d={index % 2 === 0 
                        ? "M 200 0 Q 100 50 200 100" 
                        : "M 200 0 Q 300 50 200 100"
                      }
                      stroke="#e5e7eb"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="8,8"
                    />
                  </svg>
                </div>
              )}

              {/* Mobile Connecting Line */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-6">
                  <div className="w-0.5 h-12 bg-[#e5e7eb]" style={{ backgroundImage: 'repeating-linear-gradient(to bottom, #e5e7eb 0, #e5e7eb 8px, transparent 8px, transparent 16px)' }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

