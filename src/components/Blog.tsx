
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { FadeInWhenVisible } from "./ui/FadeInWhenVisible";

const blogPosts = [
  {
    title: "Improving your Deep Learning Model with Transfer Learning using Tensorflow Hub",
    summary: "A comprehensive guide on leveraging transfer learning to enhance your deep learning models using TensorFlow Hub for better performance and faster training.",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop",
    tags: ["Machine Learning", "TensorFlow", "Deep Learning", "Python"],
    readTime: "4 min read",
    date: "2021",
    slug: "transfer-learning-tensorflow-hub"
  },
  {
    title: "Scraping User Information On GitHub Using PyGithub",
    summary: "Learn how to efficiently extract GitHub user data and repository information using the PyGithub library with practical examples and best practices.",
    coverImage: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=300&fit=crop",
    tags: ["Python", "Web Scraping", "GitHub API", "Data Collection"],
    readTime: "4 min read",
    date: "2022",
    slug: "github-scraping-pygithub"
  },
  {
    title: "Crafting Effective DevOps Pipelines",
    summary: "Master the art of building robust CI/CD pipelines that streamline your development workflow, reduce deployment risks, and improve team productivity.",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=300&fit=crop",
    tags: ["DevOps", "CI/CD", "Automation", "Best Practices"],
    readTime: "4 min read",
    date: "2023",
    slug: "effective-devops-pipelines"
  },
  {
    title: "Customising Kubernetes Resource Configurations with Kustomize",
    summary: "Simplifying Kubernetes configurations using kustomize.",
    coverImage: "https://cdn-images-1.medium.com/max/800/1*BdzlNOT62emb7JyQDg4zgw.jpeg?w=600&h=300&fit=crop",
    tags: ["DevOps", "Kubernetes", "Configuration Management", "Best Practices"],
    readTime: "6 min read",
    date: "2024",
    slug: "effective-devops-pipelines"
  }

];

const Blog = () => {
  return (
    <section id="blog" className=" w-full py-20 max-sm:px-2 px-6 bg-muted/20">
      <div className="container  mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient">Latest Blog Posts</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on DevOps, cloud infrastructure, and technology trends
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <FadeInWhenVisible delay={index * 0.3} key={index}>
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:glow">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg px-2 py-1">
                  <span className="text-xs font-medium text-muted-foreground flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
              </div>
              
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    {post.date}
                  </span>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed line-clamp-3">
                  {post.summary}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  className="w-full group/btn hover:bg-primary/10 transition-all duration-300"
                  onClick={() => console.log(`Navigate to blog post: ${post.slug}`)}
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
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

export default Blog;
