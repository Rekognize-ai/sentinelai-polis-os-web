const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Left: Logo */}
          <div className="flex items-center justify-center md:justify-start py-4">
            <img 
              src="/lovable-uploads/d7db57b4-3b85-48a2-9f96-348f2b9cab67.png" 
              alt="SentinelAI Technologies Inc." 
              className="h-9 w-auto brightness-110 drop-shadow-sm"
            />
          </div>
          
          {/* Center: Contact Information */}
          <div id="contact" className="text-center">
            <h3 className="font-semibold mb-4 text-foreground">Contact Information</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>2050 15th Street, Suite 312</p>
              <p>Detroit, MI 48216, USA</p>
              <p>
                <a href="mailto:info@sentinelhq.co" className="hover:text-primary transition-colors">
                  info@sentinelhq.co
                </a>
              </p>
            </div>
          </div>
          
          {/* Right: Quick Links */}
          <div className="text-right md:text-right text-left">
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <div><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></div>
              <div><a href="#innovations" className="text-muted-foreground hover:text-primary transition-colors">Technology</a></div>
              <div><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Media</a></div>
              <div><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></div>
              <div><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a></div>
              <div><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</a></div>
            </div>
          </div>
        </div>
        
        {/* Bottom Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 SentinelAI Technologies Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;