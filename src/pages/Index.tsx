import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wand2, Rocket, Stars, Shield, Code, Sparkles } from 'lucide-react';
import ThreeScene from '../components/ThreeScene';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import { Button } from '@/components/ui/button';
import { Analytics } from "@vercel/analytics/react"
const Index = () => {
  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    services: useRef<HTMLDivElement>(null),
    why: useRef<HTMLDivElement>(null),
    cta: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <HeroSection ref={sectionRefs.hero} />
      {/* Featured Clients */}
      <div className="py-12 md:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-magic-light/60 text-sm uppercase tracking-wider mb-6">
            Goverment Registered Since 2025
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          </div>
        </div>
      </div>
      
      <ServicesSection ref={sectionRefs.services} />
      
      {/* Why Choose Us */}
      <section 
        ref={sectionRefs.why}
        className="py-20 md:py-28 px-6 transition-opacity duration-700 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-magic-accent/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-block px-3 py-1 rounded-full bg-magic-gold/10 mb-3"
            >
              <span className="text-magic-gold text-sm font-medium flex items-center">
                <Sparkles className="h-3.5 w-3.5 mr-1" />
                Our Magical Approach
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              Why Choose <span className="text-gradient">MagicDev</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-magic-light/80 text-lg max-w-2xl mx-auto"
            >
              We combine magical creativity with technical excellence to deliver web solutions that exceed expectations.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Stars className="h-6 w-6 text-magic-gold" />,
                title: "Premium Quality",
                description: "We craft exceptional digital experiences with meticulous attention to detail and superior craftsmanship."
              },
              {
                icon: <Rocket className="h-6 w-6 text-magic-gold" />,
                title: "Fast Performance",
                description: "Lightning-fast websites optimized for speed to provide an exceptional user experience."
              },
              {
                icon: <Code className="h-6 w-6 text-magic-gold" />,
                title: "Clean Code",
                description: "Well-structured, maintainable code that follows best practices for long-term sustainability."
              },
              {
                icon: <Shield className="h-6 w-6 text-magic-gold" />,
                title: "Secure Solutions",
                description: "Security-first approach to protect your data and customers from potential threats."
              },
              {
                icon: <Wand2 className="h-6 w-6 text-magic-gold" />,
                title: "Magical UX Design",
                description: "Intuitive user experiences that delight users and keep them engaged with your brand."
              },
              {
                icon: <Sparkles className="h-6 w-6 text-magic-gold" />,
                title: "Innovative Technology",
                description: "Cutting-edge technology solutions that keep your business ahead of the competition."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 group"
              >
                <div className="w-12 h-12 rounded-lg bg-magic-dark flex items-center justify-center mb-4 group-hover:bg-magic-gold/20 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-magic-light/70">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 3D Showcase Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-magic-accent/10 mb-3">
              <span className="text-magic-accent text-sm font-medium flex items-center">
                <h1 className="h-3.5 w-3.5 mr-1" />
                Interactive Experiences
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Magical 3D Web <br/>
              <span className="text-gradient">Experiences</span>
            </h2>
            <p className="text-magic-light/80 mb-8 text-lg">
              We create immersive 3D experiences that captivate your audience and make your brand stand out from the competition.
            </p>
            <div className="space-y-4">
              {[
                "Interactive product showcases",
                "Immersive storytelling experiences",
                "Magical 3D animations and effects",
                "WebGL and Three.js expertise"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-magic-gold/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-magic-gold" />
                  </div>
                  <p className="text-magic-light/90">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link to="/services">
                <Button variant="outline" className="border-magic-gold/30 text-magic-gold hover:bg-magic-gold/10 hover:text-magic-gold">
                  Explore Our 3D Services
                </Button>
              </Link>
            </div>
          </div>
          
          
        </div>
      </section>
      
      {/* CTA Section */}
      <section 
        ref={sectionRefs.cta}
        className="py-20 md:py-32 px-6 transition-opacity duration-700 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-magic-dark opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-br from-magic-accent/20 via-transparent to-magic-gold/10" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-block px-3 py-1 rounded-full bg-magic-gold/10 mb-3"
          >
            <span className="text-magic-gold text-sm font-medium flex items-center justify-center">
              <Sparkles className="h-3.5 w-3.5 mr-1" />
              Ready to Transform Your Digital Presence?
            </span>
          </div>
          
          <h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Let's Create <span className="text-gradient-gold">Magic</span> Together
          </h2>
          
          <p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-magic-light/90 text-lg md:text-xl max-w-3xl mx-auto mb-10"
          >
            Transform your ideas into extraordinary digital experiences with our magical web development solutions.
          </p>
          
          <div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <Button className="bg-magic-gold hover:bg-magic-gold/90 text-magic-dark px-8 py-6 text-lg rounded-full shadow-lg shadow-magic-gold/20">
                Start Your Project
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-lg rounded-full">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;