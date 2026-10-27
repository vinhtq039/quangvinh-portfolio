'use client';

import { Download, Menu, MoonStar, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import type { Locale } from '@/data/portfolio';
import { localize, navigation, profile, uiText } from '@/data/portfolio';

const iconButtonClasses =
  'inline-flex size-[38px] sm:size-[42px] cursor-pointer items-center justify-center rounded-[10px] sm:rounded-[11px] border border-[var(--border)] bg-white/[.025] transition-[transform,border-color,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[rgba(112,164,255,.4)] hover:bg-[rgba(91,140,255,.09)]';

const THEME_STORAGE_KEY = 'vinh-portfolio-theme';

type NavbarProps = {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
};

export function Navbar({ locale, onLocaleChange }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const text = uiText[locale];

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === 'dark') {
      setIsLight(false);
      document.documentElement.dataset.theme = 'dark';
    } else {
      setIsLight(true);
      document.documentElement.dataset.theme = 'light';
    }
  }, []);

  const handleToggleTheme = () => {
    setIsLight((prev) => {
      const next = !prev;
      const themeValue = next ? 'light' : 'dark';
      document.documentElement.dataset.theme = themeValue;
      window.localStorage.setItem(THEME_STORAGE_KEY, themeValue);
      return next;
    });
  };

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);
    let frame = 0;
    const updateActiveSection = () => {
      const isAtBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8;
      const requestedId = window.location.hash.slice(1);
      if (isAtBottom) {
        setActiveSection(
          ['about', 'experience', 'contact'].includes(requestedId)
            ? requestedId
            : 'contact',
        );
        return;
      }
      const marker = window.scrollY + 150;
      const current = sections.reduce(
        (match, section) => (section.offsetTop <= marker ? section : match),
        sections[0],
      );
      if (current?.id) setActiveSection(current.id);
    };
    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveSection);
    };
    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--nav-background)] backdrop-blur-[18px]">
      <div className="mx-auto grid h-[66px] w-[calc(100%-2rem)] max-w-[1280px] grid-cols-[1fr_auto] items-center min-[621px]:h-[72px] min-[621px]:w-[calc(100%-3rem)] min-[1101px]:grid-cols-[1fr_auto_1fr]">
        <a
          className="inline-flex w-fit items-center gap-2 sm:gap-[11px] text-[.92rem] sm:text-[1.05rem] font-[740] tracking-[-.025em] shrink-0"
          href="#home"
          aria-label={text.homeLabel}
        >
          <span
            className="flex gap-0.5 sm:gap-1 [&_i]:block [&_i]:rotate-[-4deg] [&_i]:text-[1.5rem] sm:[&_i]:text-[1.85rem] [&_i]:leading-[.7] [&_i]:font-black [&_i]:not-italic [&_i]:text-[var(--foreground)] [&_i:last-child]:text-zinc-400 dark:[&_i:last-child]:text-zinc-500"
            aria-hidden="true"
          >
            <i>&lt;</i>
            <i>&gt;</i>
          </span>
          <span className="hidden sm:inline truncate">
            {profile.firstName} {profile.lastName}
          </span>
        </a>

        <nav
          className="hidden h-full items-stretch gap-[26px] min-[1101px]:flex min-[1241px]:gap-[34px]"
          aria-label={text.mainNavigation}
        >
          {navigation.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                className={`relative flex items-center text-[.88rem] transition-colors duration-200 hover:text-[var(--foreground)] ${
                  isActive
                    ? "font-semibold text-[var(--foreground)] after:absolute after:inset-x-0 after:bottom-[15px] after:h-[2px] after:bg-zinc-900 dark:after:bg-zinc-100 after:content-['']"
                    : 'text-[var(--secondary)]'
                }`}
                href={item.href}
                key={item.href}
                onClick={() => setActiveSection(item.href.slice(1))}
              >
                {localize(item.label, locale)}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center justify-end gap-1.5 sm:gap-2.5 min-[851px]:gap-3">
          <button
            className={iconButtonClasses}
            type="button"
            aria-label={
              isLight ? text.switchToDark : text.switchToLight
            }
            onClick={handleToggleTheme}
          >
            {isLight ? <MoonStar size={17} /> : <Sun size={17} />}
          </button>
          <LanguageSwitcher
            locale={locale}
            label={text.language}
            onChange={onLocaleChange}
          />
          <a
            className="inline-flex size-[38px] sm:size-auto sm:h-10 sm:w-auto items-center justify-center gap-2 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 px-0 sm:px-4 text-[.84rem] font-semibold transition-all hover:-translate-y-0.5 shadow-xs shrink-0 whitespace-nowrap"
            href={profile.cv}
            download
            aria-label={text.downloadCv}
            title={text.downloadCv}
          >
            <Download size={16} className="shrink-0" />
            <span className="hidden sm:inline whitespace-nowrap">{text.downloadCv}</span>
          </a>
          <button
            className={`${iconButtonClasses} min-[1101px]:hidden`}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? text.closeMenu : text.openMenu}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className={`grid overflow-hidden border-t transition-[max-height,opacity,border-color] duration-200 min-[1101px]:hidden ${
          menuOpen
            ? 'max-h-[430px] border-[var(--border)] opacity-100'
            : 'max-h-0 border-transparent opacity-0'
        }`}
        aria-label={text.mobileNavigation}
      >
        <div className="mx-auto grid w-[calc(100%-2rem)] max-w-[1280px] grid-cols-2 gap-2 pt-3.5 pb-[18px] min-[621px]:w-[calc(100%-3rem)] min-[621px]:grid-cols-3">
          {navigation.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                className={`rounded-[10px] px-3 py-[11px] text-center transition-colors hover:bg-zinc-100 hover:text-[var(--foreground)] dark:hover:bg-zinc-800 ${
                  isActive
                    ? 'bg-zinc-100 font-semibold text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
                    : 'text-[var(--secondary)]'
                }`}
                href={item.href}
                key={item.href}
                onClick={() => {
                  setActiveSection(item.href.slice(1));
                  setMenuOpen(false);
                }}
              >
                {localize(item.label, locale)}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
