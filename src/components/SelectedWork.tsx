import React, { useState, useEffect, useRef } from 'react';
import { getProjects, ProjectItem } from '../data/work';
import { useLanguage } from '../context/LanguageContext';
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  X,
  Database,
  Globe,
  FileCheck,
  Cpu,
  Clock
} from 'lucide-react';

export const SelectedWork: React.FC = () => {
  const { language, t } = useLanguage();
  const projects = getProjects(language);

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeModalTab, setActiveModalTab] = useState<
    'overview' | 'pipeline' | 'modules' | 'portals' | 'tech' | 'caseStudy'
  >('overview');

  const modalOverlayRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when modal is open and reset scroll position
  useEffect(() => {
    if (selectedProject) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      if (modalOverlayRef.current) {
        modalOverlayRef.current.scrollTop = 0;
      }

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [selectedProject]);

  // Handle ESC key to dismiss modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section
      id="work"
      className="relative w-full bg-[#e3d9d1] py-20 md:py-28 px-4 sm:px-6 md:px-12 border-t border-[#363636]/10 z-20"
    >
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#363636]/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[#248a61] text-xs font-poppins font-bold tracking-[0.25em] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#248a61]" />
              <span>{t.work.eyebrow}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-barlow font-black text-[#363636] uppercase tracking-tight leading-none">
              {t.work.titlePart1} <span className="text-[#248a61]">{t.work.titlePart2}</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-poppins text-[#363636]/75 max-w-md leading-relaxed">
            {t.work.description}
          </p>
        </div>

        {/* 01 — Featured Flagship Project: MAGNAVOLT */}
        {projects.slice(0, 1).map((project) => (
          <div
            key={project.id}
            className="group relative bg-[#ede6df] border-2 border-[#248a61]/30 hover:border-[#248a61] rounded-3xl p-6 sm:p-8 md:p-12 transition-all duration-300 shadow-sm"
          >
            {/* Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-xs font-barlow font-black text-white bg-[#248a61] px-3 py-1 rounded-full uppercase tracking-widest">
                  {t.work.flagshipBadge}
                </span>

                {/* Country / International Metadata Badge */}
                {project.countryBadge && (
                  <span className="text-[10px] sm:text-[11px] font-poppins font-semibold px-2.5 py-1 rounded-full bg-[#363636] text-[#ede6df] uppercase tracking-wider flex items-center gap-1.5 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#248a61] animate-pulse" />
                    <span>{project.countryBadge}</span>
                  </span>
                )}

                <span className="text-xs font-poppins font-semibold text-[#248a61] tracking-wider uppercase">
                  {project.status}
                </span>
                <span className="hidden sm:inline-flex text-[10px] font-poppins px-2.5 py-0.5 rounded-full bg-[#363636]/10 text-[#363636] font-medium">
                  {t.work.dualPortalsBadge}
                </span>
              </div>
              <span className="text-3xl font-barlow font-black text-[#363636]/20 group-hover:text-[#248a61]/40 transition-colors">
                {project.number}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <span className="text-xs font-poppins uppercase tracking-[0.2em] text-[#363636]/60 font-medium block mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-2xl sm:text-4xl md:text-5xl font-barlow font-black text-[#363636] uppercase tracking-tight">
                    {project.title} <span className="text-[#248a61]">— {project.headline}</span>
                  </h3>
                </div>

                <p className="text-xs sm:text-sm md:text-base font-poppins text-[#363636]/80 leading-relaxed">
                  {project.summary}
                </p>

                {/* 8-Stage Workflow Pill Bar */}
                {project.workflowStages && (
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-poppins uppercase tracking-[0.25em] font-bold text-[#248a61] block">
                        {t.work.pipelineLabel}
                      </span>
                      {project.quickFixWorkflow && (
                        <span className="text-[10px] font-poppins px-2 py-0.5 rounded bg-[#248a61]/10 text-[#248a61] font-semibold">
                          {t.work.quickFixLabel}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.workflowStages.map((stageName, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 rounded-md bg-white/70 border border-[#363636]/10 text-[10px] sm:text-xs font-poppins text-[#363636] font-medium flex items-center gap-1"
                        >
                          <span className="text-[#248a61] font-bold">{idx + 1}.</span>
                          <span>{stageName}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Technical Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {project.engineeringHighlights.slice(0, 4).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-poppins text-[#363636]/80">
                      <CheckCircle2 className="w-4 h-4 text-[#248a61] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-[#363636]/5 text-[#363636] text-[10px] sm:text-xs font-poppins font-medium uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Deep-Dive Case Study Button */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    id="magnavolt-case-study-btn"
                    onClick={() => {
                      setSelectedProject(project);
                      setActiveModalTab('overview');
                    }}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#248a61] hover:bg-[#1f7552] text-white text-xs font-poppins font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-105 cursor-pointer"
                  >
                    <span>{t.work.viewCaseStudy}</span>
                    <ArrowUpRight className="w-4 h-4 rtl:rotate-[-90deg]" />
                  </button>
                  <span className="text-[11px] font-poppins text-[#363636]/60 italic">
                    {project.statusNote}
                  </span>
                </div>
              </div>

              {/* Right Column: Architectural Schematic Card */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-2xl overflow-hidden border border-[#363636]/15 bg-[#e3d9d1] p-6 sm:p-8 flex flex-col justify-between shadow-inner">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#248a61] font-bold">
                      {t.work.architectureHeader}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#248a61] animate-pulse" />
                  </div>

                  <div className="space-y-3 my-2">
                    <div className="font-barlow font-black text-2xl sm:text-3xl text-[#363636] uppercase tracking-tight leading-tight">
                      {project.title}
                    </div>
                    <p className="text-xs font-poppins text-[#363636]/75">
                      {project.role}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#363636]/10 flex items-center justify-between text-[11px] font-mono text-[#363636]/70">
                    <span>{project.location}</span>
                    <span className="font-semibold text-[#248a61]">13 MODULES</span>
                  </div>
                </div>

                {/* Mini System Specs Preview */}
                <div className="bg-white/60 border border-[#363636]/10 rounded-2xl p-4 space-y-2.5 text-xs font-poppins">
                  <div className="flex items-center justify-between text-[#363636]/70">
                    <span className="font-semibold uppercase text-[10px] tracking-wider text-[#248a61]">
                      {language === 'ar' ? 'معمارية الواجهات' : 'Frontend Architecture'}
                    </span>
                    <span>React, Tailwind, Responsive</span>
                  </div>
                  <div className="h-px bg-[#363636]/10" />
                  <div className="flex items-center justify-between text-[#363636]/70">
                    <span className="font-semibold uppercase text-[10px] tracking-wider text-[#248a61]">
                      {language === 'ar' ? 'الواجهات الخلفية و APIs' : 'Backend & APIs'}
                    </span>
                    <span>ASP.NET Core REST API</span>
                  </div>
                  <div className="h-px bg-[#363636]/10" />
                  <div className="flex items-center justify-between text-[#363636]/70">
                    <span className="font-semibold uppercase text-[10px] tracking-wider text-[#248a61]">
                      {language === 'ar' ? 'قواعد البيانات' : 'Database'}
                    </span>
                    <span>MySQL (Normalized Schema)</span>
                  </div>
                  <div className="h-px bg-[#363636]/10" />
                  <div className="flex items-center justify-between text-[#363636]/70">
                    <span className="font-semibold uppercase text-[10px] tracking-wider text-[#248a61]">
                      {language === 'ar' ? 'محرك التقارير والمستندات' : 'Document Engine'}
                    </span>
                    <span>QuestPDF C# Engine</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Secondary Projects Grid: 02 Sands PPF, 03 GeM Procurement Platform, 04 Hera-Lux, 05 Compost */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(1).map((project) => (
            <div
              key={project.id}
              className={`group bg-[#ede6df] border ${
                project.isUpcoming
                  ? 'border-[#248a61]/35 hover:border-[#248a61]'
                  : 'border-[#363636]/10 hover:border-[#248a61]/50'
              } rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 shadow-xs flex flex-col justify-between`}
            >
              <div className="space-y-4">
                {/* Visual Editorial / Project Image Header */}
                {project.coverImage ? (
                  // Real Supplied Project Visual Asset
                  <div className="relative rounded-2xl overflow-hidden border border-[#363636]/15 bg-[#1f1e1d] aspect-[16/9] w-full group/img shadow-xs">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/img:scale-[1.02]"
                    />
                    {/* Floating Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-barlow font-black text-white bg-[#248a61] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                          {project.number}
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-white bg-[#1f1e1d]/85 backdrop-blur-xs border border-white/10 px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1.5 shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#248a61] animate-pulse" />
                          <span>{t.work.upcomingBadge}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ) : project.isUpcoming ? (
                  // Schematic Architectural Visual Panel for Upcoming Engineering Project (Refined Deep Charcoal #363636 Palette)
                  <div className="relative rounded-2xl overflow-hidden p-5 sm:p-6 bg-[#363636] border border-[#248a61]/35 flex flex-col justify-between min-h-[165px] text-[#ede6df] shadow-md group/panel">
                    {/* Subtle film grain texture overlay */}
                    <div
                      className="absolute inset-0 z-0 pointer-events-none opacity-15 mix-blend-overlay"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                      }}
                    />

                    {/* Very subtle technical grid / dot texture with emerald accents */}
                    <div
                      className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                      style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(36, 138, 97, 0.5) 1px, transparent 0)`,
                        backgroundSize: '16px 16px',
                      }}
                    />

                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-barlow font-black text-white bg-[#248a61] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-2xs">
                          {project.number}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#ede6df] font-bold flex items-center gap-1.5 bg-black/25 px-2.5 py-0.5 rounded-full border border-white/10">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#248a61] animate-pulse" />
                          <span>{t.work.upcomingBadge}</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[9px] font-mono uppercase tracking-widest text-[#ede6df]/75 border border-white/10 bg-black/20 px-2 py-0.5 rounded-md">
                          {language === 'ar' ? 'مخطط معماري' : 'PLANNED ARCHITECTURE'}
                        </span>
                      </div>
                    </div>

                    <div className="relative z-10 my-3.5">
                      <div className="font-barlow font-black text-lg sm:text-xl md:text-2xl text-[#ede6df] uppercase tracking-tight leading-tight">
                        {project.title}
                      </div>
                      <p className="text-[11px] sm:text-xs font-poppins text-[#ede6df]/80 mt-1 leading-snug">
                        {project.headline}
                      </p>
                    </div>

                    {/* Schematic Pipeline Flow Graphic */}
                    <div className="relative z-10 pt-2.5 border-t border-[#ede6df]/15 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#ede6df]/85 overflow-x-auto gap-1">
                      <span className="text-[#248a61] font-bold">TENDER RFP</span>
                      <span className="text-[#ede6df]/40">→</span>
                      <span className="text-[#ede6df] font-medium">AI EXTRACT</span>
                      <span className="text-[#ede6df]/40">→</span>
                      <span className="text-[#ede6df] font-medium">RULE AUDIT</span>
                      <span className="text-[#ede6df]/40">→</span>
                      <span className="text-[#248a61] font-bold">REPORT</span>
                    </div>
                  </div>
                ) : (
                  // Standard Visual Header for Other Projects
                  <div className="relative rounded-2xl overflow-hidden p-5 bg-[#e3d9d1] border border-[#363636]/10 flex flex-col justify-between min-h-[140px]">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-barlow font-bold text-white bg-[#363636] px-2 py-0.5 rounded-full uppercase tracking-wider">
                        {project.number}
                      </span>
                      <span className="text-[10px] font-poppins font-semibold text-[#248a61] bg-[#ede6df]/90 px-2 py-0.5 rounded-full uppercase">
                        {project.status}
                      </span>
                    </div>

                    <div className="mt-4">
                      <div className="font-barlow font-black text-xl text-[#363636] uppercase tracking-tight">
                        {project.title}
                      </div>
                      <span className="text-[10px] font-poppins uppercase tracking-wider text-[#363636]/60 font-semibold block mt-0.5">
                        {project.role}
                      </span>
                    </div>
                  </div>
                )}

                {/* Metadata & Badges */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-poppins uppercase tracking-wider text-[#363636]/60 font-semibold">
                      {project.category}
                    </span>

                    {/* Country / Project Badge */}
                    {project.countryBadge && (
                      <span className="text-[9px] sm:text-[10px] font-poppins font-semibold px-2.5 py-0.5 rounded-full bg-[#363636]/10 text-[#363636] uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#248a61]" />
                        <span>{project.countryBadge}</span>
                      </span>
                    )}

                    {/* Bilingual Experience Badge */}
                    {project.bilingualBadge && (
                      <span className="text-[9px] sm:text-[10px] font-poppins font-semibold px-2.5 py-0.5 rounded-full bg-[#248a61]/15 text-[#248a61] uppercase tracking-wider border border-[#248a61]/30 flex items-center gap-1">
                        <Globe className="w-3 h-3" />
                        <span>{project.bilingualBadge}</span>
                      </span>
                    )}
                  </div>

                  {/* Primary Project Title */}
                  <h4 className="text-xl md:text-2xl font-barlow font-black text-[#363636] uppercase tracking-tight group-hover:text-[#248a61] transition-colors leading-tight">
                    {project.title}
                  </h4>

                  {/* Secondary Reference Code & Headline */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-poppins text-[#248a61] font-semibold">
                      {project.headline}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-poppins text-[#363636]/75 leading-relaxed">
                  {project.summary}
                </p>

                {/* Tech Pills (With Proposed Stack label for upcoming projects) */}
                <div className="space-y-1.5 pt-1">
                  {project.isUpcoming && (
                    <span className="text-[9px] font-poppins uppercase tracking-widest font-bold text-[#248a61] block">
                      {t.work.proposedStackLabel}:
                    </span>
                  )}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 5).map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-0.5 rounded-md text-[10px] font-poppins font-medium uppercase ${
                          project.isUpcoming
                            ? 'bg-[#248a61]/10 text-[#248a61] border border-[#248a61]/20'
                            : 'bg-[#363636]/5 text-[#363636]'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 5 && (
                      <span className="px-2 py-0.5 rounded-md bg-[#248a61]/10 text-[#248a61] text-[10px] font-poppins font-semibold">
                        +{project.stack.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-6 mt-6 border-t border-[#363636]/10 flex items-center justify-between">
                <button
                  onClick={() => {
                    setSelectedProject(project);
                    setActiveModalTab('overview');
                  }}
                  className="text-xs font-poppins font-semibold text-[#248a61] hover:text-[#1f7552] uppercase tracking-wider flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>{t.work.viewCaseStudy}</span>
                  <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </button>
                <span className="text-[10px] font-poppins text-[#363636]/60 font-medium">
                  {project.isUpcoming
                    ? (language === 'ar' ? 'قريباً / قيد التطوير' : 'Coming Soon')
                    : project.statusNote.includes('Coming Soon') || project.statusNote.includes('قريباً')
                    ? (language === 'ar' ? 'قريباً' : 'Coming Soon')
                    : (language === 'ar' ? 'تم التسليم' : 'Delivered')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Deep-Dive Modal */}
      {selectedProject && (
        <div
          ref={modalOverlayRef}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedProject(null);
            }
          }}
          className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-md overflow-y-auto pt-20 sm:pt-24 pb-12 px-3 sm:px-6 flex justify-center items-start animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-[#ede6df] border-2 border-[#248a61]/40 rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl transition-all my-2"
          >
            {/* Close Button (accessible, 44px touch target, direction-aware) */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 rtl:right-auto rtl:left-4 rtl:sm:left-6 w-11 h-11 rounded-full bg-[#363636]/10 hover:bg-[#248a61] text-[#363636] hover:text-white flex items-center justify-center transition-colors cursor-pointer z-20 focus:outline-none focus:ring-2 focus:ring-[#248a61]"
              aria-label={language === 'ar' ? 'إغلاق تفاصيل المشروع' : 'Close project details'}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              {/* Header Info */}
              <div className="pr-12 rtl:pr-0 rtl:pl-12">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-barlow font-black text-white bg-[#248a61] px-3 py-1 rounded-full uppercase tracking-wider">
                    {selectedProject.number} • {selectedProject.role}
                  </span>
                  {selectedProject.countryBadge && (
                    <span className="text-[10px] font-poppins font-semibold px-2.5 py-0.5 rounded-full bg-[#363636] text-[#ede6df] uppercase tracking-wider flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#248a61]" />
                      <span>{selectedProject.countryBadge}</span>
                    </span>
                  )}
                  {selectedProject.bilingualBadge && (
                    <span className="text-[10px] font-poppins font-semibold px-2.5 py-0.5 rounded-full bg-[#248a61]/15 text-[#248a61] uppercase tracking-wider border border-[#248a61]/30">
                      {selectedProject.bilingualBadge}
                    </span>
                  )}
                  <span className="text-[11px] font-poppins text-[#363636]/70 uppercase tracking-widest font-medium">
                    {selectedProject.location}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-barlow font-black text-[#363636] uppercase tracking-tight leading-tight">
                  {selectedProject.title} <span className="text-[#248a61]">— {selectedProject.headline}</span>
                </h3>

                {/* Notice banner for upcoming projects */}
                {selectedProject.isUpcoming && (
                  <div className="mt-3 p-3 rounded-xl bg-[#248a61]/10 border border-[#248a61]/30 flex items-start gap-2.5 text-xs font-poppins text-[#363636]">
                    <Clock className="w-4 h-4 text-[#248a61] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#248a61] uppercase tracking-wider block">
                        {language === 'ar'
                          ? 'مشروع هندسي — قيد التطوير النشط'
                          : 'Project — In Active Engineering'}
                      </span>
                      <span className="text-[#363636]/80 text-[11px]">
                        {language === 'ar'
                          ? 'هذا المشروع قيد التطوير الهندسي النشط. تمثل المخططات والمسارات المعروضة التصميم الهندسي المخطط للنظام.'
                          : 'This project is currently in active engineering. The architecture and workflows detailed below represent the planned engineering system design.'}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Tabs */}
              <div className="flex flex-wrap gap-2 border-b border-[#363636]/15 pb-3">
                <button
                  onClick={() => setActiveModalTab('overview')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-poppins font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                    activeModalTab === 'overview'
                      ? 'bg-[#248a61] text-white'
                      : 'bg-white/70 text-[#363636] hover:bg-[#248a61]/10'
                  }`}
                >
                  {t.work.modal.overviewTab}
                </button>

                {selectedProject.workflowStages && (
                  <button
                    onClick={() => setActiveModalTab('pipeline')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-poppins font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                      activeModalTab === 'pipeline'
                        ? 'bg-[#248a61] text-white'
                        : 'bg-white/70 text-[#363636] hover:bg-[#248a61]/10'
                    }`}
                  >
                    {t.work.modal.workflowsTab}
                  </button>
                )}

                {selectedProject.proposedStack && (
                  <button
                    onClick={() => setActiveModalTab('tech')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-poppins font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                      activeModalTab === 'tech'
                        ? 'bg-[#248a61] text-white'
                        : 'bg-white/70 text-[#363636] hover:bg-[#248a61]/10'
                    }`}
                  >
                    {t.work.modal.proposedStackTab}
                  </button>
                )}

                {selectedProject.caseStudySections && (
                  <button
                    onClick={() => setActiveModalTab('caseStudy')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-poppins font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                      activeModalTab === 'caseStudy'
                        ? 'bg-[#248a61] text-white'
                        : 'bg-white/70 text-[#363636] hover:bg-[#248a61]/10'
                    }`}
                  >
                    {t.work.modal.caseStudyTab}
                  </button>
                )}

                {selectedProject.modules && (
                  <button
                    onClick={() => setActiveModalTab('modules')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-poppins font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                      activeModalTab === 'modules'
                        ? 'bg-[#248a61] text-white'
                        : 'bg-white/70 text-[#363636] hover:bg-[#248a61]/10'
                    }`}
                  >
                    {t.work.modal.modulesTab}
                  </button>
                )}

                {(selectedProject.adminCapabilities || selectedProject.technicianCapabilities) && (
                  <button
                    onClick={() => setActiveModalTab('portals')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-poppins font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                      activeModalTab === 'portals'
                        ? 'bg-[#248a61] text-white'
                        : 'bg-white/70 text-[#363636] hover:bg-[#248a61]/10'
                    }`}
                  >
                    {t.work.modal.dualInterfacePortals}
                  </button>
                )}
              </div>

              {/* Tab: Overview */}
              {activeModalTab === 'overview' && (
                <div className="space-y-5">
                  {selectedProject.coverImage && (
                    <div className="relative rounded-2xl overflow-hidden border border-[#363636]/15 bg-[#1f1e1d] aspect-[16/9] w-full shadow-md">
                      <img
                        src={selectedProject.coverImage}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  )}

                  <div className="space-y-3">
                    {selectedProject.detailedDescription.map((p, idx) => (
                      <p key={idx} className="text-sm md:text-base font-poppins text-[#363636]/85 leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>

                  <div className="bg-white/60 border border-[#363636]/10 rounded-2xl p-5 space-y-3">
                    <h5 className="text-xs font-poppins font-bold uppercase tracking-[0.2em] text-[#248a61]">
                      {t.work.modal.keyArchitecturalHighlights}
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedProject.engineeringHighlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs font-poppins text-[#363636]/80">
                          <CheckCircle2 className="w-4 h-4 text-[#248a61] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics preview */}
                  {selectedProject.metrics && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-2">
                      {selectedProject.metrics.map((m, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl bg-white/70 border border-[#363636]/10">
                          <span className="text-[10px] font-poppins uppercase tracking-wider text-[#363636]/60 font-semibold block">
                            {m.label}
                          </span>
                          <span className="font-barlow font-bold text-base text-[#248a61] mt-0.5 block">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Tab: Pipeline / Planned Workflow */}
              {activeModalTab === 'pipeline' && selectedProject.workflowStages && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h5 className="text-xs font-poppins font-bold uppercase tracking-[0.2em] text-[#248a61]">
                      {selectedProject.isUpcoming
                        ? (language === 'ar'
                            ? 'مسار العمل المخطط للتحقق من مطابقة العطاءات (7 مراحل)'
                            : 'Planned 7-Stage Bid Compliance Verification Pipeline')
                        : t.work.modal.operationalPipelineTitle}
                    </h5>
                    {selectedProject.isUpcoming && (
                      <span className="text-[10px] font-mono uppercase text-[#248a61] font-semibold">
                        {language === 'ar' ? 'مخطط سير العمل' : 'PLANNED WORKFLOW'}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.workflowStages.map((st, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-white/70 border border-[#363636]/10 space-y-1">
                        <div className="flex items-center gap-2 text-xs font-barlow font-bold text-[#248a61]">
                          <span className="w-5 h-5 rounded-full bg-[#248a61]/15 flex items-center justify-center text-[10px]">
                            {idx + 1}
                          </span>
                          <span>•</span>
                          <span className="uppercase text-[#363636] font-semibold">{st}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {selectedProject.quickFixWorkflow && (
                    <div className="mt-4 pt-4 border-t border-[#363636]/10 space-y-2">
                      <h6 className="text-xs font-poppins font-bold uppercase tracking-wider text-[#363636]">
                        {t.work.modal.quickFixTitle}
                      </h6>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.quickFixWorkflow.map((qf, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-lg bg-[#248a61]/10 text-[#248a61] text-xs font-poppins font-medium"
                          >
                            {qf}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Tab: Proposed Tech Stack (for GeM Procurement Platform) */}
              {activeModalTab === 'tech' && selectedProject.proposedStack && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-[#248a61]/10 border border-[#248a61]/30">
                    <h5 className="text-xs font-poppins font-bold uppercase tracking-[0.2em] text-[#248a61]">
                      {language === 'ar'
                        ? 'المنظومة التقنية المخططة (قيد التطوير والتنفيذ)'
                        : 'Planned Technology Stack (Proposed Architecture)'}
                    </h5>
                    <p className="text-xs font-poppins text-[#363636]/80 mt-1">
                      {language === 'ar'
                        ? 'تم اختيار هذه التقنيات لتلبية متطلبات المعالجة غير المتزامنة لملفات PDF والتحقق المؤتمت من بنود المناقصات الحكومية.'
                        : 'Selected for high-throughput asynchronous PDF processing, structured schema validation, and deterministic compliance auditing.'}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {selectedProject.proposedStack.map((tier, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-white/70 border border-[#363636]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-poppins"
                      >
                        <span className="font-bold text-[#248a61] uppercase tracking-wider sm:w-1/3">
                          {tier.category}
                        </span>
                        <span className="font-semibold text-[#363636] sm:w-2/3">
                          {tier.tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab: Case Study & Analysis */}
              {activeModalTab === 'caseStudy' && selectedProject.caseStudySections && (
                <div className="space-y-5">
                  {selectedProject.caseStudySections.map((sec, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-white/70 border border-[#363636]/10 space-y-3">
                      <div className="flex items-center justify-between">
                        <h5 className="font-barlow font-bold text-lg text-[#363636] uppercase tracking-tight">
                          {sec.title}
                        </h5>
                        {sec.badge && (
                          <span className="text-[10px] font-poppins font-semibold px-2.5 py-0.5 rounded-full bg-[#248a61]/15 text-[#248a61] uppercase">
                            {sec.badge}
                          </span>
                        )}
                      </div>
                      <div className="space-y-2">
                        {sec.points.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2.5 text-xs md:text-sm font-poppins text-[#363636]/85">
                            <span className="text-[#248a61] font-bold mt-0.5">•</span>
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab: Modules (MAGNAVOLT) */}
              {activeModalTab === 'modules' && selectedProject.modules && (
                <div className="space-y-4">
                  <h5 className="text-xs font-poppins font-bold uppercase tracking-[0.2em] text-[#248a61]">
                    {t.work.modal.modulesBreakdown}
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProject.modules.map((mod, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white/70 border border-[#363636]/10 flex items-center gap-2 text-xs font-poppins">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#248a61] shrink-0" />
                        <span className="font-semibold text-[#363636] uppercase">{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab: Dual Portals (MAGNAVOLT) */}
              {activeModalTab === 'portals' && (
                <div className="space-y-6">
                  {selectedProject.adminCapabilities && (
                    <div className="p-4 rounded-2xl bg-white/70 border border-[#363636]/10 space-y-2">
                      <h6 className="text-xs font-poppins font-bold uppercase tracking-wider text-[#248a61]">
                        {t.work.modal.adminCommandConsole}
                      </h6>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedProject.adminCapabilities.map((cap, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs font-poppins text-[#363636]/80">
                            <span className="text-[#248a61] font-bold">•</span>
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedProject.technicianCapabilities && (
                    <div className="p-4 rounded-2xl bg-white/70 border border-[#363636]/10 space-y-2">
                      <h6 className="text-xs font-poppins font-bold uppercase tracking-wider text-[#248a61]">
                        {t.work.modal.technicianMobilePortal}
                      </h6>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedProject.technicianCapabilities.map((cap, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs font-poppins text-[#363636]/80">
                            <span className="text-[#248a61] font-bold">•</span>
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Footer Stack & Actions */}
              <div className="pt-4 border-t border-[#363636]/15 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-[#363636]/10 text-[#363636] text-[11px] font-poppins font-semibold uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-poppins text-[#363636]/60 italic">
                    {selectedProject.isUpcoming
                      ? (language === 'ar' ? 'قريباً / قيد التطوير' : 'Coming Soon')
                      : selectedProject.statusNote}
                  </span>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2.5 rounded-full bg-[#363636] hover:bg-[#248a61] text-white text-xs font-poppins font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    {t.work.modal.close}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
