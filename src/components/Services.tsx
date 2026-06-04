
import { Link } from "react-router-dom";
import {
  DoorClosed,
  Building,
  Shield,
  FileCheck,
  Award,
  Lock,
  Wrench,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Sabotageschutz der Infrastruktur",
      icon: Lock,
      href: "/dienstleistungen/sabotageschutz",
      description:
        "• **Sabotageschutz Außenbereich**: Schutz von Stromleitungen, Versorgungseinrichtungen und kritischer Infrastruktur im Außenbereich.\n• **Infrastrukturschutz**: Analyse und Sicherung sicherheitskritischer Anlagen gegen vorsätzliche Beschädigung.\n• **Präventive Maßnahmen**: Planung und Umsetzung von Schutzkonzepten für die gesamte Gebäudeinfrastruktur.",
    },
    {
      title: "Gesamtsanierung Brandschutz",
      icon: Wrench,
      href: "/dienstleistungen/gesamtsanierung-brandschutz",
      description:
        "• **Komplett-Brandschutz aus einer Hand**: Gesamtsanierung von Brandschutzwänden, Brandabschottungen und Brandschutztüren.\n• **Sachverständigenbegleitung**: Begleitung durch zertifizierten Brandschutz-Sachverständigen von der Planung bis zur Abnahme.\n• **GU-Komplettleistung**: Schnittstellenkoordination aller Gewerke – Wände, Abschottungen, Türtechnik.",
    },
    {
      title: "Sicherheitstechnik & Türengutachten",
      icon: DoorClosed,
      href: "/dienstleistungen/sicherheitstechnik-tueren",
      description:
        "• **Planung Sicherheitstechnik Türen**: Planung von Sicherheitstechnik in Türen jeglicher Art – Fluchttürterminals, Zugangssysteme, Automatisierung & Verkabelung.\n• **Türengutachten erstellen**: Rechtssichere Begutachtung und Dokumentation jeglicher Türen für Behörden und Betreiber.\n• **Bestandsaufnahme**: Systematische Erfassung des Ist-Zustands aller Türen im Gebäude.",
    },
    {
      title: "Brandschutztüren / Türenplanung",
      icon: Building,
      href: "/dienstleistungen/tuerenplanung",
      description:
        "• **Planung & Einbau** von Rauch-, Brand-, Flucht- & Sicherheitstüren.\n• **Wartung & Instandhaltung** von Rauch-, Brand-, Flucht- und Sicherheitstüren.\n• **Technische Türausstattungen**: Umsetzung von Fluchttürterminals & Automatisierung.",
    },
    {
      title: "Brandschutzbegehungen",
      icon: Shield,
      href: "/dienstleistungen/brandschutzbegehungen",
      description:
        "• **Mängelbehebung**: Systematische Identifikation & Beseitigung von Gefahrenquellen nach Brandschutzbegehungen und Brandschauen.\n• **Rechtssicherheit**: Minimierung von Haftungsrisiken & Einhaltung gesetzlicher Auflagen.",
    },
    {
      title: "Brandabschottungen & Gutachten",
      icon: FileCheck,
      href: "/dienstleistungen/brandschutzplanung",
      description:
        "• **Aufnahme & Begutachtung** jeglicher Brandabschottung.\n• **Fachgerechte Ausführung**: Herstellung & Einbau von Brandabschottungen.\n• **Zertifizierte Brandschutzgutachten**: Rechtskonforme Dokumentation für Behörden, Nachweis für Betreiberpflichten.\n• **Rauchsimulation & Tests**: Rauchtests an Wänden und Abschottungen.",
    },
  ];

  const references = [
    { name: "Flughafen Stuttgart GmbH", sector: "Luftfahrt" },
    { name: "Q2 Tower München", sector: "Hochbau" },
    { name: "UKT Tübingen", sector: "Gesundheit" },
    { name: "Agentur für Arbeit Stuttgart", sector: "Öffentliche Hand" },
    { name: "STRABAG", sector: "Bauindustrie" },
    { name: "S21-ARGE Flughafentunnel", sector: "Infrastruktur" },
    { name: "Justizvollzugsanstalten (JVAs)", sector: "Öffentliche Hand" },
    { name: "Krankenhäuser & Kliniken", sector: "Gesundheit" },
    { name: "Weiler & Eberhardt Depotverwaltung AG", sector: "Industrie" },
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
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                {service.title}
              </h3>
              <div
                className="text-secondary/80 whitespace-pre-line flex-1"
                dangerouslySetInnerHTML={{
                  __html: service.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                }}
              />
              <Link
                to={service.href}
                className="mt-4 inline-flex items-center gap-1 text-primary font-medium text-sm hover:gap-2 transition-all"
                aria-label={`Mehr erfahren über ${service.title}`}
              >
                Mehr erfahren <ArrowRight size={14} />
              </Link>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {references.map((reference, index) => (
                <div
                  key={index}
                  className="border-l-4 border-primary bg-muted/40 rounded-r-md py-3 px-4"
                >
                  <p className="font-semibold text-secondary text-sm leading-snug">{reference.name}</p>
                  <p className="text-xs text-primary/70 mt-0.5">{reference.sector}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-secondary/60 mt-5 italic">
              … sowie zahlreiche weitere Unternehmen und öffentliche Einrichtungen.
            </p>
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
