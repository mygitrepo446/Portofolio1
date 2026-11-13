import { useState } from "react";
import { DemoChrome } from "../components/DemoChrome";
import { projects } from "../data/projects";

const project = projects.find((p) => p.slug === "signaldraft")!;

const tones = ["Clear & direct", "Warm & expert", "Punchy launch"] as const;

type Brief = {
  title: string;
  audience: string;
  angle: string;
  outline: string[];
  cta: string;
};

function buildBrief(notes: string, tone: (typeof tones)[number]): Brief {
  const seed = notes.trim() || "AI onboarding emails for a B2B SaaS trial";
  const short = seed.length > 64 ? `${seed.slice(0, 64)}…` : seed;
  const toneLine =
    tone === "Warm & expert"
      ? "Speak like a trusted peer — specific, calm, no hype."
      : tone === "Punchy launch"
        ? "Lead with outcomes. Short sentences. One sharp CTA."
        : "Plain language. One idea per section. Easy to skim.";

  return {
    title: `Brief: ${short}`,
    audience: "Trial users who installed but have not activated the core workflow",
    angle: toneLine,
    outline: [
      "Hook — name the friction in their first session",
      "Proof — one concrete win they can get in under 10 minutes",
      "Steps — three checklist items with expected result",
      "Objection — address “we already have a tool for this”",
      "Close — single CTA to open the guided setup",
    ],
    cta: "Start guided setup",
  };
}

export function SignalDraft() {
  const [notes, setNotes] = useState(
    "Need onboarding email sequence for Fieldnote — AI notes app for field techs. Trial users stall after signup.",
  );
  const [tone, setTone] = useState<(typeof tones)[number]>("Clear & direct");
  const [brief, setBrief] = useState<Brief | null>(null);
  const [busy, setBusy] = useState(false);

  function generate() {
    setBusy(true);
    window.setTimeout(() => {
      setBrief(buildBrief(notes, tone));
      setBusy(false);
    }, 700);
  }

  return (
    <DemoChrome project={project}>
      <div className="ai">
        <aside className="ai__rail">
          <strong className="ai__logo">SignalDraft</strong>
          <p className="ai__sample">Sample AI SaaS · mock generation</p>
          <nav>
            <span className="is-on">New brief</span>
            <span>Library</span>
            <span>Exports</span>
            <span>Settings</span>
          </nav>
        </aside>

        <main className="ai__main">
          <header className="ai__top">
            <div>
              <h2>Brief studio</h2>
              <p>Paste messy notes → get a structured content brief.</p>
            </div>
            <button type="button" className="ai__run" onClick={generate} disabled={busy}>
              {busy ? "Drafting…" : "Generate brief"}
            </button>
          </header>

          <div className="ai__grid">
            <section className="ai__input">
              <label htmlFor="notes">Source notes</label>
              <textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={8}
              />
              <p className="ai__label">Tone</p>
              <div className="ai__tones">
                {tones.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={tone === t ? "is-on" : ""}
                    onClick={() => setTone(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </section>

            <section className="ai__output">
              {!brief ? (
                <div className="ai__empty">
                  <p>Your structured brief will land here.</p>
                  <p>Hit generate to run the sample pipeline.</p>
                </div>
              ) : (
                <article className="ai__brief">
                  <p className="ai__badge">Generated · sample</p>
                  <h3>{brief.title}</h3>
                  <dl>
                    <div>
                      <dt>Audience</dt>
                      <dd>{brief.audience}</dd>
                    </div>
                    <div>
                      <dt>Angle</dt>
                      <dd>{brief.angle}</dd>
                    </div>
                    <div>
                      <dt>Outline</dt>
                      <dd>
                        <ol>
                          {brief.outline.map((line) => (
                            <li key={line}>{line}</li>
                          ))}
                        </ol>
                      </dd>
                    </div>
                    <div>
                      <dt>CTA</dt>
                      <dd>{brief.cta}</dd>
                    </div>
                  </dl>
                  <button type="button" className="ai__export">
                    Export markdown (demo)
                  </button>
                </article>
              )}
            </section>
          </div>
        </main>
      </div>
    </DemoChrome>
  );
}
