import { useEffect, useRef, useState } from "react";

const MagicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
    alpha: number;
    isMoving: boolean;
    velX: number;
    velY: number;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    contextRef.current = ctx;

    // Setup canvas
    const setupCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      
      // Fill with initial background to prevent white flash
      const gradient = ctx.createLinearGradient(0, 0, 0, window.innerHeight);
      gradient.addColorStop(0, 'rgba(26, 31, 44, 1)');
      gradient.addColorStop(1, 'rgba(15, 23, 42, 1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    };

    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = [];
      // Reduce particle count on mobile for better performance
      const isMobile = window.innerWidth < 768;
      const particleCount = isMobile 
        ? Math.min(Math.max(window.innerWidth / 30, 25), 60) 
        : Math.min(Math.max(window.innerWidth / 15, 50), 150);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 2 + 1, // Slightly smaller particles
          speedX: Math.random() * 0.15 - 0.075, // Reduced speed
          speedY: Math.random() * 0.15 - 0.075, // Reduced speed
          color: getRandomColor(),
          alpha: Math.random() * 0.4 + 0.1, // Slightly reduced opacity
          isMoving: false,
          velX: 0,
          velY: 0
        });
      }
      
      return particles;
    };
    
    // Generate a random color with a magical theme
    const getRandomColor = (): string => {
      const colors = [
        'rgba(120, 105, 171, 0.5)',  // Purple (reduced opacity)
        'rgba(112, 161, 255, 0.5)',  // Light Blue (reduced opacity)
        'rgba(72, 123, 195, 0.5)',   // Medium Blue (reduced opacity)
        'rgba(235, 248, 255, 0.4)',  // Very Light Blue (reduced opacity)
        'rgba(249, 200, 70, 0.5)',   // Gold (reduced opacity)
      ];
      
      return colors[Math.floor(Math.random() * colors.length)];
    };

    // Animation loop
    const animate = () => {
      if (!contextRef.current) return;
      
      // Clear canvas with a very subtle background gradient
      const gradient = contextRef.current.createLinearGradient(0, 0, 0, window.innerHeight);
      gradient.addColorStop(0, 'rgba(26, 31, 44, 1)');
      gradient.addColorStop(1, 'rgba(15, 23, 42, 1)');
      
      contextRef.current.fillStyle = gradient;
      contextRef.current.fillRect(0, 0, window.innerWidth, window.innerHeight);
      
      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Reduce interaction radius on mobile
        const interactionRadius = window.innerWidth < 768 ? 80 : 120;
        
        if (distance < interactionRadius) {
          const angle = Math.atan2(dy, dx);
          const force = (interactionRadius - distance) / interactionRadius;
          
          particle.velX -= Math.cos(angle) * force * 0.15; // Reduced force
          particle.velY -= Math.sin(angle) * force * 0.15; // Reduced force
          particle.isMoving = true;
        }
        
        // Apply velocity with damping
        if (particle.isMoving) {
          particle.x += particle.velX;
          particle.y += particle.velY;
          particle.velX *= 0.95;
          particle.velY *= 0.95;
          
          if (Math.abs(particle.velX) < 0.01 && Math.abs(particle.velY) < 0.01) {
            particle.isMoving = false;
          }
        }
        
        // Boundary checking with wrapping
        if (particle.x < 0) particle.x = window.innerWidth;
        if (particle.x > window.innerWidth) particle.x = 0;
        if (particle.y < 0) particle.y = window.innerHeight;
        if (particle.y > window.innerHeight) particle.y = 0;
        
        // Draw particle
        if (contextRef.current) {
          contextRef.current.beginPath();
          contextRef.current.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          contextRef.current.fillStyle = particle.color;
          contextRef.current.fill();
        }
        
        // Connect particles that are close to each other
        // Reduced connection distance on mobile
        const connectionDistance = window.innerWidth < 768 ? 70 : 100;
        
        for (let j = index + 1; j < particlesRef.current.length; j++) {
          const otherParticle = particlesRef.current[j];
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            if (contextRef.current) {
              contextRef.current.beginPath();
              contextRef.current.moveTo(particle.x, particle.y);
              contextRef.current.lineTo(otherParticle.x, otherParticle.y);
              // Reduced opacity for connections
              contextRef.current.strokeStyle = `rgba(235, 248, 255, ${0.02 * (1 - distance / connectionDistance)})`;
              contextRef.current.lineWidth = 0.5;
              contextRef.current.stroke();
            }
          }
        }
      });
      
      frameRef.current = requestAnimationFrame(animate);
    };
    
    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };
    
    // Handle resize
    const handleResize = () => {
      setupCanvas();
      particlesRef.current = initParticles();
    };
    
    // Initialize
    setupCanvas();
    particlesRef.current = initParticles();
    frameRef.current = requestAnimationFrame(animate);
    setIsLoaded(true);
    
    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);
  
  return (
    <>
      {/* Fixed background color to prevent white flash during loading */}
      <div className="fixed top-0 left-0 w-full h-full bg-[#1a1f2c] z-0" 
           style={{ opacity: isLoaded ? 0 : 1, transition: 'opacity 0.5s ease' }} />
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        aria-hidden="true"
      />
    </>
  );
};

export default MagicBackground;
