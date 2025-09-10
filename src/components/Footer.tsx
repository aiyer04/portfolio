import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg mb-2">Anjali Iyer</h3>
            <p className="text-muted-foreground">
              Let's Connect
            </p>
          </div>

          <div className="flex gap-2">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/aiyer04" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://www.linkedin.com/in/anjali-iy/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="mailto:aiyer329@gatech.edu">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; 2024 Anjali Iyer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}