// Skills Section Component - Updated
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    category: "Languages",
    items: [
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ]
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "jQuery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
    ]
  },
  {
    category: "AI & Machine Learning",
    items: [
      { name: "OpenAI", icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/openai.svg" },
      { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    ]
  },
  {
    category: "Databases & Storage",
    items: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Supabase", icon: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Netlify", icon: "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png" },
    ]
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">My Skills</h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        I work with a variety of technologies to build robust and scalable applications. Here are the key tools in my tech stack.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((category) => (
          <Card key={category.category} className="animate-fade-in">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {category.items.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center justify-center p-4 rounded-md hover:bg-muted transition-colors">
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-12 h-12 mb-3 object-contain dark:invert-[.85] dark:brightness-200" 
                    />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold mb-4">Currently Learning</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="tech-badge px-4 py-2 flex items-center space-x-2">
            <span>Python for Cybersecurity</span>
          </div>
          <div className="tech-badge px-4 py-2 flex items-center space-x-2">
            <span>Ethical Hacking</span>
          </div>
          <div className="tech-badge px-4 py-2 flex items-center space-x-2">
            <span>Advanced React Patterns</span>
          </div>
          <div className="tech-badge px-4 py-2 flex items-center space-x-2">
            <span>Large Language Models</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
