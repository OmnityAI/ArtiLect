"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Brain, LayoutGrid, PanelsLeftBottom, Tag } from "lucide-react";
import { toast } from "sonner";

const topics = [
  {
    id: "ai-machine-learning",
    title: "AI & Machine Learning",
    description: "Explore the latest in artificial intelligence and ML innovations",
    icon: Brain,
    slug: "ai-machine-learning"
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "Unlock insights from data with advanced analytics techniques",
    icon: LayoutGrid,
    slug: "data-analytics"
  },
  {
    id: "automation-business",
    title: "Automation in Business",
    description: "Transform operations with intelligent automation solutions",
    icon: PanelsLeftBottom,
    slug: "automation-business"
  },
  {
    id: "data-ethics-policy",
    title: "Data Ethics & Policy",
    description: "Navigate the ethical landscape of data and AI governance",
    icon: Tag,
    slug: "data-ethics-policy"
  }
];

export default function FeaturedTopics() {
  const handleTopicClick = (topicTitle: string) => {
    toast.info(`Opening ${topicTitle} topics`);
  };

  return (
    <section className="w-full">
  <div className="container max-w-6xl mx-auto px-6 md:px-8 lg:px-[120px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Explore Featured Topics
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive deep into the most important areas shaping the future of technology and business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((topic) => {
            const IconComponent = topic.icon;
            
            return (
              <Link
                key={topic.id}
                href={`/tags/${topic.slug}`}
                onClick={() => handleTopicClick(topic.title)}
                className="group"
              >
                <Card className="h-full bg-card border-border hover:ring-2 hover:ring-ring/50 transition-all duration-200 hover:shadow-lg hover:shadow-primary/5 relative overflow-hidden">
                  {/* Subtle left accent stripe */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary opacity-60 group-hover:opacity-100 transition-opacity duration-200" />
                  
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
                        <IconComponent className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-200" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-semibold mb-2 text-card-foreground group-hover:text-foreground transition-colors duration-200">
                          {topic.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {topic.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}