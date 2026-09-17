import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onExploreWork: () => void;
  onOpenContact?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onOpenContact }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { language, t, isRTL } = useLanguage();

  // Mouse move perspective tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Subtle grain canvas effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 256;
    canvas.height = 256;
    const imgData = ctx.createImageData(256, 256);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const val = Math.random() * 255;
      data[i] = val;
      data[i + 1] = val;
      data[i + 2] = val;
      data[i + 3] = 16;
    }
    ctx.putImageData(imgData, 0, 0);
  }, []);

  const titleLinesEN = [
    {
      lineId: 'first',
      words: [
        { text: 'MOHAMMAD', chars: ['M', 'O', 'H', 'A', 'M', 'M', 'A', 'D'] }
      ]
    },
    {
      lineId: 'second',
      words: [
        { text: 'HADI', chars: ['H', 'A', 'D', 'I'] },
        { text: 'SHUKOOR', chars: ['S', 'H', 'U', 'K', 'O', 'O', 'R'] }
      ]
    }
  ];

  const titleLinesAR = [
    {
      lineId: 'first',
      words: ['محمد']
    },
    {
      lineId: 'second',
      words: ['هادي', 'شكور']
    }
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-[#e3d9d1] flex items-center justify-center overflow-hidden pt-28 md:pt-32 pb-16"
    >
      {/* Background SVG artwork with perspective tilt */}
      <div
        className="fixed inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-300 ease-out opacity-15"
        style={{
          transform: `perspective(1000px) rotateX(${mousePos.y * -4}deg) rotateY(${mousePos.x * 4}deg) scale(1.06)`,
          backgroundImage: 'url(/images/herobg.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Noise grain overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[2] opacity-20 mix-blend-multiply"
      />

      {/* Glowing atmospheric background blooms */}
      <div
        className="absolute w-[65vw] h-[65vh] rounded-full pointer-events-none z-[3] hidden md:block"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(ellipse, rgba(36, 138, 97, 0.08) 0%, rgba(36, 138, 97, 0) 70%)',
        }}
      />
      <div
        className="absolute top-1/4 left-1/5 w-72 h-72 rounded-full pointer-events-none z-[3] blur-3xl opacity-15 bg-[#248a61]"
      />
      <div
        className="absolute bottom-1/4 right-1/5 w-80 h-80 rounded-full pointer-events-none z-[3] blur-3xl opacity-20 bg-[#9ac7b3]"
      />

      {/* Corner geometric brackets - responsive editorial frame */}
      {/* Top-Left Bracket */}
      <div className="absolute top-20 sm:top-24 md:top-28 left-4 sm:left-6 md:left-8 z-[6] pointer-events-none opacity-35">
        <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 border-l-2 border-t-2 border-[#248a61]/60 rounded-tl-xs sm:rounded-tl-sm" />
      </div>

      {/* Top-Right Bracket */}
      <div className="absolute top-20 sm:top-24 md:top-28 right-4 sm:right-6 md:right-8 z-[6] pointer-events-none opacity-35">
        <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 border-r-2 border-t-2 border-[#248a61]/60 rounded-tr-xs sm:rounded-tr-sm" />
      </div>

      {/* Bottom-Left Bracket */}
      <div className="absolute bottom-20 sm:bottom-22 md:bottom-24 left-4 sm:left-6 md:left-8 z-[6] pointer-events-none opacity-35">
        <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 border-l-2 border-b-2 border-[#248a61]/60 rounded-bl-xs sm:rounded-bl-sm" />
      </div>

      {/* Bottom-Right Bracket */}
      <div className="absolute bottom-20 sm:bottom-22 md:bottom-24 right-4 sm:right-6 md:right-8 z-[6] pointer-events-none opacity-35">
        <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 border-r-2 border-b-2 border-[#248a61]/60 rounded-br-xs sm:rounded-br-sm" />
      </div>

      {/* Vertical side running identity badge (Desktop) */}
      <div
        className="absolute left-6 top-1/2 -translate-y-1/2 z-[6] pointer-events-none hidden lg:block opacity-40 select-none whitespace-nowrap"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', whiteSpace: 'nowrap' }}
      >
        <span
          className={`text-[#363636] text-[9.5px] font-medium whitespace-nowrap inline-block leading-none ${
            language === 'ar'
              ? 'font-cairo tracking-normal'
              : 'font-poppins tracking-[0.25em] uppercase'
          }`}
        >
          {language === 'ar' ? 'محمد هادي شكور — مهندس برمجيات وتطوير شامل' : 'Mohammad Hadi Shukoor — Full Stack Software Engineer'}
        </span>
      </div>

      {/* Vertical side running technical focus badge (Desktop) */}
      <div
        className="absolute right-6 top-1/2 -translate-y-1/2 z-[6] pointer-events-none hidden lg:block opacity-35 select-none whitespace-nowrap"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', whiteSpace: 'nowrap' }}
      >
        <span
          className={`text-[#363636] text-[9.5px] font-medium whitespace-nowrap inline-block leading-none ${
            language === 'ar'
              ? 'font-cairo tracking-normal'
              : 'font-poppins tracking-[0.25em]'
          }`}
        >
          {language === 'ar' ? (
            'أنظمة الويب والواجهات البرمجية الإنتاجية'
          ) : (
            <>
              <span className="uppercase">PRODUCTION WEB SYSTEMS & </span>
              <span className="normal-case">APIs</span>
            </>
          )}
        </span>
      </div>

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Professional Identity Eyebrow */}
        <div className="mb-4 md:mb-5 flex items-center gap-3">
          <span className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent via-[#248a61] to-transparent" />
          <span className="text-[#248a61] text-[10px] sm:text-xs font-poppins font-bold tracking-[0.25em] uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#248a61] animate-pulse" />
            {t.hero.role}
          </span>
          <span className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent via-[#248a61] to-transparent" />
        </div>

        {/* Complete Name: MOHAMMAD HADI SHUKOOR / محمد هادي شكور */}
        <div className="overflow-hidden mb-4 md:mb-5 select-none w-full max-w-4xl">
          {language === 'en' ? (
            <h1 className="flex flex-col items-center justify-center text-[13vw] sm:text-[10.5vw] md:text-[8vw] lg:text-[7.2vw] leading-[0.88] font-barlow font-black text-[#363636] tracking-[-0.03em] uppercase">
              {titleLinesEN.map((line, lineIdx) => (
                <span
                  key={line.lineId}
                  className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 md:gap-x-6"
                >
                  {line.words.map((wordGroup, wIdx) => (
                    <span key={wIdx} className="inline-flex">
                      {wordGroup.chars.map((char, charIdx) => {
                        const totalIdx = lineIdx * 10 + wIdx * 5 + charIdx;
                        return (
                          <span
                            key={charIdx}
                            className="inline-block transition-transform duration-300 hover:text-[#248a61] hover:-translate-y-2 cursor-default"
                            style={{
                              transitionDelay: `${totalIdx * 25}ms`,
                              filter: 'drop-shadow(0 8px 16px rgba(54, 54, 54, 0.1))',
                            }}
                          >
                            {char}
                          </span>
                        );
                      })}
                    </span>
                  ))}
                </span>
              ))}
            </h1>
          ) : (
            <h1 className="flex flex-col items-center justify-center text-[13vw] sm:text-[10.5vw] md:text-[8vw] lg:text-[7.2vw] leading-[0.98] font-barlow font-black text-[#363636] tracking-normal">
              {titleLinesAR.map((line, lineIdx) => (
                <span
                  key={line.lineId}
                  className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 md:gap-x-8"
                >
                  {line.words.map((word, wIdx) => (
                    <span
                      key={wIdx}
                      className="inline-block transition-transform duration-300 hover:text-[#248a61] hover:-translate-y-2 cursor-default"
                      style={{
                        filter: 'drop-shadow(0 8px 16px rgba(54, 54, 54, 0.1))',
                      }}
                    >
                      {word}
                    </span>
                  ))}
                </span>
              ))}
            </h1>
          )}
        </div>

        {/* Subtitle Words: BUILDING PRODUCTION WEB SYSTEMS & APIs */}
        <div className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 mb-4 md:mb-5 text-xs sm:text-sm md:text-base lg:text-lg font-poppins tracking-[0.16em]">
          <span className="text-[#363636]/80 font-normal uppercase">{t.hero.subtitle.building}</span>
          <span className="text-[#363636]/80 font-normal uppercase">{t.hero.subtitle.production}</span>
          <span className="text-[#248a61] font-bold uppercase">{t.hero.subtitle.web}</span>
          <span className="text-[#363636]/80 font-normal uppercase">{t.hero.subtitle.systems}</span>
          <span className="text-[#248a61] font-bold uppercase">{t.hero.subtitle.and}</span>
          <span className="text-[#248a61] font-bold normal-case">{t.hero.subtitle.apis}</span>
        </div>

        {/* Emerald glowing divider */}
        <div className="flex items-center gap-3 mb-4 md:mb-5">
          <span className="w-10 md:w-16 h-px bg-gradient-to-r from-transparent to-[#248a61]/50" />
          <span className="w-2 h-2 rounded-full bg-[#248a61] shadow-[0_0_10px_rgba(36,138,97,0.7)] animate-pulse" />
          <span className="w-10 md:w-16 h-px bg-gradient-to-l from-transparent to-[#248a61]/50" />
        </div>

        {/* Descriptive positioning statement */}
        <p className="text-[#363636]/85 text-xs sm:text-sm md:text-base font-poppins font-normal max-w-xl leading-relaxed tracking-wide mb-6 md:mb-7">
          {t.hero.description}
        </p>

        {/* Floating engineering metadata chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 md:mb-9 max-w-2xl">
          {t.hero.tags.map((tag, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#363636]/5 hover:bg-[#248a61]/10 border border-[#363636]/10 hover:border-[#248a61]/30 text-[#363636] hover:text-[#248a61] text-[10px] md:text-[11px] font-poppins font-medium tracking-wider uppercase transition-all duration-200"
            >
              <span className="w-1 h-1 rounded-full bg-[#248a61]" />
              <span>{tag.label}</span>
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            id="hero-explore-work-btn"
            onClick={onExploreWork}
            className="group relative px-7 py-3.5 rounded-full bg-[#248a61] hover:bg-[#1f7552] text-white text-xs sm:text-sm font-poppins font-semibold tracking-[0.15em] uppercase overflow-hidden transition-all duration-300 shadow-[0_4px_16px_rgba(36,138,97,0.3)] hover:shadow-[0_6px_22px_rgba(36,138,97,0.45)] hover:scale-105 cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>{t.hero.exploreWork}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </span>
          </button>

          {onOpenContact && (
            <button
              id="hero-lets-build-btn"
              onClick={onOpenContact}
              className="px-6 py-3.5 rounded-full border border-[#363636]/20 hover:border-[#248a61] bg-transparent hover:bg-[#248a61]/10 text-[#363636] hover:text-[#248a61] text-xs sm:text-sm font-poppins font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              {t.hero.letsBuild}
            </button>
          )}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none bg-gradient-to-t from-[#e3d9d1] to-transparent z-[8]" />

      {/* Scroll indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 pointer-events-none">
        <span className="text-[#363636]/50 text-[9px] font-poppins tracking-[0.3em] uppercase font-semibold">
          {t.hero.scrollExplore}
        </span>
        <ChevronDown className="w-4 h-4 text-[#248a61] animate-bounce" />
      </div>
    </section>
  );
};
