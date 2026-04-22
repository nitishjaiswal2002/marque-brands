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
  const [scrolled,    setScrolled]   = useState(false);
  const [isMenuOpen,  setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">

        {/* Logo */}
        <a href="#hero" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__logo-marque">Marque</span>
          <span className="navbar__logo-brands">Brands</span>
        </a>

        {/* Hamburger button */}
        <button
          className="navbar__toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`hamburger ${isMenuOpen ? 'hamburger--active' : ''}`} />
        </button>

        {/* Links */}
        <div className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : ''}`}>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="navbar__link"
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          <a href="#contact" className="navbar__cta" onClick={closeMenu}>
            Get In Touch
          </a>
        </div>

      </div>

      {/* Dark overlay jab menu khula ho */}
      {isMenuOpen && (
        <div className="navbar__overlay" onClick={closeMenu} />
      )}
    </nav>
  );
}

export default Navbar;