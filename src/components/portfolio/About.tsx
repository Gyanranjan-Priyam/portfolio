import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Palette, ChevronDown, ChevronUp, Award, Heart, Coffee } from "lucide-react";
import { SectionTitle } from "./common/SectionTitle";

// Simplified animation variants for better performance



// Extended about data
const aboutData = {
  introduction: [
    "I’m an electrical engineering student with a passion for technology and web development. Alongside my core studies, I explore modern frontend tools like React, TypeScript, and Tailwind to build user-friendly and scalable applications.",
    "My recent work centers on React + TypeScript, design systems with Tailwind, and high‑quality UI with shadcn/ui."
  ],
  technologies: [
    "React", "TypeScript", "Node.js",
    "Tailwind", "shadcn/ui", "Docker", "AWS", "Git" , "MongoDB" , "Express"
  ],
  quickFacts: [
    "Remote-first, async-friendly",
    "Fan of performance budgets",
    "Design‑dev collaboration stan",
    "Open source contributor",
    "Coffee enthusiast ☕",
    "Always learning new tech"
  ],
  interests: [
    { icon: Coffee, label: "Coffee brewing", description: "Third-wave coffee enthusiast" },
    { icon: Award, label: "Open Source", description: "Contributing to developer tools" },
    { icon: Heart, label: "Learning", description: "Always exploring new technologies" }
  ],
  achievements: [
  "Built projects combining Electrical concepts with Web Development",
  "Contributed to student tech fests and departmental projects",
  "Created multiple React + TypeScript applications",
  "Explored MERN stack development"
]

};

// Main Enhanced About Component
export function About() {
  const [showMore, setShowMore] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        onViewportEnter={() => setIsInView(true)}
        className="space-y-8"
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle 
            icon={<Palette className="h-6 w-6"/>} 
            title="About" 
            subtitle="Getting to know me" 
          />
        </motion.div>
        
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="rounded-3xl border-2 backdrop-blur-sm bg-background/50 hover:bg-background/80 transition-all duration-500">
            <CardContent className="p-8 md:p-10 grid md:grid-cols-3 gap-8">
              
              {/* Main Content */}
              <div className="md:col-span-2 space-y-6">
                {/* Introduction */}
                {aboutData.introduction.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="text-lg leading-relaxed"
                  >
                    {paragraph.split(/(\\b(?:React \+ TypeScript|Next\.js|Tailwind|shadcn\/ui)\\b)/g).map((part, partIndex) => {
                      const highlightedTerms = ['React + TypeScript', 'Next.js', 'Tailwind', 'shadcn/ui'];
                      if (highlightedTerms.includes(part)) {
                        return (
                          <span key={partIndex} className="font-semibold text-primary">
                            {part}
                          </span>
                        );
                      }
                      return part;
                    })}
                  </motion.p>
                ))}
                
                {/* Technology Stack */}
                <motion.div 
                  className="flex flex-wrap gap-3 pt-4"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {aboutData.technologies.slice(0, showMore ? aboutData.technologies.length : 7).map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="rounded-2xl px-4 py-2 bg-primary/10 hover:bg-primary/20 transition-colors cursor-pointer"
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                  
                  {aboutData.technologies.length > 7 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.8 }}
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowMore(!showMore)}
                        className="rounded-2xl h-8 hover:bg-primary/10 transition-colors"
                      >
                        {showMore ? (
                          <>Show Less <ChevronUp className="ml-1 h-3 w-3" /></>
                        ) : (
                          <>Show More <ChevronDown className="ml-1 h-3 w-3" /></>
                        )}
                      </Button>
                    </motion.div>
                  )}
                </motion.div>

                {/* Expandable Achievements Section */}
                <AnimatePresence mode="wait">
                  {showMore && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden space-y-4"
                    >
                      <h5 className="font-semibold">Key Achievements</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {aboutData.achievements.map((achievement, index) => (
                          <motion.div
                            key={achievement}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="p-3 rounded-2xl bg-muted/20 border border-border/50 hover:bg-muted/30 transition-colors"
                          >
                            <span className="text-sm font-medium">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Sidebar */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* Quick Facts */}
                <div>
                  <h4 className="font-bold text-xl mb-4">Quick Facts</h4>
                  <ul className="space-y-3">
                    {aboutData.quickFacts.map((fact, index) => (
                      <motion.li
                        key={fact}
                        initial={{ opacity: 0, x: 10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{fact}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Interests */}
                <div>
                  <h5 className="font-semibold mb-3">Interests</h5>
                  <div className="space-y-3">
                    {aboutData.interests.map(({ icon: Icon, label, description }, index) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                        className="flex items-start gap-3 p-3 rounded-2xl bg-muted/20 hover:bg-muted/30 transition-colors cursor-pointer"
                        whileHover={{ y: -2 }}
                      >
                        <Icon className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-sm font-medium">{label}</div>
                          <div className="text-xs text-muted-foreground">{description}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Status */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="p-4 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                      Available for projects
                    </span>
                  </div>
                  <p className="text-xs text-green-600 dark:text-green-400">
                    Open to new opportunities and collaborations
                  </p>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
