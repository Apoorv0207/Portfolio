const skills = [
  { title: 'Languages', tags: ['Java', 'Python', 'JavaScript', 'TypeScript'] },
  { title: 'Frontend', tags: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind', 'Bootstrap', 'Material UI', 'EJS'] },
  { title: 'Backend', tags: ['Node.js', 'Express.js', 'Spring Boot', 'REST APIs', 'WebRTC', 'Socket.io'] },
  { title: 'Databases & Auth', tags: ['MongoDB', 'MySQL', 'SQL', 'Prisma', 'JWT', 'Bcrypt', 'Passport.js'] },
  { title: 'CS Fundamentals', tags: ['OS', 'DBMS', 'CN', 'OOPS', 'DSA'] },
  { title: 'System Design', tags: ['Microservices', 'Load Balancing', 'Caching', 'Scalability', 'SSO'] },
];

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'rgba(0,245,255,0.01)' }}>
      <div className="section-label">02 — Skills</div>
      <h2 className="section-title reveal">My <span style={{ color: 'var(--cyan)' }}>Tech</span> Stack</h2>
      <div className="skills-grid reveal">
        {skills.map((cat) => (
          <div className="skill-category" key={cat.title}>
            <div className="skill-cat-title">{cat.title}</div>
            <div className="skill-tags">
              {cat.tags.map((tag) => (
                <span className="skill-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
