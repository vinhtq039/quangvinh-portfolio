import { Bot, Layers, Layout, Server, Sparkles, Wrench } from 'lucide-react';
import { SectionTitle } from '@/components/SectionTitle';
import { TechCard } from '@/components/TechCard';
import type { Locale } from '@/data/portfolio';
import { localize, skillCategories, skills, uiText } from '@/data/portfolio';

const categoryIcons = {
  Layout,
  Server,
  Bot,
  Wrench,
};

type SkillsProps = {
  locale: Locale;
};

export function Skills({ locale }: SkillsProps) {
  const text = uiText[locale];

  return (
    <section
      className="relative scroll-mt-[78px] py-6 min-[621px]:pt-3 min-[621px]:pb-[34px]"
      id="skills"
    >
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1280px] min-[621px]:w-[calc(100%-3rem)]">
        <SectionTitle
          title={text.skillsTitle}
          action={text.skillsAction}
          href="#contact"
        />

        {/* 12 Quick Logo Cards */}
        <div className="mr-[-16px] grid snap-x snap-proximity grid-cols-[repeat(6,90px)] gap-[11px] overflow-x-auto pb-[9px] pr-4 [scrollbar-width:thin] min-[621px]:mr-0 min-[621px]:grid-cols-4 min-[621px]:gap-3.5 min-[621px]:overflow-visible min-[621px]:pb-0 min-[621px]:pr-0 min-[851px]:grid-cols-6 min-[1101px]:grid-cols-12">
          {skills.map((skill) => (
            <TechCard key={skill.name} skill={skill} />
          ))}
        </div>

        {/* Detailed Skill Matrix Categories from CV */}
        <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--detail-background)] p-5 min-[621px]:p-7 shadow-[inset_0_1px_0_rgba(255,255,255,.02)]">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-[var(--border)] pb-4">
            <div>
              <h3 className="m-0 flex items-center gap-2 text-[1.1rem] font-bold text-[var(--foreground)]">
                <Layers size={19} className="text-[var(--accent-blue)]" />
                {text.skillsMatrixTitle}
              </h3>
              <p className="mt-1 mb-0 text-[.82rem] text-[var(--secondary)]">
                {text.skillsMatrixSubtitle}
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-[.74rem] font-medium text-purple-400 light:text-purple-700">
              <Sparkles size={13} className="text-purple-400 light:text-purple-600" />
              Full-Stack + AI Workflow
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 min-[768px]:grid-cols-2 min-[1180px]:grid-cols-4">
            {skillCategories.map((cat) => {
              const Icon = categoryIcons[cat.icon as keyof typeof categoryIcons] ?? Layout;
              return (
                <div
                  key={cat.icon}
                  className="rounded-xl border border-[var(--border)] bg-white/[.03] light:bg-white/85 p-4 shadow-xs transition-all duration-200 hover:border-[rgba(112,164,255,.35)] hover:bg-white/[.05] light:hover:bg-white"
                >
                  <div className="mb-3.5 flex items-center gap-2.5">
                    <span
                      className="grid size-8 place-items-center rounded-lg border border-white/10"
                      style={{
                        backgroundColor: `color-mix(in srgb, ${cat.color} 14%, transparent)`,
                        color: cat.color,
                      }}
                    >
                      <Icon size={16} />
                    </span>
                    <h4 className="m-0 text-[.86rem] font-bold text-[var(--foreground)]">
                      {localize(cat.title, locale)}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-[var(--border)] bg-white/[.04] light:bg-black/[.04] px-2 py-1 text-[.72rem] font-medium text-[var(--secondary)] hover:text-[var(--foreground)] transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}