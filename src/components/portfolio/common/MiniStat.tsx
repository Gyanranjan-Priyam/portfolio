import React from "react";
import { motion } from "framer-motion";

// Types
interface MiniStatProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
}

// Color variants
const colorVariants = {
  default: "bg-muted/30 hover:bg-muted/50",
  primary: "bg-primary/10 hover:bg-primary/20 border-primary/20",
  success: "bg-green-500/10 hover:bg-green-500/20 border-green-500/20",
  warning: "bg-yellow-500/10 hover:bg-yellow-500/20 border-yellow-500/20",
  danger: "bg-red-500/10 hover:bg-red-500/20 border-red-500/20",
};

const textColorVariants = {
  default: "text-foreground",
  primary: "text-primary",
  success: "text-green-600 dark:text-green-400",
  warning: "text-yellow-600 dark:text-yellow-400",
  danger: "text-red-600 dark:text-red-400",
};

// Main MiniStat Component
export function MiniStat({ label, value, icon, color = 'default' }: MiniStatProps) {
  return (
    <motion.div 
      className={`rounded-2xl border-2 p-4 text-center transition-colors ${colorVariants[color]}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {/* Icon (optional) */}
      {icon && (
        <motion.div 
          className="flex justify-center mb-2"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, type: "spring", delay: 0.1 }}
        >
          <div className={`p-2 rounded-xl bg-background/50 ${textColorVariants[color]}`}>
            {icon}
          </div>
        </motion.div>
      )}

      {/* Value */}
      <motion.div 
        className={`text-2xl font-bold leading-none mb-2 ${textColorVariants[color]}`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
      >
        {value}
      </motion.div>

      {/* Label */}
      <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}

// Enhanced MiniStat with more features
export function AnimatedMiniStat({ 
  label, 
  value, 
  icon, 
  color = 'default',
  animateValue = false,
  prefix = "",
  suffix = ""
}: MiniStatProps & {
  animateValue?: boolean;
  prefix?: string;
  suffix?: string;
}) {
  const [displayValue, setDisplayValue] = React.useState(animateValue ? '0' : value);

  React.useEffect(() => {
    if (animateValue && value) {
      // Extract number from value string
      const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
      let current = 0;
      const increment = numericValue / 30; // Animate over 30 frames
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current).toString() + (value.includes('+') ? '+' : ''));
        }
      }, 50);

      return () => clearInterval(timer);
    }
  }, [value, animateValue]);

  return (
    <motion.div 
      className={`rounded-2xl border-2 p-4 text-center transition-all duration-300 ${colorVariants[color]} hover:shadow-lg`}
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Icon with pulse animation */}
      {icon && (
        <motion.div 
          className="flex justify-center mb-3"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, type: "spring", delay: 0.1 }}
        >
          <motion.div 
            className={`p-2 rounded-xl bg-background/50 ${textColorVariants[color]}`}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {icon}
          </motion.div>
        </motion.div>
      )}

      {/* Animated Value */}
      <motion.div 
        className={`text-2xl md:text-3xl font-bold leading-none mb-2 ${textColorVariants[color]}`}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
      >
        {prefix}{displayValue}{suffix}
      </motion.div>

      {/* Label with subtle animation */}
      <motion.div 
        className="text-xs text-muted-foreground font-medium uppercase tracking-wider"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
}
