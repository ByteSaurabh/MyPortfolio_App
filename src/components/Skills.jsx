// src/components/Skills.jsx
import React from 'react';
import './Skills.css';

const skills = {
  Languages: ['C++', 'Python', 'Java', 'Kotlin', 'Swift', 'HTML', 'CSS', 'JavaScript'],
  Tools: ['Git', 'GitHub', 'Postman', 'Docker', 'VS Code'],
  DevOps: ['CI/CD', 'GitHub Actions', 'AWS EC2', 'Netlify', 'Vercel'],
  ML_AI: ['TensorFlow', 'Pandas', 'Numpy', 'OpenCV'],
  Cloud: ['AWS', 'Firebase', 'MongoDB Atlas']
};

function Skills() {
  return (
    <section className="skills-section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items], idx) => (
          <div className="skills-card" key={idx}>
            <h3>{category}</h3>
            <div className="skills-tags">
              {items.map((skill, i) => (
                <span className="skill-tag" key={i}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
