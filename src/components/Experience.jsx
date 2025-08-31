import React from 'react';

const experiences = [
  {
    role: "Airtel Payments Bank (Remote)",
    duration: "Aug 2025 – Present",
    description: "Contributing to a secure internal web-based operations tool for DevOps tasks. Building features for executing production CURL commands and static file uploads. Hands-on experience with React/Vue.js frontend and Spring Boot backend. Security-focused system with SSO authentication and role-based access control."
  },
  {
    role: "DTU USIP Intern (Onsite-DTU)",
    duration: "May 2025 – July 2025",
    description: "Developed official website for a DTU IIF startup using Node.js, HTML, CSS. Replaced basic authentication with token-based JWT authentication for persistent sessions. Implemented role-based authorization to secure designated sections of the site."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="mb-16">
      <h2 className="text-3xl font-bold mb-4">Experience</h2>
      {experiences.map(exp => (
        <div key={exp.role} className="bg-black/50 p-6 mb-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-1">{exp.role}</h3>
          <p className="italic mb-2">{exp.duration}</p>
          <p>{exp.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;
