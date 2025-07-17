import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Stethoscope, Home, Heart, Users, Zap, ArrowRight } from 'lucide-react';

const OurWork = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Education & Skill Development",
      description: "Comprehensive education programs from primary to higher education, including vocational training and digital literacy.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      achievements: ["50,000+ Students Supported", "200+ Schools Enhanced", "1,000+ Scholarships Provided"],
      color: "bg-blue-500"
    },
    {
      icon: Stethoscope,
      title: "Healthcare Services",
      description: "Mobile health clinics, specialty care programs, health awareness campaigns, and medical infrastructure development.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      achievements: ["100,000+ Patients Treated", "50+ Health Camps", "25+ Mobile Clinics"],
      color: "bg-red-500"
    },
    {
      icon: Home,
      title: "Rural Development",
      description: "Infrastructure development, livelihood programs, agricultural support, and sustainable development initiatives.",
      image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      achievements: ["500+ Villages Developed", "10,000+ Livelihoods Created", "300+ Infrastructure Projects"],
      color: "bg-green-500"
    },
    {
      icon: Heart,
      title: "Disaster Response & Relief",
      description: "Emergency response, rehabilitation support, disaster preparedness training, and community resilience building.",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      achievements: ["15+ Disaster Responses", "75,000+ People Assisted", "500+ Families Rehabilitated"],
      color: "bg-purple-500"
    },
    {
      icon: Users,
      title: "Women Empowerment",
      description: "Skill development, entrepreneurship support, self-help groups, and leadership development for women.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      achievements: ["25,000+ Women Empowered", "1,500+ SHGs Formed", "5,000+ Entrepreneurs Created"],
      color: "bg-pink-500"
    },
    {
      icon: Zap,
      title: "Digital Innovation",
      description: "Technology adoption, digital literacy programs, e-governance initiatives, and innovation hubs.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      achievements: ["100+ Digital Centers", "30,000+ People Trained", "50+ Tech Solutions"],
      color: "bg-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Work</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Transforming communities through comprehensive development programs
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact Areas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work across multiple sectors to create comprehensive and sustainable development solutions.
            </p>
          </div>

          <div className="space-y-16">
            {programs.map((program, index) => (
              <div key={index} className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row gap-8 lg:gap-12 items-center`}>
                <div className="lg:w-1/2">
                  <div className="relative overflow-hidden rounded-lg shadow-strong">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-64 lg:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className={`absolute top-4 left-4 p-3 rounded-full ${program.color}`}>
                      <program.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{program.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-lg">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {program.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="hero" className="group">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Be part of the transformation. Your support can help us reach more communities 
              and create lasting impact across Andhra Pradesh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Support Our Work
              </Button>
              <Button variant="outline" size="xl">
                Become a Partner
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurWork;