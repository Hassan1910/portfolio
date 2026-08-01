import React from 'react';
import { Github, Linkedin, Mail, FileText, ArrowDown } from "lucide-react";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://github.com/Hassan1910",
    label: "GitHub",
    icon: <Github size={18} />,
  },
  {
    href: "https://www.linkedin.com/in/hassan-adan/",
    label: "LinkedIn",
    icon: <Linkedin size={18} />,
  },
  {
    href: "mailto:adanhassan1910@gmail.com",
    label: "Email",
    icon: <Mail size={18} />,
  },
  {
    href: "https://wa.me/254757489214",
    label: "WhatsApp",
    icon: <FaWhatsapp size={18} />,
  },
  {
    href: "https://t.me/254757489214",
    label: "Telegram",
    icon: <FaTelegram size={18} />,
  },
  {
    href: "/images/CV_Hassan_Adan.docx",
    label: "Download CV",
    icon: <FileText size={18} />,
  },
];

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 w-full py-20">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">

          {/* Text Content */}
          <div className="md:col-span-3 space-y-8 animate-fade-up">
            {/* Label */}
            <p className="mono text-sm text-primary tracking-widest uppercase">
              Software Engineer
            </p>

            {/* Name */}
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
                Hassan
                <br />
                <span className="text-muted-foreground font-light">Adan</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
              Building full-stack web applications and AI-powered tools
              for real-world problems. Based in Marsabit, Kenya.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={scrollToContact}
                className="btn-primary"
                id="hero-hire-btn"
              >
                Hire Me
              </button>
              <button
                onClick={scrollToProjects}
                className="btn-ghost"
                id="hero-projects-btn"
              >
                View Projects
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 pt-2">
              {socialLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="md:col-span-2 flex justify-center md:justify-end animate-fade-in">
            <div className="relative">
              {/* Image */}
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden ring-1 ring-border">
                <img
                  src="/images/profile pic.jpg"
                  alt="Hassan Adan"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Status badge */}
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg px-4 py-2 flex items-center gap-2 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs text-muted-foreground font-medium">Available for work</span>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-20 md:mt-28">
          <button
            onClick={scrollToAbout}
            className="text-muted-foreground hover:text-primary transition-colors animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
