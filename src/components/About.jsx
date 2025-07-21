import React from 'react';
import './About.css';

function About() {
  const handleExploreClick = (event) => {
    event.preventDefault();
    console.log("Explore Solutions button clicked!");
  };

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2>Precision Systems for an Intelligent Bharat</h2>
        <p className="statement">
          We architect precision systems for a nation already building its future — boldly, intelligently, and on its own terms.
        </p>

        <div className="about-content">
          <div className="about-text">
            <p>
              Infyra Innovations is a deeptech systems company building scalable intelligence across smart agriculture, autonomous drones, and edge-AI infrastructure — with and for Bharat's next-generation builders.
            </p>
            <p>
              We originate from the ground, work with precision, and scale through systems — not slogans. From Kisan Drishti's soil-level diagnostics to AI-piloted drones in agri-logistics, we design solutions meant to last — engineered in real fields, across real villages, for measurable outcomes.
            </p>
          </div>

          <div className="beliefs">
            <h3>What we believe:</h3>
            <div className="belief-item">Precision is dignity</div>
            <div className="belief-item">Intelligence is infrastructure</div>
            <div className="belief-item">Systems are the new soft power</div>
            <div className="belief-item">The future is already under construction</div>
          </div>
        </div>

        <div className="cta-buttons">
          <a href="#" className="btn btn-primary" onClick={handleExploreClick}>
            Explore Solutions
          </a>
          <a
            href="https://www.linkedin.com/company/infyra-innovations/"
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meet the Founders
          </a>
        </div>
      </div>
    </section>
  );
}

export default About ;
