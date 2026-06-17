import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

function Project() {
  return (
    <section id="projects" className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="// projects.tsx" title="Selected work" accentWord="work" />

        <Tabs defaultValue="web" className="w-full gap-8">
          <TabsList>
            <TabsTrigger value="web">Website</TabsTrigger>
            <TabsTrigger value="app">Mobile app</TabsTrigger>
            <TabsTrigger value="other">Other</TabsTrigger>
          </TabsList>

          <TabsContent value="web">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.web.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="app">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.mobile.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="other">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.other.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default Project;
