import { Button } from "./ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "framer-motion";
import { FadeInUp, SlideInLeft, SlideInRight } from "./ScrollAnimations";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Left text/content */}
          <SlideInLeft className="flex-[2] text-center lg:text-left">
            <motion.h1 
              className="text-6xl lg:text-8xl font-bold mb-10 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Hi! I'm{" "}
              <span className="gradient-text animate-pulse">Anjali Iyer</span>
            </motion.h1>
            
            <FadeInUp delay={0.4}>
              <h2 className="text-3xl lg:text-4xl text-muted-foreground mb-12">
                Welcome to my portfolio!
              </h2>
            </FadeInUp>

            {/* Action button */}
            <FadeInUp delay={0.6}>
              <div className="flex justify-center lg:justify-start mb-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="px-10 py-8 text-2xl magnetic-hover glass-effect cursor-hover"
                    onClick={() => scrollToSection("projects")}
                  >
                    View My Work
                    <ArrowDown className="ml-2 h-6 w-6 animate-bounce" />
                  </Button>
                </motion.div>
              </div>
            </FadeInUp>

            {/* Social links */}
            <FadeInUp delay={0.8}>
              <div className="flex gap-12 justify-center lg:justify-start">
                {[
                  { icon: Github, href: "https://github.com/aiyer04", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/anjali-iy/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:aiyer329@gatech.edu", label: "Email" },
                ].map(({ icon: Icon, href, label }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button variant="ghost" size="lg" asChild className="cursor-hover">
                      <a
                        href={href}
                        target={label !== "Email" ? "_blank" : undefined}
                        rel={label !== "Email" ? "noopener noreferrer" : undefined}
                        aria-label={label}
                      >
                        <Icon className="h-24 w-24" />
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </FadeInUp>
          </SlideInLeft>

          {/* Right side image */}
          <SlideInRight className="flex-1 flex justify-center lg:justify-start lg:pl-6">
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <ImageWithFallback
                src="https://freesvg.org/img/1678869917programming-language-on-screen.png"
                alt="Laptop illustration"
                className="w-72 h-60 object-contain"
              />
            </motion.div>
          </SlideInRight>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="h-8 w-8 text-muted-foreground animate-pulse" />
      </motion.div>
    </section>
  );
}
