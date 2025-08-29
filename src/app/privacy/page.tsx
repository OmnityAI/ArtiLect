"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Shield, Mail, Calendar, FileText, Eye, Lock, Globe, Users, Clock, Phone, ArrowUp } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute("id") || "";
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const tableOfContents = [
    { id: "information-collection", title: "Information We Collect", icon: FileText },
    { id: "information-usage", title: "How We Use Information", icon: Eye },
    { id: "information-sharing", title: "Information Sharing", icon: Users },
    { id: "data-security", title: "Data Storage & Security", icon: Lock },
    { id: "user-rights", title: "Your Rights", icon: Shield },
    { id: "cookies-tracking", title: "Cookies & Tracking", icon: Globe },
    { id: "third-party", title: "Third-Party Services", icon: Users },
    { id: "international", title: "International Users", icon: Globe },
    { id: "children-privacy", title: "Children's Privacy", icon: Shield },
    { id: "policy-updates", title: "Policy Updates", icon: Calendar },
    { id: "contact", title: "Contact Information", icon: Phone }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-accent" />
              <span className="font-heading font-bold text-xl">ArtiLect</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/topics" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Topics
              </Link>
              <Link href="/archive" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Archive
              </Link>
              <Button size="sm" className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
                Subscribe
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="container max-w-7xl mx-auto px-6 pt-8">
        <nav className="flex items-center text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-foreground">Privacy Policy</span>
        </nav>
      </div>

      <div className="container max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Table of Contents - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-4">Table of Contents</h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`w-full flex items-center text-left p-2 rounded-md text-sm transition-colors ${
                            activeSection === item.id
                              ? "bg-primary/20 text-primary"
                              : "hover:bg-muted text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <Icon className="h-4 w-4 mr-2 shrink-0" />
                          <span className="truncate">{item.title}</span>
                        </button>
                      );
                    })}
                  </nav>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Header Section */}
            <div className="mb-12">
              <Badge variant="secondary" className="mb-4">
                <Shield className="h-3 w-3 mr-1" />
                Privacy Policy
              </Badge>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <div className="prose prose-neutral prose-invert max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  At ArtiLect Newsletter, we respect your privacy and are committed to protecting your personal information. 
                  This Privacy Policy explains how we collect, use, and safeguard your data when you subscribe to our newsletter 
                  and use our services.
                </p>
                <div className="flex items-center text-sm text-muted-foreground mt-6">
                  <Clock className="h-4 w-4 mr-2" />
                  Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </div>
              </div>
            </div>

            {/* Information We Collect */}
            <section id="information-collection" className="mb-12 scroll-mt-32">
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <FileText className="h-6 w-6 text-primary mr-3" />
                    <h2 className="font-heading text-2xl font-semibold">Information We Collect</h2>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Personal Information</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• <strong>Email Address:</strong> Required for newsletter delivery and account management</li>
                        <li>• <strong>Name:</strong> Optional, used for personalization when provided</li>
                        <li>• <strong>Subscription Preferences:</strong> Topic interests and frequency settings</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Automatically Collected Data</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• <strong>Email Engagement:</strong> Open rates, click-through rates, and reading time</li>
                        <li>• <strong>Device Information:</strong> Device type, operating system, and email client</li>
                        <li>• <strong>Usage Analytics:</strong> Website visits, page views, and interaction patterns</li>
                        <li>• <strong>IP Address:</strong> For security and geographic analytics</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* How We Use Information */}
            <section id="information-usage" className="mb-12 scroll-mt-32">
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Eye className="h-6 w-6 text-primary mr-3" />
                    <h2 className="font-heading text-2xl font-semibold">How We Use Information</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">Primary Uses</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Deliver newsletter content to your inbox</li>
                        <li>• Personalize content based on your interests</li>
                        <li>• Manage your subscription and preferences</li>
                        <li>• Send important service announcements</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">Analytics & Improvement</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Analyze content performance and engagement</li>
                        <li>• Improve newsletter quality and relevance</li>
                        <li>• Understand subscriber demographics and preferences</li>
                        <li>• Optimize delivery timing and frequency</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Information Sharing */}
            <section id="information-sharing" className="mb-12 scroll-mt-32">
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Users className="h-6 w-6 text-primary mr-3" />
                    <h2 className="font-heading text-2xl font-semibold">Information Sharing</h2>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 mb-6">
                    <p className="text-green-400 font-semibold mb-2">Our Commitment to You</p>
                    <p className="text-muted-foreground">
                      We <strong>never sell, rent, or trade</strong> your personal information to third parties. 
                      Your data remains private and is only used to provide you with the best newsletter experience.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Limited Sharing Scenarios</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• <strong>Service Providers:</strong> Trusted partners who help deliver our newsletter (email service providers)</li>
                      <li>• <strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                      <li>• <strong>Business Transfers:</strong> In the unlikely event of a merger or acquisition</li>
                      <li>• <strong>Anonymized Data:</strong> Aggregated, non-personally identifiable statistics for research</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Data Storage & Security */}
            <section id="data-security" className="mb-12 scroll-mt-32">
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Lock className="h-6 w-6 text-primary mr-3" />
                    <h2 className="font-heading text-2xl font-semibold">Data Storage & Security</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Security Measures</h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                          <span className="text-muted-foreground">End-to-end encryption for data transmission</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                          <span className="text-muted-foreground">Secure, SOC 2 compliant data centers</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                          <span className="text-muted-foreground">Regular security audits and updates</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                          <span className="text-muted-foreground">Access controls and authentication</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Data Retention</h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <div className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
                          <span className="text-muted-foreground">Active subscriber data: Retained while subscribed</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
                          <span className="text-muted-foreground">Unsubscribed data: Deleted within 30 days</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
                          <span className="text-muted-foreground">Analytics data: Anonymized after 24 months</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
                          <span className="text-muted-foreground">Legal requirements: As required by law</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Your Rights */}
            <section id="user-rights" className="mb-12 scroll-mt-32">
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Shield className="h-6 w-6 text-primary mr-3" />
                    <h2 className="font-heading text-2xl font-semibold">Your Rights</h2>
                  </div>
                  <div className="grid gap-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="bg-muted/50 border-border/50">
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-lg mb-3 flex items-center">
                            <Mail className="h-5 w-5 mr-2 text-primary" />
                            Unsubscribe
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Easy one-click unsubscribe in every email or manage preferences in your account dashboard.
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="bg-muted/50 border-border/50">
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-lg mb-3 flex items-center">
                            <Eye className="h-5 w-5 mr-2 text-primary" />
                            Access Your Data
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Request a copy of all personal information we have about you in a portable format.
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="bg-muted/50 border-border/50">
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-lg mb-3 flex items-center">
                            <FileText className="h-5 w-5 mr-2 text-primary" />
                            Update Information
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Correct or update your personal information and subscription preferences at any time.
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="bg-muted/50 border-border/50">
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-lg mb-3 flex items-center">
                            <Lock className="h-5 w-5 mr-2 text-primary" />
                            Delete Your Data
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Request complete deletion of your personal information from our systems.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Cookies & Tracking */}
            <section id="cookies-tracking" className="mb-12 scroll-mt-32">
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Globe className="h-6 w-6 text-primary mr-3" />
                    <h2 className="font-heading text-2xl font-semibold">Cookies & Tracking</h2>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Website Cookies</h3>
                      <p className="text-muted-foreground mb-4">
                        We use cookies to improve your browsing experience and analyze website performance. 
                        You can control cookie settings in your browser preferences.
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-muted/30 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Essential</h4>
                          <p className="text-sm text-muted-foreground">Required for basic site functionality</p>
                        </div>
                        <div className="bg-muted/30 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Analytics</h4>
                          <p className="text-sm text-muted-foreground">Help us understand site usage</p>
                        </div>
                        <div className="bg-muted/30 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Preferences</h4>
                          <p className="text-sm text-muted-foreground">Remember your settings</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Email Tracking</h3>
                      <p className="text-muted-foreground">
                        Our newsletters include tracking pixels to measure open rates and engagement. 
                        This helps us improve content quality and delivery timing. You can disable image loading 
                        in your email client to opt out of this tracking.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Third-Party Services */}
            <section id="third-party" className="mb-12 scroll-mt-32">
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Users className="h-6 w-6 text-primary mr-3" />
                    <h2 className="font-heading text-2xl font-semibold">Third-Party Services</h2>
                  </div>
                  <div className="space-y-6">
                    <p className="text-muted-foreground">
                      We work with trusted service providers to deliver our newsletter and analyze performance. 
                      These partners are bound by strict data protection agreements and can only use your data 
                      for the specific services they provide to us.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Email Service Provider</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Newsletter delivery and management</li>
                          <li>• Subscription and preference handling</li>
                          <li>• Basic engagement analytics</li>
                          <li>• Spam protection and deliverability</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Analytics Services</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Website traffic and user behavior</li>
                          <li>• Performance monitoring</li>
                          <li>• Error tracking and debugging</li>
                          <li>• Conversion and engagement metrics</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* International Users */}
            <section id="international" className="mb-12 scroll-mt-32">
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Globe className="h-6 w-6 text-primary mr-3" />
                    <h2 className="font-heading text-2xl font-semibold">International Users</h2>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">GDPR Compliance</h3>
                      <p className="text-muted-foreground">
                        For users in the European Union, we comply with the General Data Protection Regulation (GDPR). 
                        You have enhanced rights including data portability, the right to be forgotten, 
                        and explicit consent requirements.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Data Transfers</h3>
                      <p className="text-muted-foreground mb-4">
                        Your data may be processed and stored in countries outside your home country. 
                        We ensure appropriate safeguards are in place, including:
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Adequacy decisions from relevant authorities</li>
                        <li>• Standard contractual clauses</li>
                        <li>• Appropriate technical and organizational measures</li>
                        <li>• Regular compliance assessments</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Children's Privacy */}
            <section id="children-privacy" className="mb-12 scroll-mt-32">
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Shield className="h-6 w-6 text-primary mr-3" />
                    <h2 className="font-heading text-2xl font-semibold">Children's Privacy</h2>
                  </div>
                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6">
                    <p className="text-muted-foreground">
                      ArtiLect Newsletter is not intended for children under the age of 13. We do not knowingly 
                      collect personal information from children under 13. If you are a parent or guardian and 
                      believe your child has provided us with personal information, please contact us immediately, 
                      and we will delete such information from our systems.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Policy Updates */}
            <section id="policy-updates" className="mb-12 scroll-mt-32">
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Calendar className="h-6 w-6 text-primary mr-3" />
                    <h2 className="font-heading text-2xl font-semibold">Policy Updates</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      We may update this Privacy Policy from time to time to reflect changes in our practices, 
                      technology, legal requirements, or other factors. When we make changes, we will:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Update the "Last updated" date at the top of this policy</li>
                      <li>• Notify subscribers via email for significant changes</li>
                      <li>• Provide a summary of changes in our next newsletter</li>
                      <li>• Post announcements on our website and social media</li>
                    </ul>
                    <p className="text-muted-foreground">
                      Continued use of our services after updates constitutes acceptance of the revised policy.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Contact Information */}
            <section id="contact" className="mb-12 scroll-mt-32">
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Phone className="h-6 w-6 text-primary mr-3" />
                    <h2 className="font-heading text-2xl font-semibold">Contact Information</h2>
                  </div>
                  <div className="space-y-6">
                    <p className="text-muted-foreground">
                      If you have any questions about this Privacy Policy or our data practices, 
                      please don't hesitate to contact us:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="bg-muted/50 border-border/50">
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-lg mb-4">Privacy Questions</h3>
                          <div className="space-y-3">
                            <div className="flex items-center">
                              <Mail className="h-4 w-4 text-primary mr-3" />
                              <span className="text-muted-foreground">privacy@artilect.com</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 text-primary mr-3" />
                              <span className="text-muted-foreground">Response within 48 hours</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-muted/50 border-border/50">
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-lg mb-4">Data Protection Officer</h3>
                          <div className="space-y-3">
                            <div className="flex items-center">
                              <Mail className="h-4 w-4 text-primary mr-3" />
                              <span className="text-muted-foreground">dpo@artilect.com</span>
                            </div>
                            <div className="flex items-center">
                              <Shield className="h-4 w-4 text-primary mr-3" />
                              <span className="text-muted-foreground">GDPR & compliance matters</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Newsletter CTA */}
            <Card className="border-border/50 bg-gradient-to-r from-primary/10 to-accent/10">
              <CardContent className="p-8 text-center">
                <h2 className="font-heading text-2xl font-semibold mb-4">
                  Ready to Stay Informed?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Join thousands of professionals who trust ArtiLect Newsletter with their privacy. 
                  Get cutting-edge AI insights delivered to your inbox with complete data protection.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
                  Subscribe Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card">
        <div className="container max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-accent" />
                <span className="font-heading font-bold text-xl">ArtiLect</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Cutting-edge AI insights delivered to your inbox. Stay ahead with the latest in artificial intelligence.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Newsletter</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-muted-foreground hover:text-foreground text-sm transition-colors">About</Link></li>
                <li><Link href="/archive" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Archive</Link></li>
                <li><Link href="/topics" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Topics</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-primary hover:text-primary/80 text-sm transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Terms of Service</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Twitter</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/40 mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} ArtiLect Newsletter. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}