
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-12 sm:py-16 md:py-20 relative bg-white" id="contact" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>📫 Contact</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            Let's <br className="hidden sm:block" />
            <span className="text-pulse-500">Connect</span>
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            I'm always open to discussing new opportunities, collaborations, or just having a tech chat.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-6 opacity-0 fade-in-element">
              <div className="flex items-center space-x-3 mb-4">
                <div className="rounded-full bg-pulse-50 w-10 h-10 flex items-center justify-center text-pulse-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M16 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8z"></path>
                    <path d="m9 9 5 12 1.8-5.2L21 14Z"></path>
                    <path d="M9 9h12l-5.2 1.8L14 21"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">LinkedIn</h3>
              </div>
              <p className="text-gray-600 mb-4">Connect with me on LinkedIn for professional networking and updates.</p>
              <a 
                href="https://linkedin.com/in/lenin-anto-34b85134b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pulse-500 hover:text-pulse-600 font-medium"
              >
                linkedin.com/in/lenin-anto-34b85134b
              </a>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 opacity-0 fade-in-element">
              <div className="flex items-center space-x-3 mb-4">
                <div className="rounded-full bg-pulse-50 w-10 h-10 flex items-center justify-center text-pulse-500">
                  <MapPin size={20} />
                </div>
                <h3 className="text-xl font-semibold">Location</h3>
              </div>
              <p className="text-gray-600 mb-4">Based in Tamil Nadu, India, open to remote opportunities worldwide.</p>
              <p className="text-gray-700 font-medium">Kallakurichi, Tamil Nadu, India</p>
            </div>
          </div>
          
          <div className="text-center opacity-0 fade-in-element">
            <div className="bg-gradient-to-br from-pulse-50 to-pulse-100 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Ready to Work Together?</h3>
              <p className="text-gray-600 mb-6">
                Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you.
              </p>
              <a 
                href="https://linkedin.com/in/lenin-anto-34b85134b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-pulse-500 hover:bg-pulse-600 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
              >
                <span>Get In Touch</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
