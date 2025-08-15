// React & Motion
import { motion, useScroll } from "framer-motion";

// Providers
import { ThemeProvider } from "@/components/providers/ThemeProvider";

// Portfolio Sections
import { Navbar } from "@/components/portfolio/common/Navbar";
import { Hero } from "./components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

// Common Components
// import { FloatingElements } from "@/components/portfolio/common/FloatingElements";

// App Component
function Portfolio() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 text-foreground relative overflow-hidden">
      {/* <FloatingElements /> */}
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}
