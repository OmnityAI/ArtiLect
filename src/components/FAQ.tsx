"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { 
  HelpCircle, 
  Calendar, 
  BookOpen, 
  DollarSign, 
  UserX, 
  Users, 
  Shield, 
  FileText, 
  MessageSquare, 
  Clock 
} from 'lucide-react';

const faqData = [
  {
    id: 'what-is-artilect',
    question: 'What is Artilect Newsletter?',
    answer: 'Artilect is a premium AI intelligence newsletter that delivers cutting-edge insights, analysis, and trends in artificial intelligence. We curate the most important developments in AI research, industry applications, and emerging technologies to keep you ahead of the curve.',
    icon: HelpCircle,
  },
  {
    id: 'publishing-frequency',
    question: 'How often do you publish?',
    answer: 'We publish twice weekly - every Tuesday and Friday. Each issue is carefully crafted with deep analysis, expert commentary, and actionable insights that matter to AI professionals and enthusiasts.',
    icon: Calendar,
  },
  {
    id: 'topics-covered',
    question: 'What topics do you cover?',
    answer: 'Our content spans machine learning breakthroughs, industry applications, AI policy and ethics, startup funding, research papers analysis, tool reviews, and emerging trends. We focus on practical implications and real-world impact of AI developments.',
    icon: BookOpen,
  },
  {
    id: 'subscription-cost',
    question: 'Is it free to subscribe?',
    answer: 'Yes! Artilect Newsletter is completely free to subscribe. We believe in democratizing AI knowledge and making high-quality intelligence accessible to everyone in the AI community.',
    icon: DollarSign,
  },
  {
    id: 'unsubscribe-process',
    question: 'How do I unsubscribe?',
    answer: 'You can unsubscribe at any time by clicking the unsubscribe link at the bottom of any newsletter email, or by replying to any issue with "UNSUBSCRIBE" in the subject line. No questions asked, no hassle.',
    icon: UserX,
  },
  {
    id: 'content-authors',
    question: 'Who writes the content?',
    answer: 'Our content is authored by a team of AI researchers, industry veterans, and technology analysts with decades of combined experience. We also feature guest perspectives from leading AI practitioners and thought leaders.',
    icon: Users,
  },
  {
    id: 'privacy-policy',
    question: 'Do you share my email address?',
    answer: 'Absolutely not. We take privacy seriously and never share, sell, or distribute your email address or personal information. Your data is used solely to deliver the newsletter and improve our content.',
    icon: Shield,
  },
  {
    id: 'newsletter-format',
    question: 'What format is the newsletter?',
    answer: 'Each issue is delivered as a beautifully designed HTML email with clear sections, visual highlights, and easy-to-scan formatting. We also provide a web version for each issue that you can read in your browser or share with colleagues.',
    icon: FileText,
  },
  {
    id: 'topic-suggestions',
    question: 'Can I suggest topics or provide feedback?',
    answer: 'We love hearing from our community! You can reply to any newsletter issue with suggestions, feedback, or topic requests. We regularly incorporate subscriber input into our editorial planning.',
    icon: MessageSquare,
  },
  {
    id: 'article-length',
    question: 'How long are the articles?',
    answer: 'Each newsletter issue is designed for a 5-7 minute read, with bite-sized sections that respect your time. We focus on delivering maximum value efficiently, with links to deeper resources when you want to explore further.',
    icon: Clock,
  },
];

export const FAQSection = () => {
  return (
    <section className="py-20 px-4 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Artilect Newsletter and how we're building the future of AI intelligence.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq) => {
              const IconComponent = faq.icon;
              return (
                <AccordionItem 
                  key={faq.id} 
                  value={faq.id}
                  className="border border-border/50 rounded-lg bg-card/30 backdrop-blur-sm hover:border-primary/20 transition-colors duration-300"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-center gap-3 text-left">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="pl-11 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
          <h3 className="text-xl font-heading font-semibold mb-3">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-4">
            We're here to help. Reach out to our team anytime.
          </p>
          <a 
            href="mailto:info@artilectai.com" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors duration-300"
          >
            <MessageSquare className="w-4 h-4" />
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};