import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import type { Project } from "../data/projects";

type Props = {
  project: Project;
  children: ReactNode;
};

export function DemoChrome({ project, children }: Props) {
  return (
    <div className="demo-shell">
      <header className="demo-bar">
        <Link to="/" className="demo-bar__back">
          ← Portfolio
        </Link>
        <div className="demo-bar__meta">
          <span className="demo-bar__cat">{project.category}</span>
          <strong>{project.title}</strong>
        </div>
        <Link to="/#work" className="demo-bar__all">
          All demos
        </Link>
      </header>

      <section className="case">
        <div className="case__intro">
          <p className="case__eyebrow">{project.brand}</p>
          <h1 className="case__title">{project.title}</h1>
          <p className="case__blurb">{project.blurb}</p>
          <ul className="tag-row">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <dl className="case__steps">
          <div>
            <dt>Problem</dt>
            <dd>{project.problem}</dd>
          </div>
          <div>
            <dt>Approach</dt>
            <dd>{project.approach}</dd>
          </div>
          <div>
            <dt>Result</dt>
            <dd>{project.result}</dd>
          </div>
        </dl>
      </section>

      <div className="demo-stage">{children}</div>
    </div>
  );
}
