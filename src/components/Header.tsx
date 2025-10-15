"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Brain, Menu, X } from "lucide-react";
import { toast } from "sonner";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [consent, setConsent] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const original = document.body.style.overflow;
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = original || '';
    }
    return () => {
      document.body.style.overflow = original || '';
    };
  }, [isMenuOpen]);

  const handleNewsletterSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!consent) {
      toast.error("Please agree to the Terms of Service and Privacy Policy");
      return;
    }

    setIsLoading(true);
    try {
      const nameValue = name.trim();
      const emailValue = email.trim();
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: nameValue, email: emailValue }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSignupOpen(false);
        setSubmittedEmail(data?.email ?? emailValue);
        setIsSuccessOpen(true);
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 ${isMenuOpen ? 'pointer-events-none' : ''}`}>
  <div className="container mx-auto px-6 md:px-8 lg:px-[120px]">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-heading font-bold text-foreground">Artilect</h1>
              <p className="text-xs text-muted-foreground">AI Newsletter</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("main-content")}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("featured-topics")}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Topics
            </button>
            <a 
              href="#about" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              About
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Dialog open={isSignupOpen} onOpenChange={setIsSignupOpen}>
              <DialogTrigger asChild>
                <Button 
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-medium transition-all duration-200"
                >
                  Subscribe
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-primary" />
                    Subscribe to Artilect Newsletter
                  </DialogTitle>
                  <DialogDescription>
                    Join thousands of AI enthusiasts and professionals getting the latest insights weekly.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleNewsletterSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="header-name">Full Name</Label>
                    <Input
                      id="header-name"
                      type="text"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="header-email">Email Address</Label>
                    <Input
                      id="header-email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Checkbox id="header-consent" checked={consent} onCheckedChange={(v) => setConsent(Boolean(v))} />
                    <label htmlFor="header-consent" className="leading-snug">
                      I have read and agree to the
                      {" "}
                      <a href="/terms" className="text-primary underline-offset-2 hover:underline">Terms of Service</a>
                      {" "}and{" "}
                      <a href="/privacy" className="text-primary underline-offset-2 hover:underline">Privacy Policy</a>.
                    </label>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isLoading || !consent}
                  >
                    {isLoading ? "Subscribing..." : "Subscribe to Newsletter"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 pointer-events-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden">
            {/* Backdrop covering entire viewport */}
            <div
              className="fixed inset-0 z-[60] bg-black/40"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />
            {/* Full-screen Panel */}
            <div
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 z-[70] bg-card backdrop-blur animate-in fade-in slide-in-from-top-1 duration-200"
            >
              <div className="container mx-auto px-6 md:px-8 lg:px-[120px] py-6 relative h-full overflow-y-auto">
                <button
                  className="absolute right-6 top-6 p-2 rounded-md hover:bg-muted"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
                <nav className="flex flex-col space-y-4 mt-2">
                  <button
                    onClick={() => scrollToSection("main-content")}
                    className="text-left text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection("featured-topics")}
                    className="text-left text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    Topics
                  </button>
                  <a
                    href="#about"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </a>
                  <div className="pt-4">
                    <Dialog open={isSignupOpen} onOpenChange={setIsSignupOpen}>
                      <DialogTrigger asChild>
                        <Button
                          className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-medium"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Subscribe to Newsletter
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            <Brain className="w-5 h-5 text-primary" />
                            Subscribe to Artilect Newsletter
                          </DialogTitle>
                          <DialogDescription>
                            Join thousands of AI enthusiasts and professionals getting the latest insights weekly.
                          </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleNewsletterSignup} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="mobile-name">Full Name</Label>
                            <Input
                              id="mobile-name"
                              type="text"
                              placeholder="Enter your full name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              required
                              disabled={isLoading}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="mobile-email">Email Address</Label>
                            <Input
                              id="mobile-email"
                              type="email"
                              placeholder="Enter your email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              disabled={isLoading}
                            />
                          </div>
                          <div className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Checkbox id="mobile-consent" checked={consent} onCheckedChange={(v) => setConsent(Boolean(v))} />
                            <label htmlFor="mobile-consent" className="leading-snug">
                              I have read and agree to the{" "}
                              <a href="/terms" className="text-primary underline-offset-2 hover:underline">Terms of Service</a>
                              {" "}and{" "}
                              <a href="/privacy" className="text-primary underline-offset-2 hover:underline">Privacy Policy</a>.
                            </label>
                          </div>
                          <Button
                            type="submit"
                            className="w-full"
                            size="lg"
                            disabled={isLoading || !consent}
                          >
                            {isLoading ? "Subscribing..." : "Subscribe to Newsletter"}
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        )}

        {/* Success Confirmation */}
        <Dialog open={isSuccessOpen} onOpenChange={setIsSuccessOpen}>
          <DialogContent className="sm:max-w-md text-center">
            <DialogHeader>
              <DialogTitle>You're subscribed! 🎉</DialogTitle>
              <DialogDescription>
                We’ve added <span className="font-medium text-foreground">{submittedEmail}</span> to our list. Check your inbox for a welcome email.
              </DialogDescription>
            </DialogHeader>
            <Button className="mt-2" onClick={() => setIsSuccessOpen(false)}>Close</Button>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}