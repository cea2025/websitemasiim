'use client';

import { useState } from 'react';
import { ChevronLeft, Play } from 'lucide-react';

const glossaryTerms = [
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
];

const podcasts = [
  {
    title: 'בחירת התוכנית הנכונה ביותר עבורכם',
    subtitle: 'בהשתתפות מייסד הגמ״ח המרכזי',
  },
  {
    title: 'בחירת התוכנית הנכונה ביותר עבורכם',
    subtitle: 'בהשתתפות מייסד הגמ״ח המרכזי',
  },
  {
    title: 'בחירת התוכנית הנכונה ביותר עבורכם',
    subtitle: 'בהשתתפות מייסד הגמ״ח המרכזי',
  },
];

export default function ToolsSection() {
  const [activeTab, setActiveTab] = useState<'gemach' | 'stock'>('gemach');

  return (
    <section className="bg-white py-[100px] lg:py-24">
      <div className="flex flex-col gap-[100px] items-center px-[30px] lg:px-0">
        
        {/* Section Header */}
        <div className="flex flex-col gap-[15px] items-center text-center max-w-[316px] lg:max-w-[700px]">
          <h2 className="text-[24px] lg:text-[36px] font-bold text-[#1c1c1c] leading-[1.3] tracking-[-0.72px]">
            כלים ומידע שיעזרו לכם לבחור את המסלול הנכון עבורכם
          </h2>
          <p className="text-[18px] font-light text-[#242424] leading-[1.5] tracking-[-0.18px]">
            קרן משיאים מציעה כלים מתקדמים ומידע נגיש, שיעזרו לכם להבין את האפשרויות ולבחור את התוכנית שמתאימה בדיוק לכם.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="flex flex-col gap-[60px] items-end w-full max-w-[316px] lg:max-w-[1100px]">
          
          {/* Glossary Section */}
          <div className="flex flex-col gap-[20px] items-end w-full">
            <div className="flex flex-col gap-[15px] items-end justify-center">
              <h3 className="text-[20px] font-bold text-[#1c1c1c] leading-[1.3] tracking-[-0.6px] text-right">
                מילון מושגים
              </h3>
              
              {/* Tab Switcher */}
              <div className="bg-[rgba(211,215,219,0.43)] rounded-full px-[10px] py-[14px] flex items-center backdrop-blur-[18.76px]">
                <button 
                  onClick={() => setActiveTab('stock')}
                  className={`px-[20px] py-[11px] rounded-full text-[13px] uppercase tracking-[0.05px] transition-all ${
                    activeTab === 'stock' 
                      ? 'bg-transparent text-[rgba(11,34,50,0.79)]' 
                      : 'bg-transparent text-[rgba(11,34,50,0.79)]'
                  }`}
                >
                  שוק ההון
                </button>
                <button 
                  onClick={() => setActiveTab('gemach')}
                  className={`px-[20px] py-[21px] h-[29px] rounded-full text-[13px] uppercase tracking-[0.05px] transition-all flex items-center justify-center ${
                    activeTab === 'gemach' 
                      ? 'bg-[#1b1b1b] text-white font-semibold' 
                      : 'bg-transparent text-[rgba(11,34,50,0.79)]'
                  }`}
                >
                  תוכניות הגמ״ח
                </button>
              </div>
            </div>
            
            {/* Glossary Cards - Horizontal scroll on mobile */}
            <div className="flex flex-col gap-[40px] items-end w-full">
              <div className="w-full overflow-x-auto pb-4 -mb-4">
                <div className="flex gap-[20px] lg:grid lg:grid-cols-2 min-w-max lg:min-w-0">
                  {glossaryTerms.map((term, index) => (
                    <div 
                      key={index} 
                      className="bg-white rounded-[15px] p-[20px] w-[200px] lg:w-auto shadow-[0px_6px_13px_0px_rgba(145,145,145,0.1),0px_23px_23px_0px_rgba(145,145,145,0.09),0px_51px_31px_0px_rgba(145,145,145,0.05),0px_-91px_36px_0px_rgba(145,145,145,0.03),0px_143px_40px_0px_rgba(145,145,145,0.05)]"
                    >
                      <div className="flex flex-col gap-[15px] items-end">
                        <h4 className="text-[16px] font-semibold text-black leading-[1.5] text-right">
                          {term.title}
                        </h4>
                        <p className="text-[14px] font-light text-black leading-[1.5] text-right">
                          {term.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <a href="#" className="text-[18px] font-semibold text-[#3f3f3f] leading-[1.5] underline text-right">
                למילון המושגים המלא &gt;
              </a>
            </div>
          </div>

          {/* Simulator Section */}
          <div className="flex flex-col gap-[20px] items-end w-full">
            <h3 className="text-[20px] font-bold text-[#1c1c1c] leading-[1.3] tracking-[-0.6px] text-right">
              הסימולטור שלנו
            </h3>
            
            <div className="bg-white rounded-[15px] p-[30px] w-full shadow-[0px_6px_13px_0px_rgba(145,145,145,0.1),0px_23px_23px_0px_rgba(145,145,145,0.09),0px_51px_31px_0px_rgba(145,145,145,0.05),0px_-91px_36px_0px_rgba(145,145,145,0.03),0px_143px_40px_0px_rgba(145,145,145,0.05)]">
              <div className="flex flex-col gap-[35px] items-end">
                <div className="flex flex-col gap-[20px] items-start text-right w-full">
                  <p className="text-[18px] font-light text-[#6e6e6e] leading-[1.5]">
                    בסימולטר שלנו כבר ביקרתם?
                  </p>
                  <h4 className="text-[20px] font-bold text-[#1c1c1c] leading-[1.25]">
                    בנו את תזרים ההחזרים שלכם באמצעות המחשבון המיוחד של קרן משיאים
                  </h4>
                </div>
                <p className="text-[14px] font-light text-black leading-[1.5] text-right">
                  עם הסימולטור של קרן משיאים, תוכלו לבדוק בקלות את ההחזרים החודשיים, המענקים וההלוואות בכל אחד מהמסלולים שלנו. כך תמצאו את המסלול המותאם בדיוק לצרכים שלכם – לחיסכון חכם ומותאם אישית למימון נישואי הילדים.
                </p>
                <button className="w-full bg-[#242424] hover:bg-[#1a1a1a] text-[#f8f8f8] font-semibold h-[45px] px-[15px] rounded flex items-center justify-center gap-[15px] transition-colors">
                  <ChevronLeft className="w-[16px] h-[24px] rotate-180" />
                  <span className="text-[16px]">כניסה לסימולטור</span>
                </button>
              </div>
            </div>
          </div>

          {/* S&P 500 Calculator */}
          <div className="flex flex-col gap-[20px] items-end w-full">
            <h3 className="text-[20px] font-bold text-[#1c1c1c] leading-[1.3] tracking-[-0.6px] text-right">
              מחשבון S&P 500
            </h3>
            
            <div className="bg-white rounded-[15px] p-[30px] w-full shadow-[0px_6px_13px_0px_rgba(145,145,145,0.1),0px_23px_23px_0px_rgba(145,145,145,0.09),0px_51px_31px_0px_rgba(145,145,145,0.05),0px_-91px_36px_0px_rgba(145,145,145,0.03),0px_143px_40px_0px_rgba(145,145,145,0.05)]">
              <div className="flex flex-col gap-[35px] items-end">
                <div className="flex flex-col gap-[20px] items-start text-right w-full">
                  <p className="text-[18px] font-light text-[#6e6e6e] leading-[1.5]">
                    כמה הייתם מרוויחים מהשקעה ארוכת טווח בשוק ההון?
                  </p>
                  <h4 className="text-[20px] font-bold text-[#1c1c1c] leading-[1.25]">
                    צפו בתשואות העבר של מדד S&P 500
                  </h4>
                </div>
                <p className="text-[14px] font-light text-black leading-[1.5] text-right">
                  גלו את הפוטנציאל של השקעה חכמה עם מחשבון S&P 500 שלנו. הזינו סכום והשנה ההיפותטית שבה הייתם מתחילים להשקיע, והמחשבון יראה לכם כמה התשואה והרווח הנקי היו מצטברים עד היום. כלי פשוט ואינטואיטיבי שממחיש את הכוח של צמיחה פיננסית לאורך זמן.
                </p>
                
                {/* Chart Placeholder */}
                <div className="w-full bg-[#ebebeb] rounded-[12px] p-4 h-[190px] flex items-center justify-center">
                  <div className="flex items-end justify-around w-full h-full gap-2 px-4 pb-8">
                    {['5 שנים', '10 שנים', '15 שנה', '20 שנה', '25 שנה'].map((label, i) => (
                      <div key={label} className="flex flex-col items-center gap-1">
                        <div 
                          className={`w-6 lg:w-8 rounded-t ${i === 4 ? 'bg-[#2dd4bf]' : 'bg-[#d1d5db]'}`} 
                          style={{ height: `${30 + i * 25}px` }}
                        />
                        <span className="text-[7px] text-[#929292]">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-[#242424] hover:bg-[#1a1a1a] text-[#f8f8f8] font-semibold h-[45px] px-[15px] rounded flex items-center justify-center gap-[15px] transition-colors">
                  <ChevronLeft className="w-[16px] h-[24px] rotate-180" />
                  <span className="text-[16px]">כניסה למחשבון תשואות עבר</span>
                </button>
              </div>
            </div>
          </div>

          {/* Articles Section */}
          <div className="flex flex-col gap-[20px] items-end w-full">
            <h3 className="text-[20px] font-bold text-black leading-[normal] text-right">
              מאמרים רלונטיים
            </h3>
            
            {/* Horizontal scroll on mobile */}
            <div className="w-full overflow-x-auto pb-4 -mb-4">
              <div className="flex gap-[36px] lg:grid lg:grid-cols-3 min-w-max lg:min-w-0">
                {articles.map((article, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-[22px] border border-[#dcdcdc] p-[20px] w-[203px] lg:w-auto opacity-80"
                  >
                    <div className="flex flex-col gap-[25px] items-center">
                      {/* Image Placeholder */}
                      <div className="bg-[#bababa] rounded-[6.75px] w-[181.8px] h-[121px] flex items-center justify-center">
                        <svg className="w-[52px] h-[40px] text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      
                      {/* Content */}
                      <div className="flex flex-col gap-[15px] items-start text-right w-[163.5px]">
                        <h4 className="text-[16px] font-bold text-[#121212] leading-[1.3]">
                          {article.title}
                        </h4>
                        <p className="text-[14px] font-light text-[#182f43] leading-[1.4]">
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
          <div className="flex flex-col gap-[20px] items-end w-full">
            <h3 className="text-[20px] font-bold text-black leading-[normal] text-right">
              פודקאסטים רלוונטיים
            </h3>
            
            {/* Horizontal scroll on mobile */}
            <div className="w-full overflow-x-auto pb-4 -mb-4">
              <div className="flex gap-[36px] lg:grid lg:grid-cols-3 min-w-max lg:min-w-0">
                {podcasts.map((podcast, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-[9.5px] border border-[#d0d0d0] overflow-hidden w-[198px] lg:w-auto"
                  >
                    {/* Image Placeholder with Play Button */}
                    <div className="bg-[#bababa] h-[139px] flex items-center justify-center">
                      <div className="w-[47.5px] h-[47.5px] rounded-full bg-white flex items-center justify-center">
                        <Play className="w-[25px] h-[25px] text-[#1c1c1c] fill-[#1c1c1c] mr-[-2px]" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="h-[141px] px-[18px] py-[15px]">
                      <div className="flex flex-col gap-[10px] items-end justify-center text-right">
                        <h4 className="text-[16px] font-bold text-[#121212] leading-[1.3]">
                          {podcast.title}
                        </h4>
                        <p className="text-[14px] font-light text-[#182f43] leading-[1.39]">
                          {podcast.subtitle}
                        </p>
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

