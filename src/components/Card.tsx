import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  /** Use on green/dark sections for glass effect */
  variant?: 'light' | 'dark';
}

const Card: React.FC<CardProps> = ({ children, className = '', variant = 'light' }) => {
  const glass = 'backdrop-blur-xl rounded-2xl overflow-hidden';
  const styles =
    variant === 'dark'
      ? 'bg-white/5 border border-white/10 shadow-lg'
      : 'bg-white/90 border border-gray-200/80 shadow-sm';
  return <div className={`${glass} ${styles} ${className}`}>{children}</div>;
};

export default Card;
