import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const NAV_LINKS = [
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Track Record', href: '#track-record' },
  { label: 'Clients',      href: '#clients' },
  { label: 'Contact',      href: '#contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">

        {/* Logo */}
        <a href="#hero" className="navbar__logo">
          <span className="navbar__logo-marque">Marque</span>
          <span className="navbar__logo-brands">Brands</span>
        </a>

        {/* Links */}
        <div className="navbar__links">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} className="navbar__link">
              {label}
            </a>
          ))}
          <a href="#contact" className="navbar__cta">Get In Touch</a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
