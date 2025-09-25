import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import './devicons/devicon.min.css';
import { HelmetProvider } from 'react-helmet-async';
import AppContent from './AppContent';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <LanguageProvider>
          <AppContent />
        </LanguageProvider>
      </Router>
    </HelmetProvider>
  );
}

export default App;