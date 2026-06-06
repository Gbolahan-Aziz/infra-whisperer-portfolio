import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Server, Cloud, Database, GitMerge, Workflow } from "lucide-react";
import { FadeInWhenVisible } from "./ui/FadeInWhenVisible";

const projects = [
  {
    title: "Vintage Games Platform",
    description:
      "Kubernetes-native platform hosting Tetris and 2048 with Nginx ingress routing, Kustomize overlays for environment-specific configs, and EKS for managed cluster services. Full CI/CD automated with GitHub Actions.",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=300&fit=crop",
    tech: ["Kubernetes", "EKS", "Nginx", "Kustomize", "GitHub Actions", "Docker"],
    icon: <Cloud className="h-5 w-5" />,
    github: "https://github.com/Gbolahan-Aziz/Vintage-Games.git",
    demo: "https://github.com/Gbolahan-Aziz/Vintage-Games.git",
    highlight: null,
  },
  {
    title: "FlashDeals API",
    description:
      "High-concurrency Flash Sales API written in Go using Server-Sent Events for real-time inventory updates and mutex locking for data consistency. Full observability with ELK Stack + Filebeat. Containerised with Docker Compose.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
    tech: ["Go", "Docker Compose", "Elasticsearch", "Logstash", "Kibana", "Filebeat"],
    icon: <Database className="h-5 w-5" />,
    github: "https://github.com/Gbolahan-Aziz/FlashDeal-API-ELK.git",
    demo: "https://github.com/Gbolahan-Aziz/FlashDeal-API-ELK.git",
    highlight: null,
  },
  {
    title: "Tasks API — AWS EKS",
    description:
      "Production-ready Flask API deployed on AWS EKS via Terraform. Secured with API Gateway, VPC Links and a custom Lambda authoriser. Full CI/CD automation and teardown-ready for repeatable demos.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=300&fit=crop",
    tech: ["Terraform", "AWS", "EKS", "API Gateway", "Lambda", "VPC Link", "GitHub Actions"],
    icon: <Server className="h-5 w-5" />,
    github: "https://github.com/Gbolahan-Aziz/EKS-API-Integration.git",
    demo: "https://github.com/Gbolahan-Aziz/EKS-API-Integration.git",
    highlight: null,
  },
  {
    title: "Jira Custom Deployment Tool",
    description:
      "Automated deployment triggers fired by Jira issue transitions — enabling seamless environment-specific pipeline execution. Features role-based access control, dynamic Azure Pipeline variables mapped from Jira metadata, and a post-deploy feedback loop that updates Jira and fires MS Teams notifications.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
    tech: ["Azure Pipelines", "Jira", "MS Teams", "RBAC", "Python", "Webhooks"],
    icon: <Workflow className="h-5 w-5" />,
    github: "https://github.com/Gbolahan-Aziz",
    demo: "https://github.com/Gbolahan-Aziz",
    highlight: "Built at Zone",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 max-sm:px-2 px-6 w-full bg-muted/30">
      <div className="container w-full max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world systems showcasing cloud infrastructure, DevOps automation and platform engineering at scale
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <FadeInWhenVisible delay={index * 0.15} key={index}>
              <Card className="group relative overflow-hidden border border-border/50 rounded-xl backdrop-blur bg-card/80 shadow-md hover:shadow-2xl transition-all duration-400 hover:-translate-y-1">
                {project.highlight && (
                  <div className="absolute top-4 right-4 z-20 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
                    {project.highlight}
                  </div>
                )}

                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2.5 text-white">
                    <div className="p-2 bg-primary/90 rounded-lg">
                      {project.icon}
                    </div>
                    <h3 className="text-base font-semibold drop-shadow">{project.title}</h3>
                  </div>
                </div>

                <CardContent className="p-5 space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-1">
                    <Button size="sm" variant="ghost" className="flex-1 hover:bg-primary/10 transition" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1 transition" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View
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
