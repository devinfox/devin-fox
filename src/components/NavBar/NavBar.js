import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`navbar-items ${isMenuOpen ? 'open' : ''}`}>
          <li><a class="nav-item" href="/">Home</a></li>
          <li><a class="nav-item" href="/portfolio">Projects</a></li>
          <li><a class="nav-item" href="/results">Results</a></li>
          <li><a class="nav-item" href="/#about-section">About</a></li>
          <li><a class="nav-item" href="/#contact">Contact</a></li>
        </ul>
      </div>
      <div className="contact-container">
        <button>
        <a className="callNow" style={{textDecoration: "none", fontColor: "black",}} href="tel:+8182092305">Call Now</a>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
