import { Twitter, Linkedin, Instagram, Github } from "lucide-react";
import SpacegradeLogo from "./illustrations/SpacegradeLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 relative glassmorphism mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <SpacegradeLogo className="h-24 w-auto" />
            </a>
            <p className="text-space-gray mt-2 max-w-md">
              Building innovative digital experiences that connect people and
              ideas across the universe.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="text-space-gray hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-space-gray hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            {/* <a
              href="#"
              className="text-space-gray hover:text-white transition-colors"
            >
              Careers
            </a>
            <a
              href="#"
              className="text-space-gray hover:text-white transition-colors"
            >
              Blog
            </a> */}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-space-gray text-sm mb-4 md:mb-0">
            &copy; {currentYear} Spacegrade Technologies. All rights reserved.
          </div>

          <div className="flex space-x-4">
            <a
              href="#"
              className="text-space-gray hover:text-white transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-space-gray hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-space-gray hover:text-white transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
