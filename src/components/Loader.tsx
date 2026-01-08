import { useState, useEffect } from "react";

export const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            onComplete();
          }, 300);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-forest">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-gold/10 via-cream/5 to-transparent rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Loader Content */}
      <div className="relative flex flex-col items-center">
        {/* Animated Ring */}
        <div className="relative w-32 h-32">
          {/* Outer Ring */}
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(212, 175, 55, 0.1)" strokeWidth="3" />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#loaderGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`${(progress / 100) * 283} 283`}
              className="transition-all duration-75 ease-linear"
            />
            <defs>
              <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D4AF37" />
                <stop offset="50%" stopColor="#F5E6C8" />
                <stop offset="100%" stopColor="#D4AF37" />
              </linearGradient>
            </defs>
          </svg>

          {/* Inner Initial */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-heading text-2xl font-bold text-gold animate-pulse">L</span>
          </div>
        </div>

        {/* Progress Text */}
        <p className="mt-6 font-body text-cream/80 text-sm tracking-[0.3em] uppercase animate-pulse">Loading</p>

        {/* Progress Bar */}
        <div className="mt-4 w-48 h-1 bg-forest-light rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-gold via-cream to-gold rounded-full transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage */}
        <p className="mt-2 font-heading text-gold text-lg">{Math.round(progress)}%</p>
      </div>
    </div>
  );
};
