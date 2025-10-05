"use client";

import { Clock, Zap, ChevronRight, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

export const FOMOSection = () => {
  const [activeTab, setActiveTab] = useState<'missed' | 'coming'>('missed');
  const [subscriberCount] = useState(12847);

  const missedContent = [
    {
      title: "GPT-5 Architecture Leak Analysis",
      description: "Deep dive into leaked training specs and enterprise implications",
      tag: "Breaking Research",
      time: "3 days ago"
    },
    {
      title: "Meta's Llama 3.1 Enterprise Rollout", 
      description: "Exclusive Fortune 500 deployment strategies",
      tag: "Industry Intel",
      time: "5 days ago"
    }
  ];

  const comingContent = [
    {
      title: "Google's Quantum-AI Breakthrough",
      description: "Preview of quantum computing integration that changes everything",
      tag: "Exclusive Preview",
      time: "This Thursday"
    },
    {
      title: "The $50B AI Infrastructure Report",
      description: "Where tech giants are really spending their AI budgets",
      tag: "Market Analysis", 
      time: "Next Tuesday"
    }
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-background to-blue-900/10" />
      
      {/* Content container */}
  <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-[120px]">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Clock className="w-4 h-4" />
            Don't Fall Behind
          </div>
          
          <h2 className="text-4xl font-heading font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            While Others Read Yesterday's News
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Our subscribers are already prepared for what's next.
          </p>

          {/* Subscriber count */}
          <div className="inline-flex items-center gap-3 bg-card border border-border rounded-lg px-6 py-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <TrendingUp className="w-5 h-5 text-accent" />
            <div className="text-left">
              <div className="text-2xl font-bold font-heading">
                {subscriberCount.toLocaleString()}
              </div>
              <p className="text-sm text-muted-foreground">professionals stay ahead</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
          <div className="bg-card border border-border rounded-lg p-1 inline-flex">
            <button
              onClick={() => setActiveTab('missed')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === 'missed'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              What You Missed
            </button>
            <button
              onClick={() => setActiveTab('coming')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === 'coming'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              What's Coming
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* What You Missed */}
          <div className={`transition-all duration-500 ${activeTab === 'missed' ? 'opacity-100 scale-100' : 'lg:opacity-40 lg:scale-95'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold">What You Missed</h3>
                <p className="text-sm text-muted-foreground">Subscriber-only insights</p>
              </div>
            </div>

            <div className="space-y-4">
              {missedContent.map((item, index) => (
                <div key={index} className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] min-h-[220px]">
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-flex items-center bg-destructive/10 text-destructive px-2 py-1 rounded text-xs font-medium">
                      {item.tag}
                    </span>
                    <span className="text-xs text-muted-foreground">{item.time}</span>
                  </div>
                  
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* What's Coming */}
          <div className={`transition-all duration-500 ${activeTab === 'coming' ? 'opacity-100 scale-100' : 'lg:opacity-40 lg:scale-95'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold">What's Coming</h3>
                <p className="text-sm text-muted-foreground">This week's coverage</p>
              </div>
            </div>

            <div className="space-y-4">
              {comingContent.map((item, index) => (
                <div key={index} className="group bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-all duration-300 relative overflow-hidden hover:scale-[1.02] min-h-[220px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    <div className="flex items-start justify-between mb-3">
                      <span className="inline-flex items-center bg-accent/10 text-accent px-2 py-1 rounded text-xs font-medium">
                        {item.tag}
                      </span>
                      <span className="text-xs text-accent font-medium">{item.time}</span>
                    </div>
                    
                    <h4 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                      {item.title}
                    </h4>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.description}
                    </p>

                    <ChevronRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity float-right" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4" />
            Join the Professionals
          </div>
          
          <h3 className="text-3xl font-heading font-bold mb-4">
            Don't Let Another Week Pass You By
          </h3>
          
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            While others scramble to understand yesterday's developments, you'll be prepared for tomorrow's opportunities.
          </p>

          <button className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25">
            Join {subscriberCount.toLocaleString()}+ Professionals
          </button>
        </div>
      </div>
    </section>
  );
};