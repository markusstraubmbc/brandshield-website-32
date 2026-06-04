
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { trackCtaClick } from "@/lib/tracking";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-24 lg:pt-32 pb-16 bg-gradient-to-br from-white to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary mb-6 animate-fadeIn">
            Professioneller Brandschutz für Ihre Sicherheit
          </h1>
          <p className="text-xl lg:text-2xl text-secondary/80 mb-6 animate-fadeIn">
            Seit über 30 Jahren Ihr verlässlicher Partner für Brandschutz. Wir garantieren höchste Qualität und Sicherheit für Ihr Gebäude durch TÜV-zertifizierte Sachverständige.
          </p>
          <p className="text-xl lg:text-2xl text-secondary/80 mb-8 animate-fadeIn">
            Als <strong>Spezialisten für Brandschutz</strong> machen wir Ihre Immobilie funktionsfähig und brandschutzsicher. 
            Dadurch schützen Sie Leben, sind rechtskonform und sparen wertvolle Zeit und Kosten. 
            Durch unsere diverse Kooperationspartner bekommen Sie den Brandschutz aus einer Hand.
          </p>
          {/* Kernleistungen sichtbar als Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fadeIn">
            <Link to="/dienstleistungen/sabotageschutz" className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors">Sabotageschutz</Link>
            <Link to="/dienstleistungen/gesamtsanierung-brandschutz" className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors">Gesamtsanierung</Link>
            <Link to="/dienstleistungen/tuerengutachten" className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors">Türengutachten</Link>
            <Link to="/dienstleistungen/sicherheitstechnik-tueren" className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors">Sicherheitstechnik Türen</Link>
            <Link to="/dienstleistungen/brandschutzplanung" className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors">Brandschutzplanung</Link>
          </div>

          <button
            onClick={() => { scrollToContact(); trackCtaClick("hero_kontakt_button"); }}
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors animate-fadeIn"
            aria-label="Kontaktieren Sie uns für Brandschutzberatung"
          >
            Kontaktieren Sie uns
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
