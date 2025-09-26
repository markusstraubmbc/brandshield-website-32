
import {
  DoorClosed,
  Building,
  Shield,
  Briefcase,
  FileCheck,
  Blocks,
  Award,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Brandschutztüren/Türenplanung",
      icon: DoorClosed,
      description:
        "• **Begutachtung/Bestandsaufnahme** jeglicher Türen.\n• **Planung & Einbau** von Rauch-, Brand-, Flucht- & Sicherheitstüren.\n• **Umsetzung von technischen Türausstattungen** wie Fluchttürterminals & Automatisierung von Türen, einschließlich Sicherheitstechnik & Verkabelung.\n• **Wartung**, Instandhaltung von Rauch-, Brand-, Flucht- und Sicherheitstüren.",
    },
    {
      title: "Fachbauleitung Brandschutz",
      icon: Building,
      description:
        "• **Schnittstellenkoordination**: Professionelle Steuerung und Überwachung der Gewerke Türtechnik, Wände, Brandabschottungen & Brandschutzklappen.\n• **Projektmanagement**: Umsetzung von Türen, Wänden, Brandabschottungen als GU-Komplettleistung.",
    },
    {
      title: "Brandschutzbegehungen",
      icon: Shield,
      description:
        "• **Mängelbehebung**: Systematische Identifikation & Beseitigung von Gefahrenquellen nach Brandschutzbegehungen und Brandschauen.\n• **Rechtssicherheit**: Minimierung von Haftungsrisiken & Einhaltung gesetzlicher Auflagen.",
    },
    {
      title: "Brandabschottungen",
      icon: Briefcase,
      description:
        "• **Aufnahme & Begutachtung** jeglicher Brandabschottung.\n• **Fachgerechte Ausführung**: Herstellung & Einbau von Brandabschottungen.",
    },
    {
      title: "Zertifizierte rechtskonforme Brandschutzgutachten",
      icon: FileCheck,
      description:
        "• **Qualitätssicherung**: Überprüfung der korrekten Ausführung von Brandschutztüren & Abschottungen\n• **Rechtskonforme Dokumentation**: Erstellung von Gutachten zur Vorlage bei Behörden\n• **Transparenz & Sicherheit**: Umfassende Projektdokumentation als Nachweis für die gesetzlichen Betreiberpflichten.",
    },
    {
      title: "Weitere Leistungen",
      icon: Blocks,
      description:
        "• **Rauchsimulation & Tests**: Durchführung von Rauchtests an Wänden, Abschottungen u.v.m.\n• **Sabotageschutz**: Brandschutz für die Infrastruktur (Stromleitungen u.v.m.) im Außenbereich.",
    },
  ];

  const references = [
    "Flughafen Stuttgart GmbH",
    "Q2 Tower München", 
    "UKT Tübingen",
    "Agentur für Arbeit Stuttgart",
    "STRABAG",
    "S21-ARGE Flughafentunnel",
    "JVAs",
    "Krankenhäuser", 
    "Weiler & Eberhardt Depotverwaltung AG",
    "u.v.m."
  ];

  return (
    <section id="services" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-12">
          Unsere Dienstleistungen im Brandschutz
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                {service.title}
              </h3>
              <div 
                className="text-secondary/80 whitespace-pre-line"
                dangerouslySetInnerHTML={{
                  __html: service.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                }}
              />
            </div>
          ))}
        </div>
        
        {/* Referenzen Bereich */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary">
                Referenzen
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {references.map((reference, index) => (
                <div
                  key={index}
                  className="text-secondary/80 py-2 px-4 bg-muted/50 rounded-md text-center"
                >
                  {reference}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <p className="text-center text-secondary mt-12 text-lg">
          Gerne beraten wir Sie in einem persönlichen Gespräch zu Ihren individuellen Brandschutzanforderungen!
        </p>
      </div>
    </section>
  );
};

export default Services;
