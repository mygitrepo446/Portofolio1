import { useMemo, useState } from "react";
import { DemoChrome } from "../components/DemoChrome";
import { projects } from "../data/projects";

const project = projects.find((p) => p.slug === "harborflow")!;

type Stage = "Intake" | "In progress" | "Review" | "Shipped";

type Ticket = {
  id: string;
  title: string;
  owner: string;
  stage: Stage;
  priority: "Low" | "Normal" | "High";
};

const seed: Ticket[] = [
  { id: "HF-104", title: "Sync Shopify inventory webhook", owner: "Alex", stage: "In progress", priority: "High" },
  { id: "HF-109", title: "AI brief export to Notion", owner: "Jordan", stage: "Review", priority: "Normal" },
  { id: "HF-112", title: "Onboarding checklist v2", owner: "Sam", stage: "Intake", priority: "Normal" },
  { id: "HF-098", title: "Role-based dashboard filters", owner: "Alex", stage: "Shipped", priority: "High" },
  { id: "HF-115", title: "Stripe dunning emails", owner: "Riley", stage: "In progress", priority: "Low" },
  { id: "HF-118", title: "Activity feed pagination", owner: "Jordan", stage: "Intake", priority: "Low" },
];

const stages: Stage[] = ["Intake", "In progress", "Review", "Shipped"];

const activity = [
  "Alex moved HF-104 → In progress",
  "Jordan requested review on HF-109",
  "Sam opened HF-112",
  "Riley commented on HF-115",
  "Deploy window cleared for HF-098",
];

export function Harborflow() {
  const [tickets, setTickets] = useState(seed);
  const [owner, setOwner] = useState("Everyone");
  const [selected, setSelected] = useState(seed[0].id);

  const owners = ["Everyone", ...Array.from(new Set(seed.map((t) => t.owner)))];
  const filtered = useMemo(
    () => (owner === "Everyone" ? tickets : tickets.filter((t) => t.owner === owner)),
    [owner, tickets],
  );
  const active = tickets.find((t) => t.id === selected) ?? tickets[0];

  function move(id: string, stage: Stage) {
    setTickets((prev) => prev.map((t) => (t.id === id ? { ...t, stage } : t)));
  }

  return (
    <DemoChrome project={project}>
      <div className="saas">
        <aside className="saas__nav">
          <strong className="saas__logo">Harborflow</strong>
          <p className="saas__sample">Ops platform · sample data</p>
          <nav>
            <span className="is-on">Pipeline</span>
            <span>Reports</span>
            <span>Team</span>
            <span>Settings</span>
          </nav>
        </aside>

        <main className="saas__main">
          <header className="saas__top">
            <div>
              <h2>Delivery pipeline</h2>
              <p>Filter by owner, move cards between stages.</p>
            </div>
            <label className="saas__filter">
              Owner
              <select value={owner} onChange={(e) => setOwner(e.target.value)}>
                {owners.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </label>
          </header>

          <div className="saas__board">
            {stages.map((stage) => (
              <section key={stage} className="saas__column">
                <h3>
                  {stage}
                  <em>{filtered.filter((t) => t.stage === stage).length}</em>
                </h3>
                <ul>
                  {filtered
                    .filter((t) => t.stage === stage)
                    .map((ticket) => (
                      <li key={ticket.id}>
                        <button
                          type="button"
                          className={`saas__card ${selected === ticket.id ? "is-on" : ""}`}
                          onClick={() => setSelected(ticket.id)}
                        >
                          <span className="saas__id">{ticket.id}</span>
                          <strong>{ticket.title}</strong>
                          <span className="saas__meta">
                            {ticket.owner} · {ticket.priority}
                          </span>
                        </button>
                      </li>
                    ))}
                </ul>
              </section>
            ))}
          </div>
        </main>

        <aside className="saas__side">
          <div className="saas__detail">
            <p className="saas__id">{active.id}</p>
            <h3>{active.title}</h3>
            <p>
              Owner <strong>{active.owner}</strong> · Priority <strong>{active.priority}</strong>
            </p>
            <label>
              Move to
              <select
                value={active.stage}
                onChange={(e) => move(active.id, e.target.value as Stage)}
              >
                {stages.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="saas__feed">
            <h4>Activity</h4>
            <ul>
              {activity.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </DemoChrome>
  );
}
