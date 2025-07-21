import React, { useEffect, useState } from 'react';
import Nav from '../components/Navbar';
import Hero from '../components/Hero';
import Content from '../components/Homecontent';
import Footer from '../components/Footer';

const HomePage = () => {
  const [hideNav, setHideNav] = useState(false);

  // Smooth scrolling function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = hideNav ? 0 : 80; // Adjust based on nav height
      const elementPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  // Enhanced smooth scrolling with custom easing
  const smoothScrollTo = (elementId, duration = 1000) => {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const targetPosition = element.offsetTop - (hideNav ? 0 : 80);
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  useEffect(() => {
    // Enable CSS smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.8;
      setHideNav(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Scroll animations for sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all sections when component mounts
    const sections = document.querySelectorAll('section, .content-section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      {!hideNav && (
        <Nav 
          scrollToSection={scrollToSection}
          smoothScrollTo={smoothScrollTo}
        />
      )}
      <Hero 
        scrollToSection={scrollToSection}
        smoothScrollTo={smoothScrollTo}
      />
      <Content />
      <Footer />
    </div>
  );
};

export default HomePage;