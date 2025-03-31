
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Code, Rocket, Stars, Sparkles, Palette, Database, Smartphone, Gauge, Globe, Zap, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies like React, Next.js, and more.",
      color: "from-blue-600 to-blue-400",
      features: [
        "Custom web application development",
        "E-commerce solutions",
        "Progressive web apps (PWAs)",
        "Content management systems",
        "Web portal development"
      ]
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that enhance user experience and strengthen your brand identity.",
      color: "from-purple-600 to-purple-400",
      features: [
        "User interface design",
        "User experience optimization",
        "Wireframing and prototyping",
        "Design systems",
        "Brand identity design"
      ]
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Digital Strategy",
      description: "Strategic planning and consultation to align your digital presence with your business objectives.",
      color: "from-amber-500 to-amber-300",
      features: [
        "Digital transformation consulting",
        "Product strategy",
        "Growth planning",
        "Technical roadmapping",
        "Digital marketing integration"
      ]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "CMS Solutions",
      description: "Powerful content management systems that make updating your website simple and efficient.",
      color: "from-green-600 to-green-400",
      features: [
        "WordPress development",
        "Headless CMS integration",
        "Custom CMS development",
        "CMS migration services",
        "Content strategy"
      ]
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Development",
      description: "Cross-platform mobile applications that provide a seamless experience across all devices.",
      color: "from-red-600 to-red-400",
      features: [
        "iOS app development",
        "Android app development",
        "React Native applications",
        "Mobile UI/UX design",
        "App maintenance and support"
      ]
    },
    {
      icon: <Gauge className="h-6 w-6" />,
      title: "Performance Optimization",
      description: "Speed optimization services to ensure your website loads quickly and ranks higher in search results.",
      color: "from-cyan-600 to-cyan-400",
      features: [
        "Website speed optimization",
        "Core Web Vitals improvement",
        "Server-side optimization",
        "Image and asset optimization",
        "Performance monitoring"
      ]
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "SEO & Analytics",
      description: "Search engine optimization and analytics to improve your visibility and understand user behavior.",
      color: "from-emerald-600 to-emerald-400",
      features: [
        "Technical SEO audits",
        "Content optimization",
        "Analytics setup and monitoring",
        "Conversion tracking",
        "Regular performance reporting"
      ]
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "API Development",
      description: "Custom API development and integration to connect your systems and streamline your workflows.",
      color: "from-orange-600 to-orange-400",
      features: [
        "RESTful API development",
        "GraphQL API development",
        "Third-party API integration",
        "API documentation",
        "API security and authentication"
      ]
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "DevOps & Hosting",
      description: "DevOps services and hosting solutions to ensure your applications are reliable, secure, and scalable.",
      color: "from-indigo-600 to-indigo-400",
      features: [
        "Cloud infrastructure setup",
        "CI/CD pipeline implementation",
        "Docker containerization",
        "Server monitoring and maintenance",
        "Backup and disaster recovery"
      ]
    }
  ];

  return (
    <div className="animate-page-enter">
      {/* Hero Section */}
      <section className="py-24 md:py-32 px-6 relative">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-magic-accent/20 rounded-full filter blur-[100px] animate-pulse-subtle" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-magic-gold/10 rounded-full filter blur-[120px] animate-pulse-subtle" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          < div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-magic-gold/10 mb-3">
              <span className="text-magic-gold text-sm font-medium flex items-center justify-center">
                <Stars className="h-3.5 w-3.5 mr-1" />
                Our Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Magical <span className="text-gradient">Digital Solutions</span>
            </h1>
            <p className="text-magic-light/80 text-lg md:text-xl mb-8">
              We blend creativity with technical expertise to create extraordinary digital experiences that captivate and convert.
            </p>
          </ div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            < div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-magic-light/70 mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-5">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-magic-gold mt-1 flex-shrink-0" />
                      <span className="text-magic-light/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-magic-dark opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-br from-magic-accent/20 via-transparent to-magic-gold/10" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          < div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full bg-magic-gold/10 mb-3"
          >
            <span className="text-magic-gold text-sm font-medium flex items-center justify-center">
              <Sparkles className="h-3.5 w-3.5 mr-1" />
              Ready to Get Started?
            </span>
          </ div>
          
          < h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Let's Bring Your <span className="text-gradient-gold">Vision to Life</span>
          </ h2>
          
          < p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-magic-light/90 text-lg md:text-xl max-w-3xl mx-auto mb-10"
          >
            Contact us today to discuss your project and discover how our magical digital solutions can help your business grow.
          </ p>
          
          < div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link to="/contact">
              <Button className="bg-magic-gold hover:bg-magic-gold/90 text-magic-dark px-8 py-6 text-lg rounded-full shadow-lg shadow-magic-gold/20">
                Contact Us
              </Button>
            </Link>
          </ div>
        </div>
      </section>
    </div>
  );
};

export default Services;
