import ParticlesBackground from '../../components/ParticlesBackground';
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 pt-16">
        <ParticlesBackground />
      <div className="container max-w-6xl    mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 justify-between items-center">
          <div className="relative order-1 lg:order-2 w-full max-sm:mt-10   animate-fade-in">
            <div className="relative w-80 h-80 mx-auto animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 animate-pulse glow"></div>
              <img
                src="/lovable-uploads/3a1dec8e-0d27-4129-acda-95d9fdf410a8.png"
                alt="Azeez Razaq - DevOps Engineer"
                className="relative z-10 w-full h-full object-cover object-center rounded-full border-4 border-background shadow-2xl"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 blur-lg animate-glow"></div>
            </div>
          </div>
          <div className="space-y-8 order-2 lg:order-1 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground tracking-tight">
                Hey, I'm{" "}
                <span className="text-gradient animate-glow">
                  Azeez
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-medium">
                DevOps Engineer & Cloud Specialist
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                I'm a DevOps Engineer with 4+ years of hands-on experience supporting, 
                automating, and optimizing mission critical deployments in cloud services 
                like Azure. I leverage configuration management tools, developing and 
                maintaining CI/CD and DevOps processes.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 glow" asChild>
                <a href="/Azeez-Razaq-2025.pdf" download="Azeez-Razaq-2025.pdf">
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Download CV
                </a>
              </Button>
              <Button variant="outline" size="lg" className="group hover:bg-accent/10 transition-all duration-300" asChild>
                <a href="mailto:razaq.gbolahan01@gmail.com">
                  <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Get in Touch
                </a>
              </Button>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="https://github.com/Gbolahan-Aziz" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform"
              >
                <Github className="h-7 w-7" />
              </a>
              <a 
                href="https://www.linkedin.com/in/azeez-razaq-76279a1a0" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform"
              >
                <Linkedin className="h-7 w-7" />
              </a>
              <a 
                href="mailto:razaq.gbolahan01@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform"
              >
                <Mail className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
