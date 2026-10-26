import {
  Award,
  Calendar,
  Code2,
  GraduationCap,
  MapPin,
  Smartphone,
  Sparkles,
  TrendingUp,
  UserRound,
  Zap,
} from 'lucide-react';
import type { Locale } from '@/data/portfolio';
import { highlights, interests, localize, profile, uiText } from '@/data/portfolio';

const interestIcons: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  Sparkles,
  Zap,
  Smartphone,
  Code2,
};

type AboutProps = {
  locale: Locale;
};

export function About({ locale }: AboutProps) {
  const text = uiText[locale];

  return (
    <article
      className="flex min-w-0 flex-col gap-6 scroll-mt-[90px] rounded-2xl border border-[var(--border)] bg-[var(--detail-background)] px-[19px] py-[21px] shadow-xs min-[621px]:rounded-[18px] min-[621px]:px-[27px] min-[621px]:pt-[25px] min-[621px]:pb-[25px]"
      id="about"
    >
      <div>
        <header className="mb-[17px] flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-xl border border-[var(--border)] bg-[var(--card-background)] text-[var(--foreground)]">
              <UserRound size={18} />
            </span>
            <h2 className="m-0 text-[1.22rem] font-bold tracking-tight text-[var(--foreground)] min-[391px]:text-[1.32rem]">
              {text.aboutTitle}
            </h2>
          </div>
          <span className="rounded-md border border-[var(--border)] bg-[var(--badge-background)] px-2.5 py-1 text-[.7rem] font-mono font-medium text-[var(--secondary)]">
            06/2022 – Hiện tại
          </span>
        </header>

        <p className="m-0 text-[.91rem] leading-[1.68] text-[var(--secondary)]">
          {text.aboutBody}
        </p>

        {/* Quick meta badges */}
        <div className="mt-4 flex flex-wrap gap-2 text-[.74rem] text-[var(--secondary)]">
          <div className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--card-background)] px-2.5 py-1.5 font-mono">
            <Calendar size={13} className="text-[var(--secondary)]" />
            <span>{text.birthDateLabel}: <strong className="text-[var(--foreground)]">{profile.birthDate}</strong></span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--card-background)] px-2.5 py-1.5 font-mono">
            <MapPin size={13} className="text-[var(--secondary)]" />
            <span className="text-[var(--foreground)] font-medium">{localize(profile.location, locale)}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--card-background)] px-2.5 py-1.5 font-mono">
            <Award size={13} className="text-[var(--secondary)]" />
            <span className="text-[var(--foreground)] font-medium">Full-Stack Engineer</span>
          </div>
        </div>
      </div>

      {/* Highlights from CV (Minimalist) */}
      <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] p-4">
        <div className="mb-3 flex items-center gap-2 text-[.82rem] font-bold text-[var(--foreground)]">
          <TrendingUp size={16} className="text-[var(--secondary)]" />
          <span>{text.highlightsTitle}</span>
        </div>
        <div className="grid grid-cols-1 gap-2.5 min-[520px]:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.metric}
              className="rounded-lg border border-[var(--border)] bg-[var(--card-background)] p-3.5 transition-colors hover:border-zinc-400 dark:hover:border-zinc-600 shadow-2xs"
            >
              <div className="flex items-baseline justify-between gap-1">
                <span className="text-2xl font-black font-mono tracking-tight text-[var(--foreground)]">
                  {item.metric}
                </span>
                <span className="rounded border border-[var(--border)] px-1.5 py-0.5 text-[.62rem] font-mono font-semibold uppercase tracking-wider text-[var(--secondary)] bg-[var(--badge-background)]">
                  {item.badge}
                </span>
              </div>
              <h4 className="mt-1.5 m-0 text-[.78rem] font-bold text-[var(--foreground)]">
                {localize(item.title, locale)}
              </h4>
              <p className="mt-1 mb-0 text-[.72rem] leading-snug text-[var(--secondary)]">
                {localize(item.description, locale)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Continuous Learning */}
      <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] p-3.5">
        <div className="flex items-start gap-2.5">
          <span className="mt-0.5 grid size-6 place-items-center rounded-md border border-[var(--border)] bg-[var(--card-background)] text-[var(--foreground)]">
            <GraduationCap size={14} />
          </span>
          <div className="min-w-0 flex-1">
            <h4 className="m-0 text-[.8rem] font-bold text-[var(--foreground)]">
              {text.educationTitle}
            </h4>
            <p className="mt-1 mb-0 text-[.74rem] leading-relaxed text-[var(--secondary)]">
              {text.educationDesc}
            </p>
          </div>
        </div>
      </div>

      {/* Interests & Passions */}
      <div>
        <span className="block text-[.74rem] font-bold uppercase tracking-wider text-[var(--secondary)] mb-2 font-mono">
          {text.interests}
        </span>
        <ul
          className="m-0 flex list-none flex-wrap gap-2 p-0"
          aria-label={text.interests}
        >
          {interests.map((interest) => {
            const Icon = interestIcons[interest.icon] ?? Sparkles;

            return (
              <li
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card-background)] py-1.5 pr-3 pl-2.5 text-[.74rem] font-medium text-[var(--foreground)]"
                key={interest.icon}
              >
                <Icon size={13} className="text-[var(--secondary)]" strokeWidth={2} />
                {localize(interest.label, locale)}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}