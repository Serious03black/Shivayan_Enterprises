
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import PageHeader from "@/components/shared/PageHeader";
import SEO from "@/components/shared/SEO";
import Section from "@/components/shared/Section";
import CustomButton from "@/components/shared/CustomButton";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const portfolioRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Portfolio items staggered animation
    if (portfolioRef.current) {
      const items = portfolioRef.current.querySelectorAll('.portfolio-item');
      
      gsap.fromTo(items,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: portfolioRef.current,
            start: "top 70%",
          }
        }
      );
    }

    // Animate quotes with a floating effect
    if (testimonialRef.current) {
      const quotes = testimonialRef.current.querySelectorAll('.testimonial-quote');
      
      quotes.forEach((quote) => {
        gsap.to(quote, {
          y: "-20px",
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }

    // Horizontal scroll for categories
    const categoriesTrack = document.querySelector('.categories-track');
    if (categoriesTrack) {
      gsap.to(categoriesTrack, {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: categoriesTrack,
          start: "center center",
          end: "+=1000",
          pin: true,
          scrub: 1,
        }
      });
    }
  }, []);

  const portfolioItems = [
    {
      title: "HealthTech Revolution",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      description: "A comprehensive patient management system that transformed healthcare delivery.",
      calligraphyText: "Innovation",
    },
    {
      title: "FinFlow",
      category: "Finance",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80",
      description: "Secure blockchain solution for cross-border financial transactions.",
      calligraphyText: "Security",
    },
    {
      title: "EduConnect",
      category: "Education",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2022&q=80",
      description: "Interactive learning platform connecting students and educators globally.",
      calligraphyText: "Learning",
    },
    {
      title: "RetailPulse",
      category: "Retail",
      image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
      description: "Omnichannel retail solution driving 200% increase in customer engagement.",
      calligraphyText: "Excellence",
    }
  ];

  const testimonials = [
    {
      quote: "Shivayan transformed our business with their innovative approach and attention to detail.",
      author: "Priya Sharma",
      company: "TechVision Global",
      fontStyle: "font-cursive"
    },
    {
      quote: "Their deep understanding of both technology and cultural nuances made all the difference.",
      author: "Rajiv Mehta",
      company: "HealthPlus",
      fontStyle: "font-calligraphy"
    },
    {
      quote: "Working with Shivayan was a seamless experience from concept to execution.",
      author: "Anika Singh",
      company: "EduSphere",
      fontStyle: "font-decorative"
    }
  ];

  return (
    <>
      <SEO 
        title="Portfolio" 
        description="Explore our portfolio of successful projects and see how Shivayan Enterprises has helped businesses transform through technology."
      />
      
      <PageHeader 
        title="Our Portfolio" 
        subtitle="Showcasing Our Successful Projects"
        backgroundImage="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Portfolio Categories */}
      <Section className="overflow-hidden">
        <div className="categories-track w-[200%] relative">
          <div className="flex items-center gap-10 px-4">
            {["All Projects", "Healthcare", "Finance", "Education", "Retail", "Technology", "Manufacturing", "Media", "Non-Profit"].map((category, index) => (
              <div key={index} className={`text-${index === 0 ? '3xl font-bold text-shivayan-purple' : '2xl'} whitespace-nowrap ${index % 2 === 0 ? 'font-hindi' : 'font-decorative'}`}>
                {category}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Portfolio Grid */}
      <Section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div ref={portfolioRef} className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                className="portfolio-item relative group overflow-hidden rounded-lg shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-[400px] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-shivayan-dark-purple/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <div className={`text-3xl font-calligraphy text-shivayan-gold mb-2`}>
                      {item.calligraphyText}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/80 mb-4">{item.description}</p>
                    <span className="inline-block px-4 py-1 bg-shivayan-gold/30 text-white text-sm rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <CustomButton variant="secondary">
              View More Projects
            </CustomButton>
          </div>
        </div>
      </Section>

      {/* Testimonials with Stylish Typography */}
      <Section className="bg-gradient-to-br from-shivayan-purple/5 to-shivayan-gold/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-purple-gold">Client Testimonials</h2>
            <p className="text-lg max-w-2xl mx-auto text-foreground/80">
              Read what our clients have to say about their experience working with Shivayan Enterprises.
            </p>
          </div>
          
          <div ref={testimonialRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="testimonial-quote bg-card p-8 rounded-lg shadow-lg border border-shivayan-purple/10"
              >
                <div className="text-6xl text-shivayan-gold opacity-30 mb-4">❝</div>
                <blockquote className={`text-lg italic mb-6 ${testimonial.fontStyle}`}>
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-shivayan-purple/20 flex items-center justify-center text-shivayan-purple font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <div className="font-bold">{testimonial.author}</div>
                    <div className="text-sm text-foreground/70">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA with Designer Typography */}
      <Section className="bg-shivayan-dark-purple text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="font-calligraphy text-4xl text-shivayan-gold mb-6">Begin Your Journey</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Create Something Extraordinary Together</h2>
          <a 
            href="/contact" 
            className="inline-block px-8 py-3 bg-shivayan-gold text-shivayan-dark-purple rounded-md font-bold hover:bg-white transition-colors duration-300"
          >
            Start a Project
          </a>
        </div>
      </Section>
    </>
  );
};

export default Portfolio;
