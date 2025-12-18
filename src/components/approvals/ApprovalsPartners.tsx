'use client';

import { Image as ImageIcon } from 'lucide-react';

export default function ApprovalsPartners() {
  return (
    <section className="bg-white py-8 md:py-12 pb-16 md:pb-24">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Partner Logos Row */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {[1, 2, 3, 4, 5, 6, 7].map((index) => (
              <div 
                key={index}
                className="w-24 h-20 md:w-32 md:h-24 bg-[#f3f4f6] rounded-lg flex items-center justify-center"
              >
                <ImageIcon className="w-8 h-8 text-[#d1d5db]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

