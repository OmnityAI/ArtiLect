"use client";

import React, { useState } from 'react';
import { Trophy, Star, Target, Users, TrendingUp, Lock, Check, Crown, Award, Zap, BookOpen, Share2, Brain, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tier: 'novice' | 'explorer' | 'expert' | 'leader';
  progress: number;
  maxProgress: number;
  unlocked: boolean;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  reward: string;
}

interface LeaderboardMember {
  id: string;
  name: string;
  avatar: string;
  tier: string;
  achievements: number;
  weeklyStreak: number;
}

export const AchievementPreview = () => {
  const [selectedTier, setSelectedTier] = useState<string>('all');

  const achievements: Achievement[] = [
    {
      id: '1',
      title: '7-Day Reading Streak',
      description: 'Read newsletter for 7 consecutive days',
      icon: <BookOpen className="h-5 w-5" />,
      tier: 'novice',
      progress: 5,
      maxProgress: 7,
      unlocked: false,
      rarity: 'common',
      reward: 'Exclusive AI Learning Guide'
    },
    {
      id: '2',
      title: 'Knowledge Sharer',
      description: 'Share 5 insights from newsletters',
      icon: <Share2 className="h-5 w-5" />,
      tier: 'explorer',
      progress: 3,
      maxProgress: 5,
      unlocked: false,
      rarity: 'rare',
      reward: 'Early Access to Premium Content'
    },
    {
      id: '3',
      title: 'AI Quiz Master',
      description: 'Complete 10 AI knowledge quizzes',
      icon: <Brain className="h-5 w-5" />,
      tier: 'expert',
      progress: 10,
      maxProgress: 10,
      unlocked: true,
      rarity: 'epic',
      reward: 'Direct Access to AI Experts'
    },
    {
      id: '4',
      title: 'Community Leader',
      description: 'Help 50+ community members',
      icon: <Crown className="h-5 w-5" />,
      tier: 'leader',
      progress: 47,
      maxProgress: 50,
      unlocked: false,
      rarity: 'legendary',
      reward: 'Exclusive Mastermind Access'
    }
  ];

  const leaderboard: LeaderboardMember[] = [
    {
      id: '1',
      name: 'Alex Chen',
      avatar: '/avatars/alex.jpg',
      tier: 'AI Leader',
      achievements: 24,
      weeklyStreak: 12
    },
    {
      id: '2',
      name: 'Sarah Kim',
      avatar: '/avatars/sarah.jpg',
      tier: 'AI Expert',
      achievements: 18,
      weeklyStreak: 8
    },
    {
      id: '3',
      name: 'Marcus Johnson',
      avatar: '/avatars/marcus.jpg',
      tier: 'AI Explorer',
      achievements: 15,
      weeklyStreak: 6
    }
  ];

  const tiers = [
    { id: 'novice', name: 'AI Novice', color: 'from-blue-500 to-cyan-500', minAchievements: 0 },
    { id: 'explorer', name: 'AI Explorer', color: 'from-green-500 to-teal-500', minAchievements: 5 },
    { id: 'expert', name: 'AI Expert', color: 'from-purple-500 to-pink-500', minAchievements: 15 },
    { id: 'leader', name: 'AI Leader', color: 'from-yellow-500 to-orange-500', minAchievements: 30 }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-gray-500 bg-gray-500/10';
      case 'rare': return 'border-blue-500 bg-blue-500/10';
      case 'epic': return 'border-purple-500 bg-purple-500/10';
      case 'legendary': return 'border-yellow-500 bg-yellow-500/10';
      default: return 'border-gray-500 bg-gray-500/10';
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'novice': return 'from-blue-500 to-cyan-500';
      case 'explorer': return 'from-green-500 to-teal-500';
      case 'expert': return 'from-purple-500 to-pink-500';
      case 'leader': return 'from-yellow-500 to-orange-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="w-full bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Trophy className="h-8 w-8 text-primary" />
            <Badge variant="outline" className="text-primary border-primary">
              Gamified Learning
            </Badge>
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Unlock Your AI Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of learners earning achievements, climbing leaderboards, and unlocking exclusive rewards through newsletter engagement.
          </p>
        </div>

        {/* Achievement Tiers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {tiers.map((tier) => (
            <Card 
              key={tier.id} 
              className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-muted bg-card/50 backdrop-blur-sm"
              onClick={() => setSelectedTier(tier.id)}
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tier.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{tier.name}</h3>
                <p className="text-sm text-muted-foreground">{tier.minAchievements}+ Achievements</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Achievements List */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-heading font-bold">Your Achievements</h3>
              <Badge variant="secondary">
                {achievements.filter(a => a.unlocked).length}/{achievements.length} Unlocked
              </Badge>
            </div>
            
            <div className="space-y-4">
              {achievements.map((achievement) => (
                <Card 
                  key={achievement.id}
                  className={`transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border ${getRarityColor(achievement.rarity)} ${achievement.unlocked ? 'bg-gradient-to-r from-primary/5 to-accent/5' : 'bg-card/50'} backdrop-blur-sm`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r ${getTierColor(achievement.tier)} ${achievement.unlocked ? '' : 'grayscale opacity-50'}`}>
                        {achievement.unlocked ? achievement.icon : <Lock className="h-5 w-5 text-white" />}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                          {achievement.unlocked && <Check className="h-4 w-4 text-green-500" />}
                          <Badge variant={achievement.rarity === 'legendary' ? 'default' : 'secondary'} className="capitalize">
                            {achievement.rarity}
                          </Badge>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-medium">{achievement.progress}/{achievement.maxProgress}</span>
                          </div>
                          <Progress 
                            value={(achievement.progress / achievement.maxProgress) * 100} 
                            className="h-2"
                          />
                        </div>
                        
                        <div className="mt-3 p-3 bg-muted/50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <Zap className="h-4 w-4 text-accent" />
                            <span className="text-sm font-medium">Reward: {achievement.reward}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Leaderboard & Stats */}
          <div className="space-y-6">
            {/* Community Leaderboard */}
            <Card className="bg-card/50 backdrop-blur-sm border-muted">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Community Leaders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((member, index) => (
                    <div key={member.id} className="flex items-center gap-4 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="text-sm font-bold text-primary">#{index + 1}</div>
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                      </div>
                      
                      <div className="flex-1">
                        <div className="font-semibold text-foreground">{member.name}</div>
                        <div className="text-sm text-muted-foreground">{member.tier}</div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-sm font-semibold">{member.achievements} achievements</div>
                        <div className="text-xs text-muted-foreground">{member.weeklyStreak} week streak</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Stats Overview */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Your Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-background/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">12</div>
                    <div className="text-sm text-muted-foreground">Days Active</div>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-lg">
                    <div className="text-2xl font-bold text-accent">3</div>
                    <div className="text-sm text-muted-foreground">Achievements</div>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-lg">
                    <div className="text-2xl font-bold text-green-500">85%</div>
                    <div className="text-sm text-muted-foreground">Completion Rate</div>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-500">#247</div>
                    <div className="text-sm text-muted-foreground">Global Rank</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Exclusive Preview */}
            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-purple-500" />
                  Exclusive Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-background/50 rounded-lg border border-purple-500/20">
                    <h4 className="font-semibold mb-2 text-purple-400">🚀 Advanced AI Strategies</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Unlock exclusive content on implementing AI in enterprise environments...
                    </p>
                    <Badge variant="outline" className="text-purple-400 border-purple-400">
                      Unlocks at Expert Tier
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Lock className="h-4 w-4" />
                    <span>Complete 15 achievements to unlock</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h3 className="text-2xl font-heading font-bold text-center mb-8">Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "David Rodriguez",
                tier: "AI Expert",
                quote: "The achievement system kept me engaged and motivated. I've learned more about AI in 3 months than in years of random reading.",
                achievements: 18
              },
              {
                name: "Emma Thompson",
                tier: "AI Leader",
                quote: "Being on the leaderboard pushed me to contribute more to the community. The rewards are genuinely valuable.",
                achievements: 25
              },
              {
                name: "Michael Chang",
                tier: "AI Explorer",
                quote: "The gamification made learning addictive in the best way. Each achievement unlocked genuinely useful resources.",
                achievements: 12
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-muted">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <Badge variant="secondary">{testimonial.tier}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">"{testimonial.quote}"</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Trophy className="h-3 w-3" />
                        <span>{testimonial.achievements} achievements earned</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 lg:p-12 border border-primary/20">
          <h3 className="text-3xl font-heading font-bold mb-4">Start Your Achievement Journey</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our gamified learning community and start earning achievements today. Every newsletter read, every insight shared, and every quiz completed brings you closer to exclusive rewards.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="bg-primary/20 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3">
              <Target className="h-5 w-5 text-primary" />
              <span className="font-medium">Achievement System</span>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
            <div className="bg-accent/20 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3">
              <Crown className="h-5 w-5 text-accent" />
              <span className="font-medium">Exclusive Rewards</span>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
            <div className="bg-green-500/20 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3">
              <Users className="h-5 w-5 text-green-500" />
              <span className="font-medium">Community Recognition</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};