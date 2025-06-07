
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building } from "lucide-react";

const experiences = [
  {
    title: "Senior DevOps Engineer",
    company: "TechFlow Solutions",
    period: "2022 - Present",
    location: "San Francisco, CA",
    description: "Leading DevOps initiatives for a fintech startup, managing infrastructure serving 2M+ users. Implemented GitOps workflows and reduced deployment failures by 80%.",
    achievements: [
      "Architected multi-region AWS infrastructure supporting 99.99% uptime",
      "Reduced infrastructure costs by 40% through right-sizing and automation",
      "Led migration from monolith to microservices architecture",
      "Mentored 5 junior engineers on DevOps best practices"
    ],
    tech: ["AWS", "Kubernetes", "Terraform", "Jenkins", "Prometheus"]
  },
  {
    title: "DevOps Engineer",
    company: "CloudNative Corp",
    period: "2020 - 2022",
    location: "Austin, TX",
    description: "Designed and maintained CI/CD pipelines for a SaaS platform. Implemented infrastructure as code practices and improved deployment frequency from weekly to daily.",
    achievements: [
      "Built comprehensive monitoring stack with Prometheus and Grafana",
      "Automated infrastructure provisioning reducing setup time by 75%",
      "Implemented security scanning in CI/CD pipelines",
      "Achieved SOC 2 Type II compliance"
    ],
    tech: ["Azure", "Docker", "Ansible", "GitLab CI", "Grafana"]
  },
  {
    title: "Systems Administrator",
    company: "DataCore Systems",
    period: "2018 - 2020",
    location: "Denver, CO",
    description: "Managed on-premise infrastructure and started the journey towards cloud adoption. Introduced containerization and modern deployment practices.",
    achievements: [
      "Migrated 50+ applications to containerized environments",
      "Implemented automated backup and disaster recovery procedures",
      "Reduced server provisioning time from days to hours",
      "Introduced configuration management with Ansible"
    ],
    tech: ["VMware", "Docker", "Linux", "Ansible", "Nagios"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">Professional Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My career progression in building and scaling infrastructure
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="flex items-center space-x-4 text-base mt-1">
                      <span className="flex items-center">
                        <Building className="mr-2 h-4 w-4" />
                        {exp.company}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        {exp.period}
                      </span>
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="self-start md:self-center">
                    {exp.location}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                
                <div>
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
