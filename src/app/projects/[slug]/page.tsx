import { projects } from "@/projects";
import ProjectClient from "./project-client";

const ProjectPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <ProjectClient
      project={project}
      nextProject={nextProject}
      prevProject={prevProject}
    />
  );
};

export default ProjectPage;
