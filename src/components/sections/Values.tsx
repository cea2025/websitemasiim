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
    switch (type) {
      case 'torah':
        return (
          <svg className="w-[145px] h-[98px]" viewBox="0 0 145 98" fill="none">
            <path d="M72.5 10L40 30V70L72.5 90L105 70V30L72.5 10Z" stroke="#242424" strokeWidth="2"/>
            <path d="M50 40H95M50 55H95M50 70H80" stroke="#242424" strokeWidth="2"/>
            <path d="M72.5 10V90" stroke="#242424" strokeWidth="2" strokeDasharray="4 4"/>
          </svg>
        );
      case 'shield':
        return (
          <svg className="w-[145px] h-[98px]" viewBox="0 0 145 98" fill="none">
            <path d="M72.5 10C50 20 35 30 35 50C35 70 50 85 72.5 90C95 85 110 70 110 50C110 30 95 20 72.5 10Z" stroke="#242424" strokeWidth="2"/>
            <path d="M60 50L68 58L85 41" stroke="#242424" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'balance':
        return (
          <svg className="w-[145px] h-[98px]" viewBox="0 0 145 98" fill="none">
            <path d="M72.5 15V80" stroke="#242424" strokeWidth="2"/>
            <path d="M40 30H105" stroke="#242424" strokeWidth="2"/>
            <circle cx="40" cy="55" r="15" stroke="#242424" strokeWidth="2"/>
            <circle cx="105" cy="55" r="15" stroke="#242424" strokeWidth="2"/>
            <path d="M65 85H80" stroke="#242424" strokeWidth="3"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex flex-col gap-[90px]">
          {/* Header */}
          <div className="flex flex-col gap-[25px] text-center">
            <h2 className="text-[45px] font-bold text-[#1c1c1c] leading-[1.13]">
              הערכים של קרן משיאים
            </h2>
            <p className="text-[20px] font-normal text-black">
              אלה הערכים שמכתיבים את חזון הקרן, ולדעתנו הם גם הסיבות שכדאי לכם לבחור דווקא בנו
            </p>
          </div>

          {/* Values Grid */}
          <div className="flex items-start justify-center gap-[112px]">
            {values.map((value, index) => (
              <div key={index} className="flex flex-col items-center gap-[60px] max-w-[375px]">
                {/* Icon Container */}
                <div className="w-[250px] h-[141px] flex items-center justify-center">
                  {renderIcon(value.icon)}
                </div>
                {/* Text */}
                <div className="flex flex-col gap-[20px] text-center">
                  <h3 className="text-[21px] font-bold text-black">
                    {value.title}
                  </h3>
                  <p className="text-[18px] font-normal text-black leading-[1.5]">
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

