
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
        Contact Information
      </h2>
      <div className="space-y-5">
        <div className="flex items-start gap-4">
          <div className="mt-1 w-10 h-10 rounded-full bg-magic-gold/10 flex items-center justify-center flex-shrink-0">
            <MapPin className="h-5 w-5 text-magic-gold" />
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">Our Office</h3>
            <p className="text-magic-light/70">
              123 Magic Lane<br />
              Tech City, CA 94107<br />
              United States
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="mt-1 w-10 h-10 rounded-full bg-magic-gold/10 flex items-center justify-center flex-shrink-0">
            <Mail className="h-5 w-5 text-magic-gold" />
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">Email Us</h3>
            <p className="text-magic-light/70">
              hello@shivayan.com<br />
              support@shivayan.com
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="mt-1 w-10 h-10 rounded-full bg-magic-gold/10 flex items-center justify-center flex-shrink-0">
            <Phone className="h-5 w-5 text-magic-gold" />
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">Call Us</h3>
            <p className="text-magic-light/70">
              +1 (555) 123-4567<br />
              +1 (555) 987-6543
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
