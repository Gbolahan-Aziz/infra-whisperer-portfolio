
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building } from "lucide-react";
import { FadeInWhenVisible } from "./ui/FadeInWhenVisible";

const experiences = [
  {
    title: "DevOps Specialist",
    company: "Zone",
    period: "03/2025 - Present",
    location: "Lagos, Nigeria",
    description: "Developing cloud-native infrastructure initiatives, streamlined blockchain deployments, and automated critical development and release workflows across financial platforms.",
    achievements: [
      "Engineered reusable Helm charts to manage scalable, secure deployments for financial APIs and services",
      "Built internal DevOps tools to reduce deployment friction and accelerate team productivity",
      "Designed CI/CD pipelines covering API deployments, smart contract rollouts, and backend services",
      "Enhanced infrastructure reliability through observability improvements and proactive support"
    ],
    tech: ["Kubernetes", "Helm", "Terraform", "Azure", "Docker", "CI/CD", "TeamCity", "APIs"]
  },
  {
    title: "DevOps Engineer",
    company: "Ice Commercial Power",
    period: "11/2022 - 02/2025",
    location: "Lagos, Nigeria",
    description: "Designed and implemented infrastructure for the Catalyst App using Terraform, Bash, Azure, and GitHub Actions, ensuring 99.9% application uptime.",
    achievements: [
      "Designed infrastructure for Catalyst App using Terraform and Azure",
      "Built robust CI/CD pipeline streamlining project build to deployment",
      "Delivered clean, reusable Infrastructure-as-Code configurations",
      "Ensured 99.9% application uptime with security best practices",
      "Reduced infrastructure costs by 20% through optimization"
    ],
    tech: ["Terraform", "Azure", "GitHub Actions", "Bash", "IaC"]
  },
  {
    title: "DevOps Engineer",
    company: "Freelancer",
    period: "03/2021 - 09/2022",
    location: "Lagos, Nigeria",
    description: "Streamlined Azure deployments and developed CI/CD pipelines, improving operational efficiency by 25% through automation.",
    achievements: [
      "Streamlined Azure deployments reducing deployment time",
      "Automated processes with cron, Python, and Bash improving efficiency by 25%",
      "Enhanced code readability by containerizing applications, reducing runtime issues by 40%",
      "Built and managed Kubernetes workloads ensuring scalability",
      "Implemented Datadog monitoring improving issue detection speed"
    ],
    tech: ["Azure", "Python", "Bash", "Docker", "Kubernetes", "Datadog"]
  },
  {
    title: "Data Scientist Intern",
    company: "HamoyeAI Labs",
    period: "06/2020 - 12/2020",
    location: "Lagos, Nigeria",
    description: "Analyzed large datasets using SQL and Python, designed machine learning models, and developed Power BI dashboards for data visualization.",
    achievements: [
      "Analyzed large datasets using SQL and Python for data-driven decisions",
      "Designed and trained supervised and unsupervised ML models",
      "Developed and optimized Power BI dashboards",
      "Managed databases ensuring data integrity and seamless integration"
    ],
    tech: ["Python", "SQL", "Power BI", "Machine Learning", "Data Analysis"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 max-sm:px-2 px-6 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">Professional Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            4+ years of experience in DevOps, automation, and cloud infrastructure
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
<FadeInWhenVisible delay={index * 0.1}>
  <div className="relative pl-8 sm:pl-12 border-l-2 border-muted">
    {/* Timeline Dot */}
    <div className="absolute -left-[6px] top-5 w-3 h-3 bg-gradient-to-tr from-primary to-accent rounded-full border-2 border-background z-10 shadow-md" />

    <Card
      key={index}
      className="group bg-card/90 backdrop-blur-md border border-border/40 shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden"
    >
      <CardHeader className="px-6 pt-6 pb-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
              {exp.title}
            </CardTitle>
            <CardDescription className="flex flex-wrap items-center gap-4 text-sm mt-1 text-muted-foreground">
              <span className="flex items-center">
                <Building className="mr-1 h-4 w-4" />
                {exp.company}
              </span>
              <span className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                {exp.period}
              </span>
            </CardDescription>
          </div>
          <Badge variant="outline" className="text-xs px-3 py-1">
            {exp.location}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-5 px-6 pb-6">
        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {exp.description}
        </p>

        {/* Achievements */}
        <div>
          <h4 className="font-semibold text-sm text-foreground mb-1">Experience</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground list-disc list-inside">
            {exp.achievements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {exp.tech.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
</FadeInWhenVisible>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
