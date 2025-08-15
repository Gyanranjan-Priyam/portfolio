import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Heart,
  ArrowUp,
  Twitter,
  Instagram,
} from "lucide-react";

export function Footer() {
  const techStack = ["Built with React + TS", "Tailwind", "shadcn/ui"];
  
  const socialLinks = [
    { href: "https://github.com/gyanranjan-priyam", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/gyanranjan-priyam-aa0642321/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://x.com/gr_priyam", icon: Twitter, label: "Twitter" },
    { href: "https://www.instagram.com/gyanranjanpriyam/", icon: Instagram, label: "Instagram" },
    { href: "mailto:web.gyanranjan@gmail.com", icon: Mail, label: "Email" },
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4">
        {/* Main Footer Content */}
        <motion.div 
          className="py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div 
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-bold text-lg mb-4">Gyanranjan Priyam</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Passionate full-stack developer crafting digital experiences with modern technologies. 
                Let's build something amazing together.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map(({ href, icon: Icon, label }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Back to Top */}
            <motion.div
              className="flex flex-col items-center md:items-end"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="rounded-2xl mb-4"
              >
                <ArrowUp className="h-4 w-4 mr-2" />
                Back to Top
              </Button>
              
              <div className="text-center md:text-right">
                <p className="text-xs text-muted-foreground mb-2">
                  Available for opportunities
                </p>
                <Badge className="rounded-2xl px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-700 dark:text-green-300 border-green-500/30">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Open to work
                </Badge>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <motion.div 
          className="pb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div
              className="flex items-center gap-2 text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span>© {new Date().getFullYear()} Gyanranjan Priyam. Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>and lots of coffee</span>
            </motion.div>
            
            <div className="flex items-center gap-3">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge 
                    variant="outline" 
                    className="rounded-2xl border-border/50 hover:border-primary/30 transition-colors duration-300"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
