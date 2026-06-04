
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, CheckCircle, Users, Award, Clock, FileText } from "lucide-react";

const Brandschutzberatung = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-white to-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
                Brandschutzberatung: Fundiertes Wissen für Ihre Sicherheit
              </h1>
              <p className="text-lg lg:text-xl text-secondary/80 mb-8">
                Individuelle und fundierte Brandschutzberatung, die auf Ihre spezifischen 
                Bedürfnisse zugeschnitten ist. Von Neubauten bis Sonderbauten.
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
                  Wir bieten Ihnen eine individuelle und fundierte Brandschutzberatung, die auf Ihre 
                  spezifischen Bedürfnisse zugeschnitten ist. Egal ob es um Neubauten, Bestandsgebäude, 
                  Industrieanlagen oder Sonderbauten geht – wir analysieren Ihre Situation, identifizieren 
                  potenzielle Gefahrenquellen und entwickeln maßgeschneiderte Strategien zur Risikoreduzierung. 
                  Unsere Experten sind stets auf dem neuesten Stand der Technik und der gesetzlichen Bestimmungen.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><Shield className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Gefahrenanalyse</h3>
                  <p className="text-secondary/80">Professionelle Identifikation und Bewertung potenzieller Brandrisiken</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><CheckCircle className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Risikobewertung</h3>
                  <p className="text-secondary/80">Systematische Analyse und Bewertung aller Brandschutzrisiken</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><Users className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Brandschutzexperten</h3>
                  <p className="text-secondary/80">Erfahrene Sachverständige mit aktuellstem Fachwissen</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><Award className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Brandschutzstandards</h3>
                  <p className="text-secondary/80">Compliance mit allen relevanten DIN-Normen und VdS-Richtlinien</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><Clock className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Aktuelle Bestimmungen</h3>
                  <p className="text-secondary/80">Immer auf dem neuesten Stand der gesetzlichen Vorschriften</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><FileText className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Maßgeschneiderte Lösungen</h3>
                  <p className="text-secondary/80">Individuelle Brandschutzstrategien für Ihr Objekt</p>
                </div>
              </div>

              {/* Keywords */}
              <div className="mt-16 p-6 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-bold text-secondary mb-4">Unsere Expertise umfasst:</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Brandschutzberatung", "individuelle Brandschutzlösungen", "Gefahrenanalyse", 
                    "Risikobewertung", "Brandschutzexperten", "Brandschutzstandards", 
                    "DIN-Normen Brandschutz", "VdS Brandschutz"
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

export default Brandschutzberatung;
