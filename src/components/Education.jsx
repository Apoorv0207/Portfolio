const education = [
  {
    year: '2022–26',
    institution: 'Delhi Technological University',
    degree: 'B.Tech — Electrical Engineering',
    score: '7.05',
    scoreLabel: 'CGPA / 10',
  },
  {
    year: '2022',
    institution: "St. Mary's Senior Secondary School",
    degree: 'CBSE Class XII',
    score: '90%',
    scoreLabel: 'Percentage',
  },
  {
    year: '2020',
    institution: "St. Mary's Senior Secondary School",
    degree: 'CBSE Class X',
    score: '92%',
    scoreLabel: 'Percentage',
  },
];

export default function Education() {
  return (
    <section id="education">
      <div className="section-label">05 — Education</div>
      <h2 className="section-title reveal">
        Academic <span style={{ color: 'var(--cyan)' }}>Journey</span>
      </h2>
      <div className="edu-grid">
        {education.map((ed) => (
          <div className="edu-card" key={ed.year}>
            <div className="edu-year">{ed.year}</div>
            <div>
              <div className="edu-institution">{ed.institution}</div>
              <div className="edu-degree">{ed.degree}</div>
            </div>
            <div className="edu-score">
              {ed.score}
              <span>{ed.scoreLabel}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
