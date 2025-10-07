"use client"

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Users, TrendingUp } from "lucide-react"

export default function HowItWorks() {
  return (
    <section className="py-16 bg-card/30">
  <div className="container mx-auto px-6 md:px-8 lg:px-[120px]">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Weekly Intelligence
            </span>{" "}
            Delivered
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Three reasons why thousands choose Artilect for their AI intelligence
          </p>
        </div>

        {/* Horizontal scroll on mobile, 3-col grid on md+ */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:snap-none">
          {/* Curated Content */}
          <div className="text-center group animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 flex-none w-4/5 max-w-xs snap-center md:w-auto">
            <div className="relative mb-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-500 group-hover:scale-110">
                <Mail className="w-8 h-8 text-primary group-hover:rotate-12 transition-all duration-300" />
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
              Curated Weekly
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Hand-picked insights from 100+ sources. Zero noise, maximum signal.
            </p>
          </div>

          {/* Expert Analysis */}
          <div className="text-center group animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 flex-none w-4/5 max-w-xs snap-center md:w-auto">
            <div className="relative mb-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center group-hover:from-accent/30 group-hover:to-primary/30 transition-all duration-500 group-hover:scale-110">
                <Users className="w-8 h-8 text-accent group-hover:rotate-12 transition-all duration-300" />
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
              Expert Commentary
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Direct insights from AI researchers and industry leaders.
            </p>
          </div>

          {/* Stay Ahead */}
          <div className="text-center group animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400 flex-none w-4/5 max-w-xs snap-center md:w-auto">
            <div className="relative mb-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-500 group-hover:scale-110">
                <TrendingUp className="w-8 h-8 text-primary group-hover:rotate-12 transition-all duration-300" />
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
              First to Know
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Get breakthrough research 24-48 hours before mainstream media.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}