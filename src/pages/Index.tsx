
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import SEO from '@/components/shared/SEO';
import CustomButton from '@/components/shared/CustomButton';
import Section from '@/components/shared/Section';
import AnimatedText from '@/components/shared/AnimatedText';
import ScrollReveal from '@/components/shared/ScrollReveal';
import useScrollAnimations from '@/hooks/useScrollAnimations';
import { WaveText, TypewriterText, GradientFlowText } from '@/components/shared/TextEffects';
import { TechIconsCollection } from '@/components/shared/TechIcons';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

const Index = () => {
  // Use our custom hook for scroll animations
  useScrollAnimations();
  
  useEffect(() => {
    // Text reveal animation for features
    const featuresItems = document.querySelectorAll('.feature-item');
    featuresItems.forEach((item, index) => {
      gsap.fromTo(item,
        { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          }
        }
      );
    });
    
    // Typography animations
    const typographyItems = document.querySelectorAll('.typography-item');
    typographyItems.forEach((item, i) => {
      gsap.fromTo(item,
        { opacity: 0, y: 30 },
        { 
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          }
        }
      );
    });
    
    // Advanced animation for hero section
    const heroTimeline = gsap.timeline();
    
    // Only run this animation when the SplitText is loaded
    if (typeof SplitText !== 'undefined') {
      try {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
          const splitTitle = new SplitText(heroTitle, { type: "chars,words" });
          
          heroTimeline
            .from(splitTitle.chars, {
              opacity: 0,
              y: 50,
              rotationX: -90,
              stagger: 0.02,
              duration: 0.8,
              ease: "back.out(1.7)"
            });
        }
      } catch (error) {
        console.error("Error with SplitText:", error);
      }
    }

    // Tech icons floating animation
   
  }, []);

  const features = [
    {
      title: "Innovative Solutions",
      description: "Combining cutting-edge technology with creative thinking to solve complex problems."
    },
    {
      title: "Cultural Heritage",
      description: "Drawing wisdom and values from India's rich cultural traditions."
    },
    {
      title: "Expert Team",
      description: "A diverse team of professionals dedicated to excellence in every project."
    },
    {
      title: "Client-Focused",
      description: "Putting client needs first with responsive communication and tailored solutions."
    },
    {
      title: "Continuous Growth",
      description: "Constantly evolving our skills and knowledge to stay ahead in technology."
    },
    {
      title: "Global Perspective",
      description: "Bringing international expertise while honoring our cultural roots."
    }
  ];

  // Typography examples
  const typographyExamples = [
    {
      text: "Innovation",
      translation: "नवाचार",
      fontClass: "font-cursive",
      description: "Creative thinking and new ideas"
    },
    {
      text: "Heritage",
      translation: "विरासत",
      fontClass: "font-calligraphy",
      description: "Honoring our traditions"
    },
    {
      text: "Excellence",
      translation: "उत्कृष्टता",
      fontClass: "font-marathi",
      description: "Commitment to quality"
    },
    {
      text: "Creativity",
      translation: "रचनात्मकता",
      fontClass: "font-hindi",
      description: "Imaginative solutions"
    },
    {
      text: "Wisdom",
      translation: "ज्ञान",
      fontClass: "font-sanskrit",
      description: "Ancient knowledge"
    },
    {
      text: "Harmony",
      translation: "सामंजस्य",
      fontClass: "font-decorative",
      description: "Balance in all things"
    }
  ];

  // Animation variants for different elements
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  const decorativeVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 0.9, 0.7],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <SEO 
        title="Shivayan Enterprises - Innovation Meets Heritage" 
        description="A forward-thinking software development and IT consulting company blending modern technology with timeless Indian heritage values."
      />

      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-shivayan-dark-purple to-shivayan-purple overflow-hidden"
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-shivayan-purple/80 to-shivayan-dark-purple/90"></div>
        
        {/* Decorative elements with enhanced animations */}
        <motion.div
          className="absolute top-1/4 -left-20 w-80 h-80 bg-shivayan-gold/30 rounded-full blur-3xl"
          variants={decorativeVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-1/3 -right-20 w-96 h-96 bg-shivayan-orange/20 rounded-full blur-3xl"
          variants={decorativeVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
        />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            className="hero-title text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 gsap-title"
            variants={fadeInUp}
          >
            <WaveText text="Welcome to" className="block mb-2" />
            <GradientFlowText 
              text="Shivayan" 
              gradientColors="from-shivayan-gold via-shivayan-orange to-shivayan-yellow"
              className="text-6xl md:text-7xl lg:text-8xl"
            />
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 gsap-paragraph"
            variants={fadeInUp}
          >
            Where <TypewriterText text="Innovation" className="text-shivayan-gold font-bold" /> Meets 
            <TypewriterText text=" Heritage" delay={1000} className="text-shivayan-gold font-bold" />
          </motion.p>
          
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/about">
              <CustomButton 
                variant="primary" 
                size="lg"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                }
              >
                Discover Our Story
              </CustomButton>
            </Link>
            <Link to="/services">
              <CustomButton 
                variant="outline" 
                size="lg"
              >
                Explore Services
              </CustomButton>
            </Link>
          </motion.div>
        </div>
        
        {/* Scroll indicator with enhanced animation */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 7l5 5 5-5"></path>
          </svg>
        </motion.div>
      </motion.div>

      {/* Technology Icons Section */}
      <Section className="tech-section bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-purple-gold">
                <GradientFlowText text="Technologies We Master" />
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg max-w-2xl mx-auto text-foreground/80">
                Our expertise spans across modern web and mobile development technologies to deliver cutting-edge solutions.
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal>
            <TechIconsCollection 
              showLabels={true}
              grid={true}
              animations={true}
              iconSize="lg"
            />
          </ScrollReveal>
        </div>
      </Section>

      {/* Features Section */}
      <Section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-purple-gold gsap-title">
                <WaveText text="Why Choose Shivayan?" />
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg max-w-2xl mx-auto text-foreground/80 gsap-paragraph">
                Our unique approach combines technical excellence with cultural wisdom to deliver exceptional solutions for our clients.
              </p>
            </ScrollReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal 
                key={index}
                delay={index * 0.1} 
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <div className="feature-item bg-background/50 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-shivayan-purple/10 hover:border-shivayan-gold/30 transition-all duration-300 hover:-translate-y-1 h-full">
                  <AnimatedText 
                    text={feature.title} 
                    className="text-xl font-bold mb-4 text-gradient-cyan-purple"
                    type="words"
                  />
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal direction="up" delay={0.5} className="mt-16 text-center">
            <Link to="/contact">
              <CustomButton variant="secondary">
                Contact Us Today
              </CustomButton>
            </Link>
          </ScrollReveal>
        </div>
      </Section>

      {/* Cultural Typography Section */}
      <Section className="bg-gradient-to-br from-shivayan-purple/5 to-shivayan-gold/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-purple-gold">
                <TypewriterText text="Cultural Typography" speed={50} />
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg max-w-2xl mx-auto text-foreground/80">
                Our design philosophy bridges cultures and traditions through typography, celebrating the rich linguistic heritage of India alongside modern global design.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {typographyExamples.map((example, index) => (
              <div key={index} className="typography-item">
                <motion.div
                  className="bg-card p-8 rounded-lg shadow-lg border border-shivayan-purple/10 hover:border-shivayan-gold transition-all duration-300"
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <div className={`text-3xl mb-2 ${example.fontClass}`}>
                    {example.text}
                  </div>
                  <div className="text-2xl mb-4 font-hindi text-shivayan-purple">
                    {example.translation}
                  </div>
                  <p className="text-foreground/80">{example.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-shivayan-purple to-shivayan-dark-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gsap-title">
              <WaveText text="Ready to Transform Your Business?" />
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-white/90 gsap-paragraph">
              Partner with Shivayan Enterprises for innovative solutions that drive growth, efficiency, and success.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <Link to="/contact">
              <CustomButton variant="primary" size="lg">
                Get Started Today
              </CustomButton>
            </Link>
          </ScrollReveal>
        </div>
      </Section>
    </>
  );
};

export default Index;
