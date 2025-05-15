
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CustomButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
}

const CustomButton = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className,
  fullWidth = false,
  icon,
  iconPosition = 'right',
  disabled = false,
  type = 'button',
  href,
}: CustomButtonProps) => {
  const buttonVariants = {
    primary: 'bg-gradient-to-r from-shivayan-gold to-shivayan-orange hover:from-shivayan-orange hover:to-shivayan-gold text-shivayan-dark-purple font-bold shadow-lg',
    secondary: 'bg-gradient-to-r from-shivayan-purple to-shivayan-dark-purple hover:from-shivayan-dark-purple hover:to-shivayan-purple text-white font-bold shadow-lg',
    outline: 'border-2 border-shivayan-gold hover:bg-shivayan-gold/10 text-shivayan-gold',
    text: 'text-shivayan-purple hover:text-shivayan-dark-purple hover:bg-shivayan-purple/10',
  };

  const buttonSizes = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2.5 px-5 text-base',
    lg: 'py-3 px-7 text-lg',
  };

  const buttonClasses = cn(
    'rounded-md inline-flex items-center justify-center transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-shivayan-gold focus:ring-opacity-50',
    buttonVariants[variant],
    buttonSizes[size],
    fullWidth && 'w-full',
    disabled && 'opacity-60 cursor-not-allowed',
    className
  );

  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {buttonContent}
    </motion.button>
  );
};

export default CustomButton;
