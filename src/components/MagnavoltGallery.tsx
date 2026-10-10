import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Expand, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type Screenshot = {
  file: string;
  width: number;
  height: number;
  displayHeight?: number;
  technician?: boolean;
  en: string;
  ar: string;
  altEn: string;
  altAr: string;
};

const screenshots: Screenshot[] = [
  { file: 'administration-dashboard', width: 2940, height: 1604, en: 'Administration dashboard', ar: 'لوحة تحكم الإدارة', altEn: 'MAGNAVOLT administration dashboard with operational summaries and financial totals.', altAr: 'لوحة تحكم إدارة MAGNAVOLT تعرض ملخصات العمليات والإجماليات المالية.' },
  { file: 'service-detail', width: 2940, height: 1604, en: 'Service detail', ar: 'تفاصيل الخدمة', altEn: 'Service record with customer information, assigned technician, diagnostics and linked documents.', altAr: 'سجل خدمة يعرض بيانات العميل والفني المكلّف والتشخيص والمستندات المرتبطة.' },
  { file: 'issued-quotation-preview', width: 2940, height: 1604, en: 'Issued quotation preview', ar: 'معاينة عرض السعر الصادر', altEn: 'Issued quotation details alongside a quotation document preview on company letterhead.', altAr: 'تفاصيل عرض سعر صادر بجانب معاينة المستند على ورق الشركة الرسمي.' },
  { file: 'technician-assignments', width: 1314, height: 1604, technician: true, en: 'Technician assignments', ar: 'مهام الفني', altEn: 'Technician job list with service references, customer locations and job statuses.', altAr: 'قائمة مهام الفني تعرض مراجع الخدمات ومواقع العملاء وحالات المهام.' },
  { file: 'technician-job-detail', width: 1634, height: 1500, technician: true, en: 'Technician job detail', ar: 'تفاصيل مهمة الفني', altEn: 'Technician service detail with diagnostic notes, linked quotation and invoice, and payment totals.', altAr: 'تفاصيل خدمة للفني تتضمن ملاحظات التشخيص وعرض السعر والفاتورة المرتبطين وإجماليات الدفع.' },
  // Display crop removes only the bottom capture clutter/footer, retaining the full accounts table.
  { file: 'accounts-receivable-overview', width: 2940, height: 1604, displayHeight: 1360, en: 'Accounts-receivable overview', ar: 'نظرة عامة على الذمم المدينة', altEn: 'Accounts-receivable dashboard with receivables, collections, aging analysis and outstanding customer accounts.', altAr: 'لوحة الذمم المدينة تعرض المستحقات والتحصيلات وتحليل أعمار الديون وحسابات العملاء ذات الأرصدة المستحقة.' },
];

function ScreenshotImage({ shot, ar, eager = false }: { shot: Screenshot; ar: boolean; eager?: boolean }) {
  return (
    <div className="w-full overflow-hidden bg-white" style={{ aspectRatio: `${shot.width} / ${shot.displayHeight ?? shot.height}` }}>
      <img src={`/projects/magnavolt/${shot.file}.webp`} width={shot.width} height={shot.height}
        alt={ar ? shot.altAr : shot.altEn} loading={eager ? 'eager' : 'lazy'} decoding="async"
        className="block w-full h-auto max-w-none" />
    </div>
  );
}

const controlClass = 'min-h-11 rounded-xl border border-[#363636]/25 px-3 py-2 text-sm font-semibold hover:bg-[#248a61]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#248a61] cursor-pointer';

function ImageViewer({ shot, ar, onClose, trigger }: { shot: Screenshot; ar: boolean; onClose: () => void; trigger: HTMLButtonElement | null }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [originalSize, setOriginalSize] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current!;
    const overlay = trigger?.closest<HTMLElement>('[data-project-overlay]');
    const bodyOverflow = document.body.style.overflow;
    const overlayOverflow = overlay?.style.overflow;
    document.body.style.overflow = 'hidden';
    if (overlay) overlay.style.overflow = 'hidden';
    dialog.showModal();
    closeRef.current?.focus();

    // Capture Escape before the existing case-study listener can dismiss its parent.
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        onClose();
      }
      if (event.key === 'Tab') {
        const controls = Array.from(dialog.querySelectorAll('button, [tabindex="0"]')) as HTMLElement[];
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault(); last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault(); first.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKey, true);
    return () => {
      document.removeEventListener('keydown', handleKey, true);
      dialog.close();
      document.body.style.overflow = bodyOverflow;
      if (overlay) overlay.style.overflow = overlayOverflow ?? '';
      if (trigger?.isConnected) trigger.focus({ preventScroll: true });
    };
  }, [onClose, trigger]);

  return createPortal(
    <dialog ref={dialogRef} dir={ar ? 'rtl' : 'ltr'} aria-modal="true" aria-labelledby="magnavolt-image-title" aria-describedby="magnavolt-image-help"
      onCancel={event => { event.preventDefault(); onClose(); }}
      onClick={event => { event.stopPropagation(); if (event.target === event.currentTarget) onClose(); }}
      className="m-auto p-0 w-[calc(100%-1rem)] max-w-[1440px] max-h-[94dvh] rounded-2xl border border-[#248a61]/50 bg-[#ede6df] text-[#363636] shadow-2xl backdrop:bg-black/85 overflow-hidden font-poppins">
      <div className="flex flex-col max-h-[94dvh]">
        <header className="shrink-0 p-3 sm:p-5 border-b border-[#363636]/15 space-y-2">
          <div className="flex items-start justify-between gap-3">
            <h2 id="magnavolt-image-title" className="font-semibold text-base sm:text-xl min-w-0">{ar ? shot.ar : shot.en}</h2>
            <button ref={closeRef} onClick={onClose} className={`${controlClass} shrink-0 inline-flex items-center gap-2`} aria-label={ar ? 'إغلاق معاينة الصورة' : 'Close image preview'}><X size={18} aria-hidden="true" /><span>{ar ? 'إغلاق' : 'Close'}</span></button>
          </div>
          <button onClick={() => setOriginalSize(value => !value)} aria-pressed={originalSize} className={controlClass}>{originalSize ? (ar ? 'ملاءمة العرض' : 'Fit to width') : (ar ? 'عرض بالحجم الأصلي' : 'View original size')}</button>
          <p id="magnavolt-image-help" className="text-xs leading-relaxed">{ar ? 'يمكنك التمرير لاستكشاف الصورة. اضغط Escape للإغلاق.' : 'Scroll to explore the image. Press Escape to close.'}</p>
        </header>
        <div dir="ltr" tabIndex={0} role="region" aria-label={ar ? 'الصورة القابلة للتمرير' : 'Scrollable image'} className="min-h-0 overflow-auto overscroll-contain focus-visible:outline-2 focus-visible:outline-[#248a61]" style={{ touchAction: 'pan-x pan-y pinch-zoom' }}>
          <div style={{ width: originalSize ? shot.width : '100%', maxWidth: originalSize ? 'none' : shot.width, marginInline: 'auto' }}>
            <ScreenshotImage shot={shot} ar={ar} eager />
          </div>
        </div>
      </div>
    </dialog>, document.body,
  );
}

export function MagnavoltGallery() {
  const { language } = useLanguage();
  const ar = language === 'ar';
  const [selected, setSelected] = useState<Screenshot | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  // Stable callback keeps the dialog lifecycle independent of its zoom state.
  const closeViewer = useRef(() => setSelected(null)).current;
  return (
    <section aria-labelledby="magnavolt-gallery-title" className="space-y-5 py-6 border-t border-[#363636]/15">
      <div className="space-y-3">
        <h4 id="magnavolt-gallery-title" className="text-xl sm:text-2xl font-semibold">{ar ? 'داخل منصة العمليات' : 'Inside the Operations Platform'}</h4>
        <p className="text-sm leading-relaxed">{ar ? 'تعرض هذه الصور واجهة العمليات التي تدعم الموقع العام للشركة. بوابة العمليات مخصصة للمستخدمين المصرّح لهم فقط.' : 'These images show the operations interface behind the public corporate website. The operations portal is restricted to authorized users.'}</p>
        <p className="text-sm font-semibold text-[#1b6a4a]">{ar ? 'لقطات شاشة التطبيق معروضة ببيانات تجريبية وهمية.' : 'Application screenshots shown with fictional demo data.'}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
        {screenshots.map(shot => (
          <figure key={shot.file} className={`min-w-0 overflow-hidden rounded-2xl border border-[#363636]/20 bg-white/50 ${shot.technician ? '' : 'sm:col-span-2'}`}>
            <button onClick={event => { triggerRef.current = event.currentTarget; setSelected(shot); }} aria-haspopup="dialog" aria-label={`${ar ? 'تكبير' : 'Enlarge'}: ${ar ? shot.ar : shot.en}`}
              className="block w-full cursor-zoom-in focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-[#248a61]">
              <ScreenshotImage shot={shot} ar={ar} />
              <span className="flex items-center justify-end gap-2 px-4 py-2 text-xs font-semibold text-[#1b6a4a]"><Expand size={16} aria-hidden="true" />{ar ? 'تكبير الصورة' : 'Enlarge image'}</span>
            </button>
            <figcaption className="px-4 pb-4 text-sm font-semibold leading-relaxed">{ar ? shot.ar : shot.en}</figcaption>
          </figure>
        ))}
      </div>
      {selected && <ImageViewer shot={selected} ar={ar} trigger={triggerRef.current} onClose={closeViewer} />}
    </section>
  );
}
