import { Heart, GraduationCap, Stethoscope, Home, Users, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Programs = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Education Support",
      description: "Providing quality education and scholarships to underprivileged children across Andhra Pradesh.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Stethoscope,
      title: "Healthcare Services",
      description: "Delivering comprehensive healthcare solutions and medical support to rural communities.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Home,
      title: "Rural Development",
      description: "Empowering rural communities through infrastructure development and livelihood programs.",
      image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Heart,
      title: "Disaster Relief",
      description: "Rapid response and rehabilitation support during natural disasters and emergencies.",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Users,
      title: "Women Empowerment",
      description: "Skill development and entrepreneurship programs for women's economic independence.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      color: "text-pink-600",
      bgColor: "bg-pink-50"
    },
    {
      icon: Zap,
      title: "Digital Literacy",
      description: "Technology training and digital skills development for the digital age.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Impact Areas</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Through comprehensive programs, we address the most pressing challenges facing 
            communities in Andhra Pradesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className={`absolute top-4 left-4 p-3 rounded-full ${program.bgColor}`}>
                  <program.icon className={`w-6 h-6 ${program.color}`} />
                </div>
              </div>
              <CardHeader>
                <h3 className="text-xl font-bold">{program.title}</h3>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {program.description}
                </p>
                <Button variant="outline" size="sm" className="group">
                  Learn More
                  <Zap className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;