import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'option';
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-6 py-3 font-cinzel font-bold transition-all duration-300 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-amber-700 hover:bg-amber-600 text-amber-50 border-2 border-amber-800 rounded shadow-[0_0_15px_rgba(180,83,9,0.3)] hover:shadow-[0_0_25px_rgba(180,83,9,0.6)] uppercase tracking-wider",
    secondary: "bg-transparent hover:bg-slate-800 text-slate-300 border border-slate-600 rounded",
    option: "w-full text-left bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-amber-500/50 p-4 rounded-lg transition-colors duration-200 flex items-center group-hover:pl-6"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
      )}
    </button>
  );
};
