import React, { useState } from 'react';
import {
  Card, CardContent, CardDescription,
  CardFooter, CardHeader, CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Star, Calendar, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "NarrateVision - AI Video Generator",
    description: "An innovative platform that transforms text into engaging videos with AI-generated visuals and natural narration. Users can create stunning content in minutes with customizable effects and voice options.",
    image: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    techStack: ["Next.js", "React", "Tailwind CSS", "FFmpeg", "AI APIs", "TypeScript"],
    repoLink: "https://github.com/Hassan1910/NarrateVisionAI",
    demoLink: "https://narratevision.vercel.app/",
    category: "AI/Web",
    featured: true,
    year: "2025",
    highlights: ["AI-Generated Visuals", "Natural Text-to-Speech", "Customizable Effects"]
  },
  {
    id: 2,
    title: "KINORU - Food Ordering System",
    description: "A cross-platform food ordering application built with React Native. Features include restaurant menus, real-time order tracking, user authentication, and a responsive UI. The platform uses Supabase for backend services and database management.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    techStack: ["React Native", "TypeScript", "Supabase", "JavaScript", "PostgreSQL", "Tailwind CSS"],
    repoLink: "https://github.com/Hassan1910/KINORU",
    demoLink: "#",
    category: "Mobile/Web",
    featured: true,
    year: "2024",
    highlights: ["Real-time order tracking", "User authentication", "Restaurant management"]
  },
  {
    id: 3,
    title: "Gym Management System",
    description: "A comprehensive gym management system with features for member management, workout tracking, and scheduling. Includes an admin dashboard for managing memberships, classes, and trainers.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    techStack: ["JavaScript", "PHP", "CSS", "SCSS", "MySQL", "Bootstrap"],
    repoLink: "https://github.com/Hassan1910/Gym-System",
    demoLink: "#",
    category: "Web",
    featured: true,
    year: "2023",
    highlights: ["Member management", "Workout tracking", "Class scheduling"]
  },
  {
    id: 4,
    title: "Terral - Custom Product E-commerce",
    description: "An e-commerce platform specializing in product customization. Features include product browsing, real-time customization tools, secure checkout, and order tracking. Users can add logos, text, or designs to products before ordering.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    techStack: ["PHP", "JavaScript", "MySQL", "CSS", "Bootstrap", "jQuery"],
    repoLink: "https://github.com/Hassan1910/Terral",
    demoLink: "#",
    category: "Web",
    featured: true,
    year: "2024",
    highlights: ["Product customization", "Secure checkout", "Order tracking"]
  }
];

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  const filteredProjects = filter
    ? projects.filter(project => project.category === filter)
    : projects;

  return (
    <section id="projects" className="section-container">
      <div className="flex flex-col items-center mb-6">
        <Badge variant="outline" className="mb-3 px-3 py-1 border-primary/20 text-primary">
          <Code size={14} className="mr-1" /> My Work
        </Badge>
        <h2 className="section-title">Featured Projects</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mt-4">
          Here are some of my recent projects. Each one was built to solve a specific problem and showcase different skills.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex justify-center gap-3 mb-8">
        <Button
          variant={filter === null ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter(null)}
          className="rounded-full"
        >
          All
        </Button>
        <Button
          variant={filter === "AI/Web" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("AI/Web")}
          className="rounded-full"
        >
          AI/Web
        </Button>
        <Button
          variant={filter === "Mobile/Web" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("Mobile/Web")}
          className="rounded-full"
        >
          Mobile/Web
        </Button>
        <Button
          variant={filter === "Web" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("Web")}
          className="rounded-full"
        >
          Web
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            className="card-3d overflow-hidden border bg-card h-full flex flex-col"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative aspect-video overflow-hidden">
              {/* Overlay on hover */}
              <div className={`absolute inset-0 bg-primary/70 flex items-center justify-center transition-opacity duration-300 z-10 ${
                hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="text-white text-center p-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent border-white text-white hover:bg-white/20 mb-3"
                    asChild
                  >
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <Github className="h-4 w-4" /> View Code
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white text-primary hover:bg-white/90"
                    asChild
                  >
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3 z-10">
                <Badge className="bg-background/80 backdrop-blur-sm text-foreground hover:bg-background/90">
                  {project.category}
                </Badge>
              </div>

              {/* Year Badge */}
              <div className="absolute top-3 right-3 z-10">
                <div className="flex items-center gap-1 text-xs bg-background/80 backdrop-blur-sm text-foreground px-2 py-1 rounded-md">
                  <Calendar size={12} />
                  <span>{project.year}</span>
                </div>
              </div>

              <img
                src={project.image}
                alt={project.title}
                className={`object-cover w-full h-full transition-transform duration-500 ${
                  hoveredProject === project.id ? 'scale-110 blur-sm' : 'scale-100'
                }`}
              />
            </div>

            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <Star className={`h-5 w-5 ${project.featured ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'}`} />
              </div>
              <CardDescription className="line-clamp-3">{project.description}</CardDescription>
            </CardHeader>

            <CardContent className="flex-grow pb-2">
              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2 text-muted-foreground">Key Features:</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <ArrowRight className="h-3 w-3 mr-2 mt-1 text-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-sm font-medium mb-2 text-muted-foreground">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex justify-between pt-2">
              <Button variant="ghost" size="sm" asChild className="text-primary">
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  <Github className="h-4 w-4" /> Repository
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild className="border-primary/20 hover:border-primary/50">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  <ExternalLink className="h-4 w-4" /> Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* View More Projects Button */}
      <div className="flex justify-center mt-8">
        <Button variant="outline" className="border-primary/20 hover:border-primary/50">
          <a href="https://github.com/Hassan1910" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            View More on GitHub <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ProjectsSection;
