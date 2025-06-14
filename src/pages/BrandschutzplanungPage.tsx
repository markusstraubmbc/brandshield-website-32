
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Building, Users, Shield, CheckCircle, Award } from "lucide-react";

const BrandschutzplanungPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-white to-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
                Brandschutzplanung: Sicherheit von Anfang an
              </h1>
              <p className="text-lg lg:text-xl text-secondary/80 mb-8">
                Professionelle Brandschutzplanung für Neubauten und Bestandsgebäude. 
                Von der ersten Idee bis zur finalen Umsetzung.
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
                  Eine durchdachte Brandschutzplanung ist der Grundstein für die Sicherheit jedes Gebäudes. 
                  Wir entwickeln maßgeschneiderte Brandschutzkonzepte, die alle baurechtlichen Anforderungen 
                  erfüllen und optimalen Schutz für Personen und Sachwerte bieten. Unsere Planung umfasst 
                  bauliche, anlagentechnische und organisatorische Maßnahmen nach den neuesten Standards 
                  und Vorschriften.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <FileText className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Brandschutzkonzept</h3>
                  <p className="text-secondary/80">Umfassende Konzepte nach Musterbauordnung und LBO</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Building className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Baulicher Brandschutz</h3>
                  <p className="text-secondary/80">Planung von Brandwänden, Brandabschnitten und Fluchtwegen</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Users className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Anlagentechnischer Brandschutz</h3>
                  <p className="text-secondary/80">Brandmelde-, Lösch- und Entrauchungsanlagen</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Shield className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-Bold text-secondary mb-3">Organisatorischer Brandschutz</h3>
                  <p className="text-secondary/80">Brandschutzordnung und Evakuierungskonzepte</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <CheckCircle className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Genehmigungsplanung</h3>
                  <p className="text-secondary/80">Brandschutznachweise für Baugenehmigungsverfahren</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Award className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Sonderbauten</h3>
                  <p className="text-secondary/80">Spezialplanung für komplexe Gebäudetypen</p>
                </div>
              </div>

              {/* Keywords */}
              <div className="mt-16 p-6 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-bold text-secondary mb-4">Unser Planungsservice:</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Brandschutzplanung", "Brandschutzkonzept", "baulicher Brandschutz", 
                    "anlagentechnischer Brandschutz", "organisatorischer Brandschutz", 
                    "Brandschutznachweis", "Sonderbauten", "Genehmigungsplanung"
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

export default BrandschutzplanungPage;
