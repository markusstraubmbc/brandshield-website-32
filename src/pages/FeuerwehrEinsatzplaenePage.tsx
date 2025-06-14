
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Map, Shield, Users, Building, Clock, FileCheck } from "lucide-react";

const FeuerwehrEinsatzplaenePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-white to-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
                Feuerwehr Einsatzpläne: Professionelle Einsatzvorbereitung
              </h1>
              <p className="text-lg lg:text-xl text-secondary/80 mb-8">
                Detaillierte Feuerwehrpläne nach DIN 14095 für effektive Einsatzplanung 
                und schnelle Orientierung im Ernstfall.
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
                  Feuerwehr-Einsatzpläne sind unverzichtbare Hilfsmittel für die Feuerwehr zur schnellen 
                  Orientierung und effektiven Einsatzführung. Unsere Pläne nach DIN 14095 enthalten alle 
                  einsatzrelevanten Informationen wie Zufahrten, Wasserversorgung, Brandschutzeinrichtungen, 
                  Gefahrstoffe und besondere Risiken. So können Einsatzkräfte im Notfall sofort die 
                  richtige Strategie entwickeln.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Map className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Feuerwehrpläne</h3>
                  <p className="text-secondary/80">Normkonforme Einsatzpläne nach DIN 14095</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Shield className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Laufkarten</h3>
                  <p className="text-secondary/80">Detaillierte Laufkarten für Einsatzleiter</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Users className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Einsatztaktik</h3>
                  <p className="text-secondary/80">Taktische Informationen für die Einsatzführung</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Building className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Gebäudedaten</h3>
                  <p className="text-secondary/80">Umfassende Objektinformationen und Risikobewertung</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Clock className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Schnelle Orientierung</h3>
                  <p className="text-secondary/80">Sofortige Übersicht für effektive Einsatzplanung</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <FileCheck className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Regelmäßige Updates</h3>
                  <p className="text-secondary/80">Aktuelle Pläne durch regelmäßige Überprüfung</p>
                </div>
              </div>

              {/* Keywords */}
              <div className="mt-16 p-6 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-bold text-secondary mb-4">Unser Service:</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Feuerwehr Einsatzpläne", "Feuerwehrpläne", "DIN 14095", "Laufkarten", 
                    "Einsatztaktik", "Objektinformationen", "Feuerwehr Lageplan", "Einsatzplanung"
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

export default FeuerwehrEinsatzplaenePage;
