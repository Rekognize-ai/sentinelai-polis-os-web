import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/0a00b86a-7fa2-476f-93e8-e239d171ba54.png" 
              alt="SentinelAI Logo" 
              className="h-8 w-auto brightness-125 contrast-125 drop-shadow-lg"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#innovations" className="text-muted-foreground hover:text-primary transition-colors">
              Technology
            </a>
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden sm:inline-flex" asChild>
              <a href="/contact">Join Waitlist</a>
            </Button>
            <Button variant="hero" asChild>
              <a href="/contact">Request Access</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;