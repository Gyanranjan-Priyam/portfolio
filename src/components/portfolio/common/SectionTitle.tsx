import React from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

export function SectionTitle({ title, subtitle, icon }: SectionTitleProps) {
  return (
    <motion.div 
      className="mb-8 md:mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center gap-3 text-muted-foreground mb-3">
        <motion.div
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
        {subtitle && <span className="text-lg">{subtitle}</span>}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
        {title}
      </h2>
    </motion.div>
  );
}
