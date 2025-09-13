import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    role: "",
    email: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted",
      description: "We'll be in touch with you soon about early access to SentinelAI.",
    });
    setFormData({ fullName: "", organization: "", role: "", email: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-lg">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Request Early Access
            </h1>
            <p className="text-lg text-muted-foreground">
              We're currently inviting select agencies and partners to explore early access to SentinelAI. Share your details and we'll be in touch.
            </p>
          </div>

          <div className="bg-transparent">
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-4">
                  <Label htmlFor="fullName" className="text-sm font-medium text-muted-foreground uppercase tracking-wider block">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="h-12 text-lg"
                  />
                </div>

                <div className="space-y-4">
                  <Label htmlFor="organization" className="text-sm font-medium text-muted-foreground uppercase tracking-wider block">
                    Agency / Organization
                  </Label>
                  <Input
                    id="organization"
                    name="organization"
                    type="text"
                    value={formData.organization}
                    onChange={handleChange}
                    required
                    className="h-12 text-lg"
                  />
                </div>

                <div className="space-y-4">
                  <Label htmlFor="role" className="text-sm font-medium text-muted-foreground uppercase tracking-wider block">
                    Role / Title
                  </Label>
                  <Input
                    id="role"
                    name="role"
                    type="text"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="h-12 text-lg"
                  />
                </div>

                <div className="space-y-4">
                  <Label htmlFor="email" className="text-sm font-medium text-muted-foreground uppercase tracking-wider block">
                    Work Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 text-lg"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full mt-8 h-12 text-lg font-medium rounded-lg"
                  size="lg"
                >
                  Join Waitlist
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;