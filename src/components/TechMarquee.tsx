import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TECH_MARQUEE_ITEMS_EN, TECH_MARQUEE_ITEMS_AR } from '../data/skills';

export const TechMarquee: React.FC = () => {
  const { language } = useLanguage();
  const items = language === 'ar' ? TECH_MARQUEE_ITEMS_AR : TECH_MARQUEE_ITEMS_EN;

  // Exactly duplicate items so translateX produces a seamless, true infinite loop
  const marqueeItems = [...items, ...items];

  return (
    <div
      id="tech-ticker"
      className="relative w-full bg-[#ede6df] py-5 sm:py-8 border-y border-[#363636]/10 overflow-hidden select-none z-20"
      aria-label={language === 'ar' ? "شريط التقنيات والقدرات الهندسية" : "Core Engineering Technologies Rail"}
    >
      {/* Side gradient edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-24 bg-gradient-to-r from-[#ede6df] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-24 bg-gradient-to-l from-[#ede6df] to-transparent z-10 pointer-events-none" />

      {/* Infinite moving rail */}
      <div className="flex w-max items-center animate-marquee hover:[animation-play-state:paused]">
        {marqueeItems.map((item, idx) => (
          <div key={idx} className="flex items-center mx-3.5 sm:mx-6 gap-3.5 sm:gap-6 shrink-0">
            <span className="font-barlow font-black text-xl sm:text-2xl md:text-3xl tracking-wider text-[#363636]/75 uppercase hover:text-[#248a61] transition-colors cursor-default whitespace-nowrap">
              {item}
            </span>
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#248a61]/60 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};

