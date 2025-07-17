import { Heart, Users, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CallToAction = () => {
  const actions = [
    {
      icon: GraduationCap,
      title: "Sponsor Education for Orphan Children",
      description: "Help provide quality education and bright future for underprivileged children",
      buttonText: "Donate Now",
      variant: "secondary" as const,
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      icon: Heart,
      title: "Sponsor Healthcare for Communities",
      description: "Support essential medical services and healthcare programs for rural areas",
      buttonText: "Contribute",
      variant: "hero" as const,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      icon: Users,
      title: "Support Rural Development",
      description: "Help build sustainable livelihoods and infrastructure in rural communities",
      buttonText: "Get Involved",
      variant: "cta" as const,
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            We believe that we can save more lives with you.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us in our mission to transform lives and build stronger communities across Andhra Pradesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={action.image}
                  alt={action.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4 p-3 rounded-full bg-white/20 backdrop-blur-sm">
                  <action.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">{action.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {action.description}
                </p>
                <Button variant={action.variant} size="lg" className="w-full">
                  {action.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Every contribution makes a difference. Together, we can create lasting change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Make a Donation
            </Button>
            <Button variant="outline" size="xl">
              Become a Volunteer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;