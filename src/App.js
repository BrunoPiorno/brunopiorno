import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import './devicons/devicon.min.css';
import { HelmetProvider } from 'react-helmet-async';
import AppContent from './AppContent';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;