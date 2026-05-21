import './Education.css';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
}

interface EducationProps {
  education: EducationItem[];
}

export default function Education({ education }: EducationProps) {
  return (
    <section className="education">
      <h2 className="education-title">Education</h2>
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3 className="degree">{edu.degree}</h3>
            <p className="institution">
              <span>{edu.institution}</span>
              <span className="location">{edu.location}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
