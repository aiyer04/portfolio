import { Card, CardContent } from "./ui/card";
import { Code, Coffee, Users, Zap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">
            About Me!
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="max-w-4xl text-center">
            <h3 className="text-2xl mb-6">My Story</h3>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a Computer Engineering student with
                experience in machine learning, biomedical
                signal analysis, and cross-functional project
                leadership. Skilled in Python, MATLAB, and cloud
                technologies. I have a proven track record of
                developing computational pipelines, optimizing
                workflows, and deploying scalable technical
                solutions and am passionate about building
                innovative tools at the intersection of
                technology and people to drive real-world
                impact.
              </p>
              <p>
                In my free time, you'll usually find me with a
                good book or out on an adventure outdoors. I'm a
                big music lover (all kinds!) and I'm always
                planning the next spot to check off my travel
                bucket list.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}