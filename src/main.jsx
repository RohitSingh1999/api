// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import store from './store';
import { Provider } from 'react-redux';
import './index.css';

// Import GSAP and register plugins
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // Import other plugins if needed

if (gsap) {
  gsap.registerPlugin(ScrollTrigger);
} else {
  console.error('GSAP is not available.'); // Log an error if GSAP is not found
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
