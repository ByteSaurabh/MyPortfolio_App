// src/components/Internships.jsx
import React from 'react';
import './Internships.css';

const internships = [
  {
    role: 'DevOps Intern',
    company: 'XpressBites Technologies Pvt. Ltd.',
    duration: 'May 16 – July 10, 2024',
    work: 'Worked on CI/CD pipeline, Docker containerization, and AWS EC2 deployment.'
  },
  {
    role: 'Campus Ambassador',
    company: 'Acemegrade',
    duration: '2024',
    work: 'Hosted tech events, created learning content, and mentored developers in the community.'
  }
];

function Internships() {
  return (
    <section className="internships-section">
      <h2 className="section-title">Internships & Roles</h2>
      <div className="internships-grid">
        {internships.map((intern, idx) => (
          <div className="intern-card" key={idx}>
            <h3>{intern.role}</h3>
            <p><strong>{intern.company}</strong></p>
            <p><em>{intern.duration}</em></p>
            <p>{intern.work}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Internships;
