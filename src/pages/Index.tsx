import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Shield, Zap, Network, Cpu, Eye, Radio } from "lucide-react";
import heroImage from "@/assets/hero-police-ev.jpg";
import droneImage from "@/assets/drone-deployment.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-primary-glow bg-clip-text text-transparent">
              Unveiling the World's First AI-Powered Police Electric Vehicle
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Powered by <span className="text-primary font-semibold">POLIS OS</span> — Patent Pending
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Request Early Access
              </Button>
              <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
                Join the Waitlist
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Empowering public safety agencies with intelligent, interoperable technologies 
                that improve officer safety and operational efficiency through cutting-edge 
                AI-driven solutions.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become the global standard in AI-driven mobility solutions for law enforcement, 
                revolutionizing how police departments operate in the digital age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Building */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            What We're Building
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="premium-card group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">AI-Powered Patrol EV Prototype</h3>
                <p className="text-muted-foreground">
                  Purpose-built electric police vehicle with integrated AI systems 
                  for enhanced patrol operations and officer safety.
                </p>
              </CardContent>
            </Card>

            <Card className="premium-card group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Cpu className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">POLIS OS</h3>
                <p className="text-muted-foreground">
                  Real-time pursuit assistance, drone deployment, license plate 
                  recognition, and suspect identification powered by advanced AI.
                </p>
              </CardContent>
            </Card>

            <Card className="premium-card group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Network className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">V2V Network Intelligence</h3>
                <p className="text-muted-foreground">
                  Vehicle-to-vehicle coordination and field collaboration 
                  for seamless multi-unit operations and communication.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Innovations */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary">Key Innovations</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">First-of-its-Kind OS</h3>
                    <p className="text-muted-foreground">Revolutionary operating system designed specifically for law enforcement operations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Built-for-Police EVs</h3>
                    <p className="text-muted-foreground">Electric vehicles engineered from the ground up for police requirements and duties.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Radio className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Autonomous Fleet Coordination</h3>
                    <p className="text-muted-foreground">AI-powered coordination between vehicles for optimized patrol coverage and response.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary">Why Now</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Eye className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Growing Policing Complexities</h3>
                    <p className="text-muted-foreground">Modern law enforcement faces increasingly complex challenges requiring advanced technology solutions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Budget Constraints</h3>
                    <p className="text-muted-foreground">Departments need cost-effective solutions that maximize operational efficiency and officer safety.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">EV Adoption Momentum</h3>
                    <p className="text-muted-foreground">The shift to electric vehicles presents an opportunity to integrate advanced AI capabilities from day one.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Experience the Future
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="group">
              <div className="rounded-xl overflow-hidden shadow-premium group-hover:shadow-neon transition-all duration-500">
                <img 
                  src="/lovable-uploads/73cfa5b6-a976-44a9-90b6-fff0a22f01ab.png" 
                  alt="POLIS OS Dashboard Interface" 
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold mt-6 mb-3 text-center">POLIS OS Dashboard</h3>
              <p className="text-muted-foreground text-center">
                Advanced AI interface with real-time suspect recognition, license plate scanning, and tactical coordination.
              </p>
            </div>

            <div className="group">
              <div className="rounded-xl overflow-hidden shadow-premium group-hover:shadow-neon transition-all duration-500">
                <img 
                  src={droneImage} 
                  alt="Automated Drone Deployment" 
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold mt-6 mb-3 text-center">Automated Drone Deployment</h3>
              <p className="text-muted-foreground text-center">
                Seamless drone deployment from the vehicle for aerial surveillance and tactical support operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Become Part of the Future of Policing
            </h2>
            <p className="text-xl mb-12 text-muted-foreground">
              Join law enforcement agencies across the nation in revolutionizing public safety through AI-powered technology.
            </p>
            
            <div className="max-w-md mx-auto mb-12">
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1"
                />
                <Button variant="hero">Get Updates</Button>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              <p className="mb-4">Trusted by law enforcement professionals nationwide</p>
              <div className="flex justify-center items-center gap-8 flex-wrap">
                <span className="px-4 py-2 bg-card/50 rounded border">IACP 2024</span>
                <span className="px-4 py-2 bg-card/50 rounded border">Police Technology</span>
                <span className="px-4 py-2 bg-card/50 rounded border">Law Enforcement Today</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;