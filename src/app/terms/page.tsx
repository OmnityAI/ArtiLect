"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, Shield, Mail, FileText, AlertTriangle, Scale, Phone, Link as LinkIcon, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  { id: "introduction", title: "Introduction & Agreement", icon: Shield },
  { id: "nature", title: "Nature of Services & Advice", icon: AlertTriangle },
  { id: "ipr", title: "Intellectual Property Rights", icon: FileText },
  { id: "permitted", title: "Permitted Use & Prohibitions", icon: Scale },
  { id: "ugc", title: "User-Generated Content", icon: PenTool },
  { id: "thirdparty", title: "Third-Party Links & Content", icon: LinkIcon },
  { id: "disclaimer", title: "Disclaimer of Warranties", icon: AlertTriangle },
  { id: "liability", title: "Limitation of Liability", icon: Scale },
  { id: "indemnification", title: "Indemnification", icon: Shield },
  { id: "governing", title: "Governing Law & Jurisdiction", icon: Scale },
  { id: "termination", title: "Termination", icon: AlertTriangle },
  { id: "misc", title: "Miscellaneous", icon: FileText },
  { id: "contact", title: "Contact Information", icon: Phone }
];

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState("introduction");
  

  useEffect(() => {
    const handleScroll = () => {
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
                Please read these Terms of Service carefully. They are a binding legal agreement governing your
                access to and use of artilectai.com and associated social media channels (the "Services").
              </p>
              <div className="mt-4 text-sm text-muted-foreground">
                <span>Last Updated: 9 October 2025</span>
              </div>
            </div>

            {/* Terms Sections */}
            <div className="space-y-12">
              {/* 1. Introduction and Agreement to Terms */}
              <section id="introduction" className="scroll-mt-24">
                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-2xl font-heading">
                      <Shield className="h-6 w-6 text-primary" />
                      <span>1. Introduction and Agreement to Terms</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Welcome to Artilect AI. These Terms of Service (the "Terms") govern your access to and use of the
                      content, services, and features provided through our website artilectai.com and our associated
                      social media channels (collectively, the "Services").
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The Services are operated by the individuals who manage and contribute to the Artilect AI project
                      (the "Artilect AI Team," "we," "us," or "our"). Artilect AI is an independent, unincorporated project
                      and is not a registered legal entity.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      BY ACCESSING, READING, OR OTHERWISE USING THE SERVICES, YOU AGREE TO BE LEGALLY BOUND BY THESE TERMS.
                      IF YOU DO NOT AGREE TO ALL OF THESE TERMS, YOU ARE PROHIBITED FROM USING THE SERVICES AND MUST
                      DISCONTINUE USE IMMEDIATELY.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* 2. Nature of the Services & Disclaimer of Professional Advice */}
              <section id="nature" className="scroll-mt-24">
                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-2xl font-heading">
                      <AlertTriangle className="h-6 w-6 text-primary" />
                      <span>2. Nature of the Services & Disclaimer of Professional Advice</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The Services provide commentary, analysis, news, and educational materials related to artificial
                      intelligence for informational purposes only.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      THE CONTENT PROVIDED THROUGH THE SERVICES DOES NOT CONSTITUTE FINANCIAL, INVESTMENT, LEGAL,
                      TECHNICAL, MEDICAL, OR ANY OTHER FORM OF PROFESSIONAL ADVICE.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      You are solely responsible for any decisions or actions you take based on information obtained from
                      the Services. Always conduct your own independent research and consult with a qualified professional
                      before making any significant decisions. We are not fiduciaries, and no fiduciary relationship is
                      created by your use of the Services.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* 3. Intellectual Property Rights */}
              <section id="ipr" className="scroll-mt-24">
                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-2xl font-heading">
                      <FileText className="h-6 w-6 text-primary" />
                      <span>3. Intellectual Property Rights</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Unless otherwise indicated, the Services and all content created and published by the Artilect AI
                      Team—including text, graphics, logos, and code (collectively, "Our Content")—are the property of the
                      members of the Artilect AI Team and are protected by copyright and other intellectual property laws.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      We grant you a limited, non-exclusive, non-transferable, revocable license to access Our Content for
                      your personal, non-commercial use only, subject to the sharing and attribution rules outlined below.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* 4. Permitted Use and Prohibited Conduct */}
              <section id="permitted" className="scroll-mt-24">
                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-2xl font-heading">
                      <Scale className="h-6 w-6 text-primary" />
                      <span>4. Permitted Use and Prohibited Conduct</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      You agree to use the Services lawfully. You are expressly prohibited from:
                    </p>
                    <ul className="text-muted-foreground space-y-2 mb-6 ml-6">
                      <li>• Systematic scraping, data mining, or extraction of Our Content.</li>
                      <li>• Republishing substantial portions of Our Content without our express prior written permission.</li>
                      <li>• Using the Services for any commercial purpose without obtaining a license.</li>
                      <li>• Attempting to interfere with, disrupt, or bypass any security measures of the Services.</li>
                      <li>• Transmitting any malware, spam, or unlawful, defamatory, or infringing material.</li>
                      <li>• Impersonating any person or entity.</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">
                      Violation of these terms may result in the immediate and permanent suspension of your access to the
                      Services, at our sole discretion.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* 5. User-Generated Content and Submissions */}
              <section id="ugc" className="scroll-mt-24">
                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-2xl font-heading">
                      <PenTool className="h-6 w-6 text-primary" />
                      <span>5. User-Generated Content and Submissions</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Should you submit any ideas, feedback, comments, or other materials ("Submissions") to us, you agree
                      to the following:
                    </p>
                    <ul className="text-muted-foreground space-y-2 mb-6 ml-6">
                      <li>
                        • You grant the Artilect AI Team a perpetual, worldwide, non-exclusive, royalty-free, irrevocable
                        license to use, reproduce, modify, adapt, publish, and display such Submissions in connection with
                        the Services, without any obligation of compensation or attribution to you.
                      </li>
                      <li>
                        • You warrant that you have the right to grant this license and that your Submissions do not
                        infringe upon the rights of any third party.
                      </li>
                      <li>• You acknowledge that we have no obligation to keep any Submissions confidential.</li>
                    </ul>
                  </CardContent>
                </Card>
              </section>

              {/* 6. Third-Party Links and Content */}
              <section id="thirdparty" className="scroll-mt-24">
                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-2xl font-heading">
                      <LinkIcon className="h-6 w-6 text-primary" />
                      <span>6. Third-Party Links and Content</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed">
                      The Services may contain links to third-party websites, tools, or resources. Such links are provided
                      for convenience only. We do not endorse, control, or assume any responsibility for the content,
                      privacy policies, or practices of any third-party sites or services. You access and use them entirely
                      at your own risk.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* 7. DISCLAIMER OF ALL WARRANTIES */}
              <section id="disclaimer" className="scroll-mt-24">
                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-2xl font-heading">
                      <AlertTriangle className="h-6 w-6 text-primary" />
                      <span>7. DISCLAIMER OF ALL WARRANTIES</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed">
                      THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. TO THE FULLEST EXTENT PERMITTED BY
                      APPLICABLE LAW, THE ARTILECT AI TEAM EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR
                      IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                      PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTY THAT THE SERVICES WILL BE
                      UNINTERRUPTED, TIMELY, SECURE, ACCURATE, RELIABLE, OR ERROR-FREE. ANY RELIANCE YOU PLACE ON THE SERVICES
                      OR OUR CONTENT IS STRICTLY AT YOUR OWN RISK.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* 8. LIMITATION OF LIABILITY */}
              <section id="liability" className="scroll-mt-24">
                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-2xl font-heading">
                      <Scale className="h-6 w-6 text-primary" />
                      <span>8. LIMITATION OF LIABILITY</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE MEMBERS OF THE ARTILECT AI
                      TEAM BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR
                      ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE,
                      GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
                    </p>
                    <ul className="text-muted-foreground space-y-2 mb-4 ml-6">
                      <li>• (A) YOUR USE OF, OR INABILITY TO USE, THE SERVICES;</li>
                      <li>• (B) ANY CONTENT OBTAINED FROM THE SERVICES; OR</li>
                      <li>• (C) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS.</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">
                      OUR TOTAL AGGREGATE LIABILITY TO YOU FOR ANY AND ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS
                      OR YOUR USE OF THE SERVICES SHALL NOT EXCEED FIFTY EUROS (€50.00).
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* 9. Indemnification */}
              <section id="indemnification" className="scroll-mt-24">
                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-2xl font-heading">
                      <Shield className="h-6 w-6 text-primary" />
                      <span>9. Indemnification</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed">
                      You agree to defend, indemnify, and hold harmless the individual members of the Artilect AI Team from
                      and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and
                      expenses (including but not limited to attorney's fees) arising from: (a) your use of and access to
                      the Services; (b) your violation of any term of these Terms; or (c) your violation of any third-party
                      right, including without limitation any copyright or privacy right. This indemnification obligation
                      will survive the termination of these Terms and your use of the Services.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* 10. Governing Law and Jurisdiction */}
              <section id="governing" className="scroll-mt-24">
                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-2xl font-heading">
                      <Scale className="h-6 w-6 text-primary" />
                      <span>10. Governing Law and Jurisdiction</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      These Terms, and any dispute or claim arising out of or in connection with them, shall be governed by
                      and construed in accordance with the laws of France, without regard to its conflict of law provisions.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      You agree that the courts of Paris, France, shall have exclusive jurisdiction to settle any dispute or
                      claim that arises out of or in connection with these Terms or the Services.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* 11. Termination */}
              <section id="termination" className="scroll-mt-24">
                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-2xl font-heading">
                      <AlertTriangle className="h-6 w-6 text-primary" />
                      <span>11. Termination</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed">
                      We reserve the right, in our sole discretion, to suspend or terminate your access to the Services at
                      any time, for any reason, with or without notice, including for any violation of these Terms.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* 12. Miscellaneous */}
              <section id="misc" className="scroll-mt-24">
                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-2xl font-heading">
                      <FileText className="h-6 w-6 text-primary" />
                      <span>12. Miscellaneous</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Entire Agreement: These Terms constitute the entire agreement between you and the Artilect AI Team
                      regarding your use of the Services.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Severability: If any provision of these Terms is held to be invalid or unenforceable, the remaining
                      provisions will remain in full force and effect.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      No Waiver: Our failure to enforce any right or provision of these Terms will not be considered a
                      waiver of those rights.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* 13. Contact Information */}
              <section id="contact" className="scroll-mt-24">
                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-2xl font-heading">
                      <Phone className="h-6 w-6 text-primary" />
                      <span>13. Contact Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      For any questions about these Terms, please contact us at: <span className="text-primary">info@artilectai.com</span>
                    </p>
                    <p className="text-muted-foreground leading-relaxed">Website: <span className="text-primary">www.artilectai.com</span></p>
                  </CardContent>
                </Card>
              </section>
            </div>

            {/* Newsletter CTA (kept minimal to focus on Terms content) */}
            <div className="mt-16 mb-12">
              <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="text-center py-10">
                  <h3 className="text-2xl font-heading font-bold mb-2">Stay informed with Artilect AI</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                    Explore our latest insights and updates on AI. Your use of the Services is governed by these Terms.
                  </p>
                  <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                    <Link href="/#subscribe">Subscribe</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>

      <Footer />

      {/* Global ScrollToTop is provided via RootLayout */}
    </div>
  );
}