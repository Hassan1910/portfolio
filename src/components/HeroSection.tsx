
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-16 pb-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="max-w-5xl mx-auto w-full animate-fade-in">
        <div className="flex flex-col items-center text-center space-y-6">
          <p className="text-lg md:text-xl text-muted-foreground">
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text tracking-tight">
            Hassan
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mt-2">
            Junior Software Engineer
          </h2>
          <p className="text-lg max-w-2xl text-muted-foreground">
            I build responsive full-stack web applications, SaaS platforms, and intelligent business solutions
            with a focus on modern tech stacks and exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button 
              onClick={scrollToContact} 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Hire Me
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View My Work
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            aria-label="Scroll down"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDownCircle size={36} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
