interface MagiMarkProps {
  width: string;
}

export const MagiMark = ({ width }: MagiMarkProps) => {
  return (
    <svg
      viewBox="-101 -63 400 400"
      className={`${width} animate-fade-arcane`}
      shapeRendering="geometricPrecision"
    >
      <defs>
        <linearGradient id="arcaneEnergyV2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8d79b7" />
          <stop offset="35%" stopColor="#9c74bf" />
          <stop offset="70%" stopColor="#c97fd1" />
          <stop offset="100%" stopColor="#e3d8f1" />
        </linearGradient>

        <linearGradient id="arcaneCoreV2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d7cbdf" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>

      {/* OUTER AURA — cleaner, softer, no blur */}
      <g
        stroke="url(#arcaneEnergyV2)"
        strokeOpacity="0.14"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="origin-center [animation:arcanePulse_4.5s_ease-in-out_infinite]"
      >
        <rect x="8" y="48" width="184" height="184" fill="none" strokeWidth="5.5" />
        <circle cx="100" cy="140" r="128" fill="none" strokeWidth="8" />
        <rect
          x="35"
          y="35"
          width="180"
          height="180"
          fill="none"
          strokeWidth="5"
          transform="rotate(45 100 100)"
        />
      </g>

      {/* SECONDARY DETAILS */}
      <g
        stroke="url(#arcaneEnergyV2)"
        strokeOpacity="0.26"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="origin-center [animation:arcanePulse_4.5s_ease-in-out_infinite]"
      >
        <circle cx="-20" cy="140" r="26" fill="none" strokeWidth="6" />
        <circle cx="176" cy="215" r="26" fill="none" strokeWidth="6" />
        <circle cx="192" cy="52" r="18" fill="none" strokeWidth="6" />
      </g>

      {/* MAIN LINEWORK */}
      <g
        stroke="url(#arcaneEnergyV2)"
        strokeOpacity="0.62"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="origin-center [animation:arcanePulse_4.5s_ease-in-out_infinite]"
      >
        <rect x="8" y="48" width="184" height="184" fill="none" strokeWidth="2.5" />
        <circle cx="100" cy="140" r="128" fill="none" strokeWidth="4" />
        <circle cx="-20" cy="140" r="26" fill="none" strokeWidth="4" />
        <circle cx="176" cy="215" r="26" fill="none" strokeWidth="4" />
        <circle cx="192" cy="52" r="18" fill="none" strokeWidth="4" />
        <rect
          x="35"
          y="35"
          width="180"
          height="180"
          fill="none"
          strokeWidth="2.4"
          transform="rotate(45 100 100)"
        />
      </g>

      {/* BRIGHTER INNER CORE */}
      <g
        stroke="url(#arcaneCoreV2)"
        strokeOpacity="0.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="origin-center [animation:arcaneCorePulse_3.8s_ease-in-out_infinite]"
      >
        {/* Inner ring */}
        <circle cx="100" cy="132" r="58" fill="none" strokeWidth="2.6" />

        {/* Center triangle */}
        <polygon
          points="100,58 175,172 25,172"
          fill="none"
          strokeWidth="2.8"
        />
      </g>

      {/* WHITE TRACE / HIGHLIGHT */}
      <g
        stroke="#f7f5fb"
        strokeOpacity="0.92"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect
          className="[stroke-dasharray:1000] animate-draw"
          x="8"
          y="48"
          width="184"
          height="184"
          fill="none"
        />
        <circle
          className="[stroke-dasharray:1000] animate-draw [animation-delay:0.1s]"
          cx="100"
          cy="140"
          r="128"
          fill="none"
        />
        <rect
          className="[stroke-dasharray:1000] animate-draw [animation-delay:0.2s]"
          x="35"
          y="35"
          width="180"
          height="180"
          fill="none"
          transform="rotate(45 100 100)"
        />
        <circle
          className="[stroke-dasharray:1000] animate-draw [animation-delay:0.3s]"
          cx="100"
          cy="132"
          r="58"
          fill="none"
        />
        <polygon
          className="[stroke-dasharray:1000] animate-draw [animation-delay:0.4s]"
          points="100,58 175,172 25,172"
          fill="none"
        />
      </g>
    </svg>
  );
};