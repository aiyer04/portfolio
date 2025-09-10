import { Button } from "./ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Left text/content */}
          <div className="flex-[2] text-center lg:text-left">
            <h1 className="text-6xl lg:text-8xl font-bold mb-10 leading-tight">
              Hi! I'm{" "}
              <span className="text-primary">Anjali Iyer</span>
            </h1>
            <h2 className="text-3xl lg:text-4xl text-muted-foreground mb-12">
              Welcome to my portfolio!
            </h2>

            {/* Action button */}
            <div className="flex justify-center lg:justify-start mb-12">
              <Button
                size="lg"
                className="px-10 py-8 text-2xl"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
            </div>

            {/* Social links */}
            <div className="flex gap-12 justify-center lg:justify-start">
              <Button variant="ghost" size="lg" asChild>
                <a
                  href="https://github.com/aiyer04"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-24 w-24" />
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a
                  href="https://www.linkedin.com/in/anjali-iy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-24 w-24" />
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href="mailto:aiyer329@gatech.edu">
                  <Mail className="h-24 w-24" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right side image */}
          <div className="flex-1 flex justify-center lg:justify-start lg:pl-6">
            <ImageWithFallback
              src="https://freesvg.org/img/1678869917programming-language-on-screen.png"
              alt="Laptop illustration"
              className="w-72 h-60 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
