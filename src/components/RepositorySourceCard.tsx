import type { RepositorySource } from "../content/siteContent";
import { BilingualPanel } from "./BilingualPanel";

type RepositorySourceCardProps = {
  source: RepositorySource;
};

export function RepositorySourceCard({ source }: RepositorySourceCardProps) {
  return (
    <article className="surface-card repo-card">
      <div className="repo-card-header">
        <div>
          <h3>{source.title.en}</h3>
          <p className="surface-title-ru">{source.title.ru}</p>
        </div>
        <code className="repo-path">{source.filePath}</code>
      </div>

      <BilingualPanel english={source.body.en} russian={source.body.ru} />

      <div className="link-row">
        <a className="resource-link" href={source.repoHref} rel="noreferrer" target="_blank">
          <span>{source.filePath}</span>
          <span className="resource-link-ru">GitHub source / Исходник на GitHub</span>
        </a>
        {source.liveHref ? (
          <a className="resource-link" href={source.liveHref}>
            <span>{source.liveLabel?.en ?? "Published artifact"}</span>
            <span className="resource-link-ru">
              {source.liveLabel?.ru ?? "Опубликованный артефакт"}
            </span>
          </a>
        ) : null}
      </div>

      <ul className="token-list">
        {source.proofs.map((proof) => (
          <li key={`${source.filePath}-${proof.en}`}>
            <span>{proof.en}</span>
            <span>{proof.ru}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
