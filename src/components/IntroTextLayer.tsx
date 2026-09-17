import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const IntroTextLayer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);
  const row4Ref = useRef<HTMLDivElement>(null);
  const { language, isRTL } = useLanguage();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!containerRef.current || ticking) return;

      window.requestAnimationFrame(() => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Progress when container moves through viewport (0 to 1)
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        // Clamped progress through viewport (0 to 1)
        const clamped = Math.max(0, Math.min(1, progress));
        // Responsive travel factor: conservative on mobile to prevent clipping, dynamic on desktop
        const factor = window.innerWidth < 640 ? 0.4 : window.innerWidth < 1024 ? 0.7 : 1;
        const rtlDirection = isRTL ? -1 : 1;
        // Centered scroll progress (-1 to +1) ensuring text is perfectly framed at viewport center
        const offset = (clamped - 0.5) * 2;

        // Smooth, controlled translation offsets without clipping words
        if (row1Ref.current) {
          row1Ref.current.style.transform = `translateX(${-14 * offset * factor * rtlDirection}%)`;
        }
        if (row2Ref.current) {
          row2Ref.current.style.transform = `translateX(${12 * offset * factor * rtlDirection}%)`;
        }
        if (row3Ref.current) {
          row3Ref.current.style.transform = `translateX(${-12 * offset * factor * rtlDirection}%)`;
        }
        if (row4Ref.current) {
          row4Ref.current.style.transform = `translateX(${14 * offset * factor * rtlDirection}%)`;
        }

        ticking = false;
      });

      ticking = true;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isRTL]);

  // Responsive, controlled editorial typographic scale with generous breathing space
  const rowBaseStyle =
    "text-[7.5vw] sm:text-[6.5vw] md:text-[5.5vw] lg:text-[4.5vw] xl:text-[4vw] leading-[1.1] font-barlow font-black uppercase tracking-tight whitespace-nowrap select-none will-change-transform transition-transform duration-75 ease-out";

  return (
    <section
      ref={containerRef}
      aria-label="Engineering Core Concepts"
      className="relative w-full bg-[#e3d9d1] py-16 sm:py-20 md:py-28 overflow-hidden z-20 border-t border-[#363636]/10"
    >
      {/* Background artwork watermark with low opacity */}
      <img
        src="/images/introbg.svg"
        alt=""
        className="absolute bottom-0 left-0 w-[140%] max-w-none pointer-events-none opacity-10 select-none"
      />

      {/* Subtle section label */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 flex items-center justify-between text-[#363636]/60 text-[10px] sm:text-xs font-poppins font-semibold uppercase tracking-[0.25em]">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#248a61]" />
          <span>{language === 'ar' ? 'جوهر الممارسة الهندسية' : 'Core Engineering Focus'}</span>
        </span>
        <span className="hidden sm:inline-block tracking-widest text-[#248a61]">
          {language === 'ar' ? 'وضوح الرؤية • دقة المعمارية • موثوقية التنفيذ' : 'Clarity • Precision • Delivery'}
        </span>
      </div>

      {/* Kinetic Opposing Rows */}
      <div className="flex flex-col gap-5 sm:gap-7 md:gap-9 w-full overflow-hidden">
        {/* ROW 1 */}
        <div
          ref={row1Ref}
          className="w-full flex justify-start pl-[4vw] sm:pl-[8vw] md:pl-[12vw] rtl:pl-0 rtl:pr-[4vw] rtl:sm:pr-[8vw] rtl:md:pr-[12vw]"
        >
          <div className={`${rowBaseStyle} text-[#363636] flex items-center gap-4 sm:gap-6 md:gap-8`}>
            {language === 'ar' ? (
              <>
                <span>بناء المنظومات</span>
                <span className="text-[#248a61] opacity-70 text-[0.6em]">•</span>
                <span>فحص وتصحيح</span>
                <span className="text-[#248a61] opacity-70 text-[0.6em]">•</span>
                <span>نشر للإنتاج</span>
              </>
            ) : (
              <>
                <span>BUILD</span>
                <span className="text-[#248a61] opacity-70 text-[0.6em]">•</span>
                <span>DEBUG</span>
                <span className="text-[#248a61] opacity-70 text-[0.6em]">•</span>
                <span>DEPLOY</span>
              </>
            )}
          </div>
        </div>

        {/* ROW 2 */}
        <div
          ref={row2Ref}
          className="w-full flex justify-start pl-[2vw] sm:pl-[4vw] md:pl-[6vw] rtl:pl-0 rtl:pr-[2vw] rtl:sm:pr-[4vw] rtl:md:pr-[6vw]"
        >
          <div className={`${rowBaseStyle} text-[#363636] flex items-center gap-4 sm:gap-6 md:gap-8`}>
            {language === 'ar' ? (
              <>
                <span>أنظمة الأعمال ERP</span>
                <span className="text-[#248a61] font-serif italic text-[0.9em]">&amp;</span>
                <span className="text-[#248a61]">واجهات برمجية PRODUCTION APIs</span>
              </>
            ) : (
              <>
                <span>SYSTEMS</span>
                <span className="text-[#248a61] font-serif italic text-[0.9em]">&amp;</span>
                <span className="text-[#248a61]">PRODUCTION APIs</span>
              </>
            )}
          </div>
        </div>

        {/* ROW 3 */}
        <div
          ref={row3Ref}
          className="w-full flex justify-start pl-[4vw] sm:pl-[8vw] md:pl-[10vw] rtl:pl-0 rtl:pr-[4vw] rtl:sm:pr-[8vw] rtl:md:pr-[10vw]"
        >
          <div className={`${rowBaseStyle} text-[#363636] flex items-center gap-4 sm:gap-6 md:gap-8`}>
            {language === 'ar' ? (
              <>
                <span>من المتطلبات والتحليل</span>
                <span className="text-[#248a61] text-[0.8em] rtl:rotate-180">→</span>
                <span>إلى برمجيات عاملة</span>
              </>
            ) : (
              <>
                <span>REQUIREMENTS</span>
                <span className="text-[#248a61] text-[0.8em]">→</span>
                <span>WORKING SOFTWARE</span>
              </>
            )}
          </div>
        </div>

        {/* ROW 4 */}
        <div
          ref={row4Ref}
          className="w-full flex justify-start pl-[2vw] sm:pl-[4vw] md:pl-[6vw] rtl:pl-0 rtl:pr-[2vw] rtl:sm:pr-[4vw] rtl:md:pr-[6vw]"
        >
          <div className={`${rowBaseStyle} text-[#363636] flex items-center gap-4 sm:gap-6 md:gap-8`}>
            {language === 'ar' ? (
              <>
                <span>هندسة وتطوير شامل</span>
                <span className="text-[#248a61] opacity-70 text-[0.6em]">•</span>
                <span className="text-[#248a61]">FULL STACK</span>
                <span className="text-[#248a61] opacity-70 text-[0.6em]">•</span>
                <span>معمارية متينة</span>
              </>
            ) : (
              <>
                <span>FULL STACK</span>
                <span className="text-[#248a61] opacity-70 text-[0.6em]">•</span>
                <span className="text-[#248a61]">ENGINEERING</span>
                <span className="text-[#248a61] opacity-70 text-[0.6em]">•</span>
                <span>ARCHITECTURE</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Fine bottom accent divider with central status dot */}
      <div className="max-w-md mx-auto mt-12 md:mt-16 px-6 flex items-center gap-3">
        <span className="flex-1 h-px bg-gradient-to-r from-transparent to-[#363636]/15" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#248a61]/60" />
        <span className="flex-1 h-px bg-gradient-to-l from-transparent to-[#363636]/15" />
      </div>
    </section>
  );
};
