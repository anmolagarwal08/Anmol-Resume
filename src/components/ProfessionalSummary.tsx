import './ProfessionalSummary.css';

interface ProfessionalSummaryProps {
  summary: string;
}

export default function ProfessionalSummary({ summary }: ProfessionalSummaryProps) {
  return (
    <section className="professional-summary">
      <h2 className="summary-title">Professional Summary</h2>
      <p className="summary-text">{summary}</p>
    </section>
  );
}
