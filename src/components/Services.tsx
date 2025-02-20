
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
      title: "Begutachtung & Bestandsaufnahme & Türenplanung",
      icon: DoorClosed,
      description:
        "Professionelle Bestandsaufnahme und Planung von Rauch-, Brand-, Flucht- und Sicherheitstüren. Spezialisiert auf Flughäfen, JVAs, Krankenhäuser, öffentliche Gebäude u.v.m..",
    },
    {
      title: "Fachbauleitung & Türtechnik",
      icon: Building,
      description:
        "Planung/Umsetzung inkl. technischer Türausstattungen (z.B. Fluchttürterminal, Automatisierung von Türen, usw.) einschließlich Einbau, Sicherheitstechnik und Verkabelung. Kundenorientierte Lösungen.",
    },
    {
      title: "Projektmanagement; Qualitätssicherung & Compliance",
      icon: Shield,
      description:
        "Professionelle Zusammenführung von Schnittstellen im Bereich Türen, Wände, Brandabschottungen, Brandschutzklappen u.v.m.. Baubegleitende Koordination, Überwachung sowie rechtskonforme Dokumentation und Unterstützung bei der Erfüllung gesetzlicher Betreiberpflichten.",
    },
    {
      title: "Wartung & Instandhaltung; Herstellung von Brandabschottungen jeglicher Art",
      icon: Briefcase,
      description:
        "Wartung und Reparaturen von Türen, Herstellung von Brandabschottungen und anderen brandschutztechnischen Einrichtungen. Umsetzung von Brandschauen. Unterstützung im Gebäudemanagement.",
    },
    {
      title: "Rauchsimulationen in Gebäuden",
      icon: FileCheck,
      description:
        "Ausführung von Rauchsimulationen in Gebäuden; überprüfen der Rauchdichtigkeit von Wänden, Brandabschottungen usw.",
    },
    {
      title: "Referenzen",
      icon: Blocks,
      description:
        "Flughafen Stuttgart GmbH, Q2 Tower München, UKT Tübingen, Agentur für Arbeit Stuttgart, STRABAG, S21-ARGE Flughafentunnel u.v.m.",
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
        <p className="text-center text-secondary mt-12 text-lg">
          Gerne beraten wir Sie in einem persönlichen Gespräch!
        </p>
      </div>
    </section>
  );
};

export default Services;
