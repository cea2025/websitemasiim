'use client';

import { useState } from 'react';
import { Phone, MapPin, ChevronLeft } from 'lucide-react';

const tabs = [
  { id: 'join', label: 'הצטרפות' },
  { id: 'service', label: 'קבלת שירות' },
  { id: 'general', label: 'פניה כללית' },
];

export default function ContactForm() {
  const [activeTab, setActiveTab] = useState('join');

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse gap-8">
            {/* Form Section */}
            <div className="flex-1 bg-[#f8f8f8] rounded-2xl p-6 md:p-8">
              {/* Tabs */}
              <div className="flex rounded-lg overflow-hidden border border-[#e5e7eb] mb-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-3 text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'bg-[var(--dark-main)] text-white'
                        : 'bg-white text-[var(--gray-text)] hover:bg-[#f3f4f6]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Form Fields */}
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="שם פרטי"
                    className="w-full py-3 px-4 rounded-lg border border-[#e5e7eb] bg-white text-[var(--dark-main)] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2dd4bf] text-right"
                  />
                  <input
                    type="text"
                    placeholder="שם משפחה"
                    className="w-full py-3 px-4 rounded-lg border border-[#e5e7eb] bg-white text-[var(--dark-main)] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2dd4bf] text-right"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="מספר נייד"
                    className="w-full py-3 px-4 rounded-lg border border-[#e5e7eb] bg-white text-[var(--dark-main)] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2dd4bf] text-right"
                  />
                  <input
                    type="email"
                    placeholder="דואר אלקטרוני"
                    className="w-full py-3 px-4 rounded-lg border border-[#e5e7eb] bg-white text-[var(--dark-main)] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2dd4bf] text-right"
                  />
                </div>

                <textarea
                  placeholder="תרצו להוסיף משהו?"
                  rows={5}
                  className="w-full py-3 px-4 rounded-lg border border-[#e5e7eb] bg-white text-[var(--dark-main)] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2dd4bf] text-right resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-[#2dd4bf] hover:bg-[#14b8a6] text-[var(--dark-main)] font-semibold py-4 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  שליחה
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Info Section */}
            <div className="lg:w-96">
              {/* Phone Numbers */}
              <div className="mb-8">
                <h3 className="text-base font-semibold text-[var(--dark-main)] mb-4 text-right">
                  משרדים ושירות לקוחות
                </h3>
                <div className="space-y-2 text-right">
                  <p className="text-[var(--gray-text)] text-sm flex items-center justify-end gap-2">
                    *8944
                    <Phone className="w-4 h-4" />
                  </p>
                  <p className="text-[var(--gray-text)] text-sm flex items-center justify-end gap-2">
                    04-5894040
                    <Phone className="w-4 h-4" />
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#e5e7eb] my-6" />

              {/* Address */}
              <div className="mb-8">
                <h3 className="text-base font-semibold text-[var(--dark-main)] mb-4 text-right">
                  כתובת
                </h3>
                <p className="text-[var(--gray-text)] text-sm text-right flex items-center justify-end gap-2">
                  רחוב אחד העם 31, ירושלים, מיקוד 8954804
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="relative bg-[#e5e7eb] rounded-xl h-48 md:h-64 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-lg shadow-lg p-4 text-center">
                    <p className="text-sm font-medium text-[var(--dark-main)] mb-2">
                      המשרדים שלנו
                    </p>
                    <div className="w-8 h-8 bg-[#2dd4bf] rounded-full flex items-center justify-center mx-auto">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                {/* Map Background Pattern */}
                <div className="absolute inset-0 opacity-30">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#9ca3af" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100" height="100" fill="url(#grid)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

