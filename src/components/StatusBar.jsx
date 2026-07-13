import { GitBranch, MapPin, Github, Linkedin, Instagram, Mail } from "lucide-react";
import { profile } from "@/lib/content";
import { useLocalClock } from "@/lib/useLocalClock";

function StatusBar() {
  const time = useLocalClock(profile.timeZone);

  return (
    <footer
      className="fixed bottom-0 left-0 w-full z-40 h-9 sm:h-10 bg-[var(--chrome)] backdrop-blur-md border-t border-[var(--border-soft)] font-mono text-[11px] sm:text-[12px] text-[var(--text-muted)]"
      id="status-bar"
    >
      <div className="mx-auto max-w-6xl h-full px-3 sm:px-6 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <span className="flex items-center gap-1.5 text-[var(--text)] shrink-0">
            <GitBranch size={13} />
            main
          </span>

          <span className="flex items-center gap-1.5 shrink-0">
            <span className="relative flex w-2 h-2">
              {profile.available && (
                <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--signal)] pulse-dot" />
              )}
              <span
                className={`relative inline-flex rounded-full w-2 h-2 ${
                  profile.available ? "bg-[var(--signal)]" : "bg-[var(--text-faint)]"
                }`}
              />
            </span>
            <span className="hidden sm:inline">
              {profile.available ? "Open to opportunities" : "Not available"}
            </span>
          </span>

          <span className="hidden md:flex items-center gap-1.5 truncate">
            <MapPin size={13} />
            {profile.location} · {time} WIB
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-[var(--signal)] transition-colors"
            aria-label="Email"
          >
            <Mail size={14} />
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--signal)] transition-colors"
            aria-label="GitHub"
          >
            <Github size={14} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--signal)] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={14} />
          </a>
          <a
            href={profile.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-block hover:text-[var(--signal)] transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default StatusBar;
