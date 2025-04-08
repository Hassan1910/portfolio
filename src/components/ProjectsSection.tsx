import React from 'react';
import { 
  Card, CardContent, CardDescription, 
  CardFooter, CardHeader, CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "KINORU - Food Ordering System",
    description: "A cross-platform food ordering application built with React Native. Features include restaurant menus, real-time order tracking, user authentication, and a responsive UI. The platform uses Supabase for backend services and database management.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    techStack: ["React Native", "TypeScript", "Supabase", "JavaScript", "PostgreSQL", "Tailwind CSS"],
    repoLink: "https://github.com/Hassan1910/KINORU",
    category: "Mobile/Web",
    featured: true
  },
  {
    id: 2,
    title: "Gym Management System",
    description: "A comprehensive gym management system with features for member management, workout tracking, and scheduling. Includes an admin dashboard for managing memberships, classes, and trainers.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    techStack: ["JavaScript", "PHP", "CSS", "SCSS", "MySQL", "Bootstrap"],
    repoLink: "https://github.com/Hassan1910/Gym-System",
    category: "Web",
    featured: true
  },
  {
    id: 3,
    title: "Terral - Custom Product E-commerce",
    description: "An e-commerce platform specializing in product customization. Features include product browsing, real-time customization tools, secure checkout, and order tracking. Users can add logos, text, or designs to products before ordering.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    techStack: ["PHP", "JavaScript", "MySQL", "CSS", "Bootstrap", "jQuery"],
    repoLink: "https://github.com/Hassan1910/Terral",
    category: "Web",
    featured: true
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Featured Projects</h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Here are some of my recent projects. Each one was built to solve a specific problem and showcase different skills.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="project-card overflow-hidden border bg-card h-full flex flex-col">
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="object-cover w-full h-full transition-transform hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline" size="sm" asChild>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  <Github className="h-4 w-4" /> View on GitHub
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
