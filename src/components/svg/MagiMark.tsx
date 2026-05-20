export const MagiMark = () => {
  return (
    <svg viewBox="-101 -63 400 400" className="w-100 mr-3 opacity-60 blur-[2px] animate-fade-arcane">

      <defs>
        <linearGradient id="arcaneEnergy" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c7096" />
          <stop offset="30%" stopColor="#7e6792" />
          <stop offset="60%" stopColor="#c174b6" />
          <stop offset="100%" stopColor="#d7cbdf" />
        </linearGradient>

        <filter id="outerGlow">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
          </feMerge>
        </filter>

        <filter id="innerGlow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g stroke="url(#arcaneEnergy)" strokeOpacity="0.18" filter="url(#outerGlow)">
        <rect x="0" y="40" width="200" height="200" fill="none" strokeWidth="6" />
        <circle cx="100" cy="140" r="140" fill="none" strokeWidth="10" />
        <circle cx="-35" cy="140" r="35" fill="none" strokeWidth="10" />
        <circle cx="185" cy="225" r="35" fill="none" strokeWidth="10" />
        <circle cx="200" cy="40" r="25" fill="none" strokeWidth="10" />
        <rect x="29" y="29" width="200" height="200" fill="none" strokeWidth="6" transform="rotate(45 100 100)" />
        <circle cx="100" cy="129" r="70" fill="none" strokeWidth="6" />
        <polygon points="100,40 195,180 5,180" fill="none" strokeWidth="6" />
      </g>

      <g stroke="url(#arcaneEnergy)" strokeOpacity="0.5" filter="url(#innerGlow)">
        <rect x="0" y="40" width="200" height="200" fill="none" strokeWidth="3" />
        <circle cx="100" cy="140" r="140" fill="none" strokeWidth="6" />
        <circle cx="-35" cy="140" r="35" fill="none" strokeWidth="6" />
        <circle cx="185" cy="225" r="35" fill="none" strokeWidth="6" />
        <circle cx="200" cy="40" r="25" fill="none" strokeWidth="6" />
        <rect x="29" y="29" width="200" height="200" fill="none" strokeWidth="3" transform="rotate(45 100 100)" />
        <circle cx="100" cy="129" r="70" fill="none" strokeWidth="3" />
        <polygon points="100,40 195,180 5,180" fill="none" strokeWidth="3" />
      </g>

      <g stroke="#f2f2f2" strokeOpacity="0.9" strokeWidth="1.2">
        <rect className="[stroke-dasharray:1000] animate-draw" x="0" y="40" width="200" height="200" fill="none" />
        <circle className="[stroke-dasharray:1000] animate-draw [animation-delay:0.1s]" cx="100" cy="140" r="140" fill="none" />
        <circle className="[stroke-dasharray:1000] animate-draw [animation-delay:0.2s]" cx="-35" cy="140" r="35" fill="none" />
        <circle className="[stroke-dasharray:1000] animate-draw [animation-delay:0.3s]" cx="185" cy="225" r="35" fill="none" />
        <circle className="[stroke-dasharray:1000] animate-draw [animation-delay:0.4s]" cx="200" cy="40" r="25" fill="none" />
        <rect className="[stroke-dasharray:1000] animate-draw [animation-delay:0.5s]" x="29" y="29" width="200" height="200" fill="none" transform="rotate(45 100 100)" />
        <circle className="[stroke-dasharray:1000] animate-draw [animation-delay:0.6s]" cx="100" cy="129" r="70" fill="none" />
        <polygon className="[stroke-dasharray:1000] animate-draw [animation-delay:0.7s]" points="100,40 195,180 5,180" fill="none" />
      </g>

    </svg>
  );
};