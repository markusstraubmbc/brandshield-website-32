
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
        "Türplanung jeglicher Art\nPlanung und Umsetzung von technischen Türausstattungen. (z.Bsp. Fluchttürterminals, Automatisierung von Türen), einschließlich Sicherheitstechnik und Verkabelung.\nBegutachtung/Bestandsaufnahme jeglicher Türen.\nEinbau, Wartung Instandhaltung von Rauch-, Brand-, Flucht- und Sicherheitstüren.",
    },
    {
      title: "Fachbauleitung Brandschutz",
      icon: Building,
      description:
        "Professionelle Zusammenführung von Schnittstellen im Bereich Türtechnik, Wände & Brandabschottungen und Brandschutzklappen.",
    },
    {
      title: "Brandschutzbegehungen",
      icon: Shield,
      description:
        "Komplette Umsetzung aus Brandschutzbegehungen von Brandschauen und Unterstützung im Gebäudemanagement für langfristige Sicherheit.",
    },
    {
      title: "Brandabschottungen",
      icon: Briefcase,
      description:
        "Aufnahme und Begutachtung jeglicher Brandabschottungen. Herstellung und Einbau von Brandabschottungen.",
    },
    {
      title: "Zertifizierte rechtskonforme Brandschutzgutachten",
      icon: FileCheck,
      description:
        "Qualitätssicherung im Bereich Türen\nQualitätssicherung im Bereich Brandabschottungen\nErstellung von rechtskonformer Dokumentation der umgesetzten Leistungen",
    },
    {
      title: "Weitere Leistungen:",
      icon: Blocks,
      description:
        "Rauchsimulationen\nRauchtest von Wänden / Abschottungen u.v.m\nBrandschutz & Sabotageschutz an Stromleitungen (Außenbereich Infrastruktur)\nUnterstützung bei den gesetzlichen Betreiberpflichten\nProjektmanagement: Umsetzung von Türen, Wände, Brandabschottungen als Komplettleistung",
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
              <p className="text-secondary/80 whitespace-pre-line">{service.description}</p>
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
