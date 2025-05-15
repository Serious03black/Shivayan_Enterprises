
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Solutions", path: "/solutions" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
  { name: "FAQ", path: "/faq" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="font-display text-2xl font-bold text-gradient-purple-gold">
              Shivayan
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300",
                  isActive
                    ? "text-shivayan-gold"
                    : "text-foreground hover:text-shivayan-gold"
                )
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 w-full bg-shivayan-gold"
                      layoutId="navbar-indicator"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-foreground focus:outline-none"
            aria-label="Toggle menu"
          >
            <motion.div
              initial={false}
              animate={isMobileMenuOpen ? "open" : "closed"}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  variants={{
                    closed: { d: "M4 6h16M4 12h16M4 18h16" },
                    open: { d: "M6 18L18 6M6 6l12 12" },
                  }}
                />
              </svg>
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background/95 backdrop-blur-md shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      "block px-3 py-2 rounded-md text-base font-medium transition-all duration-300",
                      isActive
                        ? "bg-shivayan-purple/10 text-shivayan-purple"
                        : "text-foreground hover:bg-shivayan-purple/5 hover:text-shivayan-purple"
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
