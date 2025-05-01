
import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Calendar } from "lucide-react";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";

const ContactLinks = () => {
  return (
    <div className="space-y-5">
      <a
        href="mailto:adanhassan1910@gmail.com"
        className="flex items-center p-4 rounded-lg hover:bg-white/50 dark:hover:bg-black/20 transition-all hover:scale-[1.02] border border-primary/10 group"
      >
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
          <Mail className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="font-medium">Email</p>
          <p className="text-sm text-muted-foreground">adanhassan1910@gmail.com</p>
        </div>
      </a>

      <a
        href="https://github.com/Hassan1910"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center p-4 rounded-lg hover:bg-white/50 dark:hover:bg-black/20 transition-all hover:scale-[1.02] border border-primary/10 group"
      >
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
          <Github className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="font-medium">GitHub</p>
          <p className="text-sm text-muted-foreground">github.com/Hassan1910</p>
        </div>
      </a>

      <a
        href="https://www.linkedin.com/in/hassan-adan/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center p-4 rounded-lg hover:bg-white/50 dark:hover:bg-black/20 transition-all hover:scale-[1.02] border border-primary/10 group"
      >
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
          <Linkedin className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="font-medium">LinkedIn</p>
          <p className="text-sm text-muted-foreground">linkedin.com/in/hassan-adan</p>
        </div>
      </a>

      <div className="flex items-center p-4 rounded-lg border border-primary/10 bg-white/30 dark:bg-black/10">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
          <MapPin className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="font-medium">Location</p>
          <p className="text-sm text-muted-foreground">Kenya, Marsabit</p>
        </div>
      </div>



      <div className="flex items-center p-4 rounded-lg border border-primary/10 bg-white/30 dark:bg-black/10">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
          <Phone className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="font-medium">Phone</p>
          <p className="text-sm text-muted-foreground">Available via floating chat buttons</p>
        </div>
      </div>
    </div>
  );
};

export default ContactLinks;
