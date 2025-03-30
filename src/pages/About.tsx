import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, BookOpen, Lightbulb, Heart, Sparkles, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import tejas from "../Assets/image.png";
import prathmesh from "../Assets/prathmesh.jpg";
import Gauri from "../Assets/gauri.jpg";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const team = [
    {
      name: "Tejas S Surse",
      role: "Co-Founder & CTO",
      image: tejas,
      bio: "Technical architect specializing in scalable solutions and innovative web technologies. Oversees all technical operations and R&D.",
      linkedin: "https://www.linkedin.com/in/tejas-surse-a1b651256/",
      instagram: "https://www.instagram.com/tejas_patil_0303"
    },
    {
      name: "Prathmesh S Uchit",
      role: "Co-Founder & CEO",
      image: prathmesh,
      bio: "Technology visionary with expertise in full-stack development and digital transformation. Leads strategic direction and client relationships.",
      linkedin: "https://www.linkedin.com/in/prathmesh-uchit-884a36222",
      instagram: "https://www.instagram.com/the_serious_bleck"
    },
    {
      name: "Gauri B Kapadnis",
      role: "HR Manager",
      image: Gauri,
      bio: "Human Resources Manager with a focus on talent acquisition and employee engagement. Ensures a positive work environment and team cohesion.",
      linkedin: "https://www.linkedin.com/in/gauri-kapadnis-0321b527b/",
      instagram: "https://www.instagram.com/got_2712"
    }
  ];

  return (
    <div className="animate-page-enter">
      {/* Hero Section */}
      <section className="py-24 md:py-32 px-6 relative">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-magic-accent/20 rounded-full filter blur-[100px] animate-pulse-subtle" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-magic-gold/10 rounded-full filter blur-[120px] animate-pulse-subtle" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
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
            <div className="relative">
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
            
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-magic-accent/10 mb-3">
                <span className="text-magic-accent text-sm font-medium">Our Journey</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                From Concept to <span className="text-gradient">Industry Leadership</span>
              </h2>
              <p className="text-magic-light/80 text-lg mb-5">
                Founded in 2025, Shivayan Enterprises began with a vision to bridge the gap between technology and business needs. What started as a two-person operation has grown into a respected digital solutions provider.
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
            </div>
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
              <div key={index} className="glass-card rounded-xl p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-magic-light/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 px-6 bg-magic-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-magic-gold/10 mb-4">
              <span className="text-magic-gold text-sm font-medium flex items-center justify-center">
                <Users className="h-4 w-4 mr-2" />
                Our Leadership Team
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet The <span className="text-transparent bg-clip-text bg-gradient-to-r from-magic-gold to-magic-accent">Visionaries</span>
            </h2>
            <p className="text-magic-light/80 text-lg max-w-3xl mx-auto">
              The passionate minds driving innovation and excellence at our company.
            </p>
          </div>
          
          {/* Team Grid with Larger Circles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center"
              >
                {/* Large Circular Image Container */}
                <div className="relative h-80 w-80 mb-10 overflow-hidden rounded-xl border-4 border-magic-gold/40 hover:border-magic-gold transition-all duration-300 shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full    object-scale-down"
                  />
                </div>
                
                {/* Content */}
                <div className="text-center max-w-xs">
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-magic-gold text-md mb-4">{member.role}</p>
                  <p className="text-magic-light/70 text-sm mb-6">{member.bio}</p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center gap-4">
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-magic-dark rounded-full hover:bg-linkedin-blue transition-colors"
                      aria-label={`Connect with ${member.name} on LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5 text-white" />
                    </a>
                    <a 
                      href={member.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-magic-dark rounded-full hover:bg-instagram-purple transition-colors"
                      aria-label={`Follow ${member.name} on Instagram`}
                    >
                      <Instagram className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-magic-dark to-magic-darker">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-magic-gold/10 mb-4">
            <span className="text-magic-gold text-sm font-medium flex items-center justify-center">
              <Sparkles className="h-4 w-4 mr-2" />
              Get In Touch
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready To <span className="text-transparent bg-clip-text bg-gradient-to-r from-magic-gold to-magic-accent">Work Together?</span>
          </h2>
          
          <p className="text-magic-light/90 text-lg mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help you achieve your business goals.
          </p>
          
          <Link to="/contact">
            <Button className="bg-magic-gold hover:bg-magic-gold/90 text-magic-dark px-10 py-6 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;