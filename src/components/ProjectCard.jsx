import { ArrowUpRight, Github } from "lucide-react";
import ProjectThumb from "@/components/ProjectThumb";

function ProjectCard({ project }) {
  const { title, description, stack, type, accent, kind } = project;

  return (
    <article className="group rounded-xl border border-[var(--border-soft)] bg-[var(--surface)]/60 overflow-hidden hover:border-[var(--border-strong)] hover:-translate-y-1 transition-all duration-300">
      <a href="#" data-cursor-label="View project ↗">
        <ProjectThumb kind={kind} accent={accent} />
      </a>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display font-semibold text-base text-[var(--text)]">
            {title}
          </h3>
          <span className="shrink-0 font-mono text-[10px] text-[var(--text-faint)] border border-[var(--border-soft)] rounded px-1.5 py-0.5 mt-0.5">
            {type}
          </span>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] text-[var(--text-muted)] border border-[var(--border-soft)] rounded-md px-2 py-0.5"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 font-mono text-[12px]">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-[var(--text)] hover:text-[var(--signal)] transition-colors"
          >
            Live demo
            <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--signal)] transition-colors"
          >
            <Github size={13} />
            Source
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
