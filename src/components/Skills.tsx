
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
          <h2 className="text-4xl md:text-6xl font-light mb-8 opacity-0 fade-in-element tracking-tight">
            Skills
          </h2>
          <div className="w-12 h-0.5 bg-black mx-auto opacity-0 fade-in-element"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="opacity-0 fade-in-element">
              <h3 className="text-2xl font-medium mb-8 tracking-tight">Frontend Development</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-2">JavaScript</h4>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Proficient in modern ES6+ syntax, DOM manipulation, async/await, and API integration. Experience building interactive web applications and handling complex data structures.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">React</h4>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Strong understanding of component lifecycle, hooks, state management, and creating reusable components. Experience with React Router and modern development patterns.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">HTML & CSS</h4>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Expert in semantic HTML5, responsive design, Flexbox, Grid, and CSS animations. Skilled in creating pixel-perfect, accessible, and mobile-first interfaces.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="opacity-0 fade-in-element">
              <h3 className="text-2xl font-medium mb-8 tracking-tight">Backend & Tools</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-2">Python</h4>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Comfortable with Python fundamentals, data structures, and basic automation scripts. Experience with problem-solving and algorithmic thinking.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Version Control</h4>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Proficient with Git and GitHub for version control, branching strategies, pull requests, and collaborative development workflows.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Development Environment</h4>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Experienced with VS Code, debugging tools, browser developer tools, and productivity extensions for efficient development.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 opacity-0 fade-in-element">
            <h3 className="text-2xl font-medium mb-8 text-center tracking-tight">Professional Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="font-medium mb-3">Problem Solving</h4>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Analytical approach to debugging, breaking down complex problems, and finding efficient solutions through research and experimentation.
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-medium mb-3">Team Collaboration</h4>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Experience working in cross-functional teams, clear communication, and contributing to shared goals while learning from colleagues.
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-medium mb-3">Continuous Learning</h4>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Committed to staying updated with industry trends, taking online courses, and participating in coding communities and hackathons.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 opacity-0 fade-in-element">
            <h3 className="text-2xl font-medium mb-8 text-center tracking-tight">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-medium mb-2">Career Essentials in GitHub</h4>
                <p className="text-gray-600 text-sm mb-2 font-light">GitHub • 2025</p>
                <p className="text-gray-600 text-sm font-light">
                  Comprehensive understanding of version control, repository management, and collaborative development workflows.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-medium mb-2">Web Design and Development</h4>
                <p className="text-gray-600 text-sm mb-2 font-light">LinkedIn • 2025</p>
                <p className="text-gray-600 text-sm font-light">
                  Fundamentals of web design principles, user experience, and modern development practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
