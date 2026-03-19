import type { Bilingual } from "../content/siteContent";
import { BilingualPanel } from "./BilingualPanel";

type SectionHeadingProps = {
  eyebrow: Bilingual;
  title: Bilingual;
  description: Bilingual;
  sources?: string[];
};

export function SectionHeading({ eyebrow, title, description, sources }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div className="section-heading-grid">
        <div>
          <p className="section-eyebrow">{eyebrow.en}</p>
          <h2>{title.en}</h2>
        </div>
        <div className="section-heading-translation">
          <p className="section-eyebrow section-eyebrow-ru">{eyebrow.ru}</p>
          <p className="section-title-ru">{title.ru}</p>
        </div>
      </div>

      <BilingualPanel english={description.en} russian={description.ru} />

      {sources?.length ? (
        <div className="section-source-row" aria-label="Repository source paths">
          {sources.map((sourcePath) => (
            <span key={sourcePath} className="section-source-chip">
              <span>Source / Источник</span>
              <code>{sourcePath}</code>
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
