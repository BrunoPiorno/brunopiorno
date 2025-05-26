import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import './devicons/devicon.min.css';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <HomePage />
      </div>
    </LanguageProvider>
  );
}

export default App;