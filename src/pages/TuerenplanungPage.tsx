
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DoorClosed, Shield, Wrench, FileCheck, Clock, Users } from "lucide-react";

const TuerenplanungPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-white to-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
                Türenplanung: Sicherheit und Funktionalität perfekt vereint
              </h1>
              <p className="text-lg lg:text-xl text-secondary/80 mb-8">
                Professionelle Türenplanung für alle Anforderungen - von Standard- bis 
                Sicherheitstüren mit modernster Technik.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-secondary/80 mb-8">
                  Türplanung jeglicher Art ist unser Spezialgebiet. Wir planen und setzen technische 
                  Türausstattungen um, einschließlich Fluchttürterminals, Automatisierung von Türen, 
                  Sicherheitstechnik und Verkabelung. Unsere Expertise umfasst Begutachtung und 
                  Bestandsaufnahme jeglicher Türen sowie Einbau, Wartung und Instandhaltung von 
                  Rauch-, Brand-, Flucht- und Sicherheitstüren.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <DoorClosed className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Türplanung</h3>
                  <p className="text-secondary/80">Umfassende Planung aller Türtypen und Ausstattungen</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Shield className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Fluchttürterminals</h3>
                  <p className="text-secondary/80">Moderne Fluchtwegtechnik und Notausgangssteuerung</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Wrench className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Türautomatisierung</h3>
                  <p className="text-secondary/80">Automatische Türsysteme mit Brandschutzfunktion</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <FileCheck className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Sicherheitstechnik</h3>
                  <p className="text-secondary/80">Zutrittskontrolle und Sicherheitssysteme</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Clock className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Wartung & Service</h3>
                  <p className="text-secondary/80">Regelmäßige Wartung und Instandhaltung</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Users className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Bestandsaufnahme</h3>
                  <p className="text-secondary/80">Begutachtung und Bewertung vorhandener Türen</p>
                </div>
              </div>

              {/* Keywords */}
              <div className="mt-16 p-6 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-bold text-secondary mb-4">Unsere Türentechnik:</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Türenplanung", "Fluchttürterminals", "Türautomatisierung", 
                    "Sicherheitstechnik", "Verkabelung", "Türwartung", 
                    "Bestandsaufnahme Türen", "technische Türausstattung"
                  ].map((keyword) => (
                    <span key={keyword} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TuerenplanungPage;
