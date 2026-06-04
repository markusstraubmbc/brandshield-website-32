
import { trackPhoneClick } from "@/lib/tracking";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceSidebar from "@/components/ServiceSidebar";
import { Lock, Shield, Eye, AlertTriangle, CheckCircle, Phone } from "lucide-react";

const SabotageschutzPage = () => {
  useEffect(() => {
    document.title = "Sabotageschutz Infrastruktur & Außenbereich | Arnold Brandschutz Stuttgart";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Professioneller Sabotageschutz für Infrastruktur und Außenbereich – Schutz von Stromleitungen, Versorgungseinrichtungen. TÜV-zertifiziert, Brandschutz Arnold Stuttgart.");
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
                Sabotageschutz der Infrastruktur
              </h1>
              <p className="text-lg lg:text-xl text-secondary/80 mb-4">
                Professioneller Sabotageschutz für Stromleitungen, Versorgungseinrichtungen und kritische Infrastruktur im Innen- und Außenbereich.
              </p>
              <p className="text-lg text-secondary/80 mb-8">
                Als zertifizierte Brandschutz-Experten in Stuttgart und Baden-Württemberg planen und realisieren wir Schutzkonzepte gegen vorsätzliche Beschädigung Ihrer Infrastruktur.
              </p>
              <a
                href="tel:+4971145145212"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors" onClick={() => trackPhoneClick(window.location.pathname)}
              >
                <Phone size={20} />
                Jetzt beraten lassen
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
                  Der Sabotageschutz der Infrastruktur ist ein zunehmend wichtiger Aspekt moderner Gebäude- und Anlagensicherheit.
                  Kritische Versorgungseinrichtungen – von Stromleitungen über Datenleitungen bis hin zu Sicherheitssystemen –
                  müssen sowohl im Innen- als auch im Außenbereich vor vorsätzlicher Beschädigung geschützt werden.
                  Arnold Brandschutz bietet Ihnen umfassende Lösungen für den Sabotageschutz aus einer Hand.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><Eye className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Schwachstellenanalyse</h3>
                  <p className="text-secondary/80">Systematische Erfassung und Bewertung aller Schwachstellen in der Gebäudeinfrastruktur</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><Lock className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Sabotageschutz Außenbereich</h3>
                  <p className="text-secondary/80">Schutz von Stromleitungen, Transformatoren und Versorgungseinrichtungen im Außenbereich gegen Sabotage</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><Shield className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Infrastrukturschutz</h3>
                  <p className="text-secondary/80">Planung und Umsetzung von Schutzmaßnahmen für sicherheitskritische Infrastruktur und Versorgungsanlagen</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><AlertTriangle className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Risikobeurteilung</h3>
                  <p className="text-secondary/80">Fachkundige Bewertung des Sabotageschutz-Bedarfs für Ihre spezifische Anlage und Nutzungsart</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><CheckCircle className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Schutzkonzept</h3>
                  <p className="text-secondary/80">Erstellung eines maßgeschneiderten Sabotageschutz-Konzepts mit konkreten Maßnahmen und Prioritäten</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><Lock className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Dokumentation</h3>
                  <p className="text-secondary/80">Rechtssichere Dokumentation aller Sabotageschutz-Maßnahmen für Behörden und Versicherungen</p>
                </div>
              </div>

              {/* Anwendungsbereiche */}
              <div className="mt-16 p-8 bg-muted/50 rounded-lg">
                <h2 className="text-2xl font-bold text-secondary mb-6">Anwendungsbereiche Sabotageschutz</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Gewerbeimmobilien und Bürogebäude",
                    "Industrieanlagen und Produktionsstätten",
                    "Krankenhäuser und Pflegeeinrichtungen",
                    "Flughäfen und Verkehrsinfrastruktur",
                    "Justizvollzugsanstalten (JVA)",
                    "Öffentliche Gebäude und Behörden",
                    "Rechenzentren und Serverräume",
                    "Energieversorgungsanlagen",
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
                <h3 className="text-xl font-bold text-secondary mb-4">Unsere Leistungen im Überblick:</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Sabotageschutz", "Sabotageschutz Infrastruktur", "Sabotageschutz Außenbereich",
                    "Infrastrukturschutz", "Sabotageschutz Stromleitungen", "Schutzkonzept Sabotage",
                    "Sabotageschutz Stuttgart", "Sabotageschutz Baden-Württemberg"
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
                  Gerne beraten wir Sie zum Sabotageschutz für Ihre Infrastruktur. Kontaktieren Sie uns für ein unverbindliches Erstgespräch.
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

export default SabotageschutzPage;
