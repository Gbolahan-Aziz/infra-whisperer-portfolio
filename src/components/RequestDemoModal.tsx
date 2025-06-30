
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from "lucide-react";

interface RequestDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedProject?: string;
}

const projects = [
  "Vintage Games Platform",
  "Fast Food App Monitoring & Alerting",
  "Infrastructure as Code Framework",
  "General Consultation"
];

export const RequestDemoModal: React.FC<RequestDemoModalProps> = ({ 
  isOpen, 
  onClose, 
  preSelectedProject 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: preSelectedProject || '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo request submitted:', formData);
    // Here you would typically send the data to your backend
    onClose();
    // Reset form
    setFormData({ name: '', email: '', project: '', message: '' });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card/95 backdrop-blur-sm border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-gradient">Request a Demo</DialogTitle>
          <DialogDescription>
            Let's discuss how I can help with your project. Fill out the form below and I'll get back to you soon.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Name</label>
            <Input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your full name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@example.com"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Project of Interest</label>
            <Select value={formData.project} onValueChange={(value) => setFormData({ ...formData, project: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select a project" />
              </SelectTrigger>
              <SelectContent>
                {projects.map((project) => (
                  <SelectItem key={project} value={project}>
                    {project}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Message</label>
            <Textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about your project requirements, timeline, or any specific questions..."
              rows={4}
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300"
            >
              <Send className="mr-2 h-4 w-4" />
              Send Request
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
