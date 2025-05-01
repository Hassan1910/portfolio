import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Software Engineer and System Support",
    company: "Savenet Company Limited",
    location: "Kenya, Marsabit",
    type: "Full-time",
    period: "Jan 2023 - Present",
    description: "Developing and maintaining web applications using React, Node.js, and PostgreSQL. Collaborating with the design team to implement responsive UI components and integrating RESTful APIs.",
    skills: ["React", "Node.js", "PostgreSQL", "RESTful API", "Git"],
    link: "#"
  },
  {
    id: 2,
    title: "AI Developer & Project Lead",
    company: "NarrateVision",
    location: "Remote",
    type: "Project",
    period: "Aug 2023 - Dec 2023",
    description: "Led the development of NarrateVision, an innovative platform that transforms text into engaging videos with AI-generated visuals and natural narration. Implemented AI APIs for image generation and text-to-speech conversion.",
    skills: ["Next.js", "React", "FFmpeg", "AI APIs", "TypeScript", "Tailwind CSS"],
    link: "https://narratevision.vercel.app/"
  },
  {
    id: 3,
    title: "Web Developer Intern",
    company: "Digital Creatives",
    location: "Remote",
    type: "Internship",
    period: "Jun 2022 - Dec 2022",
    description: "Assisted in the development of client websites using HTML, CSS, JavaScript, and PHP. Implemented responsive designs and contributed to the company's internal CMS development.",
    skills: ["HTML/CSS", "JavaScript", "PHP", "WordPress", "Responsive Design"],
    link: "#"
  },
  {
    id: 4,
    title: "Freelance Web Developer",
    company: "Self-employed",
    location: "Remote",
    type: "Freelance",
    period: "Jan 2022 - Present",
    description: "Designing and developing custom websites and web applications for various clients. Managing projects from concept to deployment, including client communication and requirement gathering.",
    skills: ["React", "Next.js", "Tailwind CSS", "Supabase", "Client Management"],
    link: "#"
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-container relative">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 -z-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/3 right-0 -z-10 w-72 h-72 bg-accent/5 rounded-full blur-[100px]"></div>

      <div className="flex flex-col items-center mb-6">
        <Badge variant="outline" className="mb-3 px-3 py-1 border-primary/20 text-primary">
          <Briefcase size={14} className="mr-1" /> My Experience
        </Badge>
        <h2 className="section-title">Work Experience</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mt-4">
          My professional journey and the companies I've had the pleasure to work with.
        </p>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {experiences.map((experience) => (
          <Card
            key={experience.id}
            className="overflow-hidden border-primary/10 shadow-md hover:shadow-lg transition-all hover:border-primary/20"
          >
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-4">
                {/* Left side - Company & Period */}
                <div className="bg-muted/30 p-6 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-lg">{experience.company}</h4>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <MapPin className="h-3.5 w-3.5 mr-1" />
                      <span>{experience.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      <span>{experience.period}</span>
                    </div>
                  </div>

                  <Badge className="self-start mt-4 bg-primary/10 hover:bg-primary/20 text-primary border-none">
                    {experience.type}
                  </Badge>
                </div>

                {/* Right side - Role & Description */}
                <div className="p-6 md:col-span-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold">{experience.title}</h3>
                    {experience.link && (
                      <a
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>

                  <p className="my-4 text-muted-foreground">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="tech-badge"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
