import React, { useState } from 'react';
import { getWorkflowStages } from '../data/workflow';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2, ArrowRight, Layers, Terminal } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  const { language, t } = useLanguage();
  const stages = getWorkflowStages(language);
  const [activeStep, setActiveStep] = useState(0);

  // Guard active step within range
  const safeStep = activeStep >= stages.length ? 0 : activeStep;
  const currentStage = stages[safeStep];

  return (
    <section
      id="workflow"
      className="relative w-full bg-[#ede6df] py-24 md:py-32 px-4 sm:px-6 md:px-12 border-t border-[#363636]/10 z-20"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[#248a61] text-xs font-poppins font-bold tracking-[0.25em] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#248a61]" />
              <span>{t.workflow.eyebrow}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-barlow font-black text-[#363636] uppercase tracking-tight leading-none">
              {t.workflow.titlePart1} <span className="text-[#248a61]">{t.workflow.titlePart2}</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-poppins text-[#363636]/75 max-w-md leading-relaxed">
            {t.workflow.description}
          </p>
        </div>

        {/* Step Progression Bar (Horizontal scrollable on mobile) */}
        <div className="w-full overflow-x-auto pb-4 scrollbar-none">
          <div className="flex items-center justify-between min-w-[720px] gap-2 border-b border-[#363636]/15 pb-6">
            {stages.map((stage, idx) => {
              const isActive = idx === safeStep;
              const isPast = idx < safeStep;

              return (
                <button
                  key={stage.step}
                  id={`workflow-step-${stage.step}`}
                  onClick={() => setActiveStep(idx)}
                  className={`group flex-1 flex flex-col items-center text-center cursor-pointer transition-all duration-300 relative ${
                    isActive ? 'scale-105' : 'opacity-65 hover:opacity-100'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-barlow font-bold text-sm mb-2 transition-all ${
                      isActive
                        ? 'bg-[#248a61] text-white shadow-[0_4px_14px_rgba(36,138,97,0.4)]'
                        : isPast
                        ? 'bg-[#363636] text-[#ede6df]'
                        : 'bg-[#363636]/10 text-[#363636]'
                    }`}
                  >
                    {stage.step}
                  </div>
                  <span
                    className={`text-xs font-barlow font-bold uppercase tracking-wider transition-colors ${
                      isActive ? 'text-[#248a61]' : 'text-[#363636]'
                    }`}
                  >
                    {stage.name}
                  </span>
                  {isActive && (
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#248a61] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Breakdown */}
        <div className="bg-[#e3d9d1] border border-[#363636]/10 rounded-3xl p-6 sm:p-10 md:p-14 shadow-sm transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#248a61] text-white text-xs font-poppins font-bold uppercase tracking-wider">
                  {language === 'ar' ? `المرحلة ${currentStage.step}` : `Stage ${currentStage.step} of 07`}
                </span>
                <span className="text-xs font-poppins uppercase tracking-widest text-[#363636]/60 font-semibold">
                  {currentStage.subtitle}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-barlow font-black text-[#363636] uppercase tracking-tight">
                {currentStage.name}
              </h3>

              <p className="text-sm sm:text-base md:text-lg font-poppins text-[#363636]/80 leading-relaxed font-light">
                {currentStage.description}
              </p>

              {/* Deliverables Checklist */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-poppins uppercase tracking-[0.2em] font-bold text-[#248a61] block">
                  {t.workflow.deliverablesLabel}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {currentStage.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs font-poppins text-[#363636] p-2.5 rounded-xl bg-white/60 border border-[#363636]/10"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#248a61] shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stage Visual Metaphor / Info Panel */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center p-8 rounded-2xl bg-[#ede6df] border border-[#363636]/10 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[#248a61]/10 text-[#248a61] flex items-center justify-center">
                <Layers className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-poppins font-bold uppercase tracking-widest text-[#248a61]">
                  {language === 'ar' ? 'فلسفة الإنجاز' : 'Engineering Principle'}
                </span>
                <p className="text-xs font-poppins text-[#363636]/80 max-w-xs">
                  {language === 'ar'
                    ? 'كل مرحلة تنتج عقداً ملموساً يضمن وضوح المرحلة التي تليها دون تخمين أو عشوائية.'
                    : 'Every stage produces concrete artifacts, eliminating guesswork before progressing to the next operational phase.'}
                </p>
              </div>

              {/* Navigation controls */}
              <div className="flex items-center gap-3 pt-4">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : stages.length - 1))}
                  className="px-4 py-2 rounded-full border border-[#363636]/20 hover:border-[#248a61] text-xs font-poppins uppercase tracking-wider text-[#363636] hover:text-[#248a61] transition-colors cursor-pointer"
                >
                  {language === 'ar' ? 'السابق' : 'Previous'}
                </button>
                <button
                  onClick={() => setActiveStep((prev) => (prev < stages.length - 1 ? prev + 1 : 0))}
                  className="px-4 py-2 rounded-full bg-[#248a61] hover:bg-[#1f7552] text-white text-xs font-poppins uppercase tracking-wider transition-colors cursor-pointer"
                >
                  {language === 'ar' ? 'التالي' : 'Next Stage'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
