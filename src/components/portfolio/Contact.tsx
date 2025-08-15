import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Send, 
  MapPin, 
  Phone, 
  MessageCircle,
  Sparkles,
  CheckCircle,
  Clock,
  Zap
} from "lucide-react";
import { SectionTitle } from "./common/SectionTitle";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

// Types
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
interface SocialLink {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  color: string;
}

// Contact data
const socialLinks: SocialLink[] = [
  { 
    href: "https://github.com/gyanranjan-priyam", 
    icon: Github, 
    label: "GitHub",
    color: "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
  },
  { 
    href: "https://www.linkedin.com/in/gyanranjan-priyam-aa0642321/", 
    icon: Linkedin, 
    label: "LinkedIn",
    color: "text-[#0077B5] hover:text-[#005582]"
  },
  {
    href: "https://wa.me/+918895220675",
    icon: MessageCircle,
    label: "WhatsApp",
    color: "text-green-600 hover:text-green-800"
  }
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "web.gyanranjan@gmail.com",
    href: "mailto:web.gyanranjan@gmail.com",
    description: "Drop me a line anytime"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 (***) ***-*675",
    href: "tel:+918895220675",
    description: "Let's have a conversation"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nayagarh, Odisha, India",
    href: null,
    description: "Available for remote work"
  }
];

// Animated balls background
function AnimatedBallsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Small floating balls */}
      {[...Array(50)].map((_, i) => {
        const size = Math.random() * 8 + 4; // 4-12px diameter
        const initialX = Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200);
        const initialY = Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800);
        const animationDuration = Math.random() * 8 + 6; // 6-14 seconds
        const delay = Math.random() * 3;
        
        // Create different movement patterns
        const movementPattern = i % 4;
        let animateProps;
        
        if (movementPattern === 0) {
          // Circular motion
          animateProps = {
            x: [0, 100, 0, -100, 0],
            y: [0, -100, -200, -100, 0],
            scale: [1, 1.5, 1, 0.8, 1],
            opacity: [0.3, 0.8, 0.5, 0.9, 0.3],
          };
        } else if (movementPattern === 1) {
          // Vertical floating
          animateProps = {
            y: [0, -150, 0],
            x: [0, Math.random() * 60 - 30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.4, 1, 0.4],
          };
        } else if (movementPattern === 2) {
          // Diagonal drift
          animateProps = {
            x: [0, 120, 0],
            y: [0, -80, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.7, 0.2],
          };
        } else {
          // Random floating
          animateProps = {
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            scale: [1, 1.4, 0.9, 1],
            opacity: [0.3, 0.9, 0.6, 0.3],
          };
        }
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: initialX,
              top: initialY,
              background: `radial-gradient(circle, hsla(${210 + Math.random() * 60}, 70%, 60%, 0.6), hsla(${270 + Math.random() * 60}, 70%, 70%, 0.3))`,
              boxShadow: '0 0 20px hsla(220, 70%, 60%, 0.3)',
            }}
            animate={animateProps}
            transition={{
              duration: animationDuration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay,
            }}
          />
        );
      })}
      {/* Medium bouncing balls */}
      {[...Array(15)].map((_, i) => {
        const size = Math.random() * 15 + 10; // 10-25px diameter
        const initialX = Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200);
        const initialY = Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800);
        
        return (
          <motion.div
            key={`medium-${i}`}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: initialX,
              top: initialY,
              background: `radial-gradient(circle at 30% 30%, hsla(${180 + Math.random() * 80}, 80%, 70%, 0.7), hsla(${240 + Math.random() * 80}, 80%, 60%, 0.4))`,
              boxShadow: '0 0 30px hsla(200, 80%, 70%, 0.4)',
            }}
            animate={{
              y: [0, -200, 0],
              x: [0, Math.sin(i) * 100, 0],
              scale: [1, 1.6, 1],
              opacity: [0.4, 0.9, 0.4],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 6 + 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        );
      })}
      {/* Large slow-moving orbs */}
      {[...Array(6)].map((_, i) => {
        const size = Math.random() * 40 + 30; // 30-70px diameter
        const initialX = Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200);
        const initialY = Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800);
        
        return (
          <motion.div
            key={`large-${i}`}
            className="absolute rounded-full blur-sm"
            style={{
              width: size,
              height: size,
              left: initialX,
              top: initialY,
              background: `radial-gradient(circle at 40% 40%, hsla(${160 + Math.random() * 100}, 60%, 65%, 0.4), hsla(${220 + Math.random() * 100}, 60%, 75%, 0.2))`,
              boxShadow: '0 0 60px hsla(190, 60%, 70%, 0.3)',
            }}
            animate={{
              x: [0, Math.cos(i) * 150, 0],
              y: [0, Math.sin(i) * 150, 0],
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4,
            }}
          />
        );
      })}
    </div>
  );
}

// Success animation component
function SuccessAnimation() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      {/* Popup Container */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0, y: -50 }}
        animate={{ 
          scale: 1, 
          opacity: 1, 
          y: 0,
        }}
        exit={{ 
          scale: 0.5, 
          opacity: 0, 
          y: 50 
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          duration: 0.5
        }}
        className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mx-4 max-w-md w-full"
      >
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-2xl blur-xl -z-10" />
        
        {/* Success Icon with Pulse Effect */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            delay: 0.2, 
            type: "spring", 
            damping: 15, 
            stiffness: 300 
          }}
          className="flex justify-center mb-6"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2, 
              ease: "easeInOut", 
              repeat: Infinity,
              repeatDelay: 1
            }}
            className="relative"
          >
            {/* Pulsing Ring */}
            <motion.div
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full bg-green-400/30"
            />
            <CheckCircle className="h-16 w-16 text-green-500 relative z-10" />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center space-y-3"
        >
          <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">
            Message Sent!
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Thank you for reaching out. I'll get back to you soon.
          </p>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="absolute top-4 right-4"
        >
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-3 h-3 bg-green-400 rounded-full opacity-60"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute bottom-4 left-4"
        >
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 0.8, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-2 h-2 bg-emerald-400 rounded-full opacity-40"
          />
        </motion.div>

        {/* Optional Close Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          onClick={() => {/* Handle close */}}
        >
          <svg 
            className="w-5 h-5 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}


// Main Contact Component
export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      console.log('Form submitted:', formData);
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setShowSuccess(false), 3000);
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-4 py-20 min-h-screen">
      {/* Animated Balls Background */}
      <AnimatedBallsBackground />
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <SectionTitle 
            icon={<Mail className="h-6 w-6"/>}
            title="Get In Touch" 
            subtitle="Let's build something amazing together" 
          />
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto"
          >
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
          </motion.p>
        </motion.div>
        <motion.div variants={cardVariants} className="relative">
          <Card className="rounded-3xl border-2 border-primary/20 backdrop-blur-md bg-background/90 shadow-2xl overflow-hidden relative">
            
            <CardContent className="relative p-8 md:p-12 grid lg:grid-cols-5 gap-12">
              {/* Contact Form */}
              <motion.div
                className="lg:col-span-3 space-y-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full blur-xl"
                  />
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                    Drop me a line
                  </h3>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Tell me about your project, timeline, and goals. I'll respond within 24 hours.
                  </p>
                </div>
                
                <div className="relative">
                  <AnimatePresence>
                    {showSuccess && <SuccessAnimation />}
                  </AnimatePresence>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div whileFocus={{ scale: 1.02 }} className="relative group">
                        <Input 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="rounded-2xl border-2 p-4 bg-background/50 backdrop-blur-sm transition-all duration-300 group-focus-within:border-primary/50 group-focus-within:shadow-lg group-focus-within:shadow-primary/20" 
                          placeholder="Your name" 
                          required 
                        />
                      </motion.div>
                      
                      <motion.div whileFocus={{ scale: 1.02 }} className="relative group">
                        <Input 
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="rounded-2xl border-2 p-4 bg-background/50 backdrop-blur-sm transition-all duration-300 group-focus-within:border-primary/50 group-focus-within:shadow-lg group-focus-within:shadow-primary/20" 
                          placeholder="your@email.com" 
                          required 
                        />
                      </motion.div>
                    </div>
                    
                    <motion.div whileFocus={{ scale: 1.02 }} className="relative group">
                      <Textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="rounded-2xl border-2 p-4 bg-background/50 backdrop-blur-sm transition-all duration-300 group-focus-within:border-primary/50 group-focus-within:shadow-lg group-focus-within:shadow-primary/20 min-h-32" 
                        placeholder="Tell me about your project ideas, timeline, and any specific requirements..." 
                        rows={6} 
                        required
                      />
                    </motion.div>
                    
                    <div className="flex flex-wrap gap-4">
                      <motion.div 
                        whileHover={{ scale: 1.05, y: -2 }} 
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="rounded-2xl bg-gradient-to-r from-primary via-primary/90 to-primary/80 hover:from-primary/95 hover:via-primary hover:to-primary shadow-lg px-8 py-4 text-lg group relative overflow-hidden"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.6 }}
                          />
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="mr-2"
                              >
                                <Sparkles className="h-5 w-5"/>
                              </motion.div>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform"/>
                              Send Message
                            </>
                          )}
                        </Button>
                      </motion.div>
                      
                      <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                          type="button" 
                          variant="outline" 
                          className="rounded-2xl border-2 px-8 py-4 text-lg hover:bg-primary/10 backdrop-blur-sm" 
                          onClick={() => window.location.href = 'mailto:web.gyanranjan@gmail.com'}
                        >
                          <Mail className="mr-2 h-5 w-5"/>
                          Quick Email
                        </Button>
                      </motion.div>
                    </div>
                  </form>
                </div>
              </motion.div>
              
              {/* Contact Info & Social Links */}
              <motion.div 
                className="lg:col-span-2 space-y-12"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Contact Information */}
                <div>
                  <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Zap className="h-6 w-6 text-primary"/>
                    Quick Connect
                  </h4>
                  <div className="space-y-4">
                    {contactInfo.map(({ icon: Icon, label, value, href, description }, index) => (
                      <motion.div
                        key={label}
                        className="group p-4 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 border border-transparent hover:border-primary/30"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-start gap-4">
                          <motion.div 
                            className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors"
                            whileHover={{ rotate: 5 }}
                          >
                            <Icon className="h-6 w-6 text-primary" />
                          </motion.div>
                          <div className="flex-1">
                            <p className="text-sm text-muted-foreground mb-1">{label}</p>
                            {href ? (
                              <a 
                                href={href} 
                                className="font-semibold hover:text-primary transition-colors text-lg"
                              >
                                {value}
                              </a>
                            ) : (
                              <p className="font-semibold text-lg">{value}</p>
                            )}
                            <p className="text-xs text-muted-foreground mt-1">{description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                {/* Social Links - Small icons only */}
                <div>
                  <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <ExternalLink className="h-6 w-6 text-primary"/>
                    Find me online
                  </h4>
                  <motion.div className="flex items-center gap-8 justify-start">
                    {socialLinks.map(({ href, icon: Icon, label, color }, index) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className={`${color} p-3 rounded-full transition-all duration-300 cursor-pointer hover:bg-primary/15 hover:shadow-lg`}
                        whileHover={{ scale: 1.3, rotate: 15, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        aria-label={label}
                      >
                        <Icon className="h-8 w-8" />
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
                {/* Response Time Badge */}
                <motion.div 
                  className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20 backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <Badge className="mb-3 bg-green-500/10 text-green-600 border-green-500/30">
                        Fast Response
                      </Badge>
                      <h5 className="font-semibold mb-2">Quick Turnaround</h5>
                      <p className="text-sm text-muted-foreground">
                        I typically respond within 24 hours. For urgent projects, expect a reply within a few hours.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
