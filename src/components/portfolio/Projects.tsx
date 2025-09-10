import React, { useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { Rocket, Code, ExternalLink, Github, GraduationCap, User, Database, Globe, Palette, Store } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Project type interface
interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  gradient: string;
  bgGradient: string;
  status: string;
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
}

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

// Project data
const projects = [
  {
    id: 1,
    title: "College Management System (CMS)",
    description: "A comprehensive student management system with attendance tracking, grade management, and course enrollment features.",
    icon: <GraduationCap className="h-6 w-6" />,
    tags: ["MongoDB", "Express", "React", "Node.js"],
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/20 to-cyan-500/20",
    status: "Completed",
    features: ["Student Portal", "Grade Tracking", "Fee Payment System"],
    githubUrl: "https://github.com/Gyanranjan-Priyam/cms.git",
    liveUrl: "https://cms-gyanranjanpriyam.netlify.app/",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description: "A modern, responsive portfolio website showcasing projects, skills, and experience with smooth animations.",
    icon: <User className="h-6 w-6" />,
    tags: ["React", "TypeScript", "Framer Motion", "Tailwind"],
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/20 to-pink-500/20",
    status: "Live",
    features: ["Dark Mode", "Animations", "Responsive Design"],
    githubUrl: "https://github.com/Gyanranjan-Priyam/portfolio.git",
    liveUrl: "https://gyanranjanpriyam.netlify.app/",
  },
  {
    id: 3,
    title: "Inventory Management System",
    description: "A powerful inventory management application built with MERN stack in which a POS system is integrated.",
    icon: <Store className="h-6 w-6" />,
    tags: ["MongoDB", "Express", "React", "Node.js"],
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/20 to-emerald-500/20",
    status: "Live",
    features: ["POS System", "Real-time Analytics", "Payment Gateway Integration"],
    githubUrl: "https://github.com/Gyanranjan-Priyam/ims.git",
    liveUrl: "https://ims-gyanranjanpriyam.netlify.app/",
  },
  {
    id: 4,
    title: "NexeU-AI Career Coach",
    description: "An AI-powered career coaching platform that provides personalized job recommendations, resume building, and interview preparation.",
    icon: <Store className="h-6 w-6" />,
    tags: ["Supabase", "Next.js", "Node.js", "Gemini 1.5"],
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/20 to-emerald-500/20",
    status: "completed",
    features: ["Resume Building", "Job Recommendations", "Interview Preparation", "Cover Letter Assistance"],
    githubUrl: "https://github.com/Gyanranjan-Priyam/NexeU-AI.git",
    liveUrl: "https://nexeuai.netlify.app/",
  },
];

// Section Title Component
function SectionTitle({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="text-center space-y-4">
      <motion.div 
        className="flex justify-center"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <div className="p-3 rounded-full bg-primary/10 text-primary border border-primary/20">
          {icon}
        </div>
      </motion.div>
      <div>
        <h3 className="text-lg font-semibold text-primary">{subtitle}</h3>
        <h2 className="text-4xl font-bold">{title}</h2>
      </div>
    </div>
  );
}

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
            delay: index * 0.05,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Project Card Component
function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // GSAP scroll-triggered animations
    gsap.fromTo(card, 
      {
        y: 100,
        opacity: 0,
        rotationX: 45,
        transformPerspective: 1000,
      },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Hover animations with GSAP
    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -10,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      className="relative group"
    >
      {/* Glowing background effect */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
      
      <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <motion.div 
              className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {project.icon}
            </motion.div>
            <div>
              <h3 className="text-xl font-bold">{project.title}</h3>
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                project.status === 'Live' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                project.status === 'Completed' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
              }`}>
                {project.status}
              </span>
            </div>
          </div>
          
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => project.githubUrl && window.open(project.githubUrl, '_blank')}
              disabled={!project.githubUrl}
            >
              <Github className="h-4 w-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => project.liveUrl && window.open(project.liveUrl, '_blank')}
              disabled={!project.liveUrl}
            >
              <ExternalLink className="h-4 w-4" />
            </motion.button>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Features */}
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2 text-muted-foreground">Key Features</h4>
          <ul className="space-y-1">
            {project.features.map((feature, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-2 text-sm"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Generating code animation with box effect
function GeneratingCodeAnimation() {
  const codeLines = [
    "const project = new AwesomeProject();",
    "project.addFeatures(['React', 'TypeScript']);",
    "project.optimize();",
    "project.deploy();",
    "// Amazing things built!",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className="relative max-w-2xl mx-auto"
    >
      {/* Glowing effect around the code box */}
      <motion.div
        animate={{ 
          boxShadow: [
            "0 0 20px rgba(99, 102, 241, 0.3)",
            "0 0 40px rgba(99, 102, 241, 0.5)",
            "0 0 20px rgba(99, 102, 241, 0.3)",
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 blur-xl"
      />
      
      <div className="relative bg-black/95 rounded-2xl p-6 font-mono text-sm border border-primary/30 backdrop-blur-sm overflow-hidden">
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
          <span className="text-gray-400 text-xs ml-3">~/projects/portfolio</span>
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
      </div>
    </motion.div>
  );
}

// Animated background with floating elements
function AnimatedBackground() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const particles = bgRef.current?.querySelectorAll('.floating-particle');
    if (particles) {
      particles.forEach((particle, index) => {
        gsap.to(particle, {
          y: `random(-100, 100)`,
          x: `random(-50, 50)`,
          rotation: `random(-180, 180)`,
          duration: `random(3, 6)`,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.1,
        });
      });
    }
  }, []);

  return (
    <div ref={bgRef} className="absolute inset-0 overflow-hidden">
      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="floating-particle absolute rounded-full opacity-30"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            background: `hsla(${Math.random() * 60 + 200}, 70%, 60%, 0.4)`,
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
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
export default function Projects() {
  const titleRef = useRef<HTMLDivElement>(null);
  const projectsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP timeline for title animation
    const tl = gsap.timeline();
    
    if (titleRef.current) {
      tl.fromTo(titleRef.current, 
        { 
          opacity: 0, 
          y: 50,
          scale: 0.8
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out"
        }
      );
    }

    // Parallax effect for projects grid
    if (projectsGridRef.current) {
      gsap.to(projectsGridRef.current, {
        y: -50,
        scrollTrigger: {
          trigger: projectsGridRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <motion.section 
      id="projects"
      className="relative min-h-screen bg-gradient-to-br from-background via-primary/5 to-purple-100/10 dark:from-background dark:via-primary/5 dark:to-purple-900/10 overflow-hidden py-20"
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 space-y-20">
        
        {/* Header Section */}
        <motion.div ref={titleRef} variants={itemVariants} className="text-center space-y-8">
          <SectionTitle 
            icon={<Rocket className="h-6 w-6"/>} 
            title="Projects" 
            subtitle="What I'm building" 
          />

          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent leading-tight"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <TypewriterText text="Featured Projects" />
          </motion.h2>

          <motion.p 
            variants={itemVariants} 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Explore my latest projects showcasing modern web development, creative problem-solving, and innovative solutions.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          ref={projectsGridRef}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* Code Animation Section */}
        <motion.div variants={itemVariants} className="text-center space-y-8">
          <motion.h3 
            className="text-2xl md:text-3xl font-bold"
            variants={itemVariants}
          >
            Building with Modern Technologies
          </motion.h3>
          <GeneratingCodeAnimation />
        </motion.div>

        {/* Floating action indicators */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center items-center gap-8 md:gap-12"
        >
          {[
            { icon: Code, label: "Development", delay: 0 },
            { icon: Palette, label: "Design", delay: 0.2 },
            { icon: Database, label: "Backend", delay: 0.4 },
            { icon: Globe, label: "Deployment", delay: 0.6 },
          ].map(({ icon: Icon, label, delay }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 + delay, duration: 0.6 }}
              className="flex flex-col items-center gap-3"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  delay: delay,
                  ease: "easeInOut"
                }}
                className="p-3 md:p-4 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm hover:bg-primary/20 transition-colors cursor-pointer"
              >
                <Icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </motion.div>
              <motion.span 
                className="text-xs md:text-sm font-medium text-muted-foreground"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: delay }}
              >
                {label}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
}