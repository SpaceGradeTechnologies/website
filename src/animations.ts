import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const initScrollAnimations = () => {
  // Ensure the plugin is registered
  gsap.registerPlugin(ScrollTrigger);

  // Fade-in animations for elements with data-scroll-fade attribute
  const scrollFadeElements = document.querySelectorAll('[data-scroll-fade]');

  scrollFadeElements.forEach(el => {
    const delay = (el as HTMLElement).dataset.delay ? parseInt((el as HTMLElement).dataset.delay, 10) : 0;

    gsap.set(el, {
      y: 30,
      opacity: 0
    });

    ScrollTrigger.create({
      trigger: el,
      start: "top bottom-=100",
      onEnter: () => {
        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: delay / 1000, // Convert to seconds
          ease: "power2.out"
        });
      },
      once: true
    });
  });

  // Setup parallax effects for decorative elements
  const parallaxElements = document.querySelectorAll('.gradient-orb');

  parallaxElements.forEach(el => {
    gsap.to(el, {
      y: (i, el) => -parseFloat(window.getComputedStyle(el).getPropertyValue('height')) * 0.2,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5
      }
    });
  });
};
