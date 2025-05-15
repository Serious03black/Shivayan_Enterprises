
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
  bgColor?: string;
}

const Section = ({
  children,
  className,
  id,
  fullWidth = false,
  bgColor,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24',
        bgColor,
        className
      )}
    >
      <div className={cn(
        fullWidth ? 'w-full' : 'container mx-auto px-4'
      )}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
