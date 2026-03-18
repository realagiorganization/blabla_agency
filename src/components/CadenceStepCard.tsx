import type { CadenceStep } from "../content/siteContent";
import { BilingualPanel } from "./BilingualPanel";

type CadenceStepCardProps = {
  step: CadenceStep;
};

export function CadenceStepCard({ step }: CadenceStepCardProps) {
  return (
    <article className="step-card">
      <div className="step-card-topline">
        <span className="step-badge">{step.label}</span>
        <h3>{step.title.en}</h3>
      </div>
      <p className="step-title-ru">{step.title.ru}</p>
      <BilingualPanel english={step.summary.en} russian={step.summary.ru} />
      <ul className="token-list">
        {step.outputs.map((item) => (
          <li key={`${step.label}-${item.en}`}>
            <span>{item.en}</span>
            <span>{item.ru}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
