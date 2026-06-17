import { skillGroups } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";

function Skill() {
  return (
    <section id="skills" className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="// skills.tsx" title="Tools I reach for" accentWord="for" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)]/60 p-5 hover:border-[var(--border-strong)] transition-colors"
            >
              <p className="font-mono text-[11px] tracking-wide text-[var(--signal)] mb-3">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[12px] text-[var(--text-muted)] border border-[var(--border-soft)] rounded-md px-2.5 py-1 bg-[var(--tint-bg)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
