import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
      ease: [0.4, 0, 0.2, 1] // cubic-bezier easing
    }
  },
};

// Types
export interface ExperienceItemProps {
  role: string;
  org: string;
  time: string;
  bullets: string[];
}

// Experience data
const experienceData: ExperienceItemProps[] = [
  {
    role: "Frontend Engineer",
    org: "Self (Freelance)",
    time: "2024 — Present",
    bullets: [
      "Led design system with shadcn/ui",
      "Improved CLS/LCP by 35%",
      "Built RBAC admin tools in Next.js"
    ]
  },
  
 
];

// Education data
const educationData: ExperienceItemProps[] = [
  {
    role: "B. Tech in Electrical Engineering",
    org: "Government College of Engineering, Kalahandi",
    time: "2024 — Present",
    bullets: [
      "Passed with distinction",
      "Web development specialization",
      "Codebreaker club member"
    ]
  },
  {
    role: "Intermediate",
    org: "Divine Higher Secondary School, Nayagarh",
    time: "2021-2023",
    bullets: [
      "College Topper",
      "Secured 85% in Board Exams",
      "Science Club Member"
    ]
  },
  {
    role: "Online Courses",
    org: "Various Platforms",
    time: "Ongoing",
    bullets: [
      "NPTEL - Programming with GenAI",
      "NPTEL - Web Development",
      "Coursera - Fun with Python"
    ]
  }
];

// ExperienceItem Component
function ExperienceItem({ role, org, time, bullets }: ExperienceItemProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="rounded-3xl border-2 hover:border-primary/30 hover:shadow-lg transition-all duration-300 bg-background/50 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h4 className="font-bold text-lg leading-tight">{role}</h4>
              <p className="text-primary font-semibold">{org}</p>
            </div>
            <Badge variant="outline" className="rounded-2xl whitespace-nowrap border-primary/30">
              {time}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {bullets.map((bullet, index) => (
              <motion.li 
                key={index}
                className="flex items-start gap-3 text-muted-foreground"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>{bullet}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Main Experience Component
export function Experience() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants}>
          <SectionTitle 
            title="Background" 
            subtitle="Where I've worked & studied" 
          />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="rounded-2xl bg-muted/50 p-1">
              <TabsTrigger 
                value="experience" 
                className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Experience
              </TabsTrigger>
              <TabsTrigger 
                value="education" 
                className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Education
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="experience" className="mt-8">
              <motion.div 
                className="grid md:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                {experienceData.map((experience, index) => (
                  <motion.div key={`${experience.org}-${index}`} variants={itemVariants}>
                    <ExperienceItem {...experience} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="education" className="mt-8">
              <motion.div 
                className="grid md:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                {educationData.map((education, index) => (
                  <motion.div key={`${education.org}-${index}`} variants={itemVariants}>
                    <ExperienceItem {...education} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </section>
  );
}
