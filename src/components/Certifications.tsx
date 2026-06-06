import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Calendar, GraduationCap } from "lucide-react";
import { FadeInWhenVisible } from "./ui/FadeInWhenVisible";

const certifications = [
  {
    name: "Certified Kubernetes Administrator (CKA)",
    provider: "The Linux Foundation",
    date: "2025",
    description: "Hands-on exam validating expertise in Kubernetes cluster administration, workload management, networking, storage and troubleshooting in live environments.",
    image: "https://www.simplilearn.com/ice9/webinar_thum_image/Kubernetes_Tutorial.jpg",
    verified: true,
    credentialUrl: "http://credly.com/badges/07256809-a0d3-43b0-ad7d-03f7e8fa7f79/public_url",
    skills: ["Linux", "Cluster Administration", "Networking", "Storage", "RBAC"],
    accent: "from-blue-500 to-indigo-500",
  },
  {
    name: "Google Cloud Professional Cloud Architect",
    provider: "Google",
    date: "2024",
    description: "Validates ability to design, develop and manage robust, secure, scalable, highly available and dynamic solutions on Google Cloud Platform.",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&h=300&fit=crop",
    verified: true,
    credentialUrl: "https://google.com/certification",
    skills: ["GCP", "Cloud Architecture", "Security", "Networking", "Data Engineering"],
    accent: "from-emerald-500 to-teal-500",
  },
  {
    name: "Certified Terraform Associate",
    provider: "HashiCorp",
    date: "2023",
    description: "Demonstrates expertise in Infrastructure as Code fundamentals, Terraform workflow, modules, state management and cloud resource automation.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=300&fit=crop",
    verified: true,
    credentialUrl: "http://credly.com/badges/501676c3-c8b9-4a5f-8d80-663d55bc1837/linked_in_profile",
    skills: ["Terraform", "Infrastructure as Code", "Cloud Automation", "State Management"],
    accent: "from-purple-500 to-violet-500",
  },
  {
    name: "Bachelor of Science — Physics",
    provider: "Lagos State University",
    date: "2022",
    description: "BSc in Pure & Applied Physics, combining rigorous analytical and mathematical thinking that underpins a systems-level approach to engineering problems.",
    image: "https://independent.ng/wp-content/uploads/2017/12/Graduation.jpg",
    verified: true,
    credentialUrl: "https://drive.google.com/file/d/1-HDZ3dQrJiFVBaO68xxPu66BfDo13ewA/view?usp=drivesdk",
    skills: ["Analytical Thinking", "Mathematics", "Physics", "Research"],
    accent: "from-orange-500 to-amber-500",
    isEducation: true,
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="w-full py-20 max-sm:px-2 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient">Certifications & Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry-recognised credentials validating deep expertise in cloud, Kubernetes, and infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <FadeInWhenVisible delay={index * 0.15} key={index}>
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/40 bg-card/80 backdrop-blur-sm overflow-hidden">
                <div className="relative overflow-hidden h-44">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className={`absolute top-4 left-4 p-2 bg-gradient-to-br ${cert.accent} rounded-lg text-white shadow-lg`}>
                    {cert.isEducation ? <GraduationCap className="h-5 w-5" /> : <Award className="h-5 w-5" />}
                  </div>

                  {cert.verified && (
                    <div className="absolute top-4 right-4 bg-emerald-500/90 backdrop-blur-sm rounded-full px-2.5 py-1">
                      <span className="text-xs font-semibold text-white">✓ Verified</span>
                    </div>
                  )}
                </div>

                <CardHeader className="space-y-2 pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="group-hover:text-primary transition-colors text-base leading-snug">
                      {cert.name}
                    </CardTitle>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground whitespace-nowrap pt-0.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {cert.date}
                    </span>
                  </div>
                  <CardDescription className={`text-sm font-semibold bg-gradient-to-r ${cert.accent} bg-clip-text text-transparent`}>
                    {cert.provider}
                  </CardDescription>
                  <CardDescription className="text-sm leading-relaxed">
                    {cert.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="outline" size="sm" className="w-full group/btn hover:bg-primary/10 transition-all duration-300 border-border/50" asChild>
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
