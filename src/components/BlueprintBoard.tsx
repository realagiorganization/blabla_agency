import { useState } from "react";
import type { Blueprint } from "../content/siteContent";
import { BilingualPanel } from "./BilingualPanel";

type BlueprintBoardProps = {
  blueprints: Blueprint[];
};

export function BlueprintBoard({ blueprints }: BlueprintBoardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeBlueprint = blueprints[activeIndex];

  return (
    <section className="blueprint-board" aria-labelledby="blueprint-board-title">
      <div className="blueprint-toolbar">
        <div>
          <p className="section-eyebrow">Interactive delivery board</p>
          <h3 id="blueprint-board-title">Engagement blueprint explorer</h3>
          <p className="surface-title-ru">Интерактивный разбор сценариев поставки</p>
        </div>
        <p className="blueprint-toolbar-copy">
          Pick a project shape and compare the context that enters the repo against the outputs and
          proof surfaces that the client sees.
        </p>
      </div>

      <div className="blueprint-selector" aria-label="Delivery blueprints">
        {blueprints.map((blueprint, blueprintIndex) => (
          <button
            key={blueprint.slug}
            type="button"
            className={
              blueprintIndex === activeIndex ? "blueprint-step is-active" : "blueprint-step"
            }
            aria-pressed={blueprintIndex === activeIndex}
            onClick={() => setActiveIndex(blueprintIndex)}
          >
            <span className="explorer-step-label">{blueprint.label}</span>
            <span>{blueprint.title.en}</span>
            <span className="resource-link-ru">{blueprint.title.ru}</span>
          </button>
        ))}
      </div>

      <div className="blueprint-stage">
        <article className="blueprint-summary">
          <span className="step-badge">{activeBlueprint.label}</span>
          <h3>{activeBlueprint.title.en}</h3>
          <p className="step-title-ru">{activeBlueprint.title.ru}</p>
          <BilingualPanel
            english={activeBlueprint.scope.en}
            russian={activeBlueprint.scope.ru}
          />
        </article>

        <div className="blueprint-columns">
          <article className="blueprint-column">
            <p className="explorer-column-label">Context in / Что входит в контекст</p>
            <ul className="token-list">
              {activeBlueprint.inputs.map((item) => (
                <li key={`${activeBlueprint.slug}-input-${item.en}`}>
                  <span>{item.en}</span>
                  <span>{item.ru}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="blueprint-column">
            <p className="explorer-column-label">What ships / Что поставляется</p>
            <ul className="token-list">
              {activeBlueprint.outputs.map((item) => (
                <li key={`${activeBlueprint.slug}-output-${item.en}`}>
                  <span>{item.en}</span>
                  <span>{item.ru}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="blueprint-column">
            <p className="explorer-column-label">Public proof / Публичное доказательство</p>
            <ul className="token-list">
              {activeBlueprint.proofs.map((item) => (
                <li key={`${activeBlueprint.slug}-proof-${item.en}`}>
                  <span>{item.en}</span>
                  <span>{item.ru}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
