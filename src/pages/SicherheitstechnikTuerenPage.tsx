
import { trackPhoneClick } from "@/lib/tracking";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceSidebar from "@/components/ServiceSidebar";
import { Lock, Zap, Settings, Shield, CheckCircle, Phone, DoorClosed } from "lucide-react";

const SicherheitstechnikTuerenPage = () => {
  useEffect(() => {
    document.title = "Sicherheitstechnik Türen planen – Fluchttürterminal & Zutrittskontrolle | Arnold Stuttgart";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Planung von Sicherheitstechnik in Türen jeglicher Art: Fluchttürterminals, Zutrittskontrolle, Automatisierung, Verkabelung. Arnold Brandschutz Stuttgart – TÜV-zertifiziert.");
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
                Sicherheitstechnik in Türen – Planung & Umsetzung
              </h1>
              <p className="text-lg lg:text-xl text-secondary/80 mb-4">
                Planung von Sicherheitstechnik in Türen jeglicher Art: Fluchttürterminals, Zutrittskontrolle, Automatisierung und Verkabelung.
              </p>
              <p className="text-lg text-secondary/80 mb-8">
                Arnold Brandschutz plant und realisiert die gesamte Sicherheitstechnik für Türen in Gebäuden aller Art – von der Konzeption bis zur Inbetriebnahme.
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
                  Die Planung von Sicherheitstechnik in Türen erfordert fundiertes Fachwissen in Brandschutz, Gebäudetechnik
                  und Sicherheitssystemen. Arnold Brandschutz plant und koordiniert die gesamte technische Ausstattung von Türen
                  jeglicher Art – ob Fluchttürterminals, elektronische Zutrittskontrollsysteme, automatische Türöffner oder
                  komplexe Verkabelungskonzepte. Wir übernehmen Planung, Koordination und Überwachung der Umsetzung aus einer Hand.
                </p>
              </div>

              {/* Services Grid */}
              <h2 className="text-2xl font-bold text-secondary mb-8">Unsere Leistungen Sicherheitstechnik Türen</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><Zap className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Fluchttürterminals</h3>
                  <p className="text-secondary/80">Planung und Einbau von Fluchttürterminals (FTT) für gesicherte Fluchttüren nach aktuellen Normen</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><Lock className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Zutrittskontrolle</h3>
                  <p className="text-secondary/80">Planung und Integration von Zutrittskontrollsystemen in Türen – kartenbasiert, biometrisch oder PIN</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><Settings className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Türautomatisierung</h3>
                  <p className="text-secondary/80">Automatisierung von Türen inkl. Brandschutzfunktion: Feststellanlagen, automatische Schließer, Antriebssysteme</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><Zap className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Verkabelung & Elektroplanung</h3>
                  <p className="text-secondary/80">Komplette Verkabelungsplanung für alle technischen Türkomponenten – koordiniert mit anderen Gewerken</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><DoorClosed className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Integration Brandmeldeanlage</h3>
                  <p className="text-secondary/80">Anbindung von Türsystemen an die Brandmeldeanlage für automatische Öffnung/Schließung im Brandfall</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><Shield className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Normen & Compliance</h3>
                  <p className="text-secondary/80">Planung gemäß DIN EN 54, DIN 18650, VdS-Richtlinien und allen relevanten Brandschutz-Vorschriften</p>
                </div>
              </div>

              {/* Türarten */}
              <div className="mt-16 p-8 bg-muted/50 rounded-lg">
                <h2 className="text-2xl font-bold text-secondary mb-6">Türarten für Sicherheitstechnik-Planung</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Brandschutztüren mit Feststellanlage",
                    "Fluchttüren mit Fluchttürterminal",
                    "Sicherheitstüren mit Zutrittskontrolle",
                    "Automatische Türen mit Brandschutzfunktion",
                    "Drehtüren und Schiebetüren mit Antrieb",
                    "Türen in JVA (Justizvollzugsanstalten)",
                    "Türen in Krankenhäusern und Pflegeheimen",
                    "Türen in Flughäfen und öffentlichen Gebäuden",
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
                <h3 className="text-xl font-bold text-secondary mb-4">Sicherheitstechnik Türen – Leistungen im Überblick:</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Sicherheitstechnik Türen", "Türplanung Sicherheitstechnik", "Fluchttürterminal Planung",
                    "Zutrittskontrolle Türen", "Türautomatisierung Brandschutz", "Sicherheitstür Planung Stuttgart",
                    "Türtechnik Planung", "Verkabelung Türen Brandschutz"
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
                  Wir beraten Sie zur Sicherheitstechnik-Planung für Türen jeglicher Art. Kontaktieren Sie uns für ein unverbindliches Gespräch.
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

export default SicherheitstechnikTuerenPage;
