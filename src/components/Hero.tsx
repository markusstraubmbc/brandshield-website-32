
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
          <p className="text-xl lg:text-2xl text-secondary/80 mb-6 animate-fadeIn">
            Seit über 30 Jahren Ihr verlässlicher Partner für Brandschutz. Wir garantieren höchste Qualität und Sicherheit für Ihr Gebäude durch TÜV-zertifizierte Sachverständige.
          </p>
          <p className="text-xl lg:text-2xl text-secondary/80 mb-8 animate-fadeIn">
            <span className="underline">Als</span> <strong>Spezialisten für Brandschutz</strong> machen wir Ihre Immobilie funktionsfähig und brandschutzsicher. 
            Dadurch schützen Sie Leben, sind rechtskonform und sparen wertvolle Zeit und Kosten. 
            Durch unsere diverse Kooperationspartner bekommen Sie den Brandschutz aus einer Hand.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors animate-fadeIn"
            aria-label="Kontaktieren Sie uns für Brandschutzberatung"
          >
            Kontaktieren Sie uns
            <ArrowRight size={20} />
          </button>
          
          {/* Optimierte SEO-Überschriften und Links */}
          <div className="sr-only" aria-hidden="true">
            <h3>Brandschutz Arnold Stuttgart - Ihr TÜV-zertifizierter Brandschutz Experte seit 30 Jahren</h3>
            <h3>Flucht und Rettungsplan Erstellung nach DIN ISO 23601 in Stuttgart und Baden-Württemberg</h3>
            <h3>Brandschutzhelfer Ausbildung Kosten und Zertifizierung in Baden-Württemberg</h3>
            <h3>Professionelle Brandschutzunterweisung und Brandschutzkonzepte für Unternehmen</h3>
            <h3>Erstklassige Türenplanung Brandschutz und Fluchtwegeplanung in Stuttgart</h3>
            <h3>Brandschutzverordnung Baden-Württemberg Expertenberatung und Umsetzung</h3>
            <h3>Feuerwehrplan erstellen durch zertifizierte Brandschutzexperten Stuttgart</h3>
            <h3>Brandschutzgutachten rechtssicher erstellen - Brandschutz Arnold</h3>
            <h3>Brandschutztüren Wartung und Instandhaltung in Stuttgart und Umgebung</h3>
            
            {/* Erweiterte SEO-Keywords für bessere Sichtbarkeit */}
            <h3>Vorbeugender, Abwehrender und Organisatorischer Brandschutz Stuttgart</h3>
            <h3>Brandschutzhelfer Ausbildung Kosten und Dauer Stuttgart Baden-Württemberg</h3>
            <h3>Brandschutzordnung Teil A B C nach DIN 14096 professionell erstellen</h3>
            <h3>Brandschutzkonzept Inhalt und Schutzziele für Ihr Gebäude Stuttgart</h3>
            <h3>Brandschutzbeauftragter Pflichten und Aufgaben Baden-Württemberg</h3>
            <h3>DIN ISO 23601 Flucht- und Rettungsplan Erstellung und Aktualisierung</h3>
            <h3>Risikobewertung Brandschutz für Unternehmen in Baden-Württemberg</h3>
            <h3>Anlagentechnischer Brandschutz und Wartung von Brandschutzanlagen</h3>
            <h3>Brandschutz in Krankenhäusern, JVA und Flughäfen - Spezialisten Stuttgart</h3>
            <h3>Brandschutztüren und Rauch- und Wärmeabzugsanlagen (RWA) Installation</h3>
            <h3>Brandabschottungen fachgerecht planen und ausführen Stuttgart</h3>
            <h3>Fachbauleitung Brandschutz und Schnittstellenkoordination</h3>
            <h3>Brandschutzbegehungen professionell durchführen Stuttgart</h3>
            <h3>Sabotageschutz für Infrastruktur und Stromleitungen Außenbereich</h3>
            <h3>Rauchsimulation und Rauchtests für Wände und Abschottungen</h3>
            
            {/* Geografische SEO-Erweiterungen */}
            <h3>Brandschutz Stuttgart Mitte, Bad Cannstatt, Vaihingen, Degerloch</h3>
            <h3>Brandschutz Esslingen, Ludwigsburg, Böblingen, Sindelfingen</h3>
            <h3>Brandschutz Reutlingen, Tübingen, Pforzheim, Heilbronn</h3>
            <h3>Brandschutz Bayern München, Nürnberg, Augsburg, Würzburg</h3>
            
            {/* Branchenspezifische SEO-Keywords */}
            <h3>Brandschutz Gewerbeimmobilien, Bürogebäude, Produktionsstätten</h3>
            <h3>Brandschutz Gesundheitswesen, Altenheime, Pflegeeinrichtungen</h3>
            <h3>Brandschutz Bildungseinrichtungen, Schulen, Universitäten</h3>
            <h3>Brandschutz Einzelhandel, Einkaufszentren, Supermärkte</h3>
            <h3>Brandschutz Industrieanlagen, Chemieunternehmen, Fabriken</h3>
            
            {/* Unsichtbare interne Verlinkungen für SEO */}
            <nav>
              <p>Entdecken Sie unsere Brandschutz-Services in Stuttgart und Baden-Württemberg:</p>
              <ul>
                <li><a href="/brandschutzplanung" title="Brandschutzplanung Stuttgart">Brandschutzplanung</a></li>
                <li><a href="/tuerenplanung" title="Türenplanung Brandschutz">Türenplanung</a></li>
                <li><a href="/brandschutzhelfer-ausbildung" title="Brandschutzhelfer Ausbildung">Brandschutzhelfer Ausbildung</a></li>
                <li><a href="/flucht-und-rettungsplaene" title="Flucht- und Rettungspläne">Flucht- und Rettungspläne</a></li>
                <li><a href="/brandschutzkonzepte" title="Brandschutzkonzepte">Brandschutzkonzepte</a></li>
                <li><a href="/feuerwehr-einsatzplaene" title="Feuerwehr-Einsatzpläne">Feuerwehr-Einsatzpläne</a></li>
                <li><a href="/brandschutzbegehungen" title="Brandschutzbegehungen">Brandschutzbegehungen</a></li>
                <li><a href="/brandschutzberatung" title="Brandschutzberatung">Brandschutzberatung</a></li>
                <li><a href="/tueren-brandschutz" title="Türen Brandschutz">Türen Brandschutz</a></li>
                <li><a href="/schulungen" title="Brandschutz Schulungen">Schulungen</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
