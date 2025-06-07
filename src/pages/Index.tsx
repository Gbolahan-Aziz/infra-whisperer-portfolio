
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
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
        <Skills />
        <Experience />
        <Contact />
      </main>
      
      <footer className="bg-muted/50 border-t py-8 px-6">
        <div className="container max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Azeez Razaq. Built with React, TypeScript, and lots of ☕
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            "Infrastructure is not just about technology, it's about enabling dreams" 🚀
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
