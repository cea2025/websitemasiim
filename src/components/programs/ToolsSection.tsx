'use client';

import { useState } from 'react';
import { ChevronLeft, Play, Clock } from 'lucide-react';

const glossaryTermsGemach = [
  {
    title: 'יחידה',
    description: 'כל יחידה מזכה בהלוואה של ₪40,000. ניתן לצרף עד 8 יחידות לכל ילד.',
  },
  {
    title: 'מענק',
    description: 'לאחר ההלוואה התורם או הזוג מקבלים אפשרות לבקשת מענק בהתאם למסלול הנבחר',
  },
  {
    title: 'תרומה',
    description: 'את התרומה מפקידים ההורים מראש, בהתאם למסלול הנבחר. לדעת גדולי הפוסקים ניתן לתת תרומה זו מכספי מעשרות.',
  },
  {
    title: 'הלוואה',
    description: 'ההלוואה עד ₪320,000 ניתנת לזוג הצעיר שהוריו הצטרפו לתוכנית הגמ"ח.',
  },
  {
    title: 'יחידה',
    description: 'כל יחידה מזכה בהלוואה של ₪40,000. ניתן לצרף עד 8 יחידות לכל ילד.',
  },
  {
    title: 'תרומה',
    description: 'את התרומה מפקידים ההורים מראש, בהתאם למסלול הנבחר. לדעת גדולי הפוסקים ניתן לתת תרומה זו מכספי מעשרות.',
  },
];

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
  const [activeTab, setActiveTab] = useState<'gemach' | 'stock'>('gemach');

  return (
    <section className="bg-white py-[100px] lg:py-24">
      <div className="flex flex-col gap-[80px] items-center px-[30px] lg:px-0 max-w-[1289px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-[15px] items-end justify-center text-center max-w-[316px] lg:max-w-[989px]">
          <h2 className="text-[24px] lg:text-[45px] font-bold text-[#1c1c1c] leading-[1.13] w-full">
            כלים ומידע שיעזרו לכם לבחור את המסלול הנכון עבורכם
          </h2>
          <p className="text-[18px] lg:text-[26px] font-light text-[#242424] leading-[1.5] tracking-[-0.26px] lg:w-[889px]">
            קרן משיאים מציעה כלים מתקדמים ומידע נגיש, שיעזרו לכם להבין את האפשרויות ולבחור את התוכנית שמתאימה בדיוק לכם.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="flex flex-col gap-[143px] items-start w-full">
          
          {/* Glossary Section */}
          <div className="flex flex-col gap-[30px] items-start justify-center w-full">
            <div className="flex flex-col lg:flex-row items-end justify-between w-full gap-4">
              {/* Tab Switcher */}
              <div className="bg-[rgba(211,215,219,0.43)] rounded-[57px] px-[10px] py-[14px] h-[49px] flex items-center backdrop-blur-[18.76px] shadow-[0px_12.771px_25.861px_0px_rgba(0,0,0,0)] w-[288px]">
                <button 
                  onClick={() => setActiveTab('stock')}
                  className={`px-[20px] py-[11px] w-[119px] text-[18px] tracking-[0.072px] uppercase transition-all ${
                    activeTab === 'stock' 
                      ? 'bg-[#1b1b1b] text-white font-semibold rounded-[46px]' 
                      : 'text-[rgba(11,34,50,0.79)]'
                  }`}
                >
                  שוק ההון
                </button>
                <button 
                  onClick={() => setActiveTab('gemach')}
                  className={`px-[20px] py-[21px] h-[37px] flex-1 text-[18px] tracking-[0.072px] uppercase transition-all flex items-center justify-center ${
                    activeTab === 'gemach' 
                      ? 'bg-[#1b1b1b] text-white font-semibold rounded-[46px]' 
                      : 'text-[rgba(11,34,50,0.79)]'
                  }`}
                >
                  תוכניות הגמ״ח
                </button>
              </div>
              
              <h3 className="text-[20px] lg:text-[30px] font-bold text-[#1c1c1c] leading-[1.13] text-right">
                מילון מושגים
              </h3>
            </div>
            
            {/* Glossary Cards Grid - 3 columns on desktop */}
            <div className="w-full overflow-x-auto pb-4 -mb-4 lg:overflow-visible lg:pb-0 lg:mb-0">
              <div className="flex gap-[20px] lg:grid lg:grid-cols-3 min-w-max lg:min-w-0">
                {glossaryTermsGemach.slice(0, 6).map((term, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-[15px] px-[25px] py-[20px] w-[200px] lg:w-auto shadow-[0px_6px_13px_0px_rgba(145,145,145,0.1),0px_23px_23px_0px_rgba(145,145,145,0.09),0px_51px_31px_0px_rgba(145,145,145,0.05),0px_-91px_36px_0px_rgba(145,145,145,0.03),0px_143px_40px_0px_rgba(145,145,145,0.05)]"
                  >
                    <div className="flex flex-col gap-[15px] items-end w-full">
                      <h4 className="text-[18px] font-semibold text-black leading-[1.5] text-right">
                        {term.title}
                      </h4>
                      <p className="text-[16px] font-light text-black leading-[1.5] text-right">
                        {term.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <a href="#" className="text-[20px] font-semibold text-[#3f3f3f] leading-[1.5] underline text-right">
              למילון מושגים המלא &gt;
            </a>
          </div>

          {/* Simulator Section */}
          <div className="flex flex-col gap-[30px] items-start w-full">
            <h3 className="text-[20px] lg:text-[30px] font-bold text-[#1c1c1c] leading-[1.13] text-right w-full">
              הסימולטור שלנו
            </h3>
            
            <div className="bg-white rounded-[15px] py-[30px] px-[30px] lg:pl-[90px] lg:pr-[60px] w-full h-auto lg:h-[367px] shadow-[0px_6px_13px_0px_rgba(145,145,145,0.1),0px_23px_23px_0px_rgba(145,145,145,0.09),0px_51px_31px_0px_rgba(145,145,145,0.05),0px_-91px_36px_0px_rgba(145,145,145,0.03),0px_143px_40px_0px_rgba(145,145,145,0.05)] overflow-hidden relative flex items-center justify-end gap-[10px]">
              
              {/* Image Placeholder - Desktop */}
              <div className="hidden lg:block absolute left-[81px] top-[59px] w-[564px] h-[370px] bg-gradient-to-br from-gray-200 to-gray-300 mix-blend-luminosity opacity-50" />
              
              <div className="flex flex-col gap-[35px] items-end lg:w-[516px]">
                <div className="flex flex-col gap-[20px] items-start text-right w-full">
                  <p className="text-[18px] lg:text-[24px] font-light text-black leading-[1.5]">
                    חסר לכם פרטים כדי להגיע להחלטה?
                  </p>
                  <h4 className="text-[20px] lg:text-[30px] font-bold text-[#1c1c1c] leading-[1.13]">
                    קבלו את התמונה המלאה של החיסכון
                  </h4>
                </div>
                <p className="text-[14px] lg:text-[18px] font-light text-black leading-[1.5] text-right lg:w-[518px]">
                  עם הסימולטור של קרן משיאים, תוכלו לבדוק בקלות את ההחזרים החודשיים, המענקים וההלוואות בכל אחד מהמסלולים שלנו. כך תמצאו את המסלול המותאם בדיוק לצרכים שלכם – לחיסכון חכם ומותאם אישית למימון נישואי הילדים.
                </p>
                <button className="bg-[#242424] hover:bg-[#1a1a1a] text-[#f8f8f8] font-semibold h-[53px] px-[15px] py-[12px] rounded flex items-center justify-center gap-[15px] transition-colors">
                  <ChevronLeft className="w-[16px] h-[24px] rotate-180" />
                  <span className="text-[16px]">כניסה לסימולטור</span>
                </button>
              </div>
            </div>
          </div>

          {/* S&P 500 Calculator */}
          <div className="flex flex-col gap-[30px] items-start w-full">
            <h3 className="text-[20px] lg:text-[30px] font-bold text-[#1c1c1c] leading-[1.13] text-right w-full">
              מחשבון S&P 500
            </h3>
            
            <div className="bg-white rounded-[15px] py-[30px] px-[30px] lg:pl-[90px] lg:pr-[60px] w-full h-auto lg:h-[367px] shadow-[0px_6px_13px_0px_rgba(145,145,145,0.1),0px_23px_23px_0px_rgba(145,145,145,0.09),0px_51px_31px_0px_rgba(145,145,145,0.05),0px_-91px_36px_0px_rgba(145,145,145,0.03),0px_143px_40px_0px_rgba(145,145,145,0.05)] overflow-hidden relative flex items-center justify-end gap-[10px]">
              
              {/* Chart Placeholder - Desktop */}
              <div className="hidden lg:block absolute left-[-13px] top-[78px] w-[609px] h-[304px] bg-[#ebebeb] rounded-[20px] shadow-[0px_3.241px_20.255px_0px_rgba(0,0,0,0.1)] overflow-hidden mix-blend-luminosity">
                <div className="absolute bottom-[20px] left-[50px] right-[30px] flex items-end justify-between h-[200px]">
                  {/* Y-axis labels */}
                  <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-between text-[11.857px] text-[#aeaeae] w-[40px]">
                    <span>750%</span>
                    <span>600%</span>
                    <span>450%</span>
                    <span>300%</span>
                    <span>150%</span>
                  </div>
                  
                  {/* Bars */}
                  <div className="flex items-end gap-[60px] ml-[60px]">
                    {[
                      { label: '5 שנים', height: 40 },
                      { label: '10 שנים', height: 80 },
                      { label: '15 שנה', height: 120 },
                      { label: '20 שנה', height: 160 },
                      { label: '25 שנה', height: 200 },
                    ].map((item, i) => (
                      <div key={item.label} className="flex flex-col items-center gap-2">
                        <div 
                          className={`w-[50px] rounded-t ${i === 4 ? 'bg-[#2dd4bf]' : 'bg-[#d1d5db]'}`}
                          style={{ height: `${item.height}px` }}
                        />
                        <span className="text-[11.857px] text-[#929292]">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-[35px] items-end lg:w-[516px]">
                <div className="flex flex-col gap-[20px] items-start text-right w-full">
                  <p className="text-[18px] lg:text-[24px] font-light text-black leading-[1.5]">
                    כמה הייתם מרוויחים מהשקעה ארוכת טווח בשוק ההון?
                  </p>
                  <h4 className="text-[20px] lg:text-[30px] font-bold text-[#1c1c1c] leading-[1.13]">
                    צפו בתשואות העבר של מדד S&P 500
                  </h4>
                </div>
                <p className="text-[14px] lg:text-[18px] font-light text-black leading-[1.5] text-right lg:w-[518px]">
                  גלו את הפוטנציאל של השקעה חכמה עם מחשבון S&P 500 שלנו. הזינו סכום והשנה ההיפותטית שבה הייתם מתחילים להשקיע, והמחשבון יראה לכם כמה התשואה והרווח הנקי היו מצטברים עד היום. כלי פשוט ואינטואיטיבי שממחיש את הכוח של צמיחה פיננסית לאורך זמן.
                </p>
                <button className="bg-[#242424] hover:bg-[#1a1a1a] text-[#f8f8f8] font-semibold h-[53px] px-[15px] py-[12px] rounded flex items-center justify-center gap-[15px] transition-colors">
                  <ChevronLeft className="w-[16px] h-[24px] rotate-180" />
                  <span className="text-[16px]">כניסה למחשבון S&P 500</span>
                </button>
              </div>

              {/* Chart for mobile */}
              <div className="lg:hidden w-full bg-[#ebebeb] rounded-[12px] p-4 h-[190px] mt-4">
                <div className="flex items-end justify-around w-full h-full gap-2 px-4 pb-8">
                  {['5 שנים', '10 שנים', '15 שנה', '20 שנה', '25 שנה'].map((label, i) => (
                    <div key={label} className="flex flex-col items-center gap-1">
                      <div 
                        className={`w-6 rounded-t ${i === 4 ? 'bg-[#2dd4bf]' : 'bg-[#d1d5db]'}`} 
                        style={{ height: `${30 + i * 25}px` }}
                      />
                      <span className="text-[7px] text-[#929292]">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Articles Section */}
          <div className="flex flex-col gap-[30px] items-start w-full">
            <h3 className="text-[20px] lg:text-[30px] font-bold text-[#1c1c1c] leading-[1.13] text-right w-full">
              מאמרים רלונטיים
            </h3>
            
            {/* 4 columns on desktop */}
            <div className="w-full overflow-x-auto pb-4 -mb-4 lg:overflow-visible lg:pb-0 lg:mb-0">
              <div className="flex gap-[45px] min-w-max lg:min-w-0">
                {articles.map((article, index) => (
                  <div 
                    key={index} 
                    className={`bg-white rounded-[22px] p-[20px] w-[203px] lg:flex-1 opacity-80 ${index > 0 ? 'border border-[#dcdcdc]' : ''}`}
                  >
                    <div className="flex flex-col gap-[30px] items-center h-[457px]">
                      {/* Image Placeholder */}
                      <div className="bg-[#bababa] rounded-[10.877px] w-full h-[195px] flex items-center justify-center">
                        <svg className="w-[84px] h-[65px] text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      
                      {/* Content */}
                      <div className="flex flex-col gap-[30px] items-start text-right w-full lg:w-[248.5px]">
                        <h4 className="text-[16px] lg:text-[24px] font-bold text-[#121212] leading-[1.3] text-center w-full">
                          {article.title}
                        </h4>
                        <p className="text-[14px] lg:text-[18px] font-light text-[#182f43] leading-[1.4]">
                          {article.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Podcasts Section */}
          <div className="flex flex-col gap-[30px] items-start w-full">
            <h3 className="text-[20px] lg:text-[30px] font-bold text-[#1c1c1c] leading-[1.13] text-right w-full">
              פודקאסטים רלוונטיים
            </h3>
            
            {/* 2 columns on desktop */}
            <div className="w-full overflow-x-auto pb-4 -mb-4 lg:overflow-visible lg:pb-0 lg:mb-0">
              <div className="flex gap-[50px] min-w-max lg:min-w-0">
                {podcasts.map((podcast, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-[9.5px] border border-[#d0d0d0] overflow-hidden w-[198px] lg:flex-1 lg:h-[239px] flex flex-col lg:flex-row"
                  >
                    {/* Content */}
                    <div className="flex-1 px-[18px] lg:pl-[35px] lg:pr-0 py-[15px] lg:py-[30px] flex flex-col justify-between h-full order-2 lg:order-1">
                      <div className="flex flex-col gap-[10px] items-end justify-center text-right">
                        <h4 className="text-[16px] lg:text-[22px] font-bold text-[#121212] leading-[1.3]">
                          {podcast.title}
                        </h4>
                        <p className="text-[14px] lg:text-[18px] font-light text-[#182f43] leading-[1.39] lg:w-[244px]">
                          {podcast.subtitle}
                        </p>
                      </div>
                      
                      {/* Meta info */}
                      <div className="flex flex-col gap-[20px] items-start w-full mt-4 lg:mt-0">
                        <div className="w-full h-[1px] bg-[#e5e5e5]" />
                        <div className="flex items-start justify-between w-full">
                          <div className="flex gap-[5px] items-center justify-end">
                            <span className="text-[14px] font-light text-[#182f43] leading-[1.39]">
                              {podcast.duration}
                            </span>
                            <Clock className="w-[20px] h-[20px] text-[#182f43]" />
                          </div>
                          <span className="text-[14px] font-light text-[#182f43] leading-[1.39]">
                            {podcast.date}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Image Placeholder with Play Button */}
                    <div className="bg-[#bababa] h-[139px] lg:h-full lg:w-[238px] flex items-center justify-center order-1 lg:order-2">
                      <div className="w-[47.5px] lg:w-[64px] h-[47.5px] lg:h-[64px] rounded-full bg-white flex items-center justify-center">
                        <Play className="w-[25px] lg:w-[34.5px] h-[25px] lg:h-[34.5px] text-[#1c1c1c] fill-[#1c1c1c] mr-[-2px]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

