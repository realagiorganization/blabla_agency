import type { ReactNode } from "react";

type BilingualPanelProps = {
  english: ReactNode;
  russian: ReactNode;
};

export function BilingualPanel({ english, russian }: BilingualPanelProps) {
  return (
    <div className="bilingual-panel">
      <div className="language-card">
        <span className="language-label">English</span>
        <div className="language-copy">{english}</div>
      </div>
      <div className="language-card">
        <span className="language-label">Русский</span>
        <div className="language-copy">{russian}</div>
      </div>
    </div>
  );
}
