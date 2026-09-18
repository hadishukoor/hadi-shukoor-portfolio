import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, TranslationContent } from '../data/translations';

export type Language = 'en' | 'ar';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isRTL: boolean;
  t: TranslationContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_lang');
      if (saved === 'ar' || saved === 'en') {
        return saved;
      }
    }
    return 'en';
  });

  const isRTL = language === 'ar';
  const t = translations[language];

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_lang', lang);
    }
  };

  const toggleLanguage = () => {
    const next = language === 'en' ? 'ar' : 'en';
    setLanguage(next);
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

      // Update dynamic document title & meta tags
      if (language === 'ar') {
        document.title = 'محمد هادي شكور | مطور برمجيات';
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
          metaDesc.setAttribute(
            'content',
            'مطور برمجيات يبني تطبيقات ويب إنتاجية، واجهات برمجية REST APIs، منصات ERP وCRM للأعمال، وأتمتة مسارات العمل مع خبرة مشاريع دولية.'
          );
        }
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
          ogTitle.setAttribute('content', 'محمد هادي شكور | مطور برمجيات');
        }
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) {
          ogDesc.setAttribute(
            'content',
            'مطور برمجيات يبني تطبيقات ويب إنتاجية، واجهات برمجية REST APIs، منصات ERP وCRM للأعمال، وأتمتة مسارات العمل مع خبرة مشاريع دولية.'
          );
        }
      } else {
        document.title = 'Mohammad Hadi Shukoor | Software Developer';
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
          metaDesc.setAttribute(
            'content',
            'Software Developer building production web applications, REST APIs, business software, ERP/CRM platforms, and workflow automation.'
          );
        }
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
          ogTitle.setAttribute('content', 'Mohammad Hadi Shukoor | Software Developer');
        }
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) {
          ogDesc.setAttribute(
            'content',
            'Software Developer building production web applications, REST APIs, business software, ERP/CRM platforms, and workflow automation.'
          );
        }
      }
    }
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, isRTL, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
