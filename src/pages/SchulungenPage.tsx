
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GraduationCap, Users, Shield, Award, BookOpen, UserCheck } from "lucide-react";

const SchulungenPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-white to-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
                Schulungen und Unterweisungen: Sensibilisierung und Kompetenzaufbau
              </h1>
              <p className="text-lg lg:text-xl text-secondary/80 mb-8">
                Brandschutz ist eine Aufgabe, die alle betrifft. Professionelle Schulungen 
                und praxisnahe Unterweisungen für Ihre Mitarbeiter.
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
                  Brandschutz ist eine Aufgabe, die alle betrifft. Daher bieten wir auch Schulungen 
                  und Unterweisungen für Ihre Mitarbeiter an. Von der Brandschutzhelfer-Ausbildung 
                  bis hin zu spezifischen Schulungen für Brandschutzbeauftragte – wir vermitteln 
                  praxisnahes Wissen und sensibilisieren für die Bedeutung des Brandschutzes.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><GraduationCap className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Brandschutzschulung</h3>
                  <p className="text-secondary/80">Umfassende Schulungen für alle Mitarbeiterbereiche</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><Users className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Brandschutzhelfer Ausbildung</h3>
                  <p className="text-secondary/80">Zertifizierte Ausbildung nach DGUV Information 205-023</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><Shield className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Brandschutzunterweisung</h3>
                  <p className="text-secondary/80">Regelmäßige Unterweisungen für alle Beschäftigten</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><Award className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Brandschutzbeauftragter Schulung</h3>
                  <p className="text-secondary/80">Spezielle Schulungen für betriebliche Brandschutzbeauftragte</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><BookOpen className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Evakuierungsübung</h3>
                  <p className="text-secondary/80">Praktische Übungen für den Ernstfall</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><UserCheck className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Praxisnahes Wissen</h3>
                  <p className="text-secondary/80">Realitätsnahe Schulungsinhalte für maximalen Lernerfolg</p>
                </div>
              </div>

              {/* Keywords */}
              <div className="mt-16 p-6 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-bold text-secondary mb-4">Unsere Schulungsangebote:</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Brandschutzschulung", "Brandschutzhelfer Ausbildung", "Brandschutzunterweisung", 
                    "Brandschutzbeauftragter Schulung", "Evakuierungsübung"
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

export default SchulungenPage;
