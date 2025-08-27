// src/components/Hero.jsx

import React from 'react';
import mypic from '../assets/mypic.jpg';
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-header">
        <h1 className="hero-title">Hi, I'm <span>Saurabh Sharma</span></h1>
        <img src={mypic} alt="Saurabh" className="hero-pic" />
      </div>

      <TypeAnimation
        sequence={[
          'Full-Stack Developer 💻',
          2000,
          'Machine Learning Explorer 🤖',
          2000,
          'DevOps Practitioner 🚀',
          2000,
          'Innovator. Builder. Thinker. 🧠',
          2000
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="hero-subtitle"
      />

      <p className="hero-desc">
        I build smart, scalable solutions using full-stack web development, DevOps, and AI.
        With a passion for tech and innovation, I turn ideas into real-world impact.
      </p>

      <div className="hero-buttons">
        <a
          href="https://github.com/ByteSaurabh"
          target="_blank"
          rel="noreferrer"
          className="hero-btn"
        >
          🌐 GitHub
        </a>
        <a
          href="/Saurabh_Sharma_Resume.pdf"
          download="Saurabh_Sharma_Resume.pdf"
          className="hero-btn primary"
        >
          📄 Download Resume
        </a>
      </div>
    </section>
  );
}

export default Hero;
