import React from 'react';
import './Footer.css'; // Optional: Add styles here or inline

const Footer = () => {
  const showSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Company</h3>
          <a href="about" onClick={() => showSection('about')}>About</a>
          <a href="collaborations" onClick={() => showSection('collaborations')}>Collaborations</a>
          <a href="#contact" onClick={() => showSection('contact')}>Contact</a>
        </div>
        <div className="footer-section">
          <h3>Products</h3>
          <a href="https://kisandrishti.in">Kisan Drishti</a>
          <a href="#">Infyra Drones</a>
          <a href="#">API Access</a>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <a href="mailto:contact@infyrainnovations.com">contact@infyrainnovations.com</a>
          <a href="https://www.linkedin.com/company/infyra/">LinkedIn</a>
          <a href="https://www.instagram.com/infyra_innovations?utm_source=qr&igsh=MW1nbDJwbTQyOXByaw==">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2025 Infyra Innovations LLP</p>
      </div>
    </footer>
  );
};

export default Footer;
