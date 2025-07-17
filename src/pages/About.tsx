import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Users, Target, Eye, Award } from 'lucide-react';
import cbnImage from '/lovable-uploads/237c037e-dce8-42a9-a02f-d2b38ad1352f.png';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To create sustainable social and economic transformation in Andhra Pradesh through innovative programs in education, healthcare, and community development."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "A prosperous and equitable Andhra Pradesh where every individual has access to quality education, healthcare, and opportunities for growth."
    },
    {
      icon: Users,
      title: "Our Values",
      description: "Integrity, Innovation, Inclusivity, and Impact - these core values guide every initiative and decision we make in our journey."
    },
    {
      icon: Award,
      title: "Our Commitment",
      description: "We are committed to transparency, accountability, and measurable impact in all our programs and community initiatives."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About CBN Trust</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Inspired by visionary leadership, committed to transformational change
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  CBN Trust was established with the vision of creating lasting social and economic transformation 
                  in Andhra Pradesh. Inspired by the progressive leadership of Chandrababu Naidu, our organization 
                  embodies the principles of innovation, transparency, and inclusive development.
                </p>
                <p>
                  Since our inception, we have been at the forefront of bringing positive change to communities 
                  across the state. Our work is guided by the belief that sustainable development can only be 
                  achieved through collaborative efforts that involve government, civil society, and citizens.
                </p>
                <p>
                  We focus on addressing the most pressing challenges facing our communities - from education 
                  and healthcare to rural development and disaster relief. Our approach combines traditional 
                  wisdom with modern technology to create solutions that are both effective and sustainable.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={cbnImage}
                alt="Chandrababu Naidu"
                className="w-full rounded-lg shadow-strong"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{value.title}</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our leadership team combines decades of experience in public service, 
              development work, and community engagement.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-medium p-8">
              <h3 className="text-2xl font-bold mb-4">Chandrababu Naidu - Patron & Inspiration</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As the Chief Minister of Andhra Pradesh, Chandrababu Naidu has been a pioneer 
                in bringing technology-driven governance and development to the state. His vision 
                of a modern, digitally empowered Andhra Pradesh guides all our initiatives. 
                Under his inspiration, CBN Trust continues to implement innovative solutions 
                that address the core challenges of our communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;