import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import SpacegradeLogo from "./illustrations/SpacegradeLogo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}
      className={`w-full transition-all duration-300`}
    >
      <div className="glassmorphism mx-auto px-4 sm:px-6 lg:px-8 py-3 transition-all duration-300">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <SpacegradeLogo className="h-12 w-auto" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-space-gray hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#mystry"
              className="text-space-gray hover:text-white transition-colors"
            >
              Mystry App
            </a>
            <a
              href="#services"
              className="text-space-gray hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full gradient-bg font-mont font-semibold transition-transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-space-gray focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden transition-all duration-300 pb-4 pt-2 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col space-y-4">
            <a
              href="#about"
              className="text-space-gray hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#mystry"
              className="text-space-gray hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Mystry App
            </a>
            <a
              href="#services"
              className="text-space-gray hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full gradient-bg font-mont font-semibold text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
