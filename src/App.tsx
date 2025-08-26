"use client";
import React, { useEffect, useRef, useMemo, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import Loader from "@/components/portfolio/common/Loader";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/portfolio/common/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/footer";

function FloatingElements() {
  const floatingRef = useRef<HTMLDivElement>(null);
  const floatingElements = useMemo(() =>
    Array.from({ length: 8 }, (_, i) => ({
      id: `shape-${i}`,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 40 + 20,
      hue: Math.random() * 60 + 200,
      delay: i * 0.5,
    })), []);
  const codeElements = useMemo(() =>
    ['{ }', '< />', '( )', '=>', '&&'].map((code, i) => ({
      id: `code-${i}`,
      code,
      left: Math.random() * 100,
      top: Math.random() * 100,
      fontSize: Math.random() * 6 + 12,
      delay: i * 0.3,
    })), []);
  return (
    <div ref={floatingRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {floatingElements.map(element => (
        <motion.div key={element.id} className="absolute opacity-10 dark:opacity-20"
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            background: `hsl(${element.hue}, 50%, 50%)`,
            borderRadius: '50%',
            filter: 'blur(1px)',
          }}
          animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{
            duration: 15 + element.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay,
          }} />
      ))}
      {codeElements.map(element => (
        <motion.div key={element.id}
          className="absolute text-primary/5 dark:text-primary/10 font-mono font-bold select-none"
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            fontSize: `${element.fontSize}px`,
          }}
          animate={{ y: [0, -20, 0], opacity: [0.05, 0.15, 0.05], rotate: [0, 5, 0] }}
          transition={{
            duration: 12 + element.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay,
          }}>
          {element.code}
        </motion.div>
      ))}
      <motion.div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-l from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} />
    </div>
  );
}
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80, damping: 25, restDelta: 0.001
  });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-primary z-50 origin-left"
      style={{ scaleX }}
    />
  );
}
function SectionWrapper({
  children,
  id,
  className = "",
  delay = 0
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.section id={id} className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}>
      {children}
    </motion.section>
  );
}
function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let ticking = false;
    const optimizedScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => { ticking = false; });
        ticking = true;
      }
    };
    window.addEventListener('scroll', optimizedScroll, { passive: true });
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      window.removeEventListener('scroll', optimizedScroll);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 text-foreground relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-purple-500/3 dark:from-primary/5 dark:to-purple-500/5" />
        <div className="absolute inset-0 opacity-10 dark:opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.05) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
      </div>
      <FloatingElements />
      <ScrollProgressBar />
      <Navbar />
      <Hero />
      <SectionWrapper id="about" delay={0.1}>
        <About />
      </SectionWrapper>
      <SectionWrapper id="projects" delay={0.2}>
        <Projects />
      </SectionWrapper>
      <SectionWrapper id="skills" delay={0.1}>
        <Skills />
      </SectionWrapper>
      <SectionWrapper id="experience" delay={0.2}>
        <Experience />
      </SectionWrapper>
      <SectionWrapper id="contact" delay={0.1}>
        <Contact />
      </SectionWrapper>
      <SectionWrapper delay={0.2}>
        <Footer />
      </SectionWrapper>
    </div>
  );
}

const ThemeProviderWrapper = React.memo(({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen">
    {children}
  </div>
));
ThemeProviderWrapper.displayName = 'ThemeProviderWrapper';

export default function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    let timeoutDuration = 5000;
    if (typeof window !== 'undefined' && (navigator as any).connection) {
      const effectiveType = ((navigator as any).connection.effectiveType || '').toLowerCase();
      if (effectiveType.includes('4g')) timeoutDuration = 2500;
      else if (effectiveType.includes('3g')) timeoutDuration = 4000;
      else if (effectiveType.includes('2g')) timeoutDuration = 6000;
      else timeoutDuration = 5000;
    }
    const timer = setTimeout(() => setShowLoader(false), timeoutDuration);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <ThemeProviderWrapper>
        <AnimatePresence mode="wait">
          {showLoader ? (
            <motion.div
              key="splash"
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{
                opacity: 0,
                scale: 0.96,
                transition: { duration: 0.7, ease: "easeInOut" }
              }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
              style={{ willChange: "opacity, transform" }}
            >
              <Loader />
            </motion.div>
          ) : (
            <motion.div
              key="main"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8, ease: "easeOut" }
              }}
              exit={{}}
              style={{ minHeight: "100vh" }}>
              <Portfolio />
            </motion.div>
          )}
        </AnimatePresence>
      </ThemeProviderWrapper>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        * {
          transition-property: color, background-color, border-color;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: hsl(var(--background)); }
        ::-webkit-scrollbar-thumb {
          background: hsl(var(--primary) / 0.3);
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover { background: hsl(var(--primary) / 0.5); }
        .will-change-transform { will-change: transform; }
        .will-change-opacity { will-change: opacity; }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        .dark .will-change-transform { will-change: transform; }
        .dark .will-change-opacity { will-change: opacity; }
        
      `}</style>
    </ThemeProvider>
  );
}
