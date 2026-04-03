export default function Contact() {
  return (
    <section id="contact" style={{ background: 'rgba(0,245,255,0.01)' }}>
      <div className="section-label">06 — Contact</div>
      <div className="contact-grid">
        <div className="contact-text reveal">
          <h2 className="section-title">
            Let's build<br />something <span style={{ color: 'var(--cyan)' }}>great.</span>
          </h2>
          <p>Whether it's a full-time SDE role, freelance project, or just a good tech conversation — my inbox is open.</p>
        </div>
        <div className="contact-links reveal">
          <a href="mailto:apoorvgtm@gmail.com" className="contact-item">
            <span>📧</span>
            <div>
              <span className="ci-label">Email</span>
              <span className="ci-value">apoorvgtm@gmail.com</span>
            </div>
          </a>
          <a href="tel:+919650698099" className="contact-item">
            <span>📞</span>
            <div>
              <span className="ci-label">Phone</span>
              <span className="ci-value">+91 9650698099</span>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/apoorv-gautam-a1253326a/" target="_blank" rel="noreferrer" className="contact-item">
            <span>🔗</span>
            <div>
              <span className="ci-label">LinkedIn</span>
              <span className="ci-value">https://www.linkedin.com/in/apoorv-gautam-a1253326a/</span>
            </div>
          </a>
          <a href="https://github.com/Apoorv0207" target="_blank" rel="noreferrer" className="contact-item">
            <span>💻</span>
            <div>
              <span className="ci-label">GitHub</span>
              <span className="ci-value">github.com/Apoorv0207</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
