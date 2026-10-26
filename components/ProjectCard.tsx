import { ExternalLink, Globe } from 'lucide-react';
import Image from 'next/image';
import type { Locale, Project } from '@/data/portfolio';
import { localize, uiText } from '@/data/portfolio';

type ProjectCardProps = {
  locale: Locale;
  project: Project;
};

export function ProjectCard({ locale, project }: ProjectCardProps) {
  const text = uiText[locale];
  const title = localize(project.title, locale);
  const isExternal = project.href.startsWith('http');

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-[18px] border border-[var(--border)] bg-[var(--project-background)] shadow-[0_18px_45px_rgba(0,0,0,.14),inset_0_1px_0_rgba(255,255,255,.025)] transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-[5px] hover:border-[rgba(104,135,255,.34)] hover:shadow-[0_24px_55px_rgba(0,0,0,.22),0_0_32px_rgba(72,90,225,.07)]">
      <div>
        <div className="relative mx-[13px] mt-[13px] overflow-hidden rounded-xl bg-[#131b2e]">
          <a
            className="block aspect-[16/8.8] overflow-hidden"
            href={project.href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noreferrer' : undefined}
            aria-label={`${text.viewProject} ${title}`}
          >
            <Image
              className="block size-full object-cover transition-transform duration-[400ms] group-hover:scale-[1.035]"
              src={project.image}
              alt={`${text.viewProject}: ${title}`}
              fill
              sizes="(max-width: 620px) calc(100vw - 58px), (max-width: 850px) 42vw, (max-width: 1280px) 33vw, 390px"
            />
          </a>

          {/* Project Badge */}
          {'badge' in project && (
            <div className="absolute top-2.5 left-2.5 z-10">
              <span className="rounded-full border border-white/20 bg-black/60 px-2.5 py-1 text-[.68rem] font-medium tracking-tight text-white backdrop-blur-md shadow-sm">
                {project.badge}
              </span>
            </div>
          )}

          {isExternal && (
            <div className="absolute top-2.5 right-2.5 z-10">
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-950/70 px-2 py-0.5 text-[.65rem] font-semibold text-emerald-300 backdrop-blur-md">
                <Globe size={10} /> Live
              </span>
            </div>
          )}
        </div>

        <div className="p-[15px_17px_14px]">
          <div className="flex items-start justify-between gap-3">
            <h3 className="m-0 text-[.95rem] leading-[1.35] font-bold tracking-[-.015em] text-[var(--project-title)]">
              {title}
            </h3>
            <a
              className="grid size-[32px] shrink-0 place-items-center rounded-full border border-[var(--border)] text-[var(--secondary)] transition-[color,border-color,transform] duration-200 hover:rotate-[4deg] hover:border-[rgba(112,164,255,.43)] hover:text-[var(--accent-icon-hover)]"
              href={project.href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noreferrer' : undefined}
              aria-label={`${text.openProject} ${title}`}
            >
              <ExternalLink size={16} />
            </a>
          </div>

          <p className="mt-2 mb-2 text-[.84rem] leading-[1.55] text-[var(--secondary)]">
            {localize(project.description, locale)}
          </p>

          {'highlights' in project && (
            <div className="mb-3 rounded-lg border border-[var(--border)] bg-white/[.02] px-2.5 py-1.5 text-[.74rem] text-[var(--accent-link)] font-medium">
              ⚡ {localize(project.highlights, locale)}
            </div>
          )}
        </div>
      </div>

      <div className="px-[17px] pb-[17px]">
        <ul
          className="m-0 flex list-none flex-wrap gap-1.5 p-0"
          aria-label={text.technologies}
        >
          {project.tags.map((tag) => (
            <li
              className="rounded-md border border-[var(--border)] bg-[rgba(102,115,190,.07)] px-2.5 py-1 text-[.7rem] font-medium text-[var(--chip-text)]"
              key={tag}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}