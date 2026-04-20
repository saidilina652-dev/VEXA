import React, { useState } from "react";
import "./navbar.css";

const scrollToSection = (id) => {
  const section = document.getElementById(id);

  if (section) {
    const navbarHeight = 100; // طول navbar

    const elementPosition = section.offsetTop - navbarHeight;

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth"
    });
  }
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Team", id: "team" },
    { name: "Contact", id: "contact" }
  ];
  return (
    <header className="header">
      <nav className="navbar">
        <div className="top-logo">
          <img src="/VexaLogo.png" alt="Logo" />
        </div>

           <div className="nav-container">
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            {links.map((link) => (
              <li key={link.name}>
                <button onClick={() => scrollToSection(link.id)}>
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
        </div>

        <div className="top-icon">
          <img src="/Wbesite3.png" alt="icon" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;