function SkillBadge({ skill }) {
  return <li className="badge">{skill}</li>;
}

export default function SkillList({ skills }) {
  return (
    <ul className="badges">
      {skills.map((skill) => (
        <SkillBadge key={skill} skill={skill} />
      ))}
    </ul>
  );
}
