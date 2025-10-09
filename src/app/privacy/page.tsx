"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Shield, Mail, Calendar, FileText, Eye, Lock, Globe, Users, Clock, Phone } from "lucide-react";
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

  

  const tableOfContents = [
    { id: "introduction", title: "Introduction", icon: Shield },
    { id: "information-collection", title: "Information We Collect", icon: FileText },
    { id: "information-usage", title: "How We Use Your Information", icon: Eye },
    { id: "information-sharing", title: "Data Sharing & Disclosure", icon: Users },
    { id: "data-security", title: "Data Security", icon: Lock },
    { id: "data-retention", title: "Data Retention", icon: Clock },
    { id: "user-rights", title: "Your GDPR Rights", icon: Shield },
    { id: "cookies-tracking", title: "Cookies & Tracking", icon: Globe },
    { id: "children-privacy", title: "Children's Privacy", icon: Shield },
    { id: "international", title: "International Data Transfers", icon: Globe },
    { id: "policy-updates", title: "Changes to this Policy", icon: Calendar },
    { id: "contact", title: "Contact Us", icon: Phone }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
  <div className="container max-w-7xl mx-auto px-6 md:px-8 lg:px-[120px] pt-8">
        <nav className="flex items-center text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-foreground">Privacy Policy</span>
        </nav>
      </div>

  <div className="container max-w-7xl mx-auto px-6 md:px-8 lg:px-[120px] py-12">
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
                  This Privacy Policy (the “Policy”) explains how the individuals who manage the Artilect AI project (the
                  “Artilect AI Team,” “we,” “us,” or “our”) collect, use, and protect your information when you use our
                  Services, as defined in our Terms of Service. By using the Services, you agree to the collection and use of
                  information in accordance with this Policy and our Terms of Service. If you do not agree with this Policy,
                  you must not access the Services.
                </p>
                <div className="flex items-center text-sm text-muted-foreground mt-6">
                  <Clock className="h-4 w-4 mr-2" />
                  Last Updated: 9 October 2025
                </div>
              </div>
            </div>

            {/* 1. Introduction */}
            <section id="introduction" className="mb-12 scroll-mt-32">
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Shield className="h-6 w-6 text-primary mr-3" />
                    <h2 className="font-heading text-2xl font-semibold">1. Introduction</h2>
                  </div>
                  <p className="text-muted-foreground">
                    This Policy is a part of our Terms of Service. By using the Services, you agree to the collection and
                    use of information in accordance with this Policy and our Terms of Service.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Information We Collect */}
            <section id="information-collection" className="mb-12 scroll-mt-32">
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <FileText className="h-6 w-6 text-primary mr-3" />
                    <h2 className="font-heading text-2xl font-semibold">2. Information We Collect</h2>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-3">A. Personal Data You Provide Directly</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• <strong>Email Address:</strong> Collected when you subscribe to our newsletter, necessary to deliver content.</li>
                        <li>• <strong>Communications:</strong> If you contact us, we may retain your correspondence and contact information.</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-3">B. Data We Collect Automatically (Usage Data)</h3>
                      <p className="text-muted-foreground mb-2">We or our service providers may collect:</p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• IP address, browser type, operating system, and pages viewed</li>
                        <li>• Email engagement data such as open and click rates</li>
                      </ul>
                      <p className="text-muted-foreground mt-2">This data is used for analytics and to improve the Services.</p>
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
                    <h2 className="font-heading text-2xl font-semibold">3. How We Use Your Information</h2>
                  </div>
                  <div className="space-y-4">
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• To Provide and Maintain the Services (deliver newsletter, manage subscription, service announcements)</li>
                      <li>• To Improve the Services (analyze interactions and enhance quality and relevance)</li>
                      <li>• To Enforce Our Terms and Protect Our Rights</li>
                      <li>• To Comply with Legal Obligations</li>
                    </ul>
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
                    <h2 className="font-heading text-2xl font-semibold">4. Data Sharing and Disclosure</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    We do not sell, rent, or trade your personal information. We may share your information only in the
                    following limited circumstances:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>With Service Providers:</strong> Trusted third parties (e.g., email delivery, analytics) who are contractually obligated to protect your data and use it only to provide services to us.</li>
                    <li>• <strong>For Legal Reasons:</strong> To comply with law, protect safety, address fraud/security, or protect the rights and property of the Artilect AI Team.</li>
                    <li>• <strong>In a Business Transfer:</strong> If the Artilect AI project is sold, merged, or assets transferred, we will notify you before your information is transferred and becomes subject to a different privacy policy.</li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Data Storage & Security */}
            <section id="data-security" className="mb-12 scroll-mt-32">
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Lock className="h-6 w-6 text-primary mr-3" />
                    <h2 className="font-heading text-2xl font-semibold">5. Data Security</h2>
                  </div>
                  <p className="text-muted-foreground">
                    We take commercially reasonable administrative and technical measures to protect the information we
                    collect from loss, theft, and unauthorized access, disclosure, alteration, and destruction. However, no
                    method of transmission over the Internet or electronic storage is 100% secure; we cannot guarantee
                    absolute security.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Data Retention */}
            <section id="data-retention" className="mb-12 scroll-mt-32">
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Clock className="h-6 w-6 text-primary mr-3" />
                    <h2 className="font-heading text-2xl font-semibold">6. Data Retention</h2>
                  </div>
                  <p className="text-muted-foreground">
                    We retain your personal data for as long as necessary to provide the Services and fulfill the purposes
                    set out in this Policy. When you unsubscribe, we will delete your email address from active mailing lists
                    within a reasonable timeframe, subject to any legal obligations to retain the information.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Your Rights */}
            <section id="user-rights" className="mb-12 scroll-mt-32">
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Shield className="h-6 w-6 text-primary mr-3" />
                    <h2 className="font-heading text-2xl font-semibold">7. Your Data Protection Rights (Under GDPR)</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <ul className="space-y-2">
                      <li>• The Right to Access</li>
                      <li>• The Right to Rectification</li>
                      <li>• The Right to Erasure (Right to be Forgotten)</li>
                      <li>• The Right to Object to Processing</li>
                      <li>• The Right to Data Portability</li>
                    </ul>
                    <p>
                      To exercise any of these rights, please contact us at <span className="text-primary">info@artilectai.com</span>.
                    </p>
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
                    <h2 className="font-heading text-2xl font-semibold">8. Cookies and Tracking Technologies</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We use cookies on our website to help analyze traffic and improve your user experience. Our emails may
                      contain a tracking pixel to help measure engagement. You can typically control cookies through your
                      browser settings and disable image loading in your email client to prevent pixel tracking.
                    </p>
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
                    <h2 className="font-heading text-2xl font-semibold">9. Children's Privacy</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      The Services are not intended for or directed at individuals under the age of 16. We do not knowingly
                      collect personal information from children under 16. If we become aware that we have collected personal
                      data from a child under 16, we will take steps to delete that information.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* International Data Transfers */}
            <section id="children-privacy" className="mb-12 scroll-mt-32">
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Globe className="h-6 w-6 text-primary mr-3" />
                    <h2 className="font-heading text-2xl font-semibold">10. International Data Transfers</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Your information may be transferred to—and maintained on—computers located outside of your state,
                    province, country, or other governmental jurisdiction where the data protection laws may differ. If you
                    are in the EEA, your data may be transferred outside the EEA. We will ensure such transfers comply with
                    applicable law by relying on appropriate safeguards, such as Standard Contractual Clauses.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Policy Updates */}
            <section id="policy-updates" className="mb-12 scroll-mt-32">
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Calendar className="h-6 w-6 text-primary mr-3" />
                    <h2 className="font-heading text-2xl font-semibold">11. Changes to This Privacy Policy</h2>
                  </div>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                    new policy on this page and updating the “Last Updated” date. Your continued use of the Services after
                    any modification will constitute your acceptance of such modification.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Contact Information */}
            <section id="contact" className="mb-12 scroll-mt-32">
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Phone className="h-6 w-6 text-primary mr-3" />
                    <h2 className="font-heading text-2xl font-semibold">12. Contact Us</h2>
                  </div>
                  <p className="text-muted-foreground">
                    If you have any questions about this Privacy Policy, please contact us at: <span className="text-primary">info@artilectai.com</span>
                  </p>
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
                  Join thousands of professionals who trust Artilect Newsletter with their privacy. 
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

      {/* Global ScrollToTop is provided via RootLayout */}

      <Footer />
    </div>
  );
}