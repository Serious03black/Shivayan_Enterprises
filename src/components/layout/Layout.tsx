
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  
  // Enhanced page transition variants with more dynamic effects
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.98,
      filter: "blur(8px)"
    },
    enter: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.98,
      filter: "blur(8px)",
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };
  
  // Text animation variants for child elements
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    enter: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <AnimatePresence >
        <motion.main 
          key={location.pathname}
          className="flex-grow pt-16"
          initial="initial"
          animate="enter"
          exit="exit"
          variants={pageVariants}
        >
          <motion.div
            variants={textVariants}
            initial="initial"
            animate="enter"
          >
            <Outlet />
          </motion.div>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;
