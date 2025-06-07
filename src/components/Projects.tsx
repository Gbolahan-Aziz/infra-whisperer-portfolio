
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Server, Cloud, Database } from "lucide-react";

const projects = [
  {
    title: "Multi-Cloud Kubernetes Platform",
    description: "Built a robust multi-cloud Kubernetes platform supporting 500+ microservices across AWS, Azure, and GCP with 99.9% uptime.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=300&fit=crop",
    tech: ["Kubernetes", "Terraform", "ArgoCD", "Prometheus", "Grafana"],
    icon: <Cloud className="h-6 w-6" />,
    github: "#",
    demo: "#"
  },
  {
    title: "CI/CD Pipeline Automation",
    description: "Designed and implemented GitOps-based CI/CD pipelines reducing deployment time by 75% and increasing deployment frequency to 50+ per day.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop",
    tech: ["Jenkins", "GitLab CI", "Docker", "Helm", "SonarQube"],
    icon: <Server className="h-6 w-6" />,
    github: "#",
    demo: "#"
  },
  {
    title: "Infrastructure as Code Framework",
    description: "Created a comprehensive IaC framework using Terraform modules, reducing infrastructure provisioning time from days to hours.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=300&fit=crop",
    tech: ["Terraform", "Ansible", "AWS", "Azure", "Vault"],
    icon: <Database className="h-6 w-6" />,
    github: "#",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my DevOps expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 p-2 bg-primary/90 rounded-lg text-primary-foreground">
                  {project.icon}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
