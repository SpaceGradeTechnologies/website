import { Rocket, CodeSquare, FileHeart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-40 relative my-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-16 opacity-0 transform translate-y-8"
          data-scroll-fade
        >
          <h2 className="font-space text-4xl font-bold mb-4">
            About <span className="gradient-text">Spacegrade</span>
          </h2>
          <p className="text-space-gray max-w-3xl mx-auto">
            We're a team of passionate technologists, designers, and
            problem-solvers creating next-generation digital products and
            services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="glassmorphism rounded-2xl p-8 transition-transform hover:scale-105 opacity-0 transform translate-y-8"
            data-scroll-fade
          >
            <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-6">
              <Rocket className="h-6 w-6" />
            </div>
            <h3 className="font-space text-xl font-bold mb-4">
              Innovation First
            </h3>
            <p className="text-space-gray">
              We pioneer solutions that push the boundaries of what's possible,
              delivering experiences that captivate and inspire.
            </p>
          </div>

          <div
            className="glassmorphism rounded-2xl p-8 transition-transform hover:scale-105 opacity-0 transform translate-y-8"
            data-scroll-fade
            data-delay="200"
          >
            <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-6">
              <CodeSquare className="h-6 w-6" />
            </div>
            <h3 className="font-space text-xl font-bold mb-4">
              Technical Excellence
            </h3>
            <p className="text-space-gray">
              Our engineering talent creates robust, scalable systems that form
              the foundation of exceptional digital products.
            </p>
          </div>

          <div
            className="glassmorphism rounded-2xl p-8 transition-transform hover:scale-105 opacity-0 transform translate-y-8"
            data-scroll-fade
            data-delay="400"
          >
            <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-6">
              <FileHeart className="h-6 w-6" />
            </div>
            <h3 className="font-space text-xl font-bold mb-4">User-Centered</h3>
            <p className="text-space-gray">
              We place people at the heart of everything we build, crafting
              intuitive experiences that solve real problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
