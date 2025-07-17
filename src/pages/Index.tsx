import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Leadership from '@/components/Leadership';
import Programs from '@/components/Programs';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
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
