import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";

const Button = forwardRef(({ 
  className, 
  variant = "primary", 
  size = "md", 
  children, 
  icon,
  iconPosition = "left",
  loading = false,
  ...props 
}, ref) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary-800 hover:bg-accent-500 text-white shadow-button focus:ring-primary-500",
    secondary: "bg-white hover:bg-gray-50 text-primary-800 border-2 border-primary-800 focus:ring-primary-500",
    accent: "bg-accent-500 hover:bg-accent-600 text-white shadow-button focus:ring-accent-500",
    outline: "border-2 border-gray-300 hover:border-primary-500 text-gray-700 hover:text-primary-700 bg-white focus:ring-primary-500",
    ghost: "text-primary-800 hover:bg-primary-50 focus:ring-primary-500"
  };
  
  const sizes = {
    sm: "px-3 py-2 text-sm rounded",
    md: "px-6 py-3 text-base rounded",
    lg: "px-8 py-4 text-lg rounded",
    xl: "px-10 py-5 text-xl rounded"
  };
  
  return (
    <button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      ref={ref}
      disabled={loading}
      {...props}
    >
      {loading && (
        <ApperIcon 
          name="Loader2" 
          size={size === "sm" ? 14 : size === "lg" || size === "xl" ? 20 : 16} 
          className="animate-spin mr-2" 
        />
      )}
      {!loading && icon && iconPosition === "left" && (
        <ApperIcon 
          name={icon} 
          size={size === "sm" ? 14 : size === "lg" || size === "xl" ? 20 : 16} 
          className="mr-2" 
        />
      )}
      {children}
      {!loading && icon && iconPosition === "right" && (
        <ApperIcon 
          name={icon} 
          size={size === "sm" ? 14 : size === "lg" || size === "xl" ? 20 : 16} 
          className="ml-2" 
        />
      )}
    </button>
  );
});

Button.displayName = "Button";

export default Button;