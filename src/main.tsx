
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './utils/SplitText';

// Register GSAP plugins globally
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Initialize app
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
}

// Initialize smooth scrolling after the app is mounted
document.addEventListener('DOMContentLoaded', () => {
  // Set up smooth scrolling behavior for all internal links
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const href = this.getAttribute('href');
      if (href) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          gsap.to(window, {
            duration: 1, 
            scrollTo: {
              y: targetElement,
              offsetY: 80 // Offset for fixed header
            },
            ease: "power3.out"
          });
          
          // Update URL without reload
          history.pushState(null, '', href);
        }
      }
    });
  });
});
