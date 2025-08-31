import React from 'react';

const projects = [
  {
    name: "Convene AI",
    description: `Convene AI is a full-featured video conferencing application designed for seamless peer-to-peer communication. It integrates real-time video, audio, screen sharing, and AI-powered chat.`,
    features: [
      "Real-time Video & Audio using WebRTC",
      "Screen Sharing",
      "Instant Messaging & AI Integration via Gemini API",
      "Secure Authentication with JWT and bcrypt",
      "Responsive UI with Material UI"
    ],
    tech: "React, Material UI, CSS, Node.js, Express, MongoDB, WebRTC, Socket.io, JWT, bcrypt, Gemini API",
    github: "https://github.com/Apoorv0207/Convene-AI",
    live: "https://zoom-frontend-five.vercel.app/"
  },
  {
    name: "Zerodha Clone",
    description: "Full-stack stock trading platform clone with secure auth, responsive UI, dashboards, and chart visualizations.",
    features: [
      "Secure Authentication & Authorization (JWT, bcrypt, Passport.js)",
      "Fully functional Dashboard & Orders page",
      "Interactive Charts with Chart.js",
      "Responsive UI with Bootstrap 5 & Material UI",
      "REST API integration using Axios"
    ],
    tech: "React.js, Node.js, MongoDB, Express, JWT, bcrypt, Passport.js, Bootstrap 5, Material UI, Chart.js",
    github: "https://github.com/Apoorv0207/Zerodha",
    live: "https://zerodha-frontend-main.vercel.app/"
  },
  {
    name: "Wanderlust",
    description: "Full-stack lodging platform inspired by Airbnb with dynamic property listings, reviews, and interactive maps.",
    features: [
      "User Authentication with Passport.js",
      "Dynamic Listings with Reviews & Ratings",
      "Mapbox API integration",
      "Responsive UI with Bootstrap"
    ],
    tech: "EJS, Node.js, MongoDB, Express, Passport.js, Bootstrap, Mapbox API",
    github: "https://github.com/Apoorv0207/Wanderlust",
    live: "https://wanderlust-1-swwk.onrender.com/listings"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      {projects.map(project => (
        <div key={project.name} className="bg-black/50 p-6 mb-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
          <p className="mb-2">{project.description}</p>
          <ul className="list-disc pl-6 mb-2">
            {project.features.map((f, idx) => <li key={idx}>{f}</li>)}
          </ul>
          <p className="mb-2"><strong>Tech:</strong> {project.tech}</p>
          <div className="flex gap-4">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-pink-500 px-4 py-2 rounded hover:bg-pink-600">GitHub</a>
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-purple-500 px-4 py-2 rounded hover:bg-purple-600">Live Demo</a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
