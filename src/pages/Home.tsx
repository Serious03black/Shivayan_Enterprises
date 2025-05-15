import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomButton from '@/components/shared/CustomButton';
import Section from '@/components/shared/Section';
import SEO from '@/components/shared/SEO';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const typographyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Services section animation
    if (servicesRef.current) {
      const serviceItems = servicesRef.current.querySelectorAll('.service-item');
      
      gsap.fromTo(serviceItems, 
        { y: 50, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 75%",
          }
        }
      );
    }

    // Typography animation
    if (typographyRef.current) {
      const typographyItems = typographyRef.current.querySelectorAll('.typography-item');
      
      gsap.fromTo(typographyItems, 
        { y: 30, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: typographyRef.current,
            start: "top 80%",
          }
        }
      );
    }

    // Testimonials animation
    if (testimonialRef.current) {
      gsap.fromTo(testimonialRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: testimonialRef.current,
            start: "top 80%",
          }
        }
      );
    }

    // Stats animation
    if (statsRef.current) {
      const statItems = statsRef.current.querySelectorAll('.stat-item');
      
      gsap.fromTo(statItems, 
        { scale: 0.9, opacity: 0 }, 
        { 
          scale: 1, 
          opacity: 1, 
          stagger: 0.2,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 75%",
          }
        }
      );
    }
  }, []);

  const services = [
    {
      title: "Custom Software Development",
      description: "Tailor-made software solutions designed specifically to meet your business needs and challenges.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      title: "IT Consulting",
      description: "Expert guidance to optimize your technology infrastructure and align IT with business goals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    },
    {
      title: "AI & Machine Learning",
      description: "Harness the power of artificial intelligence to gain insights, automate processes, and drive innovation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a9 9 0 0 1 9 9c0 3.086-1.243 5.887-3.257 7.93L12 24l-5.743-5.07A9 9 0 0 1 3 11a9 9 0 0 1 9-9Z"></path>
          <circle cx="12" cy="11" r="3"></circle>
        </svg>
      )
    },
    {
      title: "Cloud Solutions",
      description: "Secure, scalable cloud infrastructure and migration services to modernize your operations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
        </svg>
      )
    }
  ];

  const typographyExamples = [
    {
      text: "Innovation",
      translation: "नवाचार",
      fontClass: "font-cursive",
      language: "English/Hindi",
      description: "Creative thinking and new ideas"
    },
    {
      text: "Heritage",
      translation: "विरासत",
      fontClass: "font-calligraphy",
      language: "English/Hindi",
      description: "Honoring our traditions"
    },
    {
      text: "Excellence",
      translation: "उत्कृष्टता",
      fontClass: "font-marathi",
      language: "English/Marathi",
      description: "Commitment to quality"
    },
    {
      text: "Creativity",
      translation: "रचनात्मकता",
      fontClass: "font-hindi",
      language: "English/Hindi",
      description: "Imaginative solutions"
    },
    {
      text: "Wisdom",
      translation: "ज्ञान",
      fontClass: "font-sanskrit",
      language: "English/Sanskrit",
      description: "Ancient knowledge"
    },
    {
      text: "Harmony",
      translation: "सामंजस्य",
      fontClass: "font-decorative",
      language: "English/Hindi",
      description: "Balance in all things"
    }
  ];

  return (
    <>
      <SEO title="Home" />

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-shivayan-dark-purple via-shivayan-purple to-shivayan-gold opacity-90"></div>
        
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -left-40 w-96 h-96 bg-shivayan-gold/30 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-40 -right-40 w-96 h-96 bg-shivayan-orange/30 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Where <span className="text-gradient-orange-yellow">Innovation</span> Meets <span className="text-gradient-orange-yellow">Heritage</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Building cutting-edge software solutions that blend modern technology with the timeless wisdom of Indian heritage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link to="/contact">
                <CustomButton 
                  variant="primary" 
                  size="lg"
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  }
                >
                  Get Started
                </CustomButton>
              </Link>
              <Link to="/portfolio">
                <CustomButton 
                  variant="outline" 
                  size="lg"
                >
                  View Our Work
                </CustomButton>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 8, 0] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </motion.div>
      </div>

      {/* Cultural Typography Section */}
      <Section className="bg-gradient-to-br from-shivayan-purple/5 to-shivayan-gold/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-gradient-purple-gold"
            >
              Cultural Typography
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg max-w-2xl mx-auto text-foreground/80"
            >
              Our design philosophy bridges cultures and traditions through typography, celebrating the rich linguistic heritage of India alongside modern global design.
            </motion.p>
          </div>

          <div ref={typographyRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-foreground/70">{example.language}</span>
                  </div>
                  <p className="text-foreground/80">{example.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section className="bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-purple-gold">
                Who We Are
              </h2>
              <p className="text-lg mb-6 text-foreground/80">
                Shivayan Enterprises is a forward-thinking software development and IT consulting company that combines cutting-edge technology with the rich heritage and values of India.
              </p>
              <p className="text-lg mb-8 text-foreground/80">
                We believe in creating software solutions that are not just efficient and innovative, but also built on the foundations of trust, respect, and excellence that are deeply rooted in our cultural ethos.
              </p>
              <Link to="/about">
                <CustomButton 
                  variant="secondary" 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  }
                >
                  Learn More About Us
                </CustomButton>
              </Link>
            </motion.div>
          </div>
          
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-shivayan-gold/30 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-shivayan-purple/30 rounded-full blur-xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Shivayan team working together" 
                  className="w-full h-auto rounded-lg shadow-xl relative z-10" 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section className="bg-gradient-to-br from-shivayan-purple/10 to-shivayan-gold/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-cyan-purple">
            Our Services
          </h2>
          <p className="text-lg text-foreground/80">
            We provide a comprehensive range of services to help businesses innovate, optimize, and transform through technology.
          </p>
        </div>
        
        <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-item bg-background/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-shivayan-purple/10 hover:border-shivayan-gold/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="text-shivayan-purple mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/services">
            <CustomButton variant="secondary">
              Explore All Services
            </CustomButton>
          </Link>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-shivayan-dark-purple text-white">
        <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="stat-item text-center p-6">
            <div className="text-5xl font-bold mb-2 text-shivayan-gold">200+</div>
            <div className="text-xl font-medium">Projects Completed</div>
          </div>
          <div className="stat-item text-center p-6">
            <div className="text-5xl font-bold mb-2 text-shivayan-orange">50+</div>
            <div className="text-xl font-medium">Expert Developers</div>
          </div>
          <div className="stat-item text-center p-6">
            <div className="text-5xl font-bold mb-2 text-shivayan-yellow">15+</div>
            <div className="text-xl font-medium">Countries Served</div>
          </div>
          <div className="stat-item text-center p-6">
            <div className="text-5xl font-bold mb-2 text-shivayan-cyan">98%</div>
            <div className="text-xl font-medium">Client Satisfaction</div>
          </div>
        </div>
      </Section>

      {/* Testimonial Section */}
      <Section className="bg-background">
        <div ref={testimonialRef} className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-orange-yellow">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-shivayan-purple/5 to-shivayan-gold/5 p-8 md:p-12 rounded-2xl shadow-lg relative">
            <div className="absolute -top-4 -left-4 text-6xl text-shivayan-gold opacity-50">❝</div>
            <div className="absolute -bottom-4 -right-4 text-6xl text-shivayan-gold opacity-50 transform rotate-180">❝</div>
            
            <blockquote className="text-lg md:text-xl italic text-foreground/90 mb-8 relative z-10">
              Shivayan Enterprises transformed our business with their innovative software solutions. Their team's deep technical expertise combined with their understanding of our business needs led to a product that exceeded our expectations. What sets them apart is their commitment to excellence and the values they bring to every project.
            </blockquote>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-shivayan-purple/20 flex items-center justify-center text-shivayan-purple font-bold">
                AR
              </div>
              <div>
                <div className="font-bold">Arjun Reddy</div>
                <div className="text-sm text-foreground/70">CTO, TechVision Global</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-shivayan-purple to-shivayan-dark-purple text-white">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Partner with Shivayan Enterprises and experience the perfect blend of innovation, expertise, and cultural values.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link to="/contact">
              <CustomButton 
                variant="primary" 
                size="lg"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                }
              >
                Contact Us Today
              </CustomButton>
            </Link>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Home;
