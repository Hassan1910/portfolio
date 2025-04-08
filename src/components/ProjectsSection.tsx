
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
    title: "Restaurant POS & Food Ordering System",
    description: "A comprehensive SaaS solution for restaurants to manage orders, inventory, and provide online ordering for customers. Includes dashboard, analytics, and multi-platform support.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    techStack: ["PHP", "MySQL", "JavaScript", "Tailwind CSS", "Supabase"],
    liveLink: "#",
    repoLink: "#"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A modern e-commerce platform with product catalog, shopping cart, payment integration, and order management. Supports multiple payment gateways and shipping options.",
    image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    techStack: ["PHP", "JavaScript", "MySQL", "Tailwind CSS"],
    liveLink: "#",
    repoLink: "#"
  },
  {
    id: 3,
    title: "Personal Finance Tracker",
    description: "A web application for tracking personal finances, including expense categorization, budget planning, and visual reports. Features include data visualization and goal setting.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2426&q=80",
    techStack: ["JavaScript", "Supabase", "Tailwind CSS"],
    liveLink: "#",
    repoLink: "#"
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-muted/50 dark:bg-muted/10 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Here are some of my recent projects. Each one was built to solve a specific problem and showcase different skills.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.id} className="project-card overflow-hidden border bg-card h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
