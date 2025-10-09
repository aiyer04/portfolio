import { Card, CardContent } from "./ui/card";
import { Code, Coffee, Users, Zap, BookOpen, Mountain, Music, Plane } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const interests = [
    { icon: Code, label: "Development", delay: 0 },
    { icon: BookOpen, label: "Reading", delay: 0.1 },
    { icon: Mountain, label: "Outdoors", delay: 0.2 },
    { icon: Music, label: "Music", delay: 0.3 },
    { icon: Plane, label: "Travel", delay: 0.4 },
    { icon: Coffee, label: "Coffee", delay: 0.5 },
  ];

  return (
    <section id="about" className="relative py-20 bg-muted/30 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 border border-border/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-lg"
          animate={{
            y: [0, 30, 0],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-12 h-12 border-2 border-muted-foreground/10 rotate-45"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-60 right-1/3 w-8 h-8 bg-primary/5 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl mb-4">
            About Me
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent mx-auto" />
        </motion.div>

        <div className="flex justify-center">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="mb-8 group hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl mb-6 text-center group-hover:text-primary transition-colors duration-300">My Story</h3>
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p>
                       I'm a Computer Engineering student with
                experience in machine learning, complex data analysis, and
                cross-functional project leadership. I am skilled in Python, Java, and cloud
                technologies and am passionate about building innovative tools to drive real-world impact.
                    </p>
                    <p>
                      In my free time, you'll usually find me with a
                      good book or on a walk outside! I'm a
                      big music lover (all kinds!) and I'm always
                      planning the next spot to check off my travel
                      bucket list.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Interests Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            >
              {interests.map((interest, index) => {
                const Icon = interest.icon;
                return (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: interest.delay + 0.6,
                      type: "spring",
                      stiffness: 100 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -2,
                    }}
                    className="flex flex-col items-center p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/30 hover:border-border/60 transition-all duration-300 cursor-default group"
                  >
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-6 h-6 mb-2 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </motion.div>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {interest.label}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}