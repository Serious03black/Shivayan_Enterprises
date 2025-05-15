
import { useToast, toast } from "@/hooks/use-toast";

// Extend toast functionality with accessibility improvements
const accessibleToast = {
  ...toast,
  // Override or add methods with accessibility enhancements
  success: (message: string, options = {}) => 
    toast({
      ...options,
      title: message,
      description: options.description || "",
      variant: "success",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }),
  error: (message: string, options = {}) => 
    toast({
      ...options,
      title: message,
      description: options.description || "",
      variant: "destructive",
      "aria-live": "assertive", 
      "aria-atomic": "true"
    }),
  info: (message: string, options = {}) => 
    toast({
      ...options,
      title: message,
      description: options.description || "",
      variant: "default",
      "aria-live": "polite",
      "aria-atomic": "true"
    }),
  warning: (message: string, options = {}) => 
    toast({
      ...options,
      title: message,
      description: options.description || "",
      variant: "warning",
      "aria-live": "polite",
      "aria-atomic": "true"
    })
};

export { useToast, accessibleToast as toast };
