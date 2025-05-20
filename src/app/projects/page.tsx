import Link from "next/link";
import { Project, projects } from "../../projects";

const page = () => {
  return (
    <ul className="project-list">
      {projects.map((project: Project) => (
        <li key={project.id}>
          <div>
            <span>&#8594;</span>
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default page;
