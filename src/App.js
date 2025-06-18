import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import './devicons/devicon.min.css';
import { LanguageProvider } from './context/LanguageContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Rutas en español */}
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            
            {/* Rutas en inglés */}
            <Route path="/en" element={<HomePage />} />
            <Route path="/en/blog" element={<BlogList />} />
            <Route path="/en/blog/:slug" element={<BlogPost />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;