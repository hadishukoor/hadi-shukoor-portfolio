import React from 'react';
import { Linkedin, Instagram, Facebook, MessageCircle, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO, PROFILE } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenContact }) => {
  const { language, t } = useLanguage();

  return (
    <footer className="relative bg-[#2e2e2e] text-[#e3d9d1] pt-16 pb-12 border-t border-white/5 z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          {/* Brand & Positioning (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#248a61]" />
              <h3 className="font-barlow font-black text-2xl tracking-wider uppercase text-white">
                {language === 'ar' ? 'محمد هادي شكور' : 'MOHAMMAD HADI SHUKOOR'}
              </h3>
            </div>
            <p className="text-xs font-poppins uppercase tracking-[0.2em] text-[#248a61] font-semibold">
              {t.hero.role}
            </p>
            <p className="text-sm font-poppins text-[#e3d9d1]/75 leading-relaxed max-w-sm">
              {language === 'ar'
                ? 'مهندس برمجيات متخصص في بناء تطبيقات الويب المتكاملة، وأنظمة إدارة الأعمال ERP، وواجهات REST APIs القابلة للتوسع. تحويل متطلبات الأعمال المعقدة إلى برمجيات حية وموثوقة.'
                : 'Engineering full-stack web applications, ERP architectures, and scalable REST APIs. Transforming business requirements into resilient, verified running code.'}
            </p>

            {/* Social / Direct Channels */}
            <div className="flex items-center gap-2.5 pt-2">
              {/* WhatsApp */}
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#248a61] text-[#e3d9d1] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Connect on WhatsApp"
                title={`WhatsApp: ${CONTACT_INFO.phoneFormatted}`}
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              {/* LinkedIn */}
              <a
                href={CONTACT_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#248a61] text-[#e3d9d1] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn Profile"
                title={`LinkedIn: ${CONTACT_INFO.linkedinHandle}`}
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* Instagram */}
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#248a61] text-[#e3d9d1] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram Profile"
                title={`Instagram: @${CONTACT_INFO.instagramHandle}`}
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* Facebook */}
              <a
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#248a61] text-[#e3d9d1] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook Profile"
                title={`Facebook: /${CONTACT_INFO.facebookHandle}`}
              >
                <Facebook className="w-4 h-4" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#248a61] text-[#e3d9d1] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Send Email"
                title={`Email: ${CONTACT_INFO.email}`}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Core Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-poppins font-semibold uppercase tracking-[0.2em] text-[#248a61]">
              {language === 'ar' ? 'فهرس الأقسام' : 'Architecture Navigation'}
            </h4>
            <ul className="space-y-2.5 text-xs font-poppins text-[#e3d9d1]/70">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-[#248a61] transition-colors cursor-pointer"
                >
                  {language === 'ar' ? 'البداية والتقديم' : 'Overview & Hero'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#248a61] transition-colors cursor-pointer"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('work')}
                  className="hover:text-[#248a61] transition-colors cursor-pointer"
                >
                  {t.nav.work}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('experience')}
                  className="hover:text-[#248a61] transition-colors cursor-pointer"
                >
                  {t.nav.experience}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('workflow')}
                  className="hover:text-[#248a61] transition-colors cursor-pointer"
                >
                  {t.nav.workflow}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('territory')}
                  className="hover:text-[#248a61] transition-colors cursor-pointer"
                >
                  {language === 'ar' ? 'قطاعات الهندسة' : 'Engineering Focus'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('stack')}
                  className="hover:text-[#248a61] transition-colors cursor-pointer"
                >
                  {t.nav.stack}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#248a61] transition-colors cursor-pointer"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Direct (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-poppins font-semibold uppercase tracking-[0.2em] text-[#248a61]">
              {language === 'ar' ? 'قنوات التواصل المباشر' : 'Direct Channels'}
            </h4>
            <ul className="space-y-2.5 text-xs font-poppins text-[#e3d9d1]/75">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#248a61] mt-0.5 shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-[#248a61] transition-colors font-medium"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#248a61] mt-0.5 shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="hover:text-[#248a61] transition-colors font-mono"
                  dir="ltr"
                >
                  {CONTACT_INFO.phoneFormatted}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#248a61] mt-0.5 shrink-0" />
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#248a61] transition-colors font-mono"
                  dir="ltr"
                >
                  WhatsApp: {CONTACT_INFO.phoneFormatted}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#248a61] mt-0.5 shrink-0" />
                <span>{language === 'ar' ? 'كانور، كيرالا، الهند' : PROFILE.location}</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="px-5 py-2.5 rounded-full bg-[#248a61] hover:bg-[#1f7552] text-white text-xs font-poppins font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>{language === 'ar' ? 'تواصل مع هادي' : 'Connect with Hadi'}</span>
                <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-[-90deg]" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-poppins text-[#e3d9d1]/40">
          <p>
            {language === 'ar'
              ? `© ${new Date().getFullYear()} محمد هادي شكور. تم تصميم وتطوير الأنظمة بدقة واحترافية.`
              : `© ${new Date().getFullYear()} Mohammad Hadi Shukoor. All systems engineered with precision.`}
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>{t.hero.role}</span>
            <span>•</span>
            <span className="text-[#248a61]">
              {language === 'ar' ? 'متاح للتعاقد والمشاريع' : 'Open to Opportunities'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
