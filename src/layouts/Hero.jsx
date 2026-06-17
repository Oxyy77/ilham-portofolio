import { ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/lib/content";
import { useTypewriter } from "@/lib/useTypewriter";
import CircuitBackground from "@/components/CircuitBackground";

function Hero() {
  const role = useTypewriter(profile.roles);

  const goToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-20 sm:pb-28"
    >
      <CircuitBackground />

      <div className="mx-auto max-w-6xl grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-10 items-center">
        {/* Left: intro */}
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-6 h-px bg-[var(--signal)]" />
            <p className="font-mono text-[12px] tracking-wide text-[var(--text-muted)]">
              {"// hero.tsx"}
            </p>
          </div>

          <h1 className="font-display font-semibold leading-[1.05] text-4xl sm:text-5xl lg:text-6xl text-[var(--text)]">
            Hi, I&apos;m{" "}
            <span style={{ color: "var(--signal)" }}>{profile.name}</span>.
          </h1>

          <div className="mt-3 h-9 sm:h-10 flex items-center">
            <p className="font-mono text-base sm:text-lg text-[var(--copper)]">
              {role}
              <span className="caret-blink inline-block w-[2px] h-5 sm:h-6 ml-1 align-middle bg-[var(--copper)]" />
            </p>
          </div>

          <p className="mt-6 max-w-lg text-[15px] sm:text-base leading-relaxed text-[var(--text-muted)]">
            {profile.bio}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <button
              onClick={goToProjects}
              className="group inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold bg-[var(--signal)] text-[#06120f] hover:brightness-110 transition cursor-pointer"
            >
              View projects
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold border border-[var(--border-strong)] text-[var(--text)] hover:bg-[var(--hover-bg)] transition"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          <div className="mt-10 flex items-center gap-2 font-mono text-[12px] text-[var(--text-faint)]">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--signal)] pulse-dot" />
              <span className="relative inline-flex rounded-full w-2 h-2 bg-[var(--signal)]" />
            </span>
            Open to opportunities · {profile.location}
          </div>
        </div>

        {/* Right: code panel visual */}
        <div className="relative min-w-0">
          <div className="bracket-frame rounded-xl border border-[var(--border-soft)] bg-[var(--surface)]/80 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.45)] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border-soft)] bg-[var(--tint-bg)]">
              <span className="w-2 h-2 rounded-full bg-[#ff5f57]/70" />
              <span className="w-2 h-2 rounded-full bg-[#febc2e]/70" />
              <span className="w-2 h-2 rounded-full bg-[#28c840]/70" />
              <span className="ml-2 font-mono text-[12px] text-[var(--text-muted)]">
                ilham.config.ts
              </span>
            </div>

            <pre className="font-mono text-[11.5px] sm:text-[13.5px] leading-6 sm:leading-7 p-4 sm:p-6 overflow-x-auto">
              <code>
                <Line n={1}>
                  <Kw>const</Kw> developer = {"{"}
                </Line>
                <Line n={2} indent={1}>
                  <Key>name</Key>: <Str>&quot;{profile.name}&quot;</Str>,
                </Line>
                <Line n={3} indent={1}>
                  <Key>role</Key>: <Str>&quot;Full-Stack Developer&quot;</Str>,
                </Line>
                <Line n={4} indent={1}>
                  <Key>stack</Key>: [<Str>&quot;React&quot;</Str>, <Str>&quot;Laravel&quot;</Str>, <Str>&quot;Flutter&quot;</Str>],
                </Line>
                <Line n={5} indent={1}>
                  <Key>location</Key>: <Str>&quot;Bukittinggi, ID&quot;</Str>,
                </Line>
                <Line n={6} indent={1}>
                  <Key>available</Key>: <Bool>true</Bool>,
                </Line>
                <Line n={7}>{"};"}</Line>
              </code>
            </pre>
          </div>

          <div className="absolute -bottom-4 -right-4 sm:-right-8 hidden sm:flex items-center gap-2 rounded-lg border border-[var(--border-soft)] bg-[var(--surface)] px-3 py-2 font-mono text-[11px] text-[var(--text-muted)] shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--signal)]" />
            build passing
          </div>
        </div>
      </div>
    </section>
  );
}

function Line({ children, n, indent = 0 }) {
  return (
    <div className="flex">
      <span className="w-6 select-none text-right pr-3 text-[var(--text-faint)]">{n}</span>
      <span style={{ paddingLeft: `${indent * 1.25}rem` }} className="text-[var(--text)]">
        {children}
      </span>
    </div>
  );
}

function Kw({ children }) {
  return <span style={{ color: "var(--copper)" }}>{children}</span>;
}
function Key({ children }) {
  return <span className="text-[var(--text)]">{children}</span>;
}
function Str({ children }) {
  return <span style={{ color: "var(--signal)" }}>{children}</span>;
}
function Bool({ children }) {
  return <span style={{ color: "var(--copper)" }}>{children}</span>;
}

export default Hero;
