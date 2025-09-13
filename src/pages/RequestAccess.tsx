import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

interface FormData {
  fullName: string;
  organization: string;
  role: string;
  email: string;
}

const RequestAccess = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const { toast } = useToast();

  const onSubmit = (data: FormData) => {
    console.log('Early Access Request:', data);
    toast({
      title: "Request Submitted!",
      description: "Thank you for your interest. We'll be in touch soon.",
    });
    reset();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/d7db57b4-3b85-48a2-9f96-348f2b9cab67.png" 
                alt="SentinelAI Technologies LLC" 
                className="h-16 md:h-20 lg:h-24 w-auto brightness-110 drop-shadow-sm"
              />
            </Link>
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              <Home className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-md">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Request Early Access
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're currently inviting select agencies and partners to explore early access to SentinelAI. 
              Share your details and we'll be in touch.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                FULL NAME
              </Label>
              <Input
                id="fullName"
                {...register("fullName", { required: "Full name is required" })}
                className="h-12 bg-background border-border rounded-md"
              />
              {errors.fullName && (
                <p className="text-sm text-destructive">{errors.fullName.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="organization" className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                AGENCY / ORGANIZATION
              </Label>
              <Input
                id="organization"
                {...register("organization", { required: "Organization is required" })}
                className="h-12 bg-background border-border rounded-md"
              />
              {errors.organization && (
                <p className="text-sm text-destructive">{errors.organization.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="role" className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                ROLE / TITLE
              </Label>
              <Input
                id="role"
                {...register("role", { required: "Role is required" })}
                className="h-12 bg-background border-border rounded-md"
              />
              {errors.role && (
                <p className="text-sm text-destructive">{errors.role.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                WORK EMAIL
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className="h-12 bg-background border-border rounded-md"
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-base rounded-md mt-8"
            >
              Join Waitlist
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default RequestAccess;