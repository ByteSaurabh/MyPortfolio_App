// src/components/Achievements.jsx
import React from 'react';
import './Achievements.css';

const milestones = [
  { year: "2023", title: "📜 Filed Patent – AgriSmart SolarBot" },
  { year: "2024", title: "💼 DevOps Intern @ XpressBites" },
  { year: "2024", title: "✅ Meta Certified Front-End Developer" },
  { year: "2025", title: "🚆 Built AI Complaint Classifier for Indian Railways" },
];

function Achievements() {
  return (
    <section className="achievements-section">
      <h2 className="section-title">🚀 Achievements</h2>
      <ul className="timeline">
        {milestones.map((m, i) => (
          <li key={i}>
            <span className="year">{m.year}</span>
            <p>{m.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Achievements;
