
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Linkedin, Instagram, Twitter, Github } from "lucide-react";
import TypingAnimation from "./TypingAnimation";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const typingTexts = [
    "Web Developer",
    "Frontend Specialist",  
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current) return;
      
      const {
        left,
        top,
        width,
        height
      } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 2.5}deg) rotateX(${-y * 2.5}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    
    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile]);
  
  return (
    <section 
      className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden" 
      id="hero" 
      ref={containerRef}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      
      <div className="container px-6 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            {/* Profile Image - Mobile First */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-6 lg:mb-0">
              <div 
                className="relative opacity-0 animate-fade-in" 
                style={{ animationDelay: "0.3s" }}
              >
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-2 md:border-4 border-white/20 backdrop-blur-sm mx-auto">
                  <img
                    ref={imageRef}
                    src="/LeninAnto.jpg"
                    alt="Lenin Anto"
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                </div>
                <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-2xl opacity-50"></div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1 px-4 sm:px-0">
              <div 
                className="inline-flex items-center px-3 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm mb-4 sm:mb-6 opacity-0 animate-fade-in" 
                style={{ animationDelay: "0.5s" }}
              >
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                <span>Available for freelance</span>
              </div>
              
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight mb-3 sm:mb-4 md:mb-6 opacity-0 animate-fade-in tracking-tight font-ndot" 
                style={{ animationDelay: "0.7s" }}
              >
                Lenin Anto
              </h1>
              
              <div 
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-300 mb-4 sm:mb-6 md:mb-8 opacity-0 animate-fade-in min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[3rem] font-ntype" 
                style={{ animationDelay: "0.9s" }}
              >
                <TypingAnimation texts={typingTexts} />
              </div>
              
              <p 
                style={{ animationDelay: "1.1s" }} 
                className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8 md:mb-12 leading-relaxed opacity-0 animate-fade-in font-light font-ntype max-w-lg mx-auto lg:mx-0"
              >
                Exploring JavaScript, Python & Web Technologies<br />
                <span className="text-xs sm:text-sm md:text-base text-gray-500 block mt-1">📍 Kallakurichi, Tamil Nadu, India</span>
              </p>
              
              <div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center lg:justify-start items-center mb-8 sm:mb-12 md:mb-16 opacity-0 animate-fade-in" 
                style={{ animationDelay: "1.3s" }}
              >
                <a 
                  href="#contact" 
                  className="flex items-center justify-center group bg-white text-black px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 rounded-full font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-sm md:text-base font-ntype min-h-[48px] touch-manipulation"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a 
                  href="#projects" 
                  className="flex items-center justify-center border border-white/30 text-white px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-sm md:text-base font-ntype min-h-[48px] touch-manipulation"
                >
                  View Projects
                </a>
              </div>

              <div 
                className="flex justify-center lg:justify-start space-x-3 sm:space-x-4 md:space-x-6 opacity-0 animate-fade-in" 
                style={{ animationDelay: "1.5s" }}
              >
                <a 
                  href="https://linkedin.com/in/lenin-anto-34b85134b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 touch-manipulation"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </a>
                <a 
                  href="https://instagram.com/__lenin_anto__" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 touch-manipulation"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </a>
                {/* <a 
                  href="https://twitter.com/lenin_anto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 touch-manipulation"
                  aria-label="Twitter Profile"
                >
                  <Twitter className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </a> */}
                <a 
                  href="https://github.com/LeninAnto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 touch-manipulation"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
