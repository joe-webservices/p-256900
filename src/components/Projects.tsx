
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  status: string;
  technologies: string[];
  index: number;
}

const ProjectCard = ({ title, description, status, technologies, index }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "feature-card glass-card opacity-0 p-4 sm:p-6",
        "lg:hover:bg-gradient-to-br lg:hover:from-white lg:hover:to-pulse-50",
        "transition-all duration-300"
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
        <span className="px-2 py-1 bg-pulse-100 text-pulse-600 text-xs rounded-full">
          {status}
        </span>
      </div>
      <p className="text-gray-600 text-sm sm:text-base mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, techIndex) => (
          <span 
            key={techIndex}
            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-3">
        <button className="flex items-center space-x-1 text-sm text-pulse-500 hover:text-pulse-600">
          <Github size={16} />
          <span>View Code</span>
        </button>
        <button className="flex items-center space-x-1 text-sm text-pulse-500 hover:text-pulse-600">
          <ExternalLink size={16} />
          <span>Live Demo</span>
        </button>
      </div>
    </div>
  );
};

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
    <section className="py-12 sm:py-16 md:py-20 pb-0 relative bg-gray-50" id="projects" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>🌱 Ongoing Projects</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            Current <br className="hidden sm:block" />
            <span className="text-pulse-500">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            Building practical solutions and documenting my growth as a developer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <ProjectCard
            title="Personal Portfolio"
            description="Building my personal portfolio to document growth and showcase practical work with modern web technologies."
            status="In Progress"
            technologies={["React", "TypeScript", "Tailwind CSS"]}
            index={0}
          />
          <ProjectCard
            title="Coding Challenges"
            description="Participating in coding challenges and front-end design contests to improve problem-solving skills."
            status="Ongoing"
            technologies={["JavaScript", "React", "CSS"]}
            index={1}
          />
          <ProjectCard
            title="System Automation"
            description="Exploring system automation projects using Python to streamline repetitive tasks and improve efficiency."
            status="Exploring"
            technologies={["Python", "Automation", "Scripts"]}
            index={2}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
