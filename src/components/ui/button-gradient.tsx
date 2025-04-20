
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonGradientProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export const ButtonGradient = forwardRef<HTMLButtonElement, ButtonGradientProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900",
          variant === "primary"
            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white focus:ring-blue-500"
            : variant === "secondary"
            ? "bg-white/10 backdrop-blur-lg text-white hover:bg-white/20 focus:ring-white/40"
            : "bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 focus:ring-blue-500",
          className
        )}
        {...props}
      />
    );
  }
);

ButtonGradient.displayName = "ButtonGradient";
