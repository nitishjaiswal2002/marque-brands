import React from 'react';
import '../styles/Footer.css';

const LINKS = [
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Track Record', href: '#track-record' },
  { label: 'Clients',      href: '#clients' },
  { label: 'Contact',      href: '#contact' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* Logo */}
        <a href="#hero" className="footer__logo">
          <span className="footer__logo-marque">Marque</span>
          <span className="footer__logo-brands">Brands</span>
        </a>

        {/* Nav links */}
        <nav className="footer__links">
          {LINKS.map(({ label, href }) => (
            <a key={label} href={href} className="footer__link">{label}</a>
          ))}
        </nav>

        <div className="footer__divider" />

        <p className="footer__copy">
          © {new Date().getFullYear()} Marque Brands. All rights reserved.
          &nbsp;·&nbsp; www.marquebrands.com
          &nbsp;·&nbsp; A Digital Transformation Fleet
        </p>

      </div>
    </footer>
  );
}

export default Footer;
