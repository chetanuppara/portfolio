import { Link } from "react-router";
import { profile, education, skills, experiences } from "../data/profile.js";
import { projects } from "../data/projects.js";
import ExperienceCard from "../components/ExperienceCard.jsx";
import SkillList from "../components/SkillList.jsx";

export function Home() {
  return (
    <section className="hero">
      <p className="eyebrow">{profile.headline}</p>
      <h1>{profile.name}</h1>
      <p className="lead">{profile.intro}</p>
      <p>{profile.targetRole}</p>
      <p className="actions">
        <Link className="button" to="/projects">
          Explore my {projects.length} projects
        </Link>
        <Link to="/experience">See my experience</Link>
      </p>
    </section>
  );
}

export function Experience() {
  return (
    <section>
      <h1>Experience</h1>

      <h2>Education</h2>
      {education.map((e) => (
        <p key={e.school}>
          <strong>{e.school}</strong> — {e.detail}
        </p>
      ))}

      <h2>Skills</h2>
      <SkillList skills={skills} />

      <h2>Experience &amp; coursework</h2>
      <div className="grid">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  const github = `https://github.com/${profile.githubUser}`;
  return (
    <section>
      <h1>Contact</h1>
      <p>
        The best way to learn more about my work is my GitHub profile, which
        includes the source code for this site.
      </p>
      <ul className="contact-list">
        <li>
          GitHub: <a href={github}>{github.replace("https://", "")}</a>
        </li>
        <li>
          Source for this site:{" "}
          <a href={`${github}/portfolio`}>{`${github.replace("https://", "")}/portfolio`}</a>
        </li>
      </ul>
    </section>
  );
}

export function NotFound() {
  return (
    <section>
      <h1>Page not found</h1>
      <p>That page doesn't exist on this site.</p>
      <Link to="/">Return home</Link>
    </section>
  );
}
