import { CheckCircle, Apple, PlayCircle } from "lucide-react";
import HowItWorks from "./HowItWorks";

export default function Mystry() {
  return (
    <section id="mystry" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-16 opacity-0 transform translate-y-8"
          data-scroll-fade
        >
          <h2 className="font-space text-4xl font-bold mb-4">
            Introducing <span className="gradient-text">Mystry</span>
          </h2>
          <p className="text-space-gray max-w-3xl mx-auto">
            A revolutionary blind dating app that focuses on genuine connections
            before appearance. Discover the person behind the profile.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div
            className="lg:w-1/2 order-2 lg:order-1 opacity-0 transform translate-y-8"
            data-scroll-fade
          >
            <h3 className="font-space text-2xl font-bold mb-4">
              Connections Based on Chemistry
            </h3>
            <p className="text-space-gray mb-6">
              Mystry flips the dating script by hiding photos until you've had
              meaningful conversations. We prioritize personality compatibility
              and shared interests to create matches that truly matter.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckCircle className="text-space-purple mt-1 mr-3 h-5 w-5" />
                <span>Personality-first approach to matching</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-space-purple mt-1 mr-3 h-5 w-5" />
                <span>Photos revealed only after meaningful connection</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-space-purple mt-1 mr-3 h-5 w-5" />
                <span>Advanced interest-based matching algorithm</span>
              </li>
            </ul>
          </div>
          <div
            className="lg:w-1/2 order-1 lg:order-2 flex justify-center opacity-0 transform translate-y-8"
            data-scroll-fade
            data-delay="200"
          >
            <div className="relative w-[280px] h-[560px]">
              <div className="absolute -inset-1 rounded-[36px] gradient-bg opacity-25 animate-pulse-slow"></div>
              <div className="rounded-[32px] border-4 border-space-dark shadow-xl overflow-hidden w-full h-full">
                <svg
                  width="280"
                  height="560"
                  viewBox="0 0 280 560"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="280" height="560" fill="#1a0b2e" />
                  <rect
                    x="20"
                    y="40"
                    width="240"
                    height="80"
                    rx="10"
                    fill="url(#app-gradient)"
                  />
                  <rect
                    x="20"
                    y="140"
                    width="240"
                    height="140"
                    rx="10"
                    fill="#2a1b3e"
                  />
                  <rect
                    x="20"
                    y="300"
                    width="240"
                    height="140"
                    rx="10"
                    fill="#2a1b3e"
                  />
                  <rect
                    x="20"
                    y="460"
                    width="110"
                    height="60"
                    rx="30"
                    fill="url(#app-gradient)"
                  />
                  <rect
                    x="150"
                    y="460"
                    width="110"
                    height="60"
                    rx="30"
                    fill="#2a1b3e"
                  />
                  <circle
                    cx="40"
                    cy="20"
                    r="6"
                    fill="white"
                    fillOpacity="0.5"
                  />
                  <defs>
                    <linearGradient
                      id="app-gradient"
                      x1="0"
                      y1="0"
                      x2="240"
                      y2="80"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#ff5277" />
                      <stop offset="1" stopColor="#7d2ae8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section (Pinned Scroll) */}
        <HowItWorks />

        {/* Key Features */}
        <div className="py-16">
          <h3
            className="font-space text-3xl font-bold text-center mb-12 opacity-0 transform translate-y-8"
            data-scroll-fade
          >
            Key Features
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "shield-check",
                title: "Verified Profiles",
                description:
                  "Multi-step verification process ensures all users are authentic and genuine.",
                delay: 0,
              },
              {
                icon: "sparkles",
                title: "AI Matching",
                description:
                  "Advanced algorithm learns your preferences and improves matches over time.",
                delay: 100,
              },
              {
                icon: "message-square",
                title: "Conversation Starters",
                description:
                  "Personalized prompts to help break the ice and keep conversations flowing.",
                delay: 200,
              },
              {
                icon: "calendar-check",
                title: "Date Planner",
                description:
                  "Built-in tools to schedule and plan safe, fun first dates once you're ready to meet.",
                delay: 300,
              },
              {
                icon: "lock",
                title: "Privacy Controls",
                description:
                  "Granular settings let you control what information is shared and when.",
                delay: 400,
              },
              {
                icon: "users",
                title: "Community Events",
                description:
                  "Virtual and in-person events to meet potential matches in group settings.",
                delay: 500,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="glassmorphism rounded-2xl p-8 transition-transform hover:scale-105 opacity-0 transform translate-y-8"
                data-scroll-fade
                data-delay={feature.delay.toString()}
              >
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mb-6">
                  <i className={`ri-${feature.icon}-line text-xl`}></i>
                </div>
                <h4 className="font-space text-xl font-bold mb-3">
                  {feature.title}
                </h4>
                <p className="text-space-gray">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Download CTA */}
        <div className="mt-16 text-center">
          <h3
            className="font-space text-3xl font-bold mb-8 opacity-0 transform translate-y-8"
            data-scroll-fade
          >
            Ready to Experience Dating Differently?
          </h3>
          <div
            className="flex flex-wrap justify-center gap-6 mb-8 opacity-0 transform translate-y-8"
            data-scroll-fade
            data-delay="200"
          >
            <a
              href="#"
              className="flex items-center glassmorphism rounded-xl px-6 py-4 transition-transform hover:scale-105"
            >
              <Apple className="h-6 w-6 mr-3" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center glassmorphism rounded-xl px-6 py-4 transition-transform hover:scale-105"
            >
              <PlayCircle className="h-6 w-6 mr-3" />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </a>
          </div>
          <p
            className="text-space-gray opacity-0 transform translate-y-8"
            data-scroll-fade
            data-delay="400"
          >
            Coming soon to iOS and Android devices
          </p>
        </div>
      </div>
    </section>
  );
}
