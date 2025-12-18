'use client';

import { ExternalLink, Image as ImageIcon } from 'lucide-react';

const approvals = [
  { id: 1, title: 'קריאת היסוד מגדולי ישראל', link: '#' },
  { id: 2, title: 'קריאת היסוד מגדולי ישראל', link: '#' },
  { id: 3, title: 'קריאת היסוד מגדולי ישראל', link: '#' },
  { id: 4, title: 'קריאת היסוד מגדולי ישראל', link: '#' },
  { id: 5, title: 'קריאת היסוד מגדולי ישראל', link: '#' },
  { id: 6, title: 'קריאת היסוד מגדולי ישראל', link: '#' },
  { id: 7, title: 'קריאת היסוד מגדולי ישראל', link: '#' },
  { id: 8, title: 'קריאת היסוד מגדולי ישראל', link: '#' },
  { id: 9, title: 'קריאת היסוד מגדולי ישראל', link: '#' },
];

export default function ApprovalsGrid() {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {approvals.map((approval) => (
              <div key={approval.id} className="group">
                {/* Image Placeholder */}
                <div className="aspect-[4/3] bg-[#f3f4f6] rounded-xl flex items-center justify-center mb-4 overflow-hidden">
                  <div className="flex items-center justify-center w-full h-full">
                    <ImageIcon className="w-16 h-16 text-[#d1d5db]" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[var(--dark-main)] mb-2">
                    {approval.title}
                  </h3>
                  <a 
                    href={approval.link}
                    className="inline-flex items-center gap-2 text-[var(--gray-text)] hover:text-[#2dd4bf] transition-colors"
                  >
                    <span className="text-sm">לצפייה במכתב</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

