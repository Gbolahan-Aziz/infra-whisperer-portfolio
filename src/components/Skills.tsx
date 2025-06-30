
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Cloud, Server, Database, Shield, Code, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: <Cloud className="h-6 w-6" />,
    skills: [
      { name: "Azure", level: 95 },
      { name: "AWS", level: 90 },
      { name: "Google Cloud", level: 70 },
      { name: "DigitalOcean", level: 75 }
    ]
  },
  {
    title: "Container & Orchestration",
    icon: <Server className="h-6 w-6" />,
    skills: [
      { name: "Kubernetes", level: 90 },
      { name: "Docker", level: 95 },
      { name: "Helm", level: 90 },
      { name: "EKS", level: 85 }
    ]
  },
  {
    title: "Infrastructure as Code",
    icon: <Code className="h-6 w-6" />,
    skills: [
      { name: "Terraform", level: 95 },
      { name: "Ansible", level: 80 },
      { name: "Bash Scripting", level: 90 },
      { name: "Python", level: 90 }
    ]
  },
  {
    title: "CI/CD & Version Control",
    icon: <GitBranch className="h-6 w-6" />,
    skills: [
      { name: "GitHub Actions", level: 90 },
      { name: "Jenkins", level: 85 },
      { name: "GitLab CI", level: 75 },
      { name: "Azure DevOps", level: 85 }
    ]
  },
  {
    title: "Monitoring & Observability",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "Prometheus", level: 85 },
      { name: "Grafana", level: 90 },
      { name: "Datadog", level: 85 },
      { name: "Azure Monitor", level: 80 }
    ]
  },
  {
    title: "Security & Compliance",
    icon: <Shield className="h-6 w-6" />,
    skills: [
      { name: "HashiCorp Vault", level: 85 },
      { name: "Azure Security", level: 85 },
      { name: "SAST/DAST", level: 70 },
      { name: "Compliance", level: 80 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container ax-w-6xl mx-auto">
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
