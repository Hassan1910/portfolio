import React from 'react';

const skillGroups = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'PHP', 'Python', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['React', 'Next.js', 'React Native', 'Tailwind CSS', 'Bootstrap', 'jQuery'],
  },
  {
    category: 'Backend & Databases',
    skills: ['Node.js', 'MySQL', 'PostgreSQL', 'MongoDB', 'Supabase', 'RESTful APIs'],
  },
  {
    category: 'AI & Tools',
    skills: ['OpenAI API', 'Hugging Face', 'FFmpeg', 'LangChain', 'TensorFlow', 'Text-to-Speech'],
  },
  {
    category: 'DevOps & Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'Netlify', 'Vercel'],
  },
  {
    category: 'Currently Learning',
    skills: ['Python for Cybersecurity', 'Ethical Hacking', 'Large Language Models', 'Cloud Architecture', 'Web3'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-container">
      <p className="section-heading">Skills</p>
      <h2 className="section-title">Technical Stack</h2>
      <p className="text-muted-foreground text-sm mb-12 max-w-lg">
        Technologies and tools I use to build robust, scalable applications.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="text-xs font-mono font-medium text-primary uppercase tracking-widest mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="tech-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
