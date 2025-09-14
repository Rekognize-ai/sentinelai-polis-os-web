import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] bg-background/95 backdrop-blur-lg border-b border-border shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 py-4">
            <img 
              src="/lovable-uploads/d7db57b4-3b85-48a2-9f96-348f2b9cab67.png" 
              alt="SentinelAI Technologies LLC" 
              className="h-16 md:h-20 lg:h-24 w-auto brightness-125 contrast-125 drop-shadow-lg"
            />
          </Link>
          
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
            <a href="#contact-info" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden sm:inline-flex" asChild>
              <a href="/request-access">Join Waitlist</a>
            </Button>
            <Button variant="hero" asChild>
              <a href="/request-access">Request Access</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;