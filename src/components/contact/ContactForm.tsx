import React, { useState, forwardRef } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Send, Loader2 } from "lucide-react";

const API_URL = process.env.NODE_ENV === 'production'
  ? '/api/send-email'
  : 'http://localhost:3001/api/send-email';

interface ContactFormProps {
  nameInputRef?: React.RefObject<HTMLInputElement>;
}

const ContactForm = forwardRef<HTMLInputElement, ContactFormProps>(({ nameInputRef }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Error", description: "Please fill out all required fields.", variant: "destructive" });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Failed to send message');

      toast({ title: "Message sent!", description: "I'll get back to you soon." });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid sm:grid-cols-2 gap-8">
        <div className="space-y-1">
          <label htmlFor="name" className="text-xs text-muted-foreground uppercase tracking-wider">
            Name <span className="text-primary">*</span>
          </label>
          <input
            id="name"
            name="name"
            ref={nameInputRef}
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="form-input"
            required
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="text-xs text-muted-foreground uppercase tracking-wider">
            Email <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="form-input"
            required
          />
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="phone" className="text-xs text-muted-foreground uppercase tracking-wider">
          Phone <span className="text-muted-foreground/50">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+254 XXX XXX XXX"
          className="form-input"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="subject" className="text-xs text-muted-foreground uppercase tracking-wider">
          Subject <span className="text-primary">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="What is this about?"
          className="form-input"
          required
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="message" className="text-xs text-muted-foreground uppercase tracking-wider">
          Message <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project..."
          rows={5}
          className="form-input resize-none"
          required
        />
      </div>

      <button
        type="submit"
        className="btn-primary w-full justify-center"
        disabled={isSubmitting}
        id="contact-submit-btn"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={14} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={14} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';

export default ContactForm;
