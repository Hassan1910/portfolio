import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Cpu, Code, Database, Server, Wrench, Brain, Shield, BookOpen } from "lucide-react";

const skills = [
  {
    category: "Languages",
    icon: <Code className="h-5 w-5" />,
    color: "from-blue-500 to-cyan-500",
    items: [
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg", level: 85 },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 90 },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: 75 },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 95 },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 90 },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", level: 80 },
    ]
  },
  {
    category: "Frameworks",
    icon: <Server className="h-5 w-5" />,
    color: "from-purple-500 to-pink-500",
    items: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 90 },
      { name: "Next.js", icon: "https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png", level: 85 },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", level: 95 },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", level: 90 },
      { name: "jQuery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg", level: 85 },
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 80 },
    ]
  },
  {
    category: "AI & ML",
    icon: <Brain className="h-5 w-5" />,
    color: "from-green-500 to-emerald-500",
    items: [
      { name: "OpenAI", icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/openai.svg", level: 85 },
      { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", level: 75 },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", level: 65 },
      { name: "LangChain", icon: "https://cdn.worldvectorlogo.com/logos/langchain-1.svg", level: 70 },
      { name: "FFmpeg", icon: "https://cdn.worldvectorlogo.com/logos/ffmpeg-1.svg", level: 80 },
      { name: "Text-to-Speech", icon: "https://cdn-icons-png.flaticon.com/512/6295/6295417.png", level: 85 },
    ]
  },
  {
    category: "Databases",
    icon: <Database className="h-5 w-5" />,
    color: "from-amber-500 to-orange-500",
    items: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: 90 },
      { name: "Supabase", icon: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png", level: 85 },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", level: 80 },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 75 },
    ]
  },
  {
    category: "Tools",
    icon: <Wrench className="h-5 w-5" />,
    color: "from-red-500 to-rose-500",
    items: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 90 },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", level: 95 },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", level: 90 },
      { name: "Netlify", icon: "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png", level: 85 },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", level: 70 },
    ]
  },
];

const learningSkills = [
  { name: "Python for Cybersecurity", icon: <Shield className="h-4 w-4" />, color: "bg-blue-500" },
  { name: "Ethical Hacking", icon: <Shield className="h-4 w-4" />, color: "bg-purple-500" },
  { name: "Advanced React Patterns", icon: <Code className="h-4 w-4" />, color: "bg-pink-500" },
  { name: "Large Language Models", icon: <Brain className="h-4 w-4" />, color: "bg-green-500" },
  { name: "Cloud Architecture", icon: <Server className="h-4 w-4" />, color: "bg-amber-500" },
  { name: "Web3 Development", icon: <Cpu className="h-4 w-4" />, color: "bg-cyan-500" },
];

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section id="skills" className="section-container relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-72 h-72 bg-secondary/5 rounded-full blur-[100px]"></div>

      <div className="flex flex-col items-center mb-10">
        <Badge variant="outline" className="mb-4 px-3 py-1 border-primary/20 text-primary">
          <Cpu size={14} className="mr-1" /> My Expertise
        </Badge>
        <h2 className="section-title">Technical Skills</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mt-6">
          I work with a variety of technologies to build robust and scalable applications. Here are the key tools in my tech stack.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-1">
            <TabsTrigger value="all" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
              All
            </TabsTrigger>
            <TabsTrigger value="Languages" className="data-[state=active]:bg-blue-500/10 data-[state=active]:text-blue-500">
              <Code className="h-4 w-4 mr-1 md:mr-2" />
              <span className="hidden md:inline">Languages</span>
            </TabsTrigger>
            <TabsTrigger value="Frameworks" className="data-[state=active]:bg-purple-500/10 data-[state=active]:text-purple-500">
              <Server className="h-4 w-4 mr-1 md:mr-2" />
              <span className="hidden md:inline">Frameworks</span>
            </TabsTrigger>
            <TabsTrigger value="AI & ML" className="data-[state=active]:bg-green-500/10 data-[state=active]:text-green-500">
              <Brain className="h-4 w-4 mr-1 md:mr-2" />
              <span className="hidden md:inline">AI & ML</span>
            </TabsTrigger>
            <TabsTrigger value="Databases" className="data-[state=active]:bg-amber-500/10 data-[state=active]:text-amber-500">
              <Database className="h-4 w-4 mr-1 md:mr-2" />
              <span className="hidden md:inline">Databases</span>
            </TabsTrigger>
            <TabsTrigger value="Tools" className="data-[state=active]:bg-red-500/10 data-[state=active]:text-red-500">
              <Wrench className="h-4 w-4 mr-1 md:mr-2" />
              <span className="hidden md:inline">Tools</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((category) => (
              <SkillCard key={category.category} category={category} />
            ))}
          </div>
        </TabsContent>

        {skills.map((category) => (
          <TabsContent key={category.category} value={category.category} className="mt-0">
            <div className="max-w-3xl mx-auto">
              <SkillCard category={category} expanded />
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-12 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <BookOpen className="h-5 w-5 text-primary" />
          <h3 className="text-2xl font-semibold">Currently Learning</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {learningSkills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border"
            >
              <div className={`${skill.color} p-2 rounded-full text-white`}>
                {skill.icon}
              </div>
              <span className="font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  category: {
    category: string;
    icon: React.ReactNode;
    color: string;
    items: {
      name: string;
      icon: string;
      level: number;
    }[];
  };
  expanded?: boolean;
}

const SkillCard = ({ category, expanded = false }: SkillCardProps) => {
  return (
    <Card className={`overflow-hidden h-full ${expanded ? 'w-full' : ''}`}>
      <div className={`h-1.5 w-full bg-gradient-to-r ${category.color}`}></div>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <div className={`p-2 rounded-md bg-gradient-to-r ${category.color} text-white`}>
            {category.icon}
          </div>
          <h3 className="text-xl font-semibold">{category.category}</h3>
        </div>

        {expanded ? (
          <div className="space-y-6">
            {category.items.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-6 h-6 object-contain dark:invert-[.85] dark:brightness-200"
                    />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" indicatorClassName={`bg-gradient-to-r ${category.color}`} />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {category.items.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center justify-center p-3 rounded-md hover:bg-muted transition-colors">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10 mb-2 object-contain dark:invert-[.85] dark:brightness-200"
                />
                <span className="text-sm font-medium text-center">{skill.name}</span>
                <div className="w-full mt-2">
                  <Progress value={skill.level} className="h-1.5" indicatorClassName={`bg-gradient-to-r ${category.color}`} />
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SkillsSection;
