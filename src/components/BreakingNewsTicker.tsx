"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Clock, Zap, TrendingUp, Briefcase, Scale, DollarSign, ArrowRight } from 'lucide-react';

interface NewsItem {
  id: string;
  type: 'research' | 'industry' | 'policy' | 'funding';
  title: string;
  timestamp: string;
  urgent: boolean;
  badge?: string;
}

const newsData: NewsItem[] = [
  {
    id: '1',
    type: 'research',
    title: 'OpenAI releases GPT-5 with breakthrough reasoning capabilities',
    timestamp: 'Just now',
    urgent: true,
    badge: 'BREAKING'
  },
  {
    id: '2',
    type: 'industry',
    title: 'Google announces $2B investment in AI infrastructure expansion',
    timestamp: '15 min ago',
    urgent: true,
    badge: 'EXCLUSIVE'
  },
  {
    id: '3',
    type: 'policy',
    title: 'EU AI Act enforcement begins - new compliance requirements for AI companies',
    timestamp: '1 hour ago',
    urgent: false,
    badge: 'URGENT'
  },
  {
    id: '4',
    type: 'funding',
    title: 'Anthropic raises $4B Series D led by Amazon at $18B valuation',
    timestamp: '2 hours ago',
    urgent: true,
    badge: 'FUNDING'
  },
  {
    id: '5',
    type: 'research',
    title: 'MIT breakthrough: AI achieves human-level performance on complex reasoning tasks',
    timestamp: '3 hours ago',
    urgent: false
  },
  {
    id: '6',
    type: 'industry',
    title: 'Microsoft integrates advanced AI models across entire Office suite',
    timestamp: '4 hours ago',
    urgent: false
  },
  {
    id: '7',
    type: 'policy',
    title: 'UK proposes new AI safety framework for financial services',
    timestamp: '5 hours ago',
    urgent: false
  },
  {
    id: '8',
    type: 'funding',
    title: 'Runway ML secures $237M Series D for AI video generation platform',
    timestamp: '6 hours ago',
    urgent: false,
    badge: 'HOT'
  }
];

const typeConfig = {
  research: {
    icon: Zap,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10'
  },
  industry: {
    icon: Briefcase,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10'
  },
  policy: {
    icon: Scale,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10'
  },
  funding: {
    icon: DollarSign,
    color: 'text-green-400',
    bg: 'bg-green-500/10'
  }
};

export const BreakingNewsTicker = () => {
  const [currentItems, setCurrentItems] = useState<NewsItem[]>(newsData.slice(0, 6));
  const [isHovered, setIsHovered] = useState(false);

  // Rotate news items every 30 seconds
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentItems(prev => {
        const nextIndex = (newsData.indexOf(prev[prev.length - 1]) + 1) % newsData.length;
        const newItems = [...prev.slice(1), newsData[nextIndex]];
        return newItems;
      });
    }, 30000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleItemClick = useCallback((item: NewsItem) => {
    // Simulate newsletter signup trigger
    console.log('Newsletter signup trigger for:', item.title);
  }, []);

  return (
  <div className="relative w-full bg-gradient-to-r from-card via-card/95 to-card overflow-hidden border-b border-border/50">
      {/* Breaking News Label */}
      <div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-primary via-primary to-primary/80 px-3 sm:px-6 flex items-center z-10">
        <div className="flex items-center gap-2 text-primary-foreground font-semibold">
          <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
          <span className="text-xs sm:text-sm font-heading tracking-wide">BREAKING NEWS</span>
        </div>
      </div>

      {/* Ticker Content */}
      <div 
        className="flex items-center pl-28 sm:pl-40 pr-3 sm:pr-6 py-3 sm:py-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`flex items-center gap-6 sm:gap-8 ${isHovered ? '' : 'animate-scroll'}`}>
          {currentItems.concat(currentItems).map((item, index) => {
            const IconComponent = typeConfig[item.type].icon;
            
            return (
              <div
                key={`${item.id}-${index}`}
                onClick={() => handleItemClick(item)}
                className="flex items-center gap-2 sm:gap-3 cursor-pointer hover:bg-muted/30 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-300 group min-w-max"
              >
                {/* Type Icon */}
                <div className={`p-1.5 rounded-full ${typeConfig[item.type].bg}`}>
                  <IconComponent className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${typeConfig[item.type].color}`} />
                </div>

                {/* Badge */}
                {item.badge && (
                  <span className={`px-2 py-0.5 text-xs font-bold rounded-full border ${
                    item.urgent 
                      ? 'bg-destructive/20 text-destructive border-destructive/40 animate-pulse'
                      : 'bg-accent/20 text-accent-foreground border-accent/40'
                  }`}>
                    {item.badge}
                  </span>
                )}

                {/* News Content */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-xs sm:text-sm text-foreground font-medium group-hover:text-primary transition-colors duration-200 line-clamp-1">
                    {item.title}
                  </span>
                  
                  <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground">
                    <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    <span className="text-[10px] sm:text-xs font-medium">{item.timestamp}</span>
                  </div>
                </div>

                {/* Hover Arrow */}
                <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1" />

                {/* Separator */}
                <div className="w-px h-4 bg-border ml-4" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Gradient Fade Edges */}
  <div className="absolute top-0 right-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-card to-transparent pointer-events-none" />
  <div className="absolute top-0 left-28 sm:left-40 bottom-0 w-6 sm:w-8 bg-gradient-to-r from-card to-transparent pointer-events-none" />

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};