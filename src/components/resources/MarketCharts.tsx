'use client';

import { TrendingUp } from 'lucide-react';

const charts = [
  { id: 1, title: 'שער השקל', period: 'חודש אחרון', value: '0.31', change: '+2.1%' },
  { id: 2, title: 'שער הדולר', period: 'חודש אחרון', value: '3.78', change: '-0.5%' },
  { id: 3, title: 'מדד S&P 500', period: 'חודש אחרון', value: '5,700', change: '+4.2%' },
];

export default function MarketCharts() {
  return (
    <section className="bg-white py-8 -mt-16 md:-mt-24 relative z-20">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {charts.map((chart) => (
              <div key={chart.id} className="bg-[#f8f8f8] rounded-xl p-6">
                {/* Chart Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-[var(--gray-text)]">{chart.period}</span>
                  <span className="text-sm font-medium text-[var(--dark-main)]">{chart.title}</span>
                </div>
                
                {/* Chart Placeholder */}
                <div className="h-32 bg-gradient-to-b from-[#e5e7eb] to-transparent rounded-lg mb-4 flex items-end justify-center">
                  <svg className="w-full h-24" viewBox="0 0 200 80" preserveAspectRatio="none">
                    <path
                      d="M 0 60 Q 50 40 100 50 T 200 30"
                      stroke="#2dd4bf"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M 0 60 Q 50 40 100 50 T 200 30 L 200 80 L 0 80 Z"
                      fill="url(#gradient)"
                      opacity="0.2"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2dd4bf" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                {/* Value and Change */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-green-500">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">{chart.change}</span>
                  </div>
                  <span className="text-2xl font-bold text-[var(--dark-main)]">{chart.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

