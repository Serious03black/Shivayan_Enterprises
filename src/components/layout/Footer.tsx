
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-shivayan-dark-purple to-shivayan-purple text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div 
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link to="/" className="inline-block">
              <span className="font-display text-2xl font-bold text-gradient-orange-yellow">
                Shivayan
              </span>
            </Link>
            <p className="text-white/80 max-w-xs">
              Blending innovation with Indian heritage to create exceptional software solutions for global businesses.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <div className="h-8 w-8 bg-white/10 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <div className="h-8 w-8 bg-white/10 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </div>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <div className="h-8 w-8 bg-white/10 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </div>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <div className="h-8 w-8 bg-white/10 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-shivayan-gold transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-shivayan-gold transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-shivayan-gold transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-white/80 hover:text-shivayan-gold transition-colors duration-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-shivayan-gold transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-white/80 hover:text-shivayan-gold transition-colors duration-300">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-shivayan-gold transition-colors duration-300">
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-shivayan-gold transition-colors duration-300">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-shivayan-gold transition-colors duration-300">
                  Cloud Solutions
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 flex-shrink-0 text-shivayan-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-white/80">
                  123 Tech Park, Bengaluru, <br />Karnataka 560001, India
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 text-shivayan-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="text-white/80">+91 (123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 text-shivayan-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="text-white/80">contact@shivayan.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {currentYear} Shivayan Enterprises. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <Link to="/legal" className="text-white/70 text-sm hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal" className="text-white/70 text-sm hover:text-white transition-colors duration-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/70 text-sm hover:text-white transition-colors duration-300">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
