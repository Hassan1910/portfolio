
import React from 'react';
import { 
  Card, CardContent, CardDescription, 
  CardFooter, CardHeader, CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Files, Database, Dumbbell, FileCheck, FileText, Home } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "KINORU",
    description: "A TypeScript project with MIT License. This application leverages modern web technologies to deliver a responsive and interactive user experience.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
    techStack: ["TypeScript", "React", "Tailwind CSS"],
    liveLink: "#",
    repoLink: "https://github.com/Hassan1910/KINORU",
    icon: Code
  },
  {
    id: 2,
    title: "Synced Watch Party",
    description: "A TypeScript-based application that enables synchronized video watching with friends. Features include real-time communication and shared playback controls.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1970&q=80",
    techStack: ["TypeScript", "JavaScript", "WebSockets"],
    liveLink: "#",
    repoLink: "https://github.com/Hassan1910/synced-watch-party",
    icon: ExternalLink
  },
  {
    id: 3,
    title: "Gym System",
    description: "A JavaScript-based gym management system for tracking workouts, managing memberships, and scheduling sessions. Provides comprehensive fitness tracking functionality.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1970&q=80",
    techStack: ["JavaScript", "HTML", "CSS"],
    liveLink: "#",
    repoLink: "https://github.com/Hassan1910/Gym-System",
    icon: Dumbbell
  },
  {
    id: 4,
    title: "To-Do List App",
    description: "A simple yet effective to-do list application built with CSS. Features include task management, priority setting, and completion tracking.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1970&q=80",
    techStack: ["CSS", "HTML", "JavaScript"],
    liveLink: "#",
    repoLink: "https://github.com/Hassan1910/To-Do-List-App",
    icon: FileCheck
  },
  {
    id: 5,
    title: "Portfolio",
    description: "My personal portfolio website showcasing my projects, skills, and professional experience. Built with modern web technologies.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1970&q=80",
    techStack: ["TypeScript", "React", "Tailwind CSS"],
    liveLink: "#",
    repoLink: "#",
    icon: Home
  },
  {
    id: 6,
    title: "Terral",
    description: "A PHP-based web application for managing and analyzing data. Features a clean interface and robust backend functionality.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1970&q=80",
    techStack: ["PHP", "MySQL", "JavaScript"],
    liveLink: "#",
    repoLink: "#",
    icon: Database
  },
  {
    id: 7,
    title: "Driving School System",
    description: "A comprehensive system for managing driving school operations including student registrations, scheduling, and progress tracking.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1970&q=80",
    techStack: ["JavaScript", "HTML", "CSS"],
    liveLink: "#",
    repoLink: "https://github.com/Hassan1910/Driving-school-system",
    icon: Files
  },
  {
    id: 8,
    title: "Web Development",
    description: "A collection of web development mini projects using HTML, CSS, and JavaScript. Forked from keshavgbpecdelhi/Web-Development.",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&auto=format&fit=crop&w=1970&q=80",
    techStack: ["JavaScript", "HTML", "CSS"],
    liveLink: "#",
    repoLink: "https://github.com/Hassan1910/Web-Development",
    icon: FileText
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-muted/50 dark:bg-muted/10 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Here are some of my recent projects from GitHub. Each one demonstrates different skills and technologies.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <Card key={project.id} className="project-card overflow-hidden border bg-card h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <IconComponent className="h-5 w-5 text-primary" />
                    <CardTitle>{project.title}</CardTitle>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <Github className="h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
