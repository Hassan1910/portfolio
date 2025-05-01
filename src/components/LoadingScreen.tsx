import React, { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      <div className="relative">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/30">
            <img
              src="/images/profile pic.jpg"
              alt="Adan Wako"
              className="w-full h-full object-cover brightness-110 contrast-110"
            />
          </div>
          <div className="text-4xl font-bold animated-gradient-text text-center">
            Hassan
          </div>
        </div>

        {/* Loading animation */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 rounded-full bg-secondary animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 rounded-full bg-accent animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
