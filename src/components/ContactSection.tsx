import React, { useState } from 'react';
import {
  MessageCircle,
  Mail,
  Phone,
  Copy,
  ArrowRight,
  ArrowUpRight,
  Linkedin,
  Instagram,
  Facebook,
} from 'lucide-react';
import { CONTACT_INFO } from '../data/profile';
import { SocialCard, SocialLinkData } from './SocialCard';
import { useLanguage } from '../context/LanguageContext';

interface ContactSectionProps {
  onOpenDetailedInquiry: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenDetailedInquiry }) => {
  const { language, t } = useLanguage();
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);

  const socialLinks: SocialLinkData[] = [
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
  ];

  const handleCopy = (type: 'email' | 'phone', text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(type);
    setTimeout(() => {
      setCopiedField((current) => (current === type ? null : current));
    }, 2200);
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      language === 'ar'
        ? 'مرحباً هادي، اطلعت على معرض أعمالك البرمجية وأود مناقشة مشروع برمجي معك.'
        : CONTACT_INFO.whatsappPrefillText
    );
    window.open(`${CONTACT_INFO.whatsappUrl}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const openEmail = () => {
    const subject = encodeURIComponent(
      language === 'ar' ? 'استفسار مشروع برمجي — هادي شكور' : CONTACT_INFO.emailSubject
    );
    const body = encodeURIComponent(
      language === 'ar'
        ? 'مرحباً هادي،\n\nأود مناقشة متطلبات مشروع برمجي معك:\n\nنوع المشروع:\nالجدول الزمني التقديري:\nالتفاصيل:'
        : CONTACT_INFO.emailBody
    );
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-[#ede6df] text-[#363636] border-t border-[#363636]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Editorial Container */}
        <div className="relative bg-[#f5ede4] border border-[#363636]/10 rounded-3xl p-6 sm:p-12 lg:p-16 shadow-xs overflow-hidden">
          {/* Subtle architectural background indicator */}
          <div className="absolute top-8 right-10 rtl:right-auto rtl:left-10 font-barlow font-black text-6xl sm:text-8xl text-[#363636]/5 select-none pointer-events-none">
            08
          </div>

          <div className="relative z-10 max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#248a61]" />
              <span className="text-[11px] font-poppins font-bold uppercase tracking-[0.25em] text-[#248a61]">
                {t.contact.eyebrow}
              </span>
            </div>

            <h2 className="font-barlow font-black text-3xl sm:text-5xl md:text-6xl text-[#363636] uppercase tracking-tight leading-none mb-4">
              {t.contact.titlePart1} <span className="text-[#248a61]">{t.contact.titlePart2}</span>
            </h2>

            <p className="text-sm sm:text-base font-poppins text-[#363636]/80 leading-relaxed font-light">
              {t.contact.description}
            </p>
          </div>

          {/* Primary Action Row: WhatsApp, Email, Phone, Detailed Inquiry */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {/* WhatsApp */}
            <div className="bg-[#ede6df] border border-[#363636]/10 hover:border-[#248a61] p-5 rounded-2xl transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#248a61]/10 text-[#248a61] flex items-center justify-center group-hover:bg-[#248a61] group-hover:text-white transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-poppins uppercase tracking-wider text-[#248a61] font-semibold">
                    {language === 'ar' ? 'موصى به' : 'RECOMMENDED'}
                  </span>
                </div>
                <h4 className="font-barlow font-bold text-base uppercase tracking-wide text-[#363636] mb-1">
                  WhatsApp
                </h4>
                <p className="text-xs font-poppins text-[#363636]/70 mb-4">
                  {t.contact.chatSub}
                </p>
              </div>
              <button
                id="contact-whatsapp-btn"
                onClick={openWhatsApp}
                className="w-full py-2.5 px-4 rounded-xl bg-[#248a61] hover:bg-[#1e7351] text-white text-xs font-poppins font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>{t.contact.openWhatsApp}</span>
                <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-[-90deg]" />
              </button>
            </div>

            {/* Email */}
            <div className="bg-[#ede6df] border border-[#363636]/10 hover:border-[#248a61] p-5 rounded-2xl transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#248a61]/10 text-[#248a61] flex items-center justify-center group-hover:bg-[#248a61] group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <button
                    onClick={() => handleCopy('email', CONTACT_INFO.email)}
                    className="text-[10px] font-poppins uppercase tracking-wider text-[#363636]/60 hover:text-[#248a61] flex items-center gap-1 transition-colors cursor-pointer"
                    title={t.contact.clickToCopy}
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copiedField === 'email' ? t.contact.copied : (language === 'ar' ? 'نسخ' : 'Copy')}</span>
                  </button>
                </div>
                <h4 className="font-barlow font-bold text-base uppercase tracking-wide text-[#363636] mb-1">
                  {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                </h4>
                <p className="text-xs font-poppins text-[#363636]/70 truncate mb-4" title={CONTACT_INFO.email}>
                  {CONTACT_INFO.email}
                </p>
              </div>
              <button
                id="contact-email-btn"
                onClick={openEmail}
                className="w-full py-2.5 px-4 rounded-xl bg-[#363636] hover:bg-[#248a61] text-white text-xs font-poppins font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>{t.contact.sendEmail}</span>
                <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-[-90deg]" />
              </button>
            </div>

            {/* Phone */}
            <div className="bg-[#ede6df] border border-[#363636]/10 hover:border-[#248a61] p-5 rounded-2xl transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#248a61]/10 text-[#248a61] flex items-center justify-center group-hover:bg-[#248a61] group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <button
                    onClick={() => handleCopy('phone', CONTACT_INFO.phoneFormatted)}
                    className="text-[10px] font-poppins uppercase tracking-wider text-[#363636]/60 hover:text-[#248a61] flex items-center gap-1 transition-colors cursor-pointer"
                    title={t.contact.clickToCopy}
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copiedField === 'phone' ? t.contact.copied : (language === 'ar' ? 'نسخ' : 'Copy')}</span>
                  </button>
                </div>
                <h4 className="font-barlow font-bold text-base uppercase tracking-wide text-[#363636] mb-1">
                  {t.contact.callDirect}
                </h4>
                <p className="text-xs font-poppins text-[#363636]/70 mb-4 font-mono" dir="ltr">
                  {CONTACT_INFO.phoneFormatted}
                </p>
              </div>
              <a
                id="contact-call-btn"
                href={`tel:${CONTACT_INFO.phone}`}
                className="w-full py-2.5 px-4 rounded-xl border border-[#363636]/20 hover:border-[#248a61] hover:bg-[#248a61]/10 text-[#363636] hover:text-[#248a61] text-xs font-poppins font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.contact.callDirect}</span>
                <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-[-90deg]" />
              </a>
            </div>

            {/* Detailed Project Inquiry Modal Trigger */}
            <div className="bg-[#ede6df] border border-[#363636]/10 hover:border-[#248a61] p-5 rounded-2xl transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#248a61]/10 text-[#248a61] flex items-center justify-center group-hover:bg-[#248a61] group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </div>
                  <span className="text-[10px] font-poppins uppercase tracking-wider text-[#363636]/50">
                    {language === 'ar' ? 'مخصص' : 'Structured'}
                  </span>
                </div>
                <h4 className="font-barlow font-bold text-base uppercase tracking-wide text-[#363636] mb-1">
                  {t.contact.detailedPrompt}
                </h4>
                <p className="text-xs font-poppins text-[#363636]/70 mb-4">
                  {language === 'ar' ? 'متطلبات النظام والجدول الزمني' : 'System specs, timeline & scope'}
                </p>
              </div>
              <button
                id="contact-detailed-form-btn"
                onClick={onOpenDetailedInquiry}
                className="w-full py-2.5 px-4 rounded-xl bg-transparent hover:bg-[#363636] border border-[#363636] text-[#363636] hover:text-white text-xs font-poppins font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.contact.openInquiryForm}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </button>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="border-t border-[#363636]/10 pt-10">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-poppins font-bold uppercase tracking-[0.2em] text-[#248a61]">
                {language === 'ar' ? 'حسابات التواصل المهني' : 'Social Profiles'}
              </span>
              <span className="text-xs font-poppins text-[#363636]/60">
                {t.contact.channelsLabel}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {socialLinks.map((social) => (
                <SocialCard key={social.platform} data={social} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
