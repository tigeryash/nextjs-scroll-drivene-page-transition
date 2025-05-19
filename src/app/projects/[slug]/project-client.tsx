import Link from "next/link";

const ProjectClient = ({
  project,
  nextProject,
  prevProject,
}: {
  project: any;
  nextProject: any;
  prevProject: any;
}) => {
  return (
    <div className="project-page">
      <div className="project-nav">
        <div className="link">
          <span>&#8592;&nbsp;</span>
          <Link href={`/projects/${prevProject.slug}`}>Previous</Link>
        </div>

        <div className="project-page-scroll-progress">
          <p>{project.title}</p>
          <div className="project-page-scroll-progress-bar"></div>
        </div>
        <div className="link">
          <span>&#8594;&nbsp;</span>
          <Link href={`/projects/${nextProject.slug}`}>Next</Link>
        </div>
      </div>

      <div className="project-hero">
        <h1>
          {project.title}
          <p className="project-description">{project.description}</p>
        </h1>
      </div>

      <div className="project-images">
        {project.images &&
          project.images.map((image: string, index: number) => (
            <div className="project-img" key={index}>
              <img src={image} alt={project.title} />
            </div>
          ))}
      </div>

      <div className="project-footer">
        <h1>{nextProject.title}</h1>
        <div className="project-footer-copy">
          <p>Next Project</p>

          <div className="next-project-progress">
            <div className="next-project-progress-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectClient;
