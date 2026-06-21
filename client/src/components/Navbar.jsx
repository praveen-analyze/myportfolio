import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const closeAndGo = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <>
      <nav id="nav">
        <div className="nav-logo">Praveen<span>Studio</span></div>
        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <NavLink to="/contact" className="nav-cta">Get a Quote →</NavLink>
        <div className="hamburger" onClick={() => setMenuOpen((o) => !o)}>
          <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px,5px)' } : undefined}></span>
          <span style={menuOpen ? { opacity: 0 } : undefined}></span>
          <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px,-5px)' } : undefined}></span>
        </div>
      </nav>
      {menuOpen && (
        <div className="mobile-menu" style={{ display: 'block' }}>
          {NAV_ITEMS.map((item) => (
            <button key={item.to} onClick={() => closeAndGo(item.to)}>{item.label}</button>
          ))}
          <button onClick={() => closeAndGo('/contact')} style={{ color: '#60A5FA', fontWeight: 700 }}>Get a Quote →</button>
        </div>
      )}
    </>
  );
}
