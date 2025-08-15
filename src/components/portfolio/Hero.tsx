/* ──────────────────────────────────────────────────────────────────
   Hero.tsx
   -----------------------------------------------------------------
   Technologies: shadcn/ui, framer-motion, Tailwind CSS, lucide-react
   ----------------------------------------------------------------- */

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useMemo } from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  MessageSquare,
  Sparkles,
  Code,
  Zap,
} from "lucide-react";
import { containerVariants, itemVariants } from "@/lib/animations";
import { scrollToId } from "@/lib/data";
import { TypingAnimation } from "./common/TypingAnimation";
import { SocialIcon } from "@/components/portfolio/common/SocialIcon";
import { Squares } from "@/components/ui/squares-background";

/* ────────────────────────────────────────────────────────────────── */

export function Hero() {
  /* 1. Parallax based on page scroll */
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  /* 2. Mouse parallax (spring-smoothed) */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document
        .querySelector<HTMLElement>("#hero-section")
        ?.getBoundingClientRect();
      if (!rect) return;
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      mouseX.set(x * 20);
      mouseY.set(y * 20);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  /* 3. Social links */
  const socialLinks = [
    {
      href: "https://github.com/gyanranjan-priyam",
      icon: Github,
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      href: "https://www.linkedin.com/in/gyanranjan-priyam-aa0642321/",
      icon: Linkedin,
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      href: "https://wa.me/918895220675",
      icon: MessageSquare,
      label: "WhatsApp",
      color: "hover:text-green-600",
    },
  ] as const;

  /* 4. Memoised floating particles (to avoid re-randomising every render) */
  const floating = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        size: Math.random() * 60 + 20,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
      })),
    []
  );

  /* ─────────────────────────────────────────────────────────────── */
  return (
    <section
      id="hero-section"
      className="relative mx-auto flex min-h-screen max-w-6xl items-center overflow-hidden px-4 py-12 md:py-20"
    >
      {/* A. Subtle square grid background */}
      <div className="absolute inset-0 -z-20">
        <Squares
          direction="diagonal"
          speed={0.3}
          squareSize={40}
          borderColor="rgba(var(--primary),0.1)"
          hoverFillColor="rgba(var(--primary),0.05)"
        />
      </div>

      {/* B. Parallax orbs & floating particles */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        {/* interactive orbs that follow the cursor */}
        <motion.div
          style={{ x: springX, y: springY }}
          className="absolute top-20 left-10 h-72 w-72 rounded-full bg-gradient-to-r from-primary/20 via-primary/10 to-transparent blur-3xl"
        />
        <motion.div
          style={{
            x: useTransform(springX, (v) => v * -0.5),
            y: useTransform(springY, (v) => v * -0.5),
          }}
          className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-gradient-to-l from-purple-500/20 via-pink-500/10 to-transparent blur-3xl"
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/5 via-purple-500/5 to-primary/5 blur-3xl"
          animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        {/* small floating particles */}
        {floating.map((p) => (
          <motion.div
            key={p.id}
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            className="absolute rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 blur-sm"
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* C. Main content */}
      <div className="relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl space-y-10 text-center"
        >
          {/* badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <Badge className="group relative flex items-center gap-2 rounded-2xl border-green-500/30 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-400/20 px-6 py-3 text-green-700 backdrop-blur-sm dark:text-green-300">
              <motion.span
                className="h-3 w-3 rounded-full bg-green-500"
                animate={{
                  scale: [1, 1.3, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(34,197,94,0.7)",
                    "0 0 0 9px rgba(34,197,94,0)",
                    "0 0 0 0 rgba(34,197,94,0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Open to opportunities
              <Sparkles className="h-4 w-4" />
            </Badge>
          </motion.div>

          {/* heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl"
          >
            Hi, I&apos;m{" "}
            <motion.span
              className="inline-block bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 100%" }}
            >
              Gyanranjan Priyam
            </motion.span>
            <br />
            <TypingAnimation
              text="Full-Stack Developer"
              className="mt-4 inline-block underline decoration-primary/30 decoration-4 underline-offset-8"
            />
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={itemVariants}
            className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl"
          >
            I craft{" "}
            <span className="relative font-semibold text-primary">
              fast
              <Zap className="ml-1 inline h-5 w-5" />
            </span>
            , accessible web apps with delightful UX. I love{" "}
            <span className="font-semibold text-blue-500">TypeScript</span>,{" "}
            <span className="font-semibold text-cyan-500">React</span> and
            building clean UI systems.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 pt-2"
          >
            {/* View projects */}
            <motion.div whileHover={{ y: -2, scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="relative z-0 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-primary to-purple-600 px-8 py-4 text-lg font-semibold shadow-lg"
                onClick={() => scrollToId("projects")}
              >
                {/* shimmer */}
                {/* <motion.span
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                /> */}
                View Projects
                <ArrowRight className="h-6 w-6" />
              </Button>
            </motion.div>

            {/* Get in touch */}
            <motion.div whileHover={{ y: -2, scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="relative z-0 flex items-center gap-3 rounded-2xl border-primary px-8 py-4 text-lg font-semibold backdrop-blur-sm"
                onClick={() => scrollToId("contact")}
              >
                {/* animated border glow */}
                <motion.span
                  className="absolute inset-0 rounded-2xl border-2 border-primary/30"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Get in Touch
                <Mail className="h-6 w-6" />
              </Button>
            </motion.div>
          </motion.div>

          {/* social icons */}
          <motion.div variants={itemVariants} className="pt-10">
            <div className="flex items-center justify-center gap-8">
              {socialLinks.map(({ href, icon: Icon, label, color }, i) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                >
                  <SocialIcon
                    href={href}
                    label={label}
                    className={`rounded-full p-3 transition-colors ${color}`}
                  >
                    <Icon className="h-6 w-6" />
                  </SocialIcon>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* scroll hint */}
          <motion.div variants={itemVariants} className="pt-20 flex flex-col items-center">
            <motion.div
              className="flex h-12 w-7 cursor-pointer items-center justify-center rounded-full border-2 border-muted-foreground/30 bg-background/20 backdrop-blur-sm"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              onClick={() => scrollToId("about")}
            >
              <motion.span
                className="mt-2 h-4 w-1.5 rounded-full bg-gradient-to-b from-primary to-purple-600"
                animate={{ y: [0, 16, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            <p className="mt-4 text-sm font-medium text-muted-foreground/60">
              Scroll to explore
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
