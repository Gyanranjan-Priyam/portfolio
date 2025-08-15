import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

// Types
interface SocialIconProps {
  href: string;
  label: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'ghost' | 'outline' | 'filled';
  showLabel?: boolean;
  showExternalIcon?: boolean;
}

// Size variants
const sizeVariants = {
  sm: {
    button: "h-8 w-8",
    icon: "h-3 w-3",
    text: "text-xs"
  },
  md: {
    button: "h-10 w-10",
    icon: "h-4 w-4", 
    text: "text-sm"
  },
  lg: {
    button: "h-12 w-12",
    icon: "h-5 w-5",
    text: "text-base"
  }
};

// Variant styles
const variantStyles = {
  default: "border-2 hover:border-primary/50 hover:bg-primary/10",
  ghost: "border-none hover:bg-primary/10",
  outline: "border-2 border-primary/30 hover:border-primary hover:bg-primary/5",
  filled: "bg-primary text-primary-foreground hover:bg-primary/90 border-primary"
};

// Main SocialIcon Component
export function SocialIcon({ 
  href, 
  label, 
  children, 
  size = 'md',
  variant = 'default',
  showLabel = false,
  showExternalIcon = false
}: SocialIconProps) {
  return (
    <motion.div
      className={showLabel ? "flex flex-col items-center gap-2" : ""}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      <motion.a 
        href={href} 
        aria-label={label} 
        target="_blank" 
        rel="noreferrer"
        className="relative group"
        whileHover={{ y: -2 }}
      >
        <Button 
          size="icon" 
          variant="outline" 
          className={`rounded-2xl transition-all duration-300 ${sizeVariants[size].button} ${variantStyles[variant]}`}
        >
          <span className={sizeVariants[size].icon}>
            {children}
          </span>
        </Button>

        {/* External link indicator */}
        {showExternalIcon && (
          <motion.div
            className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <ExternalLink className="h-2 w-2" />
          </motion.div>
        )}
      </motion.a>

      {/* Optional label */}
      {showLabel && (
        <motion.span 
          className={`${sizeVariants[size].text} text-muted-foreground font-medium`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {label}
        </motion.span>
      )}
    </motion.div>
  );
}

// Enhanced SocialIcon with tooltip and glow effect
export function EnhancedSocialIcon({ 
  href, 
  label, 
  children, 
  size = 'md',
  variant = 'default'
}: SocialIconProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {/* Glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-primary/20 blur-lg`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          scale: isHovered ? 1.2 : 0.8 
        }}
        transition={{ duration: 0.3 }}
      />

      <motion.a 
        href={href} 
        aria-label={label} 
        target="_blank" 
        rel="noreferrer"
        className="relative block"
        whileHover={{ y: -3, rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <Button 
          size="icon" 
          variant="outline" 
          className={`rounded-2xl backdrop-blur-sm transition-all duration-300 ${sizeVariants[size].button} ${variantStyles[variant]}`}
        >
          <motion.span 
            className={sizeVariants[size].icon}
            animate={isHovered ? { rotate: [0, 15, -15, 0] } : {}}
            transition={{ duration: 0.6 }}
          >
            {children}
          </motion.span>
        </Button>
      </motion.a>

      {/* Tooltip */}
      <motion.div
        className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded-md border shadow-lg whitespace-nowrap pointer-events-none"
        initial={{ opacity: 0, y: 5, scale: 0.8 }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          y: isHovered ? 0 : 5,
          scale: isHovered ? 1 : 0.8
        }}
        transition={{ duration: 0.2 }}
      >
        {label}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-popover" />
      </motion.div>
    </motion.div>
  );
}

// Social Icons Group Component
export function SocialIconsGroup({ 
  icons, 
  size = 'md',
  variant = 'default',
  showLabels = false,
  layout = 'horizontal'
}: {
  icons: Array<{
    href: string;
    label: string;
    icon: React.ReactNode;
  }>;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'ghost' | 'outline' | 'filled';
  showLabels?: boolean;
  layout?: 'horizontal' | 'vertical';
}) {
  return (
    <motion.div 
      className={`flex ${layout === 'horizontal' ? 'flex-row' : 'flex-col'} items-center gap-4`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, staggerChildren: 0.1 }}
    >
      {icons.map(({ href, label, icon }, index) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <SocialIcon
            href={href}
            label={label}
            size={size}
            variant={variant}
            showLabel={showLabels}
            showExternalIcon={true}
          >
            {icon}
          </SocialIcon>
        </motion.div>
      ))}
    </motion.div>
  );
}
