
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Leadership from '@/components/Leadership';
import Programs from '@/components/Programs';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CBN Trust",
    "url": "https://cbntrust.org",
    "logo": "/lovable-uploads/09fcf303-b09b-4128-bf93-b6f7ea49ebcb.png",
    "description": "Join CBN Trust in creating sustainable social and economic transformation through education, healthcare, rural development, and community empowerment programs across Andhra Pradesh.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Amaravati",
      "addressRegion": "Andhra Pradesh",
      "postalCode": "522020",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9000777804",
      "contactType": "customer service",
      "email": "info@cbntrust.org"
    },
    "sameAs": [
      "https://facebook.com/cbntrust",
      "https://twitter.com/cbntrust",
      "https://instagram.com/cbntrust"
    ]
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="CBN Trust - Transforming Lives, Building Communities in Andhra Pradesh"
        description="Join CBN Trust in creating sustainable social and economic transformation through education, healthcare, rural development, and community empowerment programs across Andhra Pradesh."
        ogImage="/assets/hero-banner-telugu.jpg"
        canonical="https://cbntrust.org/"
        structuredData={structuredData}
      />
      <Header />
      <Hero />
      <Leadership />
      <Programs />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
