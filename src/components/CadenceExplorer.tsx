import { useEffect, useState } from "react";
import type { CadenceExplorerFrame } from "../content/siteContent";
import { BilingualPanel } from "./BilingualPanel";

type CadenceExplorerProps = {
  frames: CadenceExplorerFrame[];
};

export function CadenceExplorer({ frames }: CadenceExplorerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (typeof window.matchMedia !== "function") {
      setAutoplay(true);
      return;
    }

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAutoplay(true);
    }
  }, []);

  useEffect(() => {
    if (!autoplay || frames.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % frames.length);
    }, 3600);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [autoplay, frames.length]);

  const activeFrame = frames[activeIndex];

  return (
    <section className="explorer-card" aria-labelledby="cadence-explorer-title">
      <div className="explorer-toolbar">
        <div>
          <p className="section-eyebrow">Interactive playback</p>
          <h3 id="cadence-explorer-title">Cadence explorer</h3>
          <p className="surface-title-ru">Интерактивный разбор cadence</p>
        </div>
        <button
          type="button"
          className="explorer-toggle"
          onClick={() => setAutoplay((currentValue) => !currentValue)}
        >
          <span>{autoplay ? "Pause autoplay" : "Resume autoplay"}</span>
          <span className="resource-link-ru">
            {autoplay ? "Остановить автопроигрывание" : "Возобновить автопроигрывание"}
          </span>
        </button>
      </div>

      <div className="explorer-progress" aria-hidden="true">
        <span
          className="explorer-progress-bar"
          style={{ width: `${((activeIndex + 1) / frames.length) * 100}%` }}
        />
      </div>

      <div className="explorer-selector" aria-label="Cadence steps">
        {frames.map((frame, frameIndex) => (
          <button
            key={frame.label}
            type="button"
            className={frameIndex === activeIndex ? "explorer-step is-active" : "explorer-step"}
            aria-pressed={frameIndex === activeIndex}
            onClick={() => {
              setActiveIndex(frameIndex);
              setAutoplay(false);
            }}
          >
            <span className="explorer-step-label">{frame.label}</span>
            <span>{frame.title.en}</span>
            <span className="resource-link-ru">{frame.title.ru}</span>
          </button>
        ))}
      </div>

      <div className="explorer-stage" aria-live="polite">
        <div className="explorer-stage-copy">
          <span className="step-badge">{activeFrame.label}</span>
          <h3>{activeFrame.title.en}</h3>
          <p className="step-title-ru">{activeFrame.title.ru}</p>
          <BilingualPanel english={activeFrame.summary.en} russian={activeFrame.summary.ru} />
        </div>

        <div className="explorer-column">
          <p className="explorer-column-label">Context added / Что добавляется в контекст</p>
          <ul className="token-list">
            {activeFrame.contextAdds.map((item) => (
              <li key={`${activeFrame.label}-${item.en}`}>
                <span>{item.en}</span>
                <span>{item.ru}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="explorer-column">
          <p className="explorer-column-label">What ships / Что публикуется</p>
          <ul className="token-list">
            {activeFrame.ships.map((item) => (
              <li key={`${activeFrame.label}-ship-${item.en}`}>
                <span>{item.en}</span>
                <span>{item.ru}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
