import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Server, Database, Shield, Code, GitBranch, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: <Cloud className="h-5 w-5" />,
    skills: [
      { name: "Azure", level: 95 },
      { name: "AWS", level: 90 },
      { name: "Google Cloud (GCP)", level: 80 },
      { name: "DigitalOcean", level: 75 },
    ],
  },
  {
    title: "Container & Orchestration",
    icon: <Server className="h-5 w-5" />,
    skills: [
      { name: "Kubernetes (CKA)", level: 95 },
      { name: "Docker", level: 95 },
      { name: "Helm", level: 90 },
      { name: "EKS / AKS", level: 88 },
    ],
  },
  {
    title: "Infrastructure as Code",
    icon: <Code className="h-5 w-5" />,
    skills: [
      { name: "Terraform", level: 95 },
      { name: "Ansible", level: 80 },
      { name: "Kustomize", level: 85 },
      { name: "Bash Scripting", level: 92 },
    ],
  },
  {
    title: "CI/CD & Automation",
    icon: <GitBranch className="h-5 w-5" />,
    skills: [
      { name: "GitHub Actions", level: 92 },
      { name: "Azure Pipelines", level: 90 },
      { name: "Jenkins / TeamCity", level: 82 },
      { name: "AI-Assisted Pipelines", level: 80 },
    ],
  },
  {
    title: "Monitoring & Observability",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: "Prometheus & Grafana", level: 88 },
      { name: "Datadog", level: 85 },
      { name: "ELK Stack / Filebeat", level: 85 },
      { name: "Azure Monitor", level: 80 },
    ],
  },
  {
    title: "Languages & AI",
    icon: <Cpu className="h-5 w-5" />,
    skills: [
      { name: "Python", level: 90 },
      { name: "Golang", level: 78 },
      { name: "Bash / Shell", level: 92 },
      { name: "SQL", level: 75 },
    ],
  },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimated(true); observer.disconnect(); } },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground tabular-nums">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
          style={{ width: animated ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

const Skills = () => {
  return (
    <section id="skills" className="py-20 max-sm:px-2 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build reliable, scalable infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-base">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
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
