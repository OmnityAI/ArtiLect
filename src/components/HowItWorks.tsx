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

        {/* Show all three on small screens: compact 3-col grid, scale up on md+ */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-8 items-start">
          {/* Curated Content */}
          <div className="text-center group animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 h-full flex flex-col items-center">
            <div className="relative mb-4 md:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-500 group-hover:scale-110">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary group-hover:rotate-12 transition-all duration-300" />
              </div>
            </div>
            
            <h3 className="text-sm sm:text-base md:text-xl font-semibold mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300">
              Curated Weekly
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-snug md:leading-relaxed min-h-[56px] sm:min-h-[64px]">
              Hand-picked insights from 100+ sources. Zero noise, maximum signal.
            </p>
          </div>

          {/* Expert Analysis */}
          <div className="text-center group animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 h-full flex flex-col items-center">
            <div className="relative mb-4 md:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center group-hover:from-accent/30 group-hover:to-primary/30 transition-all duration-500 group-hover:scale-110">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-accent group-hover:rotate-12 transition-all duration-300" />
              </div>
            </div>
            
            <h3 className="text-sm sm:text-base md:text-xl font-semibold mb-2 md:mb-3 group-hover:text-accent transition-colors duration-300">
              Expert Commentary
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-snug md:leading-relaxed min-h-[56px] sm:min-h-[64px]">
              Direct insights from AI researchers and industry leaders.
            </p>
          </div>

          {/* Stay Ahead */}
          <div className="text-center group animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400 h-full flex flex-col items-center">
            <div className="relative mb-4 md:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-500 group-hover:scale-110">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary group-hover:rotate-12 transition-all duration-300" />
              </div>
            </div>
            
            <h3 className="text-sm sm:text-base md:text-xl font-semibold mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300">
              First to Know
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-snug md:leading-relaxed min-h-[56px] sm:min-h-[64px]">
              Get breakthrough research 24-48 hours before mainstream media.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}