import { useState } from "react";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects() {
  const [query, setQuery] = useState("");

  // Derived during render — not stored in a second piece of state.
  const normalized = query.trim().toLowerCase();
  const visible = projects.filter((p) =>
    `${p.title} ${p.category} ${p.technologies.join(" ")}`
      .toLowerCase()
      .includes(normalized)
  );

  return (
    <section>
      <h1>Projects</h1>
      <div className="filter">
        <label htmlFor="project-search">Filter by title, category, or skill</label>
        <div className="filter-row">
          <input
            id="project-search"
            type="search"
            value={query}
            placeholder="e.g. React, HTTP, SAP"
            onChange={(event) => setQuery(event.target.value)}
          />
          {query && (
            <button type="button" onClick={() => setQuery("")}>
              Clear
            </button>
          )}
        </div>
      </div>
      <p role="status">{visible.length} project(s) found</p>
      {visible.length ? (
        <div className="grid">
          {visible.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      ) : (
        <p className="empty">No projects match. Try another search.</p>
      )}
    </section>
  );
}
