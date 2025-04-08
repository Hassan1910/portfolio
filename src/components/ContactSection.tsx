import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { AtSign, Github, Linkedin, Mail, Send } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="bg-muted/50 dark:bg-muted/10 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <Card className="animate-fade-in">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8 animate-fade-in">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
                
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
              </CardContent>
            </Card>
            
            <div className="p-6 rounded-lg bg-primary/10 border border-primary/20">
              <h3 className="text-xl font-semibold mb-4">Looking for a developer?</h3>
              <p className="mb-4">
                I'm currently available for freelance work and full-time positions. Let's discuss how I can help you achieve your project goals!
              </p>
              <Button 
                variant="default" 
                className="w-full"
                onClick={() => {
                  const nameInput = document.getElementById('name');
                  if (nameInput) {
                    (nameInput as HTMLInputElement).focus();
                  }
                }}
              >
                <AtSign className="mr-2 h-4 w-4" /> Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
