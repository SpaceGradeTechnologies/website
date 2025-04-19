import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Mystry from "../components/Mystry";
import Contact from "../components/Contact";
import Services from "../components/Services";
import Footer from "../components/Footer";
import { initScrollAnimations } from "../animations";

export default function Home() {
  useEffect(() => {
    // Initialize scroll-based animations when component mounts
    initScrollAnimations();
  }, []);

  return (
    <div className="min-h-screen bg-space-black text-white relative">
      {/* Stars background with twinkling effect */}
      <div className="stars fixed inset-0"></div>

      {/* Decorative gradient orbs */}
      <div className="gradient-orb bg-space-purple w-[500px] h-[500px] top-[10%] left-[-250px]"></div>
      <div className="gradient-orb bg-space-pink w-[600px] h-[600px] top-[40%] right-[-300px]"></div>
      <div className="gradient-orb bg-space-purple w-[400px] h-[400px] top-[80%] left-[-200px]"></div>

      <Navbar />
      <Hero />
      <About />
      <Mystry />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
