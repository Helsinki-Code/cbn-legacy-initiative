import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const News = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "name": "CBN Trust Latest News",
    "description": "Stay updated with CBN Trust's latest news, achievements, and impact stories from our programs across Andhra Pradesh. Read about our community transformation efforts.",
    "publisher": {
      "@type": "Organization",
      "name": "CBN Trust",
      "logo": "/lovable-uploads/2c294f61-c101-4c9e-afe2-6071b03f2051.png"
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "CBN Trust"
    }
  };

  const newsArticles = [
    {
      id: 1,
      title: "CBN Trust Launches Major Healthcare Initiative in Rural Andhra Pradesh",
      excerpt: "New mobile health clinics will serve 50+ villages, providing free medical care to thousands of residents.",
      date: "January 15, 2025",
      author: "CBN Trust Team",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      featured: true
    },
    {
      id: 2,
      title: "Digital Literacy Program Reaches 10,000 Students",
      excerpt: "CBN Trust's digital education initiative has successfully trained 10,000 students across 200 schools.",
      date: "January 10, 2025",
      author: "Education Team",
      category: "Education",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      featured: false
    },
    {
      id: 3,
      title: "Women Entrepreneurs Network Expands to 15 Districts",
      excerpt: "The women empowerment program has now reached 15 districts, supporting 5,000+ women entrepreneurs.",
      date: "January 5, 2025",
      author: "Women Empowerment Team",
      category: "Women Empowerment",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      featured: false
    },
    {
      id: 4,
      title: "CBN Trust Responds to Cyclone Damage in Coastal Districts",
      excerpt: "Immediate relief operations launched to support 2,000 families affected by recent cyclone damage.",
      date: "December 28, 2024",
      author: "Disaster Relief Team",
      category: "Disaster Relief",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      featured: false
    },
    {
      id: 5,
      title: "Rural Infrastructure Development Program Completed in 25 Villages",
      excerpt: "Major infrastructure improvements including roads, water systems, and community centers have been completed.",
      date: "December 20, 2024",
      author: "Rural Development Team",
      category: "Rural Development",
      image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      featured: false
    },
    {
      id: 6,
      title: "Annual Impact Report 2024: Transforming 100,000+ Lives",
      excerpt: "CBN Trust's comprehensive annual report showcases significant impact across all program areas.",
      date: "December 15, 2024",
      author: "Research Team",
      category: "Impact",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      featured: false
    }
  ];

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Latest News & Impact Stories | CBN Trust"
        description="Stay updated with CBN Trust's latest news, achievements, and impact stories from our programs across Andhra Pradesh. Read about our community transformation efforts."
        ogImage="/assets/healthcare-services-telugu.jpg"
        canonical="https://cbntrust.org/news"
        structuredData={structuredData}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Latest News</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Stay updated with our latest activities, achievements, and impact stories
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Story</h2>
            </div>
            
            <Card className="overflow-hidden border-0 shadow-strong max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredArticle.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{featuredArticle.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Tag className="w-4 h-4" />
                      <span>{featuredArticle.category}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{featuredArticle.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <Button variant="hero" className="self-start group">
                    Read Full Story
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent News</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover more stories about our impact and ongoing initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <Card key={article.id} className="group overflow-hidden border-0 shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader>
                  <h3 className="text-xl font-bold line-clamp-2">{article.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">{article.excerpt}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full group">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Informed</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter to receive the latest news, updates, and impact stories 
              directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Subscribe to Newsletter
              </Button>
              <Button variant="outline" size="xl">
                Follow Us on Social Media
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
