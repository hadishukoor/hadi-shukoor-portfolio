import React from 'react';
import { PROFILE } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Briefcase, Code2, Sparkles, GraduationCap, ArrowDownRight, Terminal } from 'lucide-react';

interface PersonalIntroProps {
  onExploreExperience?: () => void;
  onOpenContact?: () => void;
}

export const PersonalIntro: React.FC<PersonalIntroProps> = ({
  onExploreExperience,
  onOpenContact,
}) => {
  const { language, t } = useLanguage();
  // Centralized asset reference for personal portrait photograph
  const profileImage: string | null = PROFILE.profilePhoto;

  const factIcons = [MapPin, Briefcase, Code2, Sparkles, GraduationCap];

  return (
    <section
      id="about"
      className="relative w-full bg-[#ede6df] py-24 md:py-32 px-4 sm:px-6 md:px-12 border-t border-[#363636]/10 z-20"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#363636]/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[#248a61] text-xs font-poppins font-bold tracking-[0.25em] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#248a61]" />
              <span>{t.about.eyebrow}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-barlow font-black text-[#363636] uppercase tracking-tight leading-none">
              {t.about.titlePart1} <span className="text-[#248a61]">{t.about.titlePart2}</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-poppins text-[#363636]/75 max-w-md leading-relaxed">
            {t.about.description}
          </p>
        </div>

        {/* Two-Column Editorial Grid: Photo Frame on Left, Story & Facts on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
          {/* Left Column: Portrait Photo Frame / Editorial Presentation */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden bg-[#141312] border border-[#363636]/20 shadow-[0_16px_48px_rgba(54,54,54,0.12)] group transition-all duration-500 hover:border-[#248a61]/50">
              {profileImage ? (
                <>
                  {/* Primary Portrait Photograph (Finalized Authentic Asset, Unaltered) */}
                  <img
                    src={profileImage}
                    alt={
                      language === 'ar'
                        ? 'محمد هادي شكور — مهندس برمجيات'
                        : 'Mohammad Hadi Shukoor — Full Stack Software Engineer'
                    }
                    className="relative z-10 w-full h-full object-cover object-bottom select-none transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  />

                  {/* Architectural corner framing brackets */}
                  <div className="absolute top-4 left-4 z-20 w-4 h-4 border-t-2 border-l-2 border-[#248a61]/50 pointer-events-none" />
                  <div className="absolute top-4 right-4 z-20 w-4 h-4 border-t-2 border-r-2 border-[#248a61]/50 pointer-events-none" />
                  <div className="absolute bottom-4 left-4 z-20 w-4 h-4 border-b-2 border-l-2 border-[#248a61]/50 pointer-events-none" />
                  <div className="absolute bottom-4 right-4 z-20 w-4 h-4 border-b-2 border-r-2 border-[#248a61]/50 pointer-events-none" />

                  {/* Subtle Minimalist Architectural Header Stamp */}
                  <div className="absolute top-4 left-8 right-8 z-20 flex items-center justify-between pointer-events-none">
                    <div className="px-2.5 py-1 rounded-full bg-[#141312]/85 backdrop-blur-md border border-white/10 text-white flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#248a61] animate-pulse" />
                      <span className="text-[9px] font-mono tracking-widest uppercase font-semibold text-[#ede6df]">
                        {language === 'ar' ? 'مهندس برمجيات' : 'FULL STACK DEV'}
                      </span>
                    </div>
                    <span className="text-[9px] font-mono text-[#ede6df]/70 uppercase tracking-widest px-2 py-1 rounded-full bg-[#141312]/80 backdrop-blur-md border border-white/10 hidden sm:inline-block">
                      {language === 'ar' ? 'هندسة نظم' : 'SYSTEM ARCHITECT'}
                    </span>
                  </div>
                </>
              ) : (
                // Fallback Monogram Branding Placeholder
                <div className="w-full h-full p-8 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-[#e3d9d1] via-[#ebe3db] to-[#d8cec5]">
                  <div className="absolute -bottom-6 -right-6 font-barlow font-black text-9xl text-[#363636]/[0.06] select-none pointer-events-none leading-none">
                    HS
                  </div>

                  <div className="relative z-10 flex items-center justify-between text-[11px] font-poppins text-[#363636]/70 uppercase tracking-widest border-b border-[#363636]/15 pb-3">
                    <span className="font-semibold text-[#248a61]">ENG. PORTFOLIO</span>
                    <span>2024–2026</span>
                  </div>

                  <div className="relative z-10 my-auto flex flex-col items-center text-center py-6">
                    <div className="relative mb-5">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#363636] text-[#e3d9d1] flex items-center justify-center font-barlow font-black text-4xl sm:text-5xl shadow-lg group-hover:bg-[#248a61] transition-colors duration-500">
                        HS
                      </div>
                      <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#248a61] border-2 border-[#e3d9d1] flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      </span>
                    </div>

                    <h4 className="font-barlow font-black text-2xl sm:text-3xl text-[#363636] uppercase tracking-tight leading-tight">
                      {language === 'ar' ? 'محمد هادي شكور' : 'MOHAMMAD HADI SHUKOOR'}
                    </h4>
                    <p className="text-[11px] font-poppins font-semibold uppercase tracking-[0.2em] text-[#248a61] mt-1">
                      {t.hero.role}
                    </p>
                  </div>

                  <div className="relative z-10 border-t border-[#363636]/15 pt-4 flex items-center justify-between text-[11px] font-poppins text-[#363636]/75">
                    <div className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-[#248a61]" />
                      <span className="font-mono text-[10px] uppercase">
                        {language === 'ar' ? 'مهندس برمجيات' : 'FULL STACK DEV'}
                      </span>
                    </div>
                    <span className="font-semibold uppercase text-[10px] tracking-wider text-[#248a61]">
                      {language === 'ar' ? 'كانور، الهند' : 'KANNUR, IN'}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Narrative Introduction & Background */}
          <div className="lg:col-span-7 space-y-7">
            <div className="space-y-3">
              <span className="text-xs font-poppins uppercase tracking-[0.25em] font-bold text-[#248a61] block">
                {t.about.eyebrow}
              </span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-barlow font-black text-[#363636] uppercase tracking-tight leading-tight">
                {t.about.bioHeading}
              </h3>
            </div>

            {/* Narrative Body Copy */}
            <div className="space-y-4 text-sm sm:text-base font-poppins text-[#363636]/85 leading-relaxed">
              {t.about.bioParagraphs.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            {/* Quick Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3">
              {t.about.quickFacts.map((fact, idx) => {
                const IconComponent = factIcons[idx] || Sparkles;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/60 border border-[#363636]/10 hover:border-[#248a61]/30 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#248a61]/10 text-[#248a61] flex items-center justify-center shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-poppins uppercase tracking-widest text-[#363636]/60 font-semibold block leading-tight">
                        {fact.label}
                      </span>
                      <span className="text-xs sm:text-sm font-poppins font-medium text-[#363636] truncate block mt-0.5">
                        {fact.value}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Interactive Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#363636]/10">
              {onExploreExperience && (
                <button
                  id="personal-intro-view-experience-btn"
                  onClick={onExploreExperience}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#363636] hover:bg-[#248a61] text-white text-xs font-poppins font-semibold tracking-wider uppercase transition-all duration-300 shadow-xs cursor-pointer"
                >
                  <span>{t.about.viewExperience}</span>
                  <ArrowDownRight className="w-4 h-4 rtl:rotate-90" />
                </button>
              )}

              {onOpenContact && (
                <button
                  id="personal-intro-contact-btn"
                  onClick={onOpenContact}
                  className="px-6 py-3 rounded-full border border-[#363636]/20 hover:border-[#248a61] bg-transparent hover:bg-[#248a61]/10 text-[#363636] hover:text-[#248a61] text-xs font-poppins font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer"
                >
                  {t.about.getInTouch}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
