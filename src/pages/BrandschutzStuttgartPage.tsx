
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Building, Shield, Users, Award, CheckCircle } from "lucide-react";

const BrandschutzStuttgartPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-white to-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
                Brandschutz Stuttgart: Ihr lokaler Experte für Sicherheit
              </h1>
              <p className="text-lg lg:text-xl text-secondary/80 mb-8">
                Professionelle Brandschutzlösungen in Stuttgart und Region. 
                Von der Beratung bis zur Umsetzung - Ihr Partner vor Ort.
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
                  Als Ihr lokaler Brandschutz-Experte in Stuttgart bieten wir umfassende Dienstleistungen 
                  für Unternehmen, öffentliche Einrichtungen und Privatpersonen. Durch unsere regionale 
                  Nähe kennen wir die lokalen Besonderheiten, Behörden und Vorschriften in Stuttgart 
                  und Baden-Württemberg. Schnelle Reaktionszeiten und persönlicher Service sind 
                  garantiert.
                </p>
              </div>

              {/* Regional Services */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <MapPin className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Lokale Expertise</h3>
                  <p className="text-secondary/80">Kenntnis der regionalen Vorschriften und Behörden</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Building className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Stuttgart-Projekte</h3>
                  <p className="text-secondary/80">Erfahrung mit Flughafen Stuttgart und weiteren Großprojekten</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Shield className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Schnelle Reaktion</h3>
                  <p className="text-secondary/80">Kurze Anfahrtswege für schnelle Unterstützung</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Users className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Persönlicher Service</h3>
                  <p className="text-secondary/80">Direkter Ansprechpartner vor Ort</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Award className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Referenzen Region</h3>
                  <p className="text-secondary/80">Zahlreiche erfolgreiche Projekte in Stuttgart und Umgebung</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <CheckCircle className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Baden-Württemberg</h3>
                  <p className="text-secondary/80">Spezialist für LBO Baden-Württemberg</p>
                </div>
              </div>

              {/* Regional Keywords */}
              <div className="mt-16 p-6 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-bold text-secondary mb-4">Unser Einzugsgebiet:</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Brandschutz Stuttgart", "Brandschutz Baden-Württemberg", "Brandschutz Esslingen", 
                    "Brandschutz Ludwigsburg", "Brandschutz Böblingen", "Brandschutz Sindelfingen", 
                    "Brandschutz Leinfelden-Echterdingen", "Brandschutz Filderstadt"
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

export default BrandschutzStuttgartPage;
