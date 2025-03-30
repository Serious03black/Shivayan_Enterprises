import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Award, BookOpen, Briefcase, Lightbulb, Heart, Sparkles, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import tejas from "../Assets/image.png";
import prathmesh from "../Assets/prathmesh.jpg";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const team = [
    {
      name: "Prathmesh Uchit",
      role: "Co-Founder & CEO",
      image: prathmesh,
      bio: "Technology visionary with expertise in full-stack development and digital transformation. Leads strategic direction and client relationships.",
      linkedin: "https://www.linkedin.com/in/prathmesh-uchit-884a36222",
      instagram: "https://www.instagram.com/the_serious_bleck"
    },
    {
      name: "Tejas Surse",
      role: "Co-Founder & CTO",
      image: tejas,
      bio: "Technical architect specializing in scalable solutions and innovative web technologies. Oversees all technical operations and R&D.",
      linkedin: "https://www.linkedin.com/in/tejas-surse-a1b651256/",
      instagram: "https://www.instagram.com/tejas_patil_0303"
    }
  ];

  return (
    <div className="animate-page-enter">
      {/* Hero Section */}
      <section className="py-24 md:py-32 px-6 relative">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-magic-accent/20 rounded-full filter blur-[100px] animate-pulse-subtle" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-magic-gold/10 rounded-full filter blur-[120px] animate-pulse-subtle" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-magic-gold/10 mb-3">
              <span className="text-magic-gold text-sm font-medium flex items-center justify-center">
                <Users className="h-3.5 w-3.5 mr-1" />
                About Us
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              The <span className="text-gradient">Visionaries</span> Behind the Innovation
            </h1>
            <p className="text-magic-light/80 text-lg md:text-xl mb-8">
              We're a team of passionate technologists and creatives dedicated to building digital experiences that drive business transformation.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 md:py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-magic-gold/20 rounded-full flex items-center justify-center z-10">
                <BookOpen className="w-6 h-6 text-magic-gold" />
              </div>
              <div className="glass-card rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                  alt="Our team collaborating" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-magic-accent/20 rounded-full flex items-center justify-center z-10">
                <Lightbulb className="w-6 h-6 text-magic-accent" />
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-magic-accent/10 mb-3">
                <span className="text-magic-accent text-sm font-medium">Our Journey</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                From Concept to <span className="text-gradient">Industry Leadership</span>
              </h2>
              <p className="text-magic-light/80 text-lg mb-5">
                Founded in 2023, Shivayan Enterprises began with a vision to bridge the gap between technology and business needs. What started as a two-person operation has grown into a respected digital solutions provider.
              </p>
              <p className="text-magic-light/80 text-lg mb-8">
                Our approach combines technical excellence with business acumen, delivering solutions that not only look impressive but drive measurable results for our clients across various industries.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="glass-dark p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="h-5 w-5 text-magic-gold" />
                    <h3 className="text-white font-semibold">Our Mission</h3>
                  </div>
                  <p className="text-magic-light/70 text-sm">
                    To empower businesses through innovative technology solutions that create competitive advantages.
                  </p>
                </div>
                <div className="glass-dark p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Heart className="h-5 w-5 text-magic-gold" />
                    <h3 className="text-white font-semibold">Our Values</h3>
                  </div>
                  <p className="text-magic-light/70 text-sm">
                    Integrity, innovation, client-centric approach, and relentless pursuit of excellence.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Successful Projects" },
              { number: "10+", label: "Satisfied Clients" },
              { number: "8", label: "Technical Experts" },
              { number: "100%", label: "Client Retention" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-8 text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-magic-light/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 rounded-full bg-magic-gold/10 mb-3"
            >
              <span className="text-magic-gold text-sm font-medium flex items-center justify-center">
                <Users className="h-3.5 w-3.5 mr-1" />
                Leadership Team
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Meet the <span className="text-gradient">Founders</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-magic-light/80 text-lg max-w-2xl mx-auto"
            >
              Our leadership combines technical expertise with business strategy to deliver exceptional results.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass-card rounded-xl  group relative"
              >
                <div className="relative h-85 border-b-2 border-magic-gold overflow-hidden rounded-t-xl">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full overflow-hidden object-cover object-center  duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t"></div>
                  
                  {/* Social Links */}
                  <div className="absolute bottom-4 left-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-magic-dark/80 hover:bg-linkedin-blue p-2 rounded-full transition-all duration-300 hover:scale-110"
                      aria-label={`Connect with ${member.name} on LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5 text-white" />
                    </a>
                    <a 
                      href={member.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-magic-dark/80 hover:bg-instagram-purple p-2 rounded-full transition-all duration-300 hover:scale-110"
                      aria-label={`Follow ${member.name} on Instagram`}
                    >
                      <Instagram className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <div className="text-magic-gold text-sm mb-3">{member.role}</div>
                  <p className="text-magic-light/80 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-magic-dark opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-br from-magic-accent/20 via-transparent to-magic-gold/10" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full bg-magic-gold/10 mb-3"
          >
            <span className="text-magic-gold text-sm font-medium flex items-center justify-center">
              <Sparkles className="h-3.5 w-3.5 mr-1" />
              Let's Collaborate
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to <span className="text-gradient-gold">Transform Your Business?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-magic-light/90 text-lg md:text-xl max-w-3xl mx-auto mb-10"
          >
            Schedule a consultation with our team to discuss how we can help you achieve your digital goals.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link to="/contact">
              <Button className="bg-magic-gold hover:bg-magic-gold/90 text-magic-dark px-8 py-6 text-lg font-medium rounded-full shadow-lg shadow-magic-gold/20 hover:shadow-xl hover:shadow-magic-gold/30 transition-all duration-300">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;