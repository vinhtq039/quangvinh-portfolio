import {
  ArrowRight,
  Briefcase,
  BriefcaseBusiness,
  Camera,
  Code2,
  FileText,
  Globe,
  Mail,
  MessageCircle,
  Play,
  Smartphone,
} from 'lucide-react';
import type { Locale } from '@/data/portfolio';
import { profile, socials, uiText } from '@/data/portfolio';

const socialIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  Github: Code2,
  Mail: Mail,
  Smartphone: Smartphone,
  Globe: Globe,
  Briefcase: Briefcase,
  FileText: FileText,
  Linkedin: BriefcaseBusiness,
  Facebook: MessageCircle,
  Instagram: Camera,
  Youtube: Play,
};

type FooterProps = {
  locale: Locale;
};

export function Footer({ locale }: FooterProps) {
  const text = uiText[locale];

  return (
    <footer
      className="border-t border-[var(--border)] bg-[var(--footer-background)]"
      id="footer"
    >
      <div className="mx-auto grid w-[calc(100%-2rem)] max-w-[1280px] grid-cols-1 justify-items-center gap-[18px] py-[26px] text-center min-[621px]:min-h-[104px] min-[621px]:w-[calc(100%-3rem)] min-[621px]:grid-cols-[1fr_auto] min-[621px]:items-center min-[621px]:justify-items-stretch min-[621px]:gap-[30px] min-[621px]:py-0 min-[621px]:text-left min-[1101px]:grid-cols-[1fr_auto_1fr]">
        <div>
          <a
            className="inline-flex w-fit items-center gap-[11px] text-[.96rem] font-[740] tracking-[-.025em]"
            href="#home"
          >
            <span
              className="flex gap-1 [&_i]:block [&_i]:rotate-[-4deg] [&_i]:text-[1.55rem] [&_i]:leading-[.7] [&_i]:font-black [&_i]:not-italic [&_i]:text-[var(--foreground)] [&_i:last-child]:text-zinc-400 dark:[&_i:last-child]:text-zinc-500"
              aria-hidden="true"
            >
              <i>&lt;</i>
              <i>&gt;</i>
            </span>
            <span>
              {profile.firstName} {profile.lastName}
            </span>
          </a>
          <p className="mt-[7px] mb-0 text-[.72rem] text-[var(--secondary)]">
            {text.footerTagline}
          </p>
        </div>

        <nav className="flex items-center gap-2.5" aria-label={text.socialNetworks}>
          {socials.map((social) => {
            const Icon = socialIcons[social.icon];
            return (
              <a
                className="grid size-[35px] place-items-center rounded-xl border border-[var(--border)] bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-400 hover:text-[var(--foreground)] dark:hover:border-zinc-600"
                href={social.href}
                key={social.label}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                <Icon size={16} />
              </a>
            );
          })}
        </nav>

        <div className="flex flex-col items-center justify-end gap-3 min-[621px]:col-span-full min-[621px]:flex-row min-[621px]:justify-between min-[621px]:pb-[22px] min-[1101px]:col-span-1 min-[1101px]:pb-0">
          <p className="m-0 text-center text-[.72rem] text-[var(--secondary)] min-[621px]:text-right">
            {text.footerCta}
          </p>
          <a
            className="inline-flex h-[41px] w-auto items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 px-[18px] text-[.86rem] font-semibold transition-all hover:-translate-y-0.5 shadow-xs"
            href={`mailto:${profile.email}`}
          >
            {text.contactNow} <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
