/* ──────────────────────────────────────────────────────────────────
   animations.ts
   ----------------------------------------------------------------- */

import { type Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: { 
    opacity: 0 
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      ease: "easeOut",
    },
  },
};

export const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Additional variants for your hero section
export const badgeVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const titleVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const subtitleVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

export const buttonContainerVariants: Variants = {
  hidden: { 
    opacity: 0 
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

export const buttonVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.9
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    y: -2,
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
};

export const socialContainerVariants: Variants = {
  hidden: { 
    opacity: 0 
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

export const socialIconVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.8
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.2,
    rotate: [0, -10, 10, 0],
    transition: {
      duration: 0.3,
    },
  },
  tap: {
    scale: 0.9,
  },
};

export const scrollHintVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.8,
      ease: "easeOut",
    },
  },
};
