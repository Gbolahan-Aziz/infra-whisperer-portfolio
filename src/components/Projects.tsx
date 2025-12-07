import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Server, Cloud, Database } from "lucide-react";
import { FadeInWhenVisible } from "./ui/FadeInWhenVisible";

const projects = [
  {
    title: "Vintage Games Platform",
    description:
      "Built a platform hosting multiple games, including Tetris and 2048. Traffic is routed using Nginx ingress and load balancer controllers. Utilized Kustomize for environment-specific Kubernetes deployments and EKS for managed Kubernetes services.",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=300&fit=crop",
    tech: [
      "Kubernetes",
      "EKS",
      "Nginx",
      "Kustomize",
      "GitHub Actions",
      "Docker",
    ],
    icon: <Cloud className="h-6 w-6" />,
    github: "https://github.com/Gbolahan-Aziz/Vintage-Games.git",
    demo: "https://github.com/Gbolahan-Aziz/Vintage-Games.git",
  },
  {
    title: "FlashDeals API (Go, ELK Stack, Docker)",
    description:
      "Flash sales API written in Go and monitored using the ELK stack and Filebeat.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
    tech: [
      "Go",
      "Docker",
      "Filebeat",
      "Docker Compose",
      "Elasticsearch",
      "Logstash",
      "Kibana"
    ],
    icon: <Database className="h-6 w-6" />,
    github:
      "https://github.com/Gbolahan-Aziz/FlashDeal-API-ELK.git",
    demo: "https://github.com/Gbolahan-Aziz/FlashDeal-API-ELK.git",
  },
  {
    title: "Task API",
    description:
      "Built a production-ready infrastructure using Terraform to deploy a Flask API on AWS EKS, exposed via API Gateway with VPC Link and secured using a custom Lambda authorizer. Automated the full stack with CI/CD and designed it to be teardown-ready for repeatable demos and testing.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=300&fit=crop",
    tech: [
      "Terraform",
      "AWS",
      "EKS",
      "API Gateway",
      "Lambda",
      "VPC Link",
      "CI/CD"
    ],
    icon: <Server className="h-6 w-6" />,
    github: "https://github.com/Gbolahan-Aziz/EKS-API-Integration.git",
    demo: "https://github.com/Gbolahan-Aziz/EKS-API-Integration.git",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 max-sm:px-2 px-6 w-full bg-muted/30">
      <div className="container w-full max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world projects showcasing my DevOps expertise and cloud
            infrastructure skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeInWhenVisible delay={index * 0.2}>
              <Card
                key={index}
                className="group relative overflow-hidden border border-border/50 rounded-xl backdrop-blur bg-card/80 shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <div className="p-2 bg-primary/90 rounded-lg text-primary-foreground">
                      {project.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                  </div>
                </div>

                {/* Card Content */}
                <CardContent className="p-5 space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="flex-1 group/button hover:bg-primary/10 transition"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>

                    <Button
                      size="sm"
                      className="flex-1 group/button transition"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
