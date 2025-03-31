
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, User, AtSign, Sparkles, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from "@/components/ui/use-toast";

const ContactForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: 'Shivayan',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    < div
      
      className=""
    >
      {/* <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
        Send Us a Message
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-magic-light/90 flex items-center gap-2">
            <User className="h-4 w-4 text-magic-gold" />
            <span>Your Name</span>
          </label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-magic-gold/50"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-magic-light/90 flex items-center gap-2">
            <AtSign className="h-4 w-4 text-magic-gold" />
            <span>Your Email</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-magic-gold/50"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="subject" className="text-magic-light/90 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-magic-gold" />
            <span>Subject</span>
          </label>
          <Input
            id="subject"
            name="subject"
            placeholder="Project Inquiry"
            value={formData.subject}
            onChange={handleChange}
            required
            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-magic-gold/50"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="text-magic-light/90 flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-magic-gold" />
            <span>Your Message</span>
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your project, goals, and timeline..."
            value={formData.message}
            onChange={handleChange}
            required
            className="min-h-[150px] bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-magic-gold/50"
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-magic-gold hover:bg-magic-gold/90 text-magic-dark font-medium py-6 rounded-xl shadow-lg shadow-magic-gold/20 transition-all duration-300 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="h-4 w-4 border-2 border-magic-dark/30 border-t-magic-dark rounded-full animate-spin"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              <span>Send Message</span>
            </>
          )}
        </Button>
      </form> */}
    </ div>
  );
};

export default ContactForm;
