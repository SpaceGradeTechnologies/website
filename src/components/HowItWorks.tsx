import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User, MessageSquare, Heart } from "lucide-react";
import ProfileCircle from "./illustrations/ProfileCircle";
import ConnectCircle from "./illustrations/ConnectCircle";
import RevealCircle from "./illustrations/RevealCircle";

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  // Reference for the main container
  const containerRef = useRef<HTMLDivElement>(null);
  // Reference for the title that will be pinned
  const titleRef = useRef<HTMLHeadingElement>(null);
  // References for each step
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clean up existing ScrollTrigger instances to prevent issues
    ScrollTrigger.getAll().forEach((st) => st.kill());

    const setupAnimation = () => {
      if (
        !containerRef.current ||
        !titleRef.current ||
        !step1Ref.current ||
        !step2Ref.current ||
        !step3Ref.current
      ) {
        // If any refs are not available yet, retry after a short delay
        return;
      }

      // Set the initial state of steps (hidden)
      gsap.set([step1Ref.current, step2Ref.current, step3Ref.current], {
        autoAlpha: 0,
        y: 50,
      });

      // Create a timeline for step animations
      const stepsTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          start: "top top",
          end: `+=${steps.length * 125}%`,
          scrub: 0.1,
          anticipatePin: 1,
          markers: false, // Set to true for debugging scroll trigger positions
          invalidateOnRefresh: true,
        },
        defaults: { ease: "power1.inOut", duration: 0.5 },
      });

      // Add step animations to the timeline
      // Step 1 animation in
      stepsTl.to(step1Ref.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.1,
      });

      // Step 1 out, Step 2 in
      stepsTl.to(
        step1Ref.current,
        {
          autoAlpha: 0,
          y: -50,
          duration: 0.2,
        },
        "+=0.3"
      );

      stepsTl.to(
        step2Ref.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.2,
        },
        "-=0.1"
      );

      // Step 2 out, Step 3 in
      stepsTl.to(
        step2Ref.current,
        {
          autoAlpha: 0,
          y: -50,
          duration: 0.2,
        },
        "+=0.3"
      );

      stepsTl.to(
        step3Ref.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.2,
        },
        "-=0.1"
      );
    };

    // Run our setup
    setupAnimation();

    // Add resize listener to handle viewport changes
    window.addEventListener("resize", () => {
      ScrollTrigger.refresh();
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      window.removeEventListener("resize", () => {
        ScrollTrigger.refresh();
      });
    };
  }, []);

  // Step data
  const steps = [
    {
      icon: <User className="h-24 w-24 gradient-text" />,
      illustration: <ProfileCircle number={1} />,
      title: "Create Your Profile",
      description:
        "Share your personality, interests, and what you're looking for in a relationship. Your photos will remain hidden during the initial matching phase.",
      quote:
        "The questions in the profile setup really made me think about what I value in a relationship. It's refreshing!",
    },
    {
      icon: <MessageSquare className="h-24 w-24 gradient-text" />,
      illustration: <ConnectCircle number={2} />,
      title: "Connect & Converse",
      description:
        "Our algorithm suggests compatible matches based on shared interests and relationship goals. Chat and get to know each other without the influence of appearance.",
      quote:
        "I found myself having deeper conversations right from the start. It's amazing how different dating feels this way!",
    },
    {
      icon: <Heart className="h-24 w-24 gradient-text" />,
      illustration: <RevealCircle number={3} />,
      title: "Reveal & Meet",
      description:
        "Once both users agree they've formed a meaningful connection, photos are revealed.",
      quote:
        "The moment we revealed our photos was exciting, but by then we already had such a great connection. Now we're three months in!",
    },
  ];

  return (
    <div ref={containerRef} className="relative min-h-[50vh] py-20">
      {/* Pinned title */}
      <div className="w-full">
        <h2
          ref={titleRef}
          className="font-space text-3xl md:text-4xl font-bold text-center py-6"
        >
          How Mystry Works
        </h2>
      </div>

      {/* Content with steps */}
      <div className="min-h-[80vh] relative py-10">
        {/* Container for centered content */}
        <div className="container mx-auto px-4">
          {/* Step 1 */}
          <div
            ref={step1Ref}
            className="opacity-0 absolute top-[25vh] left-0 right-0"
          >
            <div className="flex flex-col lg:flex-row items-center gap-10 mx-auto max-w-5xl">
              <div className="lg:w-1/2 flex justify-center">
                {steps[0].illustration}
              </div>
              <div className="lg:w-1/2">
                <h3 className="font-space text-2xl font-bold mb-4">
                  {steps[0].title}
                </h3>
                <p className="text-space-gray mb-6">{steps[0].description}</p>
                <div className="glassmorphism p-4 rounded-xl">
                  <p className="text-sm italic">
                    "{steps[0].quote}" - Mystry Beta User
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div
            ref={step2Ref}
            className="opacity-0 absolute top-[25vh] left-0 right-0"
          >
            <div className="flex flex-col lg:flex-row items-center gap-10 mx-auto max-w-5xl">
              <div className="lg:w-1/2 flex justify-center">
                {steps[1].illustration}
              </div>
              <div className="lg:w-1/2">
                <h3 className="font-space text-2xl font-bold mb-4">
                  {steps[1].title}
                </h3>
                <p className="text-space-gray mb-6">{steps[1].description}</p>
                <div className="glassmorphism p-4 rounded-xl">
                  <p className="text-sm italic">
                    "{steps[1].quote}" - Mystry Beta User
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div
            ref={step3Ref}
            className="opacity-0 absolute top-[25vh] left-0 right-0"
          >
            <div className="flex flex-col lg:flex-row items-center gap-10 mx-auto max-w-5xl">
              <div className="lg:w-1/2 flex justify-center">
                {steps[2].illustration}
              </div>
              <div className="lg:w-1/2">
                <h3 className="font-space text-2xl font-bold mb-4">
                  {steps[2].title}
                </h3>
                <p className="text-space-gray mb-6">{steps[2].description}</p>
                <div className="glassmorphism p-4 rounded-xl">
                  <p className="text-sm italic">
                    "{steps[2].quote}" - Mystry Beta User
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
