const ConnectCircle = ({
  className = "",
  number = 2,
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
          x="15"
          y="60"
          width="110"
          height="180"
          rx="18"
          fill="#4A4A4A"
          stroke="#333333"
          stroke-width="2"
        />
        <rect x="25" y="70" width="90" height="160" rx="10" fill="#FFFFFF" />
        <circle cx="70" cy="115" r="20" fill="#E0E0E0" />{" "}
        <path
          d="M70 135 C 55 150, 85 150, 70 135 Z"
          fill="#E0E0E0"
          transform="translate(0, 10) scale(1, 0.8)"
        />
        <rect
          x="175"
          y="60"
          width="110"
          height="180"
          rx="18"
          fill="#4A4A4A"
          stroke="#333333"
          stroke-width="2"
        />
        <rect x="185" y="70" width="90" height="160" rx="10" fill="#FFFFFF" />{" "}
        <circle cx="230" cy="115" r="20" fill="#E0E0E0" />{" "}
        <path
          d="M230 135 C 215 150, 245 150, 230 135 Z"
          fill="#E0E0E0"
          transform="translate(0, 10) scale(1, 0.8)"
        />
        // --- Connection Lines & Interest Icons (Repositioned) --- // Line
        connecting the two phones
        <line
          x1="125"
          y1="150"
          x2="175"
          y2="150"
          stroke="#7ED321"
          stroke-width="3"
          stroke-dasharray="5 5"
        />
        // Interest Icons along the line // Heart icon (Improved shape &
        repositioned)
        <path
          d="M142 140 C 135 132 125 135 125 145 C 125 155 142 165 142 165 C 142 165 159 155 159 145 C 159 135 149 132 142 140 Z"
          fill="#E91E63"
        />
        // Gear icon (Repositioned)
        <path
          d="M167.5 142 L 167.5 138 L 172.5 138 L 172.5 142 L 176.5 144 L 175 149 L 170 148 L 167.5 152 L 162.5 152 L 160 148 L 155 149 L 153.5 144 L 157.5 142 L 157.5 138 L 162.5 138 L 162.5 142 Z M 165 148 C 166.65 148 168 146.65 168 145 C 168 143.35 166.65 142 165 142 C 163.35 142 162 143.35 162 145 C 162 146.65 163.35 148 165 148 Z"
          fill="#607D8B"
          transform="translate(0, 5)"
        />
        // --- Chat Bubbles (Repositioned) --- // Bubble from Phone 1 towards
        Phone 2
        <path
          d="M130 90 C 130 80, 145 80, 145 90 L 160 90 C 170 90, 170 105, 160 105 L 138 105 C 138 105, 133 105, 131 108 L 125 115 C 130 105, 130 90, 130 90 Z"
          fill="#FFFFFF"
          stroke="#B0BEC5"
          stroke-width="2"
        />
        <text
          x="138"
          y="98"
          font-family="Arial, sans-serif"
          font-size="10"
          fill="#4A4A4A"
        >
          Hello!
        </text>
        // Bubble from Phone 2 towards Phone 1
        <path
          d="M170 210 C 170 220, 155 220, 155 210 L 140 210 C 130 210, 130 195, 140 195 L 162 195 C 162 195, 167 195, 169 192 L 175 185 C 170 195, 170 210, 170 210 Z"
          fill="#FFFFFF"
          stroke="#B0BEC5"
          stroke-width="2"
        />
        <text
          x="142"
          y="208"
          font-family="Arial, sans-serif"
          font-size="10"
          fill="#4A4A4A"
        >
          Hi there!
        </text>
      </svg>
      {/* Step number */}
      <div className="absolute top-0 right-0 w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
        <span className="font-bold">{number}</span>
      </div>
    </div>
  );
};

export default ConnectCircle;
