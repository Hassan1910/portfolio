
import React from 'react';
import { Button } from "@/components/ui/button";
import { AtSign, Sparkles, Clock } from "lucide-react";

interface CallToActionProps {
  onFocusContactForm: () => void;
}

const CallToAction = ({ onFocusContactForm }: CallToActionProps) => {
  return (
    <div className="p-8 rounded-xl bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 border border-primary/20 shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-md bg-primary/10 text-primary">
          <Sparkles className="h-5 w-5" />
        </div>
        <h3 className="text-2xl font-semibold">Get in Touch</h3>
      </div>

      <p className="mb-6 text-muted-foreground leading-relaxed">
        Have a project in mind? Let's discuss how I can help you achieve your project goals!
      </p>

      <div className="mb-6 p-4 rounded-lg bg-white/50 dark:bg-black/20 border border-primary/10 flex items-center gap-3">
        <Clock className="h-5 w-5 text-primary flex-shrink-0" />
        <p className="text-sm">
          <span className="font-medium">Quick Response:</span> I typically respond to inquiries within 24 hours.
        </p>
      </div>

      <Button
        variant="default"
        className="w-full bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 h-auto btn-glow relative overflow-hidden group"
        onClick={onFocusContactForm}
      >
        <span className="relative z-10 flex items-center">
          <AtSign className="mr-2 h-4 w-4" /> Send Me a Message
        </span>
        <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
      </Button>
    </div>
  );
};

export default CallToAction;
