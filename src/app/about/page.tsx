import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  Users, 
  Target, 
  Zap, 
  Shield, 
  TrendingUp, 
  BookOpen, 
  Award, 
  Mail,
  ChevronRight,
  Home
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About ArtiLect Newsletter | Leading AI Intelligence Newsletter',
  description: 'Learn about ArtiLect\'s mission to democratize AI knowledge through expert-curated analysis, practical insights, and community-driven intelligence for AI professionals.',
  keywords: 'AI newsletter, artificial intelligence, machine learning, AI research, tech analysis, AI community',
  openGraph: {
    title: 'About ArtiLect Newsletter',
    description: 'Democratizing AI knowledge through expert analysis and community intelligence',
    type: 'website',
  },
}

const differentiators = [
  {
    icon: Target,
    title: 'Expert Curation',
    description: 'Our team of AI researchers and industry veterans handpick the most impactful developments, filtering noise to deliver signal.'
  },
  {
    icon: Shield,
    title: 'No-Hype Approach',
    description: 'We cut through marketing noise and sensationalism to provide balanced, evidence-based analysis of AI developments.'
  },
  {
    icon: Users,
    title: 'Community-Driven',
    description: 'Built by and for AI practitioners, with insights from our network of 50,000+ professionals across industry and academia.'
  },
  {
    icon: Zap,
    title: 'Actionable Insights',
    description: 'Every piece of content is designed to help you make better decisions, whether you\'re building, investing, or strategizing.'
  },
  {
    icon: BookOpen,
    title: 'Deep Context',
    description: 'We don\'t just report what happened—we explain why it matters and what it means for the future of AI.'
  },
  {
    icon: TrendingUp,
    title: 'Trend Analysis',
    description: 'Our proprietary research identifies emerging patterns and technologies before they become mainstream.'
  }
]

const teamMembers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Editor-in-Chief',
    bio: 'Former OpenAI researcher with 10+ years in ML. PhD in Computer Science from Stanford.',
    avatar: '/api/placeholder/150/150',
    initials: 'SC'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'AI Research Director',
    bio: 'Ex-Google DeepMind engineer. Published 40+ papers in top AI conferences.',
    avatar: '/api/placeholder/150/150',
    initials: 'MR'
  },
  {
    name: 'Dr. Aisha Patel',
    role: 'Industry Analysis Lead',
    bio: 'Former McKinsey AI consultant. Expert in AI business strategy and market dynamics.',
    avatar: '/api/placeholder/150/150',
    initials: 'AP'
  },
  {
    name: 'James Liu',
    role: 'Technical Writer',
    bio: 'Software architect turned tech journalist. Specializes in making complex AI accessible.',
    avatar: '/api/placeholder/150/150',
    initials: 'JL'
  },
  {
    name: 'Elena Vasquez',
    role: 'Community Manager',
    bio: 'Developer relations expert. Builds bridges between AI researchers and practitioners.',
    avatar: '/api/placeholder/150/150',
    initials: 'EV'
  }
]

const stats = [
  { number: '52K+', label: 'Active Subscribers' },
  { number: '156', label: 'Issues Published' },
  { number: '200+', label: 'Expert Contributors' },
  { number: '94%', label: 'Open Rate' },
  { number: '12min', label: 'Avg. Read Time' },
  { number: '4.9/5', label: 'Reader Rating' }
]

const testimonials = [
  {
    quote: "ArtiLect is my go-to source for understanding what actually matters in AI. No fluff, just actionable intelligence.",
    author: "Tech Lead at Microsoft",
    role: "Anonymous Subscriber"
  },
  {
    quote: "The deep analysis and expert commentary help me stay ahead of trends that impact my investment decisions.",
    author: "VC Partner",
    role: "Anonymous Subscriber"
  },
  {
    quote: "Finally, an AI newsletter that treats readers as intelligent professionals rather than hype consumers.",
    author: "AI Research Scientist",
    role: "Anonymous Subscriber"
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb Navigation */}
  <div className="container mx-auto px-6 md:px-8 lg:px-[120px] pt-24 pb-8">
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link href="/" className="flex items-center hover:text-foreground transition-colors">
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">About</span>
        </nav>
      </div>

      {/* Hero Section */}
  <section className="container mx-auto px-6 md:px-8 lg:px-[120px] py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-gradient-to-r from-primary/20 to-accent/20 border-primary/30">
            About ArtiLect
          </Badge>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent">
            The Leading AI Intelligence Newsletter
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We democratize access to AI knowledge by delivering expert-curated analysis, 
            practical insights, and community intelligence to over 52,000 professionals worldwide.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Our Mission Section */}
  <section className="container mx-auto px-6 md:px-8 lg:px-[120px] py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                In a world flooded with AI hype and misinformation, we exist to cut through 
                the noise and deliver the signal. Our mission is to democratize access to 
                high-quality AI knowledge and analysis.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We believe that understanding AI shouldn't require a PhD or insider access. 
                Every professional deserves clear, actionable insights about how artificial 
                intelligence will impact their industry, their work, and their future.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-foreground font-medium">Quality over quantity in every analysis</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-foreground font-medium">Accessibility without sacrificing depth</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-foreground font-medium">Expert analysis from industry practitioners</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
              <Card className="relative border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">3 Years</div>
                      <p className="text-muted-foreground">Delivering AI Intelligence</p>
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent mb-1">52K+</div>
                        <p className="text-sm text-muted-foreground">Subscribers</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent mb-1">94%</div>
                        <p className="text-sm text-muted-foreground">Open Rate</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
  <section className="container mx-auto px-6 md:px-8 lg:px-[120px] py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not just another AI newsletter. Here's what sets ArtiLect apart from the noise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-border/50 hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* The Team Section */}
  <section className="container mx-auto px-6 md:px-8 lg:px-[120px] py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Meet The Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our diverse team combines deep AI expertise with editorial excellence to bring you the best insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4 group-hover:ring-2 group-hover:ring-primary/30 transition-all duration-300">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/20 text-lg font-semibold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* By The Numbers Section */}
  <section className="container mx-auto px-6 md:px-8 lg:px-[120px] py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              By The Numbers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our growth and engagement metrics speak to the quality of our content and community.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {stat.number}
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
  <section className="container mx-auto px-6 md:px-8 lg:px-[120px] py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Join Our Community
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with AI professionals, researchers, and enthusiasts from around the world.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center border-border/50">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Diverse Professionals</h3>
                <p className="text-sm text-muted-foreground">
                  Engineers, researchers, executives, and entrepreneurs from leading AI companies.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-border/50">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Expert Network</h3>
                <p className="text-sm text-muted-foreground">
                  Access to insights from our network of 200+ AI experts and industry leaders.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-border/50">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Early Insights</h3>
                <p className="text-sm text-muted-foreground">
                  Be the first to know about emerging trends and breakthrough developments.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground italic mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-card/80 to-primary/5 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-50"></div>
            <CardContent className="relative p-12 text-center">
              <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Ready to Join ArtiLect?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join 52,000+ AI professionals who rely on ArtiLect for expert analysis, 
                practical insights, and community intelligence.
              </p>
              
              <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 bg-background/80 border-border/50 focus:border-primary"
                />
                <Button className="bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 text-primary-foreground font-medium px-8">
                  Subscribe Free
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                Free forever. Unsubscribe anytime. No spam, ever.
              </p>
              
              <div className="flex items-center justify-center space-x-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Weekly Issues</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Expert Analysis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>No Spam</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}