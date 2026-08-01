import React from 'react';
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    id: 1,
    period: 'Jan 2024 — Present',
    title: 'Software Engineer & System Support',
    company: 'Savenet Company Limited',
    location: 'Marsabit, Kenya · Full-time',
    description:
      'Developing and maintaining web applications using React, Node.js, and PostgreSQL. Collaborating with design teams to implement responsive UI components and integrating RESTful APIs.',
    skills: ['React', 'Node.js', 'PostgreSQL', 'RESTful API', 'Git'],
    link: null,
  },
  {
    id: 2,
    period: 'Jan 2022 — Present',
    title: 'Freelance Web Developer',
    company: 'Self-employed',
    location: 'Remote · Freelance',
    description:
      'Designing and developing custom websites and web applications for various clients. Managing projects end-to-end from concept to deployment.',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Supabase', 'Client Management'],
    link: null,
  },
  {
    id: 3,
    period: 'Feb 2025 — Mar 2025',
    title: 'AI Developer & Project Lead',
    company: 'NarrateVision',
    location: 'Personal Project',
    description:
      'Led development of NarrateVision — a platform that transforms text into engaging videos with AI-generated visuals and natural narration.',
    skills: ['Next.js', 'FFmpeg', 'OpenAI API', 'TypeScript', 'Tailwind CSS'],
    link: 'https://narratevision.vercel.app/',
  },
  {
    id: 4,
    period: 'Jun 2022 — Dec 2022',
    title: 'Web Developer Intern',
    company: 'Digital Creatives',
    location: 'Remote · Internship',
    description:
      "Assisted in developing client websites using HTML, CSS, JavaScript, and PHP. Contributed to the company's internal CMS and implemented responsive designs.",
    skills: ['HTML/CSS', 'JavaScript', 'PHP', 'WordPress', 'Responsive Design'],
    link: null,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-container">
      <p className="section-heading">Experience</p>
      <h2 className="section-title">Work History</h2>

      <div className="mt-10 space-y-10">
        {experiences.map((exp) => (
          <div key={exp.id} className="grid sm:grid-cols-4 gap-2 sm:gap-8 group">
            {/* Period */}
            <div className="sm:col-span-1 pt-0.5">
              <span className="mono text-xs text-muted-foreground whitespace-nowrap">{exp.period}</span>
            </div>

            {/* Content */}
            <div className="sm:col-span-3 pb-10 border-b border-border last:border-0">
              <div className="flex items-start justify-between gap-4 mb-1">
                <div>
                  <h3 className="font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-sm text-primary mt-0.5">{exp.company}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{exp.location}</p>
                </div>
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0 mt-1"
                    aria-label={`Visit ${exp.company}`}
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mt-3 mb-4">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span key={skill} className="tech-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
