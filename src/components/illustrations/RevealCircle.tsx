const RevealCircle = ({
  className = "",
  number = 3,
}: {
  className?: string;
  number?: number;
}) => {
  return (
    <div className={`relative w-[300px] h-[300px] ${className}`}>
      <svg
        width="300"
        height="300"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="300" height="300" fill="none" />
        <rect
          x="75"
          y="30"
          width="150"
          height="240"
          rx="20"
          fill="#4A4A4A"
          stroke="#333333"
          strokeWidth="2"
        />
        <rect x="85" y="40" width="130" height="220" rx="10" fill="#FFFFFF" />
        <rect x="95" y="50" width="110" height="140" rx="8" fill="#F0F4F8" />
        <circle cx="150" cy="95" r="35" fill="#87CEEB" />
        <path
          d="M125 115 C 135 100, 165 100, 175 115 L 170 130 L 130 130 Z"
          fill="#228B22"
        />
        <circle cx="150" cy="90" r="10" fill="#FFDAB9" />
        <rect x="110" y="150" width="80" height="8" rx="4" fill="#B0BEC5" />
        <rect x="120" y="165" width="60" height="6" rx="3" fill="#CFD8DC" />
        <g transform="translate(185 45)">
          <path
            d="M12 7V5C12 2.23858 9.76142 0 7 0C4.23858 0 2 2.23858 2 5V7H0V16H14V7H12ZM4 7V5C4 3.34315 5.34315 2 7 2C8.65685 2 10 3.34315 10 5V7H4Z"
            fill="#7ED321"
            transform="scale(1.5)"
          />
          <line
            x1="15"
            y1="-5"
            x2="18"
            y2="-8"
            stroke="#7ED321"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="20"
            y1="0"
            x2="24"
            y2="0"
            stroke="#7ED321"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
        <text
          x="150"
          y="245"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontSize="12"
          fill="#4A4A4A"
        >
          Photos Revealed!
        </text>
      </svg>
      {/* Step number */}
      <div className="absolute top-0 right-0 w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
        <span className="font-bold">{number}</span>
      </div>
    </div>
  );
};

export default RevealCircle;
