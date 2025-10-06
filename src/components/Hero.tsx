"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Brain } from "lucide-react";
import { toast } from "sonner";

export default function Hero() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
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

  const handleScrollToArticles = () => {
    const articlesSection = document.getElementById("featured-topics");
    if (articlesSection) {
      articlesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-background">
      {/* Neural Network Background Pattern */}
      <div className="absolute inset-0">
        {/* Dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-90" />
        
        {/* Animated gradient blobs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-tr from-accent/15 via-primary/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Neural network SVG pattern */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-20" 
          viewBox="0 0 800 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgb(155, 140, 255)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="rgb(155, 140, 255)" stopOpacity="0.1" />
            </radialGradient>
          </defs>
          
          {/* Neural network nodes with pulsing animation */}
          <circle cx="120" cy="100" r="4" fill="url(#nodeGradient)">
            <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="280" cy="80" r="3" fill="url(#nodeGradient)">
            <animate attributeName="r" values="2;4;2" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="450" cy="120" r="5" fill="url(#nodeGradient)">
            <animate attributeName="r" values="4;6;4" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="620" cy="90" r="3" fill="url(#nodeGradient)">
            <animate attributeName="r" values="2;4;2" dur="2.8s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="80" cy="250" r="3" fill="url(#nodeGradient)">
            <animate attributeName="r" values="2;4;2" dur="3.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="220" cy="280" r="4" fill="url(#nodeGradient)">
            <animate attributeName="r" values="3;5;3" dur="2.7s" repeatCount="indefinite" />
          </circle>
          <circle cx="380" cy="260" r="3" fill="url(#nodeGradient)">
            <animate attributeName="r" values="2;4;2" dur="3.1s" repeatCount="indefinite" />
          </circle>
          <circle cx="540" cy="290" r="5" fill="url(#nodeGradient)">
            <animate attributeName="r" values="4;6;4" dur="2.9s" repeatCount="indefinite" />
          </circle>
          
          {/* Connection lines with opacity animation */}
          <line x1="120" y1="100" x2="280" y2="80" stroke="rgb(155, 140, 255)" strokeWidth="1" opacity="0.3">
            <animate attributeName="opacity" values="0.1;0.5;0.1" dur="4s" repeatCount="indefinite" />
          </line>
          <line x1="280" y1="80" x2="450" y2="120" stroke="rgb(155, 140, 255)" strokeWidth="1" opacity="0.3">
            <animate attributeName="opacity" values="0.1;0.5;0.1" dur="3.5s" repeatCount="indefinite" />
          </line>
          <line x1="220" y1="280" x2="380" y2="260" stroke="rgb(155, 140, 255)" strokeWidth="1" opacity="0.3">
            <animate attributeName="opacity" values="0.1;0.5;0.1" dur="3.8s" repeatCount="indefinite" />
          </line>
        </svg>
      </div>

      {/* Content */}
  <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-[120px] py-24 min-h-[calc(100dvh-80px)] flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-tight tracking-tight animate-in fade-in slide-in-from-left-8 duration-1000">
                Stay Ahead of the{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                  AI Revolution
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl animate-in fade-in slide-in-from-left-8 duration-1000 delay-200">
                Get exclusive insights, cutting-edge research, and expert analysis delivered weekly.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-left-8 duration-1000 delay-400">
              <Dialog open={isSignupOpen} onOpenChange={setIsSignupOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-8 py-6 text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1"
                    aria-label="Subscribe to Artilect newsletter"
                  >
                    Subscribe Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-primary" />
                      Subscribe to Artilect Newsletter
                    </DialogTitle>
                    <DialogDescription>
                      Join thousands of AI professionals getting weekly intelligence.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleNewsletterSignup} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
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
                      className="w-full" 
                      size="lg"
                      disabled={isLoading}
                    >
                      {isLoading ? "Subscribing..." : "Subscribe to Newsletter"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>

              <Button 
                variant="outline" 
                size="lg"
                onClick={handleScrollToArticles}
                className="bg-background/20 backdrop-blur-sm border-primary/30 hover:bg-primary/10 hover:border-primary/50 text-foreground font-medium px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
                aria-label="Explore featured topics"
              >
                Explore Topics
              </Button>
            </div>
          </div>

          {/* Right Column - Newsletter Preview */}
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
            <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              {/* Newsletter Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-pulse">
                  <Brain className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Artilect Weekly</h3>
                  <p className="text-sm text-muted-foreground">AI Intelligence</p>
                </div>
              </div>

              {/* Newsletter Content Preview */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground leading-tight">
                  This Week: The Future of Enterprise AI
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  • OpenAI's latest developments and business implications<br />
                  • Fortune 500 AI integration strategies<br />
                  • New research on AI safety and alignment
                </p>
                
                {/* Newsletter Tags */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full animate-pulse">
                    Weekly Insights
                  </span>
                  <span className="px-3 py-1 bg-accent/20 text-accent-foreground text-xs rounded-full animate-pulse delay-75">
                    Industry Updates
                  </span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full animate-pulse delay-150">
                    Research
                  </span>
                </div>

                {/* Newsletter Stats */}
                <div className="flex items-center gap-6 pt-4 border-t border-border/50">
                  <span className="text-xs text-muted-foreground">12k+ subscribers</span>
                  <span className="text-xs text-muted-foreground">5 min read</span>
                  <span className="text-xs text-accent">Weekly</span>
                </div>
              </div>

              {/* Decorative gradient overlay */}
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-2xl -z-10 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

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
    </section>
  );
}