import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { AnimatedBackground } from "./components/AnimatedBackground";

export default function App() {
  return (
    <div className="min-h-screen relative">
      {/* Animated background layer */}
      <AnimatedBackground />
      
      {/* Main content layer */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
        </main>
        <Footer />
      </div>
    </div>
  );
}