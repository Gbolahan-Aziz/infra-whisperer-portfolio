import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Youtube } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { RequestDemoModal } from "./RequestDemoModal";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "#blog" },
    { label: "Certifications", href: "#certifications" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-lg shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl text-gradient animate-glow">
            Razaq
          </div>

          <div className="hidden lg:flex items-center  space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center  space-x-8">
            <ThemeToggle />

            <Button
              className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 glow"
              onClick={() => setIsModalOpen(true)}
            >
              Request Demo
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="h-10 w-10" />
              ) : (
                <Menu size={40} className="text-2xl" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-foreground backdrop-blur-md border-b border-border/50 shadow-lg">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-background hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <Button
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300"
                onClick={() => setIsModalOpen(true)}
              >
                Request Demo
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Request Demo Modal */}
      <RequestDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </nav>
  );
};

export default Navigation;
