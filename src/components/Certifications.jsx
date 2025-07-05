import React from 'react';
import './Certifications.css';

const certifications = [
  {
    title: 'The Full Stack',
    org: 'Meta',
    link: 'https://coursera.org/share/62508dfd8ea35bf1895d23d89abfa759'
  },
  {
    title: 'Databases and SQL for Data Science with Python',
    org: 'IBM',
    link: 'https://www.coursera.org/account/accomplishments/verify/2KEK4JZGC9EV' // ⬅️ Paste certificate link here
  },
  {
    title: 'SQL: A Practical Introduction for Querying',
    org: 'IBM',
    link: 'https://www.coursera.org/account/accomplishments/verify/2ME6MXAH78UG' // ⬅️ Paste certificate link here
  },
  
  {
    title: 'Play It Safe: Manage Security Risks',
    org: 'Google',
    link: 'https://www.coursera.org/account/accomplishments/verify/SEG9JFVJVZRD' // ⬅️ Paste certificate link here
  },
  {
    title: 'Introduction to Databases',
    org: 'Meta',
    link: 'https://www.coursera.org/account/accomplishments/verify/3FMT9M5AMVK4' // ⬅️ Paste certificate link here
  },
  {
    title: 'IT Security: Defense Against the Digital Dark Arts',
    org: 'Google',
    link: 'https://www.coursera.org/account/accomplishments/verify/Z8MM76Y7GS83' // ⬅️ Paste certificate link here
  },
  {
    title: 'Python for Data Science, AI and Development',
    org: 'IBM',
    link: 'https://www.coursera.org/account/accomplishments/verify/67AC3LPTCAQE' // ⬅️ Paste certificate link here
  },
  {
    title: 'Foundations of Cybersecurity',
    org: 'Google',
    link: 'https://www.coursera.org/account/accomplishments/verify/MZSNMGKPLFXM' // ⬅️ Paste certificate link here
  },
  {
    title: 'Prompt Engineering for ChatGPT',
    org: 'Google',
    link: 'https://www.coursera.org/account/accomplishments/verify/Y4UW5TJG6NPP' // ⬅️ Paste certificate link here
  }
  
 
];

const Certifications = () => {
  return (
    <section className="certifications-section">
      <h2 className="section-title">📚 Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <h3>{cert.title}</h3>
            <p>{cert.org}</p>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="cert-link"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
