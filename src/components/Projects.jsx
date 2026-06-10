

const projects = [
  {
    icon: '📹',
    title: 'Convene AI',
    desc: 'Full-stack video conferencing platform with real-time P2P audio/video, screen sharing under 200ms latency, and an in-meeting Gemini-powered AI assistant.',
    tech: ['React', 'WebRTC', 'Socket.io', 'Node.js', 'MongoDB', 'Gemini API', 'JWT'],
    github: 'https://github.com/Apoorv0207/Convene-AI',
    live: 'https://zoom-frontend-five.vercel.app/',
  },
  {
    icon: '📈',
    title: 'Zerodha Clone',
    desc: "Full-stack stock trading app replicating Zerodha's core features — real-time order management, interactive Chart.js financial visualizations, multi-layer auth.",
    tech: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Passport.js', 'JWT'],
    github: 'https://github.com/Apoorv0207/Zerodha',
    live: 'https://zerodha-frontend-main.vercel.app/',
  },
  {
    icon: '🗺',
    title: 'Wanderlust',
    desc: 'Airbnb-inspired lodging platform with dynamic property listings, review system, Mapbox API integration, and JWT-secured user authentication.',
    tech: ['Node.js', 'Express', 'MongoDB', 'EJS', 'Mapbox API', 'Passport.js'],
    github: 'https://github.com/Apoorv0207/Wanderlust',
    live: 'https://wanderlust-1-swwk.onrender.com/listings',
  },
  {
     icon: '🤖',
  title: 'SpurStore AI Support',
  desc: 'Production-ready AI customer support widget featuring Gemini-powered responses, Redis caching, PostgreSQL indexing, persistent chat sessions, and a scalable full-stack architecture.',
  tech: ['React', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'Redis', 'Gemini AI'],
  github: 'https://github.com/Apoorv0207/Spur-Store',
  live: 'https://spur-store.vercel.app/',
  },
  {
     icon: '✅',
    title: 'Task Manager',
    desc: 'CRUD task management app with a real-time dashboard showing completion stats, access + refresh token auth, and a polished Next.js + Prisma stack.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'SQL', 'Express', 'JWT'],
    github: 'https://github.com/Apoorv0207/task-manager',
    live: 'https://task-manager-chi-dun.vercel.app/login',
  },
  {
    icon: '🏠',
    title: 'Agent Mira',
    desc: 'Agentic AI real-estate assistant utilizing a RAG pipeline. Features LangGraph tool routing between semantic document search and a mortgage calculator, backed by MongoDB Atlas Vector Search.',
    tech: ['React', 'FastAPI', 'LangGraph', 'MongoDB', 'Gemini API', 'Tailwind CSS'],
    github: 'https://github.com/Apoorv0207/Agent-Mira',
    live: 'https://agent-mira-sable.vercel.app/',
  }
];
import { useCardTilt } from '../hooks/useCardTilt';
export default function Projects() {
  const gridRef = useCardTilt(12);
  return (
    <section id="projects" style={{ background: 'rgba(0,245,255,0.01)' }}>
      <div className="section-label">04 — Projects</div>
      <h2 className="section-title reveal">
        Things I've <span style={{ color: 'var(--cyan)' }}>Built</span>
      </h2>
      <div className="projects-grid" ref={gridRef}>
        {projects.map((p) => (
          <div className="project-card" key={p.title}>
            <div className="project-header">
              <div className="project-icon">{p.icon}</div>
              <div className="project-links">
                {p.github && <a href={p.github} target="_blank" 
  rel="noopener noreferrer"  className="project-link">GitHub</a>}
                {p.live && <a href={p.live} target="_blank" 
  rel="noopener noreferrer"  className="project-link">Live</a>}
              </div>
            </div>
            <div className="project-title">{p.title}</div>
            <div className="project-desc">{p.desc}</div>
            <div className="project-tech">
              {p.tech.map((t) => <span className="tech-chip" key={t}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
