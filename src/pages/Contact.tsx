import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "CBN Trust Office",
        "Amaravati, Andhra Pradesh",
        "India - 522020"
      ]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+91 9000777804",
        "+91 8888888888",
        "Toll Free: 1800-123-4567"
      ]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "info@cbntrust.org",
        "support@cbntrust.org",
        "volunteer@cbntrust.org"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Get in touch with us to learn more about our work or to get involved
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-medium border-0">
                <CardHeader>
                  <h2 className="text-2xl font-bold">Send us a Message</h2>
                  <p className="text-muted-foreground">
                    We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name</label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name</label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone</label>
                    <Input type="tel" placeholder="+91 9000777804" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input placeholder="What is this regarding?" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea 
                      placeholder="Tell us how we can help you..."
                      className="min-h-32"
                    />
                  </div>
                  <Button variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Whether you want to volunteer, donate, partner with us, or simply learn more 
                  about our work, we're here to help. Reach out to us through any of the 
                  channels below.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="shadow-soft border-0">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-muted-foreground">{detail}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card className="shadow-soft border-0">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Find Us on Map</h3>
                      <p className="text-muted-foreground">Interactive map coming soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quick answers to common questions about CBN Trust and our programs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-soft border-0">
              <CardHeader>
                <h3 className="font-semibold">How can I volunteer?</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You can volunteer by filling out our contact form or calling us directly. 
                  We have opportunities for various skills and time commitments.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-0">
              <CardHeader>
                <h3 className="font-semibold">How are donations used?</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All donations go directly to our programs. We maintain complete transparency 
                  and provide regular reports on fund utilization.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-0">
              <CardHeader>
                <h3 className="font-semibold">Can organizations partner with us?</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! We welcome partnerships with corporations, NGOs, and government agencies 
                  to amplify our impact and reach more communities.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-0">
              <CardHeader>
                <h3 className="font-semibold">How can I stay updated?</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Subscribe to our newsletter, follow us on social media, or visit our 
                  website regularly for updates on our activities and impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;