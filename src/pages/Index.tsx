import Navigation from "@/components/Navigation";
import Hero from "../components/Hero";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import { useEffect } from "react";
import { FadeInWhenVisible } from "@/components/ui/FadeInWhenVisible";
import { Github, Linkedin, Mail } from "lucide-react";
const Index = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <FadeInWhenVisible delay={0.1}>
          <section id="home">
            <Hero />
          </section>
        </FadeInWhenVisible>
        <Projects />
        <Blog />
        <Certifications />
        <Experience />
        <Contact />
      </main>
      <footer className="bg-background w-full py-10 max-sm:px-2 px-6">
        <div className=" max-w-6xl mx-auto space-y-6">
          {/* Justified Bottom Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center border-t border-border/50 pt-6 text-sm text-muted-foreground gap-2">
            <div className="max-sm:text-center space-y-4">
            <h3 className="text-2xl font-bold text-gradient animate-glow">
              Azeez Razaq
            </h3>
            <p className="text-muted-foreground text-sm">
              DevOps Engineer & Cloud Infrastructure Specialist
            </p>
             <p className="italic">
              “Infrastructure is not just about tech, it’s about enabling
              dreams.”
            </p>
            <div className="flex max-sm:justify-center gap-8 pt-2">
              <a
                href="https://github.com/Gbolahan-Aziz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/azeez-razaq-76279a1a0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:razaq.gbolahan01@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
            
          </div>
           
            <p>&copy; {new Date().getFullYear()} Azeez Razaq</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
