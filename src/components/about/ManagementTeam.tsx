'use client';

const teamMembers = [
  { name: 'משה כהן', role: 'מנכ"ל' },
  { name: 'יעקב לוי', role: 'סמנכ"ל כספים' },
  { name: 'דוד ישראלי', role: 'מנהל השקעות' },
  { name: 'אברהם גולד', role: 'יועץ משפטי' },
  { name: 'שמעון ברק', role: 'מנהל תפעול' },
  { name: 'יצחק פרידמן', role: 'מנהל שיווק' },
  { name: 'חיים רוזנברג', role: 'מנהל פיתוח עסקי' },
  { name: 'נתן שטיינברג', role: 'מנהל קשרי לקוחות' },
];

export default function ManagementTeam() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--dark-main)] text-center mb-12">
          צוות הניהול המקצועי
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-[#f8f8f8] rounded-xl p-6 text-center hover:shadow-md transition-shadow"
            >
              {/* Avatar Placeholder */}
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#e5e7eb] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-[#9ca3af]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="font-bold text-[var(--dark-main)] text-sm md:text-base mb-1">
                {member.name}
              </h3>
              <p className="text-[var(--gray-text)] text-xs md:text-sm">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

