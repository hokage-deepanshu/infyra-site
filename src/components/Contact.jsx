import React from 'react';
import './Contact.css'; // Optional: if you have CSS for this section

const Contact= () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Let's Build Together</h2>
        <p className="statement">
          Ready to architect precision systems that matter? Whether you're a potential partner,
          customer, or future team member, we'd love to hear from you.
        </p>
        <div className="about-content">
          <div className="about-text">
            <p>
              Our team is available to discuss your needs and how we can collaborate to build
              scalable intelligence solutions that make a real difference for Bharat.
            </p>
          </div>
          <div className="beliefs">
            <h3>Get in Touch:</h3>
            <div className="belief-item">General: <a href="mailto:contact@infyrainnovations.com">contact@infyrainnovations.com</a></div>
            <div className="belief-item">Careers: <a href="mailto:careers@infyrainnovations.com">careers@infyrainnovations.com</a></div>
            <div className="belief-item">
              <a href="https://www.linkedin.com/company/infyra" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
