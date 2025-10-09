import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, ExternalLink, Brain, Activity, CloudSun, Tag, Music2, UtensilsCrossed} from "lucide-react";
import { motion } from "framer-motion";
import { FadeInUp, StaggeredContainer, StaggeredItem } from "./ScrollAnimations";

export function Projects() {
  const projects = [
    {
      title: "Seizure Prediction Project",
      description:
        "AI-driven system for predicting seizures using machine learning",
      icon: Brain,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-100 dark:bg-purple-900/20",
      technologies: [
        "Python",
        "TensorFlow",
        "NumPy",
        "Scikit-learn",
      ],
      githubUrl: null, // No GitHub link yet
      presentationUrl: "https://gtvault.sharepoint.com/:p:/s/ECE4782Group3/EfQlZb0CpapBqxNmbBW_q_sBcvVffvddlO70bkSXIfc9pA?e=dAFFu1", // Add your presentation URL
      caseStudyURL: null,
    },
    {
      title: "HaloFit Project",
      description:
        "Fitness tracking application with gamification elements",
      icon: Activity,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-100 dark:bg-emerald-900/20",
      technologies: ["React", "Node.js", "TypeScript"],
      githubUrl:
        "https://github.com/taniabinu15/halofit", // Add your GitHub URL
      presentationUrl: null, // No presentation yet
      caseStudyURL: null,
    },
    {
      title: "React Weather App",
      description:
        "A React app that fetches and displays real-time weather data",
      icon: CloudSun,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-100 dark:bg-purple-900/20",
      technologies: ["React", "HTML", "CSS"],
      githubUrl:
        "https://github.com/aiyer04/Weather-App-with-React", // Add your GitHub URL
      presentationUrl: null, // No presentation yet
      caseStudyURL: null,
    },
    {
      title: "Discount Compiler Extension Case Study",
      description: "A detailed analysis of the Discount Compiler extension, its architecture, and implementation considerations.",
      icon: Tag,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-100 dark:bg-emerald-900/20",
      technologies: ["TypeScript", "React", "Chrome Extensions"],
      githubUrl: "https://github.com/aiyer04/discount-compiler-extension",
      presentationUrl: null,
      caseStudyURL: "https://aiyer04.github.io/discount-compiler-extension/case-study.html",
    },
    {
      title: "Spotify Study Plan Optimizer Case Study",
      description: "A detailed analysis of the Spotify Study Plan Optimizer, its architecture, and implementation considerations.",
      icon: Music2,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-100 dark:bg-purple-900/20",
      technologies: ["TypeScript", "React", "Product Management"],
      githubUrl: "https://github.com/aiyer04/spotify-study-playlist",
      presentationUrl: null,
      caseStudyURL: "https://aiyer04.github.io/spotify-study-playlist/case-study.html",
    },
    {
      title: "Custom Meal Plan App Case Study",
      description: "A detailed analysis of the Custom Meal Plan App, its architecture, and implementation considerations.",
      icon: UtensilsCrossed,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-100 dark:bg-emerald-900/20",
      technologies: ["JavaScript", "React", "Product Management", "Mobile App Development"],
      githubUrl: "https://github.com/aiyer04/Custom-Meal-Prep",
      presentationUrl: null,
      caseStudyURL: "https://aiyer04.github.io/Custom-Meal-Prep/case-study.html",
    },
    // Future projects can have both or either
    // {
    //   title: "Future Project",
    //   description: "Description of future project",
    //   image: "/api/placeholder/400/300",
    //   technologies: ["Tech1", "Tech2"],
    //   githubUrl: "https://github.com/...",
    //   presentationUrl: "https://presentation-url...",
    // },
  ];

    // Future projects can have both or either
    // {
    //   title: "Future Project",
    //   description: "Description of future project",
    //   image: "/api/placeholder/400/300",
    //   technologies: ["Tech1", "Tech2"],
    //   githubUrl: "https://github.com/...",
    //   presentationUrl: "https://presentation-url...",
    // },

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent mx-auto" />
        </FadeInUp>
        
        <StaggeredContainer className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <StaggeredItem key={index}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Card className="overflow-hidden group hover:shadow-xl transition-all duration-500 animated-border glass-effect cursor-hover h-full">
                  <div className="relative h-48 flex items-center justify-center overflow-hidden bg-gradient-to-br from-muted/50 to-muted/80">
                    <motion.div 
                      className={`p-6 rounded-full ${project.iconBg} shadow-lg`}
                      whileHover={{ 
                        scale: 1.15,
                        rotate: 10 
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300,
                        duration: 0.3 
                      }}
                    >
                      <project.icon className={`h-16 w-16 ${project.iconColor}`} />
                    </motion.div>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            delay: techIndex * 0.1,
                            type: "spring",
                            stiffness: 200
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge
                            variant="outline"
                            className="text-xs magnetic-hover"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button size="sm" variant="outline" asChild className="cursor-hover">
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        </motion.div>
                      )}
                      {project.presentationUrl && (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button size="sm" asChild className="cursor-hover">
                            <a
                              href={project.presentationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Presentation
                            </a>
                          </Button>
                        </motion.div>
                      )}
                      {project.caseStudyURL && (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button size="sm" asChild className="cursor-hover">
                            <a
                              href={project.caseStudyURL}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Case Study
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  );
}