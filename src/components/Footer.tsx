
import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gradient-to-b from-background to-muted/30 pt-16 pb-8 border-t border-primary/5">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/3 rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/3 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back to Top Button */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="h-16 w-16 rounded-full bg-background border border-primary/10 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="h-6 w-6 text-primary" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/30">
                <img
                  src="/images/profile pic.jpg"
                  alt="Adan Wako"
                  className="w-full h-full object-cover brightness-110 contrast-110"
                />
              </div>
              <h3 className="text-2xl font-bold animated-gradient-text">Hassan</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Junior Software Engineer specializing in full-stack web development,
              creating innovative solutions with modern technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Hassan1910"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted/50 hover:bg-primary/10 p-2 rounded-full transition-colors group"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/hassan-adan/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted/50 hover:bg-primary/10 p-2 rounded-full transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a
                href="mailto:adanhassan1910@gmail.com"
                className="bg-muted/50 hover:bg-primary/10 p-2 rounded-full transition-colors group"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Me</a>
              </li>
              <li>
                <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
              </li>
              <li>
                <a href="#blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground">
                <span className="block">Kenya, Marsabit</span>
              </li>
              <li>
                <a href="mailto:adanhassan1910@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  adanhassan1910@gmail.com
                </a>
              </li>

            </ul>
          </div>
        </div>

        <div className="border-t border-primary/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {currentYear} Hassan. All rights reserved.
          </p>

          <div className="flex items-center text-muted-foreground text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" />
            <span>using React, Tailwind CSS, and shadcn/ui</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
