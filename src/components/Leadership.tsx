
import { Card, CardContent } from '@/components/ui/card';

const Leadership = () => {
  const leaders = [
    {
      name: "Sri Chandrababu Naidu",
      title: "The CM of Andhra Pradesh",
      description: "Visionary leader and Chief Minister of Andhra Pradesh, driving transformation through technology and governance innovation.",
      image: "/lovable-uploads/9f06e8fe-ca12-4fb0-8134-fbbe84daabe9.png",
      gradient: "from-primary to-primary-hover"
    },
    {
      name: "Sri Abhinetra",
      title: "Founder Chairman of CBN Trust",
      description: "Dedicated professional committed to implementing sustainable development programs across Andhra Pradesh and bringing positive change to communities.",
      image: "/lovable-uploads/d3878ca3-8048-4f3c-937f-ef785bf864c5.png",
      gradient: "from-secondary to-secondary-hover"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leaders.map((leader, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden bg-white">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
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
