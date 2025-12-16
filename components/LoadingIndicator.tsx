import React from 'react';

interface Props {
  className?: string;
  pulse?: boolean;
  variant?: 'wolf' | 'donut' | 'simple';
}

export const LoadingIndicator: React.FC<Props> = ({ className = "w-24 h-24", pulse = false, variant = 'wolf' }) => {
  if (variant === 'donut') {
    return (
      <div className={`${className} ${pulse ? 'animate-pulse' : ''} flex justify-center items-center`}>
        <svg viewBox="0 0 100 100" className="drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="#fca5a5" strokeWidth="15" />
          <circle cx="50" cy="50" r="40" stroke="#ec4899" strokeWidth="15" strokeDasharray="60 190" className="animate-spin origin-center" />
          <circle cx="20" cy="30" r="3" fill="#fff" />
          <circle cx="70" cy="40" r="3" fill="#fff" />
          <circle cx="40" cy="80" r="3" fill="#fff" />
        </svg>
      </div>
    );
  }

  if (variant === 'simple') {
    return (
      <div className={`${className} flex justify-center items-center`}>
        <div className="w-10 h-10 border-4 border-slate-500 border-t-amber-500 rounded-full animate-spin"></div>
      </div>
    )
  }

  // Default Wolf
  return (
    <div className={`${className} ${pulse ? 'animate-pulse' : ''} text-amber-600 flex justify-center items-center`}>
      {/* Simplified geometric wolf representation using SVG */}
      <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg filter shadow-amber-500/50">
        <path d="M50 20 L65 5 L85 15 L75 35 L90 55 L70 85 L50 95 L30 85 L10 55 L25 35 L15 15 L35 5 L50 20 Z M35 45 L45 55 L35 65 L25 55 Z M65 45 L75 55 L65 65 L55 55 Z" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="35" cy="55" r="2" fill="#ef4444" className="animate-ping" style={{ animationDuration: '3s' }} />
        <circle cx="65" cy="55" r="2" fill="#ef4444" className="animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
      </svg>
    </div>
  );
};
