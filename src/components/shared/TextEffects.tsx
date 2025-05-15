
import React, { useState, useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

// Wave Text Animation - Characters wave in a flowing motion
export const WaveText: React.FC<{
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}> = ({ text, className, delay = 0, duration = 0.05 }) => {
  const characters = Array.from(text);
  
  const container: Variants = {
    hidden: {},
    visible: (i = 1) => ({
      transition: { staggerChildren: duration, delayChildren: delay * i }
    }),
  };
  
  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
    }
  };

  return (
    <motion.span
      className={cn("inline-block", className)}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Typewriter effect - Types text character by character
export const TypewriterText: React.FC<{
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}> = ({ text, className, speed = 40, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
    
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, currentIndex === 0 ? delay : speed);
    }
    
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, text, speed, delay]);

  return (
    <span className={cn("inline-block", className)}>
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[2px] h-[1em] bg-current ml-[1px] align-middle"
      />
    </span>
  );
};

// Gradient text that moves/flows
export const GradientFlowText: React.FC<{
  text: string;
  className?: string;
  gradientColors?: string;
}> = ({ text, className, gradientColors = "from-shivayan-purple via-shivayan-gold to-shivayan-orange" }) => {
  return (
    <span className={cn(`bg-gradient-to-r bg-clip-text text-transparent animate-gradient-flow bg-[size:200%]`, gradientColors, className)}>
      {text}
    </span>
  );
};

// Emphasize specific words with a highlight effect
export const HighlightWords: React.FC<{
  text: string;
  highlight: string[];
  highlightClassName?: string;
  className?: string;
}> = ({ text, highlight, highlightClassName = "text-shivayan-gold font-bold", className }) => {
  const parts = text.split(new RegExp(`(${highlight.join('|')})`, 'gi'));
  
  return (
    <span className={className}>
      {parts.map((part, i) => 
        highlight.some(word => part.toLowerCase() === word.toLowerCase())
          ? <motion.span 
              key={i} 
              className={highlightClassName}
              initial={{ backgroundColor: "rgba(255, 215, 0, 0.2)" }}
              animate={{ backgroundColor: "rgba(255, 215, 0, 0)" }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              {part}
            </motion.span>
          : <span key={i}>{part}</span>
      )}
    </span>
  );
};

// Reveal text on scroll
export const RevealText: React.FC<{
  text: string;
  className?: string;
}> = ({ text, className }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <span ref={ref} className={cn("inline-block overflow-hidden", className)}>
      <motion.span
        className="inline-block"
        initial={{ y: '100%' }}
        animate={isVisible ? { y: 0 } : { y: '100%' }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {text}
      </motion.span>
    </span>
  );
};

export default {
  WaveText,
  TypewriterText,
  GradientFlowText,
  HighlightWords,
  RevealText
};
