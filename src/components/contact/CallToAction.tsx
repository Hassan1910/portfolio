
import React from 'react';
import { Button } from "@/components/ui/button";
import { AtSign } from "lucide-react";

interface CallToActionProps {
  onFocusContactForm: () => void;
}

const CallToAction = ({ onFocusContactForm }: CallToActionProps) => {
  return (
    <div className="p-6 rounded-lg bg-primary/10 border border-primary/20">
      <h3 className="text-xl font-semibold mb-4">Looking for a developer?</h3>
      <p className="mb-4">
        I'm currently available for freelance work and full-time positions. Let's discuss how I can help you achieve your project goals!
      </p>
      <Button 
        variant="default" 
        className="w-full"
        onClick={onFocusContactForm}
      >
        <AtSign className="mr-2 h-4 w-4" /> Get In Touch
      </Button>
    </div>
  );
};

export default CallToAction;
