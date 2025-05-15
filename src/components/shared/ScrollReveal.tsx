
import { ReactNode, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  threshold?: number;
  duration?: number;
  distance?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  once?: boolean;
}

const ScrollReveal = ({ 
  children, 
  width = "fit-content",
  delay = 0,
  threshold = 0.1,
  duration = 0.5,
  distance = 50,
  direction = 'up',
  className = "",
  once = true
}: ScrollRevealProps) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });
  
  // Define movement based on direction
  let initial = {};
  
  switch (direction) {
    case 'up':
      initial = { y: distance, opacity: 0 };
      break;
    case 'down':
      initial = { y: -distance, opacity: 0 };
      break;
    case 'left':
      initial = { x: distance, opacity: 0 };
      break;
    case 'right':
      initial = { x: -distance, opacity: 0 };
      break;
    case 'none':
      initial = { opacity: 0 };
      break;
    default:
      initial = { y: distance, opacity: 0 };
  }
  
  useEffect(() => {
    if (isInView) {
      controls.start({ 
        x: 0, 
        y: 0, 
        opacity: 1,
        transition: {
          duration,
          delay, 
          ease: [0.25, 0.1, 0.25, 1]
        }
      });
    }
  }, [isInView, controls, delay, duration]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ width }}
      initial={initial}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
