import React, { useState } from 'react';
import { FaWhatsapp, FaTelegram } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface FloatingSocialButtonsProps {
  phoneNumber: string;
  message?: string;
}

const FloatingSocialButtons: React.FC<FloatingSocialButtonsProps> = ({
  phoneNumber,
  message = "Hello, I'd like to chat about your services."
}) => {
  const [isWhatsAppHovered, setIsWhatsAppHovered] = useState(false);
  const [isTelegramHovered, setIsTelegramHovered] = useState(false);

  // Format the WhatsApp URL with phone number and optional message
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Format the Telegram URL with phone number
  const telegramUrl = `https://t.me/${phoneNumber}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-fade-in flex flex-col gap-4">
      {/* WhatsApp Button */}
      <div className="relative">
        {/* Pulse effect behind the button */}
        <div className={`absolute inset-0 rounded-full bg-green-500 opacity-30 ${isWhatsAppHovered ? 'animate-pulse-glow' : ''}`}></div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-bounce-gentle"
                aria-label="Chat on WhatsApp"
                onMouseEnter={() => setIsWhatsAppHovered(true)}
                onMouseLeave={() => setIsWhatsAppHovered(false)}
              >
                <FaWhatsapp className="w-7 h-7" />
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white animate-pulse">
                  1
                </span>
              </a>
            </TooltipTrigger>
            <TooltipContent side="right" className="bg-green-600 text-white border-green-700">
              <p>Chat with me on WhatsApp</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Telegram Button */}
      <div className="relative">
        {/* Pulse effect behind the button */}
        <div className={`absolute inset-0 rounded-full bg-blue-500 opacity-30 ${isTelegramHovered ? 'animate-pulse-glow' : ''}`}></div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110 animate-bounce-gentle"
                aria-label="Chat on Telegram"
                onMouseEnter={() => setIsTelegramHovered(true)}
                onMouseLeave={() => setIsTelegramHovered(false)}
                style={{ animationDelay: '0.5s' }}
              >
                <FaTelegram className="w-7 h-7" />
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white animate-pulse">
                  1
                </span>
              </a>
            </TooltipTrigger>
            <TooltipContent side="right" className="bg-blue-600 text-white border-blue-700">
              <p>Chat with me on Telegram</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default FloatingSocialButtons;
