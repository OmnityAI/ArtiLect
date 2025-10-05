"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Brain, Instagram } from "lucide-react";
import { toast } from "sonner";

export default function Footer() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleNewsletterSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSignupOpen(false);
        setEmail("");
        setName("");
  toast.success("Welcome to Artilect Newsletter! You'll receive the latest AI insights directly in your inbox.");
      } else {
        if (data.code === 'DUPLICATE_EMAIL') {
          toast.error("You're already subscribed to our newsletter!");
        } else if (data.code === 'INVALID_EMAIL_FORMAT') {
          toast.error("Please enter a valid email address");
        } else {
          toast.error(data.error || "Something went wrong. Please try again.");
        }
      }
    } catch (error) {
      console.error('Newsletter signup error:', error);
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-card/30 border-t border-border/50">
  <div className="container mx-auto px-6 md:px-8 lg:px-[120px] py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Brain className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-foreground">Artilect</h3>
                <p className="text-sm text-muted-foreground">AI Intelligence Newsletter</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Your trusted source for cutting-edge AI insights, research breakthroughs, and expert analysis. 
              Join thousands of professionals staying ahead of the AI revolution.
            </p>

            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Never miss an update</h4>
              <Dialog open={isSignupOpen} onOpenChange={setIsSignupOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="rounded-[120px]">
                    Subscribe to Newsletter
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Join the Artilect newsletter</DialogTitle>
                    <DialogDescription>
                      Get cutting-edge AI insights, research, and analysis delivered weekly.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleNewsletterSignup} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="footer-name">Full Name</Label>
                      <Input
                        id="footer-name"
                        type="text"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="footer-email">Email Address</Label>
                      <Input
                        id="footer-email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full rounded-[120px]" 
                      size="lg"
                      disabled={isLoading}
                    >
                      {isLoading ? "Subscribing..." : "Subscribe"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground">Newsletter</h4>
            <nav className="flex flex-col space-y-3">
              <a href="/#hero" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                About Artilect
              </a>
              <a href="/#featured-topics" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                Featured Topics
              </a>
              <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                Privacy Policy
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                <a href="mailto:info@artilectai.com" className="hover:text-foreground transition-colors duration-200">
                  info@artilectai.com
                </a>
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-4 pt-2">
                <a 
                  href="https://instagram.com/artilectai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-background/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-200"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Artilect AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="/terms" className="hover:text-foreground transition-colors duration-200">
              Terms of Service
            </a>
            <a href="/privacy" className="hover:text-foreground transition-colors duration-200">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}