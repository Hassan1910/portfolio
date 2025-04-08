
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const { toast } = useToast();

  // Check for dark mode preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.theme === 'dark' || 
          (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setTheme('dark');
        document.documentElement.classList.add('dark');
      } else {
        setTheme('light');
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      toast({
        title: "Dark mode enabled",
        description: "Your eyes will thank you at night.",
        duration: 2000,
      });
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      toast({
        title: "Light mode enabled",
        description: "Back to the bright side!",
        duration: 2000,
      });
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/70 backdrop-blur-md z-50 py-4 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold gradient-text">Hassan</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-primary transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-foreground hover:text-primary transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
              Contact
            </button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/80 text-primary-foreground"
            >
              Hire Me
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle menu"
              onClick={toggleMenu}
              className="rounded-full"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b animate-fade-in">
          <div className="py-4 space-y-4 px-4">
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-primary hover:bg-primary/80 text-primary-foreground"
            >
              Hire Me
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
