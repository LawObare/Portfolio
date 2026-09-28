import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <nav className="container navbar">
        <Link to="/" className="brand-mark" onClick={closeMenu}>
          <div className="brand-geometry">
            <span className="geo-rect"></span>
            <span className="geo-circle"></span>
          </div>
          <span className="brand-text">LAW/OBARE</span>
        </Link>

        {/* Desktop Nav */}
        <div className="nav-links desktop-only">
          <NavLink to="/" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>HOME</NavLink>
          <a href="/#about" className="nav-link">ABOUT</a>
          <NavLink to="/work" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>WORK</NavLink>
          <a href="/#journey" className="nav-link">JOURNEY</a>
          <a href="/#contact" className="nav-link">CONTACT</a>
          <a href="https://github.com/LawObare" target="_blank" rel="noopener noreferrer" className="nav-link icon-link">
            GitHub <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          <NavLink to="/" className="mobile-nav-link" onClick={closeMenu}>HOME</NavLink>
          <a href="/#about" className="mobile-nav-link" onClick={closeMenu}>ABOUT</a>
          <NavLink to="/work" className="mobile-nav-link" onClick={closeMenu}>WORK</NavLink>
          <a href="/#journey" className="mobile-nav-link" onClick={closeMenu}>JOURNEY</a>
          <a href="/#contact" className="mobile-nav-link" onClick={closeMenu}>CONTACT</a>
          <a href="https://github.com/LawObare" target="_blank" rel="noopener noreferrer" className="mobile-nav-link icon-link" onClick={closeMenu}>
            GitHub <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;