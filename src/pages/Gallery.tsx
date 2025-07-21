import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Download } from 'lucide-react';

const Gallery = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "CBN Trust Photo Gallery",
    "description": "View photos and videos from CBN Trust's impact programs across Andhra Pradesh. See our healthcare, education, and community development initiatives in action.",
    "mainEntity": {
      "@type": "Organization",
      "name": "CBN Trust",
      "image": [
        "/assets/healthcare-services-telugu.jpg",
        "/assets/education-support-telugu.jpg",
        "/assets/women-empowerment-telugu.jpg",
        "/assets/rural-development-telugu.jpg"
      ]
    }
  };

  const galleryImages = [
    {
      id: 1,
      title: "Health Camp - Guntur District",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      description: "Free medical checkups provided to 500+ villagers"
    },
    {
      id: 2,
      title: "Education Support Program",
      category: "Education", 
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      description: "Distributing educational materials to rural schools"
    },
    {
      id: 3,
      title: "Women Empowerment Workshop",
      category: "Women Empowerment",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      description: "Skill development program for rural women"
    },
    {
      id: 4,
      title: "Rural Development Initiative",
      category: "Rural Development",
      image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      description: "Infrastructure development in remote villages"
    },
    {
      id: 5,
      title: "Digital Literacy Program",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      description: "Teaching computer skills to youth"
    },
    {
      id: 6,
      title: "Disaster Relief Operations",
      category: "Disaster Relief",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      description: "Emergency response during natural disasters"
    },
    {
      id: 7,
      title: "Community Outreach",
      category: "Community",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      description: "Engaging with local communities"
    },
    {
      id: 8,
      title: "Youth Development",
      category: "Youth",
      image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      description: "Leadership training for young people"
    },
    {
      id: 9,
      title: "Agricultural Support",
      category: "Agriculture",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      description: "Modern farming techniques training"
    }
  ];

  const categories = ["All", "Healthcare", "Education", "Women Empowerment", "Rural Development", "Technology", "Disaster Relief"];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Photo Gallery - CBN Trust Programs in Action | CBN Trust"
        description="View photos and videos from CBN Trust's impact programs across Andhra Pradesh. See our healthcare, education, and community development initiatives in action."
        ogImage="/assets/healthcare-services-telugu.jpg"
        canonical="https://cbntrust.org/gallery"
        structuredData={structuredData}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Photo Gallery</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Capturing moments of impact and transformation across our programs
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "hero" : "outline"}
                size="sm"
                className="hover:scale-105 transition-transform"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((item) => (
              <Card key={item.id} className="group overflow-hidden border-0 shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Controls */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3">
                      <Button size="sm" variant="secondary" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Gallery</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch our programs in action and see the real impact on communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-medium hover:shadow-strong transition-all duration-300">
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group cursor-pointer">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-l-[12px] border-l-primary border-y-[8px] border-y-transparent ml-1"></div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold">CBN Trust Impact Video {index}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Share Your Story</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Have photos or videos from our programs? We'd love to feature them in our gallery. 
              Share your moments with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Submit Photos
              </Button>
              <Button variant="outline" size="xl">
                Download Media Kit
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
