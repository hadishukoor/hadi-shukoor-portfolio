import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface IntroLoaderProps {
  onComplete?: () => void;
}

const MODULES = [
  { id: 'arch', label: 'ARCHITECTURE', labelAr: 'معمارية النظم' },
  { id: 'ui', label: 'INTERFACES', labelAr: 'واجهات المستخدم' },
  { id: 'api', label: 'APIs', labelAr: 'الواجهات البرمجية APIs' },
  { id: 'db', label: 'DATABASES', labelAr: 'قواعد البيانات' },
  { id: 'sec', label: 'SECURITY', labelAr: 'الأمان والتوثيق' },
  { id: 'dep', label: 'DEPLOYMENT', labelAr: 'بيئة النشر والإنتاج' },
];

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const { language } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Check session persistence and reduced motion
  const [mounted, setMounted] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    try {
      if (sessionStorage.getItem('portfolio_boot_seen') === 'true') {
        return false;
      }
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        sessionStorage.setItem('portfolio_boot_seen', 'true');
        return false;
      }
    } catch {
      // Ignore storage errors in sandboxed environments
    }
    return true;
  });

  // currentStep: -1 (starting), 0..5 (each module initializing then ready), 6 (all ready)
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [progress, setProgress] = useState<number>(0);
  const [isSystemReady, setIsSystemReady] = useState<boolean>(false);
  const [isExiting, setIsExiting] = useState<boolean>(false);

  // Subtle grain canvas effect matching hero
  useEffect(() => {
    if (!mounted) return;
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
  }, [mounted]);

  // Fast-skip function
  const handleSkip = () => {
    try {
      sessionStorage.setItem('portfolio_boot_seen', 'true');
    } catch {
      // Ignore
    }
    setIsExiting(true);
    setTimeout(() => {
      setMounted(false);
      if (onComplete) onComplete();
    }, 200);
  };

  // Keyboard Escape listener
  useEffect(() => {
    if (!mounted) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mounted]);

  // Scroll lock during intro
  useEffect(() => {
    if (mounted) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mounted]);

  // Sequential Initialization Orchestration (~2.0s active, 350ms exit)
  useEffect(() => {
    if (!mounted) return;

    const timers: NodeJS.Timeout[] = [];

    // 0ms: Initial reveal
    timers.push(setTimeout(() => setProgress(8), 50));

    // 220ms: Architecture INITIALIZING
    timers.push(
      setTimeout(() => {
        setCurrentStep(0);
        setProgress(18);
      }, 220)
    );

    // 480ms: Architecture READY, Interfaces INITIALIZING
    timers.push(
      setTimeout(() => {
        setCurrentStep(1);
        setProgress(34);
      }, 480)
    );

    // 740ms: Interfaces READY, APIs INITIALIZING
    timers.push(
      setTimeout(() => {
        setCurrentStep(2);
        setProgress(50);
      }, 740)
    );

    // 1000ms: APIs READY, Databases INITIALIZING
    timers.push(
      setTimeout(() => {
        setCurrentStep(3);
        setProgress(66);
      }, 1000)
    );

    // 1260ms: Databases READY, Security INITIALIZING
    timers.push(
      setTimeout(() => {
        setCurrentStep(4);
        setProgress(82);
      }, 1260)
    );

    // 1520ms: Security READY, Deployment INITIALIZING
    timers.push(
      setTimeout(() => {
        setCurrentStep(5);
        setProgress(94);
      }, 1520)
    );

    // 1780ms: Deployment READY -> All modules completed!
    timers.push(
      setTimeout(() => {
        setCurrentStep(6);
        setProgress(100);
        setIsSystemReady(true);
      }, 1780)
    );

    // 2150ms: Begin smooth exit transition
    timers.push(
      setTimeout(() => {
        setIsExiting(true);
      }, 2150)
    );

    // 2500ms: Unmount cleanly and mark seen in sessionStorage
    timers.push(
      setTimeout(() => {
        try {
          sessionStorage.setItem('portfolio_boot_seen', 'true');
        } catch {
          // Ignore
        }
        setMounted(false);
        if (onComplete) onComplete();
      }, 2500)
    );

    return () => {
      timers.forEach((t) => clearTimeout(t));
    };
  }, [mounted, onComplete]);

  if (!mounted) return null;

  return (
    <div
      id="intro-system-loader"
      role="status"
      aria-live="polite"
      aria-label="Engineering portfolio system initialization"
      className={`fixed inset-0 w-screen h-screen max-w-full z-[100] flex flex-col justify-between bg-[#e3d9d1] text-[#363636] select-none p-4 sm:p-8 md:p-12 transition-opacity duration-400 ease-out overflow-hidden ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Editorial paper grain overlay matching hero */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[1] opacity-20 mix-blend-multiply"
      />

      {/* Atmospheric subtle emerald ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[28rem] h-80 sm:h-[28rem] rounded-full pointer-events-none z-[1] opacity-20 blur-3xl transition-opacity duration-700"
        style={{
          background: 'radial-gradient(circle, rgba(36, 138, 97, 0.4) 0%, rgba(227, 217, 209, 0) 70%)',
        }}
      />

      {/* TOP HEADER: Subtle Context + Understated Skip Button */}
      <div className="relative z-[3] flex items-center justify-between w-full text-[10px] sm:text-xs font-mono text-[#363636]/40 pt-1 px-1">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#248a61] inline-block" />
          <span className="tracking-widest uppercase">
            {language === 'ar' ? 'ملف هندسة البرمجيات' : 'ENGINEERING PORTFOLIO'}
          </span>
        </div>
        <button
          onClick={handleSkip}
          className="group flex items-center gap-1.5 px-2.5 py-1 rounded border border-[#363636]/15 hover:border-[#248a61] hover:text-[#248a61] transition-colors cursor-pointer text-[9px] sm:text-[10px] tracking-widest uppercase font-mono"
          aria-label="Skip system initialization intro"
        >
          <span>ESC</span>
          <span className="text-[#363636]/30 group-hover:text-[#248a61]">/</span>
          <span>SKIP</span>
        </button>
      </div>

      {/* CENTER STAGE: COHESIVE, SPACIOUS EDITORIAL COMPOSITION */}
      <div
        className={`relative z-[3] my-auto flex flex-col items-center justify-center max-w-[320px] sm:max-w-md mx-auto w-full text-center py-2 sm:py-4 transition-all duration-400 ease-out ${
          isExiting ? 'scale-95 opacity-0 -translate-y-2' : 'scale-100 opacity-100 translate-y-0'
        }`}
      >
        {/* 1. HS MONOGRAM (PRIMARY FOCAL POINT: Larger, Proud, Emerald #248A61) */}
        <div className="relative mb-3 sm:mb-4">
          <img
            src="/images/favicon-emerald.png"
            alt="HS Monogram"
            width="96"
            height="96"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain drop-shadow-[0_4px_22px_rgba(36,138,97,0.3)] transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* 2. REFINED BRANDING HIERARCHY */}
        <div className="space-y-1 mb-3 sm:mb-4">
          <h1 className="font-barlow text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.22em] sm:tracking-[0.28em] text-[#363636] uppercase leading-none">
            {language === 'ar' ? 'هادي شكور' : 'HADI SHUKOOR'}
          </h1>
          <p className="font-poppins text-[9.5px] sm:text-xs font-semibold tracking-[0.22em] text-[#363636]/60 uppercase">
            {language === 'ar' ? 'مهندس برمجيات وتطوير شامل' : 'FULL STACK SOFTWARE ENGINEER'}
          </p>
        </div>

        {/* 3. SYSTEM INITIALIZATION LABEL */}
        <div className="inline-flex items-center gap-2 text-[#248a61] text-[10px] sm:text-xs font-mono tracking-widest uppercase mb-3 sm:mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#248a61] animate-pulse" />
          <span>{language === 'ar' ? 'تهيئة النظام البرمجي' : 'SYSTEM INITIALIZATION'}</span>
        </div>

        {/* 4. REFINED THIN PROGRESS LINE (Clean, no noisy numbers) */}
        <div className="w-full max-w-[260px] sm:max-w-[340px] mb-4 sm:mb-5">
          <div className="h-[2px] w-full bg-[#363636]/10 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-[#248a61] transition-all duration-200 ease-out shadow-[0_0_8px_rgba(36,138,97,0.5)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* 5. SEQUENTIAL ENGINEERING STATUS CHECKLIST */}
        <div className="w-full max-w-[260px] sm:max-w-[340px] bg-[#ede6df]/70 border border-[#363636]/10 rounded-lg p-2.5 sm:p-3.5 space-y-1.5 text-left rtl:text-right font-mono text-[10px] sm:text-xs">
          {MODULES.map((mod, idx) => {
            let statusText = '····';
            let statusTextAr = '····';
            let statusClass = 'text-[#363636]/25';
            let rowClass = 'text-[#363636]/25';
            let bullet = '·';

            if (currentStep > idx) {
              // Completed
              statusText = 'READY';
              statusTextAr = 'جاهز';
              statusClass = 'text-[#248a61] font-semibold';
              rowClass = 'text-[#363636]/80 font-medium';
              bullet = '✓';
            } else if (currentStep === idx) {
              // Actively initializing
              statusText = 'INITIALIZING';
              statusTextAr = 'قيد التهيئة';
              statusClass = 'text-[#363636]/70 font-semibold animate-pulse';
              rowClass = 'text-[#363636] font-semibold';
              bullet = '›';
            }

            return (
              <div
                key={mod.id}
                className={`flex items-center justify-between transition-colors duration-200 ${rowClass}`}
              >
                <div className="flex items-center gap-2 truncate">
                  <span
                    className={`text-[9px] ${
                      currentStep > idx
                        ? 'text-[#248a61] font-bold'
                        : currentStep === idx
                        ? 'text-[#248a61] font-bold animate-pulse'
                        : 'text-[#363636]/25'
                    }`}
                  >
                    {bullet}
                  </span>
                  <span className="tracking-wider uppercase">
                    {language === 'ar' ? mod.labelAr : mod.label}
                  </span>
                </div>
                <div className="shrink-0 flex items-center gap-1.5">
                  <span className="text-[#363636]/15 hidden sm:inline select-none">····</span>
                  <span
                    className={`text-[9px] sm:text-[10px] tracking-wider uppercase px-1.5 py-0.5 rounded ${statusClass}`}
                  >
                    {language === 'ar' ? statusTextAr : statusText}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 6. SYSTEM READY CLIMAX */}
        <div className="h-8 mt-3 sm:mt-4 flex items-center justify-center">
          {isSystemReady && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#248a61] text-white text-[10px] sm:text-xs font-mono tracking-widest uppercase shadow-[0_4px_20px_rgba(36,138,97,0.45)] transition-all duration-300">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="font-bold">{language === 'ar' ? 'النظام جاهز' : 'SYSTEM READY'}</span>
            </div>
          )}
        </div>
      </div>

      {/* BOTTOM FOOTER: Minimal & Restrained */}
      <div className="relative z-[3] flex items-center justify-center w-full text-[9px] sm:text-[10px] font-mono text-[#363636]/35 uppercase tracking-[0.2em] pb-1 px-1">
        <div>MOHAMMAD HADI SHUKOOR // SOFTWARE SYSTEMS</div>
      </div>
    </div>
  );
};
