import React, { useState, useEffect } from 'react';
import {
  X,
  MessageCircle,
  Mail,
  Phone,
  Copy,
  Check,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Send,
  Sparkles,
  Linkedin,
  Instagram,
  Facebook,
} from 'lucide-react';
import { CONTACT_INFO } from '../data/profile';
import { SocialCard, SocialLinkData } from './SocialCard';
import { useLanguage } from '../context/LanguageContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  defaultToDetailedForm?: boolean;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
  defaultToDetailedForm = false,
}) => {
  const { language, t, isRTL } = useLanguage();
  const [viewMode, setViewMode] = useState<'quick' | 'detailed'>('quick');
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);

  // Detailed form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: preselectedService || 'Full Stack Web Application',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const [submitted, setSubmitted] = useState(false);

  // Sync mode when modal opens
  useEffect(() => {
    if (isOpen) {
      setViewMode(defaultToDetailedForm ? 'detailed' : 'quick');
      setSubmitted(false);
      setFormErrors({});
      if (preselectedService) {
        setFormData((prev) => ({ ...prev, projectType: preselectedService }));
      }
    }
  }, [isOpen, defaultToDetailedForm, preselectedService]);

  // ESC key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Clipboard copy handler
  const handleCopy = (type: 'email' | 'phone', text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(type);
    setTimeout(() => {
      setCopiedField((current) => (current === type ? null : current));
    }, 2200);
  };

  // Primary WhatsApp action
  const openWhatsApp = (customText?: string) => {
    const defaultText =
      language === 'ar'
        ? 'مرحباً هادي، أود مناقشة متطلبات مشروع برمجي معك.'
        : CONTACT_INFO.whatsappPrefillText;
    const text = encodeURIComponent(customText || defaultText);
    window.open(`${CONTACT_INFO.whatsappUrl}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  // Direct mailto action
  const openEmail = () => {
    const subject = encodeURIComponent(
      language === 'ar' ? 'استفسار مشروع برمجي — هادي شكور' : CONTACT_INFO.emailSubject
    );
    const body = encodeURIComponent(
      language === 'ar'
        ? 'مرحباً هادي،\n\nأود مناقشة تفاصيل مشروع برمجي معك:\n\nنوع المشروع:\nالجدول الزمني التقديري:\nالتفاصيل:'
        : CONTACT_INFO.emailBody
    );
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
  };

  // Detailed Form Validation & Submission
  const validateForm = () => {
    const errors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) {
      errors.name = language === 'ar' ? 'يرجى إدخال اسمك أو اسم الشركة.' : 'Please enter your name or company.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = language === 'ar' ? 'يرجى إدخال البريد الإلكتروني.' : 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = language === 'ar' ? 'يرجى إدخال بريد إلكتروني صحيح.' : 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errors.message = language === 'ar' ? 'يرجى كتابة نبذة عن المشروع المراد بناؤه.' : "Please tell me briefly what you'd like to build.";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleDetailedSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitted(true);
    const messageLines = [
      language === 'ar' ? `مرحباً هادي! اسمي ${formData.name.trim()}.` : `Hi Hadi! My name is ${formData.name.trim()}.`,
      `${language === 'ar' ? 'البريد الإلكتروني' : 'Email'}: ${formData.email.trim()}`,
      formData.phone ? `${language === 'ar' ? 'الهاتف' : 'Phone'}: ${formData.phone.trim()}` : '',
      `${language === 'ar' ? 'نوع المشروع' : 'Project Type'}: ${formData.projectType}`,
      '',
      `${language === 'ar' ? 'المتطلبات والأهداف' : 'Requirements'}:`,
      formData.message.trim(),
    ].filter(Boolean);

    const fullMessage = messageLines.join('\n');
    setTimeout(() => {
      openWhatsApp(fullMessage);
    }, 400);
  };

  const handleDetailedSubmitEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitted(true);
    const subject = encodeURIComponent(
      language === 'ar'
        ? `استفسار مشروع: ${formData.projectType} — ${formData.name}`
        : `Project Inquiry: ${formData.projectType} — ${formData.name}`
    );
    const body = encodeURIComponent(
      language === 'ar'
        ? `مرحباً هادي،\n\nاسمي ${formData.name.trim()}.\n\nنوع المشروع: ${formData.projectType}\nالهاتف: ${
            formData.phone.trim() || 'لم يتم التحديد'
          }\nالبريد: ${formData.email.trim()}\n\nنطاق المشروع والأهداف:\n${formData.message.trim()}\n\nمع التحية،\n${formData.name.trim()}`
        : `Hi Hadi,\n\nMy name is ${formData.name.trim()}.\n\nProject Type: ${formData.projectType}\nPhone: ${
            formData.phone.trim() || 'Not provided'
          }\nEmail: ${formData.email.trim()}\n\nProject Scope & Goals:\n${formData.message.trim()}\n\nBest regards,\n${formData.name.trim()}`
    );
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-xs animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-xl bg-[#ede6df] border border-[#248a61]/30 rounded-3xl p-6 sm:p-8 md:p-9 shadow-2xl max-h-[92vh] overflow-y-auto transition-all">
        {/* Close Button (direction-aware) */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rtl:right-auto rtl:left-5 sm:top-6 sm:right-6 rtl:sm:right-auto rtl:sm:left-6 p-2 rounded-full bg-[#363636]/10 hover:bg-[#248a61] text-[#363636] hover:text-white transition-colors cursor-pointer z-10"
          aria-label={language === 'ar' ? 'إغلاق النافذة' : 'Close dialog'}
        >
          <X className="w-5 h-5" />
        </button>

        {/* ========================================================
            SUBMITTED SUCCESS STATE
        ======================================================== */}
        {submitted ? (
          <div className="py-10 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-[#248a61]/15 text-[#248a61] flex items-center justify-center mb-4">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-barlow font-black uppercase text-[#363636] mb-2 tracking-tight">
              {language === 'ar' ? 'تم تجهيز الاستفسار' : 'CONNECTION INITIATED'}
            </h3>
            <p className="text-xs sm:text-sm font-poppins text-[#363636]/75 max-w-sm mb-6 leading-relaxed">
              {language === 'ar'
                ? 'تم تجهيز بيانات استفسارك بنجاح. إذا لم يتم فتح تطبيق واتساب أو البريد تلقائياً، يمكنك النقر على الأزرار أدناه.'
                : "Your inquiry has been formatted. If WhatsApp or your email client didn't open automatically, use the buttons below."}
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => openWhatsApp()}
                className="px-5 py-2.5 rounded-full bg-[#248a61] hover:bg-[#1f7552] text-white text-xs font-poppins font-semibold uppercase tracking-wider flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{language === 'ar' ? 'فتح في واتساب' : 'Open in WhatsApp'}</span>
              </button>
              <button
                onClick={openEmail}
                className="px-5 py-2.5 rounded-full bg-[#363636] hover:bg-[#248a61] text-white text-xs font-poppins font-semibold uppercase tracking-wider flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>{language === 'ar' ? 'فتح في البريد' : 'Open in Email'}</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2.5 rounded-full border border-[#363636]/20 text-[#363636] hover:text-[#248a61] text-xs font-poppins font-semibold uppercase tracking-wider cursor-pointer"
              >
                {language === 'ar' ? 'إغلاق' : 'Close'}
              </button>
            </div>
          </div>
        ) : viewMode === 'quick' ? (
          /* ========================================================
             LEVEL 1: QUICK DIRECT CONTACT (DEFAULT)
          ======================================================== */
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 text-[#248a61] text-[10px] sm:text-xs font-poppins font-bold tracking-[0.25em] uppercase mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#248a61] animate-pulse" />
                <span>{language === 'ar' ? 'تواصل مباشر' : "Let's Build"}</span>
              </div>
              <h2
                id="contact-modal-title"
                className="text-2xl sm:text-3xl md:text-4xl font-barlow font-black text-[#363636] uppercase tracking-tight leading-tight"
              >
                {language === 'ar' ? 'لنناقش ما ترغب في بنائه.' : "LET'S TALK ABOUT WHAT YOU'RE BUILDING."}
              </h2>
              <p className="text-xs sm:text-sm font-poppins text-[#363636]/75 mt-2 leading-relaxed max-w-lg">
                {language === 'ar'
                  ? 'سواء كان مشروع تطبيق ويب متكامل، أو نظاماً مؤسسياً، أو تكامل واجهات برمجية، اختر الطريقة الأنسب للتواصل.'
                  : "Whether it's a web application, business system, API, automation workflow, or a contract opening, choose how you'd like to reach me."}
              </p>
            </div>

            {/* Primary Action: WhatsApp */}
            <div className="space-y-3">
              <button
                id="modal-whatsapp-primary-btn"
                onClick={() => openWhatsApp()}
                className="w-full group relative flex items-center justify-between px-6 py-4 rounded-2xl bg-[#248a61] hover:bg-[#1e7351] text-white text-sm sm:text-base font-poppins font-bold uppercase tracking-[0.12em] transition-all duration-300 shadow-[0_6px_24px_rgba(36,138,97,0.35)] hover:shadow-[0_8px_30px_rgba(36,138,97,0.5)] hover:-translate-y-0.5 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left rtl:text-right">
                    <span className="block leading-tight">
                      {language === 'ar' ? 'مراسلة عبر واتساب' : 'MESSAGE ME ON WHATSAPP'}
                    </span>
                    <span className="text-[10px] font-normal normal-case opacity-90 block">
                      {language === 'ar' ? `استجابة سريعة • ${CONTACT_INFO.phoneFormatted}` : `Fastest response • ${CONTACT_INFO.phoneFormatted}`}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 rtl:rotate-180 transition-transform duration-300 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 shrink-0" />
              </button>

              {/* Secondary Action: Direct Email Button with Copy Email */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                <button
                  id="modal-email-primary-btn"
                  onClick={openEmail}
                  className="sm:col-span-8 group flex items-center justify-between px-5 py-3.5 rounded-2xl bg-[#363636] hover:bg-[#248a61] text-white text-xs sm:text-sm font-poppins font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#248a61] group-hover:text-white transition-colors" />
                    <span className="truncate">
                      {language === 'ar' ? 'إرسال بريد إلكتروني' : 'SEND ME AN EMAIL'}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 rtl:rotate-[-90deg] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <button
                  id="modal-copy-email-btn"
                  onClick={() => handleCopy('email', CONTACT_INFO.email)}
                  className="sm:col-span-4 flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-2xl border border-[#363636]/15 hover:border-[#248a61] bg-white/60 hover:bg-white text-xs font-poppins font-medium text-[#363636] hover:text-[#248a61] transition-all cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy email address to clipboard"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#248a61]" />
                      <span className="font-semibold text-[#248a61] text-[11px]">
                        {language === 'ar' ? 'تم النسخ ✓' : 'COPIED ✓'}
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px] uppercase tracking-wider">
                        {language === 'ar' ? 'نسخ البريد' : 'COPY EMAIL'}
                      </span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone / direct click-to-call & copy */}
              <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/40 border border-[#363636]/10 text-xs font-poppins text-[#363636]/80">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center gap-2 hover:text-[#248a61] transition-colors"
                  title="Call Hadi Shukoor"
                >
                  <Phone className="w-3.5 h-3.5 text-[#248a61]" />
                  <span className="font-medium font-mono" dir="ltr">{CONTACT_INFO.phoneFormatted}</span>
                  <span className="text-[10px] text-[#363636]/50 hidden sm:inline">
                    {language === 'ar' ? '(اتصال مباشر)' : '(Click to call)'}
                  </span>
                </a>
                <button
                  onClick={() => handleCopy('phone', CONTACT_INFO.phoneFormatted)}
                  className="text-[10px] font-semibold uppercase tracking-wider text-[#363636]/60 hover:text-[#248a61] transition-colors cursor-pointer flex items-center gap-1"
                >
                  {copiedField === 'phone' ? (
                    <span className="text-[#248a61]">{language === 'ar' ? 'تم النسخ ✓' : 'COPIED ✓'}</span>
                  ) : (
                    <span>{language === 'ar' ? 'نسخ الرقم' : 'COPY NUMBER'}</span>
                  )}
                </button>
              </div>
            </div>

            {/* Editorial Social Connections */}
            <div className="pt-2 border-t border-[#363636]/10 space-y-3">
              <div className="flex items-center justify-between text-[10px] sm:text-xs font-poppins font-semibold uppercase tracking-[0.2em] text-[#363636]/60">
                <span>{language === 'ar' ? 'أو عبر المنصات المهنية' : 'OR CONNECT WITH ME'}</span>
                <span className="text-[#248a61]">{language === 'ar' ? 'روابط مباشرة' : 'DIRECT PROFILES'}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {([
                  {
                    number: '01',
                    platform: 'LINKEDIN',
                    handle: CONTACT_INFO.linkedinHandle,
                    href: CONTACT_INFO.linkedinUrl,
                    icon: Linkedin,
                    ariaLabel: 'Connect with Hadi Shukoor on LinkedIn',
                  },
                  {
                    number: '02',
                    platform: 'INSTAGRAM',
                    handle: `@${CONTACT_INFO.instagramHandle}`,
                    href: CONTACT_INFO.instagramUrl,
                    icon: Instagram,
                    ariaLabel: 'Follow Hadi Shukoor on Instagram',
                  },
                  {
                    number: '03',
                    platform: 'FACEBOOK',
                    handle: `/${CONTACT_INFO.facebookHandle}`,
                    href: CONTACT_INFO.facebookUrl,
                    icon: Facebook,
                    ariaLabel: 'View Hadi Shukoor on Facebook',
                  },
                ] as SocialLinkData[]).map((item) => (
                  <SocialCard key={item.platform} data={item} compact={true} />
                ))}
              </div>
            </div>

            {/* Optional Detailed Inquiry Gateway */}
            <div className="pt-2 border-t border-[#363636]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-poppins">
              <span className="text-[#363636]/70 text-center sm:text-left rtl:sm:text-right">
                {language === 'ar'
                  ? 'لديك متطلبات نظام تفصيلية أو مواصفات محددة؟'
                  : 'Have specific system requirements or a detailed brief?'}
              </span>
              <button
                id="modal-open-detailed-form-btn"
                onClick={() => setViewMode('detailed')}
                className="font-semibold text-[#248a61] hover:text-[#1e7351] flex items-center gap-1.5 transition-colors cursor-pointer group shrink-0"
              >
                <span>{language === 'ar' ? 'نموذج استفسار مفصل' : 'Start Detailed Inquiry'}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ) : (
          /* ========================================================
             LEVEL 2: OPTIONAL DETAILED PROJECT INQUIRY FORM
          ======================================================== */
          <div className="space-y-5">
            {/* Header with Back button */}
            <div className="flex items-center justify-between border-b border-[#363636]/10 pb-4">
              <button
                onClick={() => setViewMode('quick')}
                className="flex items-center gap-1.5 text-xs font-poppins font-semibold uppercase tracking-wider text-[#363636]/70 hover:text-[#248a61] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
                <span>{language === 'ar' ? 'العودة للتواصل السريع' : 'Back to Quick Contact'}</span>
              </button>
              <span className="text-[10px] font-poppins uppercase tracking-widest text-[#248a61] font-bold">
                {language === 'ar' ? 'استفسار مفصل' : 'Detailed Inquiry'}
              </span>
            </div>

            <div>
              <h2
                id="contact-modal-title"
                className="text-2xl sm:text-3xl font-barlow font-black text-[#363636] uppercase tracking-tight"
              >
                {language === 'ar' ? 'متطلبات المشروع ونطاق العمل' : 'PROJECT REQUIREMENTS & SCOPE'}
              </h2>
              <p className="text-xs font-poppins text-[#363636]/75 mt-1">
                {language === 'ar'
                  ? 'حدد سياق مشروعك ثم أرسله مباشرة عبر واتساب أو تطبيق البريد الإلكتروني.'
                  : 'Fill in your project context. You can dispatch it directly through WhatsApp or your email client.'}
              </p>
            </div>

            <form onSubmit={handleDetailedSubmitWhatsApp} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-poppins text-[#363636]/80 font-semibold uppercase tracking-wider mb-1">
                    {language === 'ar' ? 'الاسم / الشركة *' : 'Your Name / Company *'}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (formErrors.name) setFormErrors({ ...formErrors, name: undefined });
                    }}
                    placeholder={language === 'ar' ? 'مثال: أحمد / شركة الرياض' : 'e.g. Alex Morgan / Tech Corp'}
                    className={`w-full px-4 py-2.5 rounded-xl bg-white/90 border ${
                      formErrors.name ? 'border-red-500' : 'border-[#363636]/15'
                    } focus:border-[#248a61] text-[#363636] text-sm focus:outline-none transition-colors`}
                  />
                  {formErrors.name && (
                    <p className="text-[11px] text-red-600 font-poppins mt-1">{formErrors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-poppins text-[#363636]/80 font-semibold uppercase tracking-wider mb-1">
                    {language === 'ar' ? 'البريد الإلكتروني *' : 'Email Address *'}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (formErrors.email) setFormErrors({ ...formErrors, email: undefined });
                    }}
                    placeholder="name@company.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-white/90 border ${
                      formErrors.email ? 'border-red-500' : 'border-[#363636]/15'
                    } focus:border-[#248a61] text-[#363636] text-sm focus:outline-none transition-colors`}
                  />
                  {formErrors.email && (
                    <p className="text-[11px] text-red-600 font-poppins mt-1">{formErrors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-poppins text-[#363636]/80 font-semibold uppercase tracking-wider mb-1">
                    {language === 'ar' ? 'رقم الهاتف / واتساب (اختياري)' : 'Phone / WhatsApp (Optional)'}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971-XX-XXX-XXXX"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-[#363636]/15 focus:border-[#248a61] text-[#363636] text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-poppins text-[#363636]/80 font-semibold uppercase tracking-wider mb-1">
                    {language === 'ar' ? 'نوع المشروع المطلوب' : 'What are you looking to build?'}
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-[#363636]/15 focus:border-[#248a61] text-[#363636] text-sm focus:outline-none transition-colors"
                  >
                    <option value="Full Stack Web Application">
                      {language === 'ar' ? 'تطبيق ويب متكامل (Full Stack)' : 'Full Stack Web Application'}
                    </option>
                    <option value="Bilingual Web Experience (EN/AR)">
                      {language === 'ar' ? 'موقع ثنائي اللغة (عربي / إنجليزي)' : 'Bilingual Web Experience (EN/AR)'}
                    </option>
                    <option value="ERP / Business System">
                      {language === 'ar' ? 'نظام إدارة أعمال / ERP' : 'ERP / Business System'}
                    </option>
                    <option value="Admin Dashboard & Portals">
                      {language === 'ar' ? 'لوحات تحكم وبوابات إدارة' : 'Admin Dashboard & Portals'}
                    </option>
                    <option value="API & Microservices">
                      {language === 'ar' ? 'واجهات برمجية APIs وبنية خلفية' : 'API & Microservices'}
                    </option>
                    <option value="Automation & Integration">
                      {language === 'ar' ? 'أتمتة وتكامل سير العمل' : 'Automation & Workflows'}
                    </option>
                    <option value="Software Developer Role">
                      {language === 'ar' ? 'فرصة عمل تطوير برمجيات / تعاقد' : 'Software Developer Role'}
                    </option>
                    <option value="Other">
                      {language === 'ar' ? 'أخرى' : 'Other'}
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-poppins text-[#363636]/80 font-semibold uppercase tracking-wider mb-1">
                  {language === 'ar' ? 'متطلبات وأهداف المشروع *' : 'Project Requirements & Goals *'}
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (formErrors.message) setFormErrors({ ...formErrors, message: undefined });
                  }}
                  placeholder={
                    language === 'ar'
                      ? 'حدد ما ترغب في بنائه، الجدول الزمني، التوافق الثنائي، أو أي تحديات تقنية محددة...'
                      : "Outline what you'd like to build, timelines, bilingual needs, or specific challenges..."
                  }
                  className={`w-full px-4 py-2.5 rounded-xl bg-white/90 border ${
                    formErrors.message ? 'border-red-500' : 'border-[#363636]/15'
                  } focus:border-[#248a61] text-[#363636] text-sm focus:outline-none transition-colors resize-none`}
                />
                {formErrors.message && (
                  <p className="text-[11px] text-red-600 font-poppins mt-1">{formErrors.message}</p>
                )}
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#248a61] hover:bg-[#1f7552] text-white text-xs font-poppins font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-[0_4px_16px_rgba(36,138,97,0.3)] cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{language === 'ar' ? 'إرسال عبر واتساب' : 'Send via WhatsApp'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleDetailedSubmitEmail}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#363636] hover:bg-[#248a61] text-white text-xs font-poppins font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>{language === 'ar' ? 'إرسال عبر البريد الإلكتروني' : 'Send via Email Client'}</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
