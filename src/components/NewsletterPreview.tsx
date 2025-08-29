"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, Clock, Star, Zap, TrendingUp, BookOpen, Calendar, CheckCircle, ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export const NewsletterPreview = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const newsletterSections = [
    {
      title: "This Week's AI Breakthrough",
      content: "GPT-4 Turbo with Vision Capabilities",
      description: "Deep analysis on multimodal AI and its impact on enterprise workflows"
    },
    {
      title: "Key Insights",
      content: "3 Game-Changing Trends",
      description: "From autonomous agents to ethical AI frameworks"
    },
    {
      title: "Research Spotlight",
      content: "MIT's Revolutionary Approach",
      description: "New neural architecture achieves 40% efficiency gains"
    },
    {
      title: "Quick Reads",
      content: "5 Must-Know Updates",
      description: "Industry moves, funding rounds, and policy changes"
    }
  ];

  const upcomingTopics = [
    { week: "Week 1", topic: "Quantum-AI Integration", status: "featured" },
    { week: "Week 2", topic: "Edge Computing Revolution", status: "coming" },
    { week: "Week 3", topic: "AI Safety Protocols", status: "coming" },
    { week: "Week 4", topic: "Neural Interface Tech", status: "coming" }
  ];

  const valueProps = [
    { icon: Clock, text: "5-minute read saves 3+ hours of research", accent: "text-accent" },
    { icon: Star, text: "Exclusive interviews with AI leaders", accent: "text-primary" },
    { icon: Zap, text: "Actionable insights you can implement today", accent: "text-chart-2" }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto bg-background">
      {/* Newsletter Header Preview */}
      <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <Card className="bg-card border-border shadow-2xl overflow-hidden">
          {/* Email Header */}
          <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 p-6 border-b border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-heading font-bold text-sm">A</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground">ArtiLect Weekly</h3>
                  <p className="text-muted-foreground text-sm">AI Intelligence • Issue #47</p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                Premium
              </Badge>
            </div>
          </div>

          {/* Main Content */}
          <CardContent className="p-0">
            {/* Hero Article */}
            <div className="p-6 border-b border-border">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Badge className="bg-destructive/20 text-destructive border-destructive/30">
                    BREAKING
                  </Badge>
                  <span className="text-muted-foreground text-sm">December 15, 2024</span>
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground leading-tight">
                  OpenAI Unveils GPT-5: The Dawn of Artificial General Intelligence?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  In an unprecedented move, OpenAI has released early benchmarks for GPT-5, 
                  showing reasoning capabilities that approach human-level performance across 
                  multiple cognitive domains. Our exclusive analysis reveals what this means 
                  for enterprise adoption and competitive landscapes.
                </p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>4 min read</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>High Impact</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Sections Carousel */}
            <div className="p-6 border-b border-border">
              <h3 className="font-heading font-semibold text-lg mb-4 text-foreground">
                This Week's Deep Dive
              </h3>
              <div className="space-y-3">
                {newsletterSections.map((section, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                      activeSection === index
                        ? 'border-primary bg-primary/5 shadow-md'
                        : 'border-border bg-muted/30 hover:bg-muted/50'
                    }`}
                    onClick={() => setActiveSection(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{section.title}</h4>
                        <p className="text-sm text-primary font-medium mt-1">{section.content}</p>
                        <p className="text-xs text-muted-foreground mt-1">{section.description}</p>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                          activeSection === index ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Insights Section */}
            <div className="p-6 border-b border-border bg-gradient-to-br from-muted/30 to-transparent">
              <h3 className="font-heading font-semibold text-lg mb-4 text-foreground flex items-center space-x-2">
                <Zap className="w-5 h-5 text-accent" />
                <span>Key Insights</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-card p-4 rounded-lg border border-border">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-chart-3 rounded-full"></div>
                    <span className="text-sm font-medium text-foreground">Market Impact</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    AI stocks surge 12% following GPT-5 announcement
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-chart-4 rounded-full"></div>
                    <span className="text-sm font-medium text-foreground">Enterprise</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Fortune 500 companies accelerate AI integration plans
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm font-medium text-foreground">Research</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    New safety protocols emerge from leading AI labs
                  </p>
                </div>
              </div>
            </div>

            {/* Research Highlights */}
            <div className="p-6 border-b border-border">
              <h3 className="font-heading font-semibold text-lg mb-4 text-foreground flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-primary" />
                <span>Research Spotlight</span>
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded-lg">
                  <h4 className="font-medium text-foreground text-sm">Stanford's Breakthrough in Neural Efficiency</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    New architecture reduces computational requirements by 60% while maintaining performance
                  </p>
                </div>
                <div className="p-3 bg-muted/30 rounded-lg">
                  <h4 className="font-medium text-foreground text-sm">MIT's Quantum-AI Integration Progress</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Hybrid quantum-classical models show promise for optimization problems
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Reads */}
            <div className="p-6">
              <h3 className="font-heading font-semibold text-lg mb-4 text-foreground">
                Quick Reads (2 min each)
              </h3>
              <div className="space-y-2">
                {[
                  "Google announces Gemini Pro 2.0 with enhanced reasoning",
                  "EU finalizes AI Act implementation guidelines",
                  "Anthropic raises $4B Series C for safety research",
                  "Microsoft integrates GPT-5 into Office Suite",
                  "China's new AI regulations impact global markets"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-chart-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Content Calendar */}
      <div className={`mt-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <Card className="bg-card border-border">
          <CardHeader>
            <h3 className="font-heading font-semibold text-lg text-foreground flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-accent" />
              <span>Upcoming Topics</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              See what's coming in the next few issues
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {upcomingTopics.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border transition-all duration-300 ${
                    item.status === 'featured'
                      ? 'border-primary bg-primary/5'
                      : 'border-border bg-muted/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-foreground">{item.week}</span>
                        {item.status === 'featured' && (
                          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 text-xs">
                            Next
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{item.topic}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Value Demonstration */}
      <div className={`mt-8 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <Card className="bg-gradient-to-br from-card to-muted/10 border-border">
          <CardContent className="p-6">
            <h3 className="font-heading font-semibold text-xl text-center mb-6 text-foreground">
              Why 50,000+ AI Professionals Trust ArtiLect Weekly
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {valueProps.map((prop, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-muted/30 rounded-full flex items-center justify-center">
                      <prop.icon className={`w-6 h-6 ${prop.accent}`} />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{prop.text}</p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center border-t border-border pt-6">
              <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                Get This Weekly Intelligence Report
              </h4>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Join thousands of AI professionals who stay ahead with our curated insights, 
                delivered every Friday to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-medium">
                  <Mail className="w-5 h-5 mr-2" />
                  Subscribe Now - Free
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                  View Sample Issue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                No spam, unsubscribe anytime • 50,000+ subscribers
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};