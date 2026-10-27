import {
  ArrowRight,
  BriefcaseBusiness,
  CodeXml,
  Files,
  MapPin,
  UsersRound,
} from 'lucide-react';
import Link from 'next/link';
import type { Locale } from '@/data/portfolio';
import { localize, profile, stats, uiText } from '@/data/portfolio';

const statIcons = {
  users: BriefcaseBusiness,
  projects: Files,
  clients: UsersRound,
  location: MapPin,
};

const buttonClasses =
  'inline-flex h-11 items-center justify-center gap-2.5 rounded-xl px-5 text-[.88rem] font-semibold transition-all duration-200 hover:-translate-y-0.5';

type HeroProps = {
  locale: Locale;
};

export function Hero({ locale }: HeroProps) {
  const text = uiText[locale];

  return (
    <section
      className="relative overflow-hidden pt-7 pb-11 min-[621px]:pt-[38px] min-[621px]:pb-[52px] min-[851px]:pt-12"
      id="home"
    >
      <div className="mx-auto grid w-[calc(100%-2rem)] max-w-[1280px] grid-cols-1 items-center gap-[34px] min-[621px]:w-[calc(100%-3rem)] min-[621px]:grid-cols-[minmax(225px,260px)_1fr] min-[851px]:grid-cols-[265px_minmax(0,1fr)] min-[851px]:gap-[42px] min-[1101px]:grid-cols-[280px_minmax(0,1fr)_220px] min-[1101px]:gap-[clamp(44px,5vw,72px)]">
        
        {/* Minimalist Monogram Profile Frame */}
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] animate-[reveal-up_.65s_both_ease-out] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--detail-background)] shadow-xs min-[621px]:mx-0 min-[621px]:max-w-none">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none">
            <div className="mb-3 grid size-20 place-items-center rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] text-3xl font-black tracking-tighter text-[var(--foreground)] font-mono shadow-xs">
              TQV
            </div>
            <div className="text-base font-bold text-[var(--foreground)] tracking-tight">
              {profile.firstName} {profile.lastName}
            </div>
            <div className="mt-1 text-xs text-[var(--secondary)] font-mono">
              {localize(profile.role, locale)}
            </div>
            <div className="mt-2 text-[.72rem] text-[var(--muted)] font-mono">
              Hanoi · Since 2022
            </div>
          </div>

          <div className="absolute right-3.5 bottom-3.5 left-3.5 flex min-h-[34px] items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[.72rem] font-medium text-[var(--foreground)] shadow-xs backdrop-blur-md">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            {localize(profile.availability, locale)}
          </div>
        </div>

        {/* Hero Content */}
        <div className="max-w-[620px] animate-[reveal-up_.65s_both_ease-out] text-center [animation-delay:.08s] min-[621px]:text-left">
          <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card-background)] px-3.5 py-1 text-[.82rem] font-medium text-[var(--secondary)] min-[621px]:mb-2.5">
            <span>👋</span> {text.greeting}
          </div>

          <h1 className="m-0 text-[clamp(2.35rem,8.5vw,4.4rem)] leading-[1.02] font-black tracking-[-.05em] text-[var(--foreground)] break-words">
            {profile.firstName}{' '}
            <span className="text-[var(--secondary)] font-extrabold">
              {profile.lastName}
            </span>
          </h1>

          <div className="mt-3.5 flex flex-col items-center gap-1.5 text-[1.05rem] text-[var(--foreground)] min-[621px]:items-start min-[851px]:mt-[13px] min-[851px]:flex-row min-[851px]:items-center min-[851px]:gap-3.5 min-[851px]:text-[1.12rem]">
            <strong className="font-bold">{localize(profile.role, locale)}</strong>
            <i className="hidden h-4 w-px bg-[var(--border)] min-[851px]:block" />
            <span className="text-[var(--secondary)] text-sm font-medium">
              {localize(profile.tagline, locale)}
            </span>
          </div>

          <p className="mt-4 mb-0 max-w-[610px] text-[.94rem] leading-[1.65] text-[var(--secondary)]">
            {localize(profile.introduction, locale)}
          </p>

          {/* CTA Buttons in Minimalist High-Contrast Style */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 min-[621px]:justify-start">
            <a
              className={`${buttonClasses} w-full min-[400px]:w-auto bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] shadow-xs hover:opacity-90`}
              href="#contact"
            >
              {text.contactMe} <ArrowRight size={16} />
            </a>
            <Link
              className={`${buttonClasses} w-full min-[400px]:w-auto border border-[var(--border)] bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-fg)] hover:border-zinc-400 dark:hover:border-zinc-600`}
              href="/cv"
            >
              {text.viewCv}
            </Link>
            <a
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-fg)] hover:border-zinc-400 dark:hover:border-zinc-600 transition-all hover:-translate-y-0.5"
              href={profile.github}
              aria-label={text.viewGithub}
              target="_blank"
              rel="noreferrer"
            >
              <CodeXml size={19} />
            </a>
          </div>
        </div>

        {/* Minimalist Stats column */}
        <div
          className="col-span-full grid grid-cols-2 gap-3.5 animate-[reveal-up_.65s_both_ease-out] [animation-delay:.16s] min-[851px]:grid-cols-4 min-[1101px]:col-span-1 min-[1101px]:grid-cols-1"
          aria-label={text.statsLabel}
        >
          {stats.map((stat) => {
            const Icon = statIcons[stat.icon];
            return (
              <div
                className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--stat-background)] p-3 min-[1101px]:rounded-none min-[1101px]:border-0 min-[1101px]:bg-transparent min-[1101px]:p-0"
                key={stat.icon}
              >
                <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-[var(--border)] bg-[var(--card-background)] text-[var(--foreground)]">
                  <Icon size={18} />
                </div>
                <div>
                  <strong className="block text-[1.05rem] font-bold tracking-tight text-[var(--foreground)] font-mono">
                    {localize(stat.value, locale)}
                  </strong>
                  <span className="block text-[.74rem] leading-snug text-[var(--secondary)]">
                    {localize(stat.label, locale)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}