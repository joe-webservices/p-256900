
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Linkedin, Instagram, Twitter, Github } from "lucide-react";
import LottieAnimation from "./LottieAnimation";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [lottieData, setLottieData] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    fetch('/loop-header.lottie')
      .then(response => response.json())
      .then(data => setLottieData(data))
      .catch(error => console.error("Error loading Lottie animation:", error));
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
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-8 opacity-0 animate-fade-in" 
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            <span>Available for freelance</span>
          </div>
          
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 opacity-0 animate-fade-in" 
            style={{ animationDelay: "0.3s" }}
          >
            Lenin Anto
          </h1>
          
          <h2 
            className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 mb-8 opacity-0 animate-fade-in" 
            style={{ animationDelay: "0.5s" }}
          >
            Web Developer
          </h2>
          
          <p 
            style={{ animationDelay: "0.7s" }} 
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in"
          >
            Exploring JavaScript, Python & Web Technologies<br />
            <span className="text-base text-gray-500">📍 Kallakurichi, Tamil Nadu, India</span>
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 opacity-0 animate-fade-in" 
            style={{ animationDelay: "0.9s" }}
          >
            <a 
              href="#contact" 
              className="flex items-center justify-center group bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#projects" 
              className="flex items-center justify-center border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300"
            >
              View Projects
            </a>
          </div>

          <div 
            className="flex justify-center space-x-6 opacity-0 animate-fade-in" 
            style={{ animationDelay: "1.1s" }}
          >
            <a 
              href="https://linkedin.com/in/lenin-anto-34b85134b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
