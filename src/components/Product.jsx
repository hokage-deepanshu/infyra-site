// src/pages/ProductsPage.jsx

import React from 'react';
 // Aapka Footer

import './Product.css'; // Iski apni CSS fil

// Apne dono products ka data yahan daalein
const productData = [
  {
    name: 'Drone Forensic Course',
    image: '/drone.png', // Path: public/images/products/drone.png
    description: 'Join our One-Month Online Internship Program on Drone Forensic Investigation and take your first step into the future of tech-enabled crime solving.',
    link: 'https://hokage-deepanshu.github.io/dronetech/' // Website ka internal link
  },
  {
    name: 'Kisan Drishti',
    image: '/kisandrishti.png', // Path: public/images/products/app.png
    description: 'Empowering farmers and inspiring the next generation with tech-driven tools and insights for modern agriculture & Personalized recommendations.',
    link: 'https://kisandrishti.in' // External link (optional)
  }
];

const Product = () => {
  return (
    // Background is div par lagega
    <div className="products-page-container">
      

      <main className="products-main-content">
        <header className="products-hero">
          <h1>Our Core Products</h1>
          <p>Innovative solutions designed to revolutionize modern Drone Technologies.</p>
        </header>

        <div className="product-showcase-area">
          {/* Pehla Product (Left) */}
          <div className="product-card left-card">
            <h2 className="product-name">{productData[0].name}</h2>
            <div className="product-image-container">
              <img src={productData[0].image} alt={productData[0].name} className="product-image" />
            </div>
            <p className="product-description">{productData[0].description}</p>
            <a href={productData[0].link} className="product-button" target="_blank" rel="noopener noreferrer">
              Click to Know More
            </a>
          </div>

          {/* Doosra Product (Right) */}
          <div className="product-card right-card">
            <h2 className="product-name">{productData[1].name}</h2>
            <div className="product-image-container">
              <img src={productData[1].image} alt={productData[1].name} className="product-image" />
            </div>
            <p className="product-description">{productData[1].description}</p>
            <a href={productData[1].link} className="product-button" target="_blank" rel="noopener noreferrer">
              Click to Know More
            </a>
          </div>
        </div>
      </main>

      
    </div>
  );
};

export default Product;