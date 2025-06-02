
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const Experience = () => {
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
    <section className="py-12 sm:py-16 md:py-20 relative bg-white" id="experience" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>💼 Professional Experience</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            Work <br className="hidden sm:block" />
            <span className="text-pulse-500">Experience</span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 opacity-0 fade-in-element">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Frontend Web Developer</h3>
                <p className="text-pulse-500 font-medium">Joe Web Services • Freelance</p>
              </div>
              <div className="text-sm text-gray-600 mt-2 sm:mt-0">
                <span>May 2025 – Present</span>
                <br />
                <span>Remote</span>
              </div>
            </div>
            
            <div className="space-y-3 text-gray-600">
              <div className="flex items-start space-x-3">
                <span className="text-pulse-500 mt-1">•</span>
                <p>Built responsive web interfaces using HTML, CSS, JavaScript</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-pulse-500 mt-1">•</span>
                <p>Developed dynamic frontend components with React</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-pulse-500 mt-1">•</span>
                <p>Collaborated across teams to ensure client satisfaction and timely delivery</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-6 sm:p-8 opacity-0 fade-in-element">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">🎓 Education</h3>
                <p className="text-pulse-500 font-medium">B.Sc. Computer Science</p>
              </div>
              <div className="text-sm text-gray-600 mt-2 sm:mt-0">
                <span>2023 – 2026</span>
              </div>
            </div>
            
            <div className="space-y-3 text-gray-600">
              <p>Sacred Heart College (Autonomous), Thirupattur</p>
              <p><strong>Activities:</strong> Member of AICUF</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
