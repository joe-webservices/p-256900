
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
    <section className="py-12 sm:py-16 md:py-20 relative bg-white" id="about" ref={sectionRef}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div className="pulse-chip mb-3 sm:mb-4 opacity-0 fade-in-element">
              <span>🌟 About Me</span>
            </div>
            <h2 className="section-title mb-4 sm:mb-6 opacity-0 fade-in-element">
              Passionate About Building <br className="hidden sm:block" />
              <span className="text-pulse-500">Digital Solutions</span>
            </h2>
            <div className="space-y-4 text-gray-600 opacity-0 fade-in-element">
              <p>
                I'm an aspiring computer science professional deeply passionate about using technology to solve real-world problems. My journey is driven by curiosity, continuous learning, and the desire to build practical and impactful solutions.
              </p>
              <p>
                Whether I'm diving into frontend frameworks, experimenting with automation, or contributing to a team project, I bring a creative mindset and a solid foundation in logical thinking.
              </p>
              <p>
                I actively participate in hackathons, take online courses, and volunteer through community platforms like AICUF — because I believe growth begins outside the comfort zone.
              </p>
            </div>
          </div>
          
          <div className="opacity-0 fade-in-element">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">💡 What I Value:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">🤝 Team Collaboration</h4>
                <p className="text-sm text-gray-600">Working together to achieve common goals and learning from each other.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">✨ Clean Code</h4>
                <p className="text-sm text-gray-600">Writing efficient, maintainable, and readable code that stands the test of time.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">🚀 Learning by Doing</h4>
                <p className="text-sm text-gray-600">Hands-on experience and practical application of knowledge.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">💡 Innovation</h4>
                <p className="text-sm text-gray-600">Experimenting with new technologies and creative problem-solving.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
