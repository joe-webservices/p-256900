
import React, { useEffect, useRef } from "react";
import { Linkedin, Instagram, Twitter, Github, Mail, MapPin } from "lucide-react";

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
    <section className="py-20 md:py-32 bg-black text-white" id="contact" ref={sectionRef}>
      <div className="container px-6 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 opacity-0 fade-in-element">
            Contact
          </h2>
          <div className="w-12 h-0.5 bg-white mx-auto opacity-0 fade-in-element"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-gray-300 mb-12 opacity-0 fade-in-element">
            I'm always open to discussing new opportunities, collaborations, or just having a tech chat.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="opacity-0 fade-in-element">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400 mb-4">Connect with me for professional networking</p>
              <a 
                href="https://linkedin.com/in/lenin-anto-34b85134b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                linkedin.com/in/lenin-anto-34b85134b
              </a>
            </div>
            
            <div className="opacity-0 fade-in-element">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-400 mb-4">Based in Tamil Nadu, India</p>
              <p className="text-white">Kallakurichi, Tamil Nadu, India</p>
            </div>
          </div>
          
          <div className="opacity-0 fade-in-element">
            <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>
            <div className="flex justify-center space-x-6 mb-12">
              <a 
                href="https://linkedin.com/in/lenin-anto-34b85134b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-7 h-7" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-7 h-7" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <Twitter className="w-7 h-7" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <Github className="w-7 h-7" />
              </a>
            </div>
            
            <a 
              href="https://linkedin.com/in/lenin-anto-34b85134b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
