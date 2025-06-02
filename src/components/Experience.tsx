
import React, { useEffect, useRef } from "react";

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
    <section className="py-20 md:py-32 bg-white" id="experience" ref={sectionRef}>
      <div className="container px-6 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 opacity-0 fade-in-element">
            Experience
          </h2>
          <div className="w-12 h-0.5 bg-black mx-auto opacity-0 fade-in-element"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="opacity-0 fade-in-element">
            <div className="border-l-2 border-black pl-8 relative">
              <div className="absolute w-4 h-4 bg-black rounded-full -left-2 top-0"></div>
              <div className="mb-4">
                <h3 className="text-2xl font-bold">Frontend Web Developer</h3>
                <p className="text-lg text-gray-600">Joe Web Services • Freelance</p>
                <p className="text-sm text-gray-500">May 2025 – Present | Remote</p>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Built responsive web interfaces using HTML, CSS, JavaScript</li>
                <li>• Developed dynamic frontend components with React</li>
                <li>• Collaborated across teams to ensure client satisfaction and timely delivery</li>
              </ul>
            </div>
          </div>
          
          <div className="opacity-0 fade-in-element">
            <div className="border-l-2 border-gray-300 pl-8 relative">
              <div className="absolute w-4 h-4 bg-gray-300 rounded-full -left-2 top-0"></div>
              <div className="mb-4">
                <h3 className="text-2xl font-bold">Education</h3>
                <p className="text-lg text-gray-600">B.Sc. Computer Science</p>
                <p className="text-sm text-gray-500">2023 – 2026</p>
              </div>
              <div className="text-gray-700">
                <p>Sacred Heart College (Autonomous), Thirupattur</p>
                <p className="mt-2"><strong>Activities:</strong> Member of AICUF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
