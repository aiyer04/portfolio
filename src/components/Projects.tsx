import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Seizure Prediction Project",
      description:
        "AI-driven system for predicting seizures using machine learning",
      image:
        "data:image/png;base64,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",
      technologies: [
        "Python",
        "TensorFlow",
        "NumPy",
        "Scikit-learn",
      ],
      githubUrl: null, // No GitHub link yet
      presentationUrl: "YOUR_SEIZURE_PRESENTATION_URL_HERE", // Add your presentation URL
    },
    {
      title: "HaloFit Project",
      description:
        "Fitness tracking application with gamification elements",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl:
        "https://github.com/aiyer04/ECE4014-HaloFit.git", // Add your GitHub URL
      presentationUrl: null, // No presentation yet
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

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Featured Projects
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(
                    (tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ),
                  )}
                </div>
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.presentationUrl && (
                    <Button size="sm" asChild>
                      <a
                        href={project.presentationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Presentation
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}