
import React, { useEffect, useRef } from "react";

const Skills = () => {
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
    <section className="py-20 md:py-32 bg-gray-50" id="skills" ref={sectionRef}>
      <div className="container px-6 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 opacity-0 fade-in-element">
            Skills
          </h2>
          <div className="w-12 h-0.5 bg-black mx-auto opacity-0 fade-in-element"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="opacity-0 fade-in-element">
              <h3 className="text-2xl font-bold mb-6">Languages & Frameworks</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg">JavaScript</span>
                  <div className="w-32 h-1 bg-gray-200 rounded-full">
                    <div className="w-4/5 h-1 bg-black rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg">Python</span>
                  <div className="w-32 h-1 bg-gray-200 rounded-full">
                    <div className="w-3/4 h-1 bg-black rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg">React</span>
                  <div className="w-32 h-1 bg-gray-200 rounded-full">
                    <div className="w-4/5 h-1 bg-black rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg">HTML/CSS</span>
                  <div className="w-32 h-1 bg-gray-200 rounded-full">
                    <div className="w-5/6 h-1 bg-black rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="opacity-0 fade-in-element">
              <h3 className="text-2xl font-bold mb-6">Tools & Others</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg">GitHub</span>
                  <div className="w-32 h-1 bg-gray-200 rounded-full">
                    <div className="w-4/5 h-1 bg-black rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg">VS Code</span>
                  <div className="w-32 h-1 bg-gray-200 rounded-full">
                    <div className="w-5/6 h-1 bg-black rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg">MS Office</span>
                  <div className="w-32 h-1 bg-gray-200 rounded-full">
                    <div className="w-3/4 h-1 bg-black rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 opacity-0 fade-in-element">
            <h3 className="text-2xl font-bold mb-8 text-center">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h4 className="font-semibold mb-2">Career Essentials in GitHub</h4>
                <p className="text-gray-600 text-sm mb-2">GitHub • 2025</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h4 className="font-semibold mb-2">Web Design and Development</h4>
                <p className="text-gray-600 text-sm mb-2">LinkedIn • 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
