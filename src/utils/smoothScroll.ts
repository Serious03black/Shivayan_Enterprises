
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollToPlugin);

interface ScrollOptions {
  offset?: number;
  duration?: number;
  ease?: string;
  onStart?: () => void;
  onComplete?: () => void;
}

/**
 * Enhanced smooth scrolling utility with GSAP
 * @param target Element ID or selector to scroll to
 * @param options Scrolling options
 */
export const smoothScrollTo = (
  target: string | HTMLElement,
  options: ScrollOptions = {}
): void => {
  const {
    offset = 80,  // Default offset for header
    duration = 1,
    ease = 'power3.out',
    onStart,
    onComplete
  } = options;
  
  // If target is an element ID without the # prefix, add it
  const selector = typeof target === 'string' && !target.startsWith('#') && !target.startsWith('.') 
    ? `#${target}` 
    : target;
  
  gsap.to(window, {
    duration,
    scrollTo: {
      y: selector,
      offsetY: offset
    },
    ease,
    onStart,
    onComplete
  });
};

/**
 * Handles click events for anchor links with smooth scrolling
 * @param event Click event
 */
export const handleAnchorLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
  const href = event.currentTarget.getAttribute('href');
  
  if (href && href.startsWith('#')) {
    event.preventDefault();
    
    const targetId = href.substring(1);
    smoothScrollTo(targetId);
    
    // Update URL without page reload
    history.pushState(null, '', href);
  }
};

/**
 * Initializes smooth scrolling for all anchor links within a container
 * @param containerSelector Container element selector
 */
export const initSmoothScrolling = (containerSelector: string = 'body'): void => {
  const container = document.querySelector(containerSelector);
  
  if (container) {
    const anchors = container.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    anchors.forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        
        const href = anchor.getAttribute('href');
        if (href) {
          const targetId = href.substring(1);
          smoothScrollTo(targetId);
          
          // Update URL without page reload
          history.pushState(null, '', href);
        }
      });
    });
  }
};

export default {
  smoothScrollTo,
  handleAnchorLinkClick,
  initSmoothScrolling
};
