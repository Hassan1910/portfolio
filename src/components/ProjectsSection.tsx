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
    title: "Portfolio",
    description: "A modern and responsive personal portfolio website built with TypeScript and Next.js. Features dark mode, smooth animations, and a clean UI design. Showcases my projects and skills in web development.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    techStack: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Shadcn/ui"],
    liveLink: "https://hassan-portfolio.vercel.app/",
    repoLink: "https://github.com/yourusername/portfolio",
    category: "Web",
    featured: true
  },
  {
    id: 2,
    title: "Terral",
    description: "An e-commerce platform that allows users to customize products before adding them to cart, providing a personalized shopping experience with real-time product customization.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1770&auto=format&fit=crop",
    techStack: ["PHP", "MySQL", "JavaScript", "CSS"],
    liveLink: "#",
    repoLink: "#",
    category: "Web",
    featured: true
  },
  {
    id: 3,
    title: "KINORU",
    description: "A cross-platform mobile and web application built with React Native, featuring a food ordering system with seamless user experience across devices. MIT Licensed.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1780&auto=format&fit=crop",
    techStack: ["TypeScript", "React Native", "Node.js", "PostgreSQL"],
    liveLink: "#",
    repoLink: "#",
    category: "Mobile",
    featured: true
  },
  {
    id: 4,
    title: "Synced Watch Party",
    description: "A real-time synchronized video watching platform built with TypeScript, enabling users to watch content together remotely.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop",
    techStack: ["TypeScript", "WebRTC", "Socket.io", "React"],
    liveLink: "#",
    repoLink: "#",
    category: "Web",
    featured: true
  },
  {
    id: 5,
    title: "Gym System",
    description: "A comprehensive gym management system built with JavaScript, featuring member management, workout tracking, and scheduling capabilities.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1770&auto=format&fit=crop",
    techStack: ["JavaScript", "Node.js", "Express", "MongoDB"],
    liveLink: "#",
    repoLink: "#",
    category: "System",
    featured: true
  },
  {
    id: 6,
    title: "To-Do List App",
    description: "A clean and intuitive to-do list application with a focus on user experience and responsive design using modern CSS techniques.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1772&auto=format&fit=crop",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveLink: "#",
    repoLink: "#",
    category: "Web",
    featured: false
  },
  {
    id: 7,
    title: "Hassan1910",
    description: "A personal project showcasing various web development skills and experiments with modern web technologies.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveLink: "#",
    repoLink: "#",
    category: "Web",
    featured: false
  },
  {
    id: 8,
    title: "Driving School System",
    description: "A modern driving school management system featuring student registration, lesson scheduling, progress tracking, and automated billing. Includes an intuitive dashboard for both instructors and students.",
    image: "https://images.unsplash.com/photo-1600320254374-ce2d293c324e?q=80&w=1887&auto=format&fit=crop",
    techStack: ["JavaScript", "Node.js", "Express", "MongoDB", "React"],
    liveLink: "#",
    repoLink: "#",
    category: "System",
    featured: true
  },
  {
    id: 9,
    title: "Web Development Projects",
    description: "A collection of web development mini projects showcasing various HTML, CSS, and JavaScript implementations. Forked from keshavgbpecdelhi/Web-Development.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1769&auto=format&fit=crop",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveLink: "#",
    repoLink: "#",
    category: "Web",
    featured: false
  }
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
