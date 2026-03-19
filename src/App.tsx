import {
  cadence,
  capabilities,
  contextDiagram,
  contextSources,
  deliverables,
  deliverDiagram,
  endeavorTracks,
  hero,
  metrics,
  recordedContextCallout,
} from "./content/siteContent";
import { BilingualPanel } from "./components/BilingualPanel";
import { CadenceStepCard } from "./components/CadenceStepCard";
import { ContextSourceCard } from "./components/ContextSourceCard";
import { EndeavorTrackCard } from "./components/EndeavorTrackCard";
import { MermaidDiagram } from "./components/MermaidDiagram";
import { PipelineClipArt } from "./components/PipelineClipArt";
import { SectionHeading } from "./components/SectionHeading";

function App() {
  return (
    <div className="page-shell">
      <header className="hero">
        <nav className="topbar">
          <a href="#endeavor">Endeavor</a>
          <a href="#cadence">Cadence</a>
          <a href="#context">Context</a>
          <a href="#deliverables">Deliverables</a>
          <a href="./agency_advertisement_scenario.fountain.md">Ad Script</a>
          <a href="./storybook/">Storybook</a>
          <a href="./artifacts/blabla_agency_presentation.pdf">Presentation PDF</a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-eyebrow">{hero.eyebrow.en}</p>
            <p className="hero-eyebrow hero-eyebrow-ru">{hero.eyebrow.ru}</p>
            <h1>{hero.title.en}</h1>
            <p className="hero-title-ru">{hero.title.ru}</p>
            <BilingualPanel english={hero.summary.en} russian={hero.summary.ru} />
            <div className="cta-row">
              <a className="secondary-button" href="./agency_advertisement_scenario.fountain.md">
                Open Ad Script
              </a>
              <a className="primary-button" href="./storybook/">
                Open Storybook
              </a>
              <a className="secondary-button" href="./artifacts/blabla_agency_presentation.pdf">
                Open PDF
              </a>
              <a
                className="secondary-button"
                href="https://github.com/realagiorganization/blabla_agency"
                rel="noreferrer"
                target="_blank"
              >
                Organization Repo
              </a>
            </div>
          </div>
          <PipelineClipArt />
        </div>

        <section className="metric-strip" aria-label="Key operating signals">
          {metrics.map((metric) => (
            <article key={metric.value} className="metric-card">
              <span className="metric-value">{metric.value}</span>
              <span className="metric-label-en">{metric.label.en}</span>
              <span className="metric-label-ru">{metric.label.ru}</span>
            </article>
          ))}
        </section>
      </header>

      <main>
        <section className="content-section" id="endeavor">
          <SectionHeading
            eyebrow="Endeavor"
            title="This repository is the public, versioned, and continuously built surface of the agency effort."
            description="The endeavor is not hidden behind private notes. It is explained in markdown, rendered through reusable React components, reviewed in Storybook, deployed on GitHub Pages, and checked through build plus live monitor workflows."
          />
          <div className="grid-two">
            {endeavorTracks.map((track) => (
              <EndeavorTrackCard key={track.title.en} track={track} />
            ))}
          </div>
        </section>

        <section className="content-section" id="surfaces">
          <SectionHeading
            eyebrow="Service surface"
            title="The agency handles both product-facing and internal engineering work."
            description="The same cadence can move through software of any complexity, because the spec is treated as a living conversation instead of a frozen intake form."
          />
          <div className="grid-two">
            {capabilities.map((capability) => (
              <article key={capability.title.en} className="surface-card">
                <h3>{capability.title.en}</h3>
                <p className="surface-title-ru">{capability.title.ru}</p>
                <BilingualPanel english={capability.body.en} russian={capability.body.ru} />
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="cadence">
          <SectionHeading
            eyebrow="Cadence"
            title="Draft spec first. Long discussion second. Deployed demo third."
            description="That is the core operating loop: a client sends a draft, the draft is argued through at length, the AI pipeline generates and deploys, and the next discussion starts from the real demo instead of a theoretical document."
          />
          <div className="step-grid">
            {cadence.map((step) => (
              <CadenceStepCard key={step.label} step={step} />
            ))}
          </div>
        </section>

        <section className="content-section diagrams-section" id="diagrams">
          <SectionHeading
            eyebrow="Mermaid maps"
            title="Recorded discussion is the fuel, not just a project archive."
            description="The diagrams below show how conversation context, demo state, and deployment traces are folded into an AI context ledger that drives each generation pass."
          />
          <div className="diagram-grid">
            <MermaidDiagram
              chart={contextDiagram}
              description="Conversation artifacts, demo state, and operational traces are merged into one working memory surface."
              title="Recorded context to AI ledger"
            />
            <MermaidDiagram
              chart={deliverDiagram}
              description="Each loop sharpens the spec by deploying reality back into the discussion."
              title="Generation and feedback loop"
            />
          </div>
        </section>

        <section className="content-section" id="context">
          <SectionHeading
            eyebrow="Context ledger"
            title="The AI pipeline generates from recorded reality, not from hand-waved summaries."
            description="Calls, chats, comments, the current demo version, and deployment traces are all part of what the agent sees. The richer the record, the sharper the next generation pass."
          />
          <div className="context-layout">
            <div className="context-callout">
              <BilingualPanel
                english={recordedContextCallout.en}
                russian={recordedContextCallout.ru}
              />
            </div>
            <div className="context-grid">
              {contextSources.map((source) => (
                <ContextSourceCard key={source.title.en} source={source} />
              ))}
            </div>
          </div>
        </section>

        <section className="content-section" id="deliverables">
          <SectionHeading
            eyebrow="Visible outputs"
            title="Every iteration leaves behind client-readable, machine-readable, and deployable artifacts."
            description="This is why the process scales: the repo stores the latest explanations, the latest demo, the latest presentation, and the latest storybook components that describe the evolving service."
          />
          <div className="deliverable-grid">
            {deliverables.map((deliverable) => (
              <article key={deliverable.title.en} className="deliverable-card">
                <h3>{deliverable.title.en}</h3>
                <p className="surface-title-ru">{deliverable.title.ru}</p>
                <BilingualPanel english={deliverable.body.en} russian={deliverable.body.ru} />
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Storybook-tested React site. GitHub Pages deploy. PDF presentation artifact. Bilingual narrative.</p>
        <p>
          <a href="./agency_advertisement_scenario.fountain.md">Ad Script</a>
          <a href="./storybook/">Storybook</a>
          <a href="./artifacts/blabla_agency_presentation.pdf">Presentation PDF</a>
          <a href="https://github.com/realagiorganization/blabla_agency">GitHub</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
