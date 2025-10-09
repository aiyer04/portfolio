import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Calendar, MapPin, Download } from "lucide-react";
import { motion } from "framer-motion";
import {
  FadeInUp,
  SlideInLeft,
  SlideInRight,
  StaggeredContainer,
  StaggeredItem,
} from "./ScrollAnimations";

export function Experience() {
  const experiences = [
    {
      title: "Research and Development Intern",
      company: "Sandia National Laboratories",
      location: "Remote",
      period: "May 2024 - Present",
      description:
        "At Sandia National Laboratories, developed a computational pipeline to forecast antigenic protein regions, automating large-scale data extraction, analysis, and error correction in Python. Enhanced efficiency by classifying bacterial cell images with Python and MATLAB, and pioneered a novel image classification model using advanced machine learning algorithms tailored to biological data.",
      technologies: ["Python", "NumPy", "Docker", "Git"],
    },
    {
      title: "Lead Consultant",
      company: "Epic Intentions at Georgia Tech",
      location: "Atlanta, Georgia",
      period: "January 2023 - Present",
      description:
        "Served as Lead Consultant and/or client liaison in multiple pro-bono projects to modernize client websites, driving design and development using tools such as Figma, React, Airtable, and the GivePulse API to deliver an enhanced, user-friendly online presence.",
      technologies: [
        "Figma",
        "Python",
        "C#",
        "Web Development",
      ],
    },
    {
      title: "Student Researcher - AI in Medical Imaging",
      company: "Emory University",
      location: "Atlanta, Georgia",
      period: "April 2023 - May 2024",
      description:
        "Developed an AI-driven radiomics pipeline in Python to forecast kidney tumor treatment outcomes, analyzing medical images and patient datasets from 15+ cases to extract critical tumor features and identify candidates for innovative therapies.",
      technologies: ["Python", "NumPy", "Scikit-learn"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Experience
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent mx-auto mb-8" />

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              asChild
              className="bg-primary text-black hover:bg-primary/90 glass-effect cursor-hover px-8 py-6"
            >
              <a
                href="https://drive.google.com/file/d/1C0vff2yxyaWaaamdUF_6Nxkaz27PSx5n/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </FadeInUp>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Enhanced Timeline line */}
            <motion.div
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-0.5"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />

            <StaggeredContainer className="space-y-12">
              {experiences.map((experience, index) => (
                <div key={index} className="relative">
                  {/* Enhanced Timeline dot */}
                  <motion.div
                    className="absolute left-2 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-2 flex items-center justify-center shadow-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 200,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-background rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </motion.div>

                  <StaggeredItem
                    className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:ml-auto md:pl-8"}`}
                  >
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card className="animated-border glass-effect cursor-hover">
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <CardTitle className="text-lg">
                                {experience.title}
                              </CardTitle>
                              <CardDescription className="text-primary font-medium">
                                {experience.company}
                              </CardDescription>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {experience.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {experience.location}
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {experience.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map(
                              (tech, techIndex) => (
                                <motion.div
                                  key={techIndex}
                                  initial={{
                                    opacity: 0,
                                    scale: 0.8,
                                  }}
                                  whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                  }}
                                  transition={{
                                    delay: techIndex * 0.1,
                                    type: "spring",
                                    stiffness: 200,
                                  }}
                                  whileHover={{ scale: 1.1 }}
                                >
                                  <Badge
                                    variant="secondary"
                                    className="text-xs magnetic-hover"
                                  >
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ),
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </StaggeredItem>
                </div>
              ))}
            </StaggeredContainer>
          </div>
        </div>
      </div>
    </section>
  );
}