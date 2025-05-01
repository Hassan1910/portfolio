import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Layout, Smartphone, Server, Lightbulb, CheckCircle, Brain } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies and best practices.",
    icon: <Layout className="h-10 w-10" />,
    color: "from-blue-500 to-cyan-500",
    features: [
      "Responsive design for all devices",
      "Modern UI/UX implementation",
      "Performance optimization",
      "SEO-friendly structure"
    ]
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Creating beautiful, interactive user interfaces with React and modern frontend technologies.",
    icon: <Code className="h-10 w-10" />,
    color: "from-purple-500 to-pink-500",
    features: [
      "React/Next.js applications",
      "Interactive UI components",
      "State management",
      "Animation and transitions"
    ]
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Robust server-side solutions with secure APIs and efficient database management.",
    icon: <Server className="h-10 w-10" />,
    color: "from-green-500 to-emerald-500",
    features: [
      "RESTful API development",
      "Database design and optimization",
      "Authentication systems",
      "Server deployment and maintenance"
    ]
  },
  {
    id: 4,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications that work seamlessly on iOS and Android devices.",
    icon: <Smartphone className="h-10 w-10" />,
    color: "from-amber-500 to-orange-500",
    features: [
      "React Native development",
      "Native-like performance",
      "Offline functionality",
      "App store deployment"
    ]
  },
  {
    id: 5,
    title: "Database Solutions",
    description: "Efficient database design, implementation, and optimization for your applications.",
    icon: <Database className="h-10 w-10" />,
    color: "from-red-500 to-rose-500",
    features: [
      "SQL and NoSQL databases",
      "Data modeling and schema design",
      "Query optimization",
      "Data migration and integration"
    ]
  },
  {
    id: 6,
    title: "AI Integration",
    description: "Integrate AI capabilities into your applications to enhance functionality and user experience.",
    icon: <Brain className="h-10 w-10" />,
    color: "from-indigo-500 to-violet-500",
    features: [
      "AI-powered content generation",
      "Text-to-speech and speech-to-text",
      "Image and video generation",
      "Natural language processing"
    ]
  },
  {
    id: 7,
    title: "Technical Consultation",
    description: "Expert advice on technology choices, architecture, and development strategies.",
    icon: <Lightbulb className="h-10 w-10" />,
    color: "from-yellow-500 to-amber-500",
    features: [
      "Technology stack recommendations",
      "Architecture planning",
      "Code reviews and audits",
      "Performance optimization strategies"
    ]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-container relative">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 -z-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-0 -z-10 w-72 h-72 bg-accent/5 rounded-full blur-[100px]"></div>

      <div className="flex flex-col items-center mb-6">
        <Badge variant="outline" className="mb-3 px-3 py-1 border-primary/20 text-primary">
          <Code size={14} className="mr-1" /> My Services
        </Badge>
        <h2 className="section-title">What I Offer</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mt-4">
          Specialized services tailored to meet your project needs with quality and efficiency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card
            key={service.id}
            className="overflow-hidden border-primary/10 shadow-md hover:shadow-lg transition-all hover:border-primary/20 card-3d"
          >
            <div className={`h-1.5 w-full bg-gradient-to-r ${service.color}`}></div>
            <CardContent className="p-8">
              <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color} text-white mb-6 w-fit`}>
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 p-8 rounded-xl bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-primary/10 shadow-lg text-center">
        <h3 className="text-2xl font-semibold mb-4">Need a custom solution?</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          I'm always open to discussing new projects and challenges. If you have a specific need that's not listed above,
          feel free to reach out and we can discuss how I can help you achieve your goals.
        </p>
        <Badge className="px-4 py-2 text-base bg-primary text-white">
          <a href="#contact" className="flex items-center">
            Get in touch for custom projects
          </a>
        </Badge>
      </div>
    </section>
  );
};

export default ServicesSection;
