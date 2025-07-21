import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';  // ✅ ADD THIS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>       {/* ✅ Wrap your App here */}
      <App />
    </HashRouter>
  </React.StrictMode>
);
