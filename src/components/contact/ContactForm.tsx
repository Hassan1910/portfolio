import React, { useState, forwardRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Send, User, Mail, MessageSquare, Loader2 } from "lucide-react";

const API_URL = 'http://localhost:3001/api/send-email';

interface ContactFormProps {
  nameInputRef?: React.RefObject<HTMLInputElement>;
}

const ContactForm = forwardRef<HTMLInputElement, ContactFormProps>(({ nameInputRef }, ref) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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

    // Simulate API call for demo purposes
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setIsSubmitting(false);
    }, 1500);

    // Uncomment for real API integration
    /*
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
    */
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <User className="h-4 w-4 text-primary" />
            <span>Your Name</span>
          </label>
          <Input
            id="name"
            name="name"
            ref={nameInputRef}
            value={formData.name}
            onChange={handleChange}
            placeholder="Adan Wako"
            className="bg-white/50 dark:bg-black/10 border-primary/10 focus:border-primary/30"
            required
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <Mail className="h-4 w-4 text-primary" />
            <span>Your Email</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="adanwako@example.com"
            className="bg-white/50 dark:bg-black/10 border-primary/10 focus:border-primary/30"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="subject"
          className="flex items-center gap-2 text-sm font-medium text-foreground"
        >
          <MessageSquare className="h-4 w-4 text-primary" />
          <span>Subject</span>
        </label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="What is this regarding?"
          className="bg-white/50 dark:bg-black/10 border-primary/10 focus:border-primary/30"
          required
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="flex items-center gap-2 text-sm font-medium text-foreground"
        >
          <MessageSquare className="h-4 w-4 text-primary" />
          <span>Your Message</span>
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project or inquiry..."
          rows={6}
          className="bg-white/50 dark:bg-black/10 border-primary/10 focus:border-primary/30 resize-none"
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 h-auto btn-glow relative overflow-hidden group"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending Message...
          </span>
        ) : (
          <span className="flex items-center relative z-10">
            <Send className="mr-2 h-4 w-4" /> Send Message
          </span>
        )}
        <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to be contacted about your request.
        I respect your privacy and will never share your information.
      </p>
    </form>
  );
});

ContactForm.displayName = "ContactForm";

export default ContactForm;
