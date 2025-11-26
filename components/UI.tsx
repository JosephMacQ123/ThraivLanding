import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  icon?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className = '', icon }) => {
  const baseStyle = "px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 justify-center";
  const variants = {
    primary: "bg-thraiv-blue text-white hover:bg-blue-600 shadow-lg shadow-blue-500/30",
    secondary: "bg-thraiv-navy text-white hover:bg-opacity-90",
    outline: "border border-thraiv-navy/20 text-thraiv-navy hover:bg-thraiv-navy/5"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </motion.button>
  );
};

export const SectionHeader: React.FC<{ title: string; subtitle?: string; light?: boolean; className?: string }> = ({ title, subtitle, light = false, className = '' }) => (
  <div className={`mb-12 md:mb-20 ${className}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight ${light ? 'text-white' : 'text-thraiv-navy'}`}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-lg md:text-xl max-w-2xl mx-auto font-light ${light ? 'text-gray-300' : 'text-gray-600'}`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export const Card: React.FC<{ children: ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 ${className}`}>
    {children}
  </div>
);