import type { Locale } from '@/data/portfolio';

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
  onChange: (locale: Locale) => void;
};

const languages: Array<{ value: Locale; label: string; title: string }> = [
  { value: 'vi', label: 'VI', title: 'Tiếng Việt' },
  { value: 'en', label: 'EN', title: 'English' },
];

export function LanguageSwitcher({
  locale,
  label,
  onChange,
}: LanguageSwitcherProps) {
  return (
    <div
      className="flex h-[38px] items-center gap-0.5 rounded-xl border border-[var(--border)] bg-zinc-100/70 dark:bg-zinc-900/70 p-[3px]"
      role="group"
      aria-label={label}
    >
      {languages.map((language) => {
        const isActive = locale === language.value;
        return (
          <button
            className={`h-[30px] min-w-[31px] cursor-pointer rounded-[9px] px-2 text-[.7rem] font-mono font-bold transition-all duration-200 ${
              isActive
                ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 shadow-xs'
                : 'text-zinc-500 hover:text-[var(--foreground)]'
            }`}
            key={language.value}
            type="button"
            aria-pressed={isActive}
            title={language.title}
            onClick={() => onChange(language.value)}
          >
            {language.label}
          </button>
        );
      })}
    </div>
  );
}