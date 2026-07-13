import { useState } from "react";
import { X } from "lucide-react";
import ProjectThumb from "@/components/ProjectThumb";

function ProjectCard({ project }) {
  const { title, description, stack, type, accent, kind, image } = project;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <article
        onClick={() => setIsOpen(true)}
        className="group rounded-xl border border-[var(--border-soft)] bg-[var(--surface)]/60 overflow-hidden hover:border-[var(--border-strong)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      >
        <div data-cursor-label="View project ↗">
          <ProjectThumb kind={kind} accent={accent} image={image} />
        </div>

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
        </div>
      </article>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setIsOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 p-2.5 rounded-full transition-colors border border-white/10"
            onClick={() => setIsOpen(false)}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
          <img
            src={image}
            alt={title}
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain animate-in fade-in zoom-in-95 duration-200"
          />
        </div>
      )}
    </>
  );
}

export default ProjectCard;
