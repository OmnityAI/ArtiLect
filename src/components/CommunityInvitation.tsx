"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Star, Mail } from "lucide-react";
import { toast } from "sonner";

export default function CommunityInvitation() {
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

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "AI Research Director",
      company: "Stanford AI Lab",
      quote: "ArtiLect Newsletter has become my go-to source for staying current with AI research. The curation is exceptional.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "VP of Engineering",
      company: "TechFlow Inc",
      quote: "The weekly insights help me make informed decisions about our AI strategy. Absolutely essential reading.",
      rating: 5
    },
    {
      name: "Prof. Emily Watson",
      role: "Computer Science",
      company: "MIT",
      quote: "Finally, a newsletter that cuts through the AI hype and delivers real, actionable intelligence.",
      rating: 5
    }
  ];

  return (
    <>
    <section className="py-24 bg-card/30">
  <div className="container mx-auto px-6 md:px-8 lg:px-[120px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Join the{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              AI Intelligence
            </span>{" "}
            Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Thousands of AI professionals, researchers, and innovators trust Artilect Newsletter 
            to keep them informed and ahead of the curve.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 border-border/50 hover:bg-card/70 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border border-border/50 rounded-3xl p-12 shadow-2xl">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-primary-foreground" />
            </div>
            
            <h3 className="text-3xl font-bold mb-4">
              Start receiving{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI insights
              </span>{" "}
              today
            </h3>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Join 12,000+ AI professionals who get their weekly dose of intelligence every Tuesday. 
              Free, curated, and always valuable.
            </p>

            <Dialog open={isSignupOpen} onOpenChange={setIsSignupOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-12 py-6 text-lg transition-all duration-200 shadow-lg hover:shadow-xl rounded-[120px]"
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
                    <Label htmlFor="signup-name">Full Name</Label>
                    <Input
                      id="signup-name"
                      type="text"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      disabled={isLoading}
                      className="rounded-[120px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email Address</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isLoading}
                      className="rounded-[120px]"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full rounded-[120px]" 
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? "Subscribing..." : "Subscribe to Newsletter"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>

            <p className="text-xs text-muted-foreground mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
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
    </>
  );
}