
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, ChevronRight } from "lucide-react";
import { trackPhoneClick, trackEmailClick } from "@/lib/tracking";

const allServices = [
  { href: "/dienstleistungen/sabotageschutz", label: "Sabotageschutz Infrastruktur" },
  { href: "/dienstleistungen/gesamtsanierung-brandschutz", label: "Gesamtsanierung Brandschutz" },
  { href: "/dienstleistungen/sicherheitstechnik-tueren", label: "Sicherheitstechnik Türen" },
  { href: "/dienstleistungen/tuerengutachten", label: "Türengutachten" },
  { href: "/dienstleistungen/brandschutzplanung", label: "Brandschutzplanung" },
  { href: "/dienstleistungen/tuerenplanung", label: "Türenplanung" },
  { href: "/dienstleistungen/brandschutzkonzepte", label: "Brandschutzkonzepte" },
  { href: "/dienstleistungen/brandschutzbegehungen", label: "Brandschutzbegehungen" },
  { href: "/dienstleistungen/brandschutzberatung", label: "Brandschutzberatung" },
  { href: "/dienstleistungen/flucht-und-rettungsplaene", label: "Flucht- & Rettungspläne" },
  { href: "/dienstleistungen/feuerwehr-einsatzplaene", label: "Feuerwehr-Einsatzpläne" },
  { href: "/dienstleistungen/brandschutzhelfer-ausbildung", label: "Brandschutzhelfer Ausbildung" },
];

const ServiceSidebar = () => {
  const { pathname } = useLocation();

  return (
    <aside className="w-full lg:w-72 flex-shrink-0">
      {/* Dienstleistungen Navigation */}
      <div className="bg-muted rounded-lg p-5 mb-6">
        <h3 className="text-base font-bold text-secondary mb-4 uppercase tracking-wide">
          Alle Dienstleistungen
        </h3>
        <nav className="flex flex-col gap-1">
          {allServices.map((service) => {
            const isActive = pathname === service.href;
            return (
              <Link
                key={service.href}
                to={service.href}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                  isActive
                    ? "bg-primary text-white font-semibold"
                    : "text-secondary hover:text-primary hover:bg-white"
                }`}
              >
                <ChevronRight size={14} className="flex-shrink-0" />
                {service.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Kontakt CTA */}
      <div className="bg-primary rounded-lg p-5 text-white">
        <h3 className="font-bold text-base mb-2">Kostenlose Beratung</h3>
        <p className="text-white/80 text-sm mb-4">
          Jürgen Arnold berät Sie persönlich – TÜV-zertifiziert, 30 Jahre Erfahrung.
        </p>
        <a
          href="tel:+4971145145212"
          onClick={() => trackPhoneClick("sidebar")}
          className="flex items-center gap-2 text-white hover:text-white/80 transition-colors text-sm font-medium mb-2"
        >
          <Phone size={16} />
          +49 (0) 711 – 45145212
        </a>
        <a
          href="mailto:j.arnold@brandschutz-arnold.de"
          onClick={() => trackEmailClick("sidebar")}
          className="flex items-center gap-2 text-white hover:text-white/80 transition-colors text-sm"
        >
          <Mail size={16} />
          j.arnold@brandschutz-arnold.de
        </a>
      </div>
    </aside>
  );
};

export default ServiceSidebar;
