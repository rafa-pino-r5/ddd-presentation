import type { ReactNode } from 'react';

interface CardProps {
  className?: string;
  children: ReactNode;
}

export const Card = ({ className = '', children }: CardProps) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200 ${className}`}>
    {children}
  </div>
);

export const CardHeader = ({ className = '', children }: CardProps) => (
  <div className={`px-6 pt-6 pb-2 ${className}`}>{children}</div>
);

export const CardTitle = ({ className = '', children }: CardProps) => (
  <h2 className={`text-xl font-semibold text-slate-900 ${className}`}>
    {children}
  </h2>
);

export const CardContent = ({ className = '', children }: CardProps) => (
  <div className={`px-6 pb-6 pt-2 text-sm text-slate-700 ${className}`}>
    {children}
  </div>
);
