import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PROFILE } from '../data/profile';

interface NavbarProps {
  onOpenContact: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onNavigate, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation: ESC closes mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: t.nav.philosophy, id: 'philosophy' },
    { label: t.nav.about, id: 'about' },
    { label: t.nav.experience, id: 'experience' },
    { label: t.nav.work, id: 'work' },
    { label: t.nav.stack, id: 'stack' },
    { label: t.nav.contact, id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#e3d9d1]/95 backdrop-blur-md py-3 border-b border-[#363636]/10 shadow-xs'
            : 'bg-[#e3d9d1]/85 backdrop-blur-xs py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Header Identity */}
          <div
            id="nav-logo-btn"
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer select-none group shrink-0"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleLinkClick('hero');
            }}
            aria-label={language === 'ar' ? 'هادي شكور — مهندس برمجيات' : 'Hadi Shukoor — Full Stack Software Engineer'}
          >
            {/* HS Brand Monogram Mark */}
            <img
              src={PROFILE.brandLogo}
              alt="HS Monogram"
              width="36"
              height="36"
              className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col justify-center">
              <span className="font-barlow font-black tracking-tight text-lg sm:text-xl md:text-2xl text-[#363636] uppercase group-hover:text-[#248a61] transition-colors leading-none">
                {language === 'ar' ? 'هادي شكور' : 'HADI SHUKOOR'}
              </span>
              <span className="text-[8.5px] sm:text-[9.5px] md:text-[10px] font-poppins font-semibold tracking-[0.16em] sm:tracking-[0.2em] text-[#248a61] uppercase leading-tight pt-1">
                {t.hero.role}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-[11px] font-poppins font-semibold tracking-[0.2em] text-[#363636]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`relative py-1 transition-colors duration-300 hover:text-[#248a61] cursor-pointer group uppercase ${
                  activeSection === link.id ? 'text-[#248a61]' : ''
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 right-0 h-[2px] bg-[#248a61] transition-all duration-300 ${
                    activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* Actions: Language Switcher & Let's Build Button */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* Language Switcher Pill */}
            <div className="flex items-center bg-[#ede6df] border border-[#363636]/15 rounded-full p-0.5 shadow-2xs">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-full text-[10px] font-poppins font-bold tracking-wider transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#363636] text-[#e3d9d1] shadow-2xs'
                    : 'text-[#363636]/70 hover:text-[#363636]'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('ar')}
                className={`px-2.5 py-1 rounded-full text-[10px] font-tajawal font-bold tracking-normal transition-all cursor-pointer ${
                  language === 'ar'
                    ? 'bg-[#248a61] text-white shadow-2xs'
                    : 'text-[#363636]/70 hover:text-[#363636]'
                }`}
                aria-label="التبديل إلى اللغة العربية"
              >
                العربية
              </button>
            </div>

            {/* Let's Build CTA */}
            <button
              id="nav-lets-build-btn"
              onClick={onOpenContact}
              className="relative hidden sm:flex items-center gap-2 bg-[#248a61] hover:bg-[#1f7552] text-white px-4.5 py-2.5 rounded-full text-xs font-poppins font-semibold tracking-[0.16em] uppercase transition-all duration-300 hover:scale-105 shadow-[0_4px_16px_rgba(36,138,97,0.3)] hover:shadow-[0_6px_22px_rgba(36,138,97,0.45)] cursor-pointer"
            >
              <span>{t.nav.letsBuild}</span>
              <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-[-90deg] transition-transform" />
            </button>

            {/* Mobile hamburger */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#363636] hover:text-[#248a61] transition-colors cursor-pointer"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`fixed inset-0 z-40 bg-[#e3d9d1] flex flex-col justify-center items-center gap-7 transition-all duration-300 lg:hidden border-b border-[#363636]/10 px-6 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Mobile Language Switcher Inside Drawer */}
        <div className="flex items-center gap-2 bg-[#ede6df] border border-[#363636]/15 rounded-full p-1 shadow-xs mb-2">
          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={`px-4 py-1.5 rounded-full text-xs font-poppins font-bold tracking-wider transition-all ${
              language === 'en' ? 'bg-[#363636] text-[#e3d9d1]' : 'text-[#363636]/70'
            }`}
          >
            English
          </button>
          <button
            type="button"
            onClick={() => setLanguage('ar')}
            className={`px-4 py-1.5 rounded-full text-xs font-tajawal font-bold transition-all ${
              language === 'ar' ? 'bg-[#248a61] text-white' : 'text-[#363636]/70'
            }`}
          >
            العربية
          </button>
        </div>

        <div className="flex flex-col items-center gap-4.5 text-lg font-poppins font-bold tracking-[0.18em] text-[#363636]">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="hover:text-[#248a61] transition-colors py-1 uppercase"
            >
              {link.label}
            </button>
          ))}
          <button
            id="mobile-lets-build-btn"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="mt-3 bg-[#248a61] hover:bg-[#1f7552] text-white px-8 py-3.5 rounded-full text-xs font-poppins font-semibold tracking-[0.15em] uppercase shadow-md transition-all flex items-center gap-2"
          >
            <span>{t.nav.letsBuild}</span>
            <ArrowUpRight className="w-4 h-4 rtl:rotate-[-90deg]" />
          </button>
        </div>
      </div>
    </>
  );
};
