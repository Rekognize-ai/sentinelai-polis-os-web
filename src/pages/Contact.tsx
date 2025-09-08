import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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
    <div className="min-h-screen bg-black">
      {/* Custom Header for Contact Page */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/0a00b86a-7fa2-476f-93e8-e239d171ba54.png" 
                alt="SentinelAI Logo" 
                className="h-8 w-auto brightness-125 contrast-125 drop-shadow-lg"
              />
            </div>
            <a href="/" className="text-white hover:text-gray-300 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </a>
          </div>
        </div>
      </header>
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-lg">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Request Early Access
            </h1>
            <p className="text-lg text-gray-300">
              We're currently inviting select agencies and partners to explore early access to SentinelAI. Share your details and we'll be in touch.
            </p>
          </div>

          <div className="bg-transparent">
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-4">
                  <Label htmlFor="fullName" className="text-sm font-medium text-gray-400 uppercase tracking-wider block">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="bg-transparent border border-gray-600 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-12 text-lg"
                  />
                </div>

                <div className="space-y-4">
                  <Label htmlFor="organization" className="text-sm font-medium text-gray-400 uppercase tracking-wider block">
                    Agency / Organization
                  </Label>
                  <Input
                    id="organization"
                    name="organization"
                    type="text"
                    value={formData.organization}
                    onChange={handleChange}
                    required
                    className="bg-transparent border border-gray-600 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-12 text-lg"
                  />
                </div>

                <div className="space-y-4">
                  <Label htmlFor="role" className="text-sm font-medium text-gray-400 uppercase tracking-wider block">
                    Role / Title
                  </Label>
                  <Input
                    id="role"
                    name="role"
                    type="text"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="bg-transparent border border-gray-600 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-12 text-lg"
                  />
                </div>

                <div className="space-y-4">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-400 uppercase tracking-wider block">
                    Work Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-transparent border border-gray-600 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-12 text-lg"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg font-medium rounded-lg transition-colors"
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