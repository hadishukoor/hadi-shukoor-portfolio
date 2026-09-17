import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, Terminal } from 'lucide-react';
import { getEngineeringTerritories } from '../data/focus';
import { useLanguage } from '../context/LanguageContext';

export const EngineeringTerritory: React.FC = () => {
  const { language } = useLanguage();
  const territories = getEngineeringTerritories(language);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? territories.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === territories.length - 1 ? 0 : prev + 1));
  };

  const safeIndex = currentIndex >= territories.length ? 0 : currentIndex;
  const item = territories[safeIndex];

  return (
    <section
      id="territory"
      className="relative w-full min-h-[90vh] bg-[#ede6df] overflow-hidden flex items-center justify-center py-24 md:py-32 z-20 border-t border-[#363636]/10"
    >
      {/* Animated dotted grid matrix */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #248a61 1.5px, transparent 1.5px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Large watermark background text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <h2 className="text-[20vw] md:text-[24vw] font-black text-[#363636] opacity-[0.04] uppercase leading-none font-barlow tracking-wider transition-all duration-700">
          {item.title.split(' ')[0]}
        </h2>
      </div>

      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Column: Territory Details */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#248a61] uppercase tracking-[0.3em] text-xs font-bold font-poppins">
                {item.category}
              </span>
              <span className="text-xs font-barlow font-bold text-[#363636]/40">
                • {item.number} / 06
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#363636] mb-2 leading-tight font-barlow uppercase tracking-tight">
              {item.title}
            </h3>

            <p className="text-base md:text-lg text-[#248a61] font-medium font-poppins mb-5">
              {item.tagline}
            </p>

            <p className="text-[#363636]/80 leading-relaxed text-sm md:text-base border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#248a61] pl-5 rtl:pl-0 rtl:pr-5 font-poppins">
              {item.description}
            </p>
          </div>

          {/* Core Principles for this Domain */}
          <div className="space-y-3 pt-2">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#248a61] font-poppins block">
              {language === 'ar' ? 'المبادئ الهندسية الأساسية:' : 'Core Architectural Rules:'}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {item.principles.map((pr, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-poppins text-[#363636]">
                  <CheckCircle2 className="w-4 h-4 text-[#248a61] shrink-0" />
                  <span>{pr}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Primary Technologies */}
          <div className="pt-2">
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-white/70 border border-[#363636]/10 text-xs font-poppins font-semibold text-[#363636] uppercase tracking-wider"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Terminal Preview & Controls */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-[#242424] rounded-3xl p-6 sm:p-8 text-[#e3d9d1] font-mono text-xs shadow-2xl border border-white/10 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="text-[11px] text-white/50 tracking-wider">
                territory_0{safeIndex + 1}.spec.ts
              </span>
            </div>

            <div className="space-y-2 text-[11px] sm:text-xs leading-relaxed opacity-90">
              <p className="text-[#248a61] font-bold">
                // Domain 0{safeIndex + 1}: {item.category}
              </p>
              <p className="text-white/70">
                export const <span className="text-[#64b5f6]">{item.id.replace(/-/g, '_')}</span> = &#123;
              </p>
              <p className="pl-4 rtl:pl-0 rtl:pr-4 text-[#81c784]">
                status: <span className="text-[#ffb74d]">'PRODUCTION_READY'</span>,
              </p>
              <p className="pl-4 rtl:pl-0 rtl:pr-4 text-[#81c784]">
                focus: <span className="text-[#ffb74d]">"{item.title}"</span>,
              </p>
              <p className="pl-4 rtl:pl-0 rtl:pr-4 text-[#81c784]">
                stack: [{item.technologies.slice(0, 3).map((t) => `"${t}"`).join(', ')}],
              </p>
              <p className="text-white/70">&#125;;</p>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#248a61]" />
                <span>Deterministic Contracts</span>
              </span>
              <span className="text-[#248a61] font-bold">100% TESTED</span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {territories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    idx === safeIndex ? 'w-8 bg-[#248a61]' : 'w-2 bg-[#363636]/20'
                  }`}
                  aria-label={`Go to territory slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-11 h-11 rounded-full border border-[#363636]/20 bg-white/60 hover:bg-[#248a61] text-[#363636] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous territory"
              >
                <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
              </button>
              <button
                onClick={nextSlide}
                className="w-11 h-11 rounded-full bg-[#248a61] hover:bg-[#1f7552] text-white flex items-center justify-center transition-colors cursor-pointer shadow-md"
                aria-label="Next territory"
              >
                <ChevronRight className="w-5 h-5 rtl:rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
