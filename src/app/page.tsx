import { Metadata } from 'next';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyArtiLect from "@/components/WhyArtiLect";
import FeaturedTopics from "@/components/FeaturedTopics";
import CommunityInvitation from "@/components/CommunityInvitation";
import Footer from "@/components/Footer";
import { FAQSection } from "@/components/FAQ";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SocialProof } from "@/components/SocialProof";
import { FOMOSection } from "@/components/FOMOSection";
import InteractiveQuiz from "@/components/InteractiveQuiz";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";

export const metadata: Metadata = {
  title: 'ArtiLect - AI Intelligence Newsletter | Weekly AI Insights & Analysis',
  description: 'Stay ahead of the AI revolution with ArtiLect Newsletter. Get curated insights, expert analysis, and breaking research on artificial intelligence, machine learning, and data analytics delivered weekly.',
  keywords: [
    'AI newsletter',
    'artificial intelligence',
    'machine learning',
    'data analytics',
    'AI insights',
    'tech newsletter',
    'AI research',
    'automation',
    'data ethics',
    'technology trends'
  ],
  authors: [{ name: 'ArtiLect Team' }],
  creator: 'ArtiLect',
  publisher: 'ArtiLect',
  openGraph: {
    title: 'ArtiLect - AI Intelligence Newsletter',
    description: 'Weekly AI insights and analysis for professionals, researchers, and enthusiasts.',
    url: 'https://artilect.ai',
    siteName: 'ArtiLect',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ArtiLect - AI Intelligence Newsletter',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ArtiLect - AI Intelligence Newsletter',
    description: 'Weekly AI insights and analysis for professionals, researchers, and enthusiasts.',
    images: ['/twitter-image.jpg'],
    creator: '@artilectai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main id="main-content" className="flex flex-col">
        <Hero />
        
        <div className="py-16">
          <SocialProof />
        </div>
        
        <div className="py-16">
          <HowItWorks />
        </div>
        
        {/* NewsletterPreview section removed by request */}
        
        <div className="py-16">
          <WhyArtiLect />
        </div>
        
        <div id="featured-topics" className="py-16">
          <FeaturedTopics />
        </div>
        
        <div className="py-16">
          <FOMOSection />
        </div>
        
        <div className="py-16">
          <CommunityInvitation />
        </div>

        <div className="py-16">
          <FAQSection />
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
      <ExitIntentPopup />
    </div>
  );
}