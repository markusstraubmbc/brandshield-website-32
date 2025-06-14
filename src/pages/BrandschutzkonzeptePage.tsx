
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Map, Users, Building, Shield, CheckCircle } from "lucide-react";

const BrandschutzkonzeptePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-white to-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
                Brandschutzkonzepte und Brandschutzpläne: Strategie für den Ernstfall
              </h1>
              <p className="text-lg lg:text-xl text-secondary/80 mb-8">
                Detaillierte Brandschutzkonzepte als Grundlage für einen effektiven 
                Brandschutz in Ihrem Gebäude.
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
                  Ein detailliertes Brandschutzkonzept ist die Grundlage für einen effektiven Brandschutz. 
                  Wir erstellen für Sie umfassende Brandschutzkonzepte, die alle relevanten Aspekte 
                  berücksichtigen: von baulichen Brandschutzmaßnahmen über technische Brandschutzanlagen 
                  bis hin zur Organisation des Brandschutzes. Darüber hinaus fertigen wir präzise 
                  Brandschutzpläne (Laufkarten, Feuerwehrpläne, Flucht- und Rettungspläne) an, die im 
                  Notfall schnelle Orientierung und effektive Einsatzmaßnahmen ermöglichen.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <FileText className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Brandschutzkonzepte</h3>
                  <p className="text-secondary/80">Umfassende Konzepte für baulichen, anlagentechnischen und organisatorischen Brandschutz</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Map className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Feuerwehrpläne</h3>
                  <p className="text-secondary/80">Präzise Laufkarten und Einsatzpläne für die Feuerwehr</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Users className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Flucht- und Rettungspläne</h3>
                  <p className="text-secondary/80">Übersichtliche Pläne für sichere Evakuierung im Notfall</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Building className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Baulicher Brandschutz</h3>
                  <p className="text-secondary/80">Konzepte für brandschutztechnische Gebäudeausstattung</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Shield className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Anlagentechnischer Brandschutz</h3>
                  <p className="text-secondary/80">Planung von Brandmelde- und Löschanlagen</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <CheckCircle className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Brandschutzordnung</h3>
                  <p className="text-secondary/80">Erstellung von Brandschutzordnungen nach DIN 14096</p>
                </div>
              </div>

              {/* Keywords */}
              <div className="mt-16 p-6 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-bold text-secondary mb-4">Unsere Planungsleistungen:</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Brandschutzkonzepte", "Brandschutzpläne", "Feuerwehrpläne", "Flucht- und Rettungspläne", 
                    "baulicher Brandschutz", "anlagentechnischer Brandschutz", "organisatorischer Brandschutz", 
                    "Brandschutzordnung", "Brandschutzbeauftragter"
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

export default BrandschutzkonzeptePage;
