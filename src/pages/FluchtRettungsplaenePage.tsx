
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Map, Users, Shield, FileCheck, Eye, Building } from "lucide-react";

const FluchtRettungsplaenePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-white to-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
                Flucht- und Rettungspläne: Lebensrettende Orientierung im Notfall
              </h1>
              <p className="text-lg lg:text-xl text-secondary/80 mb-8">
                Normkonforme Flucht- und Rettungspläne nach DIN ISO 23601 für sichere 
                Evakuierung und effektive Rettungsmaßnahmen.
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
                  Flucht- und Rettungspläne sind lebensrettende Orientierungshilfen, die im Notfall 
                  schnelle und sichere Evakuierung ermöglichen. Wir erstellen normkonforme Pläne nach 
                  DIN ISO 23601, die alle Fluchtwege, Notausgänge, Sammelstellen und Brandschutzeinrichtungen 
                  übersichtlich darstellen. Unsere Pläne sind sowohl für Mitarbeiter als auch für 
                  Rettungskräfte sofort verständlich.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Map className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Fluchtpläne</h3>
                  <p className="text-secondary/80">Übersichtliche Darstellung aller Fluchtwege und Notausgänge</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Users className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Rettungspläne</h3>
                  <p className="text-secondary/80">Spezielle Pläne für Rettungskräfte und Einsatzleitung</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Shield className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">DIN ISO 23601</h3>
                  <p className="text-secondary/80">Normkonforme Erstellung nach aktuellen Standards</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <FileCheck className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Digitale Pläne</h3>
                  <p className="text-secondary/80">Moderne digitale Lösungen und QR-Code Integration</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Eye className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Sichtbarkeitsanalyse</h3>
                  <p className="text-secondary/80">Optimale Platzierung für maximale Sichtbarkeit</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Building className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Gebäudespezifisch</h3>
                  <p className="text-secondary/80">Maßgeschneiderte Pläne für jede Gebäudeart</p>
                </div>
              </div>

              {/* Keywords */}
              <div className="mt-16 p-6 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-bold text-secondary mb-4">Unser Planungsservice:</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Flucht- und Rettungspläne", "Fluchtpläne", "Rettungspläne", "DIN ISO 23601", 
                    "Fluchtwege", "Notausgänge", "Sammelstellen", "digitale Fluchtpläne", "Evakuierungsplan"
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

export default FluchtRettungsplaenePage;
