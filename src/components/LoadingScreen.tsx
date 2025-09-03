import { useEffect, useState } from 'react';

// Using the latest uploaded logo directly
const cbnLogo = '/lovable-uploads/629fd9b8-0e43-414e-95cd-8c3ec6294b1c.png';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10 flex items-center justify-center z-50 overflow-hidden">
      {/* Background Animation Beams */}
      <div className="absolute inset-0 motion-safe:animate-pulse">
        <div className="absolute top-1/4 left-1/4 w-96 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent rotate-45 motion-safe:animate-[slide-in-right_4s_ease-in-out_infinite]"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent -rotate-45 motion-safe:animate-[slide-in-right_4s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-1 bg-gradient-to-r from-transparent via-primary/10 to-transparent rotate-12 motion-safe:animate-[fade-in_3s_ease-in-out_infinite_alternate]"></div>
      </div>

      <div className="text-center relative z-10">
        {/* Enhanced Logo Container with Circular Progress */}
        <div className="relative mb-8">
          {/* Circular Progress Ring */}
          <div className="relative w-40 h-40 md:w-48 md:h-48">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Background Circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                opacity="0.1"
              />
              {/* Progress Circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 45}`}
                strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                className="motion-safe:transition-all duration-300 ease-out drop-shadow-sm"
                style={{
                  filter: 'drop-shadow(0 0 8px hsl(var(--primary) / 0.3))'
                }}
              />
              {/* Orbiting Highlights */}
              <g className="motion-safe:animate-spin motion-safe:duration-[6s]">
                <circle
                  cx="95"
                  cy="50"
                  r="2"
                  fill="hsl(var(--secondary))"
                  className="motion-safe:animate-pulse"
                />
                <circle
                  cx="5"
                  cy="50"
                  r="1.5"
                  fill="hsl(var(--primary))"
                  opacity="0.7"
                  className="motion-safe:animate-pulse motion-safe:duration-[2s]"
                />
              </g>
            </svg>
            
            {/* Logo Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Glowing Background */}
                <div className="absolute inset-0 rounded-full bg-white shadow-2xl motion-safe:animate-pulse motion-safe:duration-[3s]" 
                     style={{
                       boxShadow: '0 0 30px hsl(var(--primary) / 0.2), 0 0 60px hsl(var(--primary) / 0.1)'
                     }}>
                </div>
                
                {/* Logo */}
                <img 
                  src={cbnLogo} 
                  alt="CBN Trust" 
                  className="relative z-10 w-20 h-20 md:w-24 md:h-24 p-3 motion-safe:animate-[scale-in_2s_ease-out_infinite_alternate]"
                />
                
                {/* Rotating Orbital Dots */}
                <div className="absolute inset-0 motion-safe:animate-spin motion-safe:duration-[8s]">
                  <div className="absolute top-2 left-1/2 w-2 h-2 bg-secondary rounded-full transform -translate-x-1/2 motion-safe:animate-pulse"></div>
                  <div className="absolute bottom-2 left-1/2 w-1.5 h-1.5 bg-primary/60 rounded-full transform -translate-x-1/2 motion-safe:animate-pulse motion-safe:duration-[1.5s]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Loading Text */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3 motion-safe:animate-fade-in">
            CBN TRUST
          </h1>
          <p className="text-primary/70 text-sm md:text-base motion-safe:animate-fade-in motion-safe:delay-300">
            {progress < 30 ? 'Initializing...' : 
             progress < 60 ? 'Loading resources...' :
             progress < 90 ? 'Almost ready...' : 
             'Welcome!'}
          </p>
        </div>

        {/* Progress Information */}
        <div className="w-72 md:w-80 mx-auto mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-primary/60 text-sm font-medium">Progress</span>
            <span className="text-primary font-bold text-lg">{progress}%</span>
          </div>
          
          {/* Linear Progress Bar as Backup */}
          <div className="w-full bg-primary/10 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full motion-safe:transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/30 motion-safe:animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Inspirational Quote with Enhanced Styling */}
        <div className="max-w-md mx-auto">
          <p className="text-primary/70 text-sm italic motion-safe:animate-fade-in motion-safe:delay-500 leading-relaxed">
            "Service to Humanity is Service to God"
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto mt-3 motion-safe:animate-fade-in motion-safe:delay-700"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;