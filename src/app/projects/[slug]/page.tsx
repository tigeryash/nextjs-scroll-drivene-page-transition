import { projects } from "@/projects";
import ProjectClient from "./project-client";

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

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
