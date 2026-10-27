'use client';

import {
  Check,
  Copy,
  Download,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from 'lucide-react';
import { useState } from 'react';
import type { Locale } from '@/data/portfolio';
import { localize, profile, uiText } from '@/data/portfolio';

type ContactProps = {
  locale: Locale;
};

export function Contact({ locale }: ContactProps) {
  const text = uiText[locale];
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <section
      className="relative scroll-mt-[78px] py-10 min-[621px]:py-16"
      id="contact"
    >
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1280px] min-[621px]:w-[calc(100%-3rem)]">
        <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--detail-background)] p-6 shadow-sm min-[621px]:p-10 min-[1101px]:p-12">
          
          <div className="relative z-10 grid grid-cols-1 items-center gap-8 min-[990px]:grid-cols-[1.1fr_.9fr]">
            {/* Left Column: Heading and Introduction */}
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--badge-background)] px-3 py-1 text-[.74rem] font-mono font-medium text-[var(--secondary)]">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {localize(profile.availability, locale)}
              </div>

              <h2 className="m-0 text-[1.85rem] font-black tracking-tight text-[var(--foreground)] min-[621px]:text-[2.25rem]">
                {text.contactTitle}
              </h2>

              <p className="mt-3 mb-6 max-w-[560px] text-[.92rem] leading-relaxed text-[var(--secondary)]">
                {text.contactSubtitle}
              </p>

              {/* Minimalist Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <a
                  className="inline-flex h-11 w-full min-[460px]:w-auto items-center justify-center gap-2 rounded-xl bg-[var(--btn-primary-bg)] px-5 text-[.86rem] font-semibold text-[var(--btn-primary-fg)] transition-all hover:opacity-90 shadow-sm"
                  href={profile.zaloUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageSquare size={16} />
                  <span>{text.chatZalo}</span>
                </a>

                <a
                  className="inline-flex h-11 w-full min-[460px]:w-auto items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--btn-secondary-bg)] px-5 text-[.86rem] font-semibold text-[var(--btn-secondary-fg)] transition-all hover:border-zinc-400 dark:hover:border-zinc-600"
                  href={`tel:${profile.phone}`}
                >
                  <Phone size={15} className="text-[var(--secondary)]" />
                  <span>{profile.phoneDisplay}</span>
                </a>

                <a
                  className="inline-flex h-11 w-full min-[460px]:w-auto items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--btn-secondary-bg)] px-4 text-[.86rem] font-semibold text-[var(--btn-secondary-fg)] transition-all hover:border-zinc-400 dark:hover:border-zinc-600"
                  href={localize(profile.cv, locale)}
                  download={locale === 'en' ? 'CV_TRAN_QUANG_VINH_EN.pdf' : 'CV_TRAN_QUANG_VINH.pdf'}
                >
                  <Download size={15} />
                  <span>{text.downloadCv}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Cards */}
            <div className="grid grid-cols-1 gap-3 min-[520px]:grid-cols-2">
              {/* Phone / Zalo */}
              <div className="group rounded-xl border border-[var(--border)] bg-[var(--card-background)] p-4 transition-all hover:border-zinc-400 dark:hover:border-zinc-600">
                <div className="mb-2 flex items-center justify-between">
                  <span className="grid size-8 place-items-center rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--foreground)]">
                    <Phone size={15} />
                  </span>
                  <a
                    href={profile.zaloUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[.72rem] font-mono text-[var(--secondary)] hover:text-[var(--foreground)] hover:underline"
                  >
                    zalo.me ↗
                  </a>
                </div>
                <div className="text-[.72rem] font-mono uppercase tracking-wider text-[var(--secondary)]">{text.phoneLabel}</div>
                <div className="mt-0.5 text-[.92rem] font-bold text-[var(--foreground)] font-mono">
                  {profile.phoneDisplay}
                </div>
              </div>

              {/* Email */}
              <div className="group rounded-xl border border-[var(--border)] bg-[var(--card-background)] p-4 transition-all hover:border-zinc-400 dark:hover:border-zinc-600">
                <div className="mb-2 flex items-center justify-between">
                  <span className="grid size-8 place-items-center rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--foreground)]">
                    <Mail size={15} />
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 text-[.72rem] font-mono text-[var(--secondary)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check size={11} className="text-[var(--foreground)]" />
                        <span className="font-semibold text-[var(--foreground)]">{text.copied}</span>
                      </>
                    ) : (
                      <>
                        <Copy size={11} />
                        <span>{text.copyEmail}</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="text-[.72rem] font-mono uppercase tracking-wider text-[var(--secondary)]">{text.emailLabel}</div>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-0.5 block truncate text-[.86rem] font-bold text-[var(--foreground)] hover:underline"
                >
                  {profile.email}
                </a>
              </div>

              {/* Location */}
              <div className="col-span-full rounded-xl border border-[var(--border)] bg-[var(--card-background)] p-4 transition-all hover:border-zinc-400 dark:hover:border-zinc-600">
                <div className="flex items-center gap-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--foreground)]">
                    <MapPin size={15} />
                  </span>
                  <div>
                    <div className="text-[.72rem] font-mono uppercase tracking-wider text-[var(--secondary)]">{text.locationLabel}</div>
                    <div className="text-[.84rem] font-semibold text-[var(--foreground)]">
                      {text.locationDesc}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}