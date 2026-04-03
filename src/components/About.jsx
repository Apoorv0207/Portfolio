export default function About() {
  return (
    <section id="about">
      <div className="section-label">01 — About</div>
      <div className="about-grid">
        <div className="about-text reveal">
          <h2 className="section-title">
            Building things<br />that <span style={{ color: 'var(--cyan)' }}>matter.</span>
          </h2>
          <p>I'm a <strong>Full Stack Developer</strong> pursuing B.Tech in Electrical Engineering at <strong>Delhi Technological University</strong>, graduating May 2026.</p>
          <p>I build scalable, production-ready applications with the <strong>MERN stack</strong> and have real-world impact at <strong>Airtel Payments Bank</strong> and <strong>DTU USIP</strong>.</p>
          <p>Beyond code, I've solved <strong>400+ DSA problems</strong> on LeetCode — because great engineers think before they type.</p>
          <div style={{ marginTop: '2rem' }}>
            <a href="mailto:apoorvgtm@gmail.com" className="btn"><span>apoorvgtm@gmail.com</span></a>
          </div>
        </div>
        <div className="stats-grid reveal">
          <div className="stat-card">
            <div className="stat-num">400+</div>
            <div className="stat-label">LeetCode Problems</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">2</div>
            <div className="stat-label">Internships</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">5+</div>
            <div className="stat-label">Full-Stack Projects</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">99%</div>
            <div className="stat-label">Auth Vulnerabilities Patched</div>
          </div>
        </div>
      </div>
    </section>
  );
}
