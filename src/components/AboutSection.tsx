
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const AboutSection = () => {
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
    <section className="py-20 md:py-32 bg-white" id="about" ref={sectionRef}>
      <div className="container px-6 md:px-8 max-w-6xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 opacity-0 fade-in-element">
              About
            </h2>
            <div className="w-12 h-0.5 bg-black mx-auto opacity-0 fade-in-element"></div>
          </div>
          
          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-gray-700">
            <p className="opacity-0 fade-in-element">
              I'm an aspiring computer science professional deeply passionate about using technology to solve real-world problems. My journey is driven by curiosity, continuous learning, and the desire to build practical and impactful solutions.
            </p>
            <p className="opacity-0 fade-in-element">
              Whether I'm diving into frontend frameworks, experimenting with automation, or contributing to a team project, I bring a creative mindset and a solid foundation in logical thinking.
            </p>
            <p className="opacity-0 fade-in-element">
              I actively participate in hackathons, take online courses, and volunteer through community platforms like AICUF — because I believe growth begins outside the comfort zone.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 opacity-0 fade-in-element">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Team Work</h3>
              <p className="text-sm text-gray-600">Collaboration & mentorship</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Clean Code</h3>
              <p className="text-sm text-gray-600">Efficient & maintainable</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Learning</h3>
              <p className="text-sm text-gray-600">By doing & experimenting</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-sm text-gray-600">Through experimentation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
