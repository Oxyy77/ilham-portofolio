import { useRef } from "react";
import { CodeXml, Smartphone, Settings2, ArrowUpRight } from "lucide-react";
import { focusAreas } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { useMagnetic } from "@/lib/useMagnetic";

const ICONS = { CodeXml, Smartphone, Settings2 };

function Service() {
  const ctaBtnRef = useRef(null);
  useMagnetic(ctaBtnRef, 0.3);

  const goToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="focus" className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow="// focus.tsx" title="What I work on" accentWord="on" />
        </Reveal>

        <Reveal stagger={0.1} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {focusAreas.map((area, i) => {
            const Icon = ICONS[area.icon];
            const accent = i % 2 === 0 ? "var(--signal)" : "var(--copper)";
            return (
              <div
                key={area.title}
                className="group rounded-xl border border-[var(--border-soft)] bg-[var(--surface)]/60 p-6 hover:border-[var(--border-strong)] hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${accent}1f`, color: accent }}
                >
                  <Icon size={20} />
                </div>
                <h3 className="font-display font-semibold text-lg text-[var(--text)] mb-2">
                  {area.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)] mb-5">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] text-[var(--text-muted)] border border-[var(--border-soft)] rounded-md px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 rounded-xl border border-[var(--border-soft)] bg-[var(--tint-bg)] px-6 py-6"
        >
          <p className="text-sm sm:text-[15px] text-[var(--text-muted)] text-center sm:text-left">
            Got something in mind? I&apos;m happy to help scope it out, no strings attached.
          </p>
          <button
            ref={ctaBtnRef}
            onClick={goToContact}
            className="group inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold bg-[var(--signal)] text-[#06120f] hover:brightness-110 transition cursor-pointer shrink-0"
          >
            Get in touch
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}

export default Service;
