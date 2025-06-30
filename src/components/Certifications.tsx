
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Calendar } from "lucide-react";
import { FadeInWhenVisible } from "./ui/FadeInWhenVisible";

const certifications = [
  {
    name: "Certified Terraform Associate",
    provider: "HashiCorp",
    date: "2023",
    description: "Demonstrated expertise in Infrastructure as Code using Terraform for cloud resource management and automation.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop",
    verified: true,
    credentialUrl: "#",
    skills: ["Terraform", "Infrastructure as Code", "Cloud Automation", "Resource Management"]
  },
  {
    name: "Bachelor of Science",
    provider: "Lagos State University",
    date: "2021",
    description: "BSc in Pure & Applied Physics, with a focus on theoretical physics, applied physics, and mathematics.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop",
    verified: true,
    credentialUrl: "https://www.lasu.edu.ng",
    skills: ["Computer Science", "Physics", "Mathematics"]
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className=" w-full py-20 max-sm:px-2 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient">Certifications & Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and educational achievements that validate my expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
         
          {certifications.map((cert, index) => (
             <FadeInWhenVisible delay={0.4}>
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:glow">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 p-2 bg-primary/90 rounded-lg text-primary-foreground">
                  <Award className="h-5 w-5" />
                </div>
                {cert.verified && (
                  <div className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-sm rounded-full px-2 py-1">
                    <span className="text-xs font-medium text-[rgb(var(--foreground))]">✓ Verified</span>
                  </div>
                )}
              </div>
              
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="group-hover:text-primary transition-colors text-lg">
                    {cert.name}
                  </CardTitle>
                  <span className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4" />
                    {cert.date}
                  </span>
                </div>
                <CardDescription className="font-medium text-primary">
                  {cert.provider}
                </CardDescription>
                <CardDescription className="text-sm leading-relaxed">
                  {cert.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group/btn hover:bg-primary/10 transition-all duration-300" 
                  asChild
                >
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    View Credential
                  </a>
                </Button>
              </CardContent>
            </Card>
              </FadeInWhenVisible>
          ))}
        
        </div>
      </div>
    </section>
  );
};

export default Certifications;
