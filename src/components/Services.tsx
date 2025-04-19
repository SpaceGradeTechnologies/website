import { Smartphone, Code, Palette, Headset, CheckCircle } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile App Development",
      description: "We create native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android devices.",
      features: [
        "Native iOS & Android Development",
        "Cross-Platform Solutions (React Native, Flutter)",
        "App Store Optimization & Launch"
      ],
      delay: 0
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Web Development",
      description: "Our web development services span from responsive websites to complex web applications, built with modern frameworks and best practices.",
      features: [
        "Frontend Development (React, Vue, Angular)",
        "Backend Systems & APIs",
        "E-commerce & Custom Web Solutions"
      ],
      delay: 200
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "We design intuitive, beautiful interfaces that captivate users while delivering seamless experiences that drive engagement and conversion.",
      features: [
        "User Research & Journey Mapping",
        "Wireframing & Prototyping",
        "Visual Design & Design Systems"
      ],
      delay: 300
    },
    {
      icon: <Headset className="h-6 w-6" />,
      title: "Technology Consulting",
      description: "Our strategic technology consulting helps organizations identify opportunities, overcome challenges, and implement solutions that drive growth.",
      features: [
        "Digital Transformation Strategy",
        "Technology Stack Evaluation",
        "Project Planning & Implementation"
      ],
      delay: 400
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 transform translate-y-8" data-scroll-fade>
          <h2 className="font-space text-4xl font-bold mb-4">Our <span className="gradient-text">Services</span></h2>
          <p className="text-space-gray max-w-3xl mx-auto">
            From concept to launch, we provide end-to-end technology solutions that help businesses innovate and grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glassmorphism rounded-2xl p-8 transition-transform hover:scale-105 opacity-0 transform translate-y-8"
              data-scroll-fade
              data-delay={service.delay.toString()}
            >
              <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="font-space text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-space-gray mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle className="text-space-purple mt-1 mr-3 h-5 w-5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center opacity-0 transform translate-y-8" data-scroll-fade>
          <a 
            href="#contact" 
            className="px-8 py-4 rounded-full gradient-bg font-mont font-semibold transition-transform hover:scale-105 inline-block"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
