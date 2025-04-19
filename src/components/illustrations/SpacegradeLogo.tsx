// ./illustrations/SpacegradeLogo.tsx
import * as React from "react";

const SpacegradeLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 360 210" // Keep viewBox, no fixed width/height
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Keep black background rectangle for contrast */}
    <rect width={360} height={210} />

    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ff5277" />
        <stop offset="100%" stopColor="#7d2ae8" />
      </linearGradient>

      {/* Keep the existing Clip Path */}
      <clipPath id="ringClip">
        <path d="M0,0 H360 V75 H0 Z" />
        <path d="M0,135 H360 V210 H0 Z" />
      </clipPath>
    </defs>

    {/* Apply clip path to the group containing rings */}
    <g clipPath="url(#ringClip)">
      {/* Apply the gradient STROKE to the rings */}
      <g
        transform="rotate(-25 180 105)"
        // Use stroke="url(#gradientId)" instead of stroke="white"
        stroke="url(#logoGradient)"
        strokeWidth={1.5}
        fill="none"
      >
        <ellipse cx={180} cy={105} rx={150} ry={60} />
        <ellipse cx={180} cy={105} rx={120} ry={48} />
        <ellipse cx={180} cy={105} rx={90} ry={36} />
        <ellipse cx={180} cy={105} rx={60} ry={24} />
      </g>
    </g>

    {/* Apply the gradient FILL to the text */}
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      // Use fill="url(#gradientId)" instead of fill="white"
      fill="#ffffff"
      fontFamily="'Orbitron', sans-serif"
      fontSize={48}
      letterSpacing={3}
      fontWeight={500}
      dy=".35em"
    >
      SPACEGRADE
    </text>
  </svg>
);
export default SpacegradeLogo;
