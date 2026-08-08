import { useEffect, useId, useState } from 'react';
import { education, highlights, jobs, profile, skillGroups } from './data';
import './index.css';

function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-visual__glow" />
      <div className="hero-visual__panel hero-visual__panel--back">
        <div className="hero-visual__chrome">
          <span />
          <span />
          <span />
        </div>
        <div className="hero-visual__rows">
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="hero-visual__panel hero-visual__panel--front">
        <div className="hero-visual__label">Banker Compass</div>
        <div className="hero-visual__auth">
          <div className="hero-visual__auth-title">MFA gate</div>
          <div className="hero-visual__bars">
            <b />
            <b />
            <b className="is-accent" />
          </div>
          <div className="hero-visual__status">Verified · Ready for action</div>
        </div>
        <div className="hero-visual__metrics">
          <div>
            <strong>OTP</strong>
            <span>Secure</span>
          </div>
          <div>
            <strong>QR</strong>
            <span>Adaptive</span>
          </div>
          <div>
            <strong>BFF</strong>
            <span>Orchestrated</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeJobId, setActiveJobId] = useState(jobs[0].id);
  const tabsId = useId();
  const activeJob = jobs.find((job) => job.id === activeJobId) ?? jobs[0];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const selectCompany = (jobId) => {
    setActiveJobId(jobId);
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="page">
      <header className={`topbar${scrolled ? ' is-scrolled' : ''}`}>
        <div className="shell topbar__inner">
          <a className="logo" href="#top">
            {profile.firstName}
            <span>{profile.lastName}</span>
          </a>
          <nav className="topbar__nav" aria-label="Primary">
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="topbar__cta" href={profile.mailto}>
            Get in touch
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="shell hero__grid">
            <div className="hero__copy">
              <p className="hero__kicker">{profile.availability}</p>
              <h1 className="hero__name">
                <span>{profile.firstName}</span>
                <span>{profile.lastName}</span>
              </h1>
              <p className="hero__role">{profile.title}</p>
              <p className="hero__headline">{profile.headline}</p>
              <p className="hero__summary">{profile.summary}</p>
              <div className="hero__actions">
                <a className="btn btn--primary" href={profile.mailto}>
                  Email me
                </a>
                <a
                  className="btn btn--ghost"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a className="btn btn--ghost" href={profile.resumeUrl} download>
                  Resume PDF
                </a>
              </div>
            </div>
            <HeroVisual />
          </div>
        </section>

        <section className="trust" aria-label="Companies">
          <div className="shell trust__inner">
            <p className="trust__label">Worked with</p>
            <div className="trust__list">
              {jobs
                .filter((job) => job.id !== 'earlier')
                .map((job) => (
                  <button
                    key={job.id}
                    type="button"
                    className={`trust__company${activeJobId === job.id ? ' is-active' : ''}`}
                    onClick={() => selectCompany(job.id)}
                  >
                    {job.company}
                  </button>
                ))}
            </div>
          </div>
        </section>

        <section className="proof shell" aria-label="Highlights">
          {highlights.map((item) => (
            <article key={item.label} className="proof__item">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </section>

        <section className="section shell" id="work" aria-labelledby="work-title">
          <div className="section__head">
            <p className="eyebrow">Work history</p>
            <h2 id="work-title">Experience</h2>
          </div>

          <div className="job-tabs">
            <div
              className="job-tabs__list"
              role="tablist"
              aria-label="Companies"
            >
              {jobs.map((job) => {
                const selected = job.id === activeJobId;
                return (
                  <button
                    key={job.id}
                    type="button"
                    role="tab"
                    id={`${tabsId}-${job.id}`}
                    className={`job-tabs__tab${selected ? ' is-active' : ''}`}
                    aria-selected={selected}
                    aria-controls={`${tabsId}-panel`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActiveJobId(job.id)}
                  >
                    <span className="job-tabs__company">{job.company}</span>
                    <span className="job-tabs__period">{job.period}</span>
                  </button>
                );
              })}
            </div>

            <article
              className="job-panel"
              role="tabpanel"
              id={`${tabsId}-panel`}
              aria-labelledby={`${tabsId}-${activeJob.id}`}
              key={activeJob.id}
            >
              <div className="job-panel__meta">
                <p className="job-panel__role">{activeJob.role}</p>
                <p className="job-panel__location">{activeJob.location}</p>
                <p className="job-panel__period">{activeJob.period}</p>
              </div>
              <div className="job-panel__body">
                <h3>{activeJob.product}</h3>
                <p className="job-panel__tagline">{activeJob.tagline}</p>
                <div className="job-panel__outcomes">
                  {activeJob.outcomes.map((item) => (
                    <div key={item.label}>
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
                <ul>
                  {activeJob.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="job-panel__stack">
                  {activeJob.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section shell" id="skills" aria-labelledby="skills-title">
          <div className="section__head">
            <p className="eyebrow">Capabilities</p>
            <h2 id="skills-title">Skills</h2>
          </div>
          <div className="skills">
            {skillGroups.map((group) => (
              <div key={group.title} className="skills__group">
                <h3>{group.title}</h3>
                <p>{group.items.join('  ·  ')}</p>
              </div>
            ))}
          </div>
          <p className="education">
            {education.degree} · {education.school} · {education.year}
          </p>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="shell contact__inner">
            <p className="eyebrow eyebrow--light">Let’s talk</p>
            <h2 id="contact-title">Hiring for a senior frontend or full-stack role?</h2>
            <p className="contact__lead">
              I’m actively looking. The fastest way to reach me is email, phone, or LinkedIn.
            </p>
            <div className="contact__actions">
              <a className="btn btn--light" href={profile.mailto}>
                {profile.email}
              </a>
              <a className="btn btn--outline-light" href={profile.phoneHref}>
                {profile.phone}
              </a>
              <a
                className="btn btn--outline-light"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a className="btn btn--outline-light" href={profile.resumeUrl} download>
                Download resume
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer shell">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>{profile.location}</span>
      </footer>

      <div className="reach" role="region" aria-label="Quick contact">
        <div className="shell reach__inner">
          <p>
            <strong>{profile.availability}</strong>
            <span>Senior Frontend · Full-Stack</span>
          </p>
          <div className="reach__links">
            <a href={profile.mailto}>Email</a>
            <a href={profile.phoneHref}>Call</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.resumeUrl} download>
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
