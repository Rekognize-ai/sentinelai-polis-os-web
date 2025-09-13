import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import Header from "@/components/Header";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 rounded-full border-2 border-green-500 flex items-center justify-center">
            <Check className="w-8 h-8 text-green-500" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
          THANK YOU FOR REQUESTING EARLY ACCESS
        </h1>

        {/* Main Message */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
          We've added you to the early access list. Our team will reach out shortly.
        </p>

        {/* Additional Info */}
        <p className="text-base md:text-lg text-muted-foreground mb-12 leading-relaxed">
          Early access slots are limited. If selected, you'll receive an email with next steps within 7–10 days.
        </p>

        {/* Return Home Button */}
        <Link to="/">
          <Button className="w-full max-w-md h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-base rounded-md mb-12">
            Return Home
          </Button>
        </Link>

        {/* Contact Info */}
        <p className="text-sm text-muted-foreground">
          For urgent inquiries, please contact us at{" "}
          <a 
            href="mailto:info@sentinelhq.co" 
            className="text-primary hover:text-primary/80 transition-colors"
          >
            info@sentinelhq.co
          </a>
        </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;