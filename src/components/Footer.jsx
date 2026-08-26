import React from 'react';
import { Cpu } from 'lucide-react';

const Footer = () => {
  const handleScrollTo = (id) => {
    const target = document.getElementById(id);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'interests', label: 'Interests' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer className="footer-bar">
      <div className="container footer-container">
        {/* Left Column: Logo & Degree */}
        <div className="footer-left">
          <div className="footer-logo">
            <Cpu className="logo-icon-footer" size={20} />
            <span className="logo-text">Shreya <span className="logo-accent">Uvaraj</span></span>
          </div>
          <p className="footer-degree">
            B.Tech – Artificial Intelligence & Data Science
          </p>
        </div>

        {/* Right Column: Mini Sitemap Navigation */}
        <div className="footer-right">
          <div className="footer-links">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className="footer-nav-link"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Bar: Copyright line */}
      <div className="container footer-bottom">
        <p className="copyright-text">
          &copy; {new Date().getFullYear()} Shreya Uvaraj. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
