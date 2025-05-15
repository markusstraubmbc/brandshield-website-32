
import {
  DoorClosed,
  Building,
  Shield,
  Briefcase,
  FileCheck,
  Blocks,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Begutachtung, Bestandsaufnahme & Türenplanung",
      icon: DoorClosed,
      description:
        "Professionelle Bestandsaufnahme und Planung von Rauch-, Brand-, Flucht- und Sicherheitstüren. Spezialisiert auf Flughäfen, JVAs, Krankenhäuser, öffentliche Gebäude und Gewerbebauten in Stuttgart, Tübingen, München und Umgebung.",
    },
    {
      title: "Fachbauleitung & Türtechnik",
      icon: Building,
      description:
        "Planung und Umsetzung von technischen Türausstattungen (z.B. Fluchttürterminal, Automatisierung von Türen) einschließlich Einbau, Sicherheitstechnik und Verkabelung. Kundenorientierte Lösungen für höchste Brandschutzsicherheit.",
    },
    {
      title: "Projektmanagement, Qualitätssicherung & Compliance",
      icon: Shield,
      description:
        "Professionelle Zusammenführung von Schnittstellen im Bereich Türen, Wände, Brandabschottungen und Brandschutzklappen. Baubegleitende Koordination, Überwachung sowie rechtskonforme Dokumentation und Unterstützung bei der Erfüllung gesetzlicher Betreiberpflichten.",
    },
    {
      title: "Wartung, Instandhaltung & Herstellung von Brandabschottungen",
      icon: Briefcase,
      description:
        "Wartung und Reparaturen von Brandschutztüren, Herstellung von Brandabschottungen und anderen brandschutztechnischen Einrichtungen. Umsetzung von Brandschauen und Unterstützung im Gebäudemanagement für langfristige Sicherheit.",
    },
    {
      title: "Rauchsimulationen in Gebäuden",
      icon: FileCheck,
      description:
        "Ausführung von Rauchsimulationen in Gebäuden; Überprüfung der Rauchdichtigkeit von Wänden, Brandabschottungen und anderen baulichen Elementen. Zertifizierte Gutachten durch unsere Sachverständigen.",
    },
    {
      title: "Referenzen",
      icon: Blocks,
      description:
        "Flughafen Stuttgart GmbH, Q2 Tower München, UKT Tübingen, Agentur für Arbeit Stuttgart, STRABAG, S21-ARGE Flughafentunnel und viele weitere namhafte Kunden vertrauen auf unsere Expertise im Brandschutz.",
    },
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
              <p className="text-secondary/80">{service.description}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-secondary mt-12 text-lg">
          Gerne beraten wir Sie in einem persönlichen Gespräch zu Ihren individuellen Brandschutzanforderungen!
        </p>
      </div>
    </section>
  );
};

export default Services;
