import type { ContextSource } from "../content/siteContent";
import { BilingualPanel } from "./BilingualPanel";

type ContextSourceCardProps = {
  source: ContextSource;
};

export function ContextSourceCard({ source }: ContextSourceCardProps) {
  return (
    <article className="context-card">
      <h3>{source.title.en}</h3>
      <p className="context-title-ru">{source.title.ru}</p>
      <BilingualPanel english={source.body.en} russian={source.body.ru} />
      <p className="context-note">
        <span>{source.note.en}</span>
        <span>{source.note.ru}</span>
      </p>
    </article>
  );
}
