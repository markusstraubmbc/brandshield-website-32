import {
  DoorClosed,
  Shield,
  Building,
  Briefcase,
  Blocks,
  FileCheck,
  HardHat,
  Building2,
  ShieldCheck,
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
      title: "Brandschutzplanung",
      icon: Building,
      description:
        "Ganzheitliche Brandschutzkonzepte und Fachbauleitung (LP8) für Neu- und Bestandsbauten. Inklusive Rauchsimulationen und Überprüfung der Rauchdichtigkeit.",
    },
    {
      title: "Qualitätssicherung",
      icon: Shield,
      description:
        "Baubegleitende Koordination und Überwachung von Türen und Brandabschottungen. Rechtssichere Dokumentation aller Maßnahmen.",
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
      title: "Gebäudemanagement",
      icon: Building2,
      description:
        "Unterstützung und Übernahme des Gebäudemanagements im Bereich Türen. Neu: Wartungen und Reparaturen von Türen.",
    },
    {
      title: "Brandabschottungen",
      icon: Blocks,
      description:
        "Planung, Ausführung und Wartung von Brandabschottungen jeglicher Art. Komplettlösungen für maximale Sicherheit.",
    },
    {
      title: "Betreiberpflichten & Compliance",
      icon: ShieldCheck,
      description:
        "Professionelle Unterstützung bei der Erfüllung gesetzlicher Betreiberpflichten. Rechtskonforme und dokumentierte Umsetzung aller Maßnahmen.",
    },
  ];

  return (services" className="py-16 bg-muted">
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