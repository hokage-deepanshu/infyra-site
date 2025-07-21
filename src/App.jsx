import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import ProductsPage from './pages/ProductPage'; 
import CollaborationPage from './pages/CollaborationPage'; // Apne CollaborationPage ka import karo
import GalleryPage from './pages/GalleryPage';// optional
import AboutPage from './pages/AboutPage';// optional
import ContactPage from './pages/ContactPage';
import CoursePage from './pages/CoursePage'; // Import CoursePage

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />        
        <Route path="/gallery" element={<GalleryPage />} />{/* optional */}
        <Route path="/courses" element={<CoursePage />} /> {/* Add CoursePage route */}
        <Route path="/products" element={<ProductsPage />} /> {/* optional */}
        <Route path="/about" element={<AboutPage />} /> {/* optional */}
         <Route path="/collaborations" element={<CollaborationPage />} />
         <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
