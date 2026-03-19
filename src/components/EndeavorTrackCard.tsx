import type { EndeavorTrack } from "../content/siteContent";
import { BilingualPanel } from "./BilingualPanel";

type EndeavorTrackCardProps = {
  track: EndeavorTrack;
};

export function EndeavorTrackCard({ track }: EndeavorTrackCardProps) {
  return (
    <article className="surface-card">
      <h3>{track.title.en}</h3>
      <p className="surface-title-ru">{track.title.ru}</p>
      <BilingualPanel english={track.body.en} russian={track.body.ru} />
      <ul className="token-list">
        {track.proofs.map((proof) => (
          <li key={proof.en}>
            <span>{proof.en}</span>
            <span>{proof.ru}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
