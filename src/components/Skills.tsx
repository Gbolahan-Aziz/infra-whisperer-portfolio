
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Cloud, Server, Database, Shield, Code, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: <Cloud className="h-6 w-6" />,
    skills: [
      { name: "AWS", level: 95 },
      { name: "Azure", level: 85 },
      { name: "Google Cloud", level: 80 },
      { name: "DigitalOcean", level: 75 }
    ]
  },
  {
    title: "Container & Orchestration",
    icon: <Server className="h-6 w-6" />,
    skills: [
      { name: "Kubernetes", level: 90 },
      { name: "Docker", level: 95 },
      { name: "Helm", level: 85 },
      { name: "OpenShift", level: 70 }
    ]
  },
  {
    title: "Infrastructure as Code",
    icon: <Code className="h-6 w-6" />,
    skills: [
      { name: "Terraform", level: 90 },
      { name: "Ansible", level: 85 },
      { name: "CloudFormation", level: 80 },
      { name: "Pulumi", level: 65 }
    ]
  },
  {
    title: "CI/CD & Version Control",
    icon: <GitBranch className="h-6 w-6" />,
    skills: [
      { name: "Jenkins", level: 90 },
      { name: "GitLab CI", level: 85 },
      { name: "GitHub Actions", level: 80 },
      { name: "ArgoCD", level: 75 }
    ]
  },
  {
    title: "Monitoring & Observability",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "Prometheus", level: 85 },
      { name: "Grafana", level: 90 },
      { name: "ELK Stack", level: 80 },
      { name: "Datadog", level: 75 }
    ]
  },
  {
    title: "Security & Compliance",
    icon: <Shield className="h-6 w-6" />,
    skills: [
      { name: "HashiCorp Vault", level: 80 },
      { name: "SAST/DAST", level: 75 },
      { name: "CIS Benchmarks", level: 85 },
      { name: "SOC 2", level: 70 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build reliable, scalable infrastructure
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  <span className="text-lg">{category.title}</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
