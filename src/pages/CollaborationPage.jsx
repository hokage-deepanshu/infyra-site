// src/pages/CollaborationPage.jsx

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// Apne Navbar aur Footer import karo
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Iski apni CSS file import karo
import './CollaborationPage.css';

// --- DATA: Collaborators and Partners (20 items) ---
// Apne data ke hisab se badal lena. Images ka path '/images/collaborators/...' ka matlab
// hai ki files public/images/collaborators/...' ka matlab
const collaboratorsData = [
  { name: 'Mr. Kamal Kishor Malhotra', title: 'Advisor & Mentor', image: "kamalkisore.jpeg", link: 'https://www.linkedin.com/in/kamal-kishor-malhotra/' },
  { name: 'Dr. Mukesh Kestwal', title: 'Advisor & Mentor', image: 'Mukeshkesh.jpeg', link: 'https://www.linkedin.com/in/mukeshkestwal/' },

];

// --- DATA: Slideshow mein dikhane ke liye partner logos ya images ---
const slideshowData = [
    { image: '/logo1.png', name: 'Partner 1' },
    { image: '/logo2.png', name: 'Partner 2' },
    { image: '/logo3.jpg', name: 'Partner 3' },
    { image: '/logo4.png', name: 'Partner 4' },
    { image: '/logo5.png', name: 'Partner 5' },
  
];


// Chhota sa card component (isse code saaf rehta hai)
const CollaboratorCard = ({ name, title, image, link, index }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    return (
        <div ref={ref} className={`collaborator-card ${inView ? 'is-visible' : ''}`} style={{ transitionDelay: `${index * 50}ms`}}>
            <img src={image} alt={name} className="collaborator-image" />
            <div className="card-info">
                <h3 className="collaborator-name">{name}</h3>
                <p className="collaborator-title">{title}</p>
                <a href={link} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
                </a>
            </div>
        </div>
    );
};

const CollaborationPage = () => {
    return (
        <div className="collaboration-page-container">
            <Navbar />
            <main className="collaboration-content">
                <header className="collaboration-header">
                    <h1>Our Ecosystem of Innovators</h1>
                    <p>Meet the experts, advisors, and partners who drive our mission forward.</p>
                </header>

                <div className="collaborators-grid">
                    {collaboratorsData.map((person, index) => (
                        <CollaboratorCard key={index} {...person} index={index} />
                    ))}
                </div>

                <section className="slideshow-section">
                     <div className="section-header">
                        <h2>Our Esteemed Partners</h2>
                    </div>
                    <div className="logo-slideshow">
                        <div className="slide-track">
                           {/* Slideshow ko double karke infinite loop banayenge */}
                           {slideshowData.map((partner, index) => (
                               <div className="slide" key={`a-${index}`}>
                                   <img src={partner.image} alt={partner.name} />
                               </div>
                           ))}
                           {slideshowData.map((partner, index) => (
                               <div className="slide" key={`b-${index}`}>
                                   <img src={partner.image} alt={partner.name} />
                               </div>
                           ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default CollaborationPage;