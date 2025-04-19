const ProfileCircle = ({
  className = "",
  number = 1,
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
        <rect
          x="80"
          y="50"
          width="140"
          height="200"
          rx="20"
          fill="#4A4A4A"
          stroke="#333333"
          strokeWidth="2"
        />
        <rect x="90" y="60" width="120" height="180" rx="10" fill="#FFFFFF" />
        <circle cx="150" cy="100" r="25" fill="#E0E0E0" />
        <rect x="110" y="140" width="80" height="8" rx="4" fill="#E0E0E0" />
        <rect x="110" y="155" width="60" height="8" rx="4" fill="#E0E0E0" />
        <rect x="110" y="170" width="80" height="8" rx="4" fill="#E0E0E0" />
        <rect x="100" y="210" width="100" height="15" rx="7.5" fill="#4CAF50" />
        <line
          x1="145"
          y1="213"
          x2="155"
          y2="222"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="155"
          y1="222"
          x2="165"
          y2="208"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      {/* Step number */}
      <div className="absolute top-0 right-0 w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
        <span className="font-bold">{number}</span>
      </div>
    </div>
  );
};

export default ProfileCircle;
