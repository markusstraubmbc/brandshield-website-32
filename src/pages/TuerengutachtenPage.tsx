
import { trackPhoneClick } from "@/lib/tracking";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceSidebar from "@/components/ServiceSidebar";
import { FileCheck, Search, ClipboardList, Award, CheckCircle, Phone, DoorClosed } from "lucide-react";

const TuerengutachtenPage = () => {
  useEffect(() => {
    document.title = "Türengutachten erstellen – Türgutachter Stuttgart | Arnold Brandschutz";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Rechtssichere Türengutachten für Brandschutztüren, Sicherheitstüren & Fluchttüren. EIPOS-Sachverständiger Jürgen Arnold, Stuttgart – Türgutachten schnell & zuverlässig.");
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-white to-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
                Türengutachten erstellen
              </h1>
              <p className="text-lg lg:text-xl text-secondary/80 mb-4">
                Rechtssichere Türengutachten für Brandschutztüren, Rauchschutztüren, Sicherheitstüren und Fluchttüren – von einem TÜV- und EIPOS-zertifizierten Sachverständigen.
              </p>
              <p className="text-lg text-secondary/80 mb-8">
                Jürgen Arnold erstellt fachkundige Türengutachten für Behördenabnahmen, Bestandsaufnahmen, Sanierungen und Haftungsfragen in Stuttgart und ganz Baden-Württemberg.
              </p>
              <a
                href="tel:+4971145145212"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors" onClick={() => trackPhoneClick(window.location.pathname)}
              >
                <Phone size={20} />
                Gutachten anfragen
              </a>
            </div>
          </div>
        </section>

        {/* Main Content + Sidebar */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto">
            <div className="flex-1 min-w-0">
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-secondary/80">
                  Ein professionelles Türengutachten ist unverzichtbar für die Rechtssicherheit beim Betrieb von Brandschutz-, Rauchschutz-
                  und Sicherheitstüren. Als geprüfter Sachverständiger für vorbeugenden Brandschutz (EIPOS, Reg.-Nr. 1294-ST-01-2017)
                  und Fachplaner (TÜV Süd Akademie) erstellt Jürgen Arnold rechtssichere Türengutachten für alle Türarten und Nutzungsklassen.
                </p>
              </div>

              {/* Gutachten-Leistungen */}
              <h2 className="text-2xl font-bold text-secondary mb-8">Unsere Türengutachten-Leistungen</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><Search className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Bestandsaufnahme</h3>
                  <p className="text-secondary/80">Systematische Erfassung und Dokumentation aller Türen im Gebäude – Ist-Zustand, Mängel, Handlungsbedarf</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><DoorClosed className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Begutachtung Türen</h3>
                  <p className="text-secondary/80">Fachkundige Beurteilung von Brandschutztüren, Rauchschutztüren, Sicherheitstüren und Fluchttüren jeglicher Art</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><ClipboardList className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Mängelprotokoll</h3>
                  <p className="text-secondary/80">Detaillierte Dokumentation von Mängeln mit konkreten Handlungsempfehlungen und Priorisierung</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><FileCheck className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Behördengutachten</h3>
                  <p className="text-secondary/80">Erstellung rechtssicherer Gutachten zur Vorlage bei Behörden, für Baugenehmigungen und Abnahmen</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><Award className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Zertifizierter Sachverständiger</h3>
                  <p className="text-secondary/80">EIPOS-geprüfter Sachverständiger (Reg.-Nr. 1294-ST-01-2017) und TÜV Süd Fachplaner für vorbeugenden Brandschutz</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><CheckCircle className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Haftungsschutz</h3>
                  <p className="text-secondary/80">Rechtssichere Dokumentation als Nachweis für die Erfüllung gesetzlicher Betreiberpflichten</p>
                </div>
              </div>

              {/* Türarten */}
              <div className="mt-16 p-8 bg-muted/50 rounded-lg">
                <h2 className="text-2xl font-bold text-secondary mb-6">Türarten für Gutachten</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Brandschutztüren (T30, T60, T90)",
                    "Rauchschutztüren (RS)",
                    "Fluchttüren und Notausgänge",
                    "Sicherheitstüren (RC-Klassen)",
                    "Automatische Türsysteme",
                    "Türen mit Fluchttürterminal",
                    "Türen mit Zutrittskontrolle",
                    "Türen in Treppenhäusern und Fluchtwegen",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-secondary/80">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Keywords */}
              <div className="mt-12 p-6 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-bold text-secondary mb-4">Türengutachten – Leistungen im Überblick:</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Türengutachten", "Türen Gutachten erstellen", "Türgutachter Stuttgart",
                    "Türgutachten Pflicht", "Begutachtung Türen", "Sachverständiger Türen",
                    "Brandschutztüren Gutachten", "Türengutachten Baden-Württemberg"
                  ].map((keyword) => (
                    <span key={keyword} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 text-center">
                <p className="text-lg text-secondary/80 mb-6">
                  Sie benötigen ein rechtssicheres Türengutachten? Kontaktieren Sie uns – wir beraten Sie gerne und erstellen Ihr Gutachten schnell und zuverlässig.
                </p>
                <a
                  href="tel:+4971145145212"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors" onClick={() => trackPhoneClick(window.location.pathname)}
                >
                  <Phone size={20} />
                  +49 (0) 711 – 45145212
                </a>
              </div>
            </div>
            <ServiceSidebar />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TuerengutachtenPage;
