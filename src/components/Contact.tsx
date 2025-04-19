import { Mail, MapPin, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-16 opacity-0 transform translate-y-8"
          data-scroll-fade
        >
          <h2 className="font-space text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-space-gray max-w-3xl mx-auto">
            Have a project in mind or want to learn more about our services?
            We'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div
            className="lg:w-1/2 order-2 lg:order-1 opacity-0 transform translate-y-8"
            data-scroll-fade
          >
            <div className="glassmorphism rounded-2xl p-8">
              <h3 className="font-space text-2xl font-bold mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email Us</h4>
                    <a
                      href="mailto:hello@spacegradetech.com"
                      className="text-space-gray hover:text-white transition-colors"
                    >
                      siddarthjb@spacegrade.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <p className="text-space-gray">
                      Chennai, TN
                      <br />
                      India
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Business Hours</h4>
                    <p className="text-space-gray">
                      Monday - Friday: 9am - 6pm PST
                      <br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div> */}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-800">
                <h4 className="font-bold mb-4">Connect with Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center transition-transform hover:scale-110"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center transition-transform hover:scale-110"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center transition-transform hover:scale-110"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="lg:w-1/2 order-1 lg:order-2 opacity-0 transform translate-y-8"
            data-scroll-fade
            data-delay="200"
          >
            <div className="glassmorphism rounded-2xl p-8">
              <h3 className="font-space text-2xl font-bold mb-6">
                Send a Message
              </h3>

              {/* mailto link instead of form */}
              <div className="space-y-6">
                <p className="text-space-gray">
                  Click the button below to send us an email. We'll get back to
                  you as soon as possible.
                </p>

                <a
                  href="mailto:siddarthjb@spacegrade.in?subject=Inquiry%20from%20Website"
                  className="w-full py-3 rounded-full gradient-bg font-mont font-semibold transition-transform hover:scale-105 inline-block text-center"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
