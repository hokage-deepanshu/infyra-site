import React, { useEffect, useRef } from 'react';
import './Hero.css';

// Component ke liye assets
import myImage from '../assets/Heroimg.png'; // Yeh aapki background image hai


const Hero = () => {
  const heroRef = useRef(null);

  // Yeh background image wala logic waisa hi rahega, ise nahi chhedenge
  useEffect(() => {
    const heroBackground = `url(${myImage})`; // Aapki BG image
    const defaultBackground = ''; 

    const handleScroll = () => {
      if (heroRef.current) {
        const scrollThreshold = heroRef.current.offsetHeight * 0.8;
        if (window.scrollY > scrollThreshold) {
          document.body.style.background = defaultBackground;
        } else {
          document.body.style.background = heroBackground;
        }
      }
    };

    document.body.style.background = heroBackground;
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.background = defaultBackground;
    };
  }, []); // myImage ko dependency array mein daal sakte hain [myImage]

  const handleScrollDown = () => {
    const nextSection = document.getElementById('about'); 
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-text">
          <h1>INFYRA INNOVATIONS</h1>
          <h3>Intelligence from Soil to Sky™</h3>
          <p>
            We architect precision systems for a nation already building its future,
            boldly, intelligently, and on its own terms.
          </p>
        </div>
        
        {/* === RIGHT SIDE WALA DIV WAPAS ADD KIYA GAYA HAI === */}
        {/*<div className="hero-animation">
          <div className="video-circle">
            {/* Animated circular boundary */}
            {/*<div className="animated-border"></div>
            
            <video 
              src={heroCircleVideo} // Video file ka import use kiya gaya hai
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
        </div>*/}
        
      </div>
      <div className="scroll-down-container" onClick={handleScrollDown}>
        <span>Scroll Down</span>
        <div className="mouse">
          <div className="scroller"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;