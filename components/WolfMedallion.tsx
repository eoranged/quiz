import React from 'react';

interface Props {
  className?: string;
  pulse?: boolean;
}

export const WolfMedallion: React.FC<Props> = ({ className = "w-24 h-24", pulse = false }) => {
  return (
    <div className={`${className} ${pulse ? 'animate-pulse' : ''} text-amber-600 flex justify-center items-center`}>
       {/* Simplified geometric wolf representation using SVG */}
       <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg filter shadow-amber-500/50">
        <path d="M50 20 L65 5 L85 15 L75 35 L90 55 L70 85 L50 95 L30 85 L10 55 L25 35 L15 15 L35 5 L50 20 Z M35 45 L45 55 L35 65 L25 55 Z M65 45 L75 55 L65 65 L55 55 Z" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="35" cy="55" r="2" fill="#ef4444" className="animate-ping" style={{animationDuration: '3s'}} />
        <circle cx="65" cy="55" r="2" fill="#ef4444" className="animate-ping" style={{animationDuration: '3s', animationDelay: '0.5s'}} />
      </svg>
    </div>
  );
};
