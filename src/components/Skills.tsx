import './Skills.css';

interface Skill {
  category: string;
  items: string[];
}

interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skillGroup, index) => (
          <div key={index} className="skill-group">
            <h3 className="skill-category">{skillGroup.category}</h3>
            <ul className="skill-list">
              {skillGroup.items.map((skill, idx) => (
                <li key={idx} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
