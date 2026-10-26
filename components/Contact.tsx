'use client';

import {
  Check,
  Copy,
  Download,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Sparkles,
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
        <div className="relative overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--detail-background)] p-6 shadow-[0_20px_60px_rgba(0,0,0,.15)] backdrop-blur-xl min-[621px]:p-10 min-[1101px]:p-12">
          {/* Background decorative glow */}
          <div className="pointer-events-none absolute -top-24 -left-24 size-80 rounded-full bg-[#613cff] opacity-15 light:opacity-10 blur-[70px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 size-80 rounded-full bg-[#3b7cff] opacity-15 light:opacity-10 blur-[70px]" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-8 min-[990px]:grid-cols-[1.1fr_.9fr]">
            {/* Left Column: Heading and Introduction */}
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1 text-[.78rem] font-semibold text-blue-400 light:text-blue-600">
                <Sparkles size={13} className="text-blue-500" />
                {localize(profile.availability, locale)}
              </div>

              <h2 className="m-0 text-[1.85rem] font-bold tracking-tight text-[var(--foreground)] min-[621px]:text-[2.35rem]">
                {text.contactTitle}
              </h2>

              <p className="mt-3 mb-6 max-w-[560px] text-[.94rem] leading-relaxed text-[var(--secondary)]">
                {text.contactSubtitle}
              </p>

              {/* Quick Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[linear-gradient(135deg,#0084ff,#0052ff)] px-5 text-[.86rem] font-semibold text-white shadow-[0_10px_24px_rgba(0,104,255,.28)] transition-transform hover:-translate-y-0.5"
                  href={profile.zaloUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageSquare size={16} />
                  <span>{text.chatZalo}</span>
                </a>

                <a
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-white/[.04] light:bg-white/80 px-5 text-[.86rem] font-semibold text-[var(--foreground)] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[rgba(112,164,255,.4)]"
                  href={`tel:${profile.phone}`}
                >
                  <Phone size={16} className="text-emerald-500" />
                  <span>{profile.phoneDisplay}</span>
                </a>

                <a
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-white/[.03] light:bg-white/80 px-4 text-[.86rem] font-semibold text-[var(--foreground)] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[rgba(112,164,255,.4)]"
                  href={profile.cv}
                  download
                >
                  <Download size={15} />
                  <span>{text.downloadCv}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Cards */}
            <div className="grid grid-cols-1 gap-3 min-[520px]:grid-cols-2">
              {/* Phone / Zalo */}
              <div className="group rounded-xl border border-[var(--border)] bg-white/[.03] light:bg-white/90 p-4 shadow-sm transition-all hover:border-[rgba(0,104,255,.4)]">
                <div className="mb-2 flex items-center justify-between">
                  <span className="grid size-9 place-items-center rounded-lg bg-[rgba(0,104,255,.12)] text-[#0084ff]">
                    <Phone size={17} />
                  </span>
                  <a
                    href={profile.zaloUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[.72rem] font-semibold text-blue-500 hover:underline"
                  >
                    Zalo ↗
                  </a>
                </div>
                <div className="text-[.74rem] text-[var(--secondary)]">{text.phoneLabel}</div>
                <div className="mt-0.5 text-[.92rem] font-bold text-[var(--foreground)]">
                  {profile.phoneDisplay}
                </div>
              </div>

              {/* Email */}
              <div className="group rounded-xl border border-[var(--border)] bg-white/[.03] light:bg-white/90 p-4 shadow-sm transition-all hover:border-[rgba(112,164,255,.4)]">
                <div className="mb-2 flex items-center justify-between">
                  <span className="grid size-9 place-items-center rounded-lg bg-[rgba(91,140,255,.12)] text-[var(--accent-blue)]">
                    <Mail size={17} />
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 text-[.72rem] font-medium text-[var(--secondary)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check size={12} className="text-emerald-500" />
                        <span className="text-emerald-600 font-semibold">{text.copied}</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>{text.copyEmail}</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="text-[.74rem] text-[var(--secondary)]">{text.emailLabel}</div>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-0.5 block truncate text-[.88rem] font-bold text-[var(--foreground)] hover:text-[var(--accent-link)]"
                >
                  {profile.email}
                </a>
              </div>

              {/* Location */}
              <div className="col-span-full rounded-xl border border-[var(--border)] bg-white/[.03] light:bg-white/90 p-4 shadow-sm transition-all hover:border-[rgba(112,164,255,.3)]">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-[rgba(239,68,68,.12)] text-red-500">
                    <MapPin size={17} />
                  </span>
                  <div>
                    <div className="text-[.74rem] text-[var(--secondary)]">{text.locationLabel}</div>
                    <div className="text-[.86rem] font-semibold text-[var(--foreground)]">
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