"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ChevronRight, Share2, Brain, Zap, Target, Users, Star, ArrowRight, Mail } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  options: {
    id: string;
    text: string;
    value: string;
    description?: string;
  }[];
}

interface Answer {
  questionId: string;
  selectedOption: string;
}

interface AIProfile {
  title: string;
  description: string;
  traits: string[];
  recommendations: string[];
  icon: React.ReactNode;
  color: string;
}

const questions: Question[] = [
  {
    id: 'q1',
    question: 'Which AI development excites you most right now?',
    options: [
      { id: 'a1', text: 'Large Language Models (ChatGPT, Claude)', value: 'llm', description: 'Advanced conversational AI' },
      { id: 'a2', text: 'AI Art & Creative Tools', value: 'creative', description: 'DALL-E, Midjourney, Stable Diffusion' },
      { id: 'a3', text: 'Autonomous Systems', value: 'autonomous', description: 'Self-driving cars, robotics' },
      { id: 'a4', text: 'AI in Healthcare & Science', value: 'healthcare', description: 'Drug discovery, diagnostics' }
    ]
  },
  {
    id: 'q2',
    question: "What's your biggest challenge with AI adoption?",
    options: [
      { id: 'b1', text: 'Understanding the technology', value: 'learning', description: 'Need clearer explanations' },
      { id: 'b2', text: 'Finding practical applications', value: 'application', description: 'How to use it in my work' },
      { id: 'b3', text: 'Keeping up with rapid changes', value: 'pace', description: 'Too much happening too fast' },
      { id: 'b4', text: 'Ethical & safety concerns', value: 'ethics', description: 'Worried about implications' }
    ]
  },
  {
    id: 'q3',
    question: 'How do you currently stay informed about AI?',
    options: [
      { id: 'c1', text: 'Social media & news feeds', value: 'social', description: 'Twitter, LinkedIn, Reddit' },
      { id: 'c2', text: 'Academic papers & research', value: 'academic', description: 'ArXiv, journals, conferences' },
      { id: 'c3', text: 'Industry reports & newsletters', value: 'industry', description: 'Professional publications' },
      { id: 'c4', text: 'YouTube & podcasts', value: 'media', description: 'Video content & audio shows' }
    ]
  },
  {
    id: 'q4',
    question: 'Which AI application area interests you most professionally?',
    options: [
      { id: 'd1', text: 'Business automation & efficiency', value: 'business', description: 'Process optimization' },
      { id: 'd2', text: 'Content creation & marketing', value: 'content', description: 'Writing, design, campaigns' },
      { id: 'd3', text: 'Data analysis & insights', value: 'data', description: 'Analytics, predictions, patterns' },
      { id: 'd4', text: 'Software development', value: 'development', description: 'Coding assistants, testing' }
    ]
  },
  {
    id: 'q5',
    question: 'What excites you most about the future of AI?',
    options: [
      { id: 'e1', text: 'Solving global challenges', value: 'global', description: 'Climate, poverty, disease' },
      { id: 'e2', text: 'Enhancing human creativity', value: 'creativity', description: 'New forms of art & expression' },
      { id: 'e3', text: 'Democratizing expertise', value: 'democratization', description: 'AI tutors, advisors for everyone' },
      { id: 'e4', text: 'Scientific breakthroughs', value: 'science', description: 'Accelerated research & discovery' }
    ]
  },
  {
    id: 'q6',
    question: 'How technical is your background?',
    options: [
      { id: 'f1', text: 'Non-technical professional', value: 'nontechnical', description: 'Business, marketing, etc.' },
      { id: 'f2', text: 'Technical but not AI-focused', value: 'technical', description: 'Developer, engineer, analyst' },
      { id: 'f3', text: 'AI/ML practitioner', value: 'aiml', description: 'Data scientist, ML engineer' },
      { id: 'f4', text: 'AI researcher or academic', value: 'researcher', description: 'PhD, research scientist' }
    ]
  }
];

const aiProfiles: Record<string, AIProfile> = {
  'AI Strategist': {
    title: 'The AI Strategist',
    description: 'You see the big picture of AI transformation. You\'re focused on how AI will reshape industries and create new opportunities.',
    traits: ['Strategic thinking', 'Business-focused', 'Future-oriented', 'Innovation-driven'],
    recommendations: ['Industry transformation reports', 'AI adoption case studies', 'Executive AI briefings', 'Strategic implementation guides'],
    icon: <Target className="h-6 w-6" />,
    color: 'from-blue-500 to-purple-600'
  },
  'AI Creator': {
    title: 'The AI Creator',
    description: 'You\'re passionate about AI as a creative partner. You see AI as a tool to amplify human imagination and artistic expression.',
    traits: ['Creative mindset', 'Innovation-focused', 'Artistic vision', 'Tool exploration'],
    recommendations: ['Creative AI tools reviews', 'Art generation techniques', 'AI-human collaboration', 'Creative workflow optimization'],
    icon: <Zap className="h-6 w-6" />,
    color: 'from-pink-500 to-orange-500'
  },
  'AI Explorer': {
    title: 'The AI Explorer',
    description: 'You\'re curious about all aspects of AI. You love discovering new developments and understanding how everything connects.',
    traits: ['Curious learner', 'Broad interests', 'Early adopter', 'Connection maker'],
    recommendations: ['Weekly AI roundups', 'Emerging technology spotlights', 'Cross-industry AI applications', 'Future trend analysis'],
    icon: <Brain className="h-6 w-6" />,
    color: 'from-green-500 to-teal-500'
  },
  'AI Builder': {
    title: 'The AI Builder',
    description: 'You\'re hands-on with AI development. You want to understand the technical details and build practical AI solutions.',
    traits: ['Technical expertise', 'Problem solver', 'Implementation focus', 'Practical mindset'],
    recommendations: ['Technical deep-dives', 'Implementation tutorials', 'Tool comparisons', 'Development best practices'],
    icon: <Users className="h-6 w-6" />,
    color: 'from-purple-500 to-indigo-600'
  }
};

export const InteractiveQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [showResults, setShowResults] = useState(false);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [profile, setProfile] = useState<AIProfile | null>(null);
  const [shuffledQuestions] = useState(() => [...questions].sort(() => Math.random() - 0.5));

  const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;

  const calculateProfile = useCallback((userAnswers: Answer[]): AIProfile => {
    const profileScores = {
      'AI Strategist': 0,
      'AI Creator': 0,
      'AI Explorer': 0,
      'AI Builder': 0
    };

    userAnswers.forEach(answer => {
      const value = answer.selectedOption;
      
      // Scoring logic based on answer patterns
      if (['business', 'global', 'nontechnical', 'industry', 'application'].includes(value)) {
        profileScores['AI Strategist'] += 1;
      }
      if (['creative', 'creativity', 'media', 'content'].includes(value)) {
        profileScores['AI Creator'] += 1;
      }
      if (['learning', 'pace', 'social', 'democratization'].includes(value)) {
        profileScores['AI Explorer'] += 1;
      }
      if (['autonomous', 'development', 'aiml', 'researcher', 'academic', 'data', 'science'].includes(value)) {
        profileScores['AI Builder'] += 1;
      }
    });

    const topProfile = Object.entries(profileScores).reduce((a, b) => 
      profileScores[a[0]] > profileScores[b[0]] ? a : b
    )[0];

    return aiProfiles[topProfile];
  }, []);

  const handleAnswerSelect = useCallback((optionValue: string) => {
    setSelectedOption(optionValue);
  }, []);

  const handleNext = useCallback(() => {
    if (!selectedOption) return;

    const newAnswers = [...answers, { questionId: shuffledQuestions[currentQuestion].id, selectedOption }];
    setAnswers(newAnswers);

    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
    } else {
      // Quiz completed
      const calculatedProfile = calculateProfile(newAnswers);
      setProfile(calculatedProfile);
      setShowEmailCapture(true);
    }
  }, [selectedOption, answers, currentQuestion, shuffledQuestions, calculateProfile]);

  const handleEmailSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !profile) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowEmailCapture(false);
    setShowResults(true);
  }, [email, profile]);

  const handleShare = useCallback(() => {
    if (!profile) return;
    
    const shareText = `I just discovered I'm "${profile.title}" in AI! 🧠✨ Take the quiz to find your AI personality type.`;
    
    if (navigator.share) {
      navigator.share({
        title: 'My AI Personality Type',
        text: shareText,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(`${shareText} ${window.location.href}`);
      // You could show a toast notification here
    }
  }, [profile]);

  if (showEmailCapture && profile) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-lg"
        >
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-r ${profile.color} flex items-center justify-center mb-4`}>
                {profile.icon}
              </div>
              <CardTitle className="text-2xl font-heading">You're {profile.title}!</CardTitle>
              <CardDescription className="text-lg">
                Get your personalized AI insights and join thousands of AI enthusiasts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="mt-1"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Generating Your Profile...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Get My Full AI Profile
                    </div>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Join 50,000+ AI enthusiasts getting weekly insights. Unsubscribe anytime.
                </p>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  if (showResults && profile) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-2xl"
        >
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className={`mx-auto w-20 h-20 rounded-full bg-gradient-to-r ${profile.color} flex items-center justify-center mb-6`}>
                {React.cloneElement(profile.icon as React.ReactElement, { className: "h-8 w-8" })}
              </div>
              <CardTitle className="text-3xl font-heading mb-2">{profile.title}</CardTitle>
              <CardDescription className="text-lg leading-relaxed">
                {profile.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-xl font-heading mb-4 flex items-center gap-2">
                  <Star className="h-5 w-5 text-accent" />
                  Your AI Traits
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {profile.traits.map((trait, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="justify-center py-2 bg-secondary/60"
                    >
                      {trait}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-heading mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-accent" />
                  Recommended for You
                </h3>
                <ul className="space-y-2">
                  {profile.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  onClick={handleShare}
                  variant="outline"
                  className="flex-1 border-border/50"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Results
                </Button>
                <Button
                  onClick={() => window.location.reload()}
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Start Newsletter
                </Button>
              </div>

              <div className="bg-secondary/30 rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  ✨ <strong>Congratulations!</strong> You're now part of an exclusive community
                </p>
                <p className="text-xs text-muted-foreground">
                  Your first personalized AI newsletter arrives in your inbox within 24 hours
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Question {currentQuestion + 1} of {shuffledQuestions.length}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-heading leading-tight">
                  {shuffledQuestions[currentQuestion].question}
                </CardTitle>
                <CardDescription>
                  Choose the option that best describes you
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {shuffledQuestions[currentQuestion].options.map((option) => (
                  <motion.button
                    key={option.id}
                    onClick={() => handleAnswerSelect(option.value)}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 hover:scale-[1.02] ${
                      selectedOption === option.value
                        ? 'border-primary bg-primary/10 shadow-lg shadow-primary/25'
                        : 'border-border/50 hover:border-primary/50 bg-secondary/20 hover:bg-secondary/40'
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="font-medium mb-1">{option.text}</div>
                        {option.description && (
                          <div className="text-sm text-muted-foreground">
                            {option.description}
                          </div>
                        )}
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ml-3 ${
                        selectedOption === option.value
                          ? 'border-primary bg-primary'
                          : 'border-border'
                      }`}>
                        {selectedOption === option.value && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-primary-foreground rounded-full"
                          />
                        )}
                      </div>
                    </div>
                  </motion.button>
                ))}

                <div className="pt-4">
                  <Button
                    onClick={handleNext}
                    disabled={!selectedOption}
                    className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50"
                  >
                    {currentQuestion === shuffledQuestions.length - 1 ? (
                      <div className="flex items-center gap-2">
                        <Brain className="h-4 w-4" />
                        Generate My AI Profile
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        Next Question
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Quiz Info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            📊 Join 50,000+ professionals discovering their AI personality type
          </p>
        </div>
      </div>
    </div>
  );
};