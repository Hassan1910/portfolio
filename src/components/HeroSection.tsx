import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDownCircle, Github, Linkedin, Mail, FileText } from "lucide-react";

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
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-primary/3 rounded-full blur-[100px] transform translate-x-1/4 -translate-y-1/4 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-accent/3 rounded-full blur-[100px] transform -translate-x-1/4 translate-y-1/4 animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 bg-secondary/3 rounded-full blur-[100px] transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-700"></div>
      </div>
      
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">
                Hassan
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mt-2">
              Junior Software Engineer
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-muted-foreground leading-relaxed">
              Passionate about building innovative web solutions with modern technologies.
              Specializing in full-stack development, AI integration, and creating exceptional user experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 my-8">
            <a
              href="https://github.com/hassan1910"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/hassan-adan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:adanhassan1910@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email Me"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="/images/CV_Hassan_Adan.docx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Download CV"
            >
              <FileText className="w-6 h-6" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button 
              onClick={scrollToContact} 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-8"
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
              className="font-medium px-8"
            >
              View My Work
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            aria-label="Scroll down"
            className="text-muted-foreground hover:text-primary transition-colors animate-bounce"
          >
            <ArrowDownCircle size={36} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
