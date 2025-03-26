import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Award, BookOpen, Briefcase, Lightbulb, Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import tejas from "https://github.com/Serious03black/Shivayan_Enterprises/blob/main/src/pages/Assets/image1.png";
import prathmesh from "
import tejas from "F:/webdevlopmetn/Shivayan_Enterprises/src/Assets/image.png";
import prathmesh from "F:/webdevlopmetn/Shivayan_Enterprises/src/Assets/image1.png";
const About = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const team = [
    {
      name: "The Prathmesh Uchit",
      role: "Co Founder & CEO",
      image:  prathmesh,
      bio: "Prathmesh Uchit has over 10+ projects experience in web development and digital strategy, leading our team with vision and expertise."
    },
    {
      name: "Mr. Tejas Surse",
      role: "Co Founder & CTO",
      image: tejas,
      bio: "With a background in both design and development, Tejas oversees our creative process, ensuring beautiful and functional solutions."
    }
  ];

  return (
    <div className="animate-page-enter">
      {/* Hero Section */}
      <section className="py-24 md:py-32 px-6 relative">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-magic-accent/20 rounded-full filter blur-[100px] animate-pulse-subtle" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-magic-gold/10 rounded-full filter blur-[120px] animate-pulse-subtle" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
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
              The <span className="text-gradient">Wizards</span> Behind the Magic
            </h1>
            <p className="text-magic-light/80 text-lg md:text-xl mb-8">
              We're a team of passionate digital craftspeople dedicated to creating extraordinary web experiences that help businesses grow.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 md:py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
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
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80" 
                  alt="Our team collaborating" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-magic-accent/20 rounded-full flex items-center justify-center z-10">
                <Lightbulb className="w-6 h-6 text-magic-accent" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-magic-accent/10 mb-3">
                <span className="text-magic-accent text-sm font-medium">Our Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                From Small Beginnings to <span className="text-gradient">Digital Excellence</span>
              </h2>
              <p className="text-magic-light/80 text-lg mb-5">
                Founded in 2015, MagicDev began with a simple mission: to create digital experiences that feel like magic. What started as a small team of passionate developers has grown into a full-service web consultancy.
              </p>
              <p className="text-magic-light/80 text-lg mb-8">
                Today, we work with clients across industries, from startups to Fortune 500 companies, bringing the same level of care, creativity, and technical excellence to every project we undertake.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="glass-dark p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="h-5 w-5 text-magic-gold" />
                    <h3 className="text-white font-semibold">Our Mission</h3>
                  </div>
                  <p className="text-magic-light/70 text-sm">
                    To create digital experiences that transform businesses and delight users.
                  </p>
                </div>
                <div className="glass-dark p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Heart className="h-5 w-5 text-magic-gold" />
                    <h3 className="text-white font-semibold">Our Values</h3>
                  </div>
                  <p className="text-magic-light/70 text-sm">
                    Excellence, innovation, integrity, and a relentless focus on the user experience.
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
              { number: "500+", label: "Projects Completed" },
              { number: "150+", label: "Happy Clients" },
              { number: "15+", label: "Team Members" },
              { number: "8+", label: "Years of Experience" }
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
                Our Team
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Meet the <span className="text-gradient">Magicians</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-magic-light/80 text-lg max-w-2xl mx-auto"
            >
              Our diverse team of experts is what makes the magic happen. Each member brings unique skills and perspectives to create extraordinary digital experiences.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass-card rounded-xl overflow-hidden group"
              >
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-magic-dark to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                  <div className="text-magic-gold text-sm mb-3">{member.role}</div>
                  <p className="text-magic-light/70 text-sm">{member.bio}</p>
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
              Work With Us
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Create <span className="text-gradient-gold">Something Magical?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-magic-light/90 text-lg md:text-xl max-w-3xl mx-auto mb-10"
          >
            Let's discuss how we can help transform your digital presence and achieve your business goals.
          </motion.p>
          
          <motion.div
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
