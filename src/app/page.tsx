import { About } from "@/components/sections/About";
import { Architecture } from "@/components/sections/Architecture";
import { Experience } from "@/components/sections/Experience";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { ProjectsWall } from "@/components/sections/ProjectsWall";
import { Services } from "@/components/sections/Services";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";
import { getAllProjects, getFeaturedProjects } from "@/lib/projects";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col lg:min-h-svh">
        <Hero />
        <TechStack />
      </div>
      <About />
      <Services />
      <Architecture />
      <FeaturedProjects projects={getFeaturedProjects()} />
      <ProjectsWall projects={getAllProjects()} />
      <Process />
      <Experience />
      <Testimonials />
    </>
  );
}
