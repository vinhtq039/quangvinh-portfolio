import { CheckCircle2, Workflow } from 'lucide-react';
import type { Locale } from '@/data/portfolio';
import { experiences, localize, uiText } from '@/data/portfolio';

type ExperienceProps = {
  locale: Locale;
};

export function Experience({ locale }: ExperienceProps) {
  const text = uiText[locale];

  return (
    <article
      className="min-w-0 scroll-mt-[90px] rounded-2xl border border-[var(--border)] bg-[var(--detail-background)] px-[19px] py-[21px] shadow-xs min-[621px]:rounded-[18px] min-[621px]:px-[27px] min-[621px]:pt-[25px] min-[621px]:pb-6"
      id="experience"
    >
      <header className="mb-[22px] flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-xl border border-[var(--border)] bg-[var(--card-background)] text-[var(--foreground)]">
            <Workflow size={18} />
          </span>
          <h2 className="m-0 text-[1.22rem] font-bold tracking-tight text-[var(--foreground)] min-[391px]:text-[1.32rem]">
            {text.experienceTitle}
          </h2>
        </div>
        <span className="text-[.72rem] font-mono text-[var(--secondary)]">
          06/2022 – Hiện tại
        </span>
      </header>

      <ol className="relative m-0 grid list-none gap-7 p-0 before:absolute before:top-3 before:bottom-3 before:left-2 before:w-px before:bg-[var(--border)] before:content-[''] min-[621px]:before:left-[118px]">
        {experiences.map((experience) => (
          <li
            className="relative grid grid-cols-[16px_minmax(0,1fr)] items-start gap-x-3 min-[621px]:grid-cols-[100px_16px_minmax(0,1fr)] min-[621px]:gap-x-3.5"
            key={experience.company}
          >
            {/* Timeline date */}
            <time className="col-start-2 row-start-1 pb-1 text-[.74rem] font-mono font-medium whitespace-nowrap text-[var(--secondary)] min-[621px]:col-start-1 min-[621px]:row-start-1 min-[621px]:pt-0.5 min-[621px]:pb-0">
              {localize(experience.period, locale)}
            </time>

            {/* Timeline dot */}
            <span className="z-[1] col-start-1 row-start-1 row-span-2 mx-auto mt-1.5 size-2.5 rounded-full bg-[var(--foreground)] border-2 border-[var(--background)] min-[621px]:col-start-2 min-[621px]:row-span-1" />

            {/* Content body */}
            <div className="col-start-2 row-start-2 min-w-0 min-[621px]:col-start-3 min-[621px]:row-start-1">
              <div className="block min-[621px]:flex min-[621px]:items-baseline min-[621px]:justify-between min-[621px]:gap-3">
                <h3 className="m-0 text-[.92rem] leading-snug font-bold text-[var(--foreground)]">
                  {localize(experience.role, locale)}
                </h3>
                <span className="mt-0.5 inline-block rounded-md border border-[var(--border)] bg-[var(--badge-background)] px-2 py-0.5 text-[.7rem] font-mono font-medium text-[var(--foreground)] min-[621px]:mt-0">
                  {experience.company}
                </span>
              </div>

              {/* Responsibilities bullets from CV */}
              <ul className="mt-2.5 mb-0 grid list-none gap-2 p-0 text-[.79rem] leading-relaxed text-[var(--secondary)]">
                {experience.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2
                      size={13}
                      className="mt-1 shrink-0 text-[var(--muted)]"
                    />
                    <span>{localize(bullet, locale)}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies chip list */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-[var(--border)] bg-[var(--chip-background)] px-2 py-0.5 text-[.68rem] font-mono text-[var(--secondary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}