
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader = ({ 
  title, 
  subtitle, 
  backgroundImage = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
}: PageHeaderProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    // Text reveal animation for title
    if (titleRef.current) {
      const chars = titleRef.current.innerText.split("");
      titleRef.current.innerHTML = "";
      
      chars.forEach((char, index) => {
        const span = document.createElement("span");
        span.className = "inline-block opacity-0 transform translate-y-8";
        span.style.transitionDelay = `${index * 30}ms`;
        span.innerHTML = char === " " ? "&nbsp;" : char;
        titleRef.current?.appendChild(span);
      });
      
      setTimeout(() => {
        const spans = titleRef.current?.querySelectorAll("span");
        spans?.forEach(span => {
          span.classList.remove("opacity-0", "transform", "translate-y-8");
          span.classList.add("opacity-100", "transition-all", "duration-500", "ease-out");
        });
      }, 100);
    }
    
    // Fade in animation for subtitle
    if (subtitleRef.current) {
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.5 }
      );
    }
  }, [title, subtitle]);

  return (
    <div 
      className="relative bg-shivayan-dark-purple py-20 md:py-32 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(94, 53, 177, 0.85), rgba(126, 87, 194, 0.9)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-shivayan-dark-purple/80 to-shivayan-purple/60"></div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-1/4 -left-16 w-64 h-64 bg-shivayan-gold/20 rounded-full blur-3xl"
        animate={{ 
          x: [0, 10, 0], 
          y: [0, -10, 0],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 8,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 -right-16 w-72 h-72 bg-shivayan-orange/20 rounded-full blur-3xl"
        animate={{ 
          x: [0, -10, 0], 
          y: [0, 10, 0],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 7,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
        >
          <h1 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            {title}
          </h1>
          
          {subtitle && (
            <p 
              ref={subtitleRef}
              className="text-xl text-white/90 max-w-2xl mx-auto"
            >
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PageHeader;
