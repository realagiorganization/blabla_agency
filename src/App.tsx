import {
  blueprints,
  cadence,
  cadenceExplorerFrames,
  capabilities,
  contextDiagram,
  contextSources,
  deliverables,
  deliverDiagram,
  endeavorTracks,
  footerCopy,
  footerLinks,
  hero,
  heroLinks,
  metrics,
  navigationLinks,
  recordedContextCallout,
  repositorySources,
  sectionCopy,
} from "./content/siteContent";
import { BilingualPanel } from "./components/BilingualPanel";
import { BlueprintBoard } from "./components/BlueprintBoard";
import { CadenceExplorer } from "./components/CadenceExplorer";
import { CadenceStepCard } from "./components/CadenceStepCard";
import { ContextSourceCard } from "./components/ContextSourceCard";
import { EndeavorTrackCard } from "./components/EndeavorTrackCard";
import { MermaidDiagram } from "./components/MermaidDiagram";
import { PipelineClipArt } from "./components/PipelineClipArt";
import { RepositorySourceCard } from "./components/RepositorySourceCard";
import { SectionHeading } from "./components/SectionHeading";

function App() {
  return (
    <div className="page-shell">
      <header className="hero">
        <nav className="topbar">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              rel={link.external ? "noreferrer" : undefined}
              target={link.external ? "_blank" : undefined}
            >
              <span className="link-stack">
                <span>{link.label.en}</span>
                <span className="link-stack-ru">{link.label.ru}</span>
              </span>
            </a>
          ))}
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-eyebrow">{hero.eyebrow.en}</p>
            <p className="hero-eyebrow hero-eyebrow-ru">{hero.eyebrow.ru}</p>
            <h1>{hero.title.en}</h1>
            <p className="hero-title-ru">{hero.title.ru}</p>
            <BilingualPanel english={hero.summary.en} russian={hero.summary.ru} />
            <div className="cta-row">
              {heroLinks.map((link) => (
                <a
                  key={link.href}
                  className={link.tone === "primary" ? "primary-button" : "secondary-button"}
                  href={link.href}
                  rel={link.external ? "noreferrer" : undefined}
                  target={link.external ? "_blank" : undefined}
                >
                  <span className="link-stack button-stack">
                    <span>{link.label.en}</span>
                    <span className="link-stack-ru button-stack-ru">{link.label.ru}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
          <PipelineClipArt />
        </div>

        <section className="metric-strip" aria-label="Key operating signals">
          {metrics.map((metric) => (
            <article key={metric.value + metric.label.en} className="metric-card">
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
            eyebrow={sectionCopy.endeavor.eyebrow}
            title={sectionCopy.endeavor.title}
            description={sectionCopy.endeavor.description}
            sources={sectionCopy.endeavor.sources}
          />
          <div className="grid-two">
            {endeavorTracks.map((track) => (
              <EndeavorTrackCard key={track.title.en} track={track} />
            ))}
          </div>
        </section>

        <section className="content-section" id="sources">
          <SectionHeading
            eyebrow={sectionCopy.sources.eyebrow}
            title={sectionCopy.sources.title}
            description={sectionCopy.sources.description}
            sources={sectionCopy.sources.sources}
          />
          <div className="grid-two">
            {repositorySources.map((source) => (
              <RepositorySourceCard key={source.filePath} source={source} />
            ))}
          </div>
        </section>

        <section className="content-section" id="surfaces">
          <SectionHeading
            eyebrow={sectionCopy.surfaces.eyebrow}
            title={sectionCopy.surfaces.title}
            description={sectionCopy.surfaces.description}
            sources={sectionCopy.surfaces.sources}
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

        <section className="content-section" id="blueprints">
          <SectionHeading
            eyebrow={sectionCopy.blueprints.eyebrow}
            title={sectionCopy.blueprints.title}
            description={sectionCopy.blueprints.description}
            sources={sectionCopy.blueprints.sources}
          />
          <BlueprintBoard blueprints={blueprints} />
        </section>

        <section className="content-section" id="cadence">
          <SectionHeading
            eyebrow={sectionCopy.cadence.eyebrow}
            title={sectionCopy.cadence.title}
            description={sectionCopy.cadence.description}
            sources={sectionCopy.cadence.sources}
          />
          <CadenceExplorer frames={cadenceExplorerFrames} />
          <div className="step-grid">
            {cadence.map((step) => (
              <CadenceStepCard key={step.label} step={step} />
            ))}
          </div>
        </section>

        <section className="content-section diagrams-section" id="diagrams">
          <SectionHeading
            eyebrow={sectionCopy.diagrams.eyebrow}
            title={sectionCopy.diagrams.title}
            description={sectionCopy.diagrams.description}
            sources={sectionCopy.diagrams.sources}
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
            eyebrow={sectionCopy.context.eyebrow}
            title={sectionCopy.context.title}
            description={sectionCopy.context.description}
            sources={sectionCopy.context.sources}
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
            eyebrow={sectionCopy.deliverables.eyebrow}
            title={sectionCopy.deliverables.title}
            description={sectionCopy.deliverables.description}
            sources={sectionCopy.deliverables.sources}
          />
          <div className="deliverable-grid">
            {deliverables.map((deliverable) => (
              <article key={deliverable.title.en} className="deliverable-card">
                <h3>{deliverable.title.en}</h3>
                <p className="surface-title-ru">{deliverable.title.ru}</p>
                <BilingualPanel english={deliverable.body.en} russian={deliverable.body.ru} />
                <p className="deliverable-source">
                  <span>Source / Источник</span>
                  <code>{deliverable.sourcePath}</code>
                </p>
                <div className="link-row">
                  {deliverable.links.map((link) => (
                    <a
                      key={link.href}
                      className="resource-link"
                      href={link.href}
                      rel={link.external ? "noreferrer" : undefined}
                      target={link.external ? "_blank" : undefined}
                    >
                      <span>{link.label.en}</span>
                      <span className="resource-link-ru">{link.label.ru}</span>
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-copy">
          <p>{footerCopy.en}</p>
          <p className="surface-title-ru">{footerCopy.ru}</p>
        </div>
        <p>
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              rel={link.external ? "noreferrer" : undefined}
              target={link.external ? "_blank" : undefined}
            >
              <span className="link-stack">
                <span>{link.label.en}</span>
                <span className="link-stack-ru">{link.label.ru}</span>
              </span>
            </a>
          ))}
        </p>
      </footer>
    </div>
  );
}

export default App;
