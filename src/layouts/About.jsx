import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

function About() {
  const stats = [
    { value: 10, label: "Project Cleared" },
    { value: 3, label: "Achievements" },
    { value: 15, label: "Certificates Earned" },
  ];

  const CounterStat = ({ target, label, start }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!start) return;

      let current = 0;
      const duration = 1000;
      const stepTime = Math.max(Math.floor(duration / target), 15);

      const timer = setInterval(() => {
        current += 1;
        setCount(current);
        if (current >= target) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }, [start, target]);

    return (
      <div className="block">
        <div className="font-manrope font-bold text-4xl text-[#a3850d] mb-3 text-center lg:text-left">
          {count}+
        </div>
        <span className="text-white text-center block lg:text-left">{label}</span>
      </div>
    );
  };

  const aboutRef = useRef(null);
  const [startCounter, setStartCounter] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounter(true);
          observer.disconnect(); // stop observing after triggered once
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <section
      ref={aboutRef}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-24 py-8 min-h-screen text-white"
      id="about"
    >
      <div className="p-4 flex justify-center items-center">
        <img className="w-100 h-100" src="/src/assets/img/avatar.png" alt="Avatar" />
      </div>

      <div className="flex flex-col justify-center gap-10">
        <div className="flex flex-col space-x-1">
          <div className="mb-10">
            <div style={{ backgroundColor: "#a3850d" }} className="w-10 h-[2px]"></div>
            <p className="text-md font-medium text-gray-400">About me.</p>
            <p className="text-4xl font-bold">
              Who is{" "}
              <span style={{ color: "#a3850d" }} className="text-4xl">
                Ilham?
              </span>
            </p>
          </div>

          <p className="mt-4 max-w-xl break-words text-justify leading-relaxed text-gray-300">
            Undergraduate student at Andalas University majoring in Computer
            Engineering with passionate software developer specializing in web
            and mobile development. Works as a full-stack developer, has built
            various projects, and is comfortable working with a wide range of
            tech stacks.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-3">
          <div className="w-full lg:w-4/5 mx-auto">
            <div className="flex flex-col flex-1 gap-10 lg:gap-0 lg:flex-row lg:justify-between">
              {stats.map((item, index) => (
                <CounterStat
                  key={index}
                  target={item.value}
                  label={item.label}
                  start={startCounter}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Download CV Button */}
        <div>
          <button
            type="button"
            className="flex gap-3 py-2.5 px-5 me-2 mb-2 text-sm font-semibold text-gray-900 cursor-pointer focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#a3850d] focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <FontAwesomeIcon icon={faDownload} />
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
