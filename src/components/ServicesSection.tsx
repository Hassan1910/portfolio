import React from 'react';
import { Code, Database, Layout, Smartphone, Server, Lightbulb, Brain, CreditCard } from "lucide-react";

const services = [
  {
    icon: <Layout size={20} />,
    title: 'Web Development',
    description: 'Custom websites and web apps built with modern frameworks — responsive, performant, and SEO-friendly.',
  },
  {
    icon: <Code size={20} />,
    title: 'Frontend Development',
    description: 'Interactive UIs with React and Next.js. State management, animations, and pixel-perfect implementations.',
  },
  {
    icon: <Server size={20} />,
    title: 'Backend Development',
    description: 'RESTful APIs, authentication systems, and efficient database management on Node.js or PHP.',
  },
  {
    icon: <Smartphone size={20} />,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps with React Native — native-like performance on iOS and Android.',
  },
  {
    icon: <Database size={20} />,
    title: 'Database Solutions',
    description: 'Data modeling, schema design, query optimization, and migrations for SQL and NoSQL databases.',
  },
  {
    icon: <Brain size={20} />,
    title: 'AI Integration',
    description: 'Adding AI capabilities — content generation, text-to-speech, image generation, and NLP to your apps.',
  },
  {
    icon: <CreditCard size={20} />,
    title: 'M-Pesa Integration',
    description: 'Seamless M-Pesa payment integration with secure processing, status tracking, and real-time notifications.',
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'Technical Consultation',
    description: 'Architecture planning, technology stack recommendations, code reviews, and performance strategies.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-container">
      <p className="section-heading">Services</p>
      <h2 className="section-title">What I Offer</h2>
      <p className="text-muted-foreground text-sm mb-12 max-w-lg">
        Specialized services tailored to your project needs — from M-Pesa integration to AI-powered web apps.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-background hover:bg-muted/40 transition-colors p-6 group"
          >
            <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-200 w-fit">
              {service.icon}
            </div>
            <h3 className="font-semibold text-sm text-foreground mb-2">{service.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 rounded-lg border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-semibold text-foreground mb-1">Need a custom solution?</h3>
          <p className="text-sm text-muted-foreground">Have a specific requirement not listed above? Let's talk.</p>
        </div>
        <a
          href="#contact"
          className="btn-primary flex-shrink-0"
          id="services-contact-link"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default ServicesSection;
