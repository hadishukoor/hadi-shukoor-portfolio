import React from 'react';
import { MagnavoltGallery } from './MagnavoltGallery';
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../data/work';
import { useLanguage } from '../context/LanguageContext';

const actionClass = 'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#248a61]';

function Architecture({ project }: { project: ProjectItem }) {
  const content = project.presentation!;
  return (
    <figure className="rounded-2xl border border-[#248a61]/25 bg-[#363636] p-5 sm:p-6 text-[#ede6df]">
      <figcaption className="text-sm font-semibold text-[#9ac7b3] mb-4">{content.architectureTitle}</figcaption>
      <ol className="space-y-2">
        {content.architectureSteps.map((step, index) => (
          <li key={step} className="flex items-start gap-3 rounded-lg bg-white/5 p-3 text-sm">
            <span className="text-[#9ac7b3] shrink-0" aria-hidden="true">{index + 1}.</span>
            <span className="min-w-0 break-words"><bdi>{step}</bdi></span>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-xs leading-relaxed text-[#ede6df]/80">{content.architectureNote}</p>
    </figure>
  );
}

export const ProjectCard: React.FC<{ project: ProjectItem; onOpen: () => void; featured?: boolean }> = ({ project, onOpen, featured = false }) => {
  const { language } = useLanguage();
  const ar = language === 'ar';
  const content = project.presentation!;
  return (
    <article className={`min-w-0 rounded-3xl bg-[#ede6df] border ${featured ? 'border-2 border-[#248a61]/30' : 'border-[#248a61]/25'} p-6 sm:p-8 ${featured ? 'md:p-12' : ''} font-poppins shadow-sm`}>
      <div className="flex flex-wrap items-start gap-3 mb-5">
        <span className="rounded-full bg-[#248a61] text-white px-3 py-1 text-xs leading-relaxed font-semibold">{project.status}</span>
        <span className="text-xs leading-relaxed text-[#363636]/75">{project.category}</span>
      </div>
      <div className={featured ? 'grid lg:grid-cols-2 gap-8 items-start' : 'space-y-5'}>
        <div className="min-w-0 space-y-4">
          <h3 className="font-barlow text-3xl sm:text-4xl font-black leading-tight break-words text-[#363636]">{project.title}</h3>
          {project.headline && <p className="text-lg font-semibold leading-snug text-[#248a61]">{project.headline}</p>}
          <p className="text-sm font-semibold leading-relaxed text-[#363636]">{project.role}</p>
          {content.secondaryStatus && <p className="text-sm text-[#248a61] font-semibold">{content.secondaryStatus}</p>}
          <p className="text-sm sm:text-base leading-relaxed text-[#363636]/85">{project.summary}</p>
          <div>
            <p className="text-xs font-semibold text-[#363636]/75 mb-2">{project.isUpcoming ? (ar ? 'التقنيات المقترحة' : 'Proposed stack') : (ar ? 'التقنيات المستخدمة' : 'Stack')}</p>
            <ul className="flex flex-wrap gap-2">
              {project.stack.map(tech => <li key={tech} className="rounded-md bg-[#363636]/5 px-2.5 py-1 text-xs text-[#363636]"><bdi>{tech}</bdi></li>)}
            </ul>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className={`${actionClass} bg-[#363636] text-white hover:bg-[#248a61]`}>{ar ? 'زيارة الموقع' : 'View Website'}<ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" /></a>}
            <button id={featured ? 'magnavolt-case-study-btn' : 'gem-project-concept-btn'} onClick={onOpen} className={`${actionClass} bg-[#248a61] text-white hover:bg-[#1b6a4a] cursor-pointer`}>{content.action}</button>
          </div>
        </div>
        {featured && <Architecture project={project} />}
      </div>
    </article>
  );
}

export function ProjectDetails({ project }: { project: ProjectItem }) {
  const { language } = useLanguage();
  const ar = language === 'ar';
  const content = project.presentation!;
  return (
    <div className="space-y-6 font-poppins min-w-0 text-[#363636]">
      <header className="pe-12 space-y-3">
        <p className="text-sm font-semibold text-[#248a61]">{project.status}</p>
        {content.secondaryStatus && <p className="text-sm">{content.secondaryStatus}</p>}
        <h3 className="font-barlow text-2xl sm:text-3xl md:text-4xl font-black leading-tight break-words">{content.fullTitle}</h3>
        <p className="text-sm leading-relaxed">{content.detailRole || project.role}</p>
      </header>
      <section className="space-y-3">
        <h4 className="text-lg font-semibold">{ar ? 'نظرة عامة' : 'Overview'}</h4>
        {project.detailedDescription.map(text => <p key={text} className="text-sm sm:text-base leading-relaxed">{text}</p>)}
      </section>
      {project.id === 'magnavolt-erp' && <MagnavoltGallery />}
      <div className="divide-y divide-[#363636]/15 border-y border-[#363636]/15">
        {project.caseStudySections?.map((section, index) => (
          <details key={section.title} open={index === 0} className="py-4">
            <summary className="cursor-pointer text-base font-semibold leading-relaxed focus-visible:outline-2 focus-visible:outline-[#248a61]">{section.title}</summary>
            <ul className="mt-4 space-y-3 list-disc ps-5 text-sm sm:text-base leading-relaxed">
              {section.points.map(point => <li key={point}>{point}</li>)}
            </ul>
          </details>
        ))}
      </div>
      <Architecture project={project} />
      <section className="space-y-3">
        <h4 className="text-lg font-semibold">{project.isUpcoming ? (ar ? 'التقنيات المقترحة — لم تُنفذ بعد' : 'Proposed stack — not implemented') : (ar ? 'التقنيات المستخدمة' : 'Technology stack')}</h4>
        <ul className="flex flex-wrap gap-2">{content.technologies.map(tech => <li key={tech} className="max-w-full rounded-lg bg-white/60 px-3 py-2 text-sm break-words"><bdi>{tech}</bdi></li>)}</ul>
      </section>
      {!!content.links?.length && <section className="space-y-4">
        <h4 className="text-lg font-semibold">{ar ? 'روابط المشروع' : 'Public links'}</h4>
        {content.links.map(link => <div key={link.url} className="space-y-1">
          <a href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#1b6a4a] font-semibold underline underline-offset-4">{link.label}<ArrowUpRight className="w-4 h-4" aria-hidden="true" /></a>
          <p className="text-xs break-all"><bdi dir="ltr">{link.url}</bdi></p>
          {link.note && <p className="text-sm leading-relaxed">{link.note}</p>}
        </div>)}
      </section>}
    </div>
  );
}
