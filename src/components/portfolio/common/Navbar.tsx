import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, Sun, Moon, Menu, X, Download
} from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { scrollToId } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = ['About', 'Projects', 'Skills', 'Contact'];

  const handleNavClick = (item: string) => {
    setActiveTab(item);
    scrollToId(item.toLowerCase());
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Tubelight Navbar */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className="flex items-center gap-2 bg-background/80 border border-border/50 backdrop-blur-lg py-2 px-3 rounded-full shadow-lg">
          
          {/* Brand Logo */}
          <motion.div 
            className="flex items-center gap-2 px-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="h-6 w-6 rounded-lg bg-gradient-to-br from-primary to-primary/80 grid place-items-center"
              whileHover={{ scale: 1.1, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <Sparkles className="h-3 w-3 text-primary-foreground" />
            </motion.div>
            <span className="font-semibold text-sm">Gyanranjan Priyam</span>
          </motion.div>

          {/* Separator */}
          <div className="w-px h-6 bg-border/50 mx-1" />

          {/* Home Button */}
          <button
            onClick={() => {
              setActiveTab("Home");
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={cn(
              "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300",
              "text-foreground/70 hover:text-primary",
              activeTab === "Home" && "text-primary"
            )}
          >
            Home
            {activeTab === "Home" && (
              <motion.div
                layoutId="desktop-tubelight"
                className="absolute inset-0 w-full bg-primary/10 rounded-full -z-10"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                  <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                  <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                  <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                </div>
              </motion.div>
            )}
          </button>
          
          {/* Navigation Items */}
          {navItems.map((item, index) => {
            const isActive = activeTab === item;

            return (
              <motion.button
                key={item}
                onClick={() => handleNavClick(item)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300",
                  "text-foreground/70 hover:text-primary",
                  isActive && "text-primary"
                )}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item}

                {/* Tubelight Effect */}
                {isActive && (
                  <motion.div
                    layoutId="desktop-tubelight"
                    className="absolute inset-0 w-full bg-primary/10 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                      <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </motion.button>
            );
          })}

          {/* Separator */}
          <div className="w-px h-6 bg-border/50 mx-1" />

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          {/* Resume Button */}
          <motion.a 
            href="#" 
            download 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="sm"
              className="rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg px-4 py-2"
            >
              <Download className="mr-1 h-3 w-3"/>
              Resume
            </Button>
          </motion.a>
        </div>
      </div>

      {/* Mobile Sticky Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 border-b border-border/50 md:hidden">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="h-8 w-8 rounded-xl bg-gradient-to-br from-primary to-primary/80 grid place-items-center shadow-lg"
              whileHover={{ scale: 1.1, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </motion.div>
            <span className="font-bold tracking-tight text-base">Gyanranjan Priyam</span>
          </motion.div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'dark' ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="p-2 rounded-xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobileMenuOpen ? 'close' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-border/50 bg-background/95 backdrop-blur-md"
            >
              <div className="px-4 py-4 space-y-2">
                {/* Home Button */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start rounded-2xl" 
                    onClick={() => {
                      setActiveTab("Home");
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Home
                  </Button>
                </motion.div>

                {/* Navigation Items */}
                {navItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: (index + 1) * 0.05 }}
                  >
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start rounded-2xl" 
                      onClick={() => handleNavClick(item)}
                    >
                      {item}
                    </Button>
                  </motion.div>
                ))}

                {/* Resume Button */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: (navItems.length + 1) * 0.05 }}
                  className="pt-2"
                >
                  <a href="#" download className="block">
                    <Button 
                      className="w-full rounded-2xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Download className="mr-2 h-4 w-4"/>
                      Download Resume
                    </Button>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
