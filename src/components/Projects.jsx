import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Promise Pulse',
    description: 'Track MP/MLA promises, raise concerns, and vote on fulfillment using a React Native app with Firebase backend.',
    tech: ['React Native', 'Firebase', 'MongoDB', 'JWT'],
    //link: '' // 🔗 Add GitHub or demo link here
  },
  {
    title: 'Rail Madad AI Classifier',
    description: 'An AI-based classifier for Indian Railways complaint system using NLP and sentiment analysis.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'TensorFlow'],
    //link: '' // 🔗 Add project link here
  },
  {
    title: 'Meme ToDo App',
    description: 'A hilarious productivity app that roasts you with memes until you finish your tasks. Fun meets functionality!',
    tech: ['React', 'Context API', 'Tailwind CSS'],
    //link: '' // 🔗 Paste Meme ToDo GitHub/demo link here
  },
  {
    title: 'My Portfolio App',
    description: 'A personal portfolio showcasing my projects and skills.',
    tech: ['React', 'Context API', 'Tailwind CSS'],
    //link: '' // 🔗 Paste Meme ToDo GitHub/demo link here
  },
  {
    title: 'AgriSmart SolarBot: AI-Driven Farming',
    description: 'An AI-powered chatbot designed to assist farmers with real-time information on crop management, pest control, and sustainable practices.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenCV', 'TensorFlow'],
    //link: '' // 🔗 Paste AgriSmart SolarBot GitHub/demo link here
  }
  
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">💡 Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div key={idx} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="tech-stack">
              {proj.tech.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                🔗 View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
