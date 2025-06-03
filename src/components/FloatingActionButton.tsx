
import React, { useState, useEffect } from "react";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const FloatingActionButton = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const actions = [
    {
      icon: MessageCircle,
      label: "Contact",
      onClick: handleContactClick,
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: Phone,
      label: "Call",
      onClick: () => window.open("tel:+91 8072551594"),
      color: "bg-green-500 hover:bg-green-600"
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col-reverse items-end gap-3">
      {/* Action Buttons */}
      {actions.map((action, index) => (
        <button
          key={action.label}
          className={cn(
            "w-12 h-12 rounded-full text-white shadow-lg transition-all duration-300 transform flex items-center justify-center",
            action.color,
            isExpanded 
              ? "opacity-100 scale-100 translate-y-0" 
              : "opacity-0 scale-0 translate-y-4 pointer-events-none"
          )}
          style={{ 
            transitionDelay: isExpanded ? `${index * 50}ms` : '0ms'
          }}
          onClick={action.onClick}
          aria-label={action.label}
        >
          <action.icon className="w-5 h-5" />
        </button>
      ))}

      {/* Main FAB */}
      <button
        className={cn(
          "w-14 h-14 bg-black text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center",
          showScrollTop ? "opacity-100 scale-100" : "opacity-0 scale-0"
        )}
        onClick={isExpanded ? scrollToTop : () => setIsExpanded(!isExpanded)}
        onBlur={() => setTimeout(() => setIsExpanded(false), 200)}
        aria-label="Scroll to top"
      >
        <ArrowUp className={cn(
          "w-6 h-6 transition-transform duration-300",
          isExpanded ? "rotate-180" : "rotate-0"
        )} />
      </button>
    </div>
  );
};

export default FloatingActionButton;
