import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global CSS yahan import hota hai
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);