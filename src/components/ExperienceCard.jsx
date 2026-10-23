export default function ExperienceCard({ experience }) {
  return (
    <article className="card">
      <h3>{experience.title}</h3>
      <p className="meta">
        {experience.org} · {experience.when}
      </p>
      <p>
        <strong>My contribution: </strong>
        {experience.contribution}
      </p>
    </article>
  );
}
