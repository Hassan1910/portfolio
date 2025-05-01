
import React, { useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactForm from '@/components/contact/ContactForm';
import ContactLinks from '@/components/contact/ContactLinks';
import CallToAction from '@/components/contact/CallToAction';
import { Send, MapPin } from "lucide-react";

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
    <section id="contact" className="relative py-12 md:py-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-muted/30 dark:bg-muted/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-primary/3 rounded-full blur-[100px] transform translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute top-1/3 left-0 w-1/2 h-1/2 bg-accent/3 rounded-full blur-[100px] transform -translate-x-1/4"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center mb-10">
          <Badge variant="outline" className="mb-4 px-3 py-1 border-primary/20 text-primary">
            <Send size={14} className="mr-1" /> Contact Me
          </Badge>
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mt-6">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Contact Form - Takes 3 columns on large screens */}
          <Card className="animate-fade-in lg:col-span-3 overflow-hidden border-primary/10 shadow-lg">
            <div className="h-1.5 w-full bg-gradient-to-r from-primary via-secondary to-accent"></div>
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 rounded-md bg-primary/10 text-primary">
                  <Send className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-semibold">Send Me a Message</h3>
              </div>
              <ContactForm nameInputRef={nameInputRef} />
            </CardContent>
          </Card>

          {/* Contact Info - Takes 2 columns on large screens */}
          <div className="space-y-8 animate-fade-in lg:col-span-2">
            <Card className="overflow-hidden border-primary/10 shadow-lg">
              <div className="h-1.5 w-full bg-gradient-to-r from-accent to-primary"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-2 rounded-md bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-semibold">Connect With Me</h3>
                </div>
                <ContactLinks />
              </CardContent>
            </Card>

            <CallToAction onFocusContactForm={focusContactForm} />
          </div>
        </div>

        {/* Map or Additional Info Section */}
        <div className="mt-10 p-8 rounded-xl bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-primary/10 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-2">My Working Hours</h3>
            <p className="text-muted-foreground">I'm available during the following hours:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-lg bg-white/50 dark:bg-black/20 border border-primary/10 text-center">
              <h4 className="font-semibold mb-2">Monday - Friday</h4>
              <p className="text-primary">9:00 AM - 6:00 PM</p>
            </div>
            <div className="p-4 rounded-lg bg-white/50 dark:bg-black/20 border border-primary/10 text-center">
              <h4 className="font-semibold mb-2">Saturday</h4>
              <p className="text-primary">10:00 AM - 4:00 PM</p>
            </div>
            <div className="p-4 rounded-lg bg-white/50 dark:bg-black/20 border border-primary/10 text-center">
              <h4 className="font-semibold mb-2">Sunday</h4>
              <p className="text-primary">Closed</p>
            </div>
            <div className="p-4 rounded-lg bg-white/50 dark:bg-black/20 border border-primary/10 text-center">
              <h4 className="font-semibold mb-2">Response Time</h4>
              <p className="text-primary">Within 24 Hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
