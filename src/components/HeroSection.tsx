import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDownCircle, Github, Linkedin, Mail, FileText, Code, Database, Server } from "lucide-react";

const HeroSection = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  // Create particles effect
  useEffect(() => {
    if (!particlesRef.current) return;

    const container = particlesRef.current;
    const particleCount = 30;

    // Clear any existing particles
    container.innerHTML = '';

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');

      // Random size between 2-6px
      const size = Math.random() * 4 + 2;

      // Random position
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;

      // Random opacity
      const opacity = Math.random() * 0.5 + 0.1;

      // Random animation delay
      const delay = Math.random() * 5;

      // Apply styles
      particle.style.position = 'absolute';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.borderRadius = '50%';
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = opacity.toString();
      particle.style.background = 'currentColor';
      particle.style.animation = `floating ${Math.random() * 3 + 3}s ease-in-out infinite`;
      particle.style.animationDelay = `${delay}s`;

      // Add to container
      container.appendChild(particle);
    }
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 sm:pt-16 pb-24 px-4 relative overflow-hidden">
      {/* Particle Background */}
      <div ref={particlesRef} className="absolute inset-0 -z-10 text-primary/20 dark:text-primary/10 overflow-hidden pointer-events-none"></div>

      {/* Gradient Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-primary/5 rounded-full blur-[120px] transform translate-x-1/4 -translate-y-1/4 animate-pulse-glow"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-accent/5 rounded-full blur-[120px] transform -translate-x-1/4 translate-y-1/4 animate-pulse-glow delay-300"></div>
        <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-[120px] transform -translate-x-1/2 -translate-y-1/2 animate-pulse-glow delay-700"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          {/* Text Content - Takes 3 columns on medium screens and up */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left space-y-8">
            <div className="space-y-6 animate-fade-in">


              {/* Mobile Profile Image - Only visible on mobile */}
              <div className="flex justify-center md:hidden mb-8 mt-4">
                <div className="relative">
                  {/* Main image container */}
                  <div className="relative w-48 h-48 rounded-xl overflow-hidden shadow-xl border-2 border-white/30">
                    {/* Bright border glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-white via-primary to-white rounded-xl opacity-70 blur-sm"></div>

                    {/* Image with brightness adjustment */}
                    <img
                      src="/images/profile pic.jpg"
                      alt="Adan Wako's Profile"
                      className="w-full h-full object-cover brightness-110 contrast-110"
                    />

                    {/* Light overlay to improve visibility in dark mode */}
                    <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary/30 animate-pulse-glow"></div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-accent/30 animate-pulse-glow delay-300"></div>
                </div>
              </div>

              <div>
                <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-3">
                  Hello, I'm
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
                  <span className="animated-gradient-text">
                    Hassan
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-medium inline-flex items-center gap-2">
                  <span>Junior Software Engineer</span>
                  <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></div>
                </h2>
              </div>

              <p className="text-lg max-w-2xl mx-auto md:mx-0 text-muted-foreground leading-relaxed">
                Passionate about building innovative web solutions with modern technologies.
                Specializing in full-stack development, AI integration, and creating exceptional user experiences.
              </p>

              {/* Tech Icons */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-full text-sm">
                  <Code size={16} className="text-primary" />
                  <span>React</span>
                </div>
                <div className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-full text-sm">
                  <Server size={16} className="text-primary" />
                  <span>Node.js</span>
                </div>
                <div className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-full text-sm">
                  <Database size={16} className="text-primary" />
                  <span>SQL/NoSQL</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 my-4">
              <a
                href="https://github.com/Hassan1910"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/hassan-adan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:adanhassan1910@gmail.com"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                aria-label="Email Me"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="/images/CV_Hassan_Adan.docx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                aria-label="Download CV"
              >
                <FileText className="w-6 h-6" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-8 btn-glow relative overflow-hidden group"
              >
                <span className="relative z-10">Hire Me</span>
                <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
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
                className="font-medium px-8 border-primary/20 hover:border-primary/50 transition-colors"
              >
                View My Work
              </Button>
            </div>
          </div>

          {/* Profile Image Element - Takes 2 columns on medium screens and up */}
          <div className="hidden md:flex md:col-span-2 justify-center items-center">
            <div className="relative w-64 h-64 perspective-1000">
              {/* Animated background ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-spin-slow"></div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-primary/10 animate-pulse-glow"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-accent/10 animate-pulse-glow delay-300"></div>

              {/* Profile image container */}
              <div className="absolute inset-2 rounded-xl bg-background overflow-hidden card-3d shadow-xl border-2 border-white/30">
                {/* Bright border glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-white via-primary to-white rounded-xl opacity-70 blur-sm"></div>

                {/* Profile image with brightness adjustment */}
                <img
                  src="/images/profile pic.jpg"
                  alt="Adan Wako's Profile"
                  className="w-full h-full object-cover brightness-110 contrast-110 transition-transform duration-700 hover:scale-110"
                />

                {/* Light overlay to improve visibility in dark mode */}
                <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
              </div>
            </div>
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
            className="text-muted-foreground hover:text-primary transition-colors animate-bounce-gentle"
          >
            <ArrowDownCircle size={36} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
