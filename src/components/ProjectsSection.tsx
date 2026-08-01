import React from 'react';
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    num: '01',
    title: 'IBSE — Estate & Property Operations',
    description:
      'Mobile property and estate operations app featuring multi-tenant management, maintenance requests, Clerk authentication, and Supabase backend integration.',
    tech: ['Expo', 'React Native', 'TypeScript', 'Clerk Auth', 'Supabase'],
    repo: 'https://github.com/Hassan1910/IBSE',
    demo: null,
    year: '2026',
  },
  {
    id: 2,
    num: '02',
    title: 'IBSA-HOMES — Property Management Platform',
    description:
      'Multi-role property management portal for admins, landlords, agents, and tenants with automated billing and Paystack payment gateway integration.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Paystack API'],
    repo: 'https://github.com/Hassan1910/IBSA-HOMES',
    demo: null,
    year: '2026',
  },
  {
    id: 3,
    num: '03',
    title: 'Community Collaboration Platforms',
    description:
      'Developer showcase and community platform designed for project discovery, open-source contribution tracking, and developer networking.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    repo: 'https://github.com/Hassan1910/Community-Collaboration-Platforms',
    demo: null,
    year: '2026',
  },
  {
    id: 4,
    num: '04',
    title: 'SmartTicket — Event Ticketing & QR Validation',
    description:
      'Event ticketing system featuring digital pass generation, real-time QR code ticket validation, organizer dashboard, and Paystack integration.',
    tech: ['Next.js', 'TypeScript', 'QR Code API', 'Paystack'],
    repo: 'https://github.com/Hassan1910/SmartTicket',
    demo: null,
    year: '2025',
  },
  {
    id: 5,
    num: '05',
    title: 'KINORU — Food Ordering System',
    description:
      'Cross-platform food ordering application with restaurant menus, active cart management, real-time order tracking, and Supabase backend.',
    tech: ['Expo', 'React Native', 'TypeScript', 'Supabase', 'PostgreSQL'],
    repo: 'https://github.com/Hassan1910/KINORU',
    demo: null,
    year: '2025',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container">
      <p className="section-heading">Projects</p>
      <h2 className="section-title">Featured Work</h2>
      <p className="text-muted-foreground text-sm mb-12 max-w-lg">
        A selection of projects I've built — each solving a real problem using modern web technologies.
      </p>

      <div className="space-y-0 divide-y divide-border">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group py-8 grid sm:grid-cols-12 gap-4 sm:gap-8 hover:bg-muted/30 transition-colors -mx-4 px-4 rounded-lg"
          >
            {/* Number */}
            <div className="sm:col-span-1 flex items-start">
              <span className="mono text-xs text-muted-foreground/50 pt-1">{project.num}</span>
            </div>

            {/* Content */}
            <div className="sm:col-span-8">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>

            {/* Links + Year */}
            <div className="sm:col-span-3 flex sm:flex-col sm:items-end justify-between sm:justify-start gap-3">
              <span className="mono text-xs text-muted-foreground">{project.year}</span>
              <div className="flex items-center gap-3">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub repository"
                >
                  <Github size={16} />
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Live demo"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View more */}
      <div className="mt-10">
        <a
          href="https://github.com/Hassan1910"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost inline-flex"
          id="projects-github-link"
        >
          View all on GitHub
          <ExternalLink size={14} />
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
