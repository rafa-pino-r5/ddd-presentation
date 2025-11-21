import type { ReactNode } from 'react';

interface QuoteProps {
  children: ReactNode;
  title?: string;
}

export const Quote = ({ children, title }: QuoteProps) => (
  <div className="my-4 rounded-lg border border-blue-200 bg-blue-50 p-4">
    {title && (
      <h4 className="mb-2 font-semibold text-blue-900">{title}</h4>
    )}
    <div className="italic text-blue-800">
      {children}
    </div>
  </div>
);
