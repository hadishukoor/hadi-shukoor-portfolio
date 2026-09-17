import React from 'react';
import { getSkillCategories } from '../data/skills';
import { useLanguage } from '../context/LanguageContext';
import { Layers, Server, Database, Shield, Wrench, Code2 } from 'lucide-react';

export const StackSection: React.FC = () => {
  const { language, t } = useLanguage();
  const categories = getSkillCategories(language);

  const getCategoryIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Layers className="w-5 h-5 text-[#248a61]" />;
      case 1:
        return <Server className="w-5 h-5 text-[#248a61]" />;
      case 2:
        return <Database className="w-5 h-5 text-[#248a61]" />;
      case 3:
        return <Shield className="w-5 h-5 text-[#248a61]" />;
      case 4:
        return <Wrench className="w-5 h-5 text-[#248a61]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#248a61]" />;
    }
  };

  return (
    <section
      id="stack"
      className="relative w-full bg-[#e3d9d1] py-24 md:py-32 px-4 sm:px-6 md:px-12 border-t border-[#363636]/10 z-20"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#363636]/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[#248a61] text-xs font-poppins font-bold tracking-[0.25em] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#248a61]" />
              <span>{t.stack.eyebrow}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-barlow font-black text-[#363636] uppercase tracking-tight leading-none">
              {t.stack.titlePart1} <span className="text-[#248a61]">{t.stack.titlePart2}</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-poppins text-[#363636]/75 max-w-md leading-relaxed">
            {t.stack.description}
          </p>
        </div>

        {/* 6 Grid Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={cat.title}
              className="bg-[#ede6df] border border-[#363636]/10 hover:border-[#248a61]/60 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/70 border border-[#363636]/10">
                    {getCategoryIcon(idx)}
                  </div>
                  <span className="text-xs font-barlow font-bold text-[#363636]/40 uppercase tracking-widest">
                    {language === 'ar' ? `المجال 0${idx + 1}` : `Category 0${idx + 1}`}
                  </span>
                </div>

                <h3 className="text-xl font-barlow font-black text-[#363636] uppercase tracking-tight mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs font-poppins text-[#363636]/70 leading-relaxed mb-6">
                  {cat.description}
                </p>

                <div className="space-y-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-xl bg-white/60 border border-[#363636]/10 flex items-center justify-between text-xs font-poppins"
                    >
                      <span className="font-semibold text-[#363636]">{skill.name}</span>
                      <span className="text-[10px] font-medium text-[#248a61] uppercase tracking-wider">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-[#363636]/10 flex items-center justify-between text-[11px] font-poppins text-[#363636]/60">
                <span>{language === 'ar' ? 'معايير الإنتاج' : 'Production Grade'}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#248a61]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
