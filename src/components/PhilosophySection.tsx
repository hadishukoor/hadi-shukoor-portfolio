import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const PhilosophySection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section
      id="philosophy"
      className="relative w-full bg-[#e3d9d1] py-24 md:py-32 px-4 sm:px-6 md:px-12 border-t border-[#363636]/10 z-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Big Editorial Statement */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
          <div className="flex items-center gap-2 text-[#248a61] text-xs font-poppins font-bold tracking-[0.25em] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#248a61]" />
            <span>{t.philosophy.eyebrow}</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-barlow font-black text-[#363636] uppercase leading-[0.92] tracking-tight">
            {t.philosophy.titleLine1} <br />
            <span className="text-[#248a61]">{t.philosophy.titleLine2}</span> <br />
            {t.philosophy.titleLine3}
          </h2>

          <div className="h-1 w-20 bg-[#248a61]" />

          <p className="text-[#363636]/80 text-base md:text-lg font-poppins font-light leading-relaxed">
            {t.philosophy.description}
          </p>

          <div className="pt-4 border-t border-[#363636]/10 flex items-center gap-4 text-xs font-poppins text-[#363636]/70 uppercase tracking-wider">
            <span className="font-semibold text-[#248a61]">{t.philosophy.coreFocusLabel}</span>
            <span>{t.philosophy.coreFocusValue}</span>
          </div>
        </div>

        {/* Right Column: 6 Engineering Principles */}
        <div className="lg:col-span-7 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.philosophy.principles.map((principle, idx) => (
              <div
                key={idx}
                className="group relative bg-[#ede6df] border border-[#363636]/10 hover:border-[#248a61]/50 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-xs"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-barlow font-bold text-[#248a61] tracking-widest uppercase">
                    {language === 'ar' ? `المبدأ 0${idx + 1}` : `Rule 0${idx + 1}`}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#248a61]/40 group-hover:bg-[#248a61] transition-colors" />
                </div>

                <h3 className="text-lg font-barlow font-bold text-[#363636] uppercase tracking-wide mb-2 group-hover:text-[#248a61] transition-colors">
                  {principle.title}
                </h3>

                <p className="text-xs md:text-sm font-poppins text-[#363636]/75 leading-relaxed">
                  {principle.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
