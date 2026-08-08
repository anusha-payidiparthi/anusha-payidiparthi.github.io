import { useEffect, useRef, useState } from 'react';
import {
  education,
  experience,
  highlights,
  profile,
  skillGroups,
} from './data';
import './index.css';

function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const items = node.querySelectorAll('[data-reveal]');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const experienceRef = useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="site-shell nav">
          <a className="brand-mark" href="#top">
            Anusha <span>Payidiparthi</span>
          </a>
          <nav aria-label="Primary">
            <ul className="nav-links">
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          <a className="nav-cta" href={`mailto:${profile.email}`}>
            Hire me
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero site-shell" aria-label="Introduction">
          <div className="hero-atmosphere" aria-hidden="true" />
          <div className="hero-content">
            <p className="availability">{profile.availability}</p>
            <h1 className="hero-name">{profile.name}</h1>
            <p className="hero-title">{profile.title}</p>
            <p className="hero-copy">{profile.summary}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                Email me
              </a>
              <a
                className="btn btn-secondary"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a className="btn btn-secondary" href={profile.resumeUrl} download>
                Download resume
              </a>
            </div>
          </div>
        </section>

        <section className="section site-shell" id="about" aria-labelledby="about-heading">
          <div className="section-heading">
            <p className="section-eyebrow">Impact</p>
            <h2 id="about-heading">Built for enterprise scale, clarity, and delivery speed.</h2>
            <p>
              From Wells Fargo banker workflows to telecom customer platforms, I turn complex
              product requirements into resilient React and Angular experiences — with strong
              testing, accessibility, and CI/CD discipline.
            </p>
          </div>
          <div className="highlights">
            {highlights.map((item) => (
              <article className="highlight" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section site-shell" id="work" aria-labelledby="work-heading">
          <div className="section-heading">
            <p className="section-eyebrow">Experience</p>
            <h2 id="work-heading">Selected roles & products</h2>
            <p>
              A track record across Fortune 500 banking, telecom, mortgage tech, and Microsoft
              digital platforms.
            </p>
          </div>
          <div className="experience-list" ref={experienceRef}>
            {experience.map((job) => (
              <article className="experience-item" data-reveal key={`${job.company}-${job.period}`}>
                <div className="experience-meta">
                  <h3>{job.company}</h3>
                  <p className="experience-role">{job.role}</p>
                  <p className="experience-period">{job.period}</p>
                  <p className="experience-location">{job.location}</p>
                </div>
                <div className="experience-body">
                  <h4>{job.project}</h4>
                  <p>{job.blurb}</p>
                  <ul>
                    {job.impact.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className="stack" aria-label={`${job.company} tech stack`}>
                    {job.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section site-shell" id="skills" aria-labelledby="skills-heading">
          <div className="section-heading">
            <p className="section-eyebrow">Capabilities</p>
            <h2 id="skills-heading">Tools I use to ship</h2>
            <p>
              Modern frontend architecture, full-stack Node delivery, and production-grade
              quality systems.
            </p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="education" style={{ marginTop: '2.5rem' }}>
            <h3>{education.degree}</h3>
            <p>
              {education.school} · {education.year}
            </p>
          </div>
        </section>

        <section className="section site-shell" id="contact" aria-labelledby="contact-heading">
          <div className="contact-panel">
            <div>
              <p className="section-eyebrow">Contact</p>
              <h2 id="contact-heading">Let’s talk about your next frontend or full-stack role.</h2>
              <p>
                Based in the {profile.location}. Fastest path: email or LinkedIn. Resume is ready
                to download for recruiting screens.
              </p>
              <div className="hero-actions" style={{ marginTop: '1.25rem' }}>
                <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
                <a className="btn btn-secondary" href={profile.resumeUrl} download>
                  Resume PDF
                </a>
              </div>
            </div>
            <div className="contact-links">
              <a href={`tel:${profile.phone.replaceAll('-', '')}`}>{profile.phone}</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn profile
              </a>
              <a href={profile.resumeUrl} download>
                Download resume
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer site-shell">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Senior Frontend & Full-Stack Developer</span>
      </footer>
    </>
  );
}
