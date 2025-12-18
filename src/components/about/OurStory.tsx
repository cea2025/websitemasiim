'use client';

export default function OurStory() {
  return (
    <section className="bg-[#f8f8f8] py-16 md:py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-2xl h-80 md:h-[500px] flex items-center justify-center shadow-sm">
              <svg className="w-24 h-24 text-[#d1d5db]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--dark-main)] mb-6">
              הסיפור שלנו, ואיך הכל התחיל
            </h2>
            <p className="text-[var(--gray-text)] leading-relaxed text-base md:text-lg">
              קרן משיאים נולדה מתוך הבנה עמוקה של האתגרים הכלכליים שמלווים את המשפחה החרדית. 
              במשך שנים, התמודדו משפחות עם לחצים כלכליים עצומים כדי לעמוד במימון נישואי הילדים, 
              לעיתים תוך לקיחת הלוואות כבדות. מתוך חזון ליצירת שינוי אמיתי, הקמנו את קרן משיאים – 
              פתרון שמבוסס על איזון בין יציבות פיננסית לבין תשואה גבוהה, תוך שמירה על ערכי ההלכה והמשפחה החרדית.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

