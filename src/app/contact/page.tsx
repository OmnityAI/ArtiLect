"use client";

import { useState } from 'react';
import { Mail, Send, Clock, Users, Shield, Headphones, Heart, MessageSquare, Phone, MapPin, Twitter, Linkedin, Github, ChevronRight, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

interface ContactMethod {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  email: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const contactMethods: ContactMethod[] = [
    {
      icon: Mail,
      title: 'General Inquiries',
      description: 'Questions about our newsletter, subscriptions, or general information',
      email: 'hello@artilect.com'
    },
    {
      icon: Users,
      title: 'Editorial Team',
      description: 'Story submissions, content suggestions, or editorial feedback',
      email: 'editorial@artilect.com'
    },
    {
      icon: Shield,
      title: 'Privacy Questions',
      description: 'Data protection, privacy policy, or GDPR-related inquiries',
      email: 'privacy@artilect.com'
    },
    {
      icon: Headphones,
      title: 'Technical Support',
      description: 'Website issues, subscription problems, or technical assistance',
      email: 'support@artilect.com'
    },
    {
      icon: Heart,
      title: 'Partnership Opportunities',
      description: 'Sponsorships, collaborations, or business partnerships',
      email: 'partnerships@artilect.com'
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: 'How often do you publish?',
      answer: 'We publish new issues every Tuesday and Friday, delivering the latest AI insights twice weekly.'
    },
    {
      question: 'Is ArtiLect Newsletter free?',
      answer: 'Yes! Our core newsletter is completely free. We also offer premium content for subscribers who want deeper analysis.'
    },
    {
      question: 'How do I unsubscribe?',
      answer: 'You can unsubscribe at any time using the link at the bottom of any newsletter email.'
    },
    {
      question: 'Can I suggest topics or stories?',
      answer: 'Absolutely! We love hearing from our community. Send your suggestions to editorial@artilect.com.'
    },
    {
      question: 'Do you accept guest contributions?',
      answer: 'We occasionally feature guest experts. Reach out to our editorial team with your proposal and credentials.'
    },
    {
      question: 'How can I advertise with ArtiLect?',
      answer: 'For advertising and sponsorship opportunities, contact partnerships@artilect.com with your requirements.'
    }
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error) {
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="font-heading text-xl font-bold">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                ArtiLect
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <a href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="/archive" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Archive
              </a>
              <a href="/contact" className="text-sm font-medium text-foreground">
                Contact
              </a>
            </nav>
          </div>
          <Button size="sm" className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
            Subscribe
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <div className="container relative max-w-4xl text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-8">
              <Home className="h-4 w-4" />
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Contact</span>
            </div>

            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a question, suggestion, or just want to say hello? We'd love to hear from you. 
              Our team is here to help and typically responds within 24 hours.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 px-4">
          <div className="container max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-muted-foreground">Choose the best way to reach our team</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:shadow-primary/10 hover:border-primary/20">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{method.title}</CardTitle>
                      </div>
                      <CardDescription>{method.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <a 
                        href={`mailto:${method.email}`}
                        className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        <span className="font-medium">{method.email}</span>
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-muted-foreground">Fill out the form below and we'll get back to you as soon as possible</p>
            </div>

            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        className={errors.name ? 'border-destructive' : ''}
                      />
                      {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        className={errors.email ? 'border-destructive' : ''}
                      />
                      {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="What's this about?"
                      className={errors.subject ? 'border-destructive' : ''}
                    />
                    {errors.subject && <p className="text-sm text-destructive">{errors.subject}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      className={errors.message ? 'border-destructive' : ''}
                    />
                    {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="h-4 w-4" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold mb-4">Quick Answers</h2>
              <p className="text-muted-foreground">Find answers to commonly asked questions</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <Card key={index} className="h-fit">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3 text-primary">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Response Times */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold mb-4">What to Expect</h2>
              <p className="text-muted-foreground">Information about our response times and process</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Response Time</h3>
                  <p className="text-muted-foreground">We typically respond within 24 hours during business days</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="p-3 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                    <MessageSquare className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Follow Up</h3>
                  <p className="text-muted-foreground">Complex inquiries may require additional time for thorough research</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Media Links */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl text-center">
            <h2 className="font-heading text-3xl font-bold mb-4">Connect With Us</h2>
            <p className="text-muted-foreground mb-8">
              Follow us on social media for updates, behind-the-scenes content, and community discussions
            </p>

            <div className="flex justify-center space-x-6">
              <a 
                href="https://twitter.com/artilect" 
                className="p-4 rounded-full bg-card hover:bg-primary/10 transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://linkedin.com/company/artilect" 
                className="p-4 rounded-full bg-card hover:bg-primary/10 transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://github.com/artilect" 
                className="p-4 rounded-full bg-card hover:bg-primary/10 transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="font-heading text-xl font-bold">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  ArtiLect
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Delivering AI insights that matter, twice weekly.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/subscribe" className="hover:text-foreground transition-colors">Subscribe</a></li>
                <li><a href="/archive" className="hover:text-foreground transition-colors">Archive</a></li>
                <li><a href="/topics" className="hover:text-foreground transition-colors">Topics</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/about" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="/careers" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="/press" className="hover:text-foreground transition-colors">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="/contact" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 ArtiLect Newsletter. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/artilect" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/artilect" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/artilect" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}