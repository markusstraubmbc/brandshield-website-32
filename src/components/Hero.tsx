
import { ArrowRight } from "lucide-react";

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
          <h2 className="text-2xl lg:text-3xl font-semibold text-secondary/90 mb-4 animate-fadeIn">
            Brandschutzplanung, Türenplanung und Qualitätssicherung von zertifizierten Experten
          </h2>
          <p className="text-lg lg:text-xl text-secondary/80 mb-8 animate-fadeIn">
            Seit über 30 Jahre Ihr verlässlicher Partner für Brandschutz- und
            Fluchtwegslösungen. Wir garantieren höchste Qualität und Sicherheit
            für Ihr Gebäude durch TÜV-zertifizierte Sachverständige.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors animate-fadeIn"
            aria-label="Kontaktieren Sie uns für Brandschutzberatung"
          >
            Kontaktieren Sie uns
            <ArrowRight size={20} />
          </button>
          
          {/* Unsichtbare SEO-Überschriften und Links */}
          <div className="sr-only" aria-hidden="true">
            <h3>Flucht und Rettungsplan Erstellung in Stuttgart und Bayern</h3>
            <h3>Brandschutzhelfer Ausbildung und Zertifizierung in Baden-Württemberg</h3>
            <h3>Professionelle Brandschutzunterweisung und Brandschutzkonzepte</h3>
            <h3>Erstklassige Türenplanung Brandschutz und Fluchtwegeplanung</h3>
            <h3>Brandschutzverordnung Baden-Württemberg Expertenberatung</h3>
            <h3>Feuerwehrplan erstellen durch zertifizierte Brandschutzexperten</h3>
            
            {/* Neue SEO-Überschriften basierend auf der Keyword-Recherche */}
            <h3>Vorbeugender, Abwehrender und Organisatorischer Brandschutz</h3>
            <h3>Brandschutzhelfer Ausbildung Kosten und Dauer in Stuttgart</h3>
            <h3>Brandschutzordnung Teil A B C nach DIN 14096</h3>
            <h3>Brandschutzkonzept Inhalt und Schutzziele für Ihr Gebäude</h3>
            <h3>Brandschutzbeauftragter Pflichten und Aufgaben</h3>
            <h3>DIN ISO 23601 Flucht- und Rettungsplan Erstellung</h3>
            <h3>Risikobewertung Brandschutz für Unternehmen in Baden-Württemberg</h3>
            <h3>Anlagentechnischer Brandschutz und Wartung von Brandschutzanlagen</h3>
            <h3>Brandschutz in Krankenhäusern, JVA und Flughäfen</h3>
            <h3>Brandschutztüren und Rauch- und Wärmeabzugsanlagen (RWA)</h3>
            
            {/* Unsichtbare interne Verlinkungen für SEO */}
            <nav>
              <p>Entdecken Sie unsere Brandschutz-Services:</p>
              <ul>
                <li><a href="https://brandschutz-arnold.de/dienstleistungen/brandschutzplanung">Brandschutzplanung</a></li>
                <li><a href="https://brandschutz-arnold.de/dienstleistungen/tuerenplanung">Türenplanung</a></li>
                <li><a href="https://brandschutz-arnold.de/dienstleistungen/brandschutzhelfer-ausbildung">Brandschutzhelfer Ausbildung</a></li>
                <li><a href="https://brandschutz-arnold.de/dienstleistungen/flucht-und-rettungsplaene">Flucht- und Rettungspläne</a></li>
                <li><a href="https://brandschutz-arnold.de/dienstleistungen/brandschutzkonzepte">Brandschutzkonzepte</a></li>
                <li><a href="https://brandschutz-arnold.de/dienstleistungen/feuerwehr-einsatzplaene">Feuerwehr-Einsatzpläne</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
