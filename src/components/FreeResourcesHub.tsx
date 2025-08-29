"use client";

import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Download, 
  Star, 
  Clock, 
  Users, 
  Filter, 
  Search, 
  BookOpen, 
  FileText, 
  BarChart3, 
  Shield, 
  Award,
  Timer,
  ArrowRight,
  CheckCircle,
  Mail,
  Sparkles
} from 'lucide-react';

const resources = [
  {
    id: 1,
    title: "Complete AI Strategy Implementation Guide",
    description: "A comprehensive 50-page guide covering AI adoption frameworks, ROI calculations, and implementation roadmaps for enterprise organizations.",
    category: "AI Strategy Guides",
    downloads: 15420,
    rating: 4.9,
    reviewCount: 234,
    readTime: "45 min",
    difficulty: "Intermediate",
    tags: ["Strategy", "Enterprise", "ROI", "Implementation"],
    preview: "/api/placeholder/300/200",
    featured: true,
    exclusive: false,
    expertVerified: true,
    fileType: "PDF",
    pages: 50
  },
  {
    id: 2,
    title: "AI Prompt Engineering Masterclass",
    description: "Learn advanced prompting techniques with 100+ examples, templates, and best practices for ChatGPT, Claude, and other LLMs.",
    category: "Technical Tutorials",
    downloads: 8940,
    rating: 4.8,
    reviewCount: 167,
    readTime: "30 min",
    difficulty: "Beginner",
    tags: ["Prompts", "LLM", "Templates", "Best Practices"],
    preview: "/api/placeholder/300/200",
    featured: true,
    exclusive: true,
    expertVerified: true,
    fileType: "PDF + Templates",
    pages: 35
  },
  {
    id: 3,
    title: "AI Industry Trends Report 2024",
    description: "Exclusive research on AI adoption rates, investment patterns, and emerging technologies across 15 major industries.",
    category: "Industry Reports",
    downloads: 12680,
    rating: 4.7,
    reviewCount: 189,
    readTime: "25 min",
    difficulty: "Advanced",
    tags: ["Research", "Trends", "Investment", "Analysis"],
    preview: "/api/placeholder/300/200",
    featured: false,
    exclusive: true,
    expertVerified: true,
    fileType: "PDF",
    pages: 42
  },
  {
    id: 4,
    title: "AI Project Checklist & Templates",
    description: "Ready-to-use project management templates, checklists, and workflows specifically designed for AI implementation projects.",
    category: "AI Strategy Guides",
    downloads: 6780,
    rating: 4.9,
    reviewCount: 98,
    readTime: "15 min",
    difficulty: "Beginner",
    tags: ["Templates", "Checklist", "Project Management", "Workflow"],
    preview: "/api/placeholder/300/200",
    featured: false,
    exclusive: false,
    expertVerified: true,
    fileType: "PDF + Excel",
    pages: 28
  },
  {
    id: 5,
    title: "Machine Learning Model Deployment Guide",
    description: "Step-by-step technical guide covering model deployment, monitoring, scaling, and maintenance in production environments.",
    category: "Technical Tutorials",
    downloads: 5420,
    rating: 4.6,
    reviewCount: 76,
    readTime: "60 min",
    difficulty: "Advanced",
    tags: ["ML", "Deployment", "Production", "Monitoring"],
    preview: "/api/placeholder/300/200",
    featured: false,
    exclusive: false,
    expertVerified: true,
    fileType: "PDF",
    pages: 65
  },
  {
    id: 6,
    title: "AI Ethics & Compliance Framework",
    description: "Complete framework for implementing ethical AI practices, compliance guidelines, and risk assessment methodologies.",
    category: "Industry Reports",
    downloads: 4230,
    rating: 4.8,
    reviewCount: 54,
    readTime: "35 min",
    difficulty: "Intermediate",
    tags: ["Ethics", "Compliance", "Risk", "Framework"],
    preview: "/api/placeholder/300/200",
    featured: false,
    exclusive: true,
    expertVerified: true,
    fileType: "PDF",
    pages: 38
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "AI Director at TechCorp",
    content: "The AI Strategy Guide saved us months of research. The frameworks are practical and immediately actionable.",
    rating: 5,
    avatar: "/api/placeholder/40/40"
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO at DataFlow",
    content: "These resources are gold. The technical tutorials are comprehensive yet easy to follow.",
    rating: 5,
    avatar: "/api/placeholder/40/40"
  },
  {
    name: "Dr. Emily Watson",
    role: "Research Lead at AI Labs",
    content: "Expert-level content that's actually useful. The industry reports provide insights you can't find elsewhere.",
    rating: 5,
    avatar: "/api/placeholder/40/40"
  }
];

const categories = ["All", "AI Strategy Guides", "Technical Tutorials", "Industry Reports"];
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

export const FreeResourcesHub = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [emailInputs, setEmailInputs] = useState({});

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "All" || resource.difficulty === selectedDifficulty;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const handleEmailChange = useCallback((resourceId, email) => {
    setEmailInputs(prev => ({
      ...prev,
      [resourceId]: email
    }));
  }, []);

  const handleDownload = useCallback((resourceId) => {
    // Simulate download process
    console.log(`Downloading resource ${resourceId} with email: ${emailInputs[resourceId]}`);
    // Here you would typically send the email to your backend
  }, [emailInputs]);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-500/20 text-green-400";
      case "Intermediate": return "bg-yellow-500/20 text-yellow-400";
      case "Advanced": return "bg-red-500/20 text-red-400";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "AI Strategy Guides": return <BarChart3 className="w-4 h-4" />;
      case "Technical Tutorials": return <BookOpen className="w-4 h-4" />;
      case "Industry Reports": return <FileText className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Free AI Resources
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Build Your AI Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Access our comprehensive library of AI guides, tutorials, and industry reports. 
            Trusted by 50,000+ professionals worldwide.
          </p>
          
          {/* Social Proof */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground mb-12">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span>50,000+ Downloads</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span>4.8 Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Expert Verified</span>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card border-border"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="bg-card border-border"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "" : "bg-card border-border hover:bg-primary/10"}
              >
                {category !== "All" && getCategoryIcon(category)}
                {category !== "All" && <span className="ml-2">{category}</span>}
                {category === "All" && category}
              </Button>
            ))}
          </div>

          {/* Difficulty Filters */}
          <div className="flex flex-wrap gap-2">
            {difficulties.map((difficulty) => (
              <Button
                key={difficulty}
                variant={selectedDifficulty === difficulty ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setSelectedDifficulty(difficulty)}
                className="text-sm"
              >
                {difficulty}
              </Button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {filteredResources.map((resource) => (
            <Card 
              key={resource.id} 
              className={`bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group ${
                resource.featured ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <CardHeader className="pb-4">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={resource.preview} 
                    alt={resource.title}
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {resource.featured && (
                      <Badge className="bg-primary text-primary-foreground">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                    {resource.exclusive && (
                      <Badge className="bg-accent text-accent-foreground">
                        <Timer className="w-3 h-3 mr-1" />
                        Exclusive
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-3 right-3">
                    {resource.expertVerified && (
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                        <Award className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  {getCategoryIcon(resource.category)}
                  <span className="text-sm text-muted-foreground">{resource.category}</span>
                </div>
                
                <CardTitle className="text-xl font-heading group-hover:text-primary transition-colors">
                  {resource.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {resource.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                {/* Resource Meta */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {resource.readTime}
                  </Badge>
                  <Badge className={`text-xs ${getDifficultyColor(resource.difficulty)}`}>
                    {resource.difficulty}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {resource.fileType}
                  </Badge>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {resource.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs bg-muted">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Rating and Downloads */}
                <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span>{resource.rating}</span>
                    <span>({resource.reviewCount})</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    <span>{resource.downloads.toLocaleString()}</span>
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email for instant access"
                    value={emailInputs[resource.id] || ""}
                    onChange={(e) => handleEmailChange(resource.id, e.target.value)}
                    className="bg-muted border-border"
                  />
                  <Button
                    className="w-full group"
                    onClick={() => handleDownload(resource.id)}
                    disabled={!emailInputs[resource.id]?.includes('@')}
                  >
                    <Download className="w-4 h-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
                    Get Instant Access
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Upgrade Section */}
        <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 rounded-2xl p-8 mb-16 border border-primary/20">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Get Exclusive Access to Premium Resources
            </h3>
            <p className="text-muted-foreground mb-6">
              Newsletter subscribers get early access to new resources, exclusive content, 
              and advanced guides not available to the public.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 text-left">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">Weekly exclusive resources</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">Advanced implementation guides</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">Direct access to AI experts</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-background border-border"
              />
              <Button className="whitespace-nowrap">
                <Mail className="w-4 h-4 mr-2" />
                Join Newsletter
              </Button>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-bold text-center mb-8">
            What Professionals Are Saying
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="inline-flex items-center gap-6 bg-card border border-border rounded-full px-8 py-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-sm">Secure Download</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-400" />
              <span className="text-sm">No Spam Policy</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-sm">Expert Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};