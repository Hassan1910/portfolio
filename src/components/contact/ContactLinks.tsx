
import React from 'react';
import { Github, Linkedin, Mail } from "lucide-react";

const ContactLinks = () => {
  return (
    <div className="space-y-4">
      <a 
        href="mailto:adanhassan1910@gmail.com" 
        className="flex items-center p-3 rounded-lg hover:bg-muted transition-colors"
      >
        <Mail className="h-5 w-5 mr-3 text-primary" />
        <div>
          <p className="font-medium">Email</p>
          <p className="text-sm text-muted-foreground">adanhassan1910@gmail.com</p>
        </div>
      </a>
      
      <a 
        href="https://github.com/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center p-3 rounded-lg hover:bg-muted transition-colors"
      >
        <Github className="h-5 w-5 mr-3 text-primary" />
        <div>
          <p className="font-medium">GitHub</p>
          <p className="text-sm text-muted-foreground">github.com/hassan</p>
        </div>
      </a>
      
      <a 
        href="https://linkedin.com/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center p-3 rounded-lg hover:bg-muted transition-colors"
      >
        <Linkedin className="h-5 w-5 mr-3 text-primary" />
        <div>
          <p className="font-medium">LinkedIn</p>
          <p className="text-sm text-muted-foreground">linkedin.com/in/hassan</p>
        </div>
      </a>
    </div>
  );
};

export default ContactLinks;
