import './Contacts.css';

interface ContactsProps {
  location: string;
  phone: string;
  email: string;
}

export default function Contacts({ location, phone, email }: ContactsProps) {
  return (
    <section className="contacts">
      <div className="contact-item">
        <span className="contact-label">📍</span>
        <span>{location}</span>
      </div>
      <div className="contact-item">
        <span className="contact-label">📞</span>
        <a href={`tel:${phone}`}>{phone}</a>
      </div>
      <div className="contact-item">
        <span className="contact-label">✉️</span>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </section>
  );
}
