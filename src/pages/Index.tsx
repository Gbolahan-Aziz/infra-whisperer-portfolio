
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <Projects />
        <Blog />
        <Certifications />
        <Experience />
        <Contact />
      </main>
      
      <footer className="bg-muted/50 border-t border-border/50 py-12 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gradient">Razaq</h3>
              <p className="text-muted-foreground">
                Building scalable infrastructure and optimizing DevOps workflows for modern applications.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
                <a href="#blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</a>
                <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
              </nav>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Connect</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/Gbolahan-Aziz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/azeez-razaq-76279a1a0" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  LinkedIn
                </a>
                <a href="mailto:razaq.gbolahan01@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  Email
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-border/50">
            <p className="text-muted-foreground">
              © 2024 Azeez Razaq. Built with React, TypeScript, and lots of ☕
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              "Infrastructure is not just about technology, it's about enabling dreams" 🚀
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
