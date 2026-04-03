import { useTimelineScroll } from '../hooks/useTimelineScroll';

const experiences = [
  {
    date: 'Oct 2025 — Dec 2025',
    role: 'Technology Intern',
    company: 'Airtel Payments Bank · Hybrid',
    points: [
      'Engineered secure cURL command execution & static file upload for internal DevOps tool, reducing manual deployment steps by 60%',
      'Implemented 5+ full-stack features with Angular.js frontend + Spring Boot backend',
      'Integrated all features within SSO-enabled environment, securing 100% of internal endpoints',
    ],
  },
  {
    date: 'May 2025 — July 2025',
    role: 'Web Developer Intern',
    company: 'DTU USIP · Delhi',
    points: [
      'Built official DTU IIF startups website using Node.js, improving digital presence for 20+ startups',
      'Replaced basic auth with JWT tokens, mitigating session hijacking risks by 99%',
      'Architected role-based authorization across 3 admin roles',
    ],
  },
];

export default function Experience() {
  /*
   * FEATURE 2 — SCROLL-DRIVEN TIMELINE REVEAL
   * useTimelineScroll tracks how far the user has scrolled
   * into this section and fills the vertical line proportionally.
   * Individual timeline-item cards fade + slide in via IntersectionObserver
   * (handled by useScrollReveal in App.jsx).
   * Each bullet point also staggers in with CSS transition-delay.
   */
  const { sectionRef, fillRef } = useTimelineScroll();

  return (
    <section id="experience" ref={sectionRef}>
      <div className="section-label">03 — Experience</div>
      <h2 className="section-title reveal">
        Where I've <span style={{ color: 'var(--cyan)' }}>Worked</span>
      </h2>

      <div className="timeline">
        {/* The self-drawing vertical line */}
        <div className="timeline-track">
          <div className="timeline-track-fill" ref={fillRef} />
        </div>

        {experiences.map((exp, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="timeline-date">{exp.date}</div>
              <div className="timeline-role">{exp.role}</div>
              <div className="timeline-company">{exp.company}</div>
              <ul className="timeline-points">
                {exp.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
