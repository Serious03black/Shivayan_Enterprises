
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import PageHeader from "@/components/shared/PageHeader";
import SEO from "@/components/shared/SEO";
import Section from "@/components/shared/Section";
import CustomButton from '@/components/shared/CustomButton';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    // Service card animations
    gsap.fromTo(".service-card", 
      { y: 50, opacity: 0 }, 
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.2, 
        duration: 0.8,
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 75%",
        }
      }
    );
    
    // Process steps animation
    gsap.fromTo(".process-step",
      { x: -30, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        stagger: 0.3, 
        duration: 0.6,
        scrollTrigger: {
          trigger: ".process-section",
          start: "top 80%",
        }
      }
    );
    
    // Technology logos animation
    gsap.fromTo(".tech-item",
      { y: 20, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.1, 
        duration: 0.4,
        scrollTrigger: {
          trigger: ".tech-section",
          start: "top 85%",
        }
      }
    );
  }, []);

  // Services data
  const services = [
    {
      title: "Custom Software Development",
      description: "We design and build tailored software solutions that address your specific business challenges and opportunities. Our development process ensures high-quality, scalable, and maintainable applications.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      features: [
        "Custom web & mobile applications",
        "Enterprise software solutions",
        "Legacy system modernization",
        "API development & integration"
      ]
    },
    {
      title: "IT Consulting",
      description: "Our consulting services help you navigate complex technology decisions with confidence. We provide strategic guidance on digital transformation, technology stack selection, and IT roadmap development.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
      features: [
        "Digital transformation strategy",
        "Technology assessment & roadmapping",
        "Process optimization",
        "IT governance & compliance"
      ]
    },
    {
      title: "AI & Machine Learning",
      description: "Leverage the power of artificial intelligence to gain insights, automate processes, and create new opportunities. Our AI solutions are built with explainability and ethical considerations at their core.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a9 9 0 0 1 9 9c0 3.086-1.243 5.887-3.257 7.93L12 24l-5.743-5.07A9 9 0 0 1 3 11a9 9 0 0 1 9-9Z"></path>
          <circle cx="12" cy="11" r="3"></circle>
        </svg>
      ),
      features: [
        "Predictive analytics",
        "Computer vision solutions",
        "Natural language processing",
        "AI-powered automation"
      ]
    },
    {
      title: "Cloud Solutions",
      description: "Transform your infrastructure with our comprehensive cloud services. We help you migrate, optimize, and secure your applications in the cloud for maximum performance and cost-efficiency.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
        </svg>
      ),
      features: [
        "Cloud migration & architecture",
        "Multi-cloud management",
        "Serverless applications",
        "DevOps & CI/CD pipelines"
      ]
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with our comprehensive cybersecurity services. We help identify vulnerabilities, implement robust security measures, and develop ongoing security strategies.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      ),
      features: [
        "Security assessments & audits",
        "Penetration testing",
        "Security strategy development",
        "Compliance & risk management"
      ]
    },
    {
      title: "UI/UX Design",
      description: "Create exceptional user experiences with our design services. We combine aesthetics with functionality to build interfaces that are intuitive, engaging, and effective at achieving business goals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
      ),
      features: [
        "User research & journey mapping",
        "Wireframing & prototyping",
        "Visual design & branding",
        "Usability testing"
      ]
    }
  ];

  // Process steps
  const processSteps = [
    {
      title: "Discovery",
      description: "We start by understanding your business goals, challenges, and requirements through in-depth consultations."
    },
    {
      title: "Strategy",
      description: "Based on our findings, we develop a comprehensive strategy and roadmap for your technology solution."
    },
    {
      title: "Design",
      description: "Our team creates detailed designs and prototypes that align with your brand and user expectations."
    },
    {
      title: "Development",
      description: "We build your solution using agile methodologies, ensuring quality and regular communication throughout."
    },
    {
      title: "Testing",
      description: "Rigorous testing ensures your solution works flawlessly across all intended platforms and scenarios."
    },
    {
      title: "Deployment",
      description: "We carefully launch your solution and provide training to ensure a smooth transition."
    },
    {
      title: "Support",
      description: "Our relationship continues with ongoing support, maintenance, and optimization services."
    }
  ];

  // Technology logos
  const technologies = [
    "React", "Angular", "Vue.js", "Node.js", "Python", "Java", "AWS", "Azure", 
    "Google Cloud", "Docker", "Kubernetes", "TensorFlow", "PyTorch"
  ];

  return (
    <>
      <SEO 
        title="Our Services" 
        description="Explore the comprehensive range of software development and IT consulting services offered by Shivayan Enterprises."
      />
      
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive Software Development and IT Consulting Solutions"
        backgroundImage="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Services Overview */}
        <Section>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-purple-gold">Empowering Your Business Through Technology</h2>
              <p className="text-lg text-foreground/80">
                At Shivayan Enterprises, we offer a comprehensive range of services designed to help businesses innovate, optimize, and transform through technology. Each service is delivered with our unique blend of technical expertise and cultural wisdom.
              </p>
            </div>
            
            <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="service-card bg-background/50 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-shivayan-purple/10 hover:border-shivayan-gold/30 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="text-shivayan-purple mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-foreground/70 mb-6">{service.description}</p>
                  <div className="mt-auto">
                    <h4 className="font-bold mb-2 text-shivayan-gold">Key Features:</h4>
                    <ul className="list-disc list-inside text-foreground/70">
                      {service.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Our Process Section */}
        <Section className="process-section bg-gradient-to-br from-shivayan-purple/10 to-shivayan-gold/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-cyan-purple">Our Process</h2>
              <p className="text-lg text-foreground/80">
                We follow a systematic and collaborative approach to ensure that every project delivers exceptional results that align with your business objectives.
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Process timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-shivayan-purple to-shivayan-gold transform md:translate-x-px"></div>
              
              {/* Process steps */}
              <div className="space-y-16">
                {processSteps.map((step, index) => (
                  <div key={index} className="process-step relative">
                    <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                      {/* Timeline dot */}
                      <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-shivayan-gold rounded-full transform -translate-x-1/2 md:-translate-x-1/2 shadow-lg z-10"></div>
                      
                      {/* Content */}
                      <div className="md:w-1/2 pl-10 md:pl-0 md:px-8">
                        <div className={`bg-background/70 backdrop-blur-sm p-6 rounded-lg shadow-md border border-shivayan-purple/10 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                          <h3 className="text-xl font-bold mb-2 text-gradient-cyan-purple">{step.title}</h3>
                          <p className="text-foreground/70">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Technologies Section */}
        <Section className="tech-section">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gradient-purple-gold">Technologies We Work With</h2>
            
            <div className="flex flex-wrap justify-center gap-6">
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="tech-item px-6 py-3 bg-background/50 backdrop-blur-sm rounded-full shadow-md border border-shivayan-purple/10 hover:border-shivayan-gold/30 transition-all duration-300"
                >
                  <span className="font-medium">{tech}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-16">
              <p className="text-lg text-foreground/80 mb-6">
                Ready to discuss your project or learn more about our services?
              </p>
              <Link to="/contact">
                <CustomButton variant="primary" size="lg">
                  Contact Our Team
                </CustomButton>
              </Link>
            </div>
          </div>
        </Section>
      </motion.div>
    </>
  );
};

export default Services;
