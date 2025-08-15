import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SectionTitle } from "./common/SectionTitle";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

// Types
interface SkillProps {
  name: string;
  level: number;
}

// Skills data
const skillsData: SkillProps[] = [
  { name: "React", level: 92 },
  { name: "TypeScript", level: 90 },
  { name: "Tailwind CSS", level: 88 },
  { name: "Node.js", level: 80 },
  { name: "Next.js", level: 85 },
  { name: "Python", level: 75 },
];

// SkillCard Component
function SkillCard({ name, level }: SkillProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, rotate: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="rounded-3xl border-2 hover:border-primary/30 hover:shadow-lg transition-all duration-300 bg-background/50 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-lg">{name}</h4>
            <motion.span 
              className="text-primary font-bold text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {level}%
            </motion.span>
          </div>
        </CardHeader>
        <CardContent className="pb-6">
          <div className="relative">
            <Progress value={0} className="h-3 rounded-full bg-muted" />
            <motion.div
              className="absolute top-0 left-0 h-3 bg-gradient-to-r from-primary to-primary/80 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Main Skills Component
export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16">
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants}>
          <SectionTitle 
            icon={<Code2 className="h-6 w-6"/>} 
            title="Skills" 
            subtitle="What I use day to day" 
          />
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {skillsData.map((skill, index) => (
            <motion.div key={skill.name} variants={itemVariants}>
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
