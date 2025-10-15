"use client";

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Users, TrendingUp, Zap } from 'lucide-react';

const AnimatedCounter = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(target - 50);

  useEffect(() => {
    const startTime = Date.now();
    const startValue = count;
    const difference = target - startValue;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + difference * easeOutQuart);
      
      setCount(currentValue);
      if (progress < 1) requestAnimationFrame(animate);
    };

    const timer = setTimeout(animate, 500);
    return () => clearTimeout(timer);
  }, [target, duration]);

  return (
    <span className="font-mono text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
      {count.toLocaleString('de-DE')}
    </span>
  );
};

const locations = ['San Francisco', 'London', 'Tokyo', 'Berlin', 'Toronto', 'Austin', 'Singapore'];

const ActivityFeed = () => {
  const [activities, setActivities] = useState<Array<{id: string; location: string; time: string}>>([]);

  useEffect(() => {
    const generateActivity = () => ({
      id: `activity-${Date.now()}-${Math.random()}`,
      location: locations[Math.floor(Math.random() * locations.length)],
      time: `${Math.floor(Math.random() * 5) + 1}m ago`
    });

    setActivities([generateActivity(), generateActivity()]);

    const interval = setInterval(() => {
      setActivities(prev => [generateActivity(), ...prev.slice(0, 1)]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-2 relative h-[92px] overflow-hidden">
      {activities.map((activity, index) => (
        <div
          key={activity.id}
          className={`flex items-center gap-2 px-3 h-10 rounded-full bg-muted/30 transition-transform duration-700 ${
            index === 0 ? 'animate-in slide-in-from-top-1 fade-in' : ''
          }`}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-muted-foreground truncate">
            <span className="text-foreground font-medium">{activity.location}</span> • {activity.time}
          </span>
        </div>
      ))}
    </div>
  );
};

export const SocialProof = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-12">
  <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-[120px]">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-heading font-bold mb-2">
            Trusted by <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AI Professionals</span>
          </h2>
          <p className="text-muted-foreground">Join the community that stays ahead</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Live Counter */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 group">
            <div className="text-center">
              <div className="mb-3">
                {isVisible && <AnimatedCounter target={2888} />}
                <span className="text-muted-foreground text-lg">+</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">Active Subscribers</p>
              <div className="flex items-center justify-center gap-1 text-xs text-accent">
                <TrendingUp className="w-3 h-3" />
                <span>+200 weekly</span>
              </div>
            </div>
          </Card>

          {/* Live Activity */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
            <div className="mb-3">
              <h3 className="font-semibold text-sm mb-1">Live Activity</h3>
              <p className="text-xs text-muted-foreground">Recent subscriptions</p>
            </div>
            <ActivityFeed />
          </Card>

          {/* Quick Stats */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Open Rate</span>
                <span className="font-bold text-accent">88%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Countries</span>
                <span className="font-bold text-primary">50+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Read Time</span>
                <span className="font-bold text-foreground">5 min</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Company Trust Indicators removed by request */}
      </div>
    </section>
  );
};