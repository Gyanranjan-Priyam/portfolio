import { motion } from "framer-motion";
import { Rocket, Code, Sparkles, Zap } from "lucide-react";
import { SectionTitle } from "./common/SectionTitle";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
};

// Typewriter effect component
function TypewriterText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: index * 0.1,
            repeat: char === " " ? 0 : Infinity,
            repeatType: "reverse",
            repeatDelay: 3,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Generating code animation with box effect
function GeneratingCodeAnimation() {
  const codeLines = [
    "const project = new AwesomeProject();",
    "project.addFeatures(['React', 'TypeScript']);",
    "project.optimize();",
    "project.deploy();",
    "// Amazing things coming soon...",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className="relative"
    >
      {/* Glowing effect around the code box */}
      <motion.div
        animate={{ 
          boxShadow: [
            "0 0 20px rgba(var(--primary), 0.3)",
            "0 0 40px rgba(var(--primary), 0.5)",
            "0 0 20px rgba(var(--primary), 0.3)",
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 blur-xl"
      />
      
      <div className="relative bg-black/95 rounded-2xl p-6 font-mono text-sm border border-primary/30 backdrop-blur-sm max-w-lg mx-auto overflow-hidden">
        {/* Terminal header */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">
          <motion.div 
            className="w-3 h-3 bg-red-500 rounded-full"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div 
            className="w-3 h-3 bg-yellow-500 rounded-full"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
          />
          <motion.div 
            className="w-3 h-3 bg-green-500 rounded-full"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
          />
          <span className="text-gray-400 text-xs ml-3">~/projects/awesome-app</span>
        </div>
        
        {/* Code lines with typing effect */}
        {codeLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2 + index * 0.8, duration: 0.5 }}
            className="mb-2 flex items-center"
          >
            <span className="text-gray-500 mr-3 select-none w-6 text-right">
              {index + 1}
            </span>
            <motion.span className="text-green-400">
              <TypewriterText text={line} />
            </motion.span>
          </motion.div>
        ))}
        
        {/* Blinking cursor */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity, delay: 6 }}
          className="flex items-center mt-2"
        >
          <span className="text-gray-500 mr-3 select-none w-6 text-right">6</span>
          <span className="text-primary">▊</span>
        </motion.div>
        
        {/* Floating code particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-primary/30 text-xs"
              initial={{
                x: Math.random() * 400,
                y: Math.random() * 200,
                opacity: 0,
              }}
              animate={{
                x: Math.random() * 400,
                y: Math.random() * 200,
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              {['{}', '[]', '()', '<>', '&&', '||'][Math.floor(Math.random() * 6)]}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Animated background with floating elements
function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Floating particles */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            background: `hsla(${Math.random() * 60 + 200}, 70%, 60%, 0.3)`,
          }}
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
          }}
          animate={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-96 h-96 bg-gradient-to-bl from-purple-400/20 to-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

// Main Projects Component
export function Projects() {
  return (
    <motion.section 
      id="projects"
      className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-background via-primary/5 to-purple-100/10 dark:from-background dark:via-primary/5 dark:to-purple-900/10 overflow-hidden"
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Content */}
      <motion.div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center space-y-16">
        <motion.div variants={itemVariants}>
          <SectionTitle 
            icon={<Rocket className="h-6 w-6"/>} 
            title="Projects" 
            subtitle="What I'm building" 
          />
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-8">
          <motion.h2 
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent leading-tight"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <TypewriterText text="Coming Soon" />
          </motion.h2>

          <motion.p 
            variants={itemVariants} 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Amazing projects are being crafted with passion and precision.
          </motion.p>
        </motion.div>

        {/* Code Animation Box */}
        <motion.div variants={itemVariants}>
          <GeneratingCodeAnimation />
        </motion.div>

        {/* Floating action indicators */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center items-center gap-12 mt-16"
        >
          {[
            { icon: Code, label: "Coding", delay: 0 },
            { icon: Sparkles, label: "Designing", delay: 0.2 },
            { icon: Zap, label: "Optimizing", delay: 0.4 },
          ].map(({ icon: Icon, label, delay }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 7 + delay, duration: 0.6 }}
              className="flex flex-col items-center gap-4"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  delay: delay,
                  ease: "easeInOut"
                }}
                className="p-4 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
              >
                <Icon className="h-8 w-8 text-primary" />
              </motion.div>
              <motion.span 
                className="text-sm font-medium text-muted-foreground"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: delay }}
              >
                {label}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

        {/* Loading indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-12"
        >
          <motion.div
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0 }}
            />
            <motion.div
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
            />
            <motion.div
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
            />
            <span className="ml-2 text-sm text-muted-foreground">Building amazing things</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
