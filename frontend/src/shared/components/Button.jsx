import React from 'react';
import { cn } from '../utils/helpers';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-bold font-bubble rounded-2xl transition-all duration-200 active:scale-95 select-none focus:outline-none focus:ring-4';
  
  const variants = {
    primary: 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-400/30 hover:shadow-sky-400/50 hover:brightness-105 border-b-4 border-blue-700 focus:ring-sky-200',
    purple: 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-400/30 hover:shadow-purple-400/50 hover:brightness-105 border-b-4 border-purple-800 focus:ring-purple-200',
    sunshine: 'bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-950 shadow-lg shadow-amber-400/30 hover:shadow-amber-400/50 hover:brightness-105 border-b-4 border-amber-600 focus:ring-amber-200',
    mint: 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white shadow-lg shadow-emerald-400/30 hover:shadow-emerald-400/50 border-b-4 border-teal-700 focus:ring-emerald-200',
    secondary: 'bg-white text-slate-700 hover:bg-slate-50 border-2 border-slate-200 shadow-sm hover:border-slate-300 focus:ring-slate-100',
    ghost: 'text-slate-600 hover:text-sky-600 hover:bg-sky-50/70 border border-transparent'
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 shadow-md',
    xl: 'text-lg px-8 py-4 gap-3 shadow-lg'
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5 flex-shrink-0" />}
      <span>{children}</span>
    </button>
  );
}

