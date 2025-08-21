import React, { useState, useEffect } from 'react';
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
  const [isVisible, setIsVisible] = useState(false);
  const [focusedButton, setFocusedButton] = useState<'whatsapp' | 'telegram' | null>(null);

  // Format the WhatsApp URL with phone number and optional message
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Format the Telegram URL - using a more reliable format for mobile
  // This format works better on mobile devices
  const telegramUrl = `https://t.me/+${phoneNumber}`;

  // Staggered entrance animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Enhanced keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey && event.key === 'w') {
        event.preventDefault();
        window.open(whatsappUrl, '_blank');
      } else if (event.altKey && event.key === 't') {
        event.preventDefault();
        window.open(telegramUrl, '_blank');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [whatsappUrl, telegramUrl]);

  return (
    <div className={`fixed bottom-20 sm:bottom-6 right-4 sm:left-6 z-[9999] flex flex-col gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* WhatsApp Button */}
      <div className={`relative transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
        {/* Enhanced background glow with glassmorphism */}
        <div className={`absolute -inset-1 rounded-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 opacity-30 blur-sm transition-all duration-300 ${isWhatsAppHovered ? 'opacity-60 scale-110' : ''}`}></div>
        
        {/* Pulse ring effect */}
        <div className={`absolute inset-0 rounded-full bg-green-500 opacity-20 ${isWhatsAppHovered ? 'animate-ping' : ''}`}></div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-110 transform-gpu backdrop-blur-sm border border-green-400/20 group focus:outline-none focus:ring-4 focus:ring-green-500/50"
                aria-label="Chat on WhatsApp - Opens in new tab (Alt+W)"
                onMouseEnter={() => setIsWhatsAppHovered(true)}
                onMouseLeave={() => setIsWhatsAppHovered(false)}
                onFocus={() => setFocusedButton('whatsapp')}
                onBlur={() => setFocusedButton(null)}
                style={{ 
                  boxShadow: isWhatsAppHovered || focusedButton === 'whatsapp' ? '0 20px 40px rgba(34, 197, 94, 0.4)' : '0 10px 25px rgba(0, 0, 0, 0.15)',
                }}
              >
                <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110" />
                
                {/* Enhanced notification badge */}
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-red-600 text-[11px] font-bold text-white shadow-lg border-2 border-white animate-bounce">
                  <span className="relative z-10">1</span>
                  <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-30"></div>
                </span>
              </a>
            </TooltipTrigger>
            <TooltipContent 
              side="left" 
              sideOffset={8} 
              className="bg-green-600/95 text-white border-green-500/50 backdrop-blur-sm shadow-xl hidden sm:block"
            >
              <p className="font-medium">💬 Chat with me on WhatsApp</p>
              <p className="text-xs opacity-90">Quick responses guaranteed • Alt+W</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Telegram Button */}
      <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
        {/* Enhanced background glow with glassmorphism */}
        <div className={`absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 opacity-30 blur-sm transition-all duration-300 ${isTelegramHovered ? 'opacity-60 scale-110' : ''}`}></div>
        
        {/* Pulse ring effect */}
        <div className={`absolute inset-0 rounded-full bg-blue-500 opacity-20 ${isTelegramHovered ? 'animate-ping' : ''}`}></div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-110 transform-gpu backdrop-blur-sm border border-blue-400/20 group focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                aria-label="Chat on Telegram - Opens in new tab (Alt+T)"
                onMouseEnter={() => setIsTelegramHovered(true)}
                onMouseLeave={() => setIsTelegramHovered(false)}
                onFocus={() => setFocusedButton('telegram')}
                onBlur={() => setFocusedButton(null)}
                style={{ 
                  boxShadow: isTelegramHovered || focusedButton === 'telegram' ? '0 20px 40px rgba(59, 130, 246, 0.4)' : '0 10px 25px rgba(0, 0, 0, 0.15)',
                  animationDelay: '0.2s' 
                }}
              >
                <FaTelegram className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110" />
                
                {/* Enhanced notification badge */}
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-red-600 text-[11px] font-bold text-white shadow-lg border-2 border-white animate-bounce">
                  <span className="relative z-10">1</span>
                  <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-30"></div>
                </span>
              </a>
            </TooltipTrigger>
            <TooltipContent 
              side="left" 
              sideOffset={8} 
              className="bg-blue-600/95 text-white border-blue-500/50 backdrop-blur-sm shadow-xl hidden sm:block"
            >
              <p className="font-medium">🚀 Chat with me on Telegram</p>
              <p className="text-xs opacity-90">Instant messaging • Alt+T</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default FloatingSocialButtons;
