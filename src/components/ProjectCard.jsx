import { Link } from "react-router";

export default function ProjectCard({ project }) {
  return (
    <article className="card">
      <p className="tag">{project.category}</p>
      <h2>
        <Link to={`/projects/${project.slug}`}>{project.title}</Link>
      </h2>
      <p>{project.summary}</p>
      <p className="tech">
        <span className="visually-hidden">Technologies: </span>
        {project.technologies.join(" · ")}
      </p>
    </article>
  );
}
