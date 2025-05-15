
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import SEO from "@/components/shared/SEO";
import CustomButton from "@/components/shared/CustomButton";

const NotFound = () => {
  const location = new URL(window.location.href);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <SEO 
        title="Page Not Found" 
        description="The page you're looking for doesn't exist or has been moved."
      />
      
      <div className="min-h-screen flex items-center justify-center bg-background pt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-9xl font-bold text-gradient-purple-gold mb-6">
                404
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Page Not Found
              </h2>
              
              <p className="text-xl text-foreground/80 mb-8">
                The page you're looking for doesn't exist or has been moved.
              </p>
              
              <Link to="/">
                <CustomButton 
                  variant="primary"
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  }
                  iconPosition="left"
                >
                  Return to Home
                </CustomButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
