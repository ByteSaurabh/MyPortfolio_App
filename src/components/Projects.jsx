import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Promise Pulse',
    description: 'Track MP/MLA promises, raise concerns, and vote on fulfillment using a React Native app with Firebase backend.',
    tech: ['React Native', 'Firebase', 'MongoDB', 'JWT'],
    link: 'https://promise-pulse.vercel.app/' // Example link
  },
  {
    title: 'Rail Madad AI Classifier',
    description: 'An AI-based classifier for Indian Railways complaint system using NLP and sentiment analysis.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'TensorFlow'],
    link: 'https://railmadad-ai.vercel.app/' // Example link
  },
  {
    title: 'Meme ToDo App',
    description: 'A hilarious productivity app that roasts you with memes until you finish your tasks. Fun meets functionality!',
    tech: ['React', 'Context API', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://meme-todo-list.vercel.app/' // Example link
  },
  {
    title: 'My Portfolio App',
    description: 'A personal portfolio showcasing my projects and skills.',
    tech: ['React', 'Context API', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://saurabh-portfolio-iota.vercel.app/' // Example link
  },
  {
    title: 'Sharehood: Community Sharing & Rental Platform',
    description: 'A full-stack web application that enables local communities to share, rent, and exchange items.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Socket.io'],
    link: 'https://sharehood.shop/' // Example link
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
            <a
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              🔗 View Live
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
