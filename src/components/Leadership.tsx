import { Card, CardContent } from '@/components/ui/card';
import cbnImage from '/lovable-uploads/237c037e-dce8-42a9-a02f-d2b38ad1352f.png';

const Leadership = () => {
  const leaders = [
    {
      name: "Chandrababu Naidu",
      title: "The Inspiration",
      description: "Visionary leader and Chief Minister of Andhra Pradesh, driving transformation through technology and governance innovation.",
      image: cbnImage,
      gradient: "from-primary to-primary-hover"
    },
    {
      name: "Leadership Team",
      title: "The Force Behind",
      description: "Dedicated professionals committed to implementing sustainable development programs across Andhra Pradesh.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      gradient: "from-secondary to-secondary-hover"
    },
    {
      name: "Community Champions",
      title: "The Motivation",
      description: "Local leaders and volunteers who work tirelessly to bring positive change to their communities.",
      image: "https://images.unsplash.com/photo-1594213710582-d5dbe0d1ab32?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      gradient: "from-accent to-accent/80"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            WE WORK THE <span className="text-secondary">TALK!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our leadership team combines vision, experience, and passion to drive meaningful change 
            in communities across Andhra Pradesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${leader.gradient} opacity-80`}></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-lg font-bold mb-1">{leader.title}</h4>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-center">{leader.name}</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {leader.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;