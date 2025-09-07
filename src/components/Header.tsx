import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/d8617f12-2a89-4ea4-82bc-785676bd2c69.png" 
              alt="SentinelAI Logo" 
              className="h-8 w-auto brightness-110 contrast-110 drop-shadow-sm"
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
            <Button variant="ghost" className="hidden sm:inline-flex">
              Join Waitlist
            </Button>
            <Button variant="hero">
              Request Access
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;