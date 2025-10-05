"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Mail, 
  BookOpen, 
  User, 
  MessageCircle, 
  Search, 
  ArrowRight,
  Brain,
  Cpu,
  Zap,
  Globe
} from "lucide-react";

// Mock data for recent newsletter topics
const recentTopics = [
  {
    id: 1,
    title: "GPT-4 Turbo: What's New in OpenAI's Latest Model",
    category: "AI Models",
    readTime: "5 min read",
    icon: Brain,
    excerpt: "Exploring the enhanced capabilities and improvements in OpenAI's newest flagship model."
  },
  {
    id: 2,
    title: "The Future of Autonomous Vehicles",
    category: "Robotics",
    readTime: "7 min read",
    icon: Cpu,
    excerpt: "How AI is revolutionizing transportation and what to expect in the next decade."
  },
  {
    id: 3,
    title: "Neural Networks: A Beginner's Guide",
    category: "Machine Learning",
    readTime: "10 min read",
    icon: Zap,
    excerpt: "Understanding the fundamentals of neural networks and their real-world applications."
  },
  {
    id: 4,
    title: "AI Ethics in the Modern World",
    category: "Ethics",
    readTime: "6 min read",
    icon: Globe,
    excerpt: "Navigating the complex ethical landscape of artificial intelligence development."
  }
];

const quickLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/newsletter", label: "Newsletter", icon: Mail },
  { href: "/topics", label: "Featured Topics", icon: BookOpen },
  { href: "/about", label: "About", icon: User },
  { href: "/contact", label: "Contact", icon: MessageCircle }
];

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to home with search query
    window.location.href = `/?search=${encodeURIComponent(searchQuery)}`;
  };

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
    // Show success message or redirect
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Neural network background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 1200 800" 
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="neuralGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgb(155, 140, 255)" stopOpacity="0.3" />
              <stop offset="50%" stopColor="rgb(255, 232, 155)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="rgb(107, 110, 249)" stopOpacity="0.1" />
            </radialGradient>
          </defs>
          <circle cx="200" cy="150" r="4" fill="url(#neuralGradient)" />
          <circle cx="400" cy="100" r="3" fill="url(#neuralGradient)" />
          <circle cx="600" cy="200" r="5" fill="url(#neuralGradient)" />
          <circle cx="800" cy="120" r="3" fill="url(#neuralGradient)" />
          <circle cx="1000" cy="180" r="4" fill="url(#neuralGradient)" />
          <circle cx="150" cy="400" r="3" fill="url(#neuralGradient)" />
          <circle cx="350" cy="450" r="4" fill="url(#neuralGradient)" />
          <circle cx="550" cy="380" r="5" fill="url(#neuralGradient)" />
          <circle cx="750" cy="420" r="3" fill="url(#neuralGradient)" />
          <circle cx="950" cy="460" r="4" fill="url(#neuralGradient)" />
          <path d="M200,150 L400,100" stroke="url(#neuralGradient)" strokeWidth="1" opacity="0.5" />
          <path d="M400,100 L600,200" stroke="url(#neuralGradient)" strokeWidth="1" opacity="0.5" />
          <path d="M600,200 L800,120" stroke="url(#neuralGradient)" strokeWidth="1" opacity="0.5" />
          <path d="M150,400 L350,450" stroke="url(#neuralGradient)" strokeWidth="1" opacity="0.5" />
          <path d="M350,450 L550,380" stroke="url(#neuralGradient)" strokeWidth="1" opacity="0.5" />
          <path d="M200,150 L150,400" stroke="url(#neuralGradient)" strokeWidth="1" opacity="0.3" />
          <path d="M600,200 L550,380" stroke="url(#neuralGradient)" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-border/50">
  <div className="container max-w-6xl mx-auto px-6 md:px-8 lg:px-[120px] py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                <Brain className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ArtiLect
              </span>
            </Link>
            <Button asChild size="sm">
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-24 px-6">
          <div className="container max-w-4xl mx-auto text-center">
            {/* Large 404 Text */}
            <div className="mb-8">
              <h1 className="text-9xl md:text-[12rem] font-heading font-bold bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent leading-none animate-pulse">
                404
              </h1>
            </div>

            {/* Error Message */}
            <div className="space-y-6 mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Oops! This page got lost in the neural network
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Don't worry – even AI makes mistakes sometimes. The page you're looking for might have been moved, 
                deleted, or perhaps it never existed in our digital universe.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-16">
              <form onSubmit={handleSearch} className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search for content..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button type="submit" size="sm">
                  Search
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-12 px-6 border-t border-border/50">
          <div className="container max-w-6xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold text-center mb-8">
              Quick Navigation
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {quickLinks.map((link) => (
                <Button
                  key={link.href}
                  asChild
                  variant="outline"
                  className="h-auto p-6 flex flex-col items-center gap-3 hover:bg-primary/10 hover:border-primary/50 transition-all group"
                >
                  <Link href={link.href}>
                    <link.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">{link.label}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Newsletter Topics */}
        <section className="py-16 px-6 bg-card/30">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Popular AI Topics
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                While you're here, check out some of our most popular newsletter content about artificial intelligence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {recentTopics.map((topic) => {
                const IconComponent = topic.icon;
                return (
                  <Card key={topic.id} className="group hover:bg-card/80 transition-all cursor-pointer border-border/50 hover:border-primary/30">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <IconComponent className="w-5 h-5 text-primary" />
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {topic.category}
                          </Badge>
                        </div>
                        <span className="text-xs text-muted-foreground">{topic.readTime}</span>
                      </div>
                      <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                        {topic.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        {topic.excerpt}
                      </p>
                      <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                        <span>Read more</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Newsletter Signup */}
            <Card className="max-w-2xl mx-auto border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-heading">
                  Stay Updated with AI Insights
                </CardTitle>
                <p className="text-muted-foreground">
                  Join thousands of AI enthusiasts getting weekly insights delivered to their inbox.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleNewsletterSignup} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button type="submit" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                    Subscribe
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 py-12 px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Brain className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-lg font-heading font-bold">ArtiLect</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Your trusted source for AI insights and machine learning breakthroughs.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="/newsletter" className="text-muted-foreground hover:text-primary transition-colors">Newsletter</Link></li>
                <li><Link href="/topics" className="text-muted-foreground hover:text-primary transition-colors">Topics</Link></li>
                <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/archive" className="text-muted-foreground hover:text-primary transition-colors">Archive</Link></li>
                <li><Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ArtiLect Newsletter. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}