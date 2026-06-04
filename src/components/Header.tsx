
import { useState } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { trackPhoneClick, trackEmailClick } from "@/lib/tracking";

const serviceLinks = [
  { href: "/dienstleistungen/sabotageschutz", label: "Sabotageschutz Infrastruktur" },
  { href: "/dienstleistungen/gesamtsanierung-brandschutz", label: "Gesamtsanierung Brandschutz" },
  { href: "/dienstleistungen/sicherheitstechnik-tueren", label: "Sicherheitstechnik Türen" },
  { href: "/dienstleistungen/tuerengutachten", label: "Türengutachten" },
  { href: "/dienstleistungen/brandschutzplanung", label: "Brandschutzplanung" },
  { href: "/dienstleistungen/tuerenplanung", label: "Türenplanung" },
  { href: "/dienstleistungen/brandschutzkonzepte", label: "Brandschutzkonzepte" },
  { href: "/dienstleistungen/brandschutzbegehungen", label: "Brandschutzbegehungen" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" aria-label="Arnold Brandschutz Startseite">
              <img
                src="/assets/logo.png"
                alt="Arnold Brandschutz Logo - Experte für Brandschutz und Fluchtwegplanung in Stuttgart und Umgebung"
                className="h-14 lg:h-16"
              />
            </Link>
            <div className="ml-4 hidden md:block">
              <p className="text-primary font-medium italic text-lg">
                „Brandschutz Arnold –<br />Brandschutz sicher"
              </p>
            </div>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center gap-6 text-secondary">
            <a
              href="tel:+4971145145212"
              onClick={() => trackPhoneClick("header")}
              className="flex items-center gap-2 hover:text-primary transition-colors"
              aria-label="Rufen Sie uns an unter +49 (0) 711 – 45145212"
            >
              <Phone size={20} />
              <span>+49 (0) 711 – 45145212</span>
            </a>
            <a
              href="mailto:j.arnold@brandschutz-arnold.de"
              onClick={() => trackEmailClick("header")}
              className="flex items-center gap-2 hover:text-primary transition-colors"
              aria-label="Kontaktieren Sie uns per E-Mail"
            >
              <Mail size={20} />
              <span>j.arnold@brandschutz-arnold.de</span>
            </a>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Hauptnavigation">
            {/* Dienstleistungen Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                onClick={() => scrollToSection("services")}
                className="flex items-center gap-1 text-secondary hover:text-primary font-semibold transition-colors"
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                Dienstleistungen
                <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border py-2 z-50">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block px-4 py-2 text-secondary hover:text-primary hover:bg-muted transition-colors text-sm"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("team")}
              className="text-secondary hover:text-primary transition-colors"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-secondary hover:text-primary transition-colors"
            >
              Kontakt
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-secondary"
            aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t" role="navigation" aria-label="Mobile Navigation">
            <nav className="flex flex-col gap-2">
              {/* Mobile Dienstleistungen Accordion */}
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center justify-between text-secondary hover:text-primary font-semibold transition-colors py-2"
                aria-expanded={isMobileServicesOpen}
              >
                Dienstleistungen
                <ChevronDown size={16} className={`transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {isMobileServicesOpen && (
                <div className="pl-4 flex flex-col gap-1 mb-2">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="text-secondary/80 hover:text-primary transition-colors py-1 text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
              <button
                onClick={() => scrollToSection("team")}
                className="text-secondary hover:text-primary transition-colors py-2 text-left"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-secondary hover:text-primary transition-colors py-2 text-left"
              >
                Kontakt
              </button>
            </nav>
            <div className="flex flex-col gap-4 mt-4 text-secondary border-t pt-4">
              <a
                href="tel:+4971145145212"
                className="flex items-center gap-2 hover:text-primary transition-colors"
                aria-label="Rufen Sie uns an unter +49 (0) 711 – 45145212"
              >
                <Phone size={20} />
                <span>+49 (0) 711 – 45145212</span>
              </a>
              <a
                href="mailto:j.arnold@brandschutz-arnold.de"
                className="flex items-center gap-2 hover:text-primary transition-colors"
                aria-label="Kontaktieren Sie uns per E-Mail"
              >
                <Mail size={20} />
                <span>j.arnold@brandschutz-arnold.de</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
