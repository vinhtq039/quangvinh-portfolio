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
import type { CSSProperties } from 'react';
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
      className="flex min-w-0 flex-col gap-6 scroll-mt-[90px] rounded-2xl border border-[var(--border)] bg-[var(--detail-background)] px-[19px] py-[21px] shadow-[inset_0_1px_0_rgba(255,255,255,.02)] min-[621px]:rounded-[18px] min-[621px]:px-[27px] min-[621px]:pt-[25px] min-[621px]:pb-[25px]"
      id="about"
    >
      <div>
        <header className="mb-[17px] flex items-center justify-between gap-3">
          <div className="flex items-center gap-[13px]">
            <span className="grid size-[37px] place-items-center rounded-[11px] border border-[rgba(108,118,255,.16)] bg-[linear-gradient(145deg,rgba(97,91,255,.15),rgba(79,165,255,.07))] text-[var(--accent-icon)]">
              <UserRound size={20} />
            </span>
            <h2 className="m-0 text-[1.25rem] leading-[1.2] font-[720] tracking-[-.035em] text-[var(--foreground)] min-[391px]:text-[1.38rem]">
              {text.aboutTitle}
            </h2>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[.72rem] font-medium text-emerald-500 light:text-emerald-700">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            2022 – Hiện tại
          </span>
        </header>

        <p className="m-0 text-[.91rem] leading-[1.68] text-[var(--secondary)]">
          {text.aboutBody}
        </p>

        {/* Quick meta badge list */}
        <div className="mt-4 flex flex-wrap gap-2.5 text-[.76rem] text-[var(--secondary)]">
          <div className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-white/[.03] light:bg-white/80 px-2.5 py-1.5 shadow-xs">
            <Calendar size={13} className="text-[var(--accent-blue)]" />
            <span>{text.birthDateLabel}: <strong className="text-[var(--foreground)]">{profile.birthDate}</strong></span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-white/[.03] light:bg-white/80 px-2.5 py-1.5 shadow-xs">
            <MapPin size={13} className="text-[var(--accent-blue)]" />
            <span className="text-[var(--foreground)] font-medium">{localize(profile.location, locale)}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-white/[.03] light:bg-white/80 px-2.5 py-1.5 shadow-xs">
            <Award size={13} className="text-amber-500" />
            <span className="text-[var(--foreground)] font-medium">Kỹ sư Full-Stack</span>
          </div>
        </div>
      </div>

      {/* Highlights from CV */}
      <div className="rounded-xl border border-[var(--border)] bg-white/[.02] light:bg-white/60 p-4">
        <div className="mb-3 flex items-center gap-2 text-[.82rem] font-semibold text-[var(--foreground)]">
          <TrendingUp size={16} className="text-[var(--accent-blue)]" />
          <span>{text.highlightsTitle}</span>
        </div>
        <div className="grid grid-cols-1 gap-2.5 min-[520px]:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.metric}
              className="group relative overflow-hidden rounded-lg border border-[var(--border)] bg-white/[.03] light:bg-white/90 p-3 shadow-xs transition-colors hover:border-[rgba(112,164,255,.4)]"
            >
              <div className="flex items-baseline justify-between gap-1">
                <span className="text-xl font-bold tracking-tight text-[var(--foreground)] min-[621px]:text-2xl bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  {item.metric}
                </span>
                <span className="rounded px-1.5 py-0.5 text-[.64rem] font-semibold uppercase tracking-wider text-indigo-400 light:text-indigo-700 bg-indigo-500/10">
                  {item.badge}
                </span>
              </div>
              <h4 className="mt-1 m-0 text-[.77rem] font-semibold text-[var(--foreground)]">
                {localize(item.title, locale)}
              </h4>
              <p className="mt-1 mb-0 text-[.71rem] leading-snug text-[var(--secondary)]">
                {localize(item.description, locale)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Continuous Learning */}
      <div className="rounded-xl border border-[var(--border)] bg-white/[.02] light:bg-white/60 p-3.5">
        <div className="flex items-start gap-2.5">
          <span className="mt-0.5 grid size-6 place-items-center rounded-md bg-[rgba(91,140,255,.12)] text-[var(--accent-blue)]">
            <GraduationCap size={15} />
          </span>
          <div className="min-w-0 flex-1">
            <h4 className="m-0 text-[.8rem] font-semibold text-[var(--foreground)]">
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
        <span className="block text-[.78rem] font-semibold text-[var(--foreground)] mb-2">
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
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/[.03] light:bg-white/80 py-[6px] pr-3 pl-2 text-[.76rem] text-[var(--secondary)] shadow-2xs"
                key={interest.icon}
                style={{ '--interest-color': interest.color } as CSSProperties}
              >
                <span
                  className="grid size-5 place-items-center rounded-[6px] border border-[color-mix(in_srgb,var(--interest-color)_28%,transparent)] bg-[color-mix(in_srgb,var(--interest-color)_12%,transparent)] text-[var(--interest-color)]"
                  aria-hidden="true"
                >
                  <Icon size={12} strokeWidth={2} />
                </span>
                {localize(interest.label, locale)}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}