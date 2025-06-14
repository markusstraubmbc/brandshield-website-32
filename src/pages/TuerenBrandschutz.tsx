
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DoorClosed, Shield, CheckCircle, FileCheck, Wrench, Clock } from "lucide-react";

const TuerenBrandschutz = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-white to-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
                Türen Brandschutz: Die erste Verteidigungslinie im Brandfall
              </h1>
              <p className="text-lg lg:text-xl text-secondary/80 mb-8">
                Brandschutztüren spielen eine entscheidende Rolle im vorbeugenden Brandschutz 
                und sichern Ihre Fluchtwege zuverlässig.
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
                  Brandschutztüren spielen eine entscheidende Rolle im vorbeugenden Brandschutz. 
                  Sie dienen dazu, die Ausbreitung von Feuer und Rauch innerhalb eines Gebäudes zu 
                  verhindern und Fluchtwege zu sichern. Wir beraten Sie umfassend bei der Auswahl, 
                  Planung und Installation von Brandschutztüren, Rauchschutztüren und Brandschutzklappen, 
                  die den höchsten Sicherheitsstandards entsprechen und den geltenden Normen 
                  (z.B. DIN 4102, EN 1634) entsprechen.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <DoorClosed className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">T30 & T90 Türen</h3>
                  <p className="text-secondary/80">Feuerschutztüren mit 30 und 90 Minuten Feuerwiderstand</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Shield className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Rauchschutztüren</h3>
                  <p className="text-secondary/80">Schutz vor Rauchausbreitung und Sicherung der Fluchtwege</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <CheckCircle className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Brandschutzklappen</h3>
                  <p className="text-secondary/80">Automatische Klappen zur Brandabschottung in Lüftungsanlagen</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <FileCheck className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Normkonformität</h3>
                  <p className="text-secondary/80">Einhaltung aller DIN 4102 und EN 1634 Standards</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Wrench className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Wartung & Prüfung</h3>
                  <p className="text-secondary/80">Regelmäßige Wartung und Funktionsprüfung Ihrer Brandschutztüren</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border">
                  <Clock className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Fluchtwegsicherung</h3>
                  <p className="text-secondary/80">Zuverlässige Sicherung aller Flucht- und Rettungswege</p>
                </div>
              </div>

              {/* Keywords */}
              <div className="mt-16 p-6 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-bold text-secondary mb-4">Unser Leistungsspektrum:</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Brandschutztüren", "Rauchschutztüren", "Brandschutzklappen", "T30 Tür", 
                    "T90 Tür", "Feuerschutztüren", "Fluchtwegsicherung", "Brandschutztüren Wartung", 
                    "Brandschutztüren Prüfung", "DIN 4102", "EN 1634"
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

export default TuerenBrandschutz;
