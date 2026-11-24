import React from 'react';
import { cn } from '../utils/helpers';

export function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-slate-100 text-slate-700 border-slate-200',
    sky: 'bg-sky-100 text-sky-700 border-sky-200',
    purple: 'bg-purple-100 text-purple-700 border-purple-200',
    emerald: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    amber: 'bg-amber-100 text-amber-800 border-amber-200',
    rose: 'bg-rose-100 text-rose-800 border-rose-200'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export function Card({ children, className = '', hover = true, ...props }) {
  return (
    <div
      className={cn(
        'bg-white/95 rounded-3xl border-2 border-slate-100 shadow-sm p-6 transition-all duration-300',
        hover && 'hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100/50 hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

