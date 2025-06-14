
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Award, BookOpen, Shield, CheckCircle, Clock } from "lucide-react";

const BrandschutzhelferAusbildungPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-white to-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
                Brandschutzhelfer Ausbildung: Sicherheit durch Kompetenz
              </h1>
              <p className="text-lg lg:text-xl text-secondary/80 mb-8">
                Zertifizierte Brandschutzhelfer-Ausbildung nach DGUV Information 205-023. 
                Für mehr Sicherheit in Ihrem Unternehmen.
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
                  Brandschutzhelfer sind gesetzlich vorgeschrieben und unverzichtbar für die Sicherheit 
                  in Ihrem Unternehmen. Unsere zertifizierte Ausbildung vermittelt alle notwendigen 
                  Kenntnisse für den Ernstfall. Von der Entstehungsbrandbekämpfung bis zur 
                  Evakuierungsunterstützung - wir bereiten Ihre Mitarbeiter optimal vor.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Users className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">DGUV Zertifizierung</h3>
                  <p className="text-secondary/80">Ausbildung nach DGUV Information 205-023</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Award className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Anerkannte Zertifikate</h3>
                  <p className="text-secondary/80">Offiziell anerkannte Brandschutzhelfer-Zertifikate</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <BookOpen className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Theoretische Grundlagen</h3>
                  <p className="text-secondary/80">Brandschutzgrundlagen und rechtliche Bestimmungen</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Shield className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Praktische Übungen</h3>
                  <p className="text-secondary/80">Reale Löschübungen mit verschiedenen Feuerlöschern</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <CheckCircle className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Evakuierungsschulung</h3>
                  <p className="text-secondary/80">Training für Notfall-Evakuierung und Personenrettung</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Clock className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Auffrischungskurse</h3>
                  <p className="text-secondary/80">Regelmäßige Fortbildungen alle 3-5 Jahre</p>
                </div>
              </div>

              {/* Keywords */}
              <div className="mt-16 p-6 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-bold text-secondary mb-4">Unser Ausbildungsangebot:</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Brandschutzhelfer Ausbildung", "DGUV 205-023", "Brandschutzhelfer Zertifikat", 
                    "Löschübungen", "Evakuierungsschulung", "Brandschutzhelfer Kurs", 
                    "Brandschutzhelfer Auffrischung", "Entstehungsbrandbekämpfung"
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

export default BrandschutzhelferAusbildungPage;
