import { Link } from "react-router-dom";
import { profile, projects } from "../data/projects";

export function Home() {
  return (
    <div className="site">
      <nav className="nav" aria-label="Primary">
        <span className="nav__mark">{profile.name}</span>
        <div className="nav__links">
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero">
        <div className="hero__copy">
          <h1 className="hero__brand">{profile.name}</h1>
          <p className="hero__role">
            {profile.role} · {profile.focus}
          </p>
          <p className="hero__headline">Product demos clients can open and click.</p>
          <p className="hero__support">{profile.support}</p>
          <div className="hero__ctas">
            <a className="btn btn--primary" href="#work">
              View demos
            </a>
            <a
              className="btn btn--ghost"
              href={profile.upworkUrl}
              target="_blank"
              rel="noreferrer"
            >
              Hire on Upwork
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="visual-plane">
            <div className="visual-plane__grid" />
            <div className="visual-plane__orb visual-plane__orb--a" />
            <div className="visual-plane__orb visual-plane__orb--b" />
            <div className="visual-plane__panel">
              <div className="visual-plane__meta">Sample stack</div>
              <div className="visual-plane__bar" style={{ ["--w" as string]: "88%" }}>
                <span />
              </div>
              <div className="visual-plane__bar" style={{ ["--w" as string]: "64%" }}>
                <span />
              </div>
              <div className="visual-plane__bar" style={{ ["--w" as string]: "76%" }}>
                <span />
              </div>
              <p className="visual-plane__label">
                Shopify themes.
                <br />
                AI features.
                <br />
                SaaS platforms.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="section projects" id="work">
        <p className="section__eyebrow">Selected demos</p>
        <h2 className="section__title">Open a project</h2>
        <p className="section__lead">
          Each demo is a self-contained sample with a short case blurb and an interactive UI —
          fictional brands only.
        </p>

        <div className="project-list">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              to={project.path}
              className="project-row"
              style={{ animationDelay: `${0.08 * index}s` }}
            >
              <div className="project-row__index">0{index + 1}</div>
              <div className="project-row__body">
                <div className="project-row__top">
                  <h3>{project.title}</h3>
                  <span>{project.category}</span>
                </div>
                <p>{project.blurb}</p>
                <ul className="tag-row tag-row--compact">
                  {project.tags.slice(0, 3).map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
              <span className="project-row__cta">Open demo →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <p className="section__eyebrow">Contact</p>
        <h2 className="section__title">Ready to ship something?</h2>
        <div className="contact__panel">
          <p className="contact__note">
            Looking for an AI full-stack developer for web, Shopify, or SaaS work. Reach out on
            Upwork or connect on LinkedIn.
          </p>
          <div className="hero__ctas">
            <a
              className="btn btn--primary"
              href={profile.upworkUrl}
              target="_blank"
              rel="noreferrer"
            >
              Upwork
            </a>
            <a
              className="btn btn--ghost"
              href={profile.linkedInUrl}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>
          {profile.name} · {profile.role}
        </span>
        <span>Portfolio hub · sample demos</span>
      </footer>
    </div>
  );
}
