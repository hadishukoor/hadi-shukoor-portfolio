import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, CheckCheck, Eye, RefreshCw, ShieldAlert, Cpu, Quote } from 'lucide-react';

export const AIEngineeringSection: React.FC = () => {
  const { t } = useLanguage();

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Sparkles className="w-4 h-4 text-[#248a61]" />;
      case 1:
        return <Eye className="w-4 h-4 text-[#248a61]" />;
      case 2:
        return <Cpu className="w-4 h-4 text-[#248a61]" />;
      case 3:
        return <ShieldAlert className="w-4 h-4 text-[#248a61]" />;
      case 4:
        return <RefreshCw className="w-4 h-4 text-[#248a61]" />;
      default:
        return <CheckCheck className="w-4 h-4 text-[#248a61]" />;
    }
  };

  return (
    <section
      id="ai-engineering"
      className="relative w-full bg-[#ede6df] py-24 md:py-32 px-4 sm:px-6 md:px-12 border-t border-[#363636]/10 z-20"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#363636]/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[#248a61] text-xs font-poppins font-bold tracking-[0.25em] uppercase">
              <Sparkles className="w-4 h-4 text-[#248a61]" />
              <span>{t.ai.eyebrow}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-barlow font-black text-[#363636] uppercase tracking-tight leading-none">
              {t.ai.titlePart1} <span className="text-[#248a61]">{t.ai.titlePart2}</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-poppins text-[#363636]/75 max-w-md leading-relaxed">
            {t.ai.description}
          </p>
        </div>

        {/* Highlight Banner / Stance Quote */}
        <div className="bg-[#242424] text-[#e3d9d1] rounded-3xl p-8 sm:p-12 shadow-xl border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-poppins uppercase tracking-[0.25em] text-[#248a61] font-bold">
              <Quote className="w-4 h-4" />
              <span>{t.ai.stanceTitle}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-barlow font-black uppercase text-white tracking-tight leading-tight">
              {t.ai.quoteLine1} <br className="hidden sm:inline" />
              <span className="text-[#248a61]">{t.ai.quoteLine2}</span>
            </h3>
            <p className="text-xs sm:text-sm font-poppins text-[#e3d9d1]/80 leading-relaxed">
              {t.ai.quoteText}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/15 text-xs font-poppins font-semibold uppercase tracking-wider text-white">
            <span className="w-2 h-2 rounded-full bg-[#248a61] animate-pulse" />
            <span>Disciplined AI Integration</span>
          </div>
        </div>

        {/* Step-by-Step Disciplined Workflow Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.ai.steps.map((st, idx) => (
            <div
              key={idx}
              className="bg-[#e3d9d1] border border-[#363636]/10 hover:border-[#248a61]/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-xs space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-barlow font-black text-[#248a61] tracking-wider uppercase">
                  {st.step}
                </span>
                <div className="w-8 h-8 rounded-lg bg-white/70 flex items-center justify-center">
                  {getStepIcon(idx)}
                </div>
              </div>

              <h4 className="text-lg font-barlow font-bold text-[#363636] uppercase tracking-wide">
                {st.name}
              </h4>

              <p className="text-xs sm:text-sm font-poppins text-[#363636]/80 leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
