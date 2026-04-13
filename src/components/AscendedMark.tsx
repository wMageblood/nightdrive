export const AscendedMark = () => {
  return (
    <svg viewBox="0 0 200 200" className="w-72">
      <defs>
        <linearGradient id="arcane" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>

      <g className="animate-spin-slow origin-center">
        <circle
          cx="100"
          cy="100"
          r="70"
          fill="none"
          stroke="url(#arcane)"
          strokeWidth="2"
          className="opacity-40 blur-[1px]"
        />
        <circle
          cx="100"
          cy="100"
          r="50"
          fill="none"
          stroke="url(#arcane)"
          strokeWidth="1.5"
          className="opacity-30"
        />
        <path
          d="M 100 45 L 145 130 L 55 130 Z"
          fill="none"
          stroke="url(#arcane)"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="round"
          className="blur-[1px]"
        />
        <path
          d="M 100 45 L 145 130 L 55 130 Z"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>
      <circle
        cx="100"
        cy="100"
        r="5"
        fill="url(#arcane)"
        className="animate-pulse"
      />
    </svg>
  );
};