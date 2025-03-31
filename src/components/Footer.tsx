
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Github, Twitter, Linkedin, Facebook, Instagram, ChevronRight, Wand2 } from "lucide-react";


const Footer = () => {
  return (
    <footer className="relative w-full glass-dark border-t border-white/10 pt-16 pb-8 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="relative w-10 h-10 bg-magic-gold/20 rounded-full flex items-center justify-center">
                <Wand2 className="w-5 h-5 text-magic-gold z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="absolute inset-0 bg-gradient-to-br from-magic-gold/80 to-orange-300/80 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">Shivayan</span>
                <span className="text-xs text-magic-light/80 -mt-1">Web Consultancy</span>
              </div>
            </Link>
            <p className="text-magic-light/80 text-sm mb-6 max-w-xs">
              Transforming ideas into magical digital experiences with cutting-edge web development solutions.
            </p>
            <div className="flex space-x-4">
              {/* < a 
                href="/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-magic-light hover:bg-white/20 transition-colors duration-300"
              >
                <Twitter size={16} />
              </ a> */}
              < a 
                href="/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-magic-light hover:bg-white/20 transition-colors duration-300"
              >
                <Facebook size={16} />
              </ a>
              < a 
                href="https://www.instagram.com/shivayan.enterprises" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-magic-light hover:bg-white/20 transition-colors duration-300"
              >
                <Instagram size={16} />
              </ a>
              < a 
                href="https://www.linkedin.com/company/106444127/admin/dashboard/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-magic-light hover:bg-white/20 transition-colors duration-300"
              >
                <Linkedin size={16} />
              </ a>
              < a 
                href="https://github.com/shivayan_Enterprises" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-magic-light hover:bg-white/20 transition-colors duration-300"
              >
                <Github size={16} />
              </ a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
                { name: "Portfolio", path: "/services" }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="flex items-center gap-2 text-magic-light/70 hover:text-magic-light group transition-colors duration-300"
                  >
                    <ChevronRight size={14} className="text-magic-gold group-hover:translate-x-1 transition-transform duration-300" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                { name: "Web Development", path: "/services" },
                { name: "Mobile Applications", path: "/services" },
                { name: "UI/UX Design", path: "/services" },
                { name: "E-commerce Solutions", path: "/services" },
                { name: "API Integrations", path: "/services" }
              ].map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.path}
                    className="flex items-center gap-2 text-magic-light/70 hover:text-magic-light group transition-colors duration-300"
                  >
                    <ChevronRight size={14} className="text-magic-gold group-hover:translate-x-1 transition-transform duration-300" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-magic-gold flex-shrink-0" />
                <span className="text-magic-light/70">+919699925064</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-magic-gold flex-shrink-0" />
                <span className="text-magic-light/70">contact.Shivayan@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-magic-light/60 text-sm">
            © {new Date().getFullYear()} Shivayan. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-magic-light/60 hover:text-magic-light text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-magic-light/60 hover:text-magic-light text-sm transition-colors duration-300">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-magic-light/60 hover:text-magic-light text-sm transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
