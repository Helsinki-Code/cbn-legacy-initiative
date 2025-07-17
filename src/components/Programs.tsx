import { Heart, GraduationCap, Stethoscope, Home, Users, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import educationImage from '@/assets/education-support-telugu.jpg';
import healthcareImage from '@/assets/healthcare-services-telugu.jpg';
import ruralDevelopmentImage from '@/assets/rural-development-telugu.jpg';
import disasterReliefImage from '@/assets/disaster-relief-telugu.jpg';
import womenEmpowermentImage from '@/assets/women-empowerment-telugu.jpg';
import digitalLiteracyImage from '@/assets/digital-literacy-telugu.jpg';

const Programs = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Education Support",
      description: "Providing quality education and scholarships to underprivileged children across Andhra Pradesh.",
      image: educationImage,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Stethoscope,
      title: "Healthcare Services",
      description: "Delivering comprehensive healthcare solutions and medical support to rural communities.",
      image: healthcareImage,
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Home,
      title: "Rural Development",
      description: "Empowering rural communities through infrastructure development and livelihood programs.",
      image: ruralDevelopmentImage,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Heart,
      title: "Disaster Relief",
      description: "Rapid response and rehabilitation support during natural disasters and emergencies.",
      image: disasterReliefImage,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Users,
      title: "Women Empowerment",
      description: "Skill development and entrepreneurship programs for women's economic independence.",
      image: womenEmpowermentImage,
      color: "text-pink-600",
      bgColor: "bg-pink-50"
    },
    {
      icon: Zap,
      title: "Digital Literacy",
      description: "Technology training and digital skills development for the digital age.",
      image: digitalLiteracyImage,
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