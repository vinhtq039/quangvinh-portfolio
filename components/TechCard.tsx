import Image from 'next/image';

type TechCardProps = {
  skill: { name: string; logo: string; color: string };
};

export function TechCard({ skill }: TechCardProps) {
  return (
    <article className="group relative flex min-h-[82px] min-w-0 snap-start flex-col items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card-background)] p-3 text-[.74rem] font-medium text-[var(--secondary)] transition-all duration-200 hover:-translate-y-1 hover:border-zinc-400 hover:text-[var(--foreground)] dark:hover:border-zinc-600 shadow-2xs">
      <span className="grid size-7 place-items-center" aria-hidden="true">
        <Image
          className="size-6 object-contain opacity-75 transition-all duration-200 group-hover:scale-110 group-hover:opacity-100 grayscale group-hover:grayscale-0"
          src={skill.logo}
          alt=""
          width={24}
          height={24}
        />
      </span>
      <span className="truncate">{skill.name}</span>
    </article>
  );
}