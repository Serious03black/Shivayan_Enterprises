
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-magic-dark via-magic-dark to-magic-accent/10" />
      
      <div className="relative z-10 max-w-lg mx-auto px-6 text-center">
        < div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="text-9xl font-bold text-gradient">404</div>
        </ div>
        
        < h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Page Not Found
        </ h1>
        
        < p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-magic-light/80 text-lg mb-8"
        >
          The page you're looking for doesn't seem to exist or has been moved.
        </ p>
        
        < div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/">
            <Button className="bg-magic-gold hover:bg-magic-gold/90 text-magic-dark px-6 py-5 rounded-full shadow-lg shadow-magic-gold/20 flex items-center gap-2">
              <Home className="h-4 w-4" />
              <span>Back to Home</span>
            </Button>
          </Link>
          <Button 
            variant="outline" 
            className="border-white/20 text-white hover:bg-white/10 hover:text-white px-6 py-5 rounded-full flex items-center gap-2"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Go Back</span>
          </Button>
        </ div>
      </div>
    </div>
  );
};

export default NotFound;
