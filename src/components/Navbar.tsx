
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Wand2, Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Magics", path: "/ourWorkPage" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];
  
  return (
    < header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0  rounded-full left-0 right-0 z-50  transition-all duration-500 ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`mx-auto max-w-7xl glass rounded-2xl border border-white/20 transition-all duration-500`}>
        <div className="flex items-center justify-between px-4 md:px-8 py-3">
          <Link 
            to="/"
            className="flex items-center gap-2 group"
          >
            < div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20,
                delay: 0.1 
              }}
              className="relative w-10 h-10 bg-magic-gold/20 rounded-full flex items-center justify-center"
            >
              <Wand2 className="w-5 h-5 text-magic-gold z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="absolute inset-0 bg-gradient-to-br from-magic-gold/80 to-orange-300/80 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
            </ div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white">Shivayan Enterprises</span>
              <span className="text-xs text-magic-light/80 -mt-1">Web, App Developemnt  </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                  location.pathname === link.path
                  ? "text-white"
                  : "text-white/70 hover:text-white"
                }`}
              >
                {location.pathname === link.path && (
                  < span
                    layoutId="activeNavItem"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
            <Link 
              to="/contact"
              className="ml-1 px-5 py-2 bg-gradient-to-r from-magic-gold to-amber-400 rounded-full text-sm font-medium text-magic-dark shadow-md hover:shadow-lg hover:shadow-magic-gold/20 transition-all duration-300 flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hire Us</span>
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          < div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden pb-4 px-4"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium ${
                    location.pathname === link.path
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact"
                className="mt-1 px-4 py-2.5 bg-gradient-to-r from-magic-gold to-amber-400 rounded-xl text-sm font-medium text-magic-dark shadow-md flex items-center justify-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Hire Us</span>
              </Link>
            </div>
          </ div>
        )}
      </div>
    </ header>
  );
};

export default Navbar;
