import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-logo">Praveen<span>Studio</span></div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">© 2025 Praveen Kumar E · Chennai, India</div>
        <div className="footer-copy">epraveen952@gmail.com</div>
      </div>
    </footer>
  );
}
