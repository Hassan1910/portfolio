import React from 'react';

const timeline = [
  {
    year: '2021',
    title: 'Started Coding Journey',
    desc: 'Began learning web development and built my first projects.',
  },
  {
    year: '2022',
    title: 'Gym Management System',
    desc: 'Developed a comprehensive gym management solution with PHP & MySQL.',
  },
  {
    year: '2022–2022',
    title: 'Web Developer Intern',
    desc: 'At Digital Creatives, built client sites with HTML, CSS, JS, and PHP.',
  },
  {
    year: '2024',
    title: 'Joined Savenet Company Limited',
    desc: 'Software Engineer & System Support in Marsabit, Kenya — full-stack web apps and system maintenance.',
  },
  {
    year: '2024',
    title: 'E-Commerce & Food Ordering',
    desc: 'Built Terral e-commerce and KINORU food ordering systems.',
  },
  {
    year: '2025',
    title: 'NarrateVision AI Project',
    desc: 'Created an AI-powered video generation platform using Next.js, FFmpeg, and OpenAI.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <div className="max-w-3xl">
        {/* Label + Title */}
        <p className="section-heading">About</p>
        <h2 className="section-title">Who I Am</h2>

        {/* Bio */}
        <div className="space-y-4 text-muted-foreground leading-relaxed mb-16">
          <p>
            I'm <span className="text-foreground font-medium">Hassan Adan</span>, a software engineer
            and system support specialist based in Marsabit, Kenya. At{' '}
            <span className="text-foreground font-medium">Savenet Company Limited</span>, I build
            innovative solutions that address real-world challenges in our local community.
          </p>
          <p>
            My focus is on clean, maintainable full-stack web applications — from database design
            to polished user interfaces. I'm passionate about using technology to solve problems in
            East African markets where modern digital solutions are often underserved.
          </p>
          <p>
            Outside of work, I'm expanding into{' '}
            <span className="text-foreground font-medium">AI integration</span> and video generation
            technologies, most recently with the NarrateVision project.
          </p>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-lg font-semibold mb-8">Journey</h3>
          <div className="relative pl-8 border-l border-border space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className="relative">
                {/* Dot */}
                <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-2 ring-background" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6">
                  <span className="mono text-xs text-primary mb-1 sm:mb-0 sm:w-20 flex-shrink-0 pt-0.5">
                    {item.year}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
