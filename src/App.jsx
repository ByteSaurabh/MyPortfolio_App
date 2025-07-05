// src/App.jsx
import React, { useState } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Internships from './components/Internships';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import Achievements from './components/Achievements';


function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app-container ${theme}`}>
      <button className="mode-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
      <Hero />
      <Projects />
      <Skills />
      <Achievements /> {/* ✅ Add this */}
      <Certifications />
      <Internships />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
