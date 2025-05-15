
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SeoContent from "@/components/SeoContent";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Team />
        <Contact />
        <SeoContent />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
