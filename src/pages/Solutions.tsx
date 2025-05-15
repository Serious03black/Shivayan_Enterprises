
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageHeader from "@/components/shared/PageHeader";
import SEO from "@/components/shared/SEO";
import Section from "@/components/shared/Section";
import ScrollReveal from "@/components/shared/ScrollReveal";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Solutions = () => {
  const solutionsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Animated text reveal for solutions
    if (solutionsRef.current) {
      const solutions = solutionsRef.current.querySelectorAll('.solution-item');
      
      gsap.fromTo(solutions, 
        { y: 50, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: solutionsRef.current,
            start: "top 75%",
          }
        }
      );
    }

    // Process steps animation with horizontal scroll effect
    if (processRef.current) {
      const steps = processRef.current.querySelectorAll('.process-step');
      
      steps.forEach((step, index) => {
        gsap.fromTo(step,
          { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
            }
          }
        );
      });
    }
  }, []);

  const industrySolutions = [
    {
      title: "Healthcare",
      description: "Comprehensive digital solutions for modern healthcare providers, improving patient care and operational efficiency.",
      calligraphyText: "Healing",
      hindiFontText: "स्वास्थ्य"
    },
    {
      title: "Finance",
      description: "Secure, scalable financial technology that transforms traditional banking into innovative digital experiences.",
      calligraphyText: "Prosperity",
      hindiFontText: "समृद्धि"
    },
    {
      title: "Education",
      description: "Interactive learning platforms that make education more accessible, engaging, and effective for all.",
      calligraphyText: "Knowledge",
      hindiFontText: "ज्ञान"
    },
    {
      title: "Retail",
      description: "Omnichannel commerce solutions that create seamless shopping experiences across physical and digital touchpoints.",
      calligraphyText: "Commerce",
      hindiFontText: "व्यापार"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We begin by understanding your business, challenges, and vision through in-depth consultation.",
      fontClass: "font-calligraphy"
    },
    {
      number: "02",
      title: "Strategy",
      description: "Our experts develop a tailored roadmap that aligns technology solutions with your business objectives.",
      fontClass: "font-cursive"
    },
    {
      number: "03",
      title: "Implementation",
      description: "We bring your solution to life with agile development methodologies and continuous collaboration.",
      fontClass: "font-decorative"
    },
    {
      number: "04",
      title: "Evolution",
      description: "We provide ongoing support and iterative improvements to ensure your solution grows with your business.",
      fontClass: "font-marathi"
    }
  ];

  return (
    <>
      <SEO 
        title="Our Solutions" 
        description="Discover industry-specific solutions designed by Shivayan Enterprises for healthcare, finance, retail, and more."
      />
      
      <PageHeader 
        title="Our Solutions" 
        subtitle="Industry-specific Technology Solutions"
        backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Industry Solutions Section */}
      <Section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-purple-gold">Industry-Specific Solutions</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg max-w-2xl mx-auto text-foreground/80">
                We deliver tailored technology solutions that address the unique challenges and opportunities in your industry.
              </p>
            </ScrollReveal>
          </div>
          
          <div ref={solutionsRef} className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {industrySolutions.map((solution, index) => (
              <div key={index} className="solution-item bg-card p-8 rounded-lg shadow-lg border border-shivayan-purple/10 hover:border-shivayan-gold/30 transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 overflow-hidden">
                  <div className={`text-4xl font-calligraphy text-shivayan-purple mb-2`}>
                    {solution.calligraphyText}
                  </div>
                  <div className="text-xl font-hindi text-shivayan-gold">
                    {solution.hindiFontText}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-foreground/80">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Section with Calligraphy */}
      <Section className="bg-gradient-to-br from-shivayan-purple/10 to-shivayan-gold/10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-cyan-purple">Our Process</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg max-w-2xl mx-auto text-foreground/80">
                A thoughtful approach that combines ancient wisdom with modern technological excellence.
              </p>
            </ScrollReveal>
          </div>
          
          <div ref={processRef} className="max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className={`process-step flex flex-col md:flex-row items-start md:items-center gap-6 mb-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-shivayan-purple to-shivayan-gold rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{step.number}</span>
                </div>
                <div>
                  <div className={`${step.fontClass} text-3xl mb-2 text-shivayan-purple`}>{step.title}</div>
                  <p className="text-lg text-foreground/80">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-gradient-to-r from-shivayan-purple to-shivayan-dark-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-decorative">Transform Your Business Today</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-white/90">
              Let's collaborate to create innovative solutions that drive your business forward.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-shivayan-gold text-shivayan-dark-purple px-8 py-3 rounded-md font-bold hover:bg-white transition-colors duration-300"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Solutions;
