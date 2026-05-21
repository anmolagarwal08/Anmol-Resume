import './Header.css';

interface HeaderProps {
  name: string;
  title: string;
}

export default function Header({ name, title }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <h1 className="header-name">{name}</h1>
          <p className="header-title">{title}</p>
        </div>
        <img src="/bestbuy-logo.svg" alt="Best Buy Logo" className="header-logo" />
      </div>
    </header>
  );
}
