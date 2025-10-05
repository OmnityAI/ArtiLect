"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp, ChevronRight, Shield, Mail, FileText, Users, Eye, AlertTriangle, Scale, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  { id: "acceptance", title: "Acceptance of Terms", icon: Shield },
  { id: "service", title: "Description of Service", icon: Mail },
  { id: "accounts", title: "User Accounts and Registration", icon: Users },
  { id: "subscription", title: "Subscription Terms", icon: FileText },
  { id: "content", title: "Content and Intellectual Property", icon: Eye },
  { id: "conduct", title: "User Conduct and Responsibilities", icon: AlertTriangle },
  { id: "privacy", title: "Privacy and Data Protection", icon: Shield },
  { id: "disclaimer", title: "Disclaimer and Limitation of Liability", icon: Scale },
  { id: "termination", title: "Termination", icon: AlertTriangle },
  { id: "modifications", title: "Modifications to Terms", icon: FileText },
  { id: "governing", title: "Governing Law", icon: Scale },
  { id: "contact", title: "Contact Information", icon: Phone }
];

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState("acceptance");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      // Update active section based on scroll position
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      const currentSection = sectionElements.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="border-b border-secondary/30">
  <div className="container mx-auto px-4 sm:px-8 lg:px-[120px] py-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Terms of Service</span>
          </nav>
        </div>
      </div>

  <div className="container mx-auto px-4 sm:px-8 lg:px-[120px] py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents - Sidebar */}
          <aside className="lg:w-64 lg:shrink-0">
            <div className="sticky top-24">
              <Card className="bg-card/50 backdrop-blur">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-heading">Table of Contents</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full flex items-center space-x-3 px-3 py-2 text-left text-sm rounded-lg transition-colors ${
                          activeSection === section.id
                            ? "bg-primary/10 text-primary border border-primary/20"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                        }`}
                      >
                        <Icon className="h-4 w-4 shrink-0" />
                        <span className="truncate">{section.title}</span>
                      </button>
                    );
                  })}
                </CardContent>
              </Card>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-none">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Terms of Service
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Please read these Terms of Service carefully before using the Artilect Newsletter service. 
                By subscribing to or using our service, you agree to be bound by these terms.
              </p>
              <div className="mt-4 text-sm text-muted-foreground">
                <span>Last updated: October 2025</span>
              </div>
            </div>

            {/* Terms Sections */}
            <div className="space-y-12">
              {/* Acceptance of Terms */}
              <section id="acceptance" className="scroll-mt-24">
                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-2xl font-heading">
                      <Shield className="h-6 w-6 text-primary" />
                      <span>1. Acceptance of Terms</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      By accessing, subscribing to, or using the Artilect Newsletter service ("Service"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service ("Terms") and our Privacy Policy.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      If you do not agree to these Terms, you may not access or use our Service. These Terms constitute a legally binding agreement between you and Artilect.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      You must be at least 13 years old to use our Service. By using our Service, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Description of Service */}
              <section id="service" className="scroll-mt-24">
                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-2xl font-heading">
                      <Mail className="h-6 w-6 text-primary" />
                      <span>2. Description of Service</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Artilect Newsletter is a digital publication service that delivers curated content about artificial intelligence, technology trends, and related topics directly to subscribers' email addresses.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Our Service includes:
                    </p>
                    <ul className="text-muted-foreground space-y-2 mb-4 ml-6">
                      <li>• Weekly or bi-weekly newsletter emails</li>
                      <li>• Curated AI and technology news and insights</li>
                      <li>• Analysis and commentary on industry developments</li>
                      <li>• Access to archived newsletter content</li>
                      <li>• Subscriber-only resources and tools</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">
                      We reserve the right to modify, suspend, or discontinue any part of our Service at any time, with or without notice. We may also impose limits on certain features or restrict access to parts or all of the Service without notice or liability.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Content and Intellectual Property */}
              <section id="content" className="scroll-mt-24">
                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-2xl font-heading">
                      <Eye className="h-6 w-6 text-primary" />
                      <span>5. Content and Intellectual Property</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-invert max-w-none">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3">Our Content</h4>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        All content provided through the Artilect Newsletter, including but not limited to text, graphics, logos, images, and software, is the property of Artilect or its content suppliers and is protected by copyright, trademark, and other intellectual property laws.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3">License to Use</h4>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        We grant you a limited, non-exclusive, non-transferable license to access and use our content for personal, non-commercial purposes. You may not:
                      </p>
                      <ul className="text-muted-foreground space-y-2 mb-4 ml-6">
                        <li>• Reproduce, distribute, or publicly display our content without permission</li>
                        <li>• Use our content for commercial purposes</li>
                        <li>• Modify or create derivative works from our content</li>
                        <li>• Remove or alter any copyright, trademark, or other proprietary notices</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Third-Party Content</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Our newsletter may include links to or excerpts from third-party websites and content. We do not own or control such content and are not responsible for its accuracy, completeness, or availability.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* User Conduct and Responsibilities */}
              <section id="conduct" className="scroll-mt-24">
                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-2xl font-heading">
                      <AlertTriangle className="h-6 w-6 text-primary" />
                      <span>6. User Conduct and Responsibilities</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      When using our Service, you agree to comply with all applicable laws and regulations and to respect the rights of others. You must not:
                    </p>
                    <ul className="text-muted-foreground space-y-2 mb-6 ml-6">
                      <li>• Use the Service for any illegal or unauthorized purpose</li>
                      <li>• Violate any laws in your jurisdiction</li>
                      <li>• Transmit any harmful or malicious code</li>
                      <li>• Attempt to gain unauthorized access to our systems</li>
                      <li>• Interfere with or disrupt the Service or servers</li>
                      <li>• Use automated means to access the Service without permission</li>
                      <li>• Impersonate any person or entity</li>
                      <li>• Harass, abuse, or harm other users</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">
                      We reserve the right to investigate and take appropriate legal action against anyone who violates these provisions, including terminating their access to the Service.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Privacy and Data Protection */}
              <section id="privacy" className="scroll-mt-24">
                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-2xl font-heading">
                      <Shield className="h-6 w-6 text-primary" />
                      <span>7. Privacy and Data Protection</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      By using our Service, you consent to:
                    </p>
                    <ul className="text-muted-foreground space-y-2 mb-4 ml-6">
                      <li>• The collection and use of your information as described in our Privacy Policy</li>
                      <li>• Receiving newsletter emails at the address you provide</li>
                      <li>• Our use of cookies and similar technologies</li>
                      <li>• Processing of your data in accordance with applicable privacy laws</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">
                      We implement appropriate security measures to protect your personal information, but cannot guarantee absolute security of data transmitted over the internet.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Disclaimer and Limitation of Liability */}
              <section id="disclaimer" className="scroll-mt-24">
                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-2xl font-heading">
                      <Scale className="h-6 w-6 text-primary" />
                      <span>8. Disclaimer and Limitation of Liability</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-invert max-w-none">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3">Disclaimer of Warranties</h4>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        We do not warrant that:
                      </p>
                      <ul className="text-muted-foreground space-y-2 mb-4 ml-6">
                        <li>• The Service will be uninterrupted or error-free</li>
                        <li>• The information provided is accurate or complete</li>
                        <li>• Any defects will be corrected</li>
                        <li>• The Service is free of viruses or harmful components</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Limitation of Liability</h4>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, ARTILECT SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICE.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE AMOUNT PAID BY YOU FOR THE SERVICE IN THE TWELVE MONTHS PRECEDING THE CLAIM.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Termination */}
              <section id="termination" className="scroll-mt-24">
                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-2xl font-heading">
                      <AlertTriangle className="h-6 w-6 text-primary" />
                      <span>9. Termination</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      These Terms remain in effect until terminated by either you or Artilect. You may terminate these Terms at any time by unsubscribing from our newsletter and ceasing use of our Service.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including but not limited to:
                    </p>
                    <ul className="text-muted-foreground space-y-2 mb-4 ml-6">
                      <li>• Breach of these Terms</li>
                      <li>• Fraudulent or abusive behavior</li>
                      <li>• Request by law enforcement or other government agencies</li>
                      <li>• Technical or security issues</li>
                      <li>• Extended periods of inactivity</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">
                      Upon termination, your right to use the Service ceases immediately. Provisions that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Modifications to Terms */}
              <section id="modifications" className="scroll-mt-24">
                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-2xl font-heading">
                      <FileText className="h-6 w-6 text-primary" />
                      <span>10. Modifications to Terms</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We reserve the right to modify these Terms at any time. When we make changes, we will:
                    </p>
                    <ul className="text-muted-foreground space-y-2 mb-4 ml-6">
                      <li>• Update the "Last modified" date at the top of these Terms</li>
                      <li>• Notify subscribers via email of material changes</li>
                      <li>• Post the updated Terms on our website</li>
                      <li>• Provide at least 30 days notice for significant changes</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Your continued use of the Service after any modifications constitutes acceptance of the updated Terms. If you do not agree to the modified Terms, you should discontinue your use of the Service.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      We encourage you to review these Terms periodically to stay informed of any updates.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Governing Law */}
              <section id="governing" className="scroll-mt-24">
                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-2xl font-heading">
                      <Scale className="h-6 w-6 text-primary" />
                      <span>11. Governing Law</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      These Terms and your use of the Service are governed by and construed in accordance with the laws of the jurisdiction in which Artilect operates, without regard to conflict of law principles.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Any disputes arising from these Terms or your use of the Service shall be resolved through:
                    </p>
                    <ul className="text-muted-foreground space-y-2 mb-4 ml-6">
                      <li>• Good faith negotiations between the parties</li>
                      <li>• Binding arbitration if negotiations fail</li>
                      <li>• Courts of competent jurisdiction as a last resort</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">
                      You agree to waive any right to a jury trial and to participate in class action lawsuits related to these Terms or the Service.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Contact Information */}
              <section id="contact" className="scroll-mt-24">
                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-2xl font-heading">
                      <Phone className="h-6 w-6 text-primary" />
                      <span>12. Contact Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      If you have any questions about these Terms of Service, please contact us:
                    </p>
                    <div className="bg-secondary/30 rounded-lg p-6 mb-4">
                      <div className="space-y-3">
                        <div>
                          <span className="font-semibold text-foreground">Legal:</span>
                          <span className="ml-2 text-primary">info@artilectai.com</span>
                        </div>
                        <div>
                          <span className="font-semibold text-foreground">Support:</span>
                          <span className="ml-2 text-primary">info@artilectai.com</span>
                        </div>
                        <div>
                          <span className="font-semibold text-foreground">Website:</span>
                          <span className="ml-2 text-primary">www.artilectai.com</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      We will respond to your inquiries within 48 hours during business days. For urgent matters, please mark your email as "URGENT" in the subject line.
                    </p>
                  </CardContent>
                </Card>
              </section>
            </div>

            {/* Newsletter CTA */}
            <div className="mt-16 mb-12">
              <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="text-center py-12">
                  <h3 className="text-2xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Ready to Join Artilect?
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                    By subscribing, you agree to these Terms of Service and our Privacy Policy. 
                    Get the latest AI insights delivered to your inbox.
                  </p>
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                  >
                    <Link href="/#subscribe">Subscribe Now</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>

      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 z-40 h-12 w-12 rounded-full bg-primary/90 hover:bg-primary shadow-lg backdrop-blur"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}