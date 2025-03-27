import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Wand2, Sparkles, ChevronRight, X, Lightbulb, BarChart2, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const HeroSection = forwardRef<HTMLElement>((props, ref) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [showIdeaVisualizer, setShowIdeaVisualizer] = useState(false);
  const [userIdea, setUserIdea] = useState('');
  const [businessType, setBusinessType] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [visualizationResult, setVisualizationResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Text animation effect
  useEffect(() => {
    if (!textRef.current) return;
    
    const phrases = ["magical", "powerful", "stunning", "extraordinary"];
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeTimer: ReturnType<typeof setTimeout>;
    
    const type = () => {
      const currentPhrase = phrases[currentIndex];
      const speed = isDeleting ? 50 : 150; // Faster when deleting
      
      if (isDeleting) {
        if (textRef.current) {
          textRef.current.textContent = currentPhrase.substring(0, charIndex - 1);
          charIndex--;
        }
        
        if (charIndex === 0) {
          isDeleting = false;
          currentIndex = (currentIndex + 1) % phrases.length;
        }
      } else {
        if (textRef.current) {
          textRef.current.textContent = currentPhrase.substring(0, charIndex + 1);
          charIndex++;
        }
        
        if (charIndex === currentPhrase.length) {
          isDeleting = true;
          typeTimer = setTimeout(type, 1500); // Pause at the end
          return;
        }
      }
      
      typeTimer = setTimeout(type, speed);
    };
    
    type();
    
    return () => clearTimeout(typeTimer);
  }, []);

  const handleVisualizeIdea = () => {
    if (!userIdea.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Generate mock visualization data based on the idea
      const mockResults = {
        implementation: [
          `Responsive ${businessType || 'business'} platform with modern UI/UX`,
          'AI-powered recommendation engine',
          'Real-time analytics dashboard',
          'Secure payment integration',
          'Mobile app companion'
        ],
        benefits: [
          `30-50% increase in ${businessType ? businessType + ' ' : ''}customer engagement`,
          '20-40% reduction in operational costs',
          '24/7 availability and global reach',
          'Data-driven decision making',
          'Competitive advantage in market'
        ],
        timeline: '8-12 weeks',
        technologies: ['React/Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'AWS']
      };
      
      setVisualizationResult(mockResults);
      setIsLoading(false);
    }, 2000);
  };

  const resetVisualizer = () => {
    setUserIdea('');
    setBusinessType('');
    setVisualizationResult(null);
  };

  return (
    <section 
      ref={ref}
      className="relative min-h-[90vh] flex items-center py-16 px-6 overflow-hidden"
    >
      {/* Idea Visualizer Modal */}
      <AnimatePresence>
        {showIdeaVisualizer && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-magic-dark/90 backdrop-blur-lg border border-white/10 rounded-xl max-w-2xl w-full p-6 relative"
            >
              <button 
                onClick={() => {
                  setShowIdeaVisualizer(false);
                  resetVisualizer();
                }}
                className="absolute top-4 right-4 text-white/50 hover:text-white"
              >
                <X size={24} />
              </button>
              
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="text-magic-gold" size={28} />
                <h2 className="text-2xl font-bold text-white">Idea Visualizer</h2>
              </div>
              
              {!visualizationResult ? (
                <>
                  <p className="text-magic-light/80 mb-6">
                    Describe your development idea and we'll show you how we can bring it to life and its potential business impact.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-magic-light/70 mb-2">What type of business do you have?</label>
                      <Input 
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                        placeholder="E.g. E-commerce, SaaS, Restaurant, etc."
                        className="bg-white/5 border-white/10"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-magic-light/70 mb-2">Your idea or requirement</label>
                      <Textarea 
                        value={userIdea}
                        onChange={(e) => setUserIdea(e.target.value)}
                        placeholder="Describe what you want to build or improve..."
                        rows={5}
                        className="bg-white/5 border-white/10"
                      />
                    </div>
                    
                    <Button 
                      onClick={handleVisualizeIdea}
                      disabled={!userIdea.trim() || isLoading}
                      className="mt-4 bg-magic-gold hover:bg-magic-gold/90 text-magic-dark"
                    >
                      {isLoading ? 'Visualizing...' : 'Visualize My Idea'}
                    </Button>
                  </div>
                </>
              ) : (
                <div className="space-y-6">
                  <div className="p-4 bg-magic-accent/10 border border-magic-accent/20 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">Your Idea:</h3>
                    <p className="text-magic-light/90 italic">"{userIdea}"</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                      <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-3">
                        <Rocket className="text-magic-gold" size={20} />
                        Implementation Plan
                      </h3>
                      <ul className="space-y-2">
                        {visualizationResult.implementation.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-magic-light/90">
                            <span className="text-magic-gold mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                      <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-3">
                        <BarChart2 className="text-magic-gold" size={20} />
                        Business Impact
                      </h3>
                      <ul className="space-y-2">
                        {visualizationResult.benefits.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-magic-light/90">
                            <span className="text-magic-gold mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-white/5 p-3 rounded-lg border border-white/10 flex-1 min-w-[200px]">
                      <h4 className="text-sm text-magic-light/70 mb-1">Estimated Timeline</h4>
                      <p className="text-white font-medium">{visualizationResult.timeline}</p>
                    </div>
                    
                    <div className="bg-white/5 p-3 rounded-lg border border-white/10 flex-1 min-w-[200px]">
                      <h4 className="text-sm text-magic-light/70 mb-1">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {visualizationResult.technologies.map((tech, index) => (
                          <span key={index} className="text-xs bg-magic-dark/50 text-magic-light px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button 
                      onClick={resetVisualizer}
                      variant="outline"
                      className="border-white/20 text-white"
                    >
                      Try Another Idea
                    </Button>
                    <Link to="/contact" onClick={() => setShowIdeaVisualizer(false)}>
                      <Button className="bg-magic-gold hover:bg-magic-gold/90 text-magic-dark">
                        Discuss Implementation
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative elements */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-magic-accent/20 rounded-full filter blur-[100px] animate-pulse-subtle" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-magic-gold/10 rounded-full filter blur-[120px] animate-pulse-subtle" />
      
      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-6 animate-float">
              <span className="text-magic-light/90 text-sm font-medium flex items-center">
                <Wand2 className="h-4 w-4 mr-2 text-magic-gold" />
                Web Development Consultancy
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              We create <br />
              <span className="text-gradient">
                <span ref={textRef}>magical</span>
              </span> <br />
              digital experiences
            </h1>
            
            <p className="text-magic-light/80 text-lg md:text-xl mb-8 max-w-lg">
              Transform your ideas into captivating web applications that engage users and drive results for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="bg-magic-gold hover:bg-magic-gold/90 text-magic-dark px-8 py-6 text-lg rounded-full shadow-lg shadow-magic-gold/20 flex items-center gap-2">
                  <span>Get Started</span>
                  <ChevronRight size={18} />
                </Button>
              </Link>
              <Button 
                onClick={() => setShowIdeaVisualizer(true)}
                variant="outline" 
                className="border-white/20 text-red hover:bg-white/10 hover:green-white px-8 py-6 text-lg rounded-full"
              >
                Visualize Your Idea
              </Button>
            </div>
            
            <div className="mt-12 flex items-center">
              <div className="flex -space-x-3">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div 
                    key={index} 
                    className="w-10 h-10 rounded-full border-2 border-magic-dark bg-gradient-to-br from-magic-light/80 to-magic-accent/80"
                  />
                ))}
              </div>
              <div className="ml-4">
                <div className="text-white font-medium">Trusted by 10+ clients</div>
                <div className="text-magic-light/60 text-sm">5.0 ★★★★★ (10+ reviews)</div>
              </div>
            </div>
          </motion.div>
          
          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative z-10"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-magic-gold/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-magic-gold animate-pulse-subtle" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-magic-accent/20 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-magic-accent/40 rounded-full animate-pulse-subtle" />
              </div>
              
              {/* Main image container */}
              <div className="glass-card rounded-3xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-magic-accent/10 to-magic-gold/5 group-hover:opacity-70 transition-opacity duration-500" />
                
                <div className="relative h-[500px] flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1200&q=80" 
                    alt="Web development magic" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay content */}
                  <div className="absolute inset-0 bg-magic-dark/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-10">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-2xl md:text-3xl font-bold text-white mb-4 text-center"
                    >
                      Transforming Ideas into Reality
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="text-magic-light/90 text-center mb-6"
                    >
                      We blend creativity and technology to create extraordinary digital experiences that captivate and convert.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Button 
                        onClick={() => setShowIdeaVisualizer(true)}
                        className="bg-white/90 hover:bg-white text-magic-dark rounded-full"
                      >
                        Visualize Your Idea
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;