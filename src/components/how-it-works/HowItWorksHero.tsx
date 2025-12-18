'use client';

export default function HowItWorksHero() {
  return (
    <section className="bg-[#f8f8f8] py-16 md:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Description */}
            <p className="text-[var(--gray-text)] text-base md:text-lg leading-relaxed max-w-lg order-2 md:order-1">
              בדף ההרחבה פירטנו על כל שלבי התהליך – משלב ההיכרות הראשוני ועד לניהול החיסכון בפועל, 
              בצורה שקופה ומותאמת אישית לצרכים שלכם.
            </p>
            
            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--dark-main)] order-1 md:order-2">
              איך זה עובד?
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

