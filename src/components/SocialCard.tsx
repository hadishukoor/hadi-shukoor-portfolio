import React from 'react';
import { ArrowUpRight, LucideIcon } from 'lucide-react';

export interface SocialLinkData {
  number: string;
  platform: string;
  handle: string;
  href: string;
  icon: LucideIcon;
  ariaLabel: string;
}

interface SocialCardProps {
  data: SocialLinkData;
  compact?: boolean;
}

export const SocialCard: React.FC<SocialCardProps> = ({ data, compact = false }) => {
  const Icon = data.icon;
  return (
    <a
      href={data.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={data.ariaLabel}
      className={`group flex items-center justify-between ${
        compact ? 'p-3.5 rounded-2xl' : 'p-4 rounded-2xl'
      } bg-white/60 hover:bg-white border border-[#363636]/10 hover:border-[#248a61]/50 transition-all duration-300 hover:-translate-y-0.5`}
    >
      <div className="flex items-center gap-3.5 min-w-0">
        {/* Recognizable icon container with portfolio color system */}
        <div
          className={`${
            compact ? 'w-8 h-8' : 'w-9 h-9'
          } rounded-xl bg-[#363636]/5 group-hover:bg-[#248a61]/10 flex items-center justify-center shrink-0 transition-colors duration-300`}
        >
          <Icon className="w-4 h-4 text-[#363636] group-hover:text-[#248a61] transition-all duration-300 group-hover:scale-105" />
        </div>
        <div className="min-w-0">
          <span className="text-[10px] font-mono text-[#363636]/50 group-hover:text-[#248a61] transition-colors block leading-tight">
            {data.number} / {data.platform}
          </span>
          <span className="font-poppins text-xs font-semibold text-[#363636] group-hover:text-[#248a61] transition-colors truncate block pt-0.5">
            {data.handle}
          </span>
        </div>
      </div>
      <ArrowUpRight className="w-4 h-4 text-[#363636]/40 group-hover:text-[#248a61] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 ml-2" />
    </a>
  );
};
