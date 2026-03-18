export function PipelineClipArt() {
  return (
    <div className="clipart-shell" aria-hidden="true">
      <svg viewBox="0 0 520 420" className="clipart-svg">
        <defs>
          <linearGradient id="panelGlow" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#f7d7a8" />
            <stop offset="100%" stopColor="#d66d3d" />
          </linearGradient>
          <linearGradient id="accentFill" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#d8edf1" />
            <stop offset="100%" stopColor="#6ba9b1" />
          </linearGradient>
        </defs>
        <rect x="30" y="44" width="156" height="112" rx="24" fill="#0f2030" />
        <rect x="52" y="68" width="112" height="16" rx="8" fill="url(#panelGlow)" />
        <rect x="52" y="100" width="88" height="12" rx="6" fill="#f3f1eb" opacity="0.82" />
        <rect x="52" y="124" width="70" height="12" rx="6" fill="#f3f1eb" opacity="0.52" />

        <circle cx="260" cy="210" r="102" fill="#122533" />
        <circle cx="260" cy="210" r="74" fill="url(#accentFill)" opacity="0.9" />
        <path
          d="M248 160h24l15 28-15 28h-24l-16-28 16-28Zm-46 65 37 10m43 0 36-10m-89-58-23-23m109 23 23-23"
          fill="none"
          stroke="#f3f1eb"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="10"
        />

        <rect x="338" y="268" width="150" height="108" rx="26" fill="#0f2030" />
        <rect x="360" y="290" width="106" height="18" rx="9" fill="url(#panelGlow)" />
        <rect x="360" y="322" width="92" height="12" rx="6" fill="#f3f1eb" opacity="0.86" />
        <rect x="360" y="346" width="68" height="12" rx="6" fill="#f3f1eb" opacity="0.54" />

        <path
          d="M185 110h66m98 184h-66m-28-84h80"
          fill="none"
          stroke="#d66d3d"
          strokeDasharray="10 12"
          strokeLinecap="round"
          strokeWidth="10"
        />
      </svg>
    </div>
  );
}
