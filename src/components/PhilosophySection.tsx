import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { RegistrationCorner, SectionContourLines } from './graphics/ArchitecturalDecor';

export const PhilosophySection: React.FC = () => {
  const { language, t } = useLanguage();

  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const count = t.philosophy.principles.length;
  const moveTo = (index: number) => {
    const container = track.current;
    if (!container) return;
    const next = Math.max(0, Math.min(count - 1, index));
    const card = container.children[next] as HTMLElement;
    const delta = card.getBoundingClientRect().left - container.getBoundingClientRect().left;
    container.scrollBy({ left: delta, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };
  useEffect(() => { track.current?.scrollTo({ left: 0, behavior: 'instant' }); setActive(0); }, [language]);
  const updateActive = () => {
    const container = track.current;
    if (!container) return;
    const center = container.getBoundingClientRect().left + container.clientWidth / 2;
    const distances = (Array.from(container.children) as Element[]).map(card => Math.abs(card.getBoundingClientRect().left + card.clientWidth / 2 - center));
    setActive(distances.indexOf(Math.min(...distances)));
  };

  return (
    <section
      id="philosophy"
      className="relative w-full bg-[#e3d9d1] py-24 md:py-32 px-4 sm:px-6 md:px-12 border-t border-[#363636]/10 z-20"
    >
      {/* Precision corner registration brackets */}
      <div className="absolute top-6 left-4 sm:left-6 z-10 pointer-events-none">
        <RegistrationCorner position="top-left" size={18} className="opacity-50" />
      </div>
      <div className="absolute bottom-6 right-4 sm:right-6 z-10 pointer-events-none">
        <RegistrationCorner position="bottom-right" size={18} className="opacity-50" />
      </div>
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
        <div className="lg:col-span-7 min-w-0 space-y-6">
          <div ref={track} id="manifesto-rules" tabIndex={0} role="region" aria-label={language === 'ar' ? 'المبادئ الهندسية — اسحب لاستعراضها' : 'Engineering principles — swipe to explore'}
            onScroll={updateActive}
            onKeyDown={event => {
              if (window.matchMedia('(min-width: 768px)').matches) return;
              if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
                event.preventDefault();
                moveTo(active + ((event.key === 'ArrowRight') !== (language === 'ar') ? 1 : -1));
              }
            }}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-2 md:pb-0 md:grid md:grid-cols-2 md:overflow-visible focus-visible:outline-2 focus-visible:outline-[#248a61] rounded-2xl">

            {t.philosophy.principles.map((principle, idx) => (
              <div
                key={idx}
                className="min-w-0 w-full shrink-0 snap-start md:w-auto group relative bg-[#ede6df] border border-[#363636]/10 hover:border-[#248a61]/50 p-6 rounded-2xl transition-all duration-300 md:hover:-translate-y-1 motion-reduce:transform-none shadow-xs"
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
          <div className="md:hidden flex flex-wrap items-center justify-between gap-3 text-sm font-poppins">
            <button type="button" aria-controls="manifesto-rules" disabled={active === 0} onClick={() => moveTo(active - 1)} className="min-h-11 px-4 rounded-full border border-[#248a61] text-[#1b6a4a] disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#248a61]">{language === 'ar' ? 'السابق' : 'Previous'}</button>
            <span aria-live="polite" aria-atomic="true">{language === 'ar' ? `${active + 1} من ${count}` : `${active + 1} of ${count}`}</span>
            <button type="button" aria-controls="manifesto-rules" disabled={active === count - 1} onClick={() => moveTo(active + 1)} className="min-h-11 px-4 rounded-full bg-[#248a61] text-white disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#248a61]">{language === 'ar' ? 'التالي' : 'Next'}</button>
          </div>
        </div>
      </div>

      {/* Subtle section contour transition */}
      <SectionContourLines className="mt-14 opacity-30" />
    </section>
  );
};
