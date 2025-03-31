
import { motion } from 'framer-motion';

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What is your typical process for a new project?",
    answer: "Our process typically involves an initial consultation, detailed project scoping, proposal and agreement, design phase, development phase, testing, and launch. We maintain clear communication throughout the entire process."
  },
  {
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while more complex web applications can take 3-6 months. We'll provide a detailed timeline during our proposal phase."
  },
  {
    question: "What is your pricing structure?",
    answer: "We tailor our pricing to each project's specific requirements. We typically work on a fixed-price basis for well-defined projects, or time and materials for more flexible engagements. We're happy to discuss your budget constraints."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes, we offer various support and maintenance packages to ensure your digital product continues to perform optimally after launch. These can include regular updates, performance monitoring, and content updates."
  }
];

const ContactFaq = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        < div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-magic-light/80">
            Find answers to common questions about our services and process.
          </p>
        </ div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            < div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="text-white text-lg font-semibold mb-3">
                {faq.question}
              </h3>
              <p className="text-magic-light/70">
                {faq.answer}
              </p>
            </ div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFaq;
