import React from 'react';
import { getExperiences, getEducation } from '../data/experience';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, CheckCircle2, Calendar, MapPin, Globe } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const { language, t } = useLanguage();
  const experiences = getExperiences(language);
  const education = getEducation(language);

  return (
    <section
      id="experience"
      className="relative w-full bg-[#e3d9d1] py-20 md:py-28 px-4 sm:px-6 md:px-12 border-t border-[#363636]/10 z-20"
    >
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#363636]/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[#248a61] text-xs font-poppins font-bold tracking-[0.25em] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#248a61]" />
              <span>{t.experience.eyebrow}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-barlow font-black text-[#363636] uppercase tracking-tight leading-none">
              {t.experience.titlePart1} <span className="text-[#248a61]">{t.experience.titlePart2}</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-poppins text-[#363636]/75 max-w-md leading-relaxed">
            {t.experience.description}
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group relative bg-[#ede6df] border border-[#363636]/10 hover:border-[#248a61]/50 rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-300 shadow-xs"
            >
              {/* Number watermark in top corner */}
              <div className="absolute top-6 right-8 rtl:right-auto rtl:left-8 font-barlow font-black text-4xl sm:text-5xl text-[#363636]/10 group-hover:text-[#248a61]/20 transition-colors select-none pointer-events-none">
                {exp.number}
              </div>

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="px-3 py-1 rounded-full bg-[#248a61] text-white text-xs font-poppins font-semibold uppercase tracking-wider">
                      {exp.type}
                    </span>

                    {/* International Client / Project Badge */}
                    {exp.intlBadge && (
                      <span className="px-3 py-1 rounded-full bg-[#363636] text-[#ede6df] text-xs font-poppins font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-2xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#248a61] animate-pulse" />
                        <span>{exp.intlBadge}</span>
                      </span>
                    )}

                    {exp.id === 'magnavolt' && !exp.intlBadge && (
                      <span className="px-3 py-1 rounded-full bg-[#363636] text-[#ede6df] text-xs font-poppins font-semibold uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#248a61] animate-pulse" />
                        {t.experience.activeContract}
                      </span>
                    )}
                    {exp.id === 'freelancing' && (
                      <span className="px-3 py-1 rounded-full bg-[#363636] text-[#ede6df] text-xs font-poppins font-semibold uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#248a61] animate-pulse" />
                        {t.experience.independentEngagements}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-barlow font-black text-[#363636] uppercase tracking-tight">
                    {exp.role}{' '}
                    <span className="text-[#248a61]">
                      {exp.id === 'freelancing' ? `/ ${exp.company}` : `@ ${exp.company}`}
                    </span>
                  </h3>
                </div>

                <div className="flex items-center gap-4 text-xs font-poppins text-[#363636]/70 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5 font-semibold text-[#363636]">
                    <Calendar className="w-4 h-4 text-[#248a61]" />
                    {exp.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#248a61]" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-sm md:text-base font-poppins text-[#363636]/80 leading-relaxed mb-6">
                {exp.overview}
              </p>

              {/* Responsibilities */}
              <div className="space-y-3 mb-6">
                <span className="text-[10px] font-poppins uppercase tracking-[0.25em] font-bold text-[#248a61] block">
                  {t.experience.coreResponsibilities}
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs font-poppins text-[#363636]/80">
                      <CheckCircle2 className="w-4 h-4 text-[#248a61] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#363636]/10">
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md bg-[#363636]/5 text-[#363636] text-[11px] font-poppins font-medium uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Formal Education Card */}
        <div className="bg-[#ede6df] border border-[#363636]/10 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#248a61]/10 text-[#248a61] flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-poppins uppercase tracking-[0.2em] text-[#248a61] font-bold block">
                  {t.experience.educationTitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-barlow font-black text-[#363636] uppercase tracking-tight">
                  {education.degree} — {education.field}
                </h3>
                <p className="text-xs sm:text-sm font-poppins text-[#363636]/75">
                  {education.institution} • {education.period}
                </p>
              </div>
            </div>

            <div className="max-w-md">
              <p className="text-xs sm:text-sm font-poppins text-[#363636]/80 leading-relaxed bg-white/50 p-4 rounded-2xl border border-[#363636]/10">
                {education.curriculum}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
