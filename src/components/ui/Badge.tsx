import type { ReactNode } from 'react';

interface BadgeProps {
  className?: string;
  children: ReactNode;
}

export const Badge = ({ className = '', children }: BadgeProps) => (
  <span
    className={`inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700 ${className}`}
  >
    {children}
  </span>
);
