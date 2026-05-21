import './WorkExperience.css';

interface Experience {
  company: string;
  position: string;
  location: string;
  duration: string;
  achievements: string[];
}

interface WorkExperienceProps {
  experiences: Experience[];
}

export default function WorkExperience({ experiences }: WorkExperienceProps) {
  return (
    <section className="work-experience">
      <h2 className="experience-title">Work Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <div className="experience-info">
                <h3 className="position">{exp.position}</h3>
                <p className="company-location">
                  <span className="company">{exp.company}</span>
                  <span className="location">{exp.location}</span>
                </p>
              </div>
              <p className="duration">{exp.duration}</p>
            </div>
            <ul className="achievements">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx} className="achievement">{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
