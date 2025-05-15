
import { gsap } from "gsap";

/**
 * A simplified version of GSAP's SplitText functionality
 * This simulates the basic functionality since the actual SplitText is a premium plugin
 */
export class SplitText {
  elements: HTMLElement[] = [];
  chars: HTMLElement[] = [];
  lines: HTMLElement[] = [];
  words: HTMLElement[] = [];
  originalHTML: string[] = [];

  constructor(
    targets: string | HTMLElement | HTMLElement[] | NodeListOf<HTMLElement>,
    config = { type: "chars,words,lines" }
  ) {
    // Convert targets to array of elements
    if (typeof targets === "string") {
      this.elements = Array.from(document.querySelectorAll(targets)) as HTMLElement[];
    } else if (targets instanceof HTMLElement) {
      this.elements = [targets];
    } else if (Array.isArray(targets) || targets instanceof NodeList) {
      this.elements = Array.from(targets) as HTMLElement[];
    }

    // Store original HTML for revert
    this.elements.forEach((element, i) => {
      this.originalHTML[i] = element.innerHTML;
    });

    // Process based on config type
    const types = config.type.split(",").map(t => t.trim());
    
    // Split the text
    if (types.includes("chars") || types.includes("words") || types.includes("lines")) {
      this.split(types);
    }
  }

  split(types: string[]) {
    this.elements.forEach((element) => {
      let html = element.innerHTML;
      
      // For words
      if (types.includes("words")) {
        let newHTML = "";
        const text = element.textContent || "";
        const words = text.split(/\s+/);
        
        words.forEach((word, i) => {
          newHTML += `<div class="split-word" style="display:inline-block;">${word}</div>${i < words.length - 1 ? " " : ""}`;
        });
        
        element.innerHTML = newHTML;
        this.words = [...this.words, ...Array.from(element.querySelectorAll(".split-word")) as HTMLElement[]];
      }
      
      // For chars (must be done after words for proper nesting)
      if (types.includes("chars")) {
        const wordElements = element.querySelectorAll(".split-word");
        
        if (wordElements.length) {
          // If words exist, split each word into chars
          wordElements.forEach(wordEl => {
            const wordText = wordEl.textContent || "";
            let charHTML = "";
            
            Array.from(wordText).forEach((char) => {
              charHTML += `<div class="split-char" style="display:inline-block;">${char}</div>`;
            });
            
            wordEl.innerHTML = charHTML;
          });
        } else {
          // Direct char splitting
          let charHTML = "";
          const text = element.textContent || "";
          
          Array.from(text).forEach((char) => {
            charHTML += `<div class="split-char" style="display:inline-block;">${char === " " ? "&nbsp;" : char}</div>`;
          });
          
          element.innerHTML = charHTML;
        }
        
        this.chars = [...this.chars, ...Array.from(element.querySelectorAll(".split-char")) as HTMLElement[]];
      }
      
      // For lines (very simplified - not actual line detection)
      if (types.includes("lines") && !types.includes("words")) {
        const lines = html.split("<br>");
        let lineHTML = "";
        
        lines.forEach((line, i) => {
          lineHTML += `<div class="split-line">${line}</div>${i < lines.length - 1 ? "<br>" : ""}`;
        });
        
        element.innerHTML = lineHTML;
        this.lines = [...this.lines, ...Array.from(element.querySelectorAll(".split-line")) as HTMLElement[]];
      }
    });
    
    return this;
  }

  // Method to revert the split
  revert() {
    this.elements.forEach((element, i) => {
      element.innerHTML = this.originalHTML[i];
    });
    
    this.chars = [];
    this.words = [];
    this.lines = [];
    
    return this;
  }
}

// Add SplitText to GSAP global
(gsap as any).SplitText = SplitText;

export default SplitText;
