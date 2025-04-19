import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="font-space text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
              <span>Innovate </span>
              <span className="gradient-text">Beyond </span>
              <span>Boundaries</span>
            </h1>
            <p className="text-lg text-space-gray mb-8 max-w-lg">
              Spacegrade Technologies builds cutting-edge digital experiences
              and solutions that transform ideas into reality.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#mystry"
                className="px-6 py-3 rounded-full gradient-bg font-mont font-semibold transition-transform hover:scale-105 shadow-lg"
              >
                Discover Mystry
              </a>
              <a
                href="#services"
                className="px-6 py-3 rounded-full glassmorphism font-mont font-semibold transition-transform hover:scale-105"
              >
                Our Services
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] animate-float">
              {/* 3D object or illustration */}
              <div className="w-full h-full rounded-full bg-space-dark overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    width="280"
                    height="280"
                    viewBox="0 0 280 280"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="140" cy="140" r="140" fill="url(#gradient)" />
                    <path
                      d="M140 40C84.8 40 40 84.8 40 140C40 195.2 84.8 240 140 240C195.2 240 240 195.2 240 140C240 84.8 195.2 40 140 40ZM140 160C129.4 160 120 150.6 120 140C120 129.4 129.4 120 140 120C150.6 120 160 129.4 160 140C160 150.6 150.6 160 140 160Z"
                      fill="rgba(255,255,255,0.15)"
                    />
                    <circle
                      cx="140"
                      cy="140"
                      r="40"
                      fill="url(#gradient)"
                      fillOpacity="0.4"
                    />
                    <circle
                      cx="140"
                      cy="140"
                      r="20"
                      fill="white"
                      fillOpacity="0.2"
                    />
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0"
                        y1="0"
                        x2="280"
                        y2="280"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#ff5277" />
                        <stop offset="1" stopColor="#7d2ae8" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-radial from-transparent to-space-black opacity-70 rounded-full"></div>
              </div>
              <div className="absolute -inset-1 rounded-full gradient-bg opacity-15 animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-space-gray text-sm mb-2">Scroll to explore</span>
        <ChevronDown className="animate-bounce h-6 w-6" />
      </div>
    </section>
  );
}
