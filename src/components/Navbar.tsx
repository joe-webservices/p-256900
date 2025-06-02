
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled 
          ? "bg-black/80 backdrop-blur-md" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-6 md:px-8">
        <a 
          href="#" 
          className="text-2xl font-bold text-white"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          aria-label="Lenin Anto"
        >
          LA
        </a>

        <nav className="hidden md:flex space-x-8">
          <a 
            href="#" 
            className="text-white hover:text-gray-300 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
          >
            Home
          </a>
          <a href="#about" className="text-white hover:text-gray-300 transition-colors duration-300">About</a>
          <a href="#skills" className="text-white hover:text-gray-300 transition-colors duration-300">Skills</a>
          <a href="#experience" className="text-white hover:text-gray-300 transition-colors duration-300">Experience</a>
          <a href="#projects" className="text-white hover:text-gray-300 transition-colors duration-300">Projects</a>
          <a href="#contact" className="text-white hover:text-gray-300 transition-colors duration-300">Contact</a>
        </nav>

        <button 
          className="md:hidden text-white p-2" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={cn(
        "fixed inset-0 z-40 bg-black flex flex-col justify-center items-center md:hidden transition-all duration-300",
        isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      )}>
        <nav className="flex flex-col space-y-8 text-center">
          <a 
            href="#" 
            className="text-2xl text-white hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-2xl text-white hover:text-gray-300 transition-colors"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            About
          </a>
          <a 
            href="#skills" 
            className="text-2xl text-white hover:text-gray-300 transition-colors"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Skills
          </a>
          <a 
            href="#experience" 
            className="text-2xl text-white hover:text-gray-300 transition-colors"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Experience
          </a>
          <a 
            href="#projects" 
            className="text-2xl text-white hover:text-gray-300 transition-colors"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="text-2xl text-white hover:text-gray-300 transition-colors"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
