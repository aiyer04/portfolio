import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInUp } from "./ScrollAnimations";

export function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/aiyer04",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/anjali-iy/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:aiyer329@gatech.edu",
      label: "Email",
    },
  ];

  return (
    <footer className="relative py-12 border-t bg-gradient-to-t from-muted/20 to-background overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeInUp>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.div
              className="text-center md:text-left"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-lg mb-2 gradient-text">
                Anjali Iyer
              </h3>
              <p className="text-muted-foreground">
                Let's Connect!
              </p>
            </motion.div>

            <div className="flex gap-3">
              {socialLinks.map(
                ({ icon: Icon, href, label }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="cursor-hover glass-effect"
                    >
                      <a
                        href={href}
                        target={
                          label !== "Email"
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          label !== "Email"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        aria-label={label}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    </Button>
                  </motion.div>
                ),
              )}
            </div>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <div className="mt-8 pt-8 border-t border-border/50 text-center text-muted-foreground">
            <motion.p
              className="flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              &copy; 2024 Anjali Iyer
            </motion.p>
          </div>
        </FadeInUp>
      </div>
    </footer>
  );
}