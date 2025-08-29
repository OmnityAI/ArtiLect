"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Trophy, 
  Star, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Target,
  BookOpen,
  Zap,
  Crown,
  Lock,
  Unlock
} from 'lucide-react';

interface JourneyStage {
  id: string;
  level: string;
  title: string;
  description: string;
  skills: string[];
  timeToComplete: string;
  communitySize: number;
  completionRate: number;
  isUnlocked: boolean;
  isActive: boolean;
  isCompleted: boolean;
  exclusiveContent: string[];
  badge: {
    icon: React.ReactNode;
    color: string;
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

const journeyStages: JourneyStage[] = [
  {
    id: 'beginner',
    level: 'Level 1',
    title: 'AI Explorer',
    description: 'Start your AI journey with fundamental concepts and practical applications',
    skills: ['AI Basics & History', 'Machine Learning Fundamentals', 'ChatGPT Mastery', 'Prompt Engineering', 'AI Tools Overview'],
    timeToComplete: '4-6 weeks',
    communitySize: 12500,
    completionRate: 85,
    isUnlocked: true,
    isActive: true,
    isCompleted: false,
    exclusiveContent: ['Weekly AI News Digest', 'Beginner Toolkit', 'Community Discord Access'],
    badge: {
      icon: <BookOpen className="w-5 h-5" />,
      color: 'from-emerald-500 to-teal-500'
    },
    testimonial: {
      quote: "This foundation gave me the confidence to start using AI in my daily work. Game-changing!",
      author: "Sarah Chen",
      role: "Marketing Manager"
    }
  },
  {
    id: 'intermediate',
    level: 'Level 2',
    title: 'AI Practitioner',
    description: 'Build practical skills and start implementing AI solutions in real-world scenarios',
    skills: ['Advanced Prompt Engineering', 'AI Automation', 'Custom GPT Creation', 'AI Image & Video Tools', 'Business AI Integration'],
    timeToComplete: '6-8 weeks',
    communitySize: 8200,
    completionRate: 72,
    isUnlocked: true,
    isActive: false,
    isCompleted: false,
    exclusiveContent: ['AI Automation Templates', 'Weekly Expert Interviews', 'Premium Tool Reviews'],
    badge: {
      icon: <Target className="w-5 h-5" />,
      color: 'from-blue-500 to-purple-500'
    },
    testimonial: {
      quote: "I automated 60% of my content creation workflow. The ROI has been incredible.",
      author: "Marcus Rodriguez",
      role: "Content Creator"
    }
  },
  {
    id: 'advanced',
    level: 'Level 3',
    title: 'AI Innovator',
    description: 'Master advanced techniques and lead AI initiatives within your organization',
    skills: ['Fine-tuning Models', 'AI Strategy Development', 'Ethics & Governance', 'Team Training', 'ROI Measurement'],
    timeToComplete: '8-10 weeks',
    communitySize: 3400,
    completionRate: 68,
    isUnlocked: false,
    isActive: false,
    isCompleted: false,
    exclusiveContent: ['Monthly Mastermind Sessions', 'AI Strategy Templates', 'Executive Briefings'],
    badge: {
      icon: <Zap className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500'
    },
    testimonial: {
      quote: "Leading our company's AI transformation has positioned me as a key strategic player.",
      author: "Dr. Priya Patel",
      role: "Head of Innovation"
    }
  },
  {
    id: 'expert',
    level: 'Level 4',
    title: 'AI Visionary',
    description: 'Shape the future of AI and become a thought leader in the field',
    skills: ['Research & Development', 'Industry Speaking', 'Thought Leadership', 'Venture Assessment', 'Future Planning'],
    timeToComplete: '10-12 weeks',
    communitySize: 950,
    completionRate: 78,
    isUnlocked: false,
    isActive: false,
    isCompleted: false,
    exclusiveContent: ['Quarterly AI Summit Access', 'Research Preview Access', 'Advisory Board Invitations'],
    badge: {
      icon: <Crown className="w-5 h-5" />,
      color: 'from-yellow-500 to-orange-500'
    },
    testimonial: {
      quote: "Being recognized as an AI thought leader opened doors I never imagined possible.",
      author: "James Thompson",
      role: "AI Consultant & Speaker"
    }
  }
];

export const UserJourneyTracker = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [hoveredStage, setHoveredStage] = useState<string | null>(null);
  const [showNewsletter, setShowNewsletter] = useState(false);

  const overallProgress = ((currentStage + 1) / journeyStages.length) * 100;

  const handleStageClick = (index: number) => {
    if (journeyStages[index].isUnlocked) {
      setCurrentStage(index);
    }
  };

  const handleJoinNewsletter = () => {
    setShowNewsletter(true);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-background via-card to-background">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-accent" />
            <Badge variant="secondary" className="text-sm">
              Your Learning Journey
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Master AI at Your Own Pace
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of professionals advancing their careers through our structured AI learning path. 
            Track your progress, unlock exclusive content, and become an AI expert.
          </p>
        </motion.div>

        {/* Overall Progress */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-12"
        >
          <Card className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-1">Overall Progress</h3>
                <p className="text-muted-foreground">
                  You're in the top 15% of learners at your current level
                </p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary">{Math.round(overallProgress)}%</div>
                <div className="text-sm text-muted-foreground">Complete</div>
              </div>
            </div>
            <Progress value={overallProgress} className="h-3" />
          </Card>
        </motion.div>

        {/* Journey Path */}
        <div className="relative mb-16">
          {/* Progress Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-border z-0">
            <motion.div 
              className="h-full bg-gradient-to-r from-primary to-accent"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStage / (journeyStages.length - 1)) * 100}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>

          {/* Stage Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {journeyStages.map((stage, index) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative ${stage.isUnlocked ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                onClick={() => handleStageClick(index)}
                onMouseEnter={() => setHoveredStage(stage.id)}
                onMouseLeave={() => setHoveredStage(null)}
              >
                <Card className={`p-6 h-full transition-all duration-300 ${
                  stage.isActive 
                    ? 'ring-2 ring-primary shadow-xl shadow-primary/20' 
                    : stage.isCompleted 
                    ? 'bg-emerald-500/10 border-emerald-500/30'
                    : !stage.isUnlocked
                    ? 'opacity-60 bg-muted/20'
                    : 'hover:shadow-lg hover:scale-105'
                }`}>
                  {/* Stage Header */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-xs">
                      {stage.level}
                    </Badge>
                    <div className={`p-2 rounded-full bg-gradient-to-r ${stage.badge.color}`}>
                      {stage.isUnlocked ? stage.badge.icon : <Lock className="w-5 h-5" />}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{stage.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {stage.description}
                  </p>

                  {/* Progress Bar */}
                  {stage.isActive && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{stage.completionRate}%</span>
                      </div>
                      <Progress value={stage.completionRate} className="h-2" />
                    </div>
                  )}

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <Clock className="w-4 h-4 mx-auto mb-1 text-muted-foreground" />
                      <div className="text-xs text-muted-foreground">{stage.timeToComplete}</div>
                    </div>
                    <div className="text-center">
                      <Users className="w-4 h-4 mx-auto mb-1 text-muted-foreground" />
                      <div className="text-xs text-muted-foreground">
                        {stage.communitySize.toLocaleString()}+ users
                      </div>
                    </div>
                  </div>

                  {/* Skills Preview */}
                  <div className="mb-4">
                    <div className="text-sm font-medium mb-2">What you'll learn:</div>
                    <div className="flex flex-wrap gap-1">
                      {stage.skills.slice(0, 2).map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {stage.skills.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{stage.skills.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    variant={stage.isActive ? "default" : stage.isCompleted ? "outline" : "secondary"}
                    size="sm" 
                    className="w-full"
                    disabled={!stage.isUnlocked}
                  >
                    {stage.isCompleted ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Completed
                      </>
                    ) : stage.isActive ? (
                      <>
                        Continue Learning
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    ) : stage.isUnlocked ? (
                      <>
                        Start Level
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4 mr-2" />
                        Locked
                      </>
                    )}
                  </Button>
                </Card>

                {/* Expanded Details on Hover */}
                <AnimatePresence>
                  {hoveredStage === stage.id && stage.isUnlocked && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 right-0 mt-2 p-4 bg-card border rounded-lg shadow-xl z-20"
                    >
                      <div className="mb-3">
                        <h4 className="font-semibold mb-2">Exclusive Content:</h4>
                        <ul className="text-sm space-y-1">
                          {stage.exclusiveContent.map((content, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <Star className="w-3 h-3 text-accent" />
                              {content}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="border-t pt-3">
                        <blockquote className="text-sm italic text-muted-foreground">
                          "{stage.testimonial.quote}"
                        </blockquote>
                        <cite className="text-xs text-muted-foreground mt-1 block">
                          — {stage.testimonial.author}, {stage.testimonial.role}
                        </cite>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Current Stage Details */}
        <motion.div
          key={currentStage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${journeyStages[currentStage].badge.color}`}>
                    {journeyStages[currentStage].badge.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold">
                      {journeyStages[currentStage].title}
                    </h3>
                    <p className="text-muted-foreground">
                      {journeyStages[currentStage].level}
                    </p>
                  </div>
                </div>

                <p className="text-lg mb-6 leading-relaxed">
                  {journeyStages[currentStage].description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Skills You'll Master:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {journeyStages[currentStage].skills.map((skill, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500" />
                          <span className="text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="p-6">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-accent" />
                    Achievement Stats
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        {journeyStages[currentStage].communitySize.toLocaleString()}+
                      </div>
                      <div className="text-sm text-muted-foreground">Active Learners</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">
                        {journeyStages[currentStage].completionRate}%
                      </div>
                      <div className="text-sm text-muted-foreground">Success Rate</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <blockquote className="text-lg italic mb-4">
                    "{journeyStages[currentStage].testimonial.quote}"
                  </blockquote>
                  <cite className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent" />
                    <div>
                      <div className="font-semibold">
                        {journeyStages[currentStage].testimonial.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {journeyStages[currentStage].testimonial.role}
                      </div>
                    </div>
                  </cite>
                </Card>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-accent" />
                <Badge variant="secondary">
                  Exclusive Access
                </Badge>
              </div>
              <h3 className="text-3xl font-heading font-bold mb-4">
                Ready to Begin Your AI Journey?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join our newsletter to unlock your learning path, get exclusive content at each level, 
                and connect with a community of {journeyStages.reduce((sum, stage) => sum + stage.communitySize, 0).toLocaleString()}+ AI enthusiasts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6"
                  onClick={handleJoinNewsletter}
                >
                  Start Your AI Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Unlock className="w-4 h-4" />
                    Free to start
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    24k+ members
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    4.9/5 rating
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};