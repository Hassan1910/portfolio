
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun, X, Code, User, Briefcase, Cpu, Send, MessageSquare, FileText, Settings } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
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

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section
      const sections = ['about', 'experience', 'services', 'projects', 'skills', 'blog', 'contact'];
      let currentSection = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near the top of the viewport
          if (rect.top <= 200) {
            currentSection = section;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    // Create and animate theme transition overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = theme === 'light' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.3)';
    overlay.style.zIndex = '9998';
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.3s ease-in-out';
    document.body.appendChild(overlay);

    // Animate the overlay
    setTimeout(() => {
      overlay.style.opacity = '1';
    }, 0);

    // Change theme after a short delay for visual effect
    setTimeout(() => {
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

      // Fade out and remove the overlay
      overlay.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(overlay);
      }, 300);
    }, 300);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    if (id === 'home') {
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Scroll to the specified section
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'py-3 bg-background/80 backdrop-blur-md shadow-md'
        : 'py-5 bg-background/50 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2"
            >
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/30">
                <img
                  src="/images/profile pic.jpg"
                  alt="Adan Wako"
                  className="w-full h-full object-cover brightness-110 contrast-110"
                />
              </div>
              <span className="text-xl font-bold animated-gradient-text">Hassan</span>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <NavItem
              icon={<User size={16} />}
              label="About"
              isActive={activeSection === 'about'}
              onClick={() => scrollToSection('about')}
            />
            <NavItem
              icon={<Briefcase size={16} />}
              label="Experience"
              isActive={activeSection === 'experience'}
              onClick={() => scrollToSection('experience')}
            />
            <NavItem
              icon={<Settings size={16} />}
              label="Services"
              isActive={activeSection === 'services'}
              onClick={() => scrollToSection('services')}
            />
            <NavItem
              icon={<Code size={16} />}
              label="Projects"
              isActive={activeSection === 'projects'}
              onClick={() => scrollToSection('projects')}
            />
            <NavItem
              icon={<Cpu size={16} />}
              label="Skills"
              isActive={activeSection === 'skills'}
              onClick={() => scrollToSection('skills')}
            />

            <NavItem
              icon={<FileText size={16} />}
              label="Blog"
              isActive={activeSection === 'blog'}
              onClick={() => scrollToSection('blog')}
            />
            <NavItem
              icon={<Send size={16} />}
              label="Contact"
              isActive={activeSection === 'contact'}
              onClick={() => scrollToSection('contact')}
            />

            <div className="ml-4 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle theme"
                onClick={toggleTheme}
                className="rounded-full bg-muted/50 hover:bg-muted"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>

            <Button
              onClick={() => scrollToSection('contact')}
              className="ml-4 bg-primary hover:bg-primary/90 text-primary-foreground btn-glow"
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
              className="rounded-full bg-muted/50"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle menu"
              onClick={toggleMenu}
              className={`rounded-full ${isOpen ? 'bg-primary/10 text-primary' : 'bg-muted/50'}`}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-lg animate-fade-in">
          <div className="py-6 space-y-6 px-6">
            <MobileNavItem
              icon={<User size={18} />}
              label="About"
              onClick={() => scrollToSection('about')}
            />
            <MobileNavItem
              icon={<Briefcase size={18} />}
              label="Experience"
              onClick={() => scrollToSection('experience')}
            />
            <MobileNavItem
              icon={<Settings size={18} />}
              label="Services"
              onClick={() => scrollToSection('services')}
            />
            <MobileNavItem
              icon={<Code size={18} />}
              label="Projects"
              onClick={() => scrollToSection('projects')}
            />
            <MobileNavItem
              icon={<Cpu size={18} />}
              label="Skills"
              onClick={() => scrollToSection('skills')}
            />

            <MobileNavItem
              icon={<FileText size={18} />}
              label="Blog"
              onClick={() => scrollToSection('blog')}
            />
            <MobileNavItem
              icon={<Send size={18} />}
              label="Contact"
              onClick={() => scrollToSection('contact')}
            />

            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground btn-glow"
            >
              Hire Me
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

// Desktop Navigation Item Component
interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem = ({ icon, label, isActive, onClick }: NavItemProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all
        ${isActive
          ? 'bg-primary/10 text-primary'
          : 'text-foreground hover:bg-muted/50 hover:text-primary'
        }
      `}
    >
      {icon}
      {label}
    </button>
  );
};

// Mobile Navigation Item Component
interface MobileNavItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

const MobileNavItem = ({ icon, label, onClick }: MobileNavItemProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-muted/50 transition-colors"
    >
      <span className="text-primary">{icon}</span>
      <span className="font-medium">{label}</span>
    </button>
  );
};

export default Navbar;
