
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceSidebar from "@/components/ServiceSidebar";
import { Wrench, Building, Shield, FileCheck, CheckCircle, Phone, Award } from "lucide-react";

const GesamtsanierungPage = () => {
  useEffect(() => {
    document.title = "Gesamtsanierung Brandschutz mit Sachverständigenbegleitung | Arnold Stuttgart";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Brandschutz-Gesamtsanierung: Wände, Brandabschottungen, Brandschutztüren aus einer Hand inkl. Sachverständigenbegleitung. TÜV-zertifiziert, Arnold Brandschutz Stuttgart.");
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
                Gesamtsanierung Brandschutz
              </h1>
              <p className="text-lg lg:text-xl text-secondary/80 mb-4">
                Komplett-Brandschutz aus einer Hand: Wände, Brandabschottungen, Brandschutztüren – inkl. zertifizierter Sachverständigenbegleitung.
              </p>
              <p className="text-lg text-secondary/80 mb-8">
                Arnold Brandschutz übernimmt die komplette Brandschutz-Gesamtsanierung Ihres Gebäudes als GU-Komplettleistung – von der Bestandsaufnahme bis zur behördlichen Abnahme.
              </p>
              <a
                href="tel:+4971145145212"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
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
                  Eine Brandschutz-Gesamtsanierung erfordert präzise Koordination aller Gewerke und tiefgreifendes Fachwissen.
                  Jürgen Arnold, TÜV-zertifizierter Sachverständiger und EIPOS-geprüfter Fachplaner für vorbeugenden Brandschutz,
                  begleitet Ihr Projekt persönlich von der ersten Bestandsaufnahme bis zur rechtssicheren Abnahme.
                  Als Generalunternehmer übernehmen wir die vollständige Koordination aller Gewerke –
                  Brandschutzwände, Brandabschottungen und Brandschutztüren aus einer Hand.
                </p>
              </div>

              {/* Leistungsumfang */}
              <h2 className="text-2xl font-bold text-secondary mb-8">Leistungsumfang Gesamtsanierung</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><Building className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Brandschutzwände</h3>
                  <p className="text-secondary/80">Sanierung, Herstellung und Instandsetzung von Brandschutzwänden nach aktuellen Normen und Bauvorschriften</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><Shield className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Brandabschottungen</h3>
                  <p className="text-secondary/80">Aufnahme, Begutachtung und fachgerechte Herstellung aller Brandabschottungen inkl. Fibersilikatplatten und Brandschutzkissen</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><Wrench className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Brandschutztüren</h3>
                  <p className="text-secondary/80">Einbau, Erneuerung und Wartung von Rauch-, Brand-, Flucht- und Sicherheitstüren gemäß DIN-Normen</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><FileCheck className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Sachverständigenbegleitung</h3>
                  <p className="text-secondary/80">Begleitung durch zertifizierten Brandschutz-Sachverständigen (TÜV Süd, EIPOS) von der Planung bis zur Behördenabnahme</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><CheckCircle className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Schnittstellenkoordination</h3>
                  <p className="text-secondary/80">Professionelle Steuerung aller Gewerke: Türtechnik, Wände, Brandabschottungen und Brandschutzklappen aus einer Hand</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><Award className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Qualitätssicherung</h3>
                  <p className="text-secondary/80">Rechtskonforme Dokumentation und Qualitätssicherung als Nachweis für gesetzliche Betreiberpflichten</p>
                </div>
              </div>

              {/* Vorteile */}
              <div className="mt-16 p-8 bg-muted/50 rounded-lg">
                <h2 className="text-2xl font-bold text-secondary mb-6">Ihre Vorteile bei der Gesamtsanierung mit Arnold Brandschutz</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Alles aus einer Hand – ein Ansprechpartner",
                    "TÜV- und EIPOS-zertifizierter Sachverständiger",
                    "30 Jahre Erfahrung in der Brandschutzsanierung",
                    "Rechtssichere Dokumentation für Behörden",
                    "Koordination aller Gewerke inklusive",
                    "Referenzen: Flughafen Stuttgart, UKT Tübingen, JVAs",
                    "Sachverständigenbegleitung inbegriffen",
                    "Einhaltung aller aktuellen Normen und Vorschriften",
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
                    "Gesamtsanierung Brandschutz", "Brandschutz Komplettsanierung", "Brandschutz Sachverständigenbegleitung",
                    "Brandschutzwände Sanierung", "Brandabschottungen erneuern", "Brandschutztüren Sachverständiger",
                    "GU-Komplettleistung Brandschutz", "Brandschutz Generalsanierung Stuttgart"
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
                  Gerne beraten wir Sie zur Brandschutz-Gesamtsanierung Ihres Gebäudes. Kontaktieren Sie uns für ein unverbindliches Gespräch.
                </p>
                <a
                  href="tel:+4971145145212"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
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

export default GesamtsanierungPage;
