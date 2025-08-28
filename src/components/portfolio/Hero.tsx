import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useInView,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  MessageSquare,
  Sparkles,
  Download,
  MapPin,
  Calendar,
} from "lucide-react";
import { scrollToId } from "@/lib/data";



// Import the IconCloud component
import { IconCloud } from "@/components/magicui/icon-cloud"; // Adjust path as needed

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
 
export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );
 
  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}

// Custom DrawOutlineButton Component
const DrawOutlineButton = ({
  children,
  onClick,
  className = "",
  ...rest
}: {
  children: React.ReactNode;
  onClick: React.MouseEventHandler;
  className?: string;
  [key: string]: any;
}) => (
  <button
    {...rest}
    onClick={onClick}
    className={`group relative px-8 py-3 font-medium text-foreground transition-colors duration-[400ms] hover:text-primary ${className}`}
  >
    <span className="flex items-center gap-2">{children}</span>
    {/* TOP */}
    <span className="absolute left-0 top-0 h-[2px] w-0 bg-primary transition-all duration-100 group-hover:w-full" />
    {/* RIGHT */}
    <span className="absolute right-0 top-0 h-0 w-[2px] bg-primary transition-all delay-100 duration-100 group-hover:h-full" />
    {/* BOTTOM */}
    <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-primary transition-all delay-200 duration-100 group-hover:w-full" />
    {/* LEFT */}
    <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-primary transition-all delay-300 duration-100 group-hover:h-full" />
  </button>
);

// Simple Typing animation component
const TypeWriter = ({
  texts,
  className = "",
}: {
  texts: string[];
  className?: string;
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const text = texts[currentTextIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (currentText.length < text.length) {
        timeout = setTimeout(() => {
          setCurrentText(text.slice(0, currentText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isTyping, texts]);

  return (
    <span className={className}>
      {currentText}
      <span className="inline-block w-1 h-8 bg-primary ml-1 animate-pulse" />
    </span>
  );
};

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  // Simple parallax effects
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Light mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      mouseX.set(x * 15);
      mouseY.set(y * 15);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Data
  const typewriterTexts = [
    "Full-Stack Developer",
    "UI/UX Enthusiast",
  ];

  const socialLinks = [
    {
      href: "https://github.com/gyanranjan-priyam",
      icon: Github,
      label: "GitHub",
      color: "hover:bg-gray-100 dark:hover:bg-gray-800",
    },
    {
      href: "https://www.linkedin.com/in/gyanranjan-priyam-aa0642321/",
      icon: Linkedin,
      label: "LinkedIn",
      color: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
    },
    {
      href: "https://wa.me/918895220675",
      icon: MessageSquare,
      label: "WhatsApp",
      color: "hover:bg-green-50 dark:hover:bg-green-900/20",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 dark:to-primary/10"
    >
      {/* Simple Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle Gradient Orbs */}
        <motion.div
          style={{ x: springX, y: springY }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{
            x: useTransform(springX, (x) => x * -0.3),
            y: useTransform(springY, (y) => y * -0.3),
          }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-l from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
        />
        {/* Simple rotating background */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-spin"
          style={{ animationDuration: "30s" }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        ref={containerRef}
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex items-center"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              {/* Status Badge */}
              <div
                className={`transform transition-all duration-1000 ${
                  isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <Badge className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-0">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Available for opportunities
                  <Sparkles className="w-4 h-4" />
                </Badge>
              </div>

              {/* Main Heading */}
              <div
                className={`space-y-4 transform transition-all duration-1000 delay-200 ${
                  isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold leading-tight">
                  <span className="block text-foreground">
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent inline-block bg-300% animate-gradient">
                      Gyanranjan Priyam
                    </span>
                  </span>
                  <span className="block mt-2 text-2xl md:text-2xl lg:text-4xl text-muted-foreground">
                    <TypeWriter texts={typewriterTexts} />
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p
                className={`text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl transform transition-all duration-1000 delay-400 ${
                  isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                I create{" "}
                <span className="text-primary font-semibold">beautiful</span>,{" "}
                <span className="text-blue-600 font-semibold">functional</span>, and{" "}
                <span className="text-purple-600 font-semibold">scalable</span> web
                applications that deliver exceptional user experiences.
              </p>

              {/* Location & Availability */}
              <div
                className={`flex flex-wrap gap-6 text-sm text-muted-foreground transform transition-all duration-1000 delay-500 ${
                  isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Based in India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Available for projects</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div
                className={`flex flex-wrap gap-4 pt-4 transform transition-all duration-1000 delay-700 ${
                  isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <Button
                  size="lg"
                  className="group relative overflow-hidden rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                  onClick={() => scrollToId("projects")}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 py-6 text-lg font-semibold border-2 hover:bg-primary/5 transition-all duration-300"
                  onClick={() => scrollToId("contact")}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>

                {/* Custom DrawOutline Resume Button */}
                <DrawOutlineButton
                  onClick={() => window.open("/resume.pdf", "_blank")}
                  className="rounded-lg text-lg"
                >
                  <Download className="w-5 h-5" />
                  Resume
                </DrawOutlineButton>
              </div>

              {/* Social Links */}
              <div
                className={`flex gap-4 pt-4 transform transition-all duration-1000 delay-900 ${
                  isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                {socialLinks.map(({ href, icon: Icon, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full border border-border transition-all duration-300 ${color} hover:scale-110 hover:shadow-lg hover:-translate-y-1`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="sr-only">{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column - Icon Cloud */}
            <div
              className={`relative flex items-center justify-center min-h-[600px] transform transition-all duration-1000 delay-300 ${
                isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="w-full h-96 md:h-[500px] lg:h-[600px] flex items-center justify-center text-muted-foreground/90">
                {/* Icon Cloud goes here */}
                
                <IconCloudDemo />
              </div>
            </div>
          </div>

          {/* Simple Scroll Indicator */}
          <div
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center transition-all duration-1000 delay-1000 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div
              className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center cursor-pointer hover:border-primary/50 transition-colors group"
              onClick={() => scrollToId("about")}
            >
              <div className="w-1 h-3 bg-primary rounded-full mt-2 group-hover:animate-bounce" />
            </div>
            <p className="text-sm text-muted-foreground mt-2">Scroll to explore</p>
          </div>
        </div>
      </motion.div>
      {/* CSS for gradient animation */}
      <style>{`
        .bg-300\\% {
          background-size: 300% 100%;
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
}
