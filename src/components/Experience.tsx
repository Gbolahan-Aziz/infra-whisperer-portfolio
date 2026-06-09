import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building, MapPin } from "lucide-react";
import { FadeInWhenVisible } from "./ui/FadeInWhenVisible";

const experiences = [
  {
    title: "DevOps Engineer",
    company: "UNICAF",
    period: "Feb 2026 – Present",
    location: "Cyprus (Remote)",
    current: true,
    description: "Managing core platform tools and services for a leading international university network, ensuring high availability across global environments while leading a Kubernetes migration initiative.",
    achievements: [
      "Managing core platform tools and services ensuring reliability and high availability across all environments",
      "Leading migration of services from Docker Compose to Kubernetes, improving scalability and deployment consistency",
      "Standardising deployment practices across international teams in a fully remote, multi-timezone setup",
    ],
    tech: ["Kubernetes", "Docker", "AWS", "PHP", "Python", "Bash", "Jenkins"],
  },
  {
    title: "DevOps Specialist",
    company: "Zone",
    period: "Mar 2025 – Feb 2026",
    location: "Lagos, Nigeria",
    current: false,
    description: "Built the CI/CD backbone for blockchain APIs and smart contracts at one of Africa's leading fintech infrastructure companies, and pioneered AI-assisted developer tooling to accelerate the engineering team.",
    achievements: [
      "Built CI/CD pipelines for blockchain APIs and smart contracts, integrating Jira, Azure Pipelines and custom tooling",
      "Integrated AI tools for automated PR reviews, reducing human error and increasing development velocity",
      "Developed internal automation scripts in Bash and Python, significantly improving deployment speed",
      "Managed infrastructure across Production, Staging, QA and Development with high availability SLAs",
      "Engineered reusable Helm charts for scalable, secure deployments of financial APIs and services",
    ],
    tech: ["Kubernetes", "Helm", "Azure Pipelines", "Terraform", "Docker", "Jira", "Bash", "Python", "AI tooling"],
  },
  {
    title: "DevOps Engineer",
    company: "ICE Commercial Power",
    period: "Nov 2022 – Feb 2025",
    location: "Lagos, Nigeria",
    current: false,
    description: "Designed and owned the full infrastructure lifecycle for the Catalyst App — from IaC to CI/CD — achieving 99.8% uptime and cutting infrastructure spend by 20%.",
    achievements: [
      "Designed and implemented Catalyst App infrastructure using Terraform, Bash, Azure and GitHub Actions",
      "Built and maintained a robust CI/CD pipeline from project build through to production deployment",
      "Delivered clean, reusable Infrastructure-as-Code (IaC) with thorough documentation",
      "Ensured 99.8% application uptime through proactive infrastructure management and security best practices",
      "Reduced infrastructure costs by 20% through optimisation and efficient resource allocation",
    ],
    tech: ["Terraform", "Azure", "GitHub Actions", "Bash", "IaC", "Docker"],
  },
  {
    title: "DevOps Engineer",
    company: "Freelance",
    period: "Mar 2021 – Sep 2022",
    location: "Lagos, Nigeria",
    current: false,
    description: "Delivered DevOps consulting and automation for multiple clients — containerising applications, building Kubernetes workloads and implementing monitoring stacks from scratch.",
    achievements: [
      "Streamlined Azure deployments and developed CI/CD pipelines, significantly reducing deployment lead times",
      "Automated operational workflows with cron, Python and Bash — improving efficiency by 25%",
      "Containerised client applications with Docker, reducing runtime issues by 40%",
      "Built and managed Kubernetes workloads ensuring scalability and consistent uptime",
      "Implemented Datadog monitoring and alerting, dramatically improving incident detection speed",
    ],
    tech: ["Azure", "Python", "Bash", "Docker", "Kubernetes", "Datadog", "CI/CD"],
  },
  {
    title: "Data Scientist Intern",
    company: "HamoyeAI Labs",
    period: "Jun 2020 – Dec 2020",
    location: "Lagos, Nigeria",
    current: false,
    description: "Trained ML models and built Power BI dashboards on large datasets to drive data-informed business decisions.",
    achievements: [
      "Analysed large datasets using SQL and Python for data-driven business insights",
      "Designed and trained supervised and unsupervised machine learning models",
      "Developed and optimised Power BI dashboards for executive reporting",
      "Maintained database integrity and ensured seamless integration with analytical pipelines",
    ],
    tech: ["Python", "SQL", "Power BI", "Machine Learning", "Data Analysis"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 max-sm:px-2 px-6 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">Professional Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            5+ years building, automating and scaling infrastructure across fintech, energy, education and cloud-native platforms
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <FadeInWhenVisible delay={index * 0.1} key={index}>
              <div className="relative pl-8 sm:pl-12 border-l-2 border-muted">
                {/* Timeline dot */}
                <div className={`absolute -left-[7px] top-5 w-3.5 h-3.5 rounded-full border-2 border-background z-10 shadow-md ${exp.current ? "bg-emerald-400 animate-pulse" : "bg-gradient-to-tr from-primary to-accent"}`} />

                <Card className="group bg-card/90 backdrop-blur-md border border-border/40 shadow-sm hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden hover:-translate-y-0.5">
                  <CardHeader className="px-6 pt-6 pb-2">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                            {exp.title}
                          </CardTitle>
                          {exp.current && (
                            <span className="inline-flex items-center gap-1 text-xs bg-emerald-500/15 text-emerald-500 border border-emerald-500/30 rounded-full px-2.5 py-0.5 font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                              Currently Here
                            </span>
                          )}
                        </div>
                        <CardDescription className="flex flex-wrap items-center gap-3 text-sm mt-1 text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Building className="h-3.5 w-3.5" />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {exp.location}
                          </span>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4 px-6 pb-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-muted-foreground">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {exp.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
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
