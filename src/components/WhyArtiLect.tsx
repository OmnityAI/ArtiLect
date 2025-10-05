"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Brain, Zap, Shield, Clock } from "lucide-react";

export default function WhyArtiLect() {
  const features = [
    {
      icon: Brain,
      title: "Deep AI Analysis",
      description: "Beyond surface news—we analyze implications and future possibilities of AI developments.",
      gradient: "from-primary to-accent"
    },
    {
      icon: Clock,
      title: "Curated Intelligence", 
      description: "We read hundreds of sources weekly to bring you only the most critical AI breakthroughs.",
      gradient: "from-accent to-primary"
    },
    {
      icon: Zap,
      title: "Actionable Insights",
      description: "Practical takeaways you can apply immediately, whether in tech, business, or research.",
      gradient: "from-primary via-accent to-primary"
    },
    {
      icon: Shield,
      title: "Expert Network",
      description: "Insights from AI researchers, startup founders, and industry leaders shaping the future.",
      gradient: "from-accent via-primary to-accent"
    }
  ];

  return (
    <section className="py-16 bg-background">
  <div className="container mx-auto px-6 md:px-8 lg:px-[120px]">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Why{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              ArtiLect
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            The signal in the noise. No fluff, no hype—just AI intelligence that matters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className={`bg-card/50 border-border/50 hover:bg-card/70 transition-all duration-500 group hover:scale-[1.02] hover:shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-${(index + 1) * 100}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.gradient} bg-opacity-20 group-hover:scale-110 transition-all duration-300`}>
                      <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}