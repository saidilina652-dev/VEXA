// Footer.jsx
import React from "react";
import "./footer.css";
import logo from "/VexaLogo.png";
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      
      {/* LEFT - LOGO */}
      <div className="footer-logo">
        <img src={logo} alt="Vexa Logo" />
      </div>

      {/* CENTER - CONTACT */}
      <div className="footer-contact">
        <h3>Contact Us</h3>

        <a href="tel:+213123456789" className="contact-item">
          <FaPhoneAlt className="icon" />
          +213  07 82 02 01 57 
        </a>

        <a href="mailto:agencyvexa1@gmail.com" className="contact-item">
          <FaEnvelope className="icon" />
          agencyvexa1@gmail.com 
        </a>
      </div>

      {/* RIGHT - FOLLOW */}
      <div className="footer-follow">
        <h3 className="follow-us">Follow Us</h3>

        <a
          href="https://linktr.ee/vexaagenc"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-btn"
        >
          <FaLinkedin className="icon" />
          LinkedIn
        </a>
      </div>

    </footer>
  );
}