import { useEffect, useState } from 'react';

// Using the uploaded logo directly
const cbnLogo = '/lovable-uploads/2c294f61-c101-4c9e-afe2-6071b03f2051.png';

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
    <div className="fixed inset-0 bg-gradient-to-br from-white via-gray-50 to-primary-light flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Logo Container */}
        <div className="relative mb-8">
          {/* Rotating Ring Animation */}
          <div className="absolute inset-0 animate-spin duration-3000">
            <div className="w-32 h-32 md:w-40 md:h-40 border-4 border-t-primary border-r-transparent border-b-secondary border-l-transparent rounded-full"></div>
          </div>
          
          {/* Pulsing Ring Animation */}
          <div className="absolute inset-2 animate-pulse">
            <div className="w-28 h-28 md:w-36 md:h-36 border-2 border-primary/30 rounded-full"></div>
          </div>
          
          {/* Logo with White Background */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
            <div className="absolute inset-4 bg-white rounded-full shadow-lg"></div>
            <img 
              src={cbnLogo} 
              alt="CBN Trust" 
              className="relative z-10 w-24 h-24 md:w-32 md:h-32 animate-pulse duration-2000"
            />
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2 animate-fade-in">
            CBN TRUST
          </h1>
          <p className="text-primary/70 text-sm md:text-base animate-fade-in">
            Loading your experience...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 md:w-80 mx-auto mb-4">
          <div className="w-full bg-primary/20 rounded-full h-2">
            <div 
              className="bg-secondary h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-primary/60 text-sm mt-2">{progress}%</div>
        </div>

        {/* Inspirational Quote */}
        <div className="max-w-md mx-auto">
          <p className="text-primary/70 text-sm italic animate-fade-in">
            "Service to Humanity is Service to God"
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;