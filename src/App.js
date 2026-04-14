import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import './devicons/devicon.min.css';
import AppContent from './AppContent';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <LanguageProvider>
        <AppContent />
        <WhatsAppButton />
      </LanguageProvider>
    </Router>
  );
}

export default App;