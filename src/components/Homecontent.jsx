import React, { useEffect, useRef } from 'react';
import './Homecontent.css';
import bgImage from '../assets/download.jpg'; 
import kd from '../assets/Soil Nutrient Intelligence.png'; // Kisan Drishti image
import droneTech from '../assets/img2.jpg'; // Drone Tech image
import ddd from '../assets/about.png'; // Edge-AI Infrastructure image
// optional: if you separate styles

const Homecontent = () => {
  const handleKnowMoreClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="features-section"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="features-grid">
        {/* Kisan Drishti */}
        <div className="feature-card left-image">
          
            <div
              className="placeholder-image"
              style={{
                background: 'linear-gradient(135deg, #16a34a, #22c55e)',
              }}
            >
              <img
                src={kd}
                alt="Kisan Drishti"
                height="200px"
                width="350px"
              />
            </div>
          
          <div className="feature-content">
            <h1
              style={{
                background: 'linear-gradient(135deg,rgb(61, 133, 239),rgb(0, 84, 186))',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              KISAN DRISHTI
            </h1>
            <p>
              Revolutionary soil-level diagnostics that empower farmers with precise, real-time agricultural intelligence.
            </p>
            <div className="feature-stats">
              <span>50+ Parameters</span>
              <a
                href="https://kisandrishti.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Click To View</button>
              </a>
            </div>
          </div>
        </div>

        {/* Our Courses */}
        <div className="feature-card right-image">
          <div className="feature-content">
            <h1>OUR COURSES</h1>
            <p>
              AI-piloted drones transforming agri-logistics with precision mapping, crop monitoring, and automated field operations.
            </p>
            <div className="feature-stats">
              <span>Autonomous Flight</span>
              <a
                href="https://hokage-deepanshu.github.io/dronetech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Click To View</button>
              </a>
            </div>
          </div>
          <div className="feature-image">
            <div
              className="placeholder-image2"
              style={{
                background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
              }}
            >
              <img
                src={droneTech}
                alt="Drone Tech"
                height="350px"
                width="450px"
              />
            </div>
          </div>
        </div>

        {/* Edge-AI Infrastructure */}
        <div className="feature-card left-image">
          <div className="feature-image">
            <div
              className="placeholder-image"
              style={{

                fontSize: '5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={ddd}
                alt="Kisan Drishti"
                height="200px"
                width="350px"
              />
            </div>
          </div>
          <div className="feature-content">
            <h1>MORE ABOUT US</h1>
            <p>
              Infyra Innovations is a deeptech systems company building scalable intelligence across smart agriculture, autonomous drones, and edge-AI infrastructure — with and for Bharat's next-generation builders.
            </p>
            <div className="feature-stats">
              <span>Edge Computing</span>
              
                <span onClick={handleKnowMoreClick}>Know More</span>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homecontent;
