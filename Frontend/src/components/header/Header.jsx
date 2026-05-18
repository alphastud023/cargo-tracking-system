import { useState } from "react";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";

import "./Header.css";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="topHeader">
      <div className="container headerRow">
        <div className="brand">
          <div className="logoMark" aria-hidden="true">
            <FaGlobe />
          </div>
          <div className="brandText">
            <div className="brandName">LONDON FREIGHT &</div>
            <div className="brandName">LOGISTICS LTD</div>
          </div>
        </div>

        <button
          className="menuToggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`navLinks ${menuOpen ? "active" : ""}`} aria-label="Primary">
          <a href="#home" className="navLink">HOME</a>
          <a href="#services" className="navLink">SERVICES</a>
          <a href="#solutions" className="navLink">SOLUTIONS</a>
          <a href="#about-us" className="navLink">ABOUT US</a>
          <a href="#contact-us" className="navLink">CONTACT US</a>
        </nav>

        <div className="phoneBox">
          <div className="phoneLine">
            <span className="phoneIcon" aria-hidden="true">☎</span>
            <span className="phoneText">+44 20 1534 5178</span>
          </div>
        </div>
      </div>
    </header>
  );
}
