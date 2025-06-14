
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, FileCheck, Users, Award, Shield, CheckCircle } from "lucide-react";

const BrandschutzbegehungenPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-white to-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
                Brandschutzbegehungen und Gutachten: Bestandsaufnahme und Optimierung
              </h1>
              <p className="text-lg lg:text-xl text-secondary/80 mb-8">
                Professionelle Begehungen zur Überprüfung der Brandschutzvorschriften 
                und frühzeitigen Mängelerkennung.
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
                  Regelmäßige Brandschutzbegehungen sind unerlässlich, um die Einhaltung der 
                  Brandschutzvorschriften zu überprüfen und potenzielle Mängel frühzeitig zu erkennen. 
                  Unsere Sachverständigen führen professionelle Begehungen durch, erstellen detaillierte 
                  Brandschutzgutachten und zeigen Ihnen Optimierungspotenziale auf. Wir unterstützen Sie 
                  auch bei der Mängelbeseitigung und der Abnahme von Brandschutzanlagen.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Search className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Brandschutzbegehung</h3>
                  <p className="text-secondary/80">Systematische Überprüfung aller brandschutztechnischen Einrichtungen</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <FileCheck className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Brandschutzgutachten</h3>
                  <p className="text-secondary/80">Detaillierte Dokumentation des Brandschutzzustandes</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Users className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Sachverständige</h3>
                  <p className="text-secondary/80">Zertifizierte Brandschutz-Sachverständige mit langjähriger Erfahrung</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Award className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Mängelbehebung</h3>
                  <p className="text-secondary/80">Unterstützung bei der fachgerechten Beseitigung von Mängeln</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Shield className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Brandschutzprüfung</h3>
                  <p className="text-secondary/80">Regelmäßige Prüfung zur Sicherstellung der Funktionsfähigkeit</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <CheckCircle className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Anlagen-Abnahme</h3>
                  <p className="text-secondary/80">Professionelle Abnahme von Brandschutzanlagen</p>
                </div>
              </div>

              {/* Keywords */}
              <div className="mt-16 p-6 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-bold text-secondary mb-4">Unsere Prüfleistungen:</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Brandschutzbegehung", "Brandschutzgutachten", "Brandschutzprüfung", 
                    "Brandschutz Sachverständiger", "Brandschutz Mängelbehebung", "Brandschutz Abnahme"
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

export default BrandschutzbegehungenPage;
