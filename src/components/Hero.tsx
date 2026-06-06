import { useEffect, useState, useRef } from "react";
import ParticlesBackground from '../../components/ParticlesBackground';
import { Github, Linkedin, Mail, Download, ExternalLink, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const ROLES = [
  "DevOps Engineer",
  "Cloud Architect",
  "Platform Engineer",
  "Infrastructure Specialist",
  "SRE / Automation",
];

function useTypewriter(words: string[], speed = 80, deleteSpeed = 40, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const current = words[wordIdx];
    if (!deleting && displayed === current) {
      timeout.current = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && displayed === "") {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    } else {
      timeout.current = setTimeout(() => {
        setDisplayed(deleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1));
      }, deleting ? deleteSpeed : speed);
    }
    return () => clearTimeout(timeout.current);
  }, [displayed, deleting, wordIdx, words, speed, deleteSpeed, pause]);

  return displayed;
}

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "3", label: "Cloud Platforms" },
  { value: "99.8%", label: "Uptime Delivered" },
  { value: "3", label: "Pro Certifications" },
];

const Hero = () => {
  const role = useTypewriter(ROLES);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 pt-16 overflow-hidden">
      <ParticlesBackground />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Photo */}
          <div className="relative order-1 lg:order-2 w-full max-sm:mt-10 animate-fade-in">
            <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 animate-pulse"></div>
              <img
                src="/assets/me-cropped.jpg"
                alt="Azeez Razaq — DevOps Engineer"
                className="relative z-10 w-full h-full object-cover object-center rounded-full border-4 border-background shadow-2xl"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 blur-xl animate-glow pointer-events-none"></div>
            </div>

            {/* Floating badge */}
            <div className="absolute top-4 -right-2 md:right-8 bg-card/90 backdrop-blur-md border border-border/50 rounded-xl px-3 py-2 shadow-lg animate-fade-in" style={{ animationDelay: "0.8s", opacity: 0, animationFillMode: "forwards" }}>
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-muted-foreground font-medium">Open to Opportunities</span>
              </div>
            </div>

            <div className="absolute bottom-8 -left-2 md:-left-8 bg-card/90 backdrop-blur-md border border-border/50 rounded-xl px-3 py-2 shadow-lg animate-fade-in" style={{ animationDelay: "1s", opacity: 0, animationFillMode: "forwards" }}>
              <div className="flex items-center gap-2 text-xs">
                <Terminal className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground terminal-card">kubectl get nodes -o wide</span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-8 order-2 lg:order-1 animate-fade-in">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm text-primary font-medium">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                DevOps · Cloud · Platform Engineering
              </div>

              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-none">
                Hey, I'm{" "}
                <span className="text-gradient glow-text">Azeez</span>
              </h1>

              <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground min-h-[2.5rem]">
                <span className="cursor-blink">{role}</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                I architect and automate the infrastructure that keeps platforms running.
                From Kubernetes migrations and blockchain CI/CD to AI-assisted pipelines —
                I turn complex systems into reliable, cost-efficient machines.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 glow shadow-lg" asChild>
                <a href="/Azeez-Razaq.pdf" download="Azeez-Razaq.pdf">
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Download CV
                </a>
              </Button>
              <Button variant="outline" size="lg" className="group hover:bg-accent/10 transition-all duration-300 border-border/60" asChild>
                <a href="mailto:razaq.gbolahan01@gmail.com">
                  <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Get in Touch
                </a>
              </Button>
            </div>

            <div className="flex space-x-6">
              <a href="https://github.com/Gbolahan-Aziz" target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform">
                <Github className="h-7 w-7" />
              </a>
              <a href="https://www.linkedin.com/in/azeez-razaq-76279a1a0" target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform">
                <Linkedin className="h-7 w-7" />
              </a>
              <a href="mailto:razaq.gbolahan01@gmail.com"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform">
                <Mail className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="gradient-border p-5 text-center animate-fade-in" style={{ animationDelay: `${0.2 + i * 0.15}s`, opacity: 0, animationFillMode: "forwards" }}>
              <div className="text-3xl font-extrabold text-gradient">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
