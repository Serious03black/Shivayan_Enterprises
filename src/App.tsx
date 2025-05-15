
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/components/theme-provider";
import { useEffect } from "react";

// Layout components
import Layout from "@/components/layout/Layout";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Solutions from "@/pages/Solutions";
import Portfolio from "@/pages/Portfolio";
import Blog from "@/pages/Blog";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import Faq from "@/pages/Faq";
import Legal from "@/pages/Legal";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider defaultTheme="light">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <AppRoutes />
          </BrowserRouter>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
