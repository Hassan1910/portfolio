
import React, { useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from '@/components/contact/ContactForm';
import ContactLinks from '@/components/contact/ContactLinks';
import CallToAction from '@/components/contact/CallToAction';

const ContactSection = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);

  const focusContactForm = () => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    } else {
      // If the ref isn't available, we can try using document.getElementById as a fallback
      const nameInput = document.getElementById('name');
      if (nameInput) {
        (nameInput as HTMLInputElement).focus();
      }
    }
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
              <ContactForm />
            </CardContent>
          </Card>
          
          <div className="space-y-8 animate-fade-in">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
                <ContactLinks />
              </CardContent>
            </Card>
            
            <CallToAction onFocusContactForm={focusContactForm} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
