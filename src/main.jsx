import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Header from './assets/components/header/Header.jsx';
import Footer from './assets/components/footer/Footer.jsx';
import '../src/global.module.css';
import '../src/script.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
);
