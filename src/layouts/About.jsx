import { useEffect, useRef, useState } from "react";
import { GraduationCap } from "lucide-react";
import { profile, stats, education } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

function CounterStat({ target, suffix, label, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let current = 0;
    const duration = 900;
    const stepTime = Math.max(Math.floor(duration / target), 15);

    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= target) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [start, target]);

  return (
    <div>
      <div className="font-display font-semibold text-3xl sm:text-4xl text-[var(--signal)]">
        {count}
        {suffix}
      </div>
      <span className="font-mono text-[12px] text-[var(--text-muted)]">{label}</span>
    </div>
  );
}

function About() {
  const aboutRef = useRef(null);
  const [startCounter, setStartCounter] = useState(false);

  useEffect(() => {
    const node = aboutRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounter(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (node) observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={aboutRef}
      id="about"
      className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-center">
        <Reveal x={-24} className="flex justify-center lg:justify-start">
          <div className="bracket-frame relative w-56 sm:w-64 lg:w-full lg:max-w-[300px]">
            <div className="rounded-2xl overflow-hidden border border-[var(--border-soft)]">
              <img
                src="/assets/img/avatar.png"
                alt={`Portrait of ${profile.name}`}
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
        </Reveal>

        <Reveal y={20} delay={0.1} className="min-w-0">
          <SectionHeading eyebrow="// about.tsx" title="Who is Ilham" accentWord="Ilham" />

          <p className="max-w-xl leading-relaxed text-[var(--text-muted)] text-[15px] sm:text-base">
            {profile.bio}
          </p>

          <div className="mt-6 flex items-center gap-3 font-mono text-[13px] text-[var(--text-muted)]">
            <GraduationCap size={16} className="text-[var(--copper)]" />
            <span>
              {education.degree} · {education.school} · {education.period}
            </span>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {stats.map((item) => (
              <CounterStat
                key={item.label}
                target={item.value}
                suffix={item.suffix}
                label={item.label}
                start={startCounter}
              />
            ))}
          </div>


        </Reveal>
      </div>
    </section>
  );
}

export default About;
