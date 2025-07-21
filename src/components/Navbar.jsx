import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Is file ko banana zaroori hai
import logo from '../assets/Infyra Logo-Photoroom.png'; 
import { useNavigate } from 'react-router-dom';// Path check kar lein
import { Link } from 'react-router-dom';

// Component ka naam Capital letter se shuru hona best practice hai.
function Navbar({ showSection }) {
  // 1. Logic ko seedha component ke andar rakhein
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    // Thoda behtar logic: page ke top par navbar hide na ho
    if (window.scrollY > 100 && window.scrollY > lastScrollY) {
      setShow(false); // Neeche scroll karne par hide karo
    } else {
      setShow(true);  // Upar scroll karne par show karo
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);
  const navigate = useNavigate();



  // 2. 'show' state ke hisab se className ko conditionally add karein
  return (
    <nav className={`navbar ${!show && 'navbar--hidden'}`}>
      <a href="#" className="logo" onClick={() => showSection('home')}>
        <img src={logo} height="100px" width="350px" alt="Infyra Logo" />
      </a>

      <ul className="nav-links">
  <li><Link to="/home">Home</Link></li>
  <li><Link to="/gallery">Gallery</Link></li>
  <li><Link to="/courses">Courses</Link></li>
  <li><Link to="/products">Products</Link></li>
  <li><Link to="/collaborations">Collaborations</Link></li>
  <li><Link to="/about">About</Link></li>
</ul>
      <button className="contact-btn" onClick={() => navigate('/contact')}>Contact Us</button>
    </nav>
  );
}

export default Navbar;