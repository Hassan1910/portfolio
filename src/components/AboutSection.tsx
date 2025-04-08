
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Laptop, BookOpen } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <p className="text-lg">
            I'm a passionate junior software engineer with a strong interest in building 
            practical web applications and business solutions. Currently, I'm focused on developing a 
            comprehensive food ordering & restaurant POS SaaS system, which combines my technical skills 
            with real-world business needs.
          </p>
          
          <p className="text-lg">
            I enjoy the challenge of creating full-stack web applications, with a particular 
            emphasis on clean code, intuitive UI/UX, and efficient database design. Beyond my current tech stack, 
            I'm also expanding my skills in Python, with a specific interest in cybersecurity and ethical hacking.
          </p>
          
          <div className="pt-4">
            <h3 className="text-xl font-semibold mb-4">Current Goals</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <Code className="text-primary h-6 w-6 mt-1" />
                  <div>
                    <h4 className="font-medium">Master React Ecosystem</h4>
                    <p className="text-sm text-muted-foreground">Deepen knowledge of React, Next.js and related tools</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <Database className="text-primary h-6 w-6 mt-1" />
                  <div>
                    <h4 className="font-medium">Database Expertise</h4>
                    <p className="text-sm text-muted-foreground">Advanced SQL and NoSQL database optimization</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <Laptop className="text-primary h-6 w-6 mt-1" />
                  <div>
                    <h4 className="font-medium">Launch SaaS Product</h4>
                    <p className="text-sm text-muted-foreground">Complete and deploy restaurant POS system</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <BookOpen className="text-primary h-6 w-6 mt-1" />
                  <div>
                    <h4 className="font-medium">Cybersecurity Skills</h4>
                    <p className="text-sm text-muted-foreground">Learn Python for ethical hacking and security</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center animate-fade-in">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
              <span className="text-lg text-foreground/70">Photo Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
