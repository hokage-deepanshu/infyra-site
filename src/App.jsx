import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import ProductsPage from './pages/ProductPage';
import CollaborationPage from './pages/CollaborationPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CoursePage from './pages/CoursePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/courses" element={<CoursePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/collaborations" element={<CollaborationPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
