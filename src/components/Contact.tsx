
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Coffee, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 max-sm:px-2 px-6 ">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">Let's Build Something Amazing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to optimize your infrastructure? Let's chat and discuss how we can scale your systems together. 🚀
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always excited to discuss new opportunities, share DevOps insights, 
                or just connect with fellow engineers. Whether you're looking to scale 
                your infrastructure, implement CI/CD, or migrate to the cloud, I'd love to help!
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">razaq.gbolahan01@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">(+234) 8173157846</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Lagos, Nigeria</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Coffee className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Availability</p>
                  <p className="text-muted-foreground">Open to opportunities</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Drop me a line and I'll get back to you as soon as possible!
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input placeholder="John" />
                </div>
                
             
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="Let's discuss your DevOps needs" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  placeholder="Tell me about your project, infrastructure challenges, or just say hello!"
                  rows={5}
                />
              </div>
              
              <Button className="w-full group">
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
