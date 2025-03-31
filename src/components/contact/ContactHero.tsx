
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const ContactHero = () => {
  return (
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
              <MessageSquare className="h-3.5 w-3.5 mr-1" />
              Get in Touch
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let's Create <span className="text-gradient">Magic</span> Together
          </h1>
          <p className="text-magic-light/80 text-lg md:text-xl mb-8">
            Have a project in mind? Contact us today and let's discuss how we can help bring your vision to life.
          </p>
        </ div>
      </div>
    </section>
  );
};

export default ContactHero;
