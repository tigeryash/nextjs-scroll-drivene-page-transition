import Link from "next/link";
import { projects } from "../../projects";

const page = () => {
  return (
    <ul className="project-list">
      {projects.map((project: any) => (
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
