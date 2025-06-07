
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Hey, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Azeez
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-medium">
                DevOps Engineer & Cloud Architect
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                I build scalable infrastructure and automate everything in sight. 
                Passionate about creating reliable systems that help teams ship faster 
                and sleep better at night. ☁️
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download CV
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Get in Touch
              </Button>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
              >
                <ExternalLink className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="relative lg:order-first animate-fade-in">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-20 animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=500&fit=crop&crop=face"
                alt="Azeez Razaq - DevOps Engineer"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-background shadow-2xl"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-30 blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
