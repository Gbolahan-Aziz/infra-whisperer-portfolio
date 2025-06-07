
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Server, Cloud, Database } from "lucide-react";

const projects = [
  {
    title: "Vintage Games Platform",
    description: "Built a platform hosting multiple games, including Tetris and 2048. Traffic is routed using Nginx ingress and load balancer controllers. Utilized Kustomize for environment-specific Kubernetes deployments and EKS for managed Kubernetes services.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=300&fit=crop",
    tech: ["Kubernetes", "EKS", "Nginx", "Kustomize", "GitHub Actions", "Docker"],
    icon: <Cloud className="h-6 w-6" />,
    github: "https://github.com/Gbolahan-Aziz/Vintage-Games.git",
    demo: "/video.mp4"
  },
  {
    title: "Fast Food App Monitoring & Alerting",
    description: "Developed a dockerized web application with frontend and backend. Integrated Prometheus and Grafana for real-time monitoring and alerting, ensuring performance and reliability. Employed Docker Compose for efficient container orchestration.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
    tech: ["Docker", "Prometheus", "Grafana", "Docker Compose", "Monitoring", "Alerting"],
    icon: <Database className="h-6 w-6" />,
    github: "https://github.com/Gbolahan-Aziz/Fast-Food-app-Monitoring-Alerting.git",
    demo: "#"
  },
  {
    title: "Infrastructure as Code Framework",
    description: "Created comprehensive IaC configurations using Terraform for Azure deployments. Built reusable modules and implemented CI/CD pipelines for infrastructure automation, reducing deployment time and ensuring consistent environments.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=300&fit=crop",
    tech: ["Terraform", "Azure", "CI/CD", "Infrastructure as Code", "Automation"],
    icon: <Server className="h-6 w-6" />,
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
            Real-world projects showcasing my DevOps expertise and cloud infrastructure skills
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
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
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
