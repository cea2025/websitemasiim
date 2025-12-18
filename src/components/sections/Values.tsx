'use client';

export default function Values() {
  const values = [
    {
      icon: 'torah',
      title: 'פתרון תואם להלכה',
      description: 'הקרן פועלת באישור מלא של גדולי הרבנים ובזכות ההשקעה המשולבת עם תוכניות הגמ״ח, הקרן משלבת השקעה בשוק ההון עם היתר מעשר.',
    },
    {
      icon: 'shield',
      title: 'ניהול כספים אחראי',
      description: 'הכספים מנוהלים בשקיפות מלאה, עם מנגנון המיועד למנוע משיכות מוקדמות שנעשות בתגובה לתנודות בשוק ההון, כדי לשמור על רווחיות ארוכת טווח.',
    },
    {
      icon: 'balance',
      title: 'איזון בין יציבות לתשואה',
      description: 'הקרן משלבת השקעה יציבה בגמ"ח לצד השקעה בשוק ההון במדד S&P 500, המציע תשואה גבוהה לאורך זמן עם ניהול סיכונים מבוקר.',
    },
  ];

  const renderIcon = (type: string) => {
    const iconClass = "w-[100px] h-[70px] lg:w-[145px] lg:h-[98px]";
    
    switch (type) {
      case 'torah':
        return (
          <svg className={iconClass} viewBox="0 0 145 98" fill="none">
            <path d="M30 88V30L72.5 10L115 30V88" stroke="#242424" strokeWidth="2.5" strokeLinejoin="round"/>
            <path d="M45 45H100" stroke="#242424" strokeWidth="2"/>
            <path d="M45 58H100" stroke="#242424" strokeWidth="2"/>
            <path d="M45 71H85" stroke="#242424" strokeWidth="2"/>
            <path d="M72.5 10V88" stroke="#242424" strokeWidth="1.5" strokeDasharray="4 4"/>
          </svg>
        );
      case 'shield':
        return (
          <svg className={iconClass} viewBox="0 0 145 98" fill="none">
            <path d="M72.5 8C45 20 28 32 28 55C28 78 50 90 72.5 95C95 90 117 78 117 55C117 32 100 20 72.5 8Z" stroke="#242424" strokeWidth="2.5"/>
            <path d="M55 50L67 62L90 39" stroke="#242424" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'balance':
        return (
          <svg className={iconClass} viewBox="0 0 145 98" fill="none">
            <path d="M72.5 12V78" stroke="#242424" strokeWidth="2.5"/>
            <path d="M35 28H110" stroke="#242424" strokeWidth="2.5"/>
            <circle cx="35" cy="55" r="18" stroke="#242424" strokeWidth="2"/>
            <circle cx="110" cy="55" r="18" stroke="#242424" strokeWidth="2"/>
            <path d="M60 88H85" stroke="#242424" strokeWidth="4" strokeLinecap="round"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex flex-col gap-[50px] lg:gap-[90px]">
          
          {/* Header */}
          <div className="flex flex-col gap-[15px] lg:gap-[25px] text-center">
            <h2 className="heading-lg">
              הערכים של קרן משיאים
            </h2>
            <p className="text-md lg:text-[20px]">
              אלה הערכים שמכתיבים את חזון הקרן, ולדעתנו הם גם הסיבות שכדאי לכם לבחור דווקא בנו
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] lg:gap-[112px]">
            {values.map((value, index) => (
              <div key={index} className="flex flex-col items-center gap-[30px] lg:gap-[60px]">
                {/* Icon Container */}
                <div className="w-[180px] h-[100px] lg:w-[250px] lg:h-[141px] flex items-center justify-center">
                  {renderIcon(value.icon)}
                </div>
                {/* Text */}
                <div className="flex flex-col gap-[15px] lg:gap-[20px] text-center">
                  <h3 className="text-[18px] lg:text-[21px] font-bold text-black">
                    {value.title}
                  </h3>
                  <p className="text-[16px] lg:text-[18px] font-normal text-black leading-[1.5]">
                    {value.description}
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
