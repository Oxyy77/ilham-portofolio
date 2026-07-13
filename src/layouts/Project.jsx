import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";

function Project() {
  return (
    <section id="projects" className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow="// projects.tsx" title="Selected work" accentWord="work" />
          <div className="font-mono text-xs text-[var(--text-faint)] text-center -mt-8 mb-8">
            Last updated: <span className="text-[var(--text-muted)]">Jul 2026</span>
          </div>
        </Reveal>

        <Tabs defaultValue="web" className="w-full gap-8">
          <TabsList className="mx-auto">
            <TabsTrigger value="web">Website</TabsTrigger>
            <TabsTrigger value="app">Mobile app</TabsTrigger>
            <TabsTrigger value="other">Other</TabsTrigger>
          </TabsList>

          <TabsContent value="web">
            <Reveal stagger={0.08} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.web.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </Reveal>
          </TabsContent>

          <TabsContent value="app">
            <Reveal stagger={0.08} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.mobile.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </Reveal>
          </TabsContent>

          <TabsContent value="other">
            <Reveal stagger={0.08} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.other.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </Reveal>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default Project;
