
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  type?: 'words' | 'chars' | 'simple';
}

const AnimatedText = ({ 
  text, 
  className = "", 
  delay = 0,
  duration = 0.05,
  once = true,
  type = 'simple'
}: AnimatedTextProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (type === 'simple') return;
    
    if (textRef.current && type === 'chars') {
      const chars = textRef.current.innerText.split("");
      textRef.current.innerHTML = "";
      
      chars.forEach((char, index) => {
        const span = document.createElement("span");
        span.className = "inline-block opacity-0 transform translate-y-8";
        span.style.transitionDelay = `${index * 30 + (delay * 1000)}ms`;
        span.innerHTML = char === " " ? "&nbsp;" : char;
        textRef.current?.appendChild(span);
      });
      
      setTimeout(() => {
        const spans = textRef.current?.querySelectorAll("span");
        spans?.forEach(span => {
          span.classList.remove("opacity-0", "transform", "translate-y-8");
          span.classList.add("opacity-100", "transition-all", "duration-500", "ease-out");
        });
      }, 100);
    }
    
    if (textRef.current && type === 'words') {
      const words = textRef.current.innerText.split(" ");
      textRef.current.innerHTML = "";
      
      words.forEach((word, index) => {
        const span = document.createElement("span");
        span.className = "inline-block opacity-0 transform translate-y-8 mr-1";
        span.style.transitionDelay = `${index * 80 + (delay * 1000)}ms`;
        span.innerText = word;
        textRef.current?.appendChild(span);
      });
      
      setTimeout(() => {
        const spans = textRef.current?.querySelectorAll("span");
        spans?.forEach(span => {
          span.classList.remove("opacity-0", "transform", "translate-y-8");
          span.classList.add("opacity-100", "transition-all", "duration-500", "ease-out");
        });
      }, 100);
    }
  }, [text, delay, type]);

  if (type === 'simple') {
    const words = text.split(" ");
    const container = {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: duration, delayChildren: delay * i }
      })
    };
    
    const child = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100
        }
      }
    };

    return (
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        className={className}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={child}
            className="inline-block mr-1"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  return (
    <div ref={textRef} className={className}>
      {text}
    </div>
  );
};

export default AnimatedText;
