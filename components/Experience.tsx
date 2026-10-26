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
      className="min-w-0 scroll-mt-[90px] rounded-2xl border border-[var(--border)] bg-[var(--detail-background)] px-[19px] py-[21px] shadow-[inset_0_1px_0_rgba(255,255,255,.02)] min-[621px]:rounded-[18px] min-[621px]:px-[27px] min-[621px]:pt-[25px] min-[621px]:pb-6"
      id="experience"
    >
      <header className="mb-[22px] flex items-center justify-between gap-3">
        <div className="flex items-center gap-[13px]">
          <span className="grid size-[37px] place-items-center rounded-[11px] border border-[rgba(108,118,255,.16)] bg-[linear-gradient(145deg,rgba(97,91,255,.15),rgba(79,165,255,.07))] text-[var(--accent-icon)]">
            <Workflow size={20} />
          </span>
          <h2 className="m-0 text-[1.25rem] leading-[1.2] font-[720] tracking-[-.035em] text-[var(--foreground)] min-[391px]:text-[1.38rem]">
            {text.experienceTitle}
          </h2>
        </div>
        <span className="text-[.76rem] font-medium text-[var(--secondary)]">
          06/2022 – Hiện tại
        </span>
      </header>

      <ol className="relative m-0 grid list-none gap-7 p-0 before:absolute before:top-3 before:bottom-3 before:left-2 before:w-px before:bg-[linear-gradient(#8174ff,rgba(91,140,255,.18))] before:content-[''] min-[621px]:before:left-[118px]">
        {experiences.map((experience) => (
          <li
            className="relative grid grid-cols-[16px_minmax(0,1fr)] items-start gap-x-3 min-[621px]:grid-cols-[100px_16px_minmax(0,1fr)] min-[621px]:gap-x-3.5"
            key={experience.company}
          >
            {/* Timeline date */}
            <time className="col-start-2 row-start-1 pb-1 text-[.74rem] font-semibold whitespace-nowrap text-[var(--accent-link)] min-[621px]:col-start-1 min-[621px]:row-start-1 min-[621px]:pt-0.5 min-[621px]:pb-0 min-[621px]:text-[var(--secondary)]">
              {localize(experience.period, locale)}
            </time>

            {/* Timeline dot */}
            <span className="z-[1] col-start-1 row-start-1 row-span-2 mx-auto mt-1 size-[10px] rounded-full bg-[linear-gradient(135deg,#8c72ff,#59adff)] shadow-[0_0_0_4px_rgba(91,140,255,.1)] min-[621px]:col-start-2 min-[621px]:row-span-1" />

            {/* Content body */}
            <div className="col-start-2 row-start-2 min-w-0 min-[621px]:col-start-3 min-[621px]:row-start-1">
              <div className="block min-[621px]:flex min-[621px]:items-baseline min-[621px]:justify-between min-[621px]:gap-3">
                <h3 className="m-0 text-[.92rem] leading-snug font-bold text-[var(--foreground)]">
                  {localize(experience.role, locale)}
                </h3>
                <span className="mt-0.5 inline-block rounded-md border border-[var(--border)] bg-white/[.04] light:bg-white/80 px-2 py-0.5 text-[.72rem] font-semibold text-[var(--foreground)] shadow-2xs min-[621px]:mt-0">
                  {experience.company}
                </span>
              </div>

              {/* Responsibilities bullets from CV */}
              <ul className="mt-2.5 mb-0 grid list-none gap-2 p-0 text-[.79rem] leading-relaxed text-[var(--secondary)]">
                {experience.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2
                      size={14}
                      className="mt-0.5 shrink-0 text-indigo-400 light:text-indigo-600"
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
                    className="rounded border border-[var(--border)] bg-[rgba(102,115,190,.07)] light:bg-white/80 px-2 py-0.5 text-[.68rem] font-medium text-[var(--secondary)] hover:text-[var(--foreground)] transition-colors shadow-2xs"
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