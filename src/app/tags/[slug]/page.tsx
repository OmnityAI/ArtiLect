import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { ChevronRight, Clock, User, TrendingUp, Brain, BarChart3, Cog, Shield } from 'lucide-react'

interface TopicData {
  title: string
  description: string
  icon: any
  color: string
  articles: Array<{
    title: string
    description: string
    readTime: string
    author: string
    category: string
    featured?: boolean
  }>
  insights: Array<{
    title: string
    value: string
    trend: string
  }>
  relatedTopics: string[]
}

const topicsData: Record<string, TopicData> = {
  'ai-machine-learning': {
    title: 'AI & Machine Learning',
    description:
      'Dive deep into artificial intelligence algorithms, neural networks, and machine learning techniques that are reshaping industries.',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    articles: [
      {
        title: 'The Evolution of Transformer Architecture in 2024',
        description:
          'Exploring the latest advances in transformer models and their impact on natural language processing.',
        readTime: '8 min read',
        author: 'Dr. Sarah Chen',
        category: 'Deep Learning',
        featured: true,
      },
      {
        title: 'Federated Learning: Privacy-Preserving AI at Scale',
        description:
          'How federated learning is enabling AI training across distributed datasets while maintaining privacy.',
        readTime: '6 min read',
        author: 'Marcus Rodriguez',
        category: 'Privacy AI',
      },
      {
        title: 'Multi-Modal AI: Beyond Text and Images',
        description:
          'The convergence of vision, language, and audio in next-generation AI systems.',
        readTime: '10 min read',
        author: 'Dr. Aisha Patel',
        category: 'Multi-Modal',
      },
      {
        title: 'Neural Architecture Search: Automating Model Design',
        description:
          'How AI is being used to design better AI architectures automatically.',
        readTime: '7 min read',
        author: 'James Liu',
        category: 'AutoML',
      },
    ],
    insights: [
      { title: 'Global AI Investment', value: '$91.5B', trend: '+15.2%' },
      { title: 'ML Models Deployed', value: '2.3M', trend: '+42%' },
      { title: 'Research Papers', value: '8,749', trend: '+28%' },
    ],
    relatedTopics: ['data-analytics', 'automation-business', 'data-ethics-policy'],
  },
  'data-analytics': {
    title: 'Data Analytics',
    description:
      'Master the art of extracting insights from data through advanced analytics, visualization, and statistical modeling.',
    icon: BarChart3,
    color: 'from-blue-500 to-cyan-500',
    articles: [
      {
        title: 'Real-Time Analytics: Processing Streaming Data at Scale',
        description:
          'Building robust pipelines for analyzing data as it flows through your systems.',
        readTime: '9 min read',
        author: 'Elena Vasquez',
        category: 'Streaming Analytics',
        featured: true,
      },
      {
        title: 'The Rise of Augmented Analytics',
        description:
          'How AI is democratizing data analysis and making insights accessible to everyone.',
        readTime: '5 min read',
        author: 'Robert Kim',
        category: 'Augmented Analytics',
      },
      {
        title: 'Graph Analytics: Unlocking Network Intelligence',
        description:
          'Leveraging graph databases and algorithms to understand complex relationships in data.',
        readTime: '11 min read',
        author: 'Dr. Maria Santos',
        category: 'Graph Analytics',
      },
      {
        title: 'Predictive Analytics in Healthcare',
        description:
          'Using statistical models to forecast patient outcomes and optimize treatment plans.',
        readTime: '8 min read',
        author: 'Dr. Ahmed Hassan',
        category: 'Healthcare Analytics',
      },
    ],
    insights: [
      { title: 'Data Generated Daily', value: '2.5 QB', trend: '+23%' },
      { title: 'Analytics Jobs', value: '876K', trend: '+31%' },
      { title: 'Business Value', value: '$3.2T', trend: '+18%' },
    ],
    relatedTopics: ['ai-machine-learning', 'automation-business', 'data-ethics-policy'],
  },
  'automation-business': {
    title: 'Automation in Business',
    description:
      'Discover how intelligent automation is transforming business processes, workflows, and operational efficiency.',
    icon: Cog,
    color: 'from-green-500 to-emerald-500',
    articles: [
      {
        title: 'Intelligent Process Automation: Beyond RPA',
        description:
          'How AI-powered automation is evolving beyond simple rule-based processes.',
        readTime: '7 min read',
        author: 'Michael Zhang',
        category: 'Process Automation',
        featured: true,
      },
      {
        title: 'Hyperautomation: The Future of Digital Transformation',
        description:
          'Combining RPA, AI, and analytics to create end-to-end automated business processes.',
        readTime: '10 min read',
        author: 'Lisa Thompson',
        category: 'Digital Transformation',
      },
      {
        title: 'Autonomous Financial Operations',
        description:
          'How AI is revolutionizing accounting, invoicing, and financial reporting.',
        readTime: '6 min read',
        author: 'David Park',
        category: 'FinTech',
      },
      {
        title: 'Supply Chain Automation: End-to-End Intelligence',
        description: 'Leveraging AI and IoT to create self-optimizing supply chains.',
        readTime: '9 min read',
        author: 'Rachel Green',
        category: 'Supply Chain',
      },
    ],
    insights: [
      { title: 'Process Efficiency', value: '+67%', trend: '+12%' },
      { title: 'Cost Reduction', value: '$890B', trend: '+25%' },
      { title: 'Automation Adoption', value: '78%', trend: '+34%' },
    ],
    relatedTopics: ['ai-machine-learning', 'data-analytics', 'data-ethics-policy'],
  },
  'data-ethics-policy': {
    title: 'Data Ethics & Policy',
    description:
      'Navigate the complex landscape of AI governance, data privacy, and ethical considerations in technology.',
    icon: Shield,
    color: 'from-orange-500 to-red-500',
    articles: [
      {
        title: "The EU AI Act: Global Implications for AI Development",
        description:
          "Understanding the far-reaching effects of Europe's comprehensive AI regulation.",
        readTime: '12 min read',
        author: 'Dr. Catherine Moore',
        category: 'AI Regulation',
        featured: true,
      },
      {
        title: 'Algorithmic Bias: Detection and Mitigation Strategies',
        description:
          'Tools and techniques for identifying and addressing bias in AI systems.',
        readTime: '8 min read',
        author: 'Prof. James Wilson',
        category: 'AI Fairness',
      },
      {
        title: 'Privacy-Preserving Machine Learning',
        description:
          'Balancing data utility with privacy protection in modern AI applications.',
        readTime: '9 min read',
        author: 'Dr. Yuki Tanaka',
        category: 'Privacy Tech',
      },
      {
        title: 'Explainable AI: Building Trust Through Transparency',
        description:
          'Why interpretability matters and how to implement explainable AI systems.',
        readTime: '7 min read',
        author: 'Anna Kowalski',
        category: 'XAI',
      },
    ],
    insights: [
      { title: 'Privacy Regulations', value: '127', trend: '+45%' },
      { title: 'Compliance Cost', value: '$5.4M', trend: '+22%' },
      { title: 'Ethics Frameworks', value: '89', trend: '+67%' },
    ],
    relatedTopics: ['ai-machine-learning', 'data-analytics', 'automation-business'],
  },
}

// Next 15: params are Promises – await them in both functions
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const topic = topicsData[slug]

  if (!topic) {
    return {
      title: 'Topic Not Found - Artilect',
      description: 'The requested topic could not be found.',
    }
  }

  return {
  title: `${topic.title} - Artilect Newsletter`,
    description: topic.description,
    keywords: [topic.title, 'AI newsletter', 'artificial intelligence', 'technology insights'],
    openGraph: {
  title: `${topic.title} - Artilect Newsletter`,
      description: topic.description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
  title: `${topic.title} - Artilect Newsletter`,
      description: topic.description,
    },
  }
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const topic = topicsData[slug]

  if (!topic) {
    notFound()
  }

  const IconComponent = topic.icon

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="container py-4">
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/topics" className="hover:text-foreground transition-colors">
            Topics
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{topic.title}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div
              className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${topic.color} mb-6`}
            >
              <IconComponent className="h-8 w-8 text-white" />
            </div>

            <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
              {topic.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              {topic.description}
            </p>

            {/* Key Insights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {topic.insights.map((insight, index) => (
                <Card key={index} className="bg-card/50 border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-2xl font-bold text-foreground">{insight.value}</span>
                      <div className="flex items-center ml-2 text-green-400">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        <span className="text-sm font-medium">{insight.trend}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{insight.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">
              Subscribe to {topic.title} Updates
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="container">
          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Latest Articles & Insights</h2>
            <p className="text-muted-foreground text-lg">
              Dive deep into the latest developments in {topic.title.toLowerCase()}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {topic.articles.map((article, index) => (
              <Card
                key={index}
                className={`group hover:border-primary/50 transition-all duration-300 ${
                  article.featured ? 'border-primary/30 bg-primary/5' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {article.category}
                    </Badge>
                    {article.featured && (
                      <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Read More
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-card/20">
        <div className="container">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8 lg:p-12 text-center">
              <h3 className="font-heading text-3xl font-bold mb-4">Stay Updated on {topic.title}</h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Get the latest insights, research, and analysis delivered to your inbox weekly.
                Join thousands of professionals staying ahead of the curve.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
                <Input placeholder="Enter your email" className="flex-1" type="email" />
                <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">
                  Subscribe Now
                </Button>
              </div>

              <p className="text-xs text-muted-foreground">No spam. Unsubscribe at any time. Privacy policy applies.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Topics */}
      <section className="py-16">
        <div className="container">
          <h3 className="font-heading text-2xl font-bold mb-8">Explore Related Topics</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topic.relatedTopics.map((relatedSlug) => {
              const relatedTopic = topicsData[relatedSlug]
              const RelatedIcon = relatedTopic.icon

              return (
                <Link key={relatedSlug} href={`/topics/${relatedSlug}`}>
                  <Card className="group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${relatedTopic.color} mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <RelatedIcon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                        {relatedTopic.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {relatedTopic.description}
                      </p>
                      <div className="flex items-center mt-4 text-sm text-primary group-hover:translate-x-1 transition-transform">
                        Explore Topic
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-foreground">A</span>
                </div>
                <span className="font-heading font-bold text-xl">Artilect</span>
              </Link>
              <p className="text-sm text-muted-foreground">Your weekly dose of AI insights and analysis.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Topics</h4>
              <div className="space-y-2">
                {Object.entries(topicsData).map(([slug, data]) => (
                  <Link
                    key={slug}
                    href={`/topics/${slug}`}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {data.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
                <Link href="/contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
                <Link href="/privacy" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Twitter
                </Link>
                <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  LinkedIn
                </Link>
                <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Newsletter
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/40 text-center">
            <p className="text-sm text-muted-foreground">© 2025 Artilect. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <Footer />
    </div>
  )
}
