import { ArrowUpRight, CheckCircle2, Globe } from 'lucide-react';
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
    <article className="group relative flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--project-background)] p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-md">
      <div>
        {/* Top bar: Category Badge + External link indicator */}
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {'badge' in project && (
              <span className="rounded-md border border-[var(--border)] bg-[var(--badge-background)] px-2.5 py-1 text-[.68rem] font-mono font-medium tracking-tight text-[var(--secondary)]">
                {project.badge}
              </span>
            )}
            {isExternal && (
              <span className="inline-flex items-center gap-1 rounded-md border border-[var(--border)] bg-[var(--card-background)] px-2 py-0.5 text-[.65rem] font-mono text-[var(--secondary)]">
                <Globe size={10} /> Live
              </span>
            )}
          </div>

          <a
            className="grid size-8 shrink-0 place-items-center rounded-lg border border-[var(--border)] bg-[var(--card-background)] text-[var(--secondary)] transition-all duration-200 group-hover:border-zinc-400 group-hover:text-[var(--foreground)] dark:group-hover:border-zinc-600"
            href={project.href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noreferrer' : undefined}
            aria-label={`${text.openProject} ${title}`}
          >
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Project Title */}
        <h3 className="m-0 text-[1.08rem] font-bold tracking-tight text-[var(--foreground)]">
          <a
            href={project.href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noreferrer' : undefined}
            className="hover:underline underline-offset-4"
          >
            {title}
          </a>
        </h3>

        {/* Key Highlights */}
        {'highlights' in project && (
          <div className="mt-2.5 flex items-start gap-1.5 text-[.76rem] font-medium text-[var(--secondary)]">
            <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-[var(--muted)]" />
            <span>{localize(project.highlights, locale)}</span>
          </div>
        )}

        {/* Project Description */}
        <p className="mt-3 text-[.86rem] leading-relaxed text-[var(--secondary)]">
          {localize(project.description, locale)}
        </p>
      </div>

      {/* Tech Stack Chips */}
      <div className="mt-5 border-t border-[var(--border)] pt-4">
        <ul
          className="m-0 flex list-none flex-wrap gap-1.5 p-0"
          aria-label={text.technologies}
        >
          {project.tags.map((tag) => (
            <li
              className="rounded border border-[var(--border)] bg-[var(--chip-background)] px-2 py-0.5 text-[.7rem] font-mono text-[var(--secondary)]"
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