
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building } from "lucide-react";

const experiences = [
  {
    title: "DevOps Specialist",
    company: "Zone",
    period: "03/2025 - Present",
    location: "Lagos, Nigeria",
    description: "Configuring and maintaining Helm charts to deploy solutions for PTSA, Bank, and OFI institutions, ensuring consistent and reliable releases.",
    achievements: [
      "Configured and maintained Helm charts for financial institutions",
      "Developed automation tools to streamline development workflows",
      "Created CI/CD pipelines for APIs, smart contracts, and code development",
      "Provided infrastructure support improving system stability and deployment success rates"
    ],
    tech: ["Helm", "Kubernetes", "Azure", "CI/CD", "APIs"]
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
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">Professional Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            4+ years of experience in DevOps, automation, and cloud infrastructure
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
