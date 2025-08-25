import { projects } from "@/constants";
import ProjectCard from "./ProjectCard";

const RecentProjects = () => {
  return (
    <section
      id="projects"
      className="flex-center section-padding"
      aria-labelledby="projects-title"
    >
      <div className="flex-col-center gap-15 size-full md:px-20">
        <h2 id="projects-title" className="text-center">
          Some of my recent projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10">
          {projects.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
