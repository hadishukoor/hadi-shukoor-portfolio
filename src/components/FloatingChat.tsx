import React from 'react';
import { MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FloatingChatProps {
  onOpenContact: () => void;
}

export const FloatingChat: React.FC<FloatingChatProps> = ({ onOpenContact }) => {
  const { language } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-40 flex items-center gap-2">
      <button
        id="floating-message-hadi-btn"
        onClick={onOpenContact}
        className="group relative flex items-center gap-2.5 bg-[#248a61] hover:bg-[#1e7351] text-white px-4 py-3 rounded-full shadow-[0_4px_25px_rgba(36,138,97,0.45)] hover:shadow-[0_6px_32px_rgba(36,138,97,0.65)] transition-all duration-300 hover:scale-105 cursor-pointer"
        aria-label="Open contact and connection options for Mohammad Hadi Shukoor"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
        </span>
        <MessageSquare className="w-4 h-4 text-white transition-transform duration-300 group-hover:scale-110" />
        <span className="text-xs font-poppins font-bold uppercase tracking-wider hidden sm:inline-block">
          {language === 'ar' ? 'مراسلة هادي' : 'Message Hadi'}
        </span>
      </button>
    </div>
  );
};
