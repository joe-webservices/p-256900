
import React, { useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
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
    <section className="py-20 md:py-32 bg-gray-50" id="projects" ref={sectionRef}>
      <div className="container px-6 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 opacity-0 fade-in-element">
            Projects
          </h2>
          <div className="w-12 h-0.5 bg-black mx-auto opacity-0 fade-in-element"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border opacity-0 fade-in-element">
              <h3 className="text-2xl font-bold mb-4">Personal Portfolio</h3>
              <p className="text-gray-600 mb-6">
                Building my personal portfolio to document growth and showcase practical work. 
                Features responsive design, smooth animations, and modern web technologies.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">React</span>
                <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">TypeScript</span>
                <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">Tailwind CSS</span>
              </div>
              {/* <div className="flex gap-4">
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-black hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-black hover:underline"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </div> */}
            </div>
            
            {/* <div className="bg-white p-8 rounded-lg shadow-sm border opacity-0 fade-in-element">
              <h3 className="text-2xl font-bold mb-4">Frontend Design Contests</h3>
              <p className="text-gray-600 mb-6">
                Participating in coding challenges and front-end design contests to improve skills 
                and learn new techniques from the community.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">HTML</span>
                <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">CSS</span>
                <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">JavaScript</span>
              </div>
              <p className="text-sm text-gray-500">Ongoing • Multiple platforms</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border opacity-0 fade-in-element">
              <h3 className="text-2xl font-bold mb-4">System Automation Projects</h3>
              <p className="text-gray-600 mb-6">
                Exploring system automation projects using Python to streamline workflows 
                and automate repetitive tasks.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">Python</span>
                <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">Automation</span>
                <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">Scripting</span>
              </div>
              <p className="text-sm text-gray-500">In Development</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
