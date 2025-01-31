import {
  DoorClosed,
  Shield,
  Building,
  Briefcase,
  Blocks,
  FileCheck,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Türtechnik-Planung & Fachbauleitung",
      icon: DoorClosed,
      description:
        "Professionelle Planung und Fachbauleitung für alle Arten von Türen (Rauch-, Brand-, Flucht- und Sicherheitstüren) inklusive technischer Ausstattung. Spezialisiert auf Flughäfen, JVAs und Krankenhäuser.",
    },
    {
      title: "Brandschutzplanung & Abschottungen",
      icon: Building,
      description:
        "Ganzheitliche Brandschutzkonzepte, Fachbauleitung (LP8) und Brandabschottungen für Neu- und Bestandsbauten. Inklusive Rauchsimulationen und Qualitätssicherung.",
    },
    {
      title: "Qualitätssicherung & Compliance",
      icon: Shield,
      description:
        "Baubegleitende Koordination, Überwachung und rechtssichere Dokumentation. Professionelle Unterstützung bei der Erfüllung gesetzlicher Betreiberpflichten.",
    },
    {
      title: "Projektmanagement",
      icon: Briefcase,
      description:
        "Professionelle Koordination von Schnittstellen im Bereich Türen, einschließlich Einbau, Sicherheitstechnik und Verkabelung.",
    },
    {
      title: "Bestandsaufnahme & Begutachtung",
      icon: FileCheck,
      description:
        "Erstaufnahme und Begutachtung von Türen und Wänden in Bestandsgebäuden. Erstellung detaillierter Türlisten für Neu- und Bestandsgebäude.",
    },
    {
      title: "Wartung & Instandhaltung",
      icon: Blocks,
      description:
        "Wartungen und Reparaturen von Türen, Brandabschottungen und anderen brandschutztechnischen Einrichtungen. Unterstützung im Gebäudemanagement.",
    },
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-12">
          Unsere Dienstleistungen
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
              <p className="text-secondary/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;