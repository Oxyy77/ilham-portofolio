import { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, Github, Linkedin, Instagram } from "lucide-react";
import { profile } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const CARD_BASE =
  "rounded-xl border border-[var(--border-soft)] bg-[var(--surface)]/60 p-6 hover:border-[var(--border-strong)] transition-colors";

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — the email is still visible to copy manually
    }
  };

  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading
            eyebrow="// contact.tsx"
            title="Let's build something"
            accentWord="something"
            align="center"
          />
        </Reveal>
        <p className="-mt-6 mb-12 text-center text-[var(--text-muted)] max-w-md mx-auto text-sm sm:text-[15px]">
          Open to internships, freelance work, and collaborations. Reach out through whichever channel is easiest.
        </p>

        <Reveal stagger={0.08} className="grid sm:grid-cols-2 gap-4">
          <button onClick={copyEmail} className={`${CARD_BASE} text-left cursor-pointer`}>
            <div className="flex items-center justify-between">
              <Mail size={22} style={{ color: "var(--signal)" }} />
              <span className="font-mono text-[11px] text-[var(--text-faint)] flex items-center gap-1">
                {copied ? (
                  <>
                    <Check size={12} /> copied
                  </>
                ) : (
                  <>
                    <Copy size={12} /> copy
                  </>
                )}
              </span>
            </div>
            <h3 className="font-display font-semibold text-base text-[var(--text)] mt-4">
              Email
            </h3>
            <p className="text-sm text-[var(--text-muted)] mt-1">{profile.email}</p>
          </button>

          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className={CARD_BASE}>
            <Phone size={22} style={{ color: "var(--copper)" }} />
            <h3 className="font-display font-semibold text-base text-[var(--text)] mt-4">
              Phone
            </h3>
            <p className="text-sm text-[var(--text-muted)] mt-1">{profile.phone}</p>
          </a>

          <div className={CARD_BASE}>
            <MapPin size={22} style={{ color: "var(--signal)" }} />
            <h3 className="font-display font-semibold text-base text-[var(--text)] mt-4">
              Location
            </h3>
            <p className="text-sm text-[var(--text-muted)] mt-1">{profile.location}</p>
          </div>

          <div className={CARD_BASE}>
            <h3 className="font-display font-semibold text-base text-[var(--text)] mb-4">
              Elsewhere
            </h3>
            <div className="flex items-center gap-3">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-lg border border-[var(--border-soft)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--signal)] hover:border-[var(--border-strong)] transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-lg border border-[var(--border-soft)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--signal)] hover:border-[var(--border-strong)] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={profile.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-lg border border-[var(--border-soft)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--signal)] hover:border-[var(--border-strong)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
